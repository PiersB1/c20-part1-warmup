"""Collect question/topic references for editorial review, never served by the site."""
import concurrent.futures
import json
from pathlib import Path
import sys
import subprocess
ROOT=Path(__file__).resolve().parent.parent
sys.path.insert(0,str(ROOT/'.work/audio-tools'))
from bs4 import BeautifulSoup
OUT=ROOT/'.work/references'
OUT.mkdir(parents=True,exist_ok=True)
def get(pair):
    book,test=pair
    url=f'https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-{book}-listening-test-{test}'
    content=subprocess.check_output(['curl.exe','--silent','--show-error','--fail','--location',url],timeout=90)
    soup=BeautifulSoup(content,'html.parser')
    for node in soup(['script','style','nav','footer']):node.decompose()
    text=soup.get_text('\n',strip=True)
    (OUT/f'c{book}-t{test}.txt').write_text(text,encoding='utf-8')
    print(book,test,len(text),flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(get,[(b,t) for b in [20,19,18] for t in range(1,5)]))
