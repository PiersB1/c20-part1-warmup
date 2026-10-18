"""Generate British speech and real sentence timings for a listening practice.

Requires edge-tts, mutagen, and Node. Run from any directory:
  python scripts/generate-listening-audio.py c20-t1-p1-2
"""
import argparse
import asyncio
import html
import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import wave

parser = argparse.ArgumentParser()
parser.add_argument('practice_id', nargs='*')
parser.add_argument('--all-prepared', action='store_true')
parser.add_argument('--concurrency', type=int, default=3)
parser.add_argument('--tools-path', default='')
parser.add_argument('--only', nargs='*', default=[])
parser.add_argument('--skip-existing', action='store_true')
parser.add_argument('--editorial', action='store_true', help='Only revised locator, signal and final two dictation recordings; retain map and route audio.')
parser.add_argument('--kinds', nargs='+', default=['dictation','locator','signal','route'])
parser.add_argument('--preserve-maps', action='store_true')
parser.add_argument('--natural-long', action='store_true', default=True, help='Normal speech rate is the default for long recordings; accept 40–55 seconds.')
parser.add_argument('--output-prefix', default='', help='Stage recordings and their metadata beneath this workspace directory.')
args = parser.parse_args()
if args.tools_path:
    sys.path.insert(0, args.tools_path)
import edge_tts
from mutagen.mp3 import MP3

root = Path(__file__).resolve().parent.parent
media_root=(root/args.output_prefix).resolve() if args.output_prefix else root
if not media_root.is_relative_to(root):
    raise ValueError('Audio output must remain inside the project')
(media_root/'data').mkdir(parents=True,exist_ok=True)
node_loader = r"""
const fs=require('fs'),vm=require('vm'),path=require('path');
const context={};context.window=context;vm.createContext(context);
const directory=path.dirname(process.argv[1]);
const books=JSON.parse(process.argv[2]||'null');
const files=[process.argv[1],path.join(directory,'practice-builders.js'),path.join(directory,'preparation-builders.js'),path.join(directory,'editorial-multi.js'),path.join(directory,'editorial-quiz-context.js'),path.join(directory,'editorial-signal-context.js'),path.join(directory,'editorial-revisions.js'),...fs.readdirSync(directory).filter(name=>name.endsWith('.practice.js')&&(!books||!/^authored-c\d+-/.test(name)||books.includes(Number(name.match(/^authored-c(\d+)-/)[1])))).sort().map(name=>path.join(directory,name))];
for(const file of files)vm.runInContext(fs.readFileSync(file,'utf8'),context);
console.log(JSON.stringify({practices:context.window.RRListeningPractices,preparedIds:context.window.RRPreparedTopics.flatMap(topic=>[1,2].map(n=>`c${topic.book}-t${topic.test}-p${topic.part}-${n}`))}));
"""
requested_books = sorted({int(re.match(r'^c(\d+)-', key).group(1)) for key in args.practice_id}) if args.practice_id and not args.all_prepared else None
loaded = json.loads(subprocess.check_output(
    ['node', '-e', node_loader, str(root / 'data/listening-practices.js'), json.dumps(requested_books)],
    encoding='utf-8'))
library=loaded['practices']


def clean(value):
    return re.sub(r'\s+', ' ', html.unescape(value)).strip().lower()


def write_atomic(path, text):
    pending=path.with_suffix(path.suffix+'.pending')
    pending.write_text(text,encoding='utf-8')
    pending.replace(path)


def short_speech(kind, index, item):
    text=(' '.join(t if isinstance(t,str) else t['text'] for t in item['source'])
          if kind=='locator' else item['sentence'].replace('___',item['answer']))
    return (re.sub(r'\s+([,.;:?!])',r'\1',text),
            'en-GB-LibbyNeural' if index%2==0 else 'en-GB-RyanNeural',
            f'{item.get("rate",0):+d}%')


