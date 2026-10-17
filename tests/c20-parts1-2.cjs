const fs=require('fs'),path=require('path'),os=require('os'),assert=require('assert');
const {pathToFileURL}=require('url');
let pw;try{pw=require('playwright');}catch{pw=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}
(async()=>{
 const root=path.resolve(__dirname,'..'),browser=await pw.chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({acceptDownloads:true,viewport:{width:1250,height:900}}),errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>{window.__qaAudio=[];const NativeAudio=window.Audio;window.Audio=function(...args){const audio=new NativeAudio(...args);__qaAudio.push(audio);return audio;};});
 const home=pathToFileURL(path.join(root,'index.html')).href;
 await page.goto(home);assert.equal(await page.locator('a.available').count(),96);
 const entries=await page.evaluate(()=>RRExerciseCatalog.filter(item=>item.book===20&&item.part<=2&&item.id!=='c20-t1-p1-1'&&item.id!=='c20-t1-p1-2'));
 assert.equal(entries.length,14);
 let decoded=0;
 for(const entry of entries){
  await page.goto(new URL(entry.url,home).href);
  assert.equal(await page.locator('#check-practice').count(),1);assert.equal(await page.locator('[data-section-check]').count(),0);
  const durations=await page.evaluate(()=>Promise.all(__qaAudio.map(audio=>new Promise((resolve,reject)=>{
   if(audio.readyState>=1){resolve(audio.duration);return;}
   audio.addEventListener('loadedmetadata',()=>resolve(audio.duration),{once:true});
   audio.addEventListener('error',()=>reject(Error(`Cannot decode ${audio.src}`)),{once:true});
   audio.preload='metadata';audio.load();
  }))));assert(durations.every(duration=>duration>1));decoded+=durations.length;
  if(entry.id.endsWith('-1')){
   assert.equal(await page.locator('.quiz-card').count(),12);assert.equal(await page.locator('.dictation-card').count(),12);
   await page.evaluate(()=>{
    const [quiz,dictation]=RRPracticeSession.practice.sections;
    quiz.items.forEach((item,i)=>{const card=document.querySelectorAll('.quiz-card')[i];if(item.type==='cloze')card.querySelector('input').value=item.answer;else{const answers=Array.isArray(item.answer)?item.answer:[item.answer];card.querySelectorAll('input').forEach(input=>{if(answers.includes(input.value))input.click();});}});
    dictation.items.forEach((item,i)=>{document.querySelectorAll('.dictation-card')[i].querySelector('input').value=item.answer;});
   });
   await page.locator('.dictation-card').first().getByRole('button',{name:'▶ 播放'}).click();
  }else{
   assert.equal(await page.locator('.locator-card').count(),10);assert.equal(await page.locator('.paraphrase-card').count(),2);assert.equal(await page.locator('.signal-card').count(),entry.id==='c20-t3-p2-2'?1:2);
   for(let i=0;i<10;i++){
    await page.locator('.locator-card').nth(i).locator('.reveal-source').click();
    await page.locator('.locator-card').nth(i).locator('.source-wrap').waitFor({state:'visible'});
   }
   await page.evaluate(()=>{
    RRPracticeSession.practice.sections[0].items.forEach((item,index)=>{
     const card=document.querySelectorAll('.locator-card')[index];
     ['question','source'].forEach((field,lineIndex)=>{const tokens=item[field].filter(t=>!(typeof t==='string'?t:t.text).includes('___'));const buttons=card.querySelectorAll('.token-line')[lineIndex].querySelectorAll('.token');tokens.forEach((token,i)=>{if(token.key)buttons[i].click();});});
    });
   });
   const target=await page.evaluate(()=>{const item=RRPracticeSession.practice.sections[1].items[0];return item.segments.find(segment=>typeof segment!=='string');});
   await page.locator(`[data-choice-id="${target.answer}"]`).dragTo(page.locator(`[data-slot-id="${target.id}"]`));
   await page.locator(`[data-slot-id="${target.id}"]`).dragTo(page.locator('.paraphrase-card').first().locator('.word-bank'));
   assert(await page.locator(`[data-choice-id="${target.answer}"]`).isVisible());
   await page.evaluate(()=>RRPracticeSession.practice.sections[1].items.forEach(item=>item.segments.filter(segment=>typeof segment!=='string').forEach(target=>{document.querySelector(`[data-choice-id="${target.answer}"]`).click();document.querySelector(`[data-slot-id="${target.id}"]`).click();})));
   for(let i=0;i<await page.locator('.signal-card').count();i++){
    await page.locator('.signal-card').nth(i).locator('.audio-controls .secondary').first().click();
    await page.waitForFunction(i=>!document.querySelectorAll('.signal-card')[i].querySelector('.mark-button').disabled,i);
    await page.evaluate(i=>{const item=RRPracticeSession.practice.sections[2].items[i],audio=__qaAudio.find(audio=>audio.src.endsWith(item.audio)),mark=document.querySelectorAll('.signal-card')[i].querySelector('.mark-button');RRSignalTimings[item.audio].cues.forEach(cue=>{audio.currentTime=cue.start;mark.click();});},i);
   }
   assert.equal(await page.locator('.practice-map').count(),entry.id==='c20-t3-p2-2'?1:0);
   if(entry.id==='c20-t3-p2-2')for(const direction of ['north','east','south','east','north','north'])await page.locator(`[data-direction="${direction}"]`).click();
  }
  assert.equal(await page.locator('.feedback:visible').count(),0);
  await page.locator('#check-practice').click();
  const results=await page.evaluate(()=>RRPracticeSession.controllers.map(controller=>controller.getResult()));
  assert(results.every(result=>result.correct===result.total),`${entry.id} did not grade completely: ${JSON.stringify(results.map(x=>[x.correct,x.total]))}`);
  await page.locator('#check-practice').click();
  await page.locator('#open-records').click();assert.equal(await page.locator('.record-item').count(),1);
  const pending=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();
  const record=JSON.parse(fs.readFileSync(await(await pending).path(),'utf8'));assert.equal(record.practiceId,entry.id);assert.equal(record.sections.length,entry.id.endsWith('-1')?2:entry.id==='c20-t3-p2-2'?4:3);
  await page.locator('[data-close="records-dialog"]').click();
  await page.locator('#open-words').click();
  if(entry.id.endsWith('-1'))await page.locator('.word-star').first().click();
  else assert.equal(await page.locator('.word-star').first().getAttribute('aria-pressed'),'true');
  await page.locator('[data-close="words-dialog"]').click();
  console.log('Passed',entry.id);
 }
 assert.equal(decoded,168);
 await page.goto(home);await page.locator('#open-favorites').click();assert.equal(await page.locator('.favorite-row').count(),7);assert.equal(await page.locator('.favorite-reveal[aria-expanded="false"]').count(),7);
 await page.goto(new URL('listening.html?id=c20-t3-p2-2',home).href);await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.deepEqual(errors,[]);await browser.close();console.log('Passed 14 new practices, 168 decoded audio files, whole-practice records/JSON, reversible drag, shared favorites, map and mobile.');
})().catch(error=>{console.error(error);process.exit(1);});
