/* Shared data plumbing. Content is supplied by the explicit editorial files. */
window.RRPreparedTopics=[];
window.RRTopicSeeds={};
window.RRSeedTopic=config=>{
  const id=`c${config.book}-t${config.test}-p${config.part}`;
  if(RRTopicSeeds[id])throw Error('Duplicate seed '+id);
  RRTopicSeeds[id]=config;
  RRPreparedTopics.push({book:config.book,test:config.test,part:config.part,title:config.title,map:Boolean(config.map)});
};
window.RRCreateSeedPractice=id=>{
  const config=RRTopicSeeds[id];
  if(!config)throw Error('Missing topic seed '+id);
  const units=config.units.split('\n').map(line=>{
    const [word,chinese,synonym,sentence]=line.split('|');
    return {word,chinese,synonym,sentence};
  });
  if(units.length!==12)throw Error(id+' needs twelve vocabulary entries');
  const plain=value=>value.replace(/[\[\]]/g,'');
  const source=unit=>unit.sentence.replace('___',`[${unit.word}]`).replace(/([^\[\]]+)|\[([^\]]+)\]/g,(_,normal,key)=>key?`|[${key}]|`:normal.trim().split(/\s+/).join('|')).replace(/\|+/g,'|').replace(/^\||\|$/g,'');
  const formats=config.formats.flatMap(([format,count])=>Array(count).fill(format));
  // Non-map material below is filled synchronously by RRReviseTopic before rendering.
  const quiz=units.slice(0,8).map(unit=>RRQuiz.choice(unit.word,[unit.chinese],0,''));
  units.slice(8,10).forEach(unit=>quiz.push(RRQuiz.choice(`哪些表达与“${unit.chinese}”一致？选两项。`,[unit.word,unit.synonym],[0,1],'')));
  quiz.push(RRQuiz.cloze('','', ''),RRQuiz.cloze('','',''));
  const dictation=units.slice(0,10).map(u=>[plain(u.sentence),u.word,`${u.word}：${u.chinese}。同义表达：${u.synonym}。`]);
  dictation.push(['___','',''],['___','','']);
  const locators=units.slice(0,10).map((u,i)=>[
    `Where|does|the|guide|locate|[${u.synonym}]|?`,source(u),
    `题干中的 ${u.synonym}／相关定位表达，对应原文 ${u.word}（${u.chinese}）。结合句中的限定和转折判断，标记的是定位关系，不需要填写答案。`,formats[i]
  ]);
  const signals=[0,1].map(i=>({title:'',focus:'',transcript:[],cues:[],...(config.part===3?{speakers:[]}: {})}));
  const words=units.map(u=>[u.word,u.chinese]).concat(...(config.routes||[]).map(r=>r.vocabulary),...(config.routes?.length?[[['eastbound','向东行进']]]:[]));
  RRAddTopic({...config,coreWords:words,quiz,dictation,locators,paragraphs:[],signals});
  for(const {index,item} of config.preservedMapItems||[])RRListeningPractices[id+'-2'].sections[0].items[index]=item;
};
