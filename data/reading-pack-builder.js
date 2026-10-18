/* Mechanical authoring helpers. All prose, options and keys are supplied by each topic. */
window.RRReadPack = pack => {
 const id=pack.id;
 const quiz=(rows,offset=0)=>rows.map((row,i)=>{if(!Array.isArray(row)){const choices=row.options.slice(),shift=(i+offset+1)%choices.length;return {...row,options:choices.slice(shift).concat(choices.slice(0,shift))};}const [q,a,b,c,d,why]=row;const choices=[a,b,c,d],shift=(i+offset+1)%4;return {q,options:choices.slice(shift).concat(choices.slice(0,shift)),answer:a,why};});
 const section=(suffix,type,title,items,more={})=>({id:id+'-'+suffix,type,title,unit:'题',instruction:'',items,...more});
 const matching=(suffix,title,text,pairs,extras,blank=false)=>{
  let n=0;const segments=text.split(/(\{\{\d+\}\})/).filter(Boolean).map(s=>{const m=s.match(/^\{\{(\d+)\}\}$/);if(!m)return s;const i=Number(m[1]);n++;return {id:id+'-'+suffix+'-gap'+i,text:blank?String(n):pairs[i][0],answer:id+'-'+suffix+'-a'+i,explanation:pairs[i][2],blank};});
  const choices=pairs.map((p,i)=>({id:id+'-'+suffix+'-a'+i,text:p[1]})).concat(extras.map((text,i)=>({id:id+'-'+suffix+'-x'+i,text})));
  const order=choices.map((v,i)=>({v,key:((i+1)*2654435761)>>>0})).sort((a,b)=>a.key-b.key).map(x=>x.v);
  return {id:id+'-'+suffix,title,segments,choices:order};
 };
 const vocab=section('vocab','quiz','语境词义',quiz(pack.vocab));
 const rewrite=section('rewrite','quiz','同义改写',quiz(pack.rewrites,16));
 const match=section('match','paraphrase','词组匹配',[matching('phrases',pack.match.title,pack.match.text,pack.match.pairs,pack.match.extras)]);
 const syntax=section('sentence','reading-sentence','长句理解',pack.syntax.map((x,i)=>({...x,id:id+'-s'+(i+1),...(x.tokens?{tokens:RRReadTokens(x.tokens)}:{})})));
 const ev=pack.evidence;
 const passage={title:ev.title,paragraphs:ev.paragraphs.map((p,pi)=>({label:String.fromCharCode(65+pi),sentences:p.map((s,si)=>({id:id+'-e'+pi+'-'+si,tokens:RRReadTokens(s)}))}))};
 const evidence=section('evidence','reading-evidence','定位与证据',ev.questions.map((q,i)=>({id:id+'-ev'+i,q:q[0],sentence:id+'-e'+q[1]+'-'+q[2],...(q[3]?{phrase:q[3]}:{}),why:q[4]})),{passage,instruction:'前两题选证据句；后四题还需选择句内表达。'});
 const second=pack.specials.map((s,i)=>{
  if(s.kind==='judgement')return section('special'+i,'reading-judgement',s.title||'信息判断',s.rows.map((r,n)=>({id:id+'-j'+i+'-'+n,text:r[0],q:r[1],answer:r[2],why:r[3],translation:r[4]})),{labels:s.labels||['TRUE','FALSE','NOT GIVEN']});
  if(s.kind==='bank')return section('special'+i,'paraphrase',s.title||'选词摘要填空',[{...matching('summary'+i,s.name,s.text,s.pairs,s.extras,true),passage:s.passage}],{instruction:'从词库中选择表达完成摘要；有多余选项。'});
  if(s.kind==='quiz')return section('special'+i,'quiz',s.title||'选择题',quiz(s.rows,i));
  if(s.kind==='matching')return section('special'+i,'reading-matching',s.title,s.rows.map((r,n)=>({id:id+'-m'+i+'-'+n,q:r[0],answer:r[1],why:r[2]})),{passage:s.passage,choices:s.choices,instruction:s.instruction||'选择对应项；选项可以重复使用。'});
  return section('special'+i,s.kind==='table'?'reading-table':s.kind==='flow'?'reading-flow':s.kind==='diagram'?'reading-diagram':s.kind==='short-answer'?'reading-short-answer':'reading-notes',s.title||'填空',s.rows.map((r,n)=>({id:id+'-n'+i+'-'+n,q:r[0],answer:r[1],why:r[2],...(r[3]?{accept:r[3]}:{}),...(r[4]?{cells:r[4]}:{})})),{passage:s.passage,maxWords:s.maxWords||1,...(s.columns?{columns:s.columns}:{}),instruction:s.instruction||'Choose ONE WORD ONLY from the passage for each answer.'});
 });
 RRAddReadingTopic({id,location:pack.location,title:pack.title,focus:pack.focus,coreWords:pack.words.map(r=>r.slice(0,2)),practices:[[vocab,rewrite,match,syntax],[evidence,...second]]});
 const groups=pack.groups||(()=>{const a=pack.words.map(r=>r[0]),out=[];while(a.length>6)out.push(a.splice(0,a.length%6&&a.length%6<4?5:6));out.push(a);return out;})();
 (window.RRReadingFoundationSources ||= []).push({base:id+'-1',mode:'reading',voiceOffset:pack.foundationVoice==='en-GB-LibbyNeural'?0:1,omitted:pack.omitted,groups,terms:pack.words.map(r=>[r[0],...r.slice(2)]),contexts:pack.contexts});
};
