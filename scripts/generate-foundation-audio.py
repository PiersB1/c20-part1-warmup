"""Generate the foundation word/phrase recordings; preserve all existing exercise audio."""
import asyncio, hashlib, json, subprocess, sys
from pathlib import Path
root=Path(__file__).resolve().parent.parent
sys.path.insert(0,str(root/'.work/audio-tools'))
import edge_tts
from mutagen.mp3 import MP3
loader="const fs=require('fs'),vm=require('vm');let c={};c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),c);console.log(JSON.stringify(Object.values(c.RRFoundationPractices).flatMap(p=>p.sections[0].items)));"
terms=json.loads(subprocess.check_output(['node','-e',loader,str(root/'data/foundation-library.js')],encoding='utf-8'))
manifest_path=root/'data/foundation-audio-manifest.json'
previous=json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else []
previous={item['audio']:item for item in previous}
semaphore=asyncio.Semaphore(3)
def save_manifest():
    rows=[previous[t['audio']] for t in terms if t['audio'] in previous]
    pending=manifest_path.with_suffix('.json.pending')
    pending.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    pending.replace(manifest_path)
async def record(term):
    path=root/term['audio'];path.parent.mkdir(parents=True,exist_ok=True)
    text=term['english'].replace('one’s','one\'s')
    old=previous.get(term['audio'])
    if old and old['text']==text and old['voice']==term['voice'] and path.exists() and old['sha256']==hashlib.sha256(path.read_bytes()).hexdigest():
        return old
    async with semaphore:
        for attempt in range(4):
            try:
                pending=path.with_suffix('.partial')
                await asyncio.wait_for(edge_tts.Communicate(text,term['voice'],rate='+0%').save(str(pending)),timeout=25)
                duration=MP3(pending).info.length
                if not 0.2<duration<12:raise ValueError('Unexpected duration')
                pending.replace(path)
                print(term['audio'],flush=True)
                row={'audio':term['audio'],'text':text,'voice':term['voice'],'rate':'+0%','duration':duration,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()}
                previous[term['audio']]=row
                save_manifest()
                return row
            except Exception as error:
                print(f"Retry {attempt+1}: {term['audio']} ({type(error).__name__})",flush=True)
                if attempt==3:raise
                await asyncio.sleep(2**attempt)
async def main():
    results=await asyncio.gather(*(record(t) for t in terms))
    manifest_path.write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(f'Validated {len(results)} foundation recordings.',flush=True)
asyncio.run(main())
