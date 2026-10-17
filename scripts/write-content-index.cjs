const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort()])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c);
const target=path.join(root,'CONTENT-SOURCES.md'),marker='\n## 全册扩展索引';
let text=fs.readFileSync(target,'utf8').split(marker)[0]+marker+'\n\n覆盖剑20、19、18 的 Test 1–4、Part 1–4。48篇、96套均已修订，包含剑20全部Part1、Part2。来源用于核对主题和题型，不保存或复述真题答案链。各题型材料独立编写，现有地图与地图路线保留。\n\n';
for(const book of [20,19,18]){
 text+=`### 剑${book}\n\n| 篇目 | 主题 | 定位练习的题型构成 |\n| --- | --- | --- |\n`;
 for(let test=1;test<=4;test++)for(let part=1;part<=4;part++){
  const practice=c.RRListeningPractices[`c${book}-t${test}-p${part}-2`];const counts=new Map();practice.sections[0].items.forEach(i=>counts.set(i.format||'笔记填空',(counts.get(i.format||'笔记填空')||0)+1));
  text+=`| T${test}P${part} | ${practice.title} | ${[...counts].map(([type,count])=>`${type} × ${count}`).join('；')} |\n`;
 }
 text+='\n核对页：'+[1,2,3,4].map(t=>`[Test ${t}](https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-${book}-listening-test-${t})`).join('、')+'。\n\n';
}
text+='### 地图与暂时清空的内容\n\n保留 C20T3P2、C19T1P2、C18T2P2 的现有地图、地图定位题和跟走路线。剑9、剑10、剑11练习内容与对应音频已清空，首页册号入口显示为空。\n';
fs.writeFileSync(target,text);
