const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),context={};context.window=context;vm.createContext(context);
const files=['data/listening-practices.js','data/practice-builders.js','data/preparation-builders.js','data/editorial-multi.js','data/editorial-quiz-context.js','data/editorial-signal-context.js','data/editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort().map(n=>`data/${n}`),'data/audio-timings.js','exercise-catalog.js'];
files.forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
assert.equal(context.RRPreparedTopics.length,48);assert.equal(context.RRExerciseCatalog.length,96);assert.equal(Object.keys(context.RRListeningPractices).length,96);
const books=[20,19,18],missing=[],full=process.argv.includes('--audio');let tasks=0,audio=0,maps=0,dialogues=0;
for(const book of books)for(let test=1;test<=4;test++)for(let part=1;part<=4;part++){
 const base=`c${book}-t${test}-p${part}`;
 for(let n=1;n<=2;n++){
  const id=`${base}-${n}`;assert.equal(context.RRExerciseCatalog.filter(e=>e.id===id).length,1);
  
  const practice=context.RRListeningPractices[id];assert(practice);assert.equal(practice.location.book,book);assert.equal(practice.location.test,test);assert.equal(practice.location.part,part);
  const isNew=context.RRPreparedTopics.some(e=>e.book===book&&e.test===test&&e.part===part);
  if(!isNew)continue;
  assert(practice.coreWords.length>=12);assert(new Set(practice.coreWords.map(w=>w[0])).size>=12);
  practice.coreWords.forEach(word=>assert(Array.isArray(word)&&word.length===2&&word.every(value=>typeof value==='string'&&value.trim()),`${id}: malformed core vocabulary`));
  const route=practice.sections.some(s=>s.type==='route');if(route)maps++;
  assert.deepEqual(Array.from(practice.sections.map(s=>s.type)),n===1?['quiz','dictation']:route?['locator','paraphrase','signal','route']:['locator','paraphrase','signal']);
  for(const section of practice.sections){
   assert.equal(section.items.length,{quiz:12,dictation:12,locator:10,paraphrase:2,signal:route?1:2,route:1}[section.type]);
   for(const item of section.items){
    tasks++;
    if(section.type==='quiz'){
     if(item.options){assert.equal(item.options.length,4);assert.equal(new Set(item.options).size,4);(Array.isArray(item.answer)?item.answer:[item.answer]).forEach(a=>assert(item.options.includes(a)));}
    }else if(section.type==='dictation'){assert.equal(item.sentence.split('___').length,2);assert(item.answer);assert([-20,-10,0].includes(item.rate));}
    else if(section.type==='locator'){
     for(const field of ['source','question']){assert(item[field].some(t=>t.key),`${item.id}: no key`);assert(item[field].filter(t=>!t.key).length>=1);item[field].forEach(t=>assert(!/[\[\]|]/.test(typeof t==='string'?t:t.text)));}
     if(/填空/.test(item.format))assert(item.question.some(t=>(typeof t==='string'?t:t.text).includes('___')));
    }else if(section.type==='paraphrase'){
     const targets=item.segments.filter(s=>typeof s!=='string');assert.equal(targets.length,6);assert.equal(new Set(targets.map(t=>t.id)).size,6);assert.equal(item.choices.length,9);assert.equal(new Set(item.choices.map(c=>c.text.toLowerCase())).size,9);targets.forEach(t=>assert(item.choices.some(c=>c.id===t.answer)));
    }else if(section.type==='signal'){
     assert.equal(item.cues.length,3);assert.equal(item.tolerance,2);assert.equal(new Set(item.cues.map(c=>c.sentence)).size,3);
     item.cues.forEach(c=>assert(item.transcript[c.sentence].toLowerCase().startsWith(c.signal.toLowerCase())));
     if(part===3){dialogues++;assert(item.speakers?.length===item.transcript.length);assert.equal(new Set(item.speakers).size,2);}
    }else if(section.type==='route'){
     const nodes=new Map(item.map.nodes.map(n=>[n.id,n]));assert.equal(item.expectedPath[0],item.start);assert.equal(item.expectedPath.at(-1),item.goal);
     item.expectedPath.slice(1).forEach((id,i)=>assert(item.map.edges.some(e=>e.includes(id)&&e.includes(item.expectedPath[i]))));
     item.map.edges.forEach(([a,b])=>assert((nodes.get(a).x===nodes.get(b).x)!==(nodes.get(a).y===nodes.get(b).y)));
    }
    if(item.audio){
     audio++;if(!fs.existsSync(path.join(root,item.audio))||fs.statSync(path.join(root,item.audio)).size<3000)missing.push(item.audio);
     if(full&&['signal','route'].includes(section.type)){
      const timing=context.RRSignalTimings[item.audio];assert(timing,`Missing timing ${item.audio}`);assert(timing.duration>=41&&timing.duration<=48,`Duration ${item.audio}`);
      if(section.type==='signal'){assert.equal(timing.cues.length,3);assert(timing.cues.every(c=>c.start>=0&&c.start<timing.duration));}
      if(item.speakers)assert.equal(timing.voices.length,2);
     }
    }
   }
  }
 }
}
assert.equal(maps,3);assert.equal(audio,1152);assert.equal(dialogues,24);
if(full)assert.equal(missing.length,0,`Missing audio: ${missing.slice(0,10).join(', ')}`);
console.log(`Validated 48 revised topics / 96 revised practices / ${tasks} tasks / 3 maps / 24 voiced discussions. Audio: ${audio-missing.length}/${audio}.`);
