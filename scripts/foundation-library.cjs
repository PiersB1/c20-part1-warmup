const fs=require('fs'),path=require('path'),vm=require('vm');
module.exports=(context,root)=>{
  const previous=JSON.parse(fs.readFileSync(path.join(root,'data/vocabulary-clarity.json'),'utf8'));
  for(const file of ['foundation-listening.js','foundation-reading.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',file),'utf8'),context,{filename:file});
  let audioIndex=0;
  const practices=context.RRFoundationSources.map(source=>{
    const base=(source.mode==='reading'?context.RRReadingPractices:context.RRListeningPractices)[source.base];
    if(!base)throw Error('Missing foundation source '+source.base);
    const id=source.base.replace(/-1$/,'-0'),core=new Map(base.coreWords);
    if(source.terms.length!==core.size||new Set(source.terms.map(t=>t[0])).size!==core.size)throw Error('Incomplete word coverage '+id);
    const terms=source.terms.map(([english,example,translation,application,applicationTranslation],i)=>{
      if(!core.has(english)||application.split('___').length!==2||!example||!translation||!applicationTranslation)throw Error('Invalid term '+english);
      return {id:`w${i+1}`,english,chinese:core.get(english),previousMeanings:Object.keys(previous).filter(old=>previous[old]===core.get(english)),example,translation,application,applicationTranslation,audio:`audio/foundation/${id}/${String(i+1).padStart(2,'0')}.mp3`,voice:audioIndex++%2?'en-GB-RyanNeural':'en-GB-LibbyNeural'};
    });
    const grouped=source.groups.flat();
    if(grouped.length!==terms.length||new Set(grouped).size!==terms.length||grouped.some(w=>!core.has(w))||source.groups.some(g=>g.length<4||g.length>6))throw Error('Invalid word groups '+id);
    const blanks=source.passage.flatMap(p=>[...p.matchAll(/\{\{(.*?)\}\}/g)].map(m=>m[1]));
    if(![4,5].includes(source.omitted.length)||new Set(blanks).size!==blanks.length||blanks.length!==terms.length-source.omitted.length||blanks.some(w=>!core.has(w)||source.omitted.includes(w)))throw Error('Invalid passage bank '+id);
    if(source.omitted.some(w=>!core.has(w)))throw Error('Unknown distractor '+id);
    return {id,mode:source.mode,title:base.title,label:'练习 0 · 基础词汇',location:base.location,vocabId:base.vocabId||source.base.replace(/-1$/,''),coreWords:base.coreWords,selfPaced:true,
      sections:[{id:id+'-learning',type:'foundation',title:'基础词汇',unit:'词组',instruction:'分组认识、换语境应用，再穿插回忆。每题单独核对，学习进度自动保存。',items:terms,groups:source.groups.map(g=>g.map(w=>terms.find(t=>t.english===w).id)),passage:{title:source.passageTitle,paragraphs:source.passage},passageAccept:source.passageAccept||{},omitted:source.omitted}]
    };
  });
  fs.writeFileSync(path.join(root,'data/foundation-library.js'),'window.RRFoundationPractices = '+JSON.stringify(Object.fromEntries(practices.map(p=>[p.id,p])),null,2)+';\n');
  return practices;
};
