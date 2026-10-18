(() => {
  const {el,button,feedback}=RRUI;
  const text=tokens=>tokens.join(' ').replace(/\s+([,.;:?!])/g,'$1');
  function inlineButton(value,className){
    const node=el('span',className,value);node.setAttribute('role','button');node.tabIndex=0;
    node.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();node.click();}});
    return node;
  }
  const summary=(section,details)=>({id:section.id,type:section.type,title:section.title,...(section.passage?{passage:section.passage}:{}),
    correct:details.reduce((n,d)=>n+Number(d.correct),0),total:details.reduce((n,d)=>n+(d.total||1),0),details});
  const head=(card,index,title)=>{
    const node=el('div','question-head');node.append(el('span','number',String(index+1)),el('h3','',title));card.append(node);
  };
  function options(card,id,choices,onChange){
    const group=el('div','quiz-options');
    choices.forEach((choice,i)=>{
      const label=el('label','quiz-option'),input=el('input');
      input.type='radio';input.name=id;input.value=choice;
      input.addEventListener('change',onChange);
      label.append(input,el('span','',`${String.fromCharCode(65+i)}. ${choice}`));group.append(label);
    });card.append(group);
    return ()=>group.querySelector('input:checked')?.value||'';
  }
  function explanation(fb,correct,lines){
    fb.replaceChildren(el('strong','',correct?'✓ 正确。':'请对照下面的对应关系。'));
    lines.filter(Boolean).forEach(line=>fb.append(el('p','',line)));
    fb.className=`feedback ${correct?'good':'bad'}`;fb.hidden=false;
  }

  RRQuestionTypes['reading-sentence']={render(section,container){
    const entries=section.items.map((item,index)=>{
      const card=el('article',`question-card sentence-card ${item.kind}-card`);card.dataset.questionId=item.id;
      const prompt=item.kind==='backbone'?'找出主句的主语核心与谓语':item.kind==='reference'?`“${item.focus}”指代什么？点击对应表达。`:item.q;
      head(card,index,prompt);
      const fb=el('div','feedback');fb.hidden=true;
      let selected={subject:null,predicate:null},active='subject',antecedent=null,checked=false,value;
      const buttons=new Map(),roles=new Map();
      const roleTargets={subject:item.subject,predicate:item.predicate};
      const acceptedReferences=[item.antecedent,...(item.accept||[])];
      function update(){
        roles.forEach((node,role)=>{node.classList.toggle('active',active===role);node.setAttribute('aria-pressed',String(active===role));});
        buttons.forEach((node,i)=>{
          const role=item.kind==='backbone'?Object.keys(selected).find(k=>selected[k]===i):null;
          const picked=item.kind==='backbone'?!!role:antecedent===i;
          const right=item.kind==='backbone'?!!role&&item.tokens[i]===roleTargets[role]:antecedent===i&&acceptedReferences.includes(item.tokens[i]);
          node.classList.toggle('selected',picked);node.classList.toggle('subject-token',role==='subject');node.classList.toggle('predicate-token',role==='predicate');
          node.classList.toggle('token-right',checked&&picked&&right);node.classList.toggle('token-wrong',checked&&picked&&!right);
          node.classList.toggle('token-missed',checked&&!picked&&(item.kind==='backbone'?Object.values(roleTargets).includes(item.tokens[i]):!acceptedReferences.includes(item.tokens[antecedent])&&item.tokens[i]===item.antecedent));
          node.setAttribute('aria-pressed',String(picked));
        });
      }
      if(item.kind==='logic'){
        card.append(el('p','reading-context',item.text));
        value=options(card,item.id,item.options,()=>{fb.hidden=true;});
      }else{
        if(item.kind==='backbone'){
          const labels=el('div','sentence-roles');
          [['subject','谁／什么（主语核心）'],['predicate','做了什么（谓语）']].forEach(([role,label])=>{
            const node=button(label,`role-button role-${role}`);node.addEventListener('click',()=>{active=role;update();});roles.set(role,node);labels.append(node);
          });card.append(labels);
        }
        const line=el('div','reading-token-line');
        item.tokens.forEach((token,i)=>{
          if(i)line.append(document.createTextNode(' '));
          const node=inlineButton(token,'token');node.dataset.tokenIndex=i;
          if(item.kind==='reference'&&token===item.focus){node.classList.add('reference-focus');node.setAttribute('aria-label',`${token}，待判断的指代表达`);}
          node.addEventListener('click',()=>{
            if(item.kind==='backbone'){
              if(selected[active]===i)selected[active]=null;
              else {Object.keys(selected).forEach(k=>{if(selected[k]===i)selected[k]=null;});selected[active]=i;}
            }else antecedent=antecedent===i?null:i;
            checked=false;fb.hidden=true;update();
          });buttons.set(i,node);line.append(node);
        });card.append(line);update();
      }
      card.append(fb);container.append(card);
      function result(){
        const context=item.text||text(item.tokens);
        if(item.kind==='backbone'){
          const response=Object.fromEntries(Object.keys(selected).map(k=>[k,selected[k]===null?'':item.tokens[selected[k]]]));
          const correct=Object.keys(selected).filter(k=>response[k]===roleTargets[k]).length;
          return {id:item.id,question:prompt,context,response,tokenIndices:{...selected},expected:roleTargets,
            responseText:`主语：${response.subject||'未选'}；谓语：${response.predicate||'未选'}`,
            expectedText:`主语：${item.subject}；谓语：${item.predicate}；主干：${item.skeleton}`,correct,total:2,explanation:item.why,translation:item.translation};
        }
        const response=item.kind==='reference'?(antecedent===null?'':item.tokens[antecedent]):value();
        const expected=item.kind==='reference'?acceptedReferences:item.answer;
        return {id:item.id,question:prompt,context,response,expected,responseText:response||'未作答',expectedText:Array.isArray(expected)?expected.join(' / '):expected,
          correct:Array.isArray(expected)?expected.includes(response):response===expected,total:1,explanation:item.why,translation:item.translation};
      }
      return {result,check(){checked=true;update();const r=result();explanation(fb,Number(r.correct)===r.total,[r.expectedText,`句意：${item.translation}`,item.why]);}};
    });
    const getResult=()=>summary(section,entries.map(e=>e.result()));
    return {getResult,check(){entries.forEach(e=>e.check());return getResult();}};
  }};

  RRQuestionTypes['reading-evidence']={render(section,container){
    let active=0,checked=false;
    const states=section.items.map(()=>({sentence:null,phrase:null}));
    const card=el('article','question-card evidence-card'),toolbar=el('div','evidence-toolbar');
    const tabs=el('div','evidence-tabs'),question=el('h3'),hint=el('p','small-label');
    const passage=el('div','reading-passage'),review=el('div','evidence-review');review.hidden=true;
    const work=el('div','evidence-work');toolbar.append(tabs,question,hint);work.append(toolbar,el('h3','passage-title',section.passage.title),passage);card.append(work,review);container.append(card);
    const allSentences=section.passage.paragraphs.flatMap(p=>p.sentences);
    function changed(){checked=false;review.hidden=true;render();}
    function render(){
      tabs.replaceChildren();
      section.items.forEach((item,i)=>{
        const tab=button(`${i+1}${states[i].sentence?' ·':''}`,'evidence-tab');tab.classList.toggle('active',i===active);
        tab.dataset.evidenceQuestion=i;tab.setAttribute('aria-label',`第${i+1}题${states[i].sentence?'，已选证据':''}`);tab.setAttribute('aria-pressed',String(i===active));
        tab.addEventListener('click',()=>{active=i;render();});tabs.append(tab);
      });
      const item=section.items[active],state=states[active];
      question.textContent=`${active+1}. ${item.q}`;hint.textContent=item.phrase?'选择一个证据句，再点击句内的一处定位表达；再次点击可取消。':'选择一个最直接回答问题的证据句；再次点击可取消。';
      passage.replaceChildren();
      section.passage.paragraphs.forEach(paragraph=>{
        const block=el('div','reading-paragraph');block.append(el('span','paragraph-letter',paragraph.label));
        paragraph.sentences.forEach(sentence=>{
          const selected=state.sentence===sentence.id;
          if(selected&&item.phrase){
            const row=el('span','evidence-selected');row.dataset.sentenceId=sentence.id;
            sentence.tokens.forEach((token,i)=>{
              if(i)row.append(document.createTextNode(' '));
              const node=inlineButton(token,'token evidence-phrase');node.dataset.phraseIndex=i;
              node.classList.toggle('selected',state.phrase===i);node.setAttribute('aria-pressed',String(state.phrase===i));
              node.addEventListener('click',()=>{state.phrase=state.phrase===i?null:i;changed();});row.append(node);
            });
            const cancel=button('×','cancel-evidence');cancel.setAttribute('aria-label','取消本题证据句');cancel.addEventListener('click',()=>{state.sentence=null;state.phrase=null;changed();});row.append(cancel);block.append(row);
          }else{
            const node=inlineButton(text(sentence.tokens),'evidence-sentence');node.dataset.sentenceId=sentence.id;
            node.classList.toggle('selected',selected);node.setAttribute('aria-pressed',String(selected));
            node.addEventListener('click',()=>{state.sentence=selected?null:sentence.id;state.phrase=null;changed();});block.append(node);
          }
          block.append(document.createTextNode(' '));
        });passage.append(block);
      });
      review.hidden=!checked;
    }
    function getResult(){
      return summary(section,section.items.map((item,i)=>{
        const state=states[i],selected=allSentences.find(s=>s.id===state.sentence),expected=allSentences.find(s=>s.id===item.sentence);
        const expression=selected&&state.phrase!==null?selected.tokens[state.phrase]:'';
        const sentenceCorrect=state.sentence===item.sentence,phraseCorrect=!!item.phrase&&sentenceCorrect&&expression===item.phrase;
        return {id:item.id,question:item.q,response:{sentence:state.sentence,phrase:expression},expected:{sentence:item.sentence,text:text(expected.tokens),phrase:item.phrase||null},
          responseText:selected?text(selected.tokens)+(item.phrase?`；定位表达：${expression||'未选'}`:''):'未选证据',
          expectedText:text(expected.tokens)+(item.phrase?`；定位表达：${item.phrase}`:''),
          correct:Number(sentenceCorrect)+Number(phraseCorrect),total:item.phrase?2:1,explanation:item.why};
      }));
    }
    render();
    return {getResult,check(){
      checked=true;review.replaceChildren();const result=getResult();
      result.details.forEach((detail,i)=>{
        const fb=el('div','feedback');explanation(fb,detail.correct===detail.total,[`${i+1}. ${detail.question}`,`证据：${detail.expectedText}`,detail.explanation]);review.append(fb);
      });review.hidden=false;return result;
    }};
  }};

  RRQuestionTypes['reading-judgement']={render(section,container){
    const entries=section.items.map((item,i)=>{
      const card=el('article','question-card judgement-card');card.dataset.questionId=item.id;
      head(card,i,item.q);card.append(el('p','reading-context',item.text));
      const fb=el('div','feedback');fb.hidden=true;
      const value=options(card,item.id,['TRUE','FALSE','NOT GIVEN'],()=>{fb.hidden=true;});card.append(fb);container.append(card);
      const result=()=>({id:item.id,question:item.q,context:item.text,response:value(),expected:item.answer,responseText:value()||'未作答',expectedText:item.answer,correct:value()===item.answer,total:1,explanation:item.why,translation:item.translation});
      return {result,check(){feedback(fb,`${value()===item.answer?'✓ 正确。':`对应答案：${item.answer}。`} ${item.why}`,value()===item.answer);}};
    });const getResult=()=>summary(section,entries.map(e=>e.result()));return {getResult,check(){entries.forEach(e=>e.check());return getResult();}};
  }};

  const fillReading={render(section,container){
    const isTable=section.type==='reading-table',maxWords=section.maxWords||1;
    const layout=el('div','notes-layout'),article=el('article','question-card reading-passage'),notes=el('div','note-list');
    article.append(el('h3','passage-title',section.passage.title));section.passage.paragraphs.forEach(p=>article.append(el('p','',p)));
    let tableBody;
    if(isTable){
      const table=el('table','reading-table'),caption=el('caption','',section.passage.title),thead=el('thead'),row=el('tr');
      (section.columns||[]).forEach(title=>{const cell=el('th','',title);cell.scope='col';row.append(cell);});
      thead.append(row);tableBody=el('tbody');table.append(caption,thead,tableBody);notes.append(table);
    }
    const entries=section.items.map((item,i)=>{
      const card=el(isTable?'tr':'article',isTable?'table-answer-row':'question-card note-card');card.dataset.questionId=item.id;
      const input=el('input','answer-input');input.autocomplete='off';input.spellcheck=false;input.setAttribute('aria-label',`${isTable?'表格':'笔记'}第${i+1}空答案`);
      const fb=el('div','feedback');let feedbackRow;fb.hidden=true;input.addEventListener('input',()=>{fb.hidden=true;if(feedbackRow)feedbackRow.hidden=true;});
      if(isTable){
        item.cells.forEach((value,j)=>{
          const cell=el(j===0?'th':'td');if(j===0)cell.scope='row';
          if(value.includes('___')){const parts=value.split('___');const label=el('label','table-gap');label.append(el('span','small-label',String(i+1)),document.createTextNode(parts[0]),input,document.createTextNode(parts[1]));cell.append(label);}else cell.textContent=value;
          card.append(cell);
        });
        feedbackRow=el('tr','table-feedback-row');feedbackRow.hidden=true;feedbackRow.dataset.feedbackFor=item.id;
        const feedbackCell=el('td');feedbackCell.colSpan=item.cells.length;feedbackCell.append(fb);feedbackRow.append(feedbackCell);tableBody.append(card,feedbackRow);
      }else{
        head(card,i,`笔记 ${i+1}`);const parts=item.q.split('___'),line=el('p','note-line');line.append(document.createTextNode(parts[0]),input,document.createTextNode(parts[1]));card.append(line,fb);notes.append(card);
      }
      const result=()=>{
        const response=input.value.trim(),normal=response.toLowerCase().replace(/[.,;:!?]$/,'').replace(/\s+/g,' ');
        const withinLimit=normal.length>0&&normal.split(' ').length<=maxWords;
        const expected=[item.answer,...(item.accept||[])];
        return {id:item.id,question:isTable?item.cells.join(' | '):item.q,response,expected:expected.length===1?item.answer:expected,correct:withinLimit&&expected.includes(normal),total:1,explanation:item.why};
      };
      return {result,check(){const r=result(),over=input.value.trim().split(/\s+/).length>maxWords;if(feedbackRow)feedbackRow.hidden=false;feedback(fb,`${r.correct?'✓ 正确。':`对应答案：${item.answer}。${over?(maxWords===1?'每空只能填一个单词。':`每空最多填${maxWords}个单词。`):''}`} ${item.why}`,r.correct);}};
    });layout.append(article,notes);container.append(layout);
    const getResult=()=>summary(section,entries.map(e=>e.result()));return {getResult,check(){entries.forEach(e=>e.check());return getResult();}};
  }};
  RRQuestionTypes['reading-notes']=fillReading;
  RRQuestionTypes['reading-table']=fillReading;
})();
