(() => {
  const {el,button,feedback}=RRUI;
  RRQuestionTypes['foundation-context']={render(section,container){
    const key='rr:foundation:context:v1:'+section.id;
    const signature=JSON.stringify(section.items.map(p=>[p.id,p.paragraphs,p.words.map(t=>t.id)]));
    let saved;
    try{saved=JSON.parse(localStorage.getItem(key)||'null');}catch{}
    if(saved?.signature!==signature)saved={signature,stories:{}};
    const persist=()=>{try{localStorage.setItem(key,JSON.stringify(saved));}catch{document.getElementById('save-status').textContent='无法保存，请检查存储设置。';}};
    const notify=()=>container.dispatchEvent(new CustomEvent('rr:answer-check',{bubbles:true}));
    const entries=section.items.map((item,storyIndex)=>{
      const state=saved.stories[item.id]||(saved.stories[item.id]={assignments:{},checks:{},active:null,picked:null,attempts:[]});
      const byId=new Map(item.words.map(t=>[t.id,t])),slots=new Map(),choices=new Map();
      const card=el('article','question-card foundation-passage');card.dataset.contextId=item.id;
      const heading=el('div','context-heading');heading.append(el('span','number',String(storyIndex+1)),el('h3','',item.title));card.append(heading);
      const story=el('div','foundation-story'),bank=el('div','word-bank');bank.setAttribute('aria-label',item.title+'词库，可将已填词拖回');
      const controls=el('div','passage-checker'),label=el('span','small-label'),check=button('核对这一空','primary'),fb=el('div','feedback'),count=el('p','small-label');fb.hidden=true;fb.setAttribute('aria-live','polite');
      let n=0;
      const prefix=section.id+'/'+item.id;
      const accepted=target=>[target.english,...(item.accept?.[target.english]||[])];
      function update(){
        slots.forEach(({slot,number},id)=>{const value=byId.get(state.assignments[id]);slot.textContent=value?value.english:'____';slot.draggable=!!value;slot.classList.toggle('filled',!!value);slot.classList.toggle('slot-right',state.checks[id]?.correct===true);slot.classList.toggle('slot-wrong',state.checks[id]?.correct===false);number.classList.toggle('active',state.active===id);number.setAttribute('aria-pressed',String(state.active===id));});
        choices.forEach((node,id)=>{node.hidden=Object.values(state.assignments).includes(id);node.classList.toggle('picked',state.picked===id);node.setAttribute('aria-pressed',String(state.picked===id));});
        const active=slots.get(state.active),result=state.checks[state.active];label.textContent=active?`第 ${active.index+1} 空`:'选择一空';check.disabled=!active||!state.assignments[state.active];
        fb.hidden=!result;
        if(result){const choice=byId.get(state.assignments[state.active]),term=result.correct?choice:active.term;feedback(fb,`${result.correct?'✓':'应填'} ${term.english}：${term.chinese}`,result.correct);}
        count.textContent=`${Object.values(state.checks).filter(c=>c.correct).length}/${slots.size} 空正确`;
      }
      function change(){persist();update();}
      function remove(word){for(const [id,value]of Object.entries(state.assignments))if(value===word){delete state.assignments[id];delete state.checks[id];}state.picked=null;change();}
      function place(slot,word){
        if(!byId.has(word)||!slots.has(slot))return;
        for(const [id,value]of Object.entries(state.assignments))if(value===word){delete state.assignments[id];delete state.checks[id];}
        state.assignments[slot]=word;delete state.checks[slot];state.active=slot;state.picked=null;change();
      }
      const drag=(event,word)=>{event.dataTransfer.setData('text/plain',prefix+'|'+word);event.dataTransfer.effectAllowed='move';};
      const decode=event=>{const [source,word]=event.dataTransfer.getData('text/plain').split('|');return source===prefix&&byId.has(word)?word:null;};
      item.paragraphs.forEach(paragraph=>{
        const line=el('p');let offset=0;
        for(const match of paragraph.matchAll(/\{\{(.*?)\}\}/g)){
          line.append(document.createTextNode(paragraph.slice(offset,match.index)));
          const term=item.words.find(t=>t.english===match[1]),index=n++,id='gap'+index;
          const wrap=el('span','foundation-gap'),number=button(String(index+1),'gap-number'),slot=button('____','drop-slot');slot.dataset.slotId=id;slot.setAttribute('aria-label',`${item.title}第${index+1}空`);number.setAttribute('aria-label',`选择第${index+1}空`);
          number.addEventListener('click',()=>{state.active=id;change();});
          slot.addEventListener('click',()=>{if(state.picked)place(id,state.picked);else if(state.assignments[id])remove(state.assignments[id]);else{state.active=id;change();}});
          slot.addEventListener('dragstart',event=>{if(!state.assignments[id]){event.preventDefault();return;}drag(event,state.assignments[id]);});
          slot.addEventListener('dragover',event=>event.preventDefault());slot.addEventListener('drop',event=>{event.preventDefault();const word=decode(event);if(word)place(id,word);});
          slots.set(id,{slot,number,term,index,paragraph:paragraph.replace(/\{\{.*?\}\}/g,'___')});wrap.append(number,slot);line.append(wrap);offset=match.index+match[0].length;
        }
        line.append(document.createTextNode(paragraph.slice(offset)));story.append(line);
      });
      // Interleave choices independently of the order in the text.
      const order=[...item.words];for(let i=order.length-1;i>0;i--){const j=(i*7+storyIndex*3+5)%(i+1);[order[i],order[j]]=[order[j],order[i]];}
      order.forEach(term=>{const node=button(term.english,'bank-choice');node.dataset.choiceId=term.id;node.draggable=true;node.addEventListener('click',()=>{state.picked=state.picked===term.id?null:term.id;change();});node.addEventListener('dragstart',event=>drag(event,term.id));choices.set(term.id,node);bank.append(node);});
      bank.addEventListener('dragover',event=>event.preventDefault());bank.addEventListener('drop',event=>{event.preventDefault();const word=decode(event);if(word)remove(word);});
      check.addEventListener('click',()=>{
        const active=slots.get(state.active),choice=byId.get(state.assignments[state.active]);if(!active||!choice)return;
        const correct=accepted(active.term).includes(choice.english);state.checks[state.active]={correct};state.attempts.push({gap:state.active,response:choice.english,expected:accepted(active.term),correct,at:new Date().toISOString()});change();notify();
      });
      controls.append(label,check,fb);card.append(story,el('h4','bank-heading','词库'),bank,controls,count);container.append(card);update();
      return {result(){return [...slots].map(([id,slot])=>{const attempts=state.attempts.filter(a=>a.gap===id),last=attempts.at(-1);return {id:item.id+'-'+id,question:`${item.title} · 第${slot.index+1}空`,context:slot.paragraph,response:last?.response||'',expected:accepted(slot.term),correct:state.checks[id]?.correct===true,attempts};});}};
    });
    const getResult=()=>{const details=entries.flatMap(e=>e.result());return {id:section.id,type:section.type,title:section.title,passages:section.items.map(p=>({title:p.title,paragraphs:p.paragraphs,wordBank:p.words.map(t=>t.english)})),correct:details.filter(d=>d.correct).length,total:details.length,details};};
    return {getResult,check:getResult};
  }};
})();
