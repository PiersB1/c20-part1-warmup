window.RRQuiz = {
  choice(q,options,answer,why){return{type:Array.isArray(answer)?'multi':'single',q,options,answer:Array.isArray(answer)?answer.map(index=>options[index]):options[answer],why};},
  cloze(q,answer,why){return{type:'cloze',q,answer,why};}
};
window.RRAddTopic = config => {
  const base = `c20-t${config.test}-p${config.part}`;
  const audioRoot = `audio/${base}`;
  function tokens(text) {
    return text.split('|').map(part => {
      const match=/^\[([^\]]+)\]([.,;:?!]?)$/.exec(part);
      if(match)return{text:match[1]+match[2],key:true};
      if(/[\[\]]/.test(part))throw Error(`Invalid locator markup in ${base}: ${part}`);
      return part;
    });
  }
  function shuffled(list, seed) {
    let state = [...seed].reduce((sum,char) => (sum*31+char.charCodeAt(0))>>>0, 7);
    const result = [...list];
    for(let i=result.length-1;i>0;i--){state=(Math.imul(state,1664525)+1013904223)>>>0;const j=state%(i+1);[result[i],result[j]]=[result[j],result[i]];}
    return result;
  }
  const common = {title:config.title,vocabId:base,location:{skill:'listening',book:20,test:config.test,part:config.part},coreWords:config.coreWords,sourceRefs:config.sourceRefs};
  window.RRListeningPractices[`${base}-1`] = {
    ...common,id:`${base}-1`,label:'练习 1 · 词汇与句子听写',
    sections:[
      {id:'vocabulary',type:'quiz',title:'词汇与表达',instruction:'留意语境、限定条件和语气。多选题需选出全部正确项。',items:config.quiz.map((item,index)=>item.options?{...item,options:shuffled(item.options,`${base}-quiz-${index}`)}:item)},
      {id:'dictation',type:'dictation',title:'听句子填空',instruction:'每句单独播放。前 4 题较慢，中间 4 题稍快，最后 4 题为正常语速。',items:config.dictation.map((entry,index)=>({id:`${base}-d${index+1}`,sentence:entry[0],answer:entry[1],why:entry[2],accept:entry[3]||[],audio:`${audioRoot}/dictation-${String(index+1).padStart(2,'0')}.mp3`,rate:index<4?-20:index<8?-10:0}))}
    ]
  };
  window.RRListeningPractices[`${base}-2`] = {
    ...common,id:`${base}-2`,label:'练习 2 · 定位与同义替换',
    sections:[
      {id:'locators',type:'locator',title:'定位词标记',instruction:'只标记定位表达，不实际答题。每句有独立数量上限；再次点击可取消。',map:config.map,mapBeforeIndex:6,items:config.locators.map((entry,index)=>({id:`${base}-l${index+1}`,question:tokens(entry[0]),source:tokens(entry[1]),explanation:entry[2],format:entry[3]||'笔记填空',audio:`${audioRoot}/locator-${String(index+1).padStart(2,'0')}.mp3`}))},
      {id:'paraphrases',type:'paraphrase',title:'同义替换',instruction:'将表达拖入对应空格，每段多出 3 项。已填表达可拖回词库或移到其他空格，也可以点选操作。',items:config.paragraphs.map((item,index)=>{
        const segments=[];let last=0;const regex=/\[([^\]]+)\]/g;let match;
        while((match=regex.exec(item.text))){segments.push(item.text.slice(last,match.index));const pairIndex=item.pairs.findIndex(pair=>pair[0]===match[1]);if(pairIndex<0)throw Error(`Missing paraphrase ${base}: ${match[1]}`);segments.push({id:`${base}-p${index+1}-s${pairIndex+1}`,text:match[1],answer:`${base}-p${index+1}-a${pairIndex+1}`,explanation:item.pairs[pairIndex][2]});last=regex.lastIndex;}
        segments.push(item.text.slice(last));
        const choices=item.pairs.map((pair,i)=>({id:`${base}-p${index+1}-a${i+1}`,text:pair[1]})).concat(item.distractors.map((text,i)=>({id:`${base}-p${index+1}-x${i+1}`,text})));
        return {id:`${base}-paragraph-${index+1}`,title:item.title,segments,choices:shuffled(choices,`${base}-${index}`)};
      })},
      {id:'signals',type:'signal',title:'信号词捕捉',instruction:'听到提醒、修正或转入重点等信号，标记考点句的起点。每段 3 处，重听清空标记；整份练习完成后统一核对。',items:config.signals.map((item,index)=>{
        const order=item.order||item.transcript.map((_,i)=>i);
        return{id:`${base}-signal-${index+1}`,title:item.title,focus:item.focus,transcript:order.map(i=>item.transcript[i]),cues:item.cues.map(cue=>({...cue,sentence:order.indexOf(cue.sentence)})).sort((a,b)=>a.sentence-b.sentence),tolerance:2,audio:`${audioRoot}/signal-${String(index+1).padStart(2,'0')}.mp3`};
      })}
    ]
  };
};
