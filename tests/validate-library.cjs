const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),context={};context.window=context;vm.createContext(context);
const files=['data/listening-practices.js','data/practice-builders.js',...fs.readdirSync(path.join(root,'data')).filter(name=>name.endsWith('.practice.js')).sort().map(name=>`data/${name}`),'data/audio-timings.js','exercise-catalog.js'];
files.forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const extra=Object.values(context.RRListeningPractices).filter(item=>item.id!=='c20-t1-p1-2');
assert.equal(extra.length,14);
let audioCount=0,questionCount=0;
for(const practice of extra){
  assert(practice.coreWords.length>=14);
  assert(context.RRExerciseCatalog.some(item=>item.id===practice.id));
  const mapPractice=practice.id==='c20-t3-p2-2';
  assert.deepEqual(Array.from(practice.sections.map(s=>s.type)),practice.id.endsWith('-1')?['quiz','dictation']:mapPractice?['locator','paraphrase','signal','route']:['locator','paraphrase','signal']);
  if(mapPractice)assert.equal(practice.sections[2].items.length,1);
  assert.equal(practice.sections[0].items.length,practice.id.endsWith('-1')?12:10);
  for(const section of practice.sections){
    for(const item of section.items){
      questionCount++;
      if(section.type==='quiz'){
        if(item.options){assert.equal(item.options.length,4);const answers=Array.isArray(item.answer)?item.answer:[item.answer];answers.forEach(answer=>assert(item.options.includes(answer)));}
      }else if(section.type==='dictation'){
        assert.equal(item.sentence.split('___').length,2);assert(item.answer);assert([-20,-10,0].includes(item.rate));
      }else if(section.type==='locator'){
        for(const field of ['question','source']){assert(item[field].some(token=>token.key));item[field].forEach(token=>assert(!/[\[\]|]/.test(typeof token==='string'?token:token.text),`${item.id}: malformed token`));}
        if(practice.location.part===1)assert(item.question.some(token=>typeof token==='string'&&token.includes('___')));
      }else if(section.type==='paraphrase'){
        const slots=item.segments.filter(segment=>typeof segment!=='string');assert.equal(slots.length,6);assert.equal(item.choices.length,9);assert.equal(new Set(item.choices.map(choice=>choice.id)).size,9);slots.forEach(slot=>assert(item.choices.some(choice=>choice.id===slot.answer)));
      }else if(section.type==='signal'){
        assert.equal(item.cues.length,3);assert.equal(item.tolerance,2);
        const timing=context.RRSignalTimings[item.audio];assert(timing,`Missing timing: ${item.audio}`);assert(timing.duration>=41&&timing.duration<=48);assert.equal(timing.cues.length,3);
        item.cues.forEach((cue,i)=>{assert(item.transcript[cue.sentence].toLowerCase().startsWith(cue.signal.toLowerCase()));assert(timing.cues[i].start>0&&timing.cues[i].start<timing.duration);});
      }else if(section.type==='route'){
        const nodes=new Map(item.map.nodes.map(node=>[node.id,node]));
        assert.equal(item.expectedPath[0],item.start);assert.equal(item.expectedPath.at(-1),item.goal);
        item.map.edges.forEach(([a,b])=>{assert(nodes.has(a)&&nodes.has(b));assert((nodes.get(a).x===nodes.get(b).x)!==(nodes.get(a).y===nodes.get(b).y));});
        item.expectedPath.slice(1).forEach((id,i)=>assert(item.map.edges.some(edge=>edge.includes(id)&&edge.includes(item.expectedPath[i]))));
        const timing=context.RRSignalTimings[item.audio];assert(timing&&timing.duration>=41&&timing.duration<=48);
      }
      if(item.audio){audioCount++;const full=path.join(root,item.audio);assert(fs.existsSync(full),`Missing ${item.audio}`);assert(fs.statSync(full).size>5000);}
    }
  }
}
assert.equal(context.RRListeningPractices['c20-t3-p2-2'].sections[0].items.filter(item=>item.format==='地图标注').length,4);
assert(context.RRListeningPractices['c20-t3-p2-2'].sections[0].map.svg.includes('<svg'));
assert.equal(audioCount,168);
console.log(`Validated ${extra.length} new practices, ${questionCount} tasks, ${audioCount} audio files.`);
