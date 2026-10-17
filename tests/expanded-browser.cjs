const fs=require('fs'),path=require('path'),os=require('os'),assert=require('assert'),vm=require('vm'),{pathToFileURL}=require('url');
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const root=path.resolve(__dirname,'..'),context={};context.window=context;vm.createContext(context);
 for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort(),'audio-timings.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),context);
 const ids=context.RRPreparedTopics.flatMap(t=>[1,2].map(n=>`c${t.book}-t${t.test}-p${t.part}-${n}`));
 const ready=id=>context.RRListeningPractices[id].sections.every(s=>s.items.every(item=>!item.audio||(fs.existsSync(path.join(root,item.audio))&&(!['signal','route'].includes(s.type)||context.RRSignalTimings[item.audio]))));
 const selected=process.argv.includes('--ready')?ids.filter(ready):ids;
 if(!process.argv.includes('--ready'))assert(ids.every(ready),'All recordings must exist before the full acceptance run');
 const browser=await chromium.launch({channel:'msedge',headless:true}),page=await browser.newPage({acceptDownloads:true,viewport:{width:1240,height:900}}),errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>{
  // Exercise interaction is checked independently from the native audio decoding gate.
  window.__qaAudio=[];window.Audio=class extends EventTarget{
   constructor(src){super();this.src=new URL(src,location.href).href;this.paused=true;this.currentTime=0;this.duration=NaN;this.ended=false;__qaAudio.push(this);}
   play(){this.paused=false;this.dispatchEvent(new Event('play'));return Promise.resolve();}
   pause(){this.paused=true;this.dispatchEvent(new Event('pause'));}
  };
 });
 const home=pathToFileURL(path.join(root,'index.html')).href;
 await page.goto(home);assert.equal(await page.locator('a.available').count(),96);
 for(const id of selected){
  await page.goto(new URL(`listening.html?id=${id}`,home).href);await page.locator('#check-practice').waitFor();
  assert.equal(await page.locator('#check-practice').count(),1);
  await page.evaluate(async()=>{
   const practice=RRPracticeSession.practice;
   if(practice.id.endsWith('-1')){
    practice.sections[0].items.forEach((item,index)=>{const card=document.querySelectorAll('.quiz-card')[index];if(item.type==='cloze')card.querySelector('input').value=item.answer;else{const answers=Array.isArray(item.answer)?item.answer:[item.answer];card.querySelectorAll('input').forEach(input=>{if(answers.includes(input.value))input.click();});}});
    practice.sections[1].items.forEach((item,index)=>document.querySelectorAll('.dictation-card')[index].querySelector('input').value=item.answer);
   }else{
    document.querySelectorAll('.reveal-source').forEach(button=>button.click());await Promise.resolve();await Promise.resolve();
    practice.sections[0].items.forEach((item,index)=>['question','source'].forEach((field,lineIndex)=>{
     const buttons=document.querySelectorAll('.locator-card')[index].querySelectorAll('.token-line')[lineIndex].querySelectorAll('.token');
     item[field].filter(t=>!(typeof t==='string'?t:t.text).includes('___')).forEach((token,i)=>{if(token.key)buttons[i].click();});
    }));
    practice.sections[1].items.forEach(item=>item.segments.filter(s=>typeof s!=='string').forEach(slot=>{document.querySelector(`[data-choice-id="${slot.answer}"]`).click();document.querySelector(`[data-slot-id="${slot.id}"]`).click();}));
    for(const [index,item] of practice.sections[2].items.entries()){
     const card=document.querySelectorAll('.signal-card')[index];card.querySelector('.audio-controls button').click();await Promise.resolve();
     const audio=__qaAudio.find(a=>a.src.endsWith(item.audio)),mark=card.querySelector('.mark-button');RRSignalTimings[item.audio].cues.forEach(cue=>{audio.currentTime=cue.start;mark.click();});
    }
    const route=practice.sections.find(s=>s.type==='route')?.items[0];
    if(route){const nodes=new Map(route.map.nodes.map(n=>[n.id,n]));route.expectedPath.slice(1).forEach((id,i)=>{const a=nodes.get(route.expectedPath[i]),b=nodes.get(id),direction=b.x>a.x?'east':b.x<a.x?'west':b.y>a.y?'south':'north';document.querySelector(`[data-direction="${direction}"]`).click();});}
   }
  });
  assert.equal(await page.locator('.feedback:visible').count(),0);
  await page.locator('#check-practice').click();
  const results=await page.evaluate(()=>RRPracticeSession.controllers.map(c=>c.getResult()));
  assert(results.every(r=>r.correct===r.total),`${id}: ${JSON.stringify(results.map(r=>[r.type,r.correct,r.total]))}`);
  await page.locator('#check-practice').click();await page.locator('#open-records').click();assert.equal(await page.locator('.record-item').count(),1);
  if(id.includes('-t1-p3-2')||results.some(r=>r.type==='route')||id==='c9-t4-p2-2'){
   const pending=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();const saved=JSON.parse(fs.readFileSync(await(await pending).path(),'utf8'));
   assert.equal(saved.practiceId,id);assert.equal(saved.sections.length,results.length);assert(saved.sections.every(r=>r.correct===r.total));
  }
  await page.locator('[data-close="records-dialog"]').click();
  if(id.endsWith('-t1-p1-1')){await page.locator('#open-words').click();await page.locator('.word-star').first().click();await page.locator('[data-close="words-dialog"]').click();}
  if(id.endsWith('-t1-p1-2')&&id!=='c20-t1-p1-2'){await page.locator('#open-words').click();assert.equal(await page.locator('.word-star').first().getAttribute('aria-pressed'),'true');await page.locator('[data-close="words-dialog"]').click();}
  await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${id} overflows mobile`);await page.setViewportSize({width:1240,height:900});
  console.log('Passed',id);
 }
 assert.deepEqual(errors,[]);await browser.close();console.log(`Passed ${selected.length} new practices: whole grading, records, selected JSON exports, shared favorites and mobile.`);
})().catch(error=>{console.error(error);process.exit(1);});
