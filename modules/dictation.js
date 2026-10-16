(() => {
  const {el,button}=RRUI;
  const normalize=value=>value.trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ').replace(/[.,!?]$/,'');
  RRQuestionTypes.dictation={render(section,container){
    const entries=section.items.map((item,index)=>{
      const card=el('article','question-card dictation-card'),head=el('div','question-head');
      head.append(el('span','number',String(index+1)),el('span','count-label',`${(1+item.rate/100).toFixed(1)}×`));
      const play=button('▶ 播放'),audio=new Audio(item.audio);audio.preload='none';
      const line=el('div','dictation-sentence'),parts=item.sentence.split('___'),input=el('input','answer-input');input.autocomplete='off';input.spellcheck=false;input.setAttribute('aria-label',`第 ${index+1} 题听写答案`);
      line.append(document.createTextNode(parts[0]),input,document.createTextNode(parts[1]||''));
      const fb=el('div','feedback');fb.hidden=true;
      play.addEventListener('click',()=>{audio.currentTime=0;RRUI.play(audio).catch(()=>RRUI.feedback(fb,'音频暂时无法播放，请重试。',false));});input.addEventListener('input',()=>{fb.hidden=true;});
      card.append(head,play,line,fb);container.append(card);return{item,input,fb};
    });
    function result(){const details=entries.map(({item,input})=>({id:item.id,question:item.sentence,response:input.value.trim(),expected:item.answer,correct:[item.answer,...item.accept].some(answer=>normalize(answer)===normalize(input.value))}));return{id:section.id,type:section.type,title:section.title,correct:details.filter(item=>item.correct).length,total:details.length,details};}
    return{getResult:result,check(){const value=result();entries.forEach(({item,fb},index)=>RRUI.feedback(fb,`${value.details[index].correct?'✓ 正确。':`对应答案：${item.answer}。`} ${item.why}`,value.details[index].correct));return value;}};
  }};
})();
