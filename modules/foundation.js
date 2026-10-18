(() => {
  const {el,button,feedback,play}=RRUI;
  const hash=value=>[...value].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
  const shuffled=(values,seed)=>{const result=[...values];let value=hash(seed);for(let i=result.length-1;i>0;i--){value=(Math.imul(value,1664525)+1013904223)>>>0;const j=value%(i+1);[result[i],result[j]]=[result[j],result[i]];}return result;};
  RRQuestionTypes.foundation={render(section,container){
    const terms=section.items,byId=new Map(terms.map(t=>[t.id,t]));
    const practiceId=section.id.replace(/-learning$/,''),key='rr:foundation:progress:v1:'+practiceId;
    const signature=JSON.stringify(terms.map(t=>[t.english,t.application]));
    const initial=()=>({signature,phase:'intro',queue:[],cursor:0,attempts:[],known:[],checked:false,picked:null,hinted:false,finalTries:{},finalIndependent:{}});
    let state;
    try{const loaded=JSON.parse(localStorage.getItem(key)||'null');state=loaded?.signature===signature&&Array.isArray(loaded.queue)&&Array.isArray(loaded.attempts)?loaded:initial();}catch{state=initial();}
    if(state.phase==='passage')state.phase='done';
    delete state.passage;
    // Keep an unfinished lesson usable when its Chinese labels are clarified.
    const revisedLabels=new Map(terms.flatMap(t=>(t.previousMeanings||[]).map(old=>[old,t.chinese])));
    if(revisedLabels.has(state.picked))state.picked=revisedLabels.get(state.picked);
    state.attempts.forEach(a=>{if(revisedLabels.has(a.response))a.response=revisedLabels.get(a.response);if(revisedLabels.has(a.expected))a.expected=revisedLabels.get(a.expected);});
    const root=el('div','foundation-work');container.append(root);
    let audio=null;
    function stop(){if(audio){audio.pause();audio=null;}}
    function persist(){try{localStorage.setItem(key,JSON.stringify(state));}catch{document.getElementById('save-status').textContent='学习进度未能保存，请检查存储设置。';}}
    function notify(){container.dispatchEvent(new CustomEvent('rr:answer-check',{bubbles:true}));}
    function sound(term,node){
      stop();audio=new Audio(term.audio);node.disabled=true;
      const restore=()=>{node.disabled=false;};audio.addEventListener('ended',restore,{once:true});
      play(audio).then(restore).catch(()=>{restore();const note=el('p','audio-error','暂时无法播放，请重试。');node.after(note);});
    }
    function audioButton(term){const node=button('▶ 听发音','word-audio secondary');node.addEventListener('click',()=>sound(term,node));return node;}
    const task=(kind,term,extra={})=>({kind,term,...extra});
    function curriculum(){
      const queue=[],known=new Set(state.known);
      section.groups.forEach((group,g)=>{
        for(const kind of ['learn','apply','recall'])for(const id of group)if(!known.has(id))queue.push(task(kind==='recall'&&/\s/.test(byId.get(id).english)?'chunks':kind,id,{group:g+1}));
        if(g%2===1||g===section.groups.length-1){
          const old=section.groups.slice(g%2===1?g-1:g,g+1).flat().filter(id=>!known.has(id));
          shuffled(old,'mixed'+g).forEach((id,i)=>queue.push(task('mixed',id,{group:g+1,listen:document.body.dataset.mode==='listening'&&i%2===0})));
        }
      });
      shuffled(terms.map(t=>t.id),'final').forEach((id,i)=>queue.push(task('final',id,{reverse:i%2===1})));
      state.queue=queue;state.cursor=0;state.phase='learning';state.checked=false;state.picked=null;state.hinted=false;
    }
    function start(pretest){
      if(pretest){state.phase='pretest';state.queue=shuffled(terms.map(t=>task('pretest',t.id)),'pretest');state.cursor=0;}else curriculum();persist();render();
    }
    function progress(){
      const toolbar=el('div','foundation-progress');
      const label=el('span','small-label',state.phase==='pretest'?`先测一下 · ${state.cursor+1}/${terms.length}`:state.phase==='learning'?`${state.queue[state.cursor]?.kind==='final'?'重点回顾':'分组学习'} · ${Math.min(state.cursor+1,state.queue.length)}/${state.queue.length}`:state.phase==='passage'?'综合应用 · 短文填词':'学习回顾');
      const restart=button('重新开始','text-button');restart.addEventListener('click',()=>{if(confirm('重新开始这篇词汇学习？已保存的做题记录不会删除。')){stop();state=initial();persist();render();}});toolbar.append(label,restart);root.append(toolbar);
    }
    function render(){
      stop();root.replaceChildren();
      if(state.phase==='intro'){
        const card=el('article','question-card foundation-intro');card.append(el('h2','',`${terms.length} 个词汇词组`));
        const all=button('从头学','primary'),test=button('先测一下，跳过已会的词','secondary');all.addEventListener('click',()=>start(false));test.addEventListener('click',()=>start(true));const actions=el('div','foundation-actions');actions.append(all,test);card.append(actions);root.append(card);return;
      }
      progress();
      if(state.phase==='done'){renderDone();return;}
      const current=state.queue[state.cursor];if(!current){if(state.phase==='pretest')curriculum();else state.phase='done';persist();render();return;}
      if(current.kind==='chunks'){renderChunks(current);return;}
      const term=byId.get(current.term),learn=current.kind==='learn',apply=current.kind==='apply',reverse=current.reverse||current.kind==='mixed'&&!current.listen;
      const card=el('article','question-card foundation-card');card.dataset.termId=term.id;card.dataset.taskKind=current.kind;
      const stage={learn:'认识词义',apply:'换个语境',recall:'回忆词义',mixed:'复习',final:'重点回顾',pretest:'先测一下'}[current.kind];
      card.append(el('p','small-label',`${current.group?`第 ${current.group} 组 · `:''}${stage}`));
      if(learn){card.append(el('h2','foundation-word',term.english),audioButton(term),el('p','foundation-meaning',term.chinese),el('p','foundation-example',term.example),el('p','small-label',term.translation),el('h3','foundation-prompt','这个词在这里是什么意思？'));}
      else if(apply){card.append(el('h3','foundation-prompt','选一个词，补全新的句子。'),el('p','foundation-example',term.application),el('p','small-label',term.applicationTranslation));}
      else if(current.listen){card.append(el('h3','foundation-prompt','听词，选择本篇中的意思。'),audioButton(term));}
      else {card.append(el('h3','foundation-prompt',reverse?'根据意思，找出英文表达。':'这个表达在本篇是什么意思？'),el('p',reverse?'foundation-meaning':'foundation-word',reverse?term.chinese:term.english));if(!reverse)card.append(audioButton(term));}
      const correctValue=apply||reverse?term.english:term.chinese;
      const nearby=section.groups.find(g=>g.includes(term.id))||[];
      const pool=[...nearby.map(id=>byId.get(id)),...terms].filter((t,i,a)=>t.id!==term.id&&a.findIndex(x=>x.id===t.id)===i);
      const count=learn||apply?3:4,seed=`${current.kind}/${state.cursor}/${term.id}`;
      const options=shuffled([term,...shuffled(pool,seed).slice(0,count-1)],seed+'choices');
      const list=el('div','foundation-options');
      options.forEach(t=>{const value=apply||reverse?t.english:t.chinese,node=button(value,'foundation-option');node.dataset.value=value;node.classList.toggle('selected',state.picked===value);node.setAttribute('aria-pressed',String(state.picked===value));node.disabled=state.checked;node.addEventListener('click',()=>{state.picked=value;persist();render();});list.append(node);});card.append(list);
      const fb=el('div','feedback');fb.hidden=!state.checked;fb.setAttribute('aria-live','polite');
      const check=button('核对这题','primary'),next=button('下一题','primary');check.disabled=!state.picked;check.hidden=state.checked;next.hidden=!state.checked;
      function showFeedback(){
        const ok=state.picked===correctValue;
        const choice=options.find(t=>(apply||reverse?t.english:t.chinese)===state.picked);
        feedback(fb,`${ok?'✓ 正确。':`对应表达是 ${term.english}。`} ${term.english}：${term.chinese}。${!ok&&choice?`你选的 ${choice.english} 是「${choice.chinese}」。`:''}${apply?' 完整句：'+term.application.replace('___',term.english):''}${current.kind==='pretest'&&!ok?' 后面会带你学习这个词。':''}`,ok);
      }
      check.addEventListener('click',()=>{
        if(!state.picked||state.checked)return;
        const ok=state.picked===correctValue;
        state.attempts.push({term:term.id,stage:current.kind,response:state.picked,expected:correctValue,correct:ok,hinted:state.hinted,context:apply?term.application:learn?term.example:current.listen?'听词辨义':reverse?term.chinese:term.english,at:new Date().toISOString()});
        if(current.kind==='pretest'&&ok&&!state.hinted&&!state.known.includes(term.id))state.known.push(term.id);
        if(current.kind==='final'){
          state.finalTries[term.id]=(state.finalTries[term.id]||0)+1;
          state.finalIndependent[term.id]=ok&&!state.hinted;
          if((!ok||state.hinted)&&state.finalTries[term.id]<3)state.queue.splice(Math.min(state.cursor+4,state.queue.length),0,task('final',term.id,{reverse:!current.reverse}));
        }
        // A failed recall returns after other words, rather than immediately repeating the same options.
        if(['apply','recall','mixed'].includes(current.kind)&&(!ok||state.hinted)&&!current.retry)state.queue.splice(Math.min(state.cursor+4,state.queue.length),0,task('recall',term.id,{group:current.group,retry:true}));
        state.checked=true;persist();showFeedback();check.hidden=true;next.hidden=false;list.querySelectorAll('button').forEach(n=>n.disabled=true);notify();next.focus();
      });
      next.addEventListener('click',()=>{
        state.cursor++;state.checked=false;state.picked=null;state.hinted=false;
        if(state.cursor>=state.queue.length){if(state.phase==='pretest')curriculum();else state.phase='done';}
        persist();render();if(['passage','done'].includes(state.phase))notify();root.scrollIntoView({block:'start',behavior:'instant'});
      });
      if(state.checked)showFeedback();const actions=el('div','foundation-actions');actions.append(check,next);card.append(fb,actions);root.append(card);
    }
    function renderChunks(current){
      const term=byId.get(current.term),parts=term.english.split(' '),tiles=parts.map((text,i)=>({id:i,text}));
      const extra=['for','with','at','to'].find(w=>!parts.includes(w));tiles.push({id:parts.length,text:extra});
      state.chunks=state.chunks||[];
      const card=el('article','question-card foundation-card');card.dataset.termId=term.id;card.dataset.taskKind='chunks';
      card.append(el('p','small-label',`第 ${current.group} 组 · 词组回忆`),el('h3','foundation-prompt','按顺序点选词块，拼出英文词组。'),el('p','foundation-meaning',term.chinese));
      const response=el('div','chunk-response'),bank=el('div','word-bank chunk-bank'),fb=el('div','feedback'),check=button('核对这题','primary'),next=button('下一题','primary');
      fb.hidden=!state.checked;
      function update(){
        response.replaceChildren();bank.replaceChildren();
        state.chunks.forEach(id=>{const node=button(tiles[id].text,'bank-choice');node.disabled=state.checked;node.addEventListener('click',()=>{state.chunks=state.chunks.filter(x=>x!==id);persist();update();});response.append(node);});
        shuffled(tiles,term.id).forEach(tile=>{const node=button(tile.text,'bank-choice');node.disabled=state.checked;node.hidden=state.chunks.includes(tile.id);node.dataset.chunkId=tile.id;node.addEventListener('click',()=>{state.chunks.push(tile.id);persist();update();});bank.append(node);});
        check.disabled=!state.chunks.length;check.hidden=state.checked;next.hidden=!state.checked;
      }
      function show(){const value=state.chunks.map(i=>tiles[i].text).join(' ');feedback(fb,`${value===term.english?'✓ 正确。':'正确顺序：'+term.english+'。'} ${term.chinese}`,value===term.english);}
      check.addEventListener('click',()=>{
        if(!state.chunks.length||state.checked)return;const value=state.chunks.map(i=>tiles[i].text).join(' '),correct=value===term.english;
        state.attempts.push({term:term.id,stage:'chunks',response:value,expected:term.english,correct,hinted:state.hinted,context:term.chinese,at:new Date().toISOString()});
        if(!correct||state.hinted)state.queue.splice(Math.min(state.cursor+4,state.queue.length),0,task('recall',term.id,{group:current.group,retry:true}));
        state.checked=true;persist();update();show();notify();next.focus();
      });
      next.addEventListener('click',()=>{state.cursor++;state.checked=false;state.picked=null;state.hinted=false;state.chunks=[];persist();render();root.scrollIntoView({block:'start',behavior:'instant'});});
      update();if(state.checked)show();const actions=el('div','foundation-actions');actions.append(check,next);card.append(response,bank,fb,actions);root.append(card);
    }
    function renderDone(){
      const weak=terms.filter(t=>!state.finalIndependent[t.id]);
      const card=el('article','question-card foundation-summary');card.append(el('h2','','本次回顾'),el('p','',`独立答对 ${terms.length-weak.length} 项 · 待复习 ${weak.length} 项`));
      if(weak.length){card.append(el('p','weak-words',weak.map(t=>t.english).join(' · ')));const retry=button('再练薄弱词','secondary');retry.addEventListener('click',()=>{state.queue=shuffled(weak.map(t=>task('final',t.id,{reverse:true})),'weak');state.cursor=0;state.phase='learning';state.returnToDone=true;state.finalTries={};state.checked=false;state.picked=null;state.hinted=false;persist();render();});card.append(retry);}
      const context=el('a','primary','语境练习');context.href='#'+practiceId+'-contexts';card.append(context);
      const next=el('a','secondary','进入练习1');next.href=`${document.body.dataset.mode==='reading'?'reading':'listening'}.html?id=${practiceId.replace(/-0$/,'-1')}`;card.append(next);root.append(card);
    }
    function getResult(){
      const details=terms.map(t=>{
        const attempts=state.attempts.filter(a=>a.term===t.id&&a.stage!=='passage'),last=attempts.at(-1);
        return {id:t.id,question:t.english,chinese:t.chinese,context:t.example,response:last?.response||'',expected:last?.expected||t.chinese,correct:!!state.finalIndependent[t.id],attempts};
      });
      return {id:section.id,type:'foundation',title:'基础词汇',correct:details.filter(d=>d.correct).length,total:details.length,phase:state.phase,details};
    }
    render();return {getResult,check:getResult};
  }};
})();

