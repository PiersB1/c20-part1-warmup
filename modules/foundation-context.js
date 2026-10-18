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
      const controls=el('div','passage-checker'),check=button('核对答案','primary'),fb=el('div','feedback'),count=el('p','small-label');fb.hidden=true;fb.setAttribute('aria-live','polite');
      let n=0;
      const prefix=section.id+'/'+item.id;
      const accepted=target=>[target.english,...(item.accept?.[target.english]||[])];
      function update(){
        slots.forEach(({slot},id)=>{const value=byId.get(state.assignments[id]);slot.textContent=value?value.english:'____';slot.draggable=!!value;slot.classList.toggle('filled',!!value);slot.classList.toggle('slot-right',state.checks[id]?.correct===true);slot.classList.toggle('slot-wrong',state.checks[id]?.correct===false);});
        choices.forEach((node,id)=>{node.hidden=Object.values(state.assignments).includes(id);node.classList.toggle('picked',state.picked===id);node.setAttribute('aria-pressed',String(state.picked===id));});
        const filled=Object.keys(state.assignments).length,hits=Object.values(state.checks).filter(c=>c.correct).length;check.disabled=!filled;
        fb.hidden=!state.articleChecked;
        if(state.articleChecked){
          fb.replaceChildren(el('strong','',`正确 ${hits}/${slots.size}`));
          const list=el('ul','explanation-list');slots.forEach(({term,index},id)=>{if(!state.checks[id]?.correct){const choice=byId.get(state.assignments[id]);list.append(el('li','',`${index+1}. ${choice?.english||'未填'} → ${term.english}：${term.chinese}`));}});if(list.children.length)fb.append(list);fb.className=`feedback ${hits===slots.size?'good':'bad'}`;
        }
        count.textContent=state.articleChecked?'':`${filled}/${slots.size} 已填`;
      }
      function change(){persist();update();}
      function invalidate(){state.checks={};state.articleChecked=false;}
      function remove(word){let changed=false;for(const [id,value]of Object.entries(state.assignments))if(value===word){delete state.assignments[id];changed=true;}if(changed)invalidate();state.picked=null;change();}
      function place(slot,word){
        if(!byId.has(word)||!slots.has(slot))return;
        for(const [id,value]of Object.entries(state.assignments))if(value===word){delete state.assignments[id];delete state.checks[id];}
        state.assignments[slot]=word;invalidate();state.picked=null;change();
      }
      const drag=(event,word)=>{event.dataTransfer.setData('text/plain',prefix+'|'+word);event.dataTransfer.effectAllowed='move';};
      const decode=event=>{const [source,word]=event.dataTransfer.getData('text/plain').split('|');return source===prefix&&byId.has(word)?word:null;};
      item.paragraphs.forEach(paragraph=>{
        const line=el('p');let offset=0;
        for(const match of paragraph.matchAll(/\{\{(.*?)\}\}/g)){
          line.append(document.createTextNode(paragraph.slice(offset,match.index)));
          const term=item.words.find(t=>t.english===match[1]),index=n++,id='gap'+index;
          const wrap=el('span','foundation-gap'),number=el('span','gap-number',String(index+1)),slot=button('____','drop-slot');slot.dataset.slotId=id;slot.setAttribute('aria-label',`${item.title}第${index+1}空`);
          slot.addEventListener('click',()=>{if(state.picked)place(id,state.picked);else if(state.assignments[id])remove(state.assignments[id]);});
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
        if(!Object.keys(state.assignments).length)return;
        const at=new Date().toISOString();slots.forEach(({term},id)=>{const choice=byId.get(state.assignments[id]),response=choice?.english||'',correct=accepted(term).includes(response);state.checks[id]={correct};state.attempts.push({gap:id,response,expected:accepted(term),correct,at});});state.articleChecked=true;change();notify();
      });
      if(!state.articleChecked)state.checks={};
      controls.append(check,fb);card.append(story,el('h4','bank-heading','词库'),bank,controls,count);container.append(card);update();
      return {result(){return [...slots].map(([id,slot])=>{const attempts=state.attempts.filter(a=>a.gap===id),last=attempts.at(-1);return {id:item.id+'-'+id,question:`${item.title} · 第${slot.index+1}空`,context:slot.paragraph,response:last?.response||'',expected:accepted(slot.term),correct:state.checks[id]?.correct===true,attempts};});}};
    });
    const getResult=()=>{const details=entries.flatMap(e=>e.result());return {id:section.id,type:section.type,title:section.title,passages:section.items.map(p=>({title:p.title,paragraphs:p.paragraphs,wordBank:p.words.map(t=>t.english)})),correct:details.filter(d=>d.correct).length,total:details.length,details};};
    return {getResult,check:getResult};
  }};
})();
