/* Read-only validation of authored packs; safe during work on other books. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),books=process.argv.find(s=>s.startsWith('--books='))?.slice(8).split(',').map(Number),c={};c.window=c;vm.createContext(c);
const files=fs.readdirSync(path.join(root,'data')).filter(n=>/^authored-c\d+-.*\.practice\.js$/.test(n)&&(!books||books.includes(Number(n.match(/^authored-c(\d+)-/)[1])))).sort();
for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js','aaa-listening-pack-builder.practice.js',...files])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c,{filename:name});
const profiles=new Map(),longSignals=[];let terms=0,gaps=0,maps=0;
for(const source of c.RRListenFoundationSources){
 const id=source.base.replace(/-1$/,''),p1=c.RRListeningPractices[id+'-1'],p2=c.RRListeningPractices[id+'-2'];
 const core=p1.coreWords.map(w=>w[0]);terms+=core.length;assert.equal(core.length,new Set(core).size,id+' duplicate core');assert.equal(source.terms.length,core.length,id+' word count');
 const grouped=source.groups.flat();assert.deepEqual(Array.from(grouped).sort(),Array.from(core).sort(),id+' group coverage');assert.equal(new Set(grouped).size,core.length);assert(source.groups.every(g=>g.length>=4&&g.length<=6),id+' group size');
 assert.equal(source.contexts.length,2);const bank=source.contexts.flatMap(p=>p.words);assert.deepEqual(Array.from(bank).sort(),Array.from(core).sort(),id+' context partition');assert.equal(new Set(bank).size,core.length);
 const answers=source.contexts.flatMap(p=>p.paragraphs.flatMap(s=>[...s.matchAll(/\{\{(.*?)\}\}/g)].map(m=>m[1])));
 assert([4,5].includes(source.omitted.length));assert.equal(new Set(answers).size,answers.length,id+' repeated context gap');assert.equal(answers.length,core.length-source.omitted.length,id+' gap coverage');gaps+=answers.length;
 assert(answers.every(w=>core.includes(w)&&!source.omitted.includes(w)),id+' invalid gap');assert(source.omitted.every(w=>core.includes(w)),id+' invalid omitted');
 for(const story of source.contexts){assert(story.paragraphs.length>=2,id+' short context');for(const para of story.paragraphs)for(const m of para.matchAll(/\{\{(.*?)\}\}/g))assert(story.words.includes(m[1]),id+' gap outside its bank');}
 for(const [word,example,translation,application,appTranslation]of source.terms){assert(core.includes(word));assert(example&&translation&&appTranslation);assert.equal(application.split('___').length,2,id+' application gap '+word);assert.notEqual(example,application.replace('___',word),id+' same context '+word);}
 assert.deepEqual(Array.from(p1.sections.map(s=>s.type)),['quiz','dictation']);assert.equal(p1.sections[0].items.length,12);assert.equal(p1.sections[1].items.length,12);
 for(const q of p1.sections[0].items)if(q.options){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4,id+' duplicate option');for(const a of Array.isArray(q.answer)?q.answer:[q.answer])assert(q.options.includes(a),id+' answer missing');}
 for(const d of p1.sections[1].items){assert.equal(d.sentence.split('___').length,2);assert(d.answer);}
 const wordCount=ts=>ts.map(t=>typeof t==='string'?t:t.text).join(' ').split(/\s+/).length;
 assert.equal(p2.sections[0].items.length,10);
 for(const[i,q]of p2.sections[0].items.entries()){assert(q.paired);for(const side of ['question','source']){const keys=q[side].filter(t=>t.key),n=i<6?1:2;assert.equal(keys.length,n,id+' pair count '+(i+1));for(let pair=1;pair<=n;pair++)assert.equal(keys.filter(k=>k.pair===pair).length,1,id+' pair identity');if(n===2)assert(wordCount(q[side])>=(side==='question'?20:25),id+' short '+side+' '+(i+1));}if(/填空/.test(q.format))assert(q.question.some(t=>(typeof t==='string'?t:t.text).includes('___')),id+' missing question gap');}
 assert.equal(p2.sections[1].items.length,2);for(const p of p2.sections[1].items){assert.equal(p.segments.filter(s=>typeof s!=='string').length,6);assert.equal(p.choices.length,9);assert.equal(new Set(p.choices.map(c=>c.text)).size,9,id+' duplicate paraphrase');}
 const route=p2.sections.find(s=>s.type==='route');assert.equal(p2.sections[2].items.length,route?1:2);
 for(const signal of p2.sections[2].items){assert.equal(signal.cues.length,3);assert.equal(new Set(signal.cues.map(k=>k.sentence)).size,3);assert(signal.cues.every(k=>signal.transcript[k.sentence]===k.signal));if(p1.location.part===3)assert.equal(new Set(signal.speakers).size,2);const profile=signal.transcript.length+':'+signal.cues.map(k=>k.sentence).join(',');profiles.set(profile,(profiles.get(profile)||0)+1);const n=signal.transcript.join(' ').split(/\s+/).length;if(n<110||n>150)longSignals.push({id:signal.id,words:n});}
 if(route){maps++;assert(p2.sections[0].map?.svg);for(const r of route.items){const nodes=new Map(r.map.nodes.map(n=>[n.id,n]));assert.equal(r.expectedPath[0],r.start);assert.equal(r.expectedPath.at(-1),r.goal);for(const[a,b]of r.map.edges)assert((nodes.get(a).x===nodes.get(b).x)!==(nodes.get(a).y===nodes.get(b).y),id+' non-cardinal edge');for(let i=1;i<r.expectedPath.length;i++)assert(r.map.edges.some(e=>e.includes(r.expectedPath[i-1])&&e.includes(r.expectedPath[i])),id+' invalid route');}}
}
console.log(JSON.stringify({parts:files.length,terms,gaps,maps,signalSentenceProfiles:Object.fromEntries(profiles),signalWordCountNotes:longSignals},null,2));
