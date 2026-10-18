const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort()])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c);
const target=path.join(root,'CONTENT-SOURCES.md'),marker='\n## 全册扩展索引';
let text=fs.readFileSync(target,'utf8').split(marker)[0]+marker+'\n\n覆盖剑20、19、18、12、11、10、9的Test 1–4、Part 1–4，共112篇。每篇练习0、1、2。来源用于核对主题和题型，不保存或复述真题答案链。各题型材料独立编写，原有地图与路线保留。\n\n';
for(const book of [20,19,18,12,11,10,9]){
 text+=`### 剑${book}\n\n| 篇目 | 主题 | 定位练习的题型构成 |\n| --- | --- | --- |\n`;
 for(let test=1;test<=4;test++)for(let part=1;part<=4;part++){
  const practice=c.RRListeningPractices[`c${book}-t${test}-p${part}-2`];const counts=new Map();practice.sections[0].items.forEach(i=>counts.set(i.format||'笔记填空',(counts.get(i.format||'笔记填空')||0)+1));
  text+=`| T${test}P${part} | ${practice.title} | ${[...counts].map(([type,count])=>`${type} × ${count}`).join('；')} |\n`;
 }
 text+='\n核对页：'+[1,2,3,4].map(t=>`[Test ${t}](https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-${book}-listening-test-${t})`).join('、')+'。\n\n';
}
text+='### 地图与装置图\n\n保留C20T3P2、C19T1P2、C18T2P2的地图与录音；新增C9T2P2、C11T1P2、C11T2P2、C11T4P2、C12T4P2五张原创地图，每篇以一段路线导览替换第二段信号录音。C9T4P2使用原创取暖器控制面板图示，保留两段信号，不增加路线。剑9–12为本次授权的新编内容，没有恢复之前删除的题库。\n';
fs.writeFileSync(target,text);