async def synthesize_raw(text, voice, path, rate='+0%'):
    path.parent.mkdir(parents=True, exist_ok=True)
    pending=path.with_suffix(path.suffix+'.partial')
    for attempt in range(5):
        events = []
        try:
            with pending.open('wb') as audio:
                async for event in edge_tts.Communicate(
                    text, voice=voice, rate=rate, boundary='SentenceBoundary'
                ).stream():
                    if event['type'] == 'audio':
                        audio.write(event['data'])
                    elif event['type'] == 'SentenceBoundary':
                        events.append(event)
            duration=MP3(pending).info.length
            pending.replace(path)
            return events, duration
        except Exception:
            if attempt == 4:
                raise
            await asyncio.sleep(2 ** attempt)


synthesis_tasks={}
async def synthesize(text, voice, path, rate='+0%'):
    key=hashlib.sha256(json.dumps([text,voice,rate]).encode()).hexdigest()
    cache=root/'.work/tts-cache';cache.mkdir(parents=True,exist_ok=True)
    stored=cache/f'{key}.mp3';meta=cache/f'{key}.json'
    async def generate():
        if stored.exists() and meta.exists():
            return json.loads(meta.read_text(encoding='utf-8')),MP3(stored).info.length
        events,duration=await synthesize_raw(text,voice,stored,rate)
        meta.write_text(json.dumps(events),encoding='utf-8')
        return events,duration
    if key not in synthesis_tasks:
        synthesis_tasks[key]=asyncio.create_task(generate())
    events,duration=await synthesis_tasks[key]
    path.parent.mkdir(parents=True,exist_ok=True)
    pending=path.with_suffix(path.suffix+'.partial')
    shutil.copyfile(stored,pending);pending.replace(path)
    return events,duration


async def dialogue(item, output, rate):
    """Join separately voiced turns; offsets come from decoded PCM frame counts."""
    output.parent.mkdir(parents=True, exist_ok=True)
    events, frames, elapsed = [], [], 0.0
    work=root/'.work'
    work.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(dir=work,prefix='dialogue-') as directory:
        directory=Path(directory)
        for index,(text,voice) in enumerate(zip(item['transcript'],item['speakers'])):
            part=directory/f'{index}.mp3'
            boundaries,_=await synthesize(text,voice,part,f'{rate:+d}%')
            pcm=directory/f'{index}.wav'
            subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(part),'-ar','24000','-ac','1',str(pcm)],check=True,capture_output=True)
            with wave.open(str(pcm),'rb') as decoded:
                count=decoded.getnframes()
                frames.append(decoded.readframes(count))
                for event in boundaries:
                    events.append({**event,'offset':round(elapsed*10_000_000)+event['offset']})
                elapsed+=count/24000
            # A short conversational gap, with a measured contribution to cue offsets.
            frames.append(bytes(24000*2//5));elapsed+=0.2
        combined=directory/'combined.wav'
        with wave.open(str(combined),'wb') as audio:
            audio.setnchannels(1);audio.setsampwidth(2);audio.setframerate(24000);audio.writeframes(b''.join(frames))
        pending=output.with_name(output.stem+'.pending.mp3')
        subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(combined),'-codec:a','libmp3lame','-b:a','128k',str(pending)],check=True,capture_output=True)
        pending.replace(output)
    return events,MP3(output).info.length


