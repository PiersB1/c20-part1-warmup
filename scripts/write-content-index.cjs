const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort()])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c);
const target=path.join(root,'CONTENT-SOURCES.md'),marker='\n## 全册扩展索引';
let text=fs.readFileSync(target,'utf8').split(marker)[0]+marker+'\n\n覆盖剑20、19、18、11、10、9 的 Test 1–4、Part 1–4。每篇两套；本次新增88篇、176套，保留原有剑20 Part 1–2。来源用于核对主题和题型，不保存或复述真题答案链。全部热身句子、段落和地图说明重新编写。\n\n';
for(const book of [20,19,18,11,10,9]){
 text+=`### 剑${book}\n\n| 篇目 | 主题 | 定位练习的题型构成 |\n| --- | --- | --- |\n`;
 for(let test=1;test<=4;test++)for(let part=1;part<=4;part++){
  const practice=c.RRListeningPractices[`c${book}-t${test}-p${part}-2`];const counts=new Map();practice.sections[0].items.forEach(i=>counts.set(i.format||'笔记填空',(counts.get(i.format||'笔记填空')||0)+1));
  text+=`| T${test}P${part} | ${practice.title} | ${[...counts].map(([type,count])=>`${type} × ${count}`).join('；')} |\n`;
 }
 text+='\n核对页：'+[1,2,3,4].map(t=>`[Test ${t}](https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-${book}-listening-test-${t})`).join('、')+'。\n\n';
}
text+='### 图示处理\n\n新增路线地图／楼层平面图：C19T1P2、C18T2P2、C11T1P2、C11T2P2、C11T4P2、C9T2P2。各保留一段信号词，增加一题地图跟走；另保留 C20T3P2 原有地图跟走。C9T4P2 为装置图示，按用户确认保留原创控制面板定位图和两段信号词，不加路线题。\n';
fs.writeFileSync(target,text);
