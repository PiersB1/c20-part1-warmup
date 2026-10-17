"""Make comparable British voice previews without changing exercise audio."""
import asyncio
from pathlib import Path
import sys
root=Path(__file__).resolve().parent.parent
sys.path.insert(0,str(root/'.work/audio-tools'))
import edge_tts
text="The café beside the station is convenient, but I'd recommend the smaller restaurant for its relaxed atmosphere. Lunch is served in the courtyard when the weather is fine. If you're bringing a group, it's worth booking ahead, as the quieter tables tend to fill up first."
async def main():
    target=root/'.work/voice-previews'
    target.mkdir(parents=True,exist_ok=True)
    for voice in ['en-GB-SoniaNeural','en-GB-LibbyNeural','en-GB-RyanNeural']:
        path=target/f'{voice}.mp3'
        await edge_tts.Communicate(text,voice,rate='+0%').save(str(path))
        print(path,flush=True)
asyncio.run(main())
