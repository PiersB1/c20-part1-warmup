const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const f of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort(),'foundation-library.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',f),'utf8'),c,{filename:f});
const report={expectedParts:64,completeParts:0,missing:[],parts:[]};
for(const book of [12,11,10,9])for(let test=1;test<=4;test++)for(let part=1;part<=4;part++){
 const id=`c${book}-t${test}-p${part}`,p1=c.RRListeningPractices[id+'-1'],p2=c.RRListeningPractices[id+'-2'],p0=c.RRFoundationPractices[id+'-0'];
 if(!p1||!p2||!p0){report.missing.push(id);continue;}
 assert.equal(p1.sections[0].items.length,12,id);assert.equal(p1.sections[1].items.length,12,id);assert.equal(p2.sections[0].items.length,10,id);assert.equal(p2.sections[1].items.length,2,id);
 const route=p2.sections.some(s=>s.type==='route');assert.equal(p2.sections[2].items.length,route?1:2,id);
 const wordCount=ts=>ts.map(t=>typeof t==='string'?t:t.text).join(' ').split(/\s+/).length;
 for(const [i,q]of p2.sections[0].items.entries())for(const side of ['question','source']){const n=i<6?1:2;assert(q.paired);assert.equal(q[side].filter(t=>t.key).length,n,id+' pair count');if(n===2)assert(wordCount(q[side])>=(side==='question'?20:25),id+' short double-pair '+i+' '+side);}
 for(const s of p2.sections[2].items){assert.equal(s.cues.length,3);if(part===3)assert.equal(new Set(s.speakers).size,2);}
 assert.deepEqual(JSON.parse(JSON.stringify(p0.coreWords)),JSON.parse(JSON.stringify(p1.coreWords)));assert.equal(p0.sections[1].items.length,2);
 report.completeParts++;report.parts.push({id,title:p1.title,coreWords:p1.coreWords.length,route,signalWords:p2.sections[2].items.map(s=>s.transcript.join(' ').split(/\s+/).length)});
}
report.complete=report.completeParts===64;fs.writeFileSync(path.join(root,'LISTENING-9-12-AUDIT.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({complete:report.complete,completeParts:report.completeParts,missing:report.missing.length}));
if(process.argv.includes('--require-complete'))assert(report.complete,'Listening 9–12 incomplete');
