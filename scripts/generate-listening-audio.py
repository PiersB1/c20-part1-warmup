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
parser.add_argument('practice_id')
parser.add_argument('--tools-path', default='')
parser.add_argument('--only', nargs='*', default=[])
args = parser.parse_args()
if args.tools_path:
    sys.path.insert(0, args.tools_path)
import edge_tts
from mutagen.mp3 import MP3

root = Path(__file__).resolve().parent.parent
node_loader = """
const fs=require('fs'),vm=require('vm');
const context={window:{}};
vm.runInNewContext(fs.readFileSync(process.argv[1],'utf8'),context);
console.log(JSON.stringify(context.window.RRListeningPractices));
"""
library = json.loads(subprocess.check_output(
    ['node', '-e', node_loader, str(root / 'data/listening-practices.js')],
    encoding='utf-8'))
practice = library[args.practice_id]


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
    for section in practice['sections']:
        for index, item in enumerate(section['items']):
            if args.only and item['id'] not in args.only:
                continue
            if section['type'] == 'locator':
                text = ' '.join(token if isinstance(token, str) else token['text'] for token in item['source'])
                voice = 'en-GB-SoniaNeural' if index % 2 == 0 else 'en-GB-RyanNeural'
                _, duration = await synthesize(text, voice, root / item['audio'])
                print(item['id'], round(duration, 2), flush=True)
            elif section['type'] == 'signal':
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
                print(item['id'], round(duration, 2), cues, flush=True)
    timing_path.write_text('window.RRSignalTimings = ' + json.dumps(timings, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')


asyncio.run(main())
