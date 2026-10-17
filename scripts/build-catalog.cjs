const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),context={};context.window=context;vm.createContext(context);
for(const file of ['listening-practices.js','practice-builders.js','preparation-builders.js',...fs.readdirSync(path.join(root,'data')).filter(name=>name.endsWith('.practice.js')).sort()])vm.runInContext(fs.readFileSync(path.join(root,'data',file),'utf8'),context,{filename:file});
const original=[{id:'c20-t1-p1-1',mode:'listening',book:20,test:1,part:1,title:'练习 1 · 词汇与句子听写',description:'餐厅对话',url:'practice.html'}];
const practices=Object.values(context.RRListeningPractices).map(item=>({id:item.id,mode:'listening',book:item.location.book,test:item.location.test,part:item.location.part,title:item.label,description:item.title+' · '+item.sections.map(s=>s.title).join(' · '),url:`listening.html?id=${item.id}`}));
const entries=original.concat(practices).sort((a,b)=>b.book-a.book||a.test-b.test||a.part-b.part||a.id.localeCompare(b.id));
fs.writeFileSync(path.join(root,'exercise-catalog.js'),'window.RRExerciseCatalog = '+JSON.stringify(entries,null,2)+';\n');
console.log(`Catalog: ${entries.length} practices across ${new Set(entries.map(e=>`${e.book}/${e.test}/${e.part}`)).size} parts.`);
