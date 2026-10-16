(() => {
  const {el,button}=RRUI;
  const normalize=value=>String(value).trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ');
  RRQuestionTypes.quiz={render(section,container){
    const entries=section.items.map((item,index)=>{
      const card=el('article','question-card quiz-card'),head=el('div','question-head');
      head.append(el('span','number',String(index+1)),el('h3','',item.q),el('span','count-label',item.type==='multi'?'多选':item.type==='cloze'?'填空':'单选'));
      card.append(head);
      if(item.type==='cloze'){const input=el('input','answer-input');input.autocomplete='off';input.spellcheck=false;input.setAttribute('aria-label',`第 ${index+1} 题答案`);card.append(input);}
      else{const options=el('div','quiz-options');item.options.forEach((choice,i)=>{const label=el('label','quiz-option'),input=el('input');input.type=item.type==='multi'?'checkbox':'radio';input.name=`${section.id}-q${index}`;input.value=choice;label.append(input,el('span','',`${String.fromCharCode(65+i)}. ${choice}`));options.append(label);});card.append(options);}
      const fb=el('div','feedback');fb.hidden=true;card.append(fb);container.append(card);
      card.addEventListener('input',()=>{fb.hidden=true;});
      return{item,card,fb};
    });
    function result(){const details=entries.map(({item,card},index)=>{const response=item.type==='cloze'?card.querySelector('input').value.trim():item.type==='multi'?[...card.querySelectorAll('input:checked')].map(input=>input.value):card.querySelector('input:checked')?.value||'';const correct=Array.isArray(item.answer)?Array.isArray(response)&&response.length===item.answer.length&&response.every(value=>item.answer.includes(value)):normalize(response)===normalize(item.answer);return{id:`${section.id}-${index+1}`,question:item.q,response,expected:item.answer,correct};});return{id:section.id,type:section.type,title:section.title,correct:details.filter(item=>item.correct).length,total:details.length,details};}
    return{getResult:result,check(){const value=result();entries.forEach(({item,fb},index)=>{const answer=Array.isArray(item.answer)?item.answer.join('；'):item.answer;RRUI.feedback(fb,`${value.details[index].correct?'✓ 正确。':`对应答案：${answer}。`} ${item.why}`,value.details[index].correct);});return value;}};
  }};
})();
