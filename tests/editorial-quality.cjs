const fs=require('fs'),path=require('path'),assert=require('assert');
const c=require('./load-library.cjs')(),norm=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(),txt=a=>a.map(t=>typeof t==='string'?t:t.text).join(' ');
assert.equal(c.RRExerciseCatalog.length,96);assert.equal(c.RRPreparedTopics.length,48);assert.equal(c.RRRevisionCoverage.length,48);
const bad=new Set(['on','been','have','and','if','was','from','before','until','into','to','in','at','by','of','for','with']);
const grammar=new Set(),explanations=new Set(),cuePatterns=new Set();let locators=0,paragraphs=0,signals=0;
for(const topic of c.RRRevisionCoverage){
 const p=c.RRListeningPractices[topic.id+'-2'],one=c.RRListeningPractices[topic.id+'-1'];
 assert(p.preparationFocus.length>15);
 p.coreWords.forEach(w=>assert(!bad.has(w[0].toLowerCase()),topic.id+' basic word '+w[0]));
 const ls=p.sections[0].items,ps=p.sections[1].items,ss=p.sections[2].items;
 const sentences=ls.map(i=>norm(txt(i.source))),dict=one.sections[1].items.map(i=>norm(i.sentence.replace('___',i.answer)));
 const passages=ps.map(i=>norm(txt(i.segments))),spoken=ss.map(i=>norm(i.transcript.join(' ')));
 for(const item of ls){
  if(/地图|平面图/.test(item.format))continue;
  locators++;
  for(const f of ['source','question'])assert(item[f].filter(t=>t.key).length>=2,item.id+' one key');
  assert(!/The discussion of|One detail about|The example involving|The notes on|Regarding .*the speaker mentions/.test(txt(item.question)));
  if(/填空/.test(item.format))assert(txt(item.question).includes('___'));
 }
 for(const sentence of sentences){
  assert(!passages.some(t=>t.includes(sentence)),topic.id+' locator reused in paragraph');
  assert(!dict.includes(sentence),topic.id+' locator reused as dictation');
  assert(!spoken.some(t=>t.includes(sentence)),topic.id+' locator reused in signal');
 }
 for(const sentence of dict){assert(!passages.some(t=>t.includes(sentence)),topic.id+' dictation reused in paragraph');assert(!spoken.some(t=>t.includes(sentence)),topic.id+' dictation reused in signal');}
  for(const item of one.sections[0].items.slice(0,8)){
    const sentence=norm(item.q.split('\n')[0]);
    assert(!dict.includes(sentence),topic.id+' quiz context reused in dictation');
    assert(!sentences.includes(sentence),topic.id+' quiz context reused in locator');
    assert(!passages.some(t=>t.includes(sentence)),topic.id+' quiz context reused in paraphrase');
    assert(!spoken.some(t=>t.includes(sentence)),topic.id+' quiz context reused in signal');
  }
 ps.forEach(item=>{paragraphs++;const slots=item.segments.filter(s=>typeof s!=='string');assert.equal(slots.length,6);assert.equal(item.choices.length,9);assert.equal(new Set(item.choices.map(x=>x.text)).size,9);for(const s of slots){assert(s.explanation);assert(item.choices.some(x=>x.id===s.answer));}});
 ss.forEach(item=>{signals++;cuePatterns.add(item.cues.map(c=>c.sentence).join(','));assert.equal(item.cues.length,3);for(const cue of item.cues){assert(cue.why.length>6);assert(!explanations.has(cue.why),'Repeated cue explanation '+cue.why);explanations.add(cue.why);assert.equal(cue.signal,item.transcript[cue.sentence]);}});
 one.sections[0].items.forEach((item,i)=>{if(item.options){assert.equal(item.options.length,4);assert.equal(new Set(item.options).size,4,topic.id+' duplicate quiz option '+i);for(const a of Array.isArray(item.answer)?item.answer:[item.answer])assert(item.options.includes(a));}else{assert(item.q.includes('___'));assert(item.answer);}});
 one.sections[1].items.slice(-2).forEach(item=>{const s=norm(item.sentence.replace('___',item.answer));assert(!grammar.has(s),'Generic grammar repeated '+s);grammar.add(s);});
}
assert(cuePatterns.size>=3,'Signal points should not all follow the same sentence placement');
for(const book of [9,10,11]){
 assert(!c.RRExerciseCatalog.some(p=>p.book===book));
 assert(!fs.existsSync(path.resolve(__dirname,`../data/expanded-c${book}.practice.js`)));
 assert(!fs.readdirSync(path.resolve(__dirname,'../audio')).some(n=>n.startsWith(`c${book}-`)));
 assert(!Object.keys(c.RRSignalTimings).some(n=>n.startsWith(`audio/c${book}-`)));
}
console.log(`Editorial checks: 48 parts; ${locators} rewritten locators; ${paragraphs} independent paragraphs; ${signals} authored signals; no cross-section sentence reuse or single function words.`);
