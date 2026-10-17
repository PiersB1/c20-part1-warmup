// Serialized by Playwright, so this function has no Node dependencies.
module.exports=function answerLocators(index){
 const all=RRPracticeSession.practice.sections.find(s=>s.type==='locator').items;
 for(const [i,item] of all.entries()){
  if(index!==undefined&&index!==i)continue;
  const lines=document.querySelectorAll('.locator-card')[i].querySelectorAll('.token-line');
  if(item.paired){
   item.question.forEach((token,j)=>{if(token.key){
    lines[0].querySelector(`[data-token-index="${j}"]`).click();
    const k=item.source.findIndex(s=>s.key&&s.pair===token.pair);
    lines[1].querySelector(`[data-token-index="${k}"]`).click();
   }});
  }else ['question','source'].forEach((field,lineIndex)=>{
   const buttons=lines[lineIndex].querySelectorAll('.token');
   item[field].filter(t=>!(typeof t==='string'?t:t.text).includes('___')).forEach((t,j)=>{if(t.key)buttons[j].click();});
  });
 }
};
