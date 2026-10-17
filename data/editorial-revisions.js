/* Explicit editorial material. Each activity has its own text. */
window.RRRevisionCoverage=[];
window.RRParagraph=(title,text,distractors)=>{
  const explanations=[];
  text=text.replace(/\[([^\]=>]+)=>([^\]=>]+)=>([^\]]+)\]/g,(_,a,b,why)=>{explanations.push(why);return `[${a}=>${b}]`;});
  return {title,text,distractors,explanations};
};
window.RRReviseTopic=(id,edit)=>{
  if(!RRListeningPractices[id+'-1'])RRCreateSeedPractice(id);
  const first=RRListeningPractices[id+'-1'],second=RRListeningPractices[id+'-2'];
  if(!first||!second)throw Error('Unknown revision '+id);
  const rows=value=>value.trim().split('\n').map(line=>line.trim()).filter(Boolean);
  const tokenise=value=>{
    const result=[];const re=/\[([^\]]+)\]|([^\[\]]+)/g;let m;
    while((m=re.exec(value))){
      if(m[1])result.push({text:m[1],key:true});
      else result.push(...m[2].trim().split(/\s+/).filter(Boolean));
    }
    return result;
  };
  const locators=second.sections.find(s=>s.type==='locator');
  const oldMap=locators.items.map(item=>/地图|平面图/.test(item.format));
  const lines=rows(edit.locators);
  if(lines.length!==10)throw Error(id+' needs ten locators');
  locators.items=locators.items.map((item,i)=>{
    if(oldMap[i])return item;
    const [q,s,why]=lines[i].split('~');
    if(!why)throw Error(id+' locator explanation '+i);
    const question=tokenise(q),source=tokenise(s);
    if(question.filter(t=>t.key).length<2||source.filter(t=>t.key).length<2)throw Error(id+' needs multiple locator keys '+i);
    if(/填空/.test(item.format)&&!q.includes('___'))throw Error(id+' missing gap '+i);
    return {...item,question,source,explanation:why};
  });
  const paragraphs=second.sections.find(s=>s.type==='paraphrase');
  paragraphs.items=edit.paragraphs.map((entry,i)=>{
    const segments=[],choices=[];let last=0;const regex=/\[([^\]=>]+)=>([^\]]+)\]/g;let match;
    while((match=regex.exec(entry.text))){
      const n=choices.length+1,answer=`${id}-p${i+1}-a${n}`;
      segments.push(entry.text.slice(last,match.index));
      segments.push({id:`${id}-p${i+1}-s${n}`,text:match[1],answer,explanation:entry.explanations[n-1]});
      choices.push({id:answer,text:match[2]});last=regex.lastIndex;
    }
    segments.push(entry.text.slice(last));
    if(choices.length!==6||entry.explanations.length!==6||entry.distractors.length!==3)throw Error(id+' paragraph counts');
    choices.push(...entry.distractors.map((text,j)=>({id:`${id}-p${i+1}-x${j}`,text})));
    // Stable interleaving, with a different order for the second paragraph.
    const order=i?[7,2,5,0,8,3,6,1,4]:[3,6,0,8,4,1,7,5,2];
    return {id:`${id}-paragraph-${i+1}`,title:entry.title,segments,choices:order.map(j=>choices[j])};
  });
  const signals=second.sections.find(s=>s.type==='signal');
  signals.items=edit.signals.slice(0,signals.items.length).map((entry,i)=>{
    const transcript=[],cues=[];
    const authored=rows(entry.text),context=entry.context||RRSignalContext[id]?.[i];
    if(!context)throw Error(id+' missing signal context '+i);
    authored.splice(context[0],0,context[1]);
    for(const line of authored){
      const parts=line.split('~');
      if(parts.length===2)cues.push({sentence:transcript.length,signal:parts[0],why:parts[1]});
      transcript.push(parts[0]);
    }
    if(cues.length!==3)throw Error(id+' signal cue count '+i);
    return {...signals.items[i],title:entry.title,focus:entry.focus,transcript,cues,...(first.location.part===3?{speakers:transcript.map((_,j)=>j%2?'en-GB-RyanNeural':'en-GB-SoniaNeural')}:{})};
  });
  const quiz=first.sections.find(s=>s.type==='quiz');
  const optionRows=rows(edit.options);
  const quizContexts=rows(edit.quizContexts||RRQuizContexts[id]||'');
  if(optionRows.length!==8)throw Error(id+' needs eight sets of close distractors');
  if(quizContexts.length!==8)throw Error(id+' needs eight independent quiz contexts');
  quiz.items.slice(0,8).forEach((item,i)=>{
    const term=first.coreWords[i][0],meaning=first.coreWords[i][1];
    const wrong=optionRows[i].split('|');
    if(wrong.length!==3)throw Error(id+' quiz distractors '+i);
    item.q=`${quizContexts[i].replace('___',term)}\n这里的 ${term} 最准确的意思是？`;
    item.options=[meaning,...wrong];
    const offset=(i+first.location.test)%4;
    item.options=item.options.slice(offset).concat(item.options.slice(0,offset));
    item.answer=meaning;
    item.why=`${term} 在本篇指“${meaning}”。${edit.optionNotes?.[i]||'注意选项在对象、范围或动作上的区别，不能只按相近的中文词判断。'}`;
  });
  const contrasts=edit.multi||RRMultiContrasts[id];
  if(!contrasts||contrasts.length!==2)throw Error(id+' missing multiple-choice contrasts');
  quiz.items.slice(8,10).forEach((item,i)=>{
    const pair=contrasts[i],answers=item.answer;
    item.options=[answers[1],pair[0],answers[0],pair[1]];
    if(i===1)item.options.reverse();
    item.why=`${answers[0]} 与 ${answers[1]} 表达本篇同一概念。${pair[0]} 指 ${pair[1]}，所指对象或范围不同。`;
  });
  const dictation=first.sections.find(s=>s.type==='dictation');
  const mapDictations={
    'c18-t2-p2':{
      4:'Families must apply separately for a place at the ___.',
      5:'The residents requested softer surfacing in the ___.',
      6:'Small clubs can reserve the ___ for evening meetings.',
      7:'Repairs and basic equipment will be available at the ___.',
      8:'Lighting inside the ___ will be checked before winter.',
      9:'Newspapers and basic groceries are sold at the ___.'
    },
    'c19-t1-p2':{
      5:'Volunteers will record the older fruit varieties in the ___.',
      6:'A restoration grant will support planting in the ___.',
      7:'Please pay for refreshments directly at the ___.',
      8:'Visitors should remove all litter from the ___.',
      9:'The evening performance is cancelled if rain reaches the ___.'
    }
  };
  for(const [index,sentence] of Object.entries(mapDictations[id]||{}))dictation.items[index]={...dictation.items[index],sentence,editorialChanged:true};
  if(edit.grammar.length!==2)throw Error(id+' grammar count');
  edit.grammar.forEach((row,i)=>{
    const [q,answer,why,sentence]=row;
    quiz.items[10+i]={type:'cloze',q,answer,why};
    dictation.items[10+i]={...dictation.items[10+i],sentence,answer,why,accept:[]};
  });
  const excluded=new Set(['on','been','have','and','if','was','from','before','until','into','to','in','at','by','of','for','with','will show','not been']);
  const meaningful=first.coreWords.filter(([english])=>!excluded.has(english.toLowerCase()));
  if(edit.words)meaningful.push(...edit.words);
  const unique=meaningful.filter((word,i,all)=>all.findIndex(other=>other[0]===word[0])===i);
  first.coreWords=second.coreWords=unique;
  first.revision=second.revision='2026-10-editorial';
  first.preparationFocus=second.preparationFocus=edit.coverage;
  RRRevisionCoverage.push({id,coverage:edit.coverage,retainedMap:oldMap.some(Boolean)});
};
