const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),c=require('./load-library.cjs')();vm.runInContext(fs.readFileSync(path.join(root,'data/foundation-library.js'),'utf8'),c);
const bases=Object.keys(c.RRListeningPractices).filter(id=>/^c(?:9|10|11|12)-.*-1$/.test(id)).map(id=>id.slice(0,-2));
const normal=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(),seen=new Map(),duplicates=[],sourceMatches=[];
let sentences=0;
for(const id of bases){
 const p1=c.RRListeningPractices[id+'-1'],p2=c.RRListeningPractices[id+'-2'],p0=c.RRFoundationPractices[id+'-0'];assert(p0,id+' missing foundation');
 assert(p1.preparationFocus.length>20);assert.equal(p1.coreWords.length,new Set(p1.coreWords.map(w=>w[0])).size);
 for(const[w,meaning]of p1.coreWords){assert(!/^(?:on|been|have|and|if|was|from|until|into|to|in|at|by|of|for|with)$/i.test(w));assert(meaning.length>0);}
 for(const item of p1.sections[0].items){if(item.options){assert.equal(item.options.length,4);assert.equal(new Set(item.options).size,4);for(const answer of Array.isArray(item.answer)?item.answer:[item.answer])assert(item.options.includes(answer));}}
 const texts=[];
 p1.sections[0].items.slice(0,8).forEach(q=>texts.push(['quiz',q.q.split('\n')[0]]));
 p1.sections[1].items.forEach(q=>texts.push(['dictation',q.sentence.replace('___',q.answer)]));
 p2.sections[0].items.forEach(q=>texts.push(['locator',q.source.map(t=>typeof t==='string'?t:t.text).join(' ')]));
 p2.sections[1].items.forEach(q=>texts.push(['paraphrase',q.segments.map(t=>typeof t==='string'?t:t.text).join('')]));
 p2.sections[2].items.forEach(q=>q.transcript.forEach(s=>texts.push(['signal',s])));
 p2.sections.filter(s=>s.type==='route').forEach(s=>s.items.forEach(q=>q.transcript.forEach(t=>texts.push(['route',t]))));
 p0.sections[0].items.forEach(t=>{texts.push(['learn',t.example]);texts.push(['apply',t.application.replace('___',t.english)]);});
 p0.sections[1].items.forEach(s=>s.paragraphs.forEach(t=>texts.push(['context',t.replace(/\{\{(.*?)\}\}/g,'$1')])));
 const ref=normal(fs.readFileSync(path.join(root,`.work/references/c${p1.location.book}-t${p1.location.test}.txt`),'utf8'));
 for(const[kind,text]of texts)for(const sentence of text.split(/(?<=[.!?])\s+/)){const key=normal(sentence);if(key.split(' ').length<8)continue;sentences++;const previous=seen.get(key);if(previous)duplicates.push({id,kind,previous,sentence});else seen.set(key,{id,kind});if(ref.includes(key))sourceMatches.push({id,kind,sentence});}
}
fs.writeFileSync(path.join(root,'.work/listening-9-12-editorial-audit.json'),JSON.stringify({parts:bases.length,sentences,duplicates,sourceMatches},null,2));
assert.deepEqual(duplicates,[],'Whole English sentence reused');assert.deepEqual(sourceMatches,[],'Original test sentence reused');console.log(`${bases.length} new parts, ${sentences} English sentences: no full-sentence reuse or source copying; complete foundations and valid quiz keys.`);
