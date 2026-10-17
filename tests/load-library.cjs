const fs=require('fs'),path=require('path'),vm=require('vm');
module.exports=function(){
 const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
 const names=['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort(),'audio-timings.js'];
 for(const name of names)vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c,{filename:name});
 vm.runInContext(fs.readFileSync(path.join(root,'exercise-catalog.js'),'utf8'),c);
 return c;
};
