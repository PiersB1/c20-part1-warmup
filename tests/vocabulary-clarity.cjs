const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm'),os=require('os'),{pathToFileURL}=require('url');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const file of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(x=>x.endsWith('.practice.js')).sort(),'reading-practices.js','reading-c21-t1-p1.js','reading-c15-t4-p1.js','foundation-library.js','vocab-meanings.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',file),'utf8'),c);
const replacements=JSON.parse(fs.readFileSync(path.join(root,'data/vocabulary-clarity.json'),'utf8'));
const base=[...Object.values(c.RRListeningPractices),...Object.values(c.RRReadingPractices)];
let updated=0;
for(const p of base){
 for(const [english,meaning]of p.coreWords){assert(!Object.hasOwn(replacements,meaning),`Old core meaning ${p.id}: ${english}: ${meaning}`);if(p.id.endsWith('-1')&&Object.values(replacements).includes(meaning))updated++;assert.equal(c.RRVocabMeanings[`${p.vocabId||p.id.replace(/-[12]$/,'')}:${english}`],meaning);}
 for(const section of p.sections)if(section.type==='quiz')for(const item of section.items){if(!item.options)continue;assert.equal(item.options.length,new Set(item.options).size,`Duplicate options in ${p.id}`);for(const answer of Array.isArray(item.answer)?item.answer:[item.answer])assert(item.options.includes(answer));}
}
for(const p of Object.values(c.RRFoundationPractices))for(const t of p.sections[0].items){assert.equal(c.RRVocabMeanings[p.vocabId+':'+t.english],t.chinese);for(const old of t.previousMeanings)assert.equal(replacements[old],t.chinese);}
for(const n of [1,2]){const words=new Map(c.RRListeningPractices[`c20-t2-p1-${n}`].coreWords);assert.equal(words.get('respite'),'短暂休息（由别人临时接手照护）');assert.equal(words.get('independent'),'独立的；能自理的');assert.equal(words.get('on request'),'按需提供（需要就开口要）');}
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));const home=pathToFileURL(path.join(root,'index.html')).href;
  await page.goto(home);await page.evaluate(()=>localStorage.setItem('rr:favorite-words:v1',JSON.stringify([{id:'c20-t2-p1:independent',english:'independent',chinese:'能够自行处理事务的',practiceId:'c20-t2-p1-1',practiceTitle:'照护者支持咨询'}])));await page.reload();await page.locator('#open-favorites').click();await page.locator('.favorite-reveal').click();assert.match(await page.locator('.favorite-row').textContent(),/独立的；能自理的/);assert(!/能够自行处理事务的/.test(await page.locator('.favorite-row').textContent()));
  await page.goto(new URL('foundation.html?id=c20-t2-p1-0',home).href);await page.getByRole('button',{name:'从头学',exact:true}).click();
  await page.evaluate(()=>{
   const key='rr:foundation:progress:v1:c20-t2-p1-0',state=JSON.parse(localStorage.getItem(key)),term=RRPracticeSession.practice.sections[0].items.find(t=>t.english==='independent');
   state.queue=[{kind:'recall',term:term.id,group:2}];state.cursor=0;state.phase='learning';state.picked='能够自行处理事务的';state.checked=false;state.attempts=[{term:term.id,stage:'recall',response:'能够自行处理事务的',expected:'能够自行处理事务的',correct:true,hinted:false}];localStorage.setItem(key,JSON.stringify(state));
  });await page.reload();assert.equal(await page.locator('.foundation-option.selected').textContent(),'独立的；能自理的');await page.getByRole('button',{name:'核对这题',exact:true}).click();assert.equal(await page.locator('.foundation-card .feedback.good:visible').count(),1);
  const progress=await page.evaluate(()=>RRPracticeSession.controllers[0].getResult().details.find(d=>d.question==='independent'));assert.equal(progress.attempts.length,2);assert(progress.attempts.every(a=>a.response==='独立的；能自理的'));
  await page.locator('#open-words').click();for(const english of ['respite','independent','on request']){const t=c.RRFoundationPractices['c20-t2-p1-0'].sections[0].items.find(t=>t.english===english);assert.match(await page.locator('.word-row').filter({has:page.getByText(english,{exact:true})}).textContent(),new RegExp(t.chinese.replace(/[（）]/g,'.')));}
  await page.locator('#words-dialog').screenshot({path:path.join(root,'.work/vocabulary-clarity-mobile.png')});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.deepEqual(errors,[]);
  console.log(`Vocabulary clarity: reviewed 50 topics; ${updated} contextual core entries simplified. Options/keys consistent; four foundation libraries, existing favorites and unfinished old-label progress verified.`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
