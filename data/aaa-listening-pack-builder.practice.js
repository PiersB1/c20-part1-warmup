/* Shared plumbing only. Topic files supply every sentence, key and distractor. */
window.RRListenFoundationSources=[];
window.RRListenMap=(plan,caption)=>{
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const nodes=new Map(plan.nodes.map(n=>[n.id,n]));
 const edges=plan.edges.map(([a,b])=>{a=nodes.get(a);b=nodes.get(b);return`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#becbc1" stroke-width="12"/>`;}).join('');
 const labels=plan.nodes.map(n=>`<circle cx="${n.x}" cy="${n.y}" r="7" fill="#315d50"/><rect x="${n.x-68}" y="${n.y+12}" width="136" height="25" rx="4" fill="#fffdf7"/><text x="${n.x}" y="${n.y+30}" text-anchor="middle" font-size="13" fill="#233a32">${escape(n.label)}</text>`).join('');
 return{caption,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${plan.width} ${plan.height}" role="img" aria-label="${escape(caption)}"><rect width="100%" height="100%" rx="12" fill="#eef3e8"/><text x="${plan.width-42}" y="27" font-size="16" fill="#315d50">N ↑</text>${edges}${labels}</svg>`};
};
window.RRListenPack=pack=>{
 const id=`c${pack.book}-t${pack.test}-p${pack.part}`;
 const rows=text=>text.trim().split('\n').map(x=>x.trim()).filter(Boolean);
 const words=rows(pack.words).map(x=>x.split('|'));
 if(words.some(x=>x.length!==6)||new Set(words.map(x=>x[0])).size!==words.length)throw Error(id+' malformed words');
 const tokenise=text=>{const result=[];for(const m of text.matchAll(/\[([^\]]+)\]|\{([^}]+)\}|([^\[\]{}]+)/g)){if(m[1]){const [text,pair]=m[1].split('|');result.push({text,key:true,pair:Number(pair)});}else if(m[2])result.push({text:m[2]});else result.push(...m[3].trim().split(/\s+/).filter(Boolean));}return result;};
 const formats=pack.formats.flatMap(([format,n])=>Array(n).fill(format));
 const locators=rows(pack.locators).map((line,i)=>{const [q,s,why]=line.split('~');if(!why)throw Error(id+' locator explanation '+i);const question=tokenise(q),source=tokenise(s),n=i<6?1:2;for(const ts of [question,source]){if(ts.filter(t=>t.key).length!==n)throw Error(id+' locator count '+i);for(let pair=1;pair<=n;pair++)if(ts.filter(t=>t.key&&t.pair===pair).length!==1)throw Error(id+' locator pair '+i);}if(/填空/.test(formats[i])&&!q.includes('___'))throw Error(id+' locator gap '+i);return[question,source,why,formats[i],true];});
 if(locators.length!==10||formats.length!==10)throw Error(id+' ten locators required');
 const paragraphs=pack.paragraphs.map(p=>{const pairs=[];const text=p.text.replace(/\[([^\]=>]+)=>([^\]=>]+)=>([^\]]+)\]/g,(_,a,b,why)=>{pairs.push([a,b,why]);return`[${a}]`;});if(pairs.length!==6||p.extras.length!==3)throw Error(id+' paragraph counts');return{title:p.title,text,pairs,distractors:p.extras};});
 const signals=pack.signals.map(p=>{const transcript=[],cues=[];for(const line of rows(p.text)){const [sentence,why]=line.split('~');if(why)cues.push({sentence:transcript.length,signal:sentence,why});transcript.push(sentence);}if(cues.length!==3)throw Error(id+' signal count');return{title:p.title,focus:p.focus,transcript,cues,...(pack.part===3?{speakers:transcript.map((_,i)=>i%2?'en-GB-RyanNeural':'en-GB-LibbyNeural')}:{})};});
 const quiz=pack.vocab.map(([q,a,b,c,d,why])=>RRQuiz.choice(q,[a,b,c,d],0,why));
 quiz.push(...pack.multi.map(m=>RRQuiz.choice(m.q,m.options,m.answers,m.why)),...pack.grammar.map(g=>g[5]?RRQuiz.choice(g[0],g[5],g[5].indexOf(g[1]),g[2]):{...RRQuiz.cloze(g[0],g[1],g[2]),...(g[4]?{accept:g[4]}:{})}));
 const dictation=pack.dictation.concat(pack.grammar.map(g=>[g[3],g[1],g[2]]));
 if(quiz.length!==12||dictation.length!==12||paragraphs.length!==2||signals.length!==(pack.map?1:2))throw Error(id+' incomplete practice');
 const sourceRefs=[`https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-${pack.book}-listening-test-${pack.test}`];
 RRAddTopic({...pack,coreWords:words.map(w=>w.slice(0,2)),quiz,dictation,locators,paragraphs,signals,sourceRefs});
 for(const n of [1,2]){const p=RRListeningPractices[id+'-'+n];p.revision='2026-10-authored';p.preparationFocus=pack.focus;}
 RRPreparedTopics.push({book:pack.book,test:pack.test,part:pack.part,title:pack.title,map:Boolean(pack.map)});
 RRListenFoundationSources.push({base:id+'-1',mode:'listening',voiceOffset:1,terms:words.map(w=>[w[0],...w.slice(2)]),groups:pack.groups,omitted:pack.omitted,contexts:pack.contexts});
};
