"""Generate British speech and real sentence timings for a listening practice.

Requires edge-tts, mutagen, and Node. Run from any directory:
  python scripts/generate-listening-audio.py c20-t1-p1-2
"""
import argparse
import asyncio
import html
import json
from pathlib import Path
import re
import subprocess
import sys

parser = argparse.ArgumentParser()
parser.add_argument('practice_id', nargs='+')
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
const files=[process.argv[1],path.join(directory,'practice-builders.js'),...fs.readdirSync(directory).filter(name=>name.endsWith('.practice.js')).sort().map(name=>path.join(directory,name))];
for(const file of files)vm.runInContext(fs.readFileSync(file,'utf8'),context);
console.log(JSON.stringify(context.window.RRListeningPractices));
"""
library = json.loads(subprocess.check_output(
    ['node', '-e', node_loader, str(root / 'data/listening-practices.js')],
    encoding='utf-8'))


def clean(value):
    return re.sub(r'\s+', ' ', html.unescape(value)).strip().lower()


async def synthesize(text, voice, path, rate='+0%'):
    path.parent.mkdir(parents=True, exist_ok=True)
    for attempt in range(3):
        events = []
        try:
            with path.open('wb') as audio:
                async for event in edge_tts.Communicate(
                    text, voice=voice, rate=rate, boundary='SentenceBoundary'
                ).stream():
                    if event['type'] == 'audio':
                        audio.write(event['data'])
                    elif event['type'] == 'SentenceBoundary':
                        events.append(event)
            return events, MP3(path).info.length
        except Exception:
            if attempt == 2:
                raise
            await asyncio.sleep(1)


async def main():
    timings = {}
    timing_path = root / 'data/audio-timings.js'
    if timing_path.exists():
        content = timing_path.read_text(encoding='utf-8')
        timings = json.loads(content.split('=', 1)[1].strip().rstrip(';'))
    semaphore = asyncio.Semaphore(3)

    async def build(practice_id, kind, index, item):
        if args.only and item['id'] not in args.only:
            return
        if args.skip_existing and (root / item['audio']).exists() and (kind != 'signal' or item['audio'] in timings):
            return
        async with semaphore:
            if kind in ('locator', 'dictation'):
                text = (' '.join(token if isinstance(token, str) else token['text'] for token in item['source'])
                        if kind == 'locator' else item['sentence'].replace('___', item['answer']))
                voice = 'en-GB-SoniaNeural' if index % 2 == 0 else 'en-GB-RyanNeural'
                _, duration = await synthesize(text, voice, root / item['audio'], f'{item.get("rate", 0):+d}%')
                print(practice_id, item['id'], round(duration, 2), flush=True)
            elif kind == 'signal':
                text = ' '.join(item['transcript'])
                voice = 'en-GB-RyanNeural' if index % 2 == 0 else 'en-GB-SoniaNeural'
                rate = 0
                for _ in range(3):
                    events, duration = await synthesize(text, voice, root / item['audio'], f'{rate:+d}%')
                    if 41 <= duration <= 48:
                        break
                    rate = round((1 + rate / 100) * duration / 45 * 100 - 100)
                if not 41 <= duration <= 48:
                    raise RuntimeError(f'{item["id"]} is {duration:.2f} seconds, outside the 41–48 second range')
                cues = []
                for cue in item['cues']:
                    phrase = clean(cue['signal'])
                    boundary = next((event for event in events if clean(event['text']).startswith(phrase)), None)
                    if boundary is None:
                        raise RuntimeError(f'No timestamp for {item["id"]}: {phrase}. Events: {events}')
                    cues.append({'start': round(boundary['offset'] / 10_000_000, 3)})
                timings[item['audio']] = {'duration': round(duration, 3), 'cues': cues, 'voice': voice, 'rate': rate}
                print(practice_id, item['id'], round(duration, 2), cues, flush=True)

    for practice_id in args.practice_id:
        practice = library[practice_id]
        tasks = [build(practice_id, section['type'], index, item)
                 for section in practice['sections'] if section['type'] in ('locator', 'dictation', 'signal')
                 for index, item in enumerate(section['items'])]
        await asyncio.gather(*tasks)
        timing_path.write_text('window.RRSignalTimings = ' + json.dumps(timings, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')


asyncio.run(main())
