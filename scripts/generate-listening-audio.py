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
args = parser.parse_args()
if args.tools_path:
    sys.path.insert(0, args.tools_path)
import edge_tts
from mutagen.mp3 import MP3

root = Path(__file__).resolve().parent.parent
node_loader = """
const fs=require('fs'),vm=require('vm'),path=require('path');
const context={};context.window=context;vm.createContext(context);
const directory=path.dirname(process.argv[1]);
const files=[process.argv[1],path.join(directory,'practice-builders.js'),path.join(directory,'preparation-builders.js'),...fs.readdirSync(directory).filter(name=>name.endsWith('.practice.js')).sort().map(name=>path.join(directory,name))];
for(const file of files)vm.runInContext(fs.readFileSync(file,'utf8'),context);
console.log(JSON.stringify({practices:context.window.RRListeningPractices,preparedIds:context.window.RRPreparedTopics.flatMap(topic=>[1,2].map(n=>`c${topic.book}-t${topic.test}-p${topic.part}-${n}`))}));
"""
loaded = json.loads(subprocess.check_output(
    ['node', '-e', node_loader, str(root / 'data/listening-practices.js')],
    encoding='utf-8'))
library=loaded['practices']


def clean(value):
    return re.sub(r'\s+', ' ', html.unescape(value)).strip().lower()


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
        subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(combined),'-codec:a','libmp3lame','-b:a','64k',str(pending)],check=True,capture_output=True)
        pending.replace(output)
    return events,MP3(output).info.length


async def main():
    timings = {}
    timing_path = root / 'data/audio-timings.js'
    if timing_path.exists():
        content = timing_path.read_text(encoding='utf-8')
        timings = json.loads(content.split('=', 1)[1].strip().rstrip(';'))
    semaphore = asyncio.Semaphore(args.concurrency)

    async def build(practice_id, kind, index, item):
        if args.only and item['id'] not in args.only:
            return
        signature=hashlib.sha256(json.dumps({key:item.get(key) for key in ('transcript','speakers','cues')},sort_keys=True).encode()).hexdigest()
        if args.skip_existing and (root / item['audio']).exists() and (kind not in ('signal','route') or timings.get(item['audio'],{}).get('textHash')==signature):
            return
        async with semaphore:
            if kind in ('locator', 'dictation'):
                text = (' '.join(token if isinstance(token, str) else token['text'] for token in item['source'])
                        if kind == 'locator' else item['sentence'].replace('___', item['answer']))
                voice = 'en-GB-SoniaNeural' if index % 2 == 0 else 'en-GB-RyanNeural'
                _, duration = await synthesize(text, voice, root / item['audio'], f'{item.get("rate", 0):+d}%')
                print(practice_id, item['id'], round(duration, 2), flush=True)
            elif kind in ('signal', 'route'):
                text = ' '.join(item['transcript'])
                voice = 'en-GB-RyanNeural' if index % 2 == 0 else 'en-GB-SoniaNeural'
                rate = -15 if item.get('speakers') else 0
                for _ in range(3):
                    if item.get('speakers'):
                        events, duration = await dialogue(item, root / item['audio'], rate)
                    else:
                        events, duration = await synthesize(text, voice, root / item['audio'], f'{rate:+d}%')
                    if 41 <= duration <= 48:
                        break
                    rate = round((1 + rate / 100) * duration / 45 * 100 - 100)
                if not 41 <= duration <= 48:
                    raise RuntimeError(f'{item["id"]} is {duration:.2f} seconds, outside the 41–48 second range')
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
                timing_path.write_text('window.RRSignalTimings = ' + json.dumps(timings, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
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
    await asyncio.gather(*tasks)
    timing_path.write_text('window.RRSignalTimings = ' + json.dumps(timings, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')


asyncio.run(main())
