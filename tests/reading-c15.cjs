const assert=require('assert'),fs=require('fs'),path=require('path'),os=require('os'),vm=require('vm'),{pathToFileURL}=require('url');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const file of ['reading-practices.js','reading-c21-t1-p1.js','reading-c15-t4-p1.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',file),'utf8'),c);
const id='c15-r-t4-p1',practices=[c.RRReadingPractices[id+'-1'],c.RRReadingPractices[id+'-2']];
assert(practices.every(Boolean));assert.equal(Object.keys(c.RRReadingPractices).length,4);
for(const p of practices){assert.equal(p.location.book,15);assert.equal(p.location.test,4);assert.equal(p.location.part,1);assert.equal(p.coreWords.length,36);assert.equal(new Set(p.coreWords.map(w=>w[0])).size,36);assert(!p.coreWords.some(w=>['on','been','have','of','for'].includes(w[0])));}
const [vocab,rewrite,matching,syntax]=practices[0].sections,[evidence,judgements,notes,table]=practices[1].sections;
assert.equal(vocab.items.length,16);assert.equal(rewrite.items.length,6);
for(const section of [vocab,rewrite])for(const item of section.items){assert.equal(new Set(item.options).size,4);assert(item.options.includes(item.answer));}
assert(new Set(vocab.items.map(x=>x.options.indexOf(x.answer))).size>=3);
const match=matching.items[0],slots=match.segments.filter(x=>typeof x!=='string');assert.equal(slots.length,6);assert.equal(match.choices.length,9);
for(const slot of slots)assert(match.choices.some(x=>x.id===slot.answer));
for(const item of syntax.items){
 if(item.kind==='backbone')for(const field of ['subject','predicate'])assert.equal(item.tokens.filter(t=>t===item[field]).length,1);
 if(item.kind==='reference'){assert(item.tokens.join(' ').split(/\s+/).length>=65);assert.equal(item.tokens.filter(t=>t===item.focus).length,1);for(const a of [item.antecedent,...(item.accept||[])])assert.equal(item.tokens.filter(t=>t===a).length,1);}
}
assert.equal(evidence.items.length,6);
for(const item of evidence.items){const s=evidence.passage.paragraphs.flatMap(p=>p.sentences).find(s=>s.id===item.sentence);assert(s);if(item.phrase)assert(s.tokens.includes(item.phrase));}
for(const answer of ['TRUE','FALSE','NOT GIVEN'])assert.equal(judgements.items.filter(x=>x.answer===answer).length,2);
assert.equal(notes.items.length,5);assert.equal(table.items.length,3);assert.equal(table.maxWords,2);
const banned=['water','diet','drought','erosion','desert','branches','leaves','bark','trunk'];
for(const section of [notes,table])for(const item of section.items){
 assert.equal(item.q.split('___').length,2);assert(item.answer.split(' ').length<=(section.maxWords||1));assert(section.passage.paragraphs.join(' ').toLowerCase().includes(item.answer));assert(!banned.includes(item.answer));
 for(const alt of item.accept||[])assert(section.passage.paragraphs.join(' ').toLowerCase().includes(alt));
 if(item.cells){assert.equal(item.cells.length,table.columns.length);assert.equal(item.cells.filter(x=>x.includes('___')).length,1);}
}
// Detect reused source sentences across both reading topics and independent activities.
const seen=new Map();
for(const p of Object.values(c.RRReadingPractices))for(const s of p.sections){
 let texts=[];
 if(s.type==='quiz')texts=s.items.map(i=>i.q.split('\n')[0]);
 if(s.type==='paraphrase')texts=s.items.map(i=>i.segments.map(x=>typeof x==='string'?x:x.text).join(''));
 if(s.type==='reading-sentence')texts=s.items.map(i=>i.text||i.tokens.join(' '));
 if(s.type==='reading-evidence')texts=s.passage.paragraphs.flatMap(p=>p.sentences.map(i=>i.tokens.join(' ')));
 if(s.type==='reading-judgement')texts=s.items.map(i=>i.text);
 if(['reading-notes','reading-table'].includes(s.type))texts=s.passage.paragraphs;
 for(const text of texts)for(const sentence of text.split(/[.!?]+/)){
  const normal=sentence.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normal.split(' ').length<8)continue;
  assert(!seen.has(normal),`Repeated sentence in ${s.id} and ${seen.get(normal)}`);seen.set(normal,s.id);
 }
}
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1260,height:920},acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  const home=pathToFileURL(path.join(root,'index.html')).href;
  await page.goto(home+'?mode=reading');await page.locator('a.available[href*="book=15&test=4&part=1"]').click();assert.equal(await page.locator('.practice').count(),2);await page.locator('.practice').first().click();
  await page.locator('#check-practice').waitFor();assert.equal(await page.locator('#check-practice').count(),1);assert.equal(await page.locator('.feedback:visible').count(),0);
  await page.locator('#check-practice').click();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('rr:reading:records:v1')||'[]').length),0);
  await page.reload();
  await page.locator('#open-words').click();assert.equal(await page.locator('.word-row').count(),36);await page.locator('.word-star').first().click();await page.locator('[data-close="words-dialog"]').click();
  const slot=slots[0];await page.locator(`[data-choice-id="${slot.answer}"]`).dragTo(page.locator(`[data-slot-id="${slot.id}"]`));await page.locator(`[data-slot-id="${slot.id}"]`).dragTo(page.locator('.word-bank'));assert(await page.locator(`[data-choice-id="${slot.answer}"]`).isVisible());
  await page.evaluate(()=>{
   const p=RRPracticeSession.practice;
   for(const s of p.sections.filter(s=>s.type==='quiz'))s.items.forEach((item,i)=>{[...document.getElementById(s.id).querySelectorAll('.quiz-card')[i].querySelectorAll('input')].find(x=>x.value===item.answer).click();});
   p.sections[2].items[0].segments.filter(x=>typeof x!=='string').forEach(x=>{document.querySelector(`[data-choice-id="${x.answer}"]`).click();document.querySelector(`[data-slot-id="${x.id}"]`).click();});
   p.sections[3].items.forEach(item=>{
    const card=document.querySelector(`[data-question-id="${item.id}"]`);
    if(item.kind==='backbone')for(const k of ['subject','predicate']){card.querySelector('.role-'+k).click();card.querySelector(`[data-token-index="${item.tokens.indexOf(item[k])}"]`).click();}
    else if(item.kind==='reference'){const a=item.accept?.[0]||item.antecedent;card.querySelector(`[data-token-index="${item.tokens.indexOf(a)}"]`).click();}
    else [...card.querySelectorAll('input')].find(x=>x.value===item.answer).click();
   });
  });
  await page.locator('#check-practice').click();
  let result=await page.evaluate(()=>RRPracticeSession.controllers.map(c=>c.getResult()));assert(result.every(x=>x.correct===x.total),JSON.stringify(result));assert.equal(result.reduce((n,x)=>n+x.total,0),36);
  await page.goto(new URL('reading.html?id='+id+'-2',home).href);
  assert.equal(await page.locator('.table-answer-row').count(),3);assert.equal(await page.locator('table caption').count(),1);assert.equal(await page.locator('#check-practice').count(),1);
  await page.locator('#open-words').click();assert.equal(await page.locator('.word-star').first().getAttribute('aria-pressed'),'true');await page.locator('[data-close="words-dialog"]').click();
  await page.evaluate(()=>{
   const p=RRPracticeSession.practice,s=p.sections[0];
   s.items.forEach((item,i)=>{document.querySelector(`[data-evidence-question="${i}"]`).click();document.querySelector(`.evidence-sentence[data-sentence-id="${item.sentence}"]`).click();if(item.phrase){const line=s.passage.paragraphs.flatMap(p=>p.sentences).find(x=>x.id===item.sentence);document.querySelector(`[data-phrase-index="${line.tokens.indexOf(item.phrase)}"]`).click();}});
   p.sections[1].items.forEach(item=>{[...document.querySelector(`[data-question-id="${item.id}"]`).querySelectorAll('input')].find(x=>x.value===item.answer).click();});
   p.sections.slice(2).forEach(s=>s.items.forEach(item=>{document.querySelector(`[data-question-id="${item.id}"] input`).value=item.answer.toUpperCase();}));
  });
  assert.equal(await page.locator('.feedback:visible').count(),0);await page.locator('#check-practice').click();
  result=await page.evaluate(()=>RRPracticeSession.controllers.map(c=>c.getResult()));assert(result.every(x=>x.correct===x.total),JSON.stringify(result));assert.equal(result.reduce((n,x)=>n+x.total,0),24);
  await page.locator('[data-question-id="'+id+'-table2"] input').fill('fibre');await page.locator('[data-question-id="'+id+'-table3"] input').fill('mesh');await page.locator('#check-practice').click();assert.equal(await page.evaluate(()=>RRPracticeSession.controllers[3].getResult().correct),3);
  await page.locator('[data-question-id="'+id+'-table2"] input').fill('the coconut fibre');await page.locator('#check-practice').click();assert.match(await page.locator('[data-feedback-for="'+id+'-table2"] .feedback').textContent(),/最多填2个/);assert.equal(await page.evaluate(()=>RRPracticeSession.controllers[3].getResult().correct),2);
  await page.locator('[data-question-id="'+id+'-table2"] input').fill('coconut   fibre');await page.locator('#check-practice').click();assert.equal(await page.evaluate(()=>RRPracticeSession.controllers[3].getResult().correct),3);
  await page.locator('#open-records').click();assert.equal(await page.locator('.record-item').count(),1);
  const download=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();const record=JSON.parse(fs.readFileSync(await(await download).path(),'utf8'));assert.equal(record.mode,'reading');assert.equal(record.sections.length,4);assert.equal(record.sections[3].passage.title,table.passage.title);assert(record.sections[3].details[1].question.includes('Retains moisture'));assert.equal(record.sections[3].details[2].response,'mesh');
  await page.locator('[data-close="records-dialog"]').click();
  await page.locator('#'+id+'-table').screenshot({path:path.join(root,'.work/reading-c15-table-desktop.png')});
  await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.locator('#'+id+'-table').screenshot({path:path.join(root,'.work/reading-c15-table-mobile.png')});
  await page.goto(new URL('reading.html?id='+id+'-1',home).href);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.locator('[data-question-id="'+id+'-syntax4"]').screenshot({path:path.join(root,'.work/reading-c15-reference-mobile.png')});
  assert.deepEqual(errors,[]);console.log('C15 T4 P1: two practices, 36 + 24 marks; original materials, long references, reversible matching, evidence, T/F/NG, one/two-word limits, accepted short names, JSON records, favorites, mobile layout passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});

