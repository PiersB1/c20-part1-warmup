"""Validate staged signal recordings, then replace their active files and timings."""
import argparse,hashlib,json,shutil,subprocess
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('directory');args=parser.parse_args()
root=Path(__file__).resolve().parent.parent
stage=(root/args.directory).resolve()
if stage==root or not stage.is_relative_to(root):raise ValueError('Staging must be inside this project')
loader="const c=require('./tests/load-library.cjs')();console.log(JSON.stringify(Object.values(c.RRListeningPractices).flatMap(p=>p.sections.filter(s=>s.type==='signal').flatMap(s=>s.items))));"
items=json.loads(subprocess.check_output(['node','-e',loader],cwd=root,encoding='utf-8'))
read_timings=lambda p:json.loads(p.read_text(encoding='utf-8').split('=',1)[1].strip().rstrip(';'))
staged=read_timings(stage/'data/audio-timings.js')
manifest=json.loads((stage/'data/speech-manifest.json').read_text(encoding='utf-8'))
expected={i['audio'] for i in items}
assert set(staged)==set(manifest)==expected,(len(staged),len(manifest),len(expected))
for item in items:
    audio=item['audio'];path=(stage/audio).resolve()
    assert path.is_relative_to(stage)
    signature=hashlib.sha256(json.dumps({k:item.get(k) for k in ('transcript','speakers','cues')},sort_keys=True).encode()).hexdigest()
    meta=staged[audio]
    assert meta['textHash']==signature,audio+' stale text'
    assert manifest[audio]['audioHash']==hashlib.sha256(path.read_bytes()).hexdigest(),audio+' stale file'
    assert meta['rate']==0 and 40<=meta['duration']<=55,audio+' speech rate/duration'
    assert len(meta['cues'])==3 and all(0<=c['start']<meta['duration'] for c in meta['cues']),audio+' cue times'
timing_path=root/'data/audio-timings.js';active=read_timings(timing_path)
manifest_path=root/'data/speech-manifest.json';active_manifest=json.loads(manifest_path.read_text(encoding='utf-8'))
assert len(active_manifest)==1041,'Wait until the short-recording queue has finished'
for audio in sorted(expected):
    target=(root/audio).resolve();assert target.is_relative_to(root/'audio')
    pending=target.with_suffix('.pending.mp3')
    shutil.copyfile(stage/audio,pending);pending.replace(target)
active.update(staged);active_manifest.update(manifest)
for path,text in [(timing_path,'window.RRSignalTimings = '+json.dumps(active,ensure_ascii=False,indent=2)+';\n'),(manifest_path,json.dumps(active_manifest,ensure_ascii=False,indent=2)+'\n')]:
    pending=path.with_suffix('.pending');pending.write_text(text,encoding='utf-8');pending.replace(path)
print(f'Replaced {len(expected)} staged signal recordings and their actual timings; speech manifest now has {len(active_manifest)} recordings.')
