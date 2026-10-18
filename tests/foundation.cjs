const assert=require('assert'),fs=require('fs'),path=require('path'),os=require('os'),vm=require('vm'),crypto=require('crypto'),{pathToFileURL}=require('url');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const file of ['data/foundation-library.js','exercise-catalog.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c);
const practices=Object.values(c.RRFoundationPractices);assert.equal(practices.length,4);assert.equal(c.RRExerciseCatalog.filter(p=>p.foundation).length,4);
assert.equal(practices.flatMap(p=>p.coreWords).length,100);
const seen=new Set();
for(const p of practices){
 const s=p.sections[0],words=s.items;assert.equal(words.length,p.coreWords.length);assert.equal(new Set(words.map(t=>t.english)).size,words.length);
 assert.deepEqual(Array.from(s.groups.flat()).sort(),Array.from(words.map(t=>t.id)).sort());
 for(const t of words){assert(t.example!==t.application.replace('___',t.english));assert.equal(t.application.split('___').length,2);assert.equal(p.coreWords.find(w=>w[0]===t.english)[1],t.chinese);assert(t.translation&&t.applicationTranslation);for(const sentence of [t.example,t.application.replace('___',t.english)]){assert(!seen.has(sentence.toLowerCase()),'Repeated learning context: '+sentence);seen.add(sentence.toLowerCase());}}
 const blanks=s.passage.paragraphs.flatMap(p=>[...p.matchAll(/\{\{(.*?)\}\}/g)].map(m=>m[1]));assert([4,5].includes(words.length-blanks.length));assert.equal(new Set(blanks).size,blanks.length);assert.deepEqual(Array.from(words.filter(w=>!blanks.includes(w.english)).map(w=>w.english)).sort(),Array.from(s.omitted).sort());
 const entries=c.RRExerciseCatalog.filter(e=>e.mode===p.mode&&e.book===p.location.book&&e.test===p.location.test&&e.part===p.location.part);assert.equal(entries.length,3);assert.equal(entries[0].id,p.id);
}
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1260,height:920},acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));const home=pathToFileURL(path.join(root,'index.html')).href;
  for(const p of practices){
   const key='rr:foundation:progress:v1:'+p.id,recordKey=p.mode==='reading'?'rr:reading:records:v1':'rr:listening:records:v2';
   await page.goto(new URL(`select.html?mode=${p.mode}&book=${p.location.book}&test=${p.location.test}&part=${p.location.part}`,home).href);assert.equal(await page.locator('.practice').count(),3);assert.match(await page.locator('.practice').first().textContent(),/练习 0/);await page.locator('.practice').first().click();await page.locator('.foundation-intro').waitFor();assert.equal(await page.locator('#check-practice').count(),0);
   await page.getByRole('button',{name:'从头学',exact:true}).click();assert.equal(await page.locator('.foundation-card .feedback:visible').count(),0);
   const first=p.sections[0].items.find(t=>t.id===p.sections[0].groups[0][0]);await page.getByRole('button',{name:first.chinese,exact:true}).click();assert.equal(await page.locator('.foundation-card .feedback:visible').count(),0);await page.getByRole('button',{name:'核对这题',exact:true}).click();assert.equal(await page.locator('.foundation-card .feedback.good:visible').count(),1);assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).filter(r=>r.practiceId===RRPracticeSession.practice.id).length,recordKey),1);
   await page.reload();await page.getByRole('button',{name:'下一题',exact:true}).waitFor();assert.equal(await page.locator('.feedback.good:visible').count(),1);await page.getByRole('button',{name:'下一题',exact:true}).click();
   // Run the actual rendered curriculum, with an error, a hinted final recall and a reversible phrase response.
   const coverage=await page.evaluate(key=>{
    const words=RRPracticeSession.practice.sections[0].items,byId=new Map(words.map(t=>[t.id,t])),kinds=new Set();let wrong=false,hinted=false,undone=false,steps=0;
    const click=text=>{const b=[...document.querySelectorAll('.foundation-card button')].find(b=>b.textContent===text&&!b.hidden);if(!b)throw Error('Missing button '+text);b.click();};
    while(!document.querySelector('.foundation-passage')){
     if(steps++>700)throw Error('Curriculum failed to finish');const state=JSON.parse(localStorage.getItem(key)),task=state.queue[state.cursor],term=byId.get(task.term);kinds.add(task.kind);
     if(task.kind==='chunks'){
      if(!undone){document.querySelector('.chunk-bank [data-chunk-id="0"]').click();document.querySelector('.chunk-response button').click();if(document.querySelector('.chunk-response button'))throw Error('Chunk undo failed');undone=true;}
      term.english.split(' ').forEach((_,i)=>document.querySelector(`.chunk-bank [data-chunk-id="${i}"]`).click());
     }else{
      if(task.kind==='final'&&!hinted){click('看看提示');hinted=true;}
      const answer=task.kind==='apply'||task.reverse||task.kind==='mixed'&&!task.listen?term.english:term.chinese;
      const buttons=[...document.querySelectorAll('.foundation-option')];const picked=!wrong&&task.kind==='apply'?buttons.find(b=>b.dataset.value!==answer):buttons.find(b=>b.dataset.value===answer);if(task.kind==='apply')wrong=true;picked.click();
     }
     click('核对这题');if(!document.querySelector('.foundation-card .feedback:not([hidden])'))throw Error('No immediate feedback');click('下一题');
    }
    return {kinds:[...kinds],steps,wrong,hinted,undone,state:JSON.parse(localStorage.getItem(key))};
   },key);
   for(const kind of ['learn','apply','chunks','recall','mixed','final'])assert(coverage.kinds.includes(kind),kind);
   assert(coverage.wrong&&coverage.hinted&&coverage.undone);assert(coverage.state.queue.some(t=>t.retry));assert(coverage.state.attempts.filter(a=>a.stage==='final').length>p.coreWords.length);
   assert.equal(Object.values(coverage.state.finalIndependent).filter(Boolean).length,p.coreWords.length);assert.equal(await page.locator('.word-bank .bank-choice').count(),p.coreWords.length);
   const section=p.sections[0],targets=section.passage.paragraphs.flatMap(x=>[...x.matchAll(/\{\{(.*?)\}\}/g)].map(m=>section.items.find(t=>t.english===m[1])));
   await page.setViewportSize({width:1260,height:3000});
   const choice=page.locator(`[data-choice-id="${targets[0].id}"]`),slot=page.locator('[data-slot-id="gap0"]');await choice.dragTo(slot);assert.equal(await slot.textContent(),targets[0].english);await slot.dragTo(page.locator('.word-bank'));assert(await choice.isVisible());
   await choice.click();await slot.click();await slot.click();assert(await choice.isVisible());
   // Invalid foreign drops preserve assignments; moving a filled choice frees the previous slot.
   await choice.dragTo(slot);assert.equal(await slot.textContent(),targets[0].english,'Bank-to-slot placement');await page.locator('[data-slot-id="gap0"]').dragTo(page.locator('[data-slot-id="gap1"]'));assert.equal(await page.locator('[data-slot-id="gap0"]').textContent(),'拖入');assert.equal(await page.locator('[data-slot-id="gap1"]').textContent(),targets[0].english,'Slot-to-slot placement');
   await page.locator('[data-slot-id="gap1"]').evaluate(node=>{const data=new DataTransfer();data.setData('text/plain','foreign|w2');node.dispatchEvent(new DragEvent('drop',{bubbles:true,dataTransfer:data}));});assert.equal(await page.locator('[data-slot-id="gap1"]').textContent(),targets[0].english);
   await page.locator('[data-slot-id="gap1"]').click();
   await page.evaluate(()=>{
    const section=RRPracticeSession.practice.sections[0],terms=section.items;let n=0;
    section.passage.paragraphs.forEach(p=>{for(const m of p.matchAll(/\{\{(.*?)\}\}/g)){const t=terms.find(t=>t.english===m[1]);document.querySelector(`[data-choice-id="${t.id}"]`).click();document.querySelector(`[data-slot-id="gap${n++}"]`).click();[...document.querySelectorAll('.passage-checker button')].find(b=>b.textContent==='核对这一空').click();}});
   });
   if(p.id==='c21-r-t1-p1-0')await page.evaluate(()=>{
    const s=RRPracticeSession.practice.sections[0],answers=s.passage.paragraphs.flatMap(x=>[...x.matchAll(/\{\{(.*?)\}\}/g)].map(m=>m[1]));
    const secure=answers.indexOf('secure'),acquire=answers.indexOf('acquire');
    document.querySelector(`[data-slot-id="gap${secure}"]`).click();document.querySelector(`[data-slot-id="gap${acquire}"]`).click();
    for(const [word,gap]of [['acquire',secure],['secure',acquire]]){const term=s.items.find(t=>t.english===word);document.querySelector(`[data-choice-id="${term.id}"]`).click();document.querySelector(`[data-slot-id="gap${gap}"]`).click();document.querySelector('.passage-checker button').click();}
   });
   assert.equal(await page.locator('.slot-right').count(),targets.length);assert.equal(await page.locator('.word-bank .bank-choice:visible').count(),section.omitted.length);assert.equal(await page.locator('.passage-checker button').count(),1);
   await page.reload();await page.locator('.foundation-passage').waitFor();assert.equal(await page.locator('.slot-right').count(),targets.length);
   if(p.id==='c21-r-t1-p1-0'){
    await page.locator('.foundation-passage').screenshot({path:path.join(root,'.work/foundation-passage-desktop.png')});await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.locator('.foundation-passage').screenshot({path:path.join(root,'.work/foundation-passage-mobile.png')});await page.setViewportSize({width:1260,height:920});
   }
   await page.getByRole('button',{name:'完成学习，查看回顾',exact:true}).click();assert.match(await page.locator('.foundation-summary').textContent(),new RegExp('独立答对 '+p.coreWords.length+' 项'));assert.equal(await page.locator('.foundation-summary a').getAttribute('href'),`${p.mode==='reading'?'reading':'listening'}.html?id=${p.id.replace(/-0$/,'-1')}`);
   await page.locator('#open-records').click();const download=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();const record=JSON.parse(fs.readFileSync(await(await download).path(),'utf8'));assert.equal(record.practiceId,p.id);assert.equal(record.mode,p.mode);assert.equal(record.sections[0].phase,'done');assert(record.sections[0].details.every(d=>d.attempts.length));assert(record.sections[0].details.some(d=>d.attempts.some(a=>a.hinted)));assert.equal(record.sections[0].total,p.coreWords.length+targets.length);
   await page.locator('[data-close="records-dialog"]').click();
   // Starting again offers an independent pretest; passing it skips teaching, not the final coverage.
   page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'重新开始',exact:true}).click();await page.getByRole('button',{name:'先测一下，跳过已会的词',exact:true}).click();
   await page.evaluate(key=>{const words=RRPracticeSession.practice.sections[0].items;for(let i=0;i<words.length;i++){const state=JSON.parse(localStorage.getItem(key)),term=words.find(t=>t.id===state.queue[state.cursor].term);[...document.querySelectorAll('.foundation-option')].find(b=>b.dataset.value===term.chinese).click();[...document.querySelectorAll('.foundation-card button')].find(b=>b.textContent==='核对这题').click();[...document.querySelectorAll('.foundation-card button')].find(b=>b.textContent==='下一题').click();}},key);
   const pretested=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);assert.equal(pretested.known.length,p.coreWords.length);assert(pretested.queue.every(t=>t.kind==='final'));console.log(p.id+': curriculum, hints/retries, chunks, progress resume, drag return/move, per-gap checks, records/export, pretest passed.');
  }
  assert.deepEqual(errors,[]);
  const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/foundation-audio-manifest.json'),'utf8'));assert.equal(manifest.length,100);
  for(const term of practices.flatMap(p=>p.sections[0].items)){const row=manifest.find(r=>r.audio===term.audio);assert(row);assert.equal(row.voice,term.voice);assert.equal(row.text,term.english.replace('one’s',"one's"));assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,row.audio))).digest('hex'),row.sha256);}
  await page.goto(new URL('foundation.html?id=c20-t2-p1-0',home).href);
  const duration=await page.evaluate(src=>new Promise((resolve,reject)=>{const audio=new Audio(src);audio.addEventListener('loadedmetadata',()=>resolve(audio.duration));audio.addEventListener('error',()=>reject(Error('MP3 decode failed')));}),practices[0].sections[0].items[0].audio);assert(duration>0.2);
  await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.locator('.foundation-card').screenshot({path:path.join(root,'.work/foundation-word-mobile.png')});
  console.log('Foundation: all 100 core terms, four complete flows, original learning/application contexts, 82 cloze blanks, catalog placement, 100 audio hashes and native decoding passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