async def main():
    timings = {}
    manifest_path=media_root/'data/speech-manifest.json'
    manifest=json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {}
    timing_path = media_root / 'data/audio-timings.js'
    if timing_path.exists():
        content = timing_path.read_text(encoding='utf-8')
        timings = json.loads(content.split('=', 1)[1].strip().rstrip(';'))
    semaphore = asyncio.Semaphore(args.concurrency)

    async def build(practice_id, kind, index, item):
        if kind not in args.kinds:
            return
        if args.preserve_maps and (kind=='route' or (kind=='locator' and re.search('地图|平面图',item.get('format','')))):
            return
        if args.editorial:
            if library[practice_id].get('revision') != '2026-10-editorial':
                return
            if kind == 'route' or (kind == 'dictation' and index < 10 and not item.get('editorialChanged')):
                return
            if kind == 'locator' and re.search('地图|平面图', item.get('format', '')):
                return
        if args.only and item['id'] not in args.only:
            return
        signature=hashlib.sha256(json.dumps({key:item.get(key) for key in ('transcript','speakers','cues')},sort_keys=True).encode()).hexdigest()
        if args.skip_existing and (media_root/item['audio']).exists():
            saved=manifest.get(item['audio'],{})
            same_file=saved.get('audioHash')==hashlib.sha256((media_root/item['audio']).read_bytes()).hexdigest()
            if kind in ('locator','dictation'):
                text,voice,rate=short_speech(kind,index,item)
                if same_file and saved.get('textHash')==hashlib.sha256(text.encode()).hexdigest() and saved.get('voice')==voice and saved.get('rate')==rate:
                    return
            elif same_file and timings.get(item['audio'],{}).get('textHash')==signature and saved.get('voice')==('en-GB-RyanNeural' if index%2==0 else 'en-GB-LibbyNeural') and saved.get('rate')==0:
                return
        async with semaphore:
            if kind in ('locator', 'dictation'):
                text,voice,rate=short_speech(kind,index,item)
                _, duration = await synthesize(text, voice, media_root / item['audio'], rate)
                manifest[item['audio']]={'voice':voice,'rate':rate,'duration':round(duration,3),'textHash':hashlib.sha256(text.encode()).hexdigest(),'audioHash':hashlib.sha256((media_root/item['audio']).read_bytes()).hexdigest()}
                write_atomic(manifest_path,json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
                print(practice_id, item['id'], round(duration, 2), flush=True)
            elif kind in ('signal', 'route'):
                text = ' '.join(item['transcript'])
                voice = 'en-GB-RyanNeural' if index % 2 == 0 else 'en-GB-LibbyNeural'
                rate=0
                if item.get('speakers'):
                    events,duration=await dialogue(item,media_root/item['audio'],rate)
                else:
                    events,duration=await synthesize(text,voice,media_root/item['audio'],'+0%')
                if not 40<=duration<=55:
                    raise RuntimeError(f'{item["id"]} natural speech is {duration:.2f} seconds; revise text instead of forcing speed')
                cues = []
                for cue in item.get('cues', []):
                    phrase = clean(cue['signal'])
                    boundary = next((event for event in events if clean(event['text']).startswith(phrase)), None)
                    if boundary is None:
                        raise RuntimeError(f'No timestamp for {item["id"]}: {phrase}. Events: {events}')
                    cues.append({'start': round(boundary['offset'] / 10_000_000, 3)})
                timings[item['audio']] = {'duration': round(duration, 3), 'cues': cues, 'voice': voice, 'rate': rate, 'textHash': signature}
                if item.get('speakers'):
                    timings[item['audio']]['voices'] = sorted(set(item['speakers']))
                manifest[item['audio']]={**timings[item['audio']],'audioHash':hashlib.sha256((media_root/item['audio']).read_bytes()).hexdigest()}
                write_atomic(manifest_path,json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
                write_atomic(timing_path,'window.RRSignalTimings = '+json.dumps(timings,ensure_ascii=False,indent=2)+';\n')
                print(practice_id, item['id'], round(duration, 2), cues, flush=True)

    practice_ids=args.practice_id
    if args.all_prepared:
        practice_ids=loaded['preparedIds']
    if not practice_ids:
        raise ValueError('Specify practice IDs or --all-prepared')
    tasks=[]
    for practice_id in practice_ids:
        practice = library[practice_id]
        tasks.extend(build(practice_id, section['type'], index, item)
                 for section in practice['sections'] if section['type'] in ('locator', 'dictation', 'signal', 'route')
                 for index, item in enumerate(section['items']))
    results=await asyncio.gather(*tasks,return_exceptions=True)
    write_atomic(timing_path,'window.RRSignalTimings = '+json.dumps(timings,ensure_ascii=False,indent=2)+';\n')
    errors=[str(result) for result in results if isinstance(result,BaseException)]
    if errors:
        raise RuntimeError('\n'.join(errors))


asyncio.run(main())
