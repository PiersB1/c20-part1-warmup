"""Check the expanded library's MP3 files and source/timing consistency."""
import argparse, hashlib, json
from pathlib import Path
import subprocess,sys
parser=argparse.ArgumentParser();parser.add_argument('--complete',action='store_true');args=parser.parse_args()
root=Path(__file__).resolve().parent.parent
sys.path.insert(0,str(root/'.work/audio-tools'))
from mutagen.mp3 import MP3
loader="""
const fs=require('fs'),vm=require('vm'),path=require('path'),directory=process.argv[1],c={};c.window=c;vm.createContext(c);
for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(directory).filter(n=>n.endsWith('.practice.js')).sort()])vm.runInContext(fs.readFileSync(path.join(directory,name),'utf8'),c);
console.log(JSON.stringify({practices:c.RRListeningPractices,topics:c.RRPreparedTopics}));
"""
data=json.loads(subprocess.check_output(['node','-e',loader,str(root/'data')],encoding='utf-8'))
timings=json.loads((root/'data/audio-timings.js').read_text(encoding='utf-8').split('=',1)[1].strip().rstrip(';'))
missing=[];stale=[];invalid=[];total=0
for topic in data['topics']:
 for number in [1,2]:
  practice=data['practices'][f'c{topic["book"]}-t{topic["test"]}-p{topic["part"]}-{number}']
  for section in practice['sections']:
   for item in section['items']:
    if not item.get('audio'):continue
    total+=1;path=root/item['audio']
    if not path.exists():missing.append(item['audio']);continue
    try:
     duration=MP3(path).info.length
     if duration<1:invalid.append(item['audio'])
    except Exception:
     invalid.append(item['audio']);continue
    if section['type'] in ['signal','route']:
     signature=hashlib.sha256(json.dumps({key:item.get(key) for key in ('transcript','speakers','cues')},sort_keys=True).encode()).hexdigest()
     timing=timings.get(item['audio'],{})
     if timing.get('textHash')!=signature:stale.append(item['audio']);continue
     if not 41<=duration<=48 or abs(duration-timing['duration'])>.15:invalid.append(item['audio'])
     for cue in timing.get('cues',[]):
      if not 0<=cue['start']<duration:invalid.append(item['audio'])
print(json.dumps({'total':total,'present':total-len(missing),'missing':len(missing),'staleTimings':len(stale),'invalid':invalid,'missingExamples':missing[:5],'staleExamples':stale[:5]},ensure_ascii=True))
if args.complete and (missing or stale or invalid):sys.exit(1)
