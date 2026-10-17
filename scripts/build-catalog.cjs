const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),context={};context.window=context;vm.createContext(context);
for(const file of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(name=>name.endsWith('.practice.js')).sort()])vm.runInContext(fs.readFileSync(path.join(root,'data',file),'utf8'),context,{filename:file});
for(const id of Object.keys(context.RRTopicSeeds))if(!context.RRListeningPractices[id+'-1']||!context.RRListeningPractices[id+'-2'])throw Error(`Missing authored revision for ${id}`);
const practices=Object.values(context.RRListeningPractices).map(item=>({id:item.id,mode:'listening',book:item.location.book,test:item.location.test,part:item.location.part,title:item.label,description:item.title+' · '+item.sections.map(s=>s.title).join(' · '),url:`listening.html?id=${item.id}`}));
const entries=practices.sort((a,b)=>b.book-a.book||a.test-b.test||a.part-b.part||a.id.localeCompare(b.id));
fs.writeFileSync(path.join(root,'exercise-catalog.js'),'window.RRExerciseCatalog = '+JSON.stringify(entries,null,2)+';\n');
console.log(`Catalog: ${entries.length} practices across ${new Set(entries.map(e=>`${e.book}/${e.test}/${e.part}`)).size} parts.`);
