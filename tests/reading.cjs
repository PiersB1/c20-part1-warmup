const assert=require('assert'),fs=require('fs'),path=require('path'),os=require('os'),vm=require('vm'),{pathToFileURL}=require('url');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const name of ['reading-practices.js','reading-c21-t1-p1.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c);
const practices=Object.values(c.RRReadingPractices);assert.equal(practices.length,2);
for(const p of practices){
 assert.equal(p.location.book,21);assert.equal(p.location.test,1);assert.equal(p.location.part,1);assert.equal(p.coreWords.length,36);
 assert.equal(new Set(p.coreWords.map(w=>w[0])).size,36);assert(!p.coreWords.some(w=>['on','been','have','for','of'].includes(w[0])));
}
const syntax=practices[0].sections.at(-1).items;
assert.deepEqual(Array.from(syntax.map(i=>i.kind)),['backbone','backbone','reference','reference','logic','logic']);
for(const item of syntax){
 if(item.kind==='backbone')for(const key of ['subject','predicate'])assert.equal(item.tokens.filter(t=>t===item[key]).length,1);
 if(item.kind==='reference'){
  assert.equal(item.tokens.filter(t=>t===item.focus).length,1);assert(item.tokens.join(' ').split(/\s+/).length>=65);
  for(const answer of [item.antecedent,...(item.accept||[])])assert.equal(item.tokens.filter(t=>t===answer).length,1);
 }
}
const [evidence,judgements,notes]=practices[1].sections;
for(const item of evidence.items){const sentence=evidence.passage.paragraphs.flatMap(p=>p.sentences).find(s=>s.id===item.sentence);assert(sentence);if(item.phrase)assert(sentence.tokens.includes(item.phrase));}
for(const value of ['TRUE','FALSE','NOT GIVEN'])assert.equal(judgements.items.filter(i=>i.answer===value).length,2);
for(const item of judgements.items)if(item.answer==='NOT GIVEN')assert(!/without discussing|neither compared|does not state|not provided/i.test(item.text),'Do not announce missing information in the passage');
for(const item of notes.items){assert.equal(item.q.split('___').length,2);assert(!/\s/.test(item.answer));assert(notes.passage.paragraphs.join(' ').includes(item.answer));assert(!['mining','school','education','notes','journals','Venice','canteen','friends'].includes(item.answer));}
const seen=new Map();
const materials=[
 ...practices[0].sections.filter(s=>s.type==='quiz').flatMap(s=>s.items.map(i=>[i.q.split('\n')[0],s.id])),
 [practices[0].sections[2].items[0].segments.map(t=>typeof t==='string'?t:t.text).join(''),'matching'],
 ...syntax.map(i=>[i.text||i.tokens.join(' '),i.id]),
 ...evidence.passage.paragraphs.flatMap(p=>p.sentences.map(s=>[s.tokens.join(' '),s.id])),
 ...judgements.items.map(i=>[i.text,i.id]),...notes.passage.paragraphs.map((p,i)=>[p,'notes-'+i])
];
for(const [text,id]of materials)for(const sentence of text.split(/[.!?]+/)){
 const normal=sentence.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 if(normal.split(' ').length<8)continue;
 assert(!seen.has(normal),'Repeated material: '+id+' / '+seen.get(normal));seen.set(normal,id);
}
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({acceptDownloads:true,viewport:{width:1260,height:920}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  const home=pathToFileURL(path.join(root,'index.html')).href;
  await page.goto(home);assert.equal(await page.locator('a.available').count(),48);
  await page.locator('[data-mode="reading"]').click();assert.equal(await page.locator('a.available').count(),2);
  await page.locator('a.available[href*="book=21&test=1&part=1"]').click();assert.equal(await page.locator('.practice').count(),3);
  await page.locator('.practice[href="reading.html?id=c21-r-t1-p1-1"]').click();await page.locator('.sentence-card').first().waitFor();
  assert.equal(await page.locator('.quiz-card').count(),22);assert.equal(await page.locator('.sentence-card').count(),6);
  assert.equal(await page.locator('#check-practice').count(),1);assert.equal(await page.locator('.feedback:visible').count(),0);
  assert.equal(await page.locator('audio').count(),0);
  await page.locator('#check-practice').click();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('rr:reading:records:v1')||'[]').length),0);
  await page.reload();
  await page.locator('#open-words').click();assert.equal(await page.locator('.word-row').count(),36);await page.locator('.word-star').first().click();await page.locator('[data-close="words-dialog"]').click();
  const target=await page.evaluate(()=>RRPracticeSession.practice.sections[2].items[0].segments.find(t=>typeof t!=='string'));
  await page.locator(`[data-choice-id="${target.answer}"]`).dragTo(page.locator(`[data-slot-id="${target.id}"]`));
  await page.locator(`[data-slot-id="${target.id}"]`).dragTo(page.locator('.word-bank'));assert(await page.locator(`[data-choice-id="${target.answer}"]`).isVisible());
  await page.evaluate(()=>{
   const p=RRPracticeSession.practice;
   for(const section of p.sections.filter(s=>s.type==='quiz')){
    const box=document.getElementById(section.id);section.items.forEach((item,i)=>{[...box.querySelectorAll('.quiz-card')[i].querySelectorAll('input')].find(input=>input.value===item.answer).click();});
   }
   const match=p.sections[2].items[0];match.segments.filter(s=>typeof s!=='string').forEach(s=>{document.querySelector(`[data-choice-id="${s.answer}"]`).click();document.querySelector(`[data-slot-id="${s.id}"]`).click();});
   p.sections[3].items.forEach(item=>{
    const card=document.querySelector(`[data-question-id="${item.id}"]`);
    if(item.kind==='backbone')for(const role of ['predicate','subject']){
     card.querySelector(`.role-${role}`).click();card.querySelector(`[data-token-index="${item.tokens.indexOf(item[role])}"]`).click();
    }else if(item.kind==='reference'){
     const answer=item.accept?.[0]||item.antecedent;card.querySelector(`[data-token-index="${item.tokens.indexOf(answer)}"]`).click();
    }else [...card.querySelectorAll('input')].find(input=>input.value===item.answer).click();
   });
  });
  const reference=page.locator('[data-question-id="r-syntax-3"]');
  const referenceIndex=syntax[2].tokens.indexOf(syntax[2].antecedent);
  await reference.locator(`[data-token-index="${referenceIndex}"]`).press('Space');
  assert.equal(await page.evaluate(()=>RRPracticeSession.controllers[3].getResult().details[2].response),'');
  await reference.locator(`[data-token-index="${referenceIndex}"]`).press('Enter');
  assert.equal(await page.locator('.feedback:visible').count(),0);
  await page.locator('#check-practice').click();
  const first=await page.evaluate(()=>RRPracticeSession.controllers.map(c=>c.getResult()));
  assert(first.every(r=>r.correct===r.total),JSON.stringify(first.map(r=>[r.id,r.correct,r.total])));assert.equal(first.reduce((n,r)=>n+r.total,0),36);
  assert.equal(await page.locator('.sentence-card .feedback.good:visible').count(),6);
  await page.locator('#check-practice').click();await page.locator('#open-records').click();assert.equal(await page.locator('.record-item').count(),1);
  const download=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();
  const record=JSON.parse(fs.readFileSync(await(await download).path(),'utf8'));assert.equal(record.mode,'reading');assert.equal(record.sections.length,4);
  assert.equal(record.sections[3].details[3].response,syntax[3].accept[0]);assert(record.sections[3].details[3].correct);
  await page.locator('[data-close="records-dialog"]').click();
  await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('[data-question-id="r-syntax-4"]').screenshot({path:path.join(root,'.work/reading-reference-mobile.png')});
  await page.goto(new URL('reading.html?id=c21-r-t1-p1-2',home).href);
  assert.equal(await page.locator('.judgement-card').count(),6);assert.equal(await page.locator('.note-card').count(),7);
  await page.locator('#open-words').click();assert.equal(await page.locator('.word-star').first().getAttribute('aria-pressed'),'true');await page.locator('[data-close="words-dialog"]').click();
  await page.evaluate(()=>{
   const section=RRPracticeSession.practice.sections[0];
   section.items.forEach((item,i)=>{
    document.querySelector(`[data-evidence-question="${i}"]`).click();
    document.querySelector(`.evidence-sentence[data-sentence-id="${item.sentence}"]`).click();
    if(item.phrase){const sentence=section.passage.paragraphs.flatMap(p=>p.sentences).find(s=>s.id===item.sentence);document.querySelector(`[data-phrase-index="${sentence.tokens.indexOf(item.phrase)}"]`).click();}
   });
   RRPracticeSession.practice.sections[1].items.forEach(item=>{const card=document.querySelector(`[data-question-id="${item.id}"]`);[...card.querySelectorAll('input')].find(input=>input.value===item.answer).click();});
   RRPracticeSession.practice.sections[2].items.forEach(item=>{document.querySelector(`[data-question-id="${item.id}"] input`).value=item.answer.toUpperCase();});
  });
  // Switching a sentence must clear the old phrase, not carry it across sentences.
  await page.locator('[data-evidence-question="2"]').click();
  await page.locator('.evidence-sentence[data-sentence-id="e-d1"]').click();
  assert.equal(await page.evaluate(()=>RRPracticeSession.controllers[0].getResult().details[2].response.phrase),'');
  await page.locator('.evidence-sentence[data-sentence-id="e-c2"]').click();
  await page.evaluate(()=>{const item=RRPracticeSession.practice.sections[0].items[2],s=RRPracticeSession.practice.sections[0].passage.paragraphs.flatMap(p=>p.sentences).find(s=>s.id===item.sentence);document.querySelector(`[data-phrase-index="${s.tokens.indexOf(item.phrase)}"]`).click();});
  assert.equal(await page.locator('.feedback:visible').count(),0);await page.locator('#check-practice').click();
  const second=await page.evaluate(()=>RRPracticeSession.controllers.map(c=>c.getResult()));
  assert(second.every(r=>r.correct===r.total),JSON.stringify(second.map(r=>[r.id,r.correct,r.total])));assert.equal(second.reduce((n,r)=>n+r.total,0),23);
  await page.locator('.note-card input').first().fill('the workshop');await page.locator('#check-practice').click();
  assert.equal(await page.evaluate(()=>RRPracticeSession.controllers[2].getResult().correct),6);assert.match(await page.locator('.note-card .feedback').first().textContent(),/只能填一个单词/);
  await page.locator('.note-card input').first().fill('workshop');await page.locator('#check-practice').click();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('.evidence-card').evaluate(node=>window.scrollTo(0,node.getBoundingClientRect().top+scrollY-12));
  await page.locator('.evidence-card').screenshot({path:path.join(root,'.work/reading-evidence-mobile.png')});
  await page.setViewportSize({width:1260,height:920});await page.locator('.evidence-card').evaluate(node=>window.scrollTo(0,node.getBoundingClientRect().top+scrollY-12));
  await page.locator('.evidence-card').screenshot({path:path.join(root,'.work/reading-evidence-desktop.png')});
  await page.locator('#open-records').click();assert.equal(await page.locator('.record-item').count(),1);
  const exportSecond=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();
  const secondRecord=JSON.parse(fs.readFileSync(await(await exportSecond).path(),'utf8'));assert.equal(secondRecord.sections.length,3);assert.equal(secondRecord.sections[0].details[2].response.phrase,'college technicians');
  page.once('dialog',dialog=>dialog.accept());await page.getByRole('button',{name:'删除这次记录'}).click();assert.equal(await page.locator('.record-item').count(),0);
  await page.locator('[data-close="records-dialog"]').click();
  await page.locator('#back-link').click();await page.locator('.back').click();assert.equal(await page.locator('[data-mode="reading"]').getAttribute('aria-pressed'),'true');assert.equal(await page.locator('a.available').count(),2);
  assert.deepEqual(errors,[]);
  console.log('Reading: 2 practices; 36 core terms; 36 + 23 marks. Passed home navigation, phrase drag/return, syntax/references (including valid alternatives and keyboard), evidence switching/reset, T/F/NG, one-word limits, whole grading, record isolation/delete/export, shared favorites and mobile widths.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
