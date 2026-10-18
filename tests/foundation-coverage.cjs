const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort(),'reading-practices.js','reading-c21-t1-p1.js','reading-c15-t4-p1.js','foundation-library.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c);
vm.runInContext(fs.readFileSync(path.join(root,'exercise-catalog.js'),'utf8'),c);
const expected=[];for(let t=1;t<=4;t++)for(let p=1;p<=2;p++)expected.push(`c20-t${t}-p${p}-0`);
const listening=Object.values(c.RRFoundationPractices).filter(p=>p.mode==='listening');
assert.deepEqual(Array.from(listening.map(p=>p.id)).sort(),expected.sort());
for(const p of listening){
 const original=c.RRListeningPractices[p.id.replace(/-0$/,'-1')];assert.deepEqual(JSON.parse(JSON.stringify(p.coreWords)),JSON.parse(JSON.stringify(original.coreWords)));assert.equal(c.RRExerciseCatalog.filter(e=>e.mode==='listening'&&e.book===20&&e.test===p.location.test&&e.part===p.location.part).length,3);
}
const seen=new Map(),wordCounts=[];
for(const p of Object.values(c.RRFoundationPractices)){
 const [v,ctx]=p.sections;let targetCount=0;
 const texts=v.items.flatMap(t=>[[t.example,'learn '+t.english],[t.application.replace('___',t.english),'apply '+t.english]]);
 for(const story of ctx.items){
  const raw=story.paragraphs.join(' '),filled=raw.replace(/\{\{(.*?)\}\}/g,'$1');targetCount += [...raw.matchAll(/\{\{(.*?)\}\}/g)].length;
  texts.push([filled,story.title]);wordCounts.push([p.id,story.id,filled.split(/\s+/).length]);
  for(const [target,alternatives]of Object.entries(story.accept||{})){assert(story.words.some(t=>t.english===target));assert(raw.includes('{{'+target+'}}'));for(const alt of alternatives)assert(story.words.some(t=>t.english===alt));}
 }
 assert([4,5].includes(v.items.length-targetCount));
 for(const [text,label]of texts)for(const sentence of text.split(/[.!?]+/)){
  const normal=sentence.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normal.split(' ').length<8)continue;
  assert(!seen.has(normal),`Reused sentence: ${p.id}/${label} and ${seen.get(normal)}`);seen.set(normal,p.id+'/'+label);
 }
}
// The four existing lessons, their word examples and assigned voices must remain intact.
const previous={};previous.window=previous;vm.createContext(previous);
vm.runInContext(execFileSync('git',['show','HEAD:data/foundation-library.js'],{cwd:root,encoding:'utf8'}),previous);
for(const id of ['c20-t2-p1-0','c20-t3-p1-0','c21-r-t1-p1-0','c15-r-t4-p1-0'])assert.deepEqual(JSON.parse(JSON.stringify(c.RRFoundationPractices[id])),JSON.parse(JSON.stringify(previous.RRFoundationPractices[id])),'Changed an existing lesson '+id);
console.log('C20 practice 0: all eight P1/P2 entries; exact core-word coverage; two semantic banks each; original learning/application contexts; four existing lessons preserved.');
console.log('Context lengths: '+wordCounts.map(([id,story,n])=>`${id}/${story} ${n} words`).join('; '));
