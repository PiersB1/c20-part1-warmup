/* Editorial shorthand for original, topic-specific preparation passages. */
window.RRPreparedTopics=[];
window.RRMakeRoute=(title,labels,variant=0)=>{
  const ids=['gate','west','northwest','centre','south','southeast','east','north','northeast'];
  const coordinates=[[100,320],[100,210],[100,90],[300,210],[300,320],[500,320],[500,210],[300,90],[500,90]];
  const nodes=ids.map((id,i)=>({id,x:coordinates[i][0],y:coordinates[i][1],label:labels[i]}));
  const edges=[['gate','west'],['west','northwest'],['gate','south'],['west','centre'],['northwest','north'],['centre','north'],['centre','south'],['south','southeast'],['centre','east'],['north','northeast'],['southeast','east'],['east','northeast']];
  const paths=[['gate','west','centre','south','southeast','east','northeast'],['gate','south','southeast','east','centre','north','northeast'],['gate','west','northwest','north','centre','east','southeast']];
  const expectedPath=paths[variant%paths.length],byId=new Map(nodes.map(n=>[n.id,n]));
  const transcript=['You are at '+labels[0]+' in the lower left corner of the plan. North is at the top, so keep that orientation as you follow the route.'];
  expectedPath.slice(1).forEach((id,i)=>{const a=byId.get(expectedPath[i]),b=byId.get(id);const direction=b.x>a.x?'east':b.x<a.x?'west':b.y>a.y?'south':'north';const expressions={north:['head northwards','go towards the top of the plan'],south:['take the southbound path','go down the plan'],east:['head eastwards','take the path to your right on the plan'],west:['go westwards','move towards the left of the plan']};transcript.push(`${i===0?'First':i===expectedPath.length-2?'Finally':'From there'}, ${expressions[direction][i%2]} to ${b.label}. ${i===2?'Stop at that point before taking the next path.':''}`.trim());});
  transcript.push('This is the end of the route. The other paths on the plan are open, but they are not part of this particular walk.');
  const map={width:640,height:410,nodes,edges};
  const svg=`<svg viewBox="0 0 640 410" role="img" aria-label="${title}，北向上"><rect x="15" y="15" width="610" height="380" rx="12" fill="#f2f4e9"/><g stroke="#c7cebd" stroke-width="12">${edges.map(([a,b])=>`<path d="M${byId.get(a).x} ${byId.get(a).y}L${byId.get(b).x} ${byId.get(b).y}"/>`).join('')}</g><g font-family="sans-serif" font-size="18" text-anchor="middle" fill="#40553d">${nodes.map(n=>`<circle cx="${n.x}" cy="${n.y}" r="5" fill="#fff" stroke="#8f9c88"/><text x="${n.x}" y="${n.y+28}">${n.label}</text>`).join('')}<text x="600" y="40">N ↑</text></g></svg>`;
  return {map:{caption:'北向上 · 入口在左下方',svg},routes:[{title,map,start:'gate',goal:expectedPath.at(-1),expectedPath,buttonLabels:{north:'Northwards',south:'Southbound',west:'Westwards',east:'Eastbound'},transcript,explanation:'按导览的顺序经过每个路口；地图上下左右分别对应北南西东。标准路线会显示在图中。',vocabulary:[['northwards','向北'],['southbound','向南行进'],['eastwards','向东'],['westwards','向西'],['towards the top of the plan','朝地图上方'],['go down the plan','往地图下方走']]}]};
};
window.RRCompactTopic=config=>{
  const closeMeanings={
    deposit:'已经付清且不再结算的全部费用',refundable:'任何情况下都无条件全额退还',quotation:'尚未说明工作范围的初步猜价',estimate:'任何情况都不能调整的正式合同金额',
    eligibility:'已经被正式选中并获批',eligible:'无需审核即可保证获批',approval:'仅仅收到一份咨询请求',application:'已经确认成功的最终安排',registration:'首次询问后自动获得全部服务',
    reservation:'无需确认就能永久保留的名额',booking:'到场后无需核实的随意参与',confirmation:'尚未决定是否采纳的建议',availability:'随时都能立即提供且无容量限制',
    capacity:'实际已经到场的人数',attendance:'场地最多可容纳的人数',frequency:'单次旅程需要的时间',reliability:'一次旅程达到的最高速度',fare:'车辆运行所需的全部燃料费',
    scope:'研究结果已经确定的可信程度',hypothesis:'已经由研究证明的最终结论',evidence:'不需要检验的个人直觉',correlation:'已经证明一个因素直接造成另一个',association:'唯一而且确定的因果联系',
    causation:'只表示两个现象同时出现',inference:'直接目击到的全部事实本身',interpretation:'无需证据即可确定的唯一解释',prediction:'已经发生并完整记录的历史事实',
    representative:'人数最多因而必然没有任何偏差',replication:'不再观察而直接复制原有结论',baseline:'干预全部完成之后的最终总分',limitation:'足以否定整项研究的一切内容',
    significant:'完全没有偶然性且适用于所有场景',validity:'只看参与人数是否足够多',bias:'任何一次随机出现的小差异',uncertainty:'已经证明所有解释都是错误的',
    sample:'研究涉及范围内的全部人口',participant:'仅负责解释结果而未参加研究的人',criterion:'结果完成后才提出的个人印象',objective:'研究最后已经证实的结论',
    interpretation:'对材料进行不带分析的逐字复制',evaluation:'只报告优点而不考虑局限',feedback:'只有最终分数而没有改进信息',reflection:'只按日期列出发生的事情',
    prototype:'已经经过全面验证并正式量产的成品',feasibility:'公众觉得一个设想有多有趣',innovation:'只改变外观而无需解决任何新问题',adaptation:'不考虑需要而彻底替换全部系统',
    accessible:'不附带任何开放时间或使用条件',inclusive:'假定所有人的需要完全相同',adjustable:'出厂后任何位置都无法改变',detachable:'一经安装便成为不可分割的整体',
    maintenance:'只在设备彻底损坏后进行更换',restoration:'将原有结构全部拆除后停止使用',preservation:'为使外表全新而去掉全部历史痕迹',conservation:'禁止任何观察和记录而不作管理',
    acquisition:'只表示目前正在公开展示的部分',loan:'所有权已经永久转移的捐赠',donation:'必须在期限结束后归还的借展物品',provenance:'研究者对物品美观程度的评价',
    collection:'任何时候都能看见的全部展品',archive:'仅含最新宣传材料的临时展示',catalogue:'不需要与实际物品对应的随意清单',circulation:'印刷机械每分钟的转速',
    sponsorship:'仅由观众支付的入场票款',fundraising:'将已经筹到的全部资金平均分给参与者',endorsement:'已经完成且永远有效的官方合格检验',campaign:'未经安排而偶然出现的一条评价',
    demand:'仓库里尚未卖出的全部存货',distribution:'商品最初的生产加工过程',scarcity:'商品大量积压无人需要的情况',affordability:'产品看上去是否高档稀有',
    traceability:'保证每批产品的口味绝对一致',ethical:'只考虑销量是否能够提高',branding:'仅记录商品生产日期的工作',transparency:'向公众隐去全部供应来源',
    sustainable:'只要首次投入低就必然永久可用',temporary:'不需要复核即可永久持续',provisional:'今后不允许再修改的',speculative:'已被充分实验最终证实的',
    gradual:'在一次活动中立即增加到最大量',consistency:'偶尔完成一次特别困难的任务',recovery:'永远停止参与所有活动',pace:'能够坚持运动的最长总时间',
    endurance:'某一瞬间能够达到的最高速度',stamina:'一次动作完成得是否漂亮',motivation:'无须解释就必须履行的全部义务',barrier:'仅表示参与者缺乏兴趣',
    habitat:'只指动物暂时经过的一条路线',biodiversity:'只统计一个物种的个体数量',abundance:'一个地方有多少种不同生物',distribution:'某一个体单次移动的速度',
    invasive:'凡是人工种植就一定属于的',native:'从任何地方引入但长得很快的',resilient:'任何条件下都保持相同活跃度的',dormant:'已彻底死亡且不可能恢复的',
    predation:'动物因非捕食原因死亡的全部情况',deterrent:'专门吸引动物靠近的诱饵',habituation:'第一次遇到刺激时的突然受惊',exposure:'仅用物质名称就能确定的危害大小',
    mitigation:'保证将所有风险永久降为零',monitoring:'只在开始当天进行一次检查',verification:'仅采纳没有证据的口头保证',quota:'不附带任何限制的最低目标数量',
    delegation:'把全部责任取消而无需说明归属',autonomy:'不再需要履行任何职责',accountability:'只有作决定的权利而无需解释结果',specialisation:'任何人同时负责所有领域而没有分工',
    vacancy:'已经保证录用某位申请人的岗位',probation:'已经完成且无需再评估的永久任用',reference:'应聘者自己给自己写的最终评价',referee:'负责在活动中作最终裁判的人员',
    overtime:'所有普通排班时间的总和',benefit:'必须从基本工资中扣除的金额',uniform:'可以在任何任务中替代防护用品的衣服',confidentiality:'允许任何记录不经同意公开',
    skimming:'逐字逐句全面分析全部细节',annotation:'不说明理由地复制全文',revision:'只把所有文字原样重新抄写',allocation:'在未沟通时假定所有人负责同一任务'
  };
  const bank={
    service:[['The arrangement has ___ been confirmed.（not yet / no longer）','not yet','not yet 是截至目前尚未，不能误听为已取消。','The arrangement has ___ been confirmed.',[], '尚未'],['Contact the organiser ___ you need to change your request.（if / despite）','if','if 引出需要修改时才成立的条件。','Contact the organiser ___ you need to change your request.',[],'如果']],
    instructions:[['Read the instructions ___ starting the activity.（before / unless）','before','before 限定先后顺序。','Read the instructions ___ starting the activity.',[],'在……之前'],['The revised arrangement applies ___ new visitors.（only to / instead of）','only to','only to 限定适用对象，不是所有人。','The revised arrangement applies ___ new visitors.',[],'仅适用于']],
    discussion:[['The evidence suggests a link ___ proving a cause.（rather than / as soon as）','rather than','rather than 排除更强的因果断言。','The evidence suggests a link ___ proving a cause.',[],'而不是'],['We should report the limitation ___ the result looks convincing.（even though / so that）','even though','even though 表示让步，结论看似有力也不能忽视局限。','We should report the limitation ___ the result looks convincing.',[],'即使、尽管']],
    lecture:[['The process has ___ examined under controlled conditions.（been / being）','been','has been examined 是现在完成时被动语态。','The process has ___ examined under controlled conditions.',[],'已被（完成被动）'],['The explanation depends ___ the conditions described earlier.（on / at）','on','depend on 后的条件限定解释适用范围。','The explanation depends ___ the conditions described earlier.',[],'取决于的条件']]
  };
  const formats=config.formats.flatMap(([type,count])=>Array(count).fill(type));
  const grammarExamples=[
    ['The details will remain unchanged ___ a revision is confirmed.（unless / despite）','unless','unless 引出例外，未确认修改时仍按原安排。','除非'],
    ['The information applies ___ the situation described here.（only to / in spite of）','only to','only to 限定适用范围，不能扩展到所有情形。','仅适用于'],
    ['The earlier account ___ the later one differ in emphasis.（and / because）','and','并列的两个主语搭配复数谓语 differ。','和、以及'],
    ['The task cannot begin ___ the preliminary checks are complete.（until / although）','until','not until 限定在检查完成之后才能开始。','直到'],
    ['The conclusion is plausible, but ___ certain.（not necessarily / no longer）','not necessarily','not necessarily 表示未必，保留可能性而不完全否定。','不一定'],
    ['The change may ___ affected the result.（have / has）','have','情态动词后用 have 加过去分词，表示对过去的可能判断。','可能已经（情态完成式）'],
    ['The result was recorded ___ a final explanation was proposed.（before / unless）','before','before 说明先记录结果，再提出解释。','在……之前'],
    ['The account distinguishes an example ___ a general rule.（from / into）','from','distinguish A from B 表示区分两个不同层次。','与……区分'],
    ['The claim is based ___ the evidence available at present.（on / to）','on','be based on 引出结论所依据的材料。','依据、基于'],
    ['The process is expected ___ under the stated conditions.（to work / working）','to work','be expected to do 表示预期，不能据此推断已发生。','预期将起作用'],
    ['The change occurred ___ the original plan.（despite / although）','despite','despite 后接名词短语；although 后应接从句。','尽管'],
    ['The description refers to what ___ planned, not what has been completed.（was / have）','was','what was planned 与 has been completed 对照计划和完成事实。','过去被计划的']
  ];
  const grammarStart=(config.book*3+config.test*2+config.part)%grammarExamples.length;
  const quizGrammar=[grammarExamples[grammarStart],grammarExamples[(grammarStart+5)%grammarExamples.length]].map(e=>[e[0],e[1],e[2],null,[],e[3]]);
  const noteStems=[s=>`The discussion of [${s}] focuses on ___ .`,s=>`One detail about [${s}] is ___ .`,s=>`The example involving [${s}] concerns ___ .`,s=>`The notes on [${s}] include ___ .`,s=>`Regarding [${s}], the speaker mentions ___ .`];
  const questionStems=[s=>`What does the speaker say about [${s}]?`,s=>`Which point is made about [${s}]?`,s=>`What detail is given about [${s}]?`];
  const units=config.units.trim().split('\n').filter(Boolean).map((line,i)=>{
    const fields=line.trim().split('|');
    if(!fields[4])fields[4]=closeMeanings[fields[0].toLowerCase()]||config.units.trim().split('\n').filter(Boolean)[(i+1)%12].split('|')[1];
    if(i<10&&!fields[5]){
      let synonym=fields[2];const format=formats[i];
      if(/^(able|capable|suitable|willing|ready|open|too|subject|useful|recognisable|intended|designed|concerned|within|outside|available|protected|previously|temporarily|worthy|far|grown|built|recovered)\b/.test(synonym))synonym='being '+synonym;
      if(synonym.startsWith('relating to '))synonym='a connection with '+synonym.slice(12);
      fields[5]=/填空/.test(format)?noteStems[i%noteStems.length](synonym):format==='多选题干'?`Which TWO points are made about [${synonym}]?`:/地图|平面图/.test(format)?`Where does the guide locate [${synonym}]?`:/匹配/.test(format)?`Which comment applies to [${synonym}]?`:questionStems[i%questionStems.length](synonym);
    }
    return fields.join('|');
  }).join('\n');
  RRPrepareTopic({...config,units,quizGrammar,grammar:config.grammar||bank[config.grammarGroup||({1:'service',2:'instructions',3:'discussion',4:'lecture'}[config.part])],
    paragraphTitles:config.paragraphTitles||[config.englishTitle+' · background',config.englishTitle+' · details'],
    endings:config.endings||['These details need to be considered together, because the examples illustrate different aspects of the same topic.','The final account should keep these distinctions clear and avoid drawing a conclusion from an isolated detail.'],
    signalFocus:config.signalFocus||({1:'留意确认、限定条件、修正和补充细节。',2:'留意规则、安排、对比与具体例子。',3:'留意观点确认、证据强弱、保留意见和研究安排。',4:'留意讲座转入重点、解释、因果与限定条件。'}[config.part]),
    sourceRefs:[`https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-${config.book}-listening-test-${config.test}`]
  });
};
window.RRPrepareTopic=config=>{
  const units=config.units.trim().split('\n').filter(Boolean).map(line=>{
    const [word,chinese,synonym,sentence,contrast,question]=line.trim().split('|');
    if(!word||!chinese||!synonym||!sentence?.includes('___')||!contrast)throw Error(`Incomplete preparation unit: ${line}`);
    return {word,chinese,synonym,sentence,contrast,question};
  });
  if(units.length!==12)throw Error(`Expected 12 units for ${config.book}/${config.test}/${config.part}`);
  const plain=text=>text.replace(/[\[\]]/g,'');
  const source=(unit)=>unit.sentence.replace('___',`[${unit.word}]`).replace(/([^\[\]]+)|\[([^\]]+)\]/g,(match,normal,key)=>key?`|[${key}]|`:normal.trim().split(/\s+/).join('|')).replace(/\|+/g,'|').replace(/^\||\|$/g,'');
  const cleanSentence=unit=>plain(unit.sentence.replace('___',unit.word));
  const quiz=units.slice(0,8).map((unit,i)=>{const options=[unit.chinese,...new Set([unit.contrast,...units.slice(i+1).concat(units.slice(0,i)).map(u=>u.chinese)])].filter((text,index,all)=>all.indexOf(text)===index).slice(0,4);return RRQuiz.choice(`${cleanSentence(unit)}\n这里的 ${unit.word} 最接近哪种意思？`,options,0,`${unit.word} 在这里指“${unit.chinese}”，可对应 ${unit.synonym}。${unit.contrast} 改变了原句的意思。`);});
  units.slice(8,10).forEach((unit,i)=>quiz.push(RRQuiz.choice(`在本段语境中，哪些表达与“${unit.chinese}”一致？选两项。`,[unit.word,unit.synonym,units[i+2].word,units[i+5].synonym],[0,1],`${unit.word} 与 ${unit.synonym} 在本段表达同一含义；另外两项指向不同概念。`)));
  (config.quizGrammar||config.grammar).forEach(entry=>quiz.push(RRQuiz.cloze(entry[0],entry[1],entry[2])));
  const dictation=units.slice(0,10).map(unit=>[plain(unit.sentence),unit.word,`${unit.word}：${unit.chinese}。同义表达：${unit.synonym}。`]).concat(config.grammar.map(entry=>[entry[3],entry[1],entry[2],entry[4]||[]]));
  const formats=config.formats.flatMap(([format,count])=>Array(count).fill(format));
  if(formats.length!==10)throw Error('Locator formats must total ten');
  const locators=units.slice(0,10).map((unit,i)=>{
    const format=formats[i];let question=unit.question;
    if(!question)throw Error(`Missing locator question: ${unit.word}`);
    if(/填空/.test(format)&&!question.includes('___'))throw Error(`Missing question gap: ${unit.word}`);
    const tokenQuestion=question.replace(/([^\[\]]+)|\[([^\]]+)\]/g,(match,normal,key)=>key?`|[${key}]|`:normal.trim().split(/\s+/).join('|')).replace(/\|+/g,'|').replace(/^\||\|$/g,'');
    return [tokenQuestion,source(unit),`题干中的 ${unit.synonym}／相关定位表达，对应原文 ${unit.word}（${unit.chinese}）。${config.locatorNote||'结合句中的限定和转折判断，标记的是定位关系，不需要填写答案。'}`,format];
  });
  const paragraphs=[0,1].map((_,i)=>{
    const group=units.slice(i*6,i*6+6);
    return {title:config.paragraphTitles[i],text:`${config.intros[i]} ${group.map(unit=>unit.sentence.replace('___',`[${unit.word}]`).replace(/\[([^\]]+)\]/g,(full,text)=>text===unit.word?full:text)).join(' ')}`,
      pairs:group.map(unit=>[unit.word,unit.synonym,`${unit.word} 在这里是“${unit.chinese}”，对应 ${unit.synonym}；不能混同为“${unit.contrast}”。`]),distractors:config.distractors[i]};
  });
  const profiles=[[2,4,6],[1,3,5],[2,3,6],[1,4,6]];
  const key=config.book+config.test+config.part;
  const signals=paragraphs.map((paragraph,i)=>{
    const cueIndices=profiles[(key+i)%profiles.length];
    const transcript=[config.intros[i],...units.slice(i*6,i*6+6).map(cleanSentence),config.endings[i]];
    const pool=config.part===3?['I think we should emphasise that','We should also make it clear that','Another point we need to explain is that','I would highlight the fact that','What I take from this is that','The other point I would include is that','We need to be careful here, because','Yes, and the practical detail is that','One thing our presentation should explain is that']:['One point to remember is that','More specifically,','Another important detail is that','In particular,','To be more precise,','What matters here is that','For the present example,','It is also worth noting that','At this stage, remember that'];
    const prefixes=[0,3,6].map(offset=>pool[(key+i*2+offset)%pool.length]);
    const cues=cueIndices.map((sentence,j)=>{
      if(j===1&&key%2===0&&/rather than|without|does not|is not|but |not automatically/.test(transcript[sentence]))prefixes[j]=config.part===3?'But we should remember that':'However,';
      transcript[sentence]=prefixes[j]+' '+transcript[sentence][0].toLowerCase()+transcript[sentence].slice(1);
      return {sentence,signal:prefixes[j],why:'信号表达后引入需要留意的具体信息；结合完整句理解，不只听到关键词就判断答案。'};
    });
    return {title:paragraph.title,focus:config.signalFocus,transcript,cues,...(config.part===3?{speakers:transcript.map((_,j)=>j%2===0?'en-GB-SoniaNeural':'en-GB-RyanNeural')}: {})};
  });
  const grammarWords=config.grammar.concat(config.quizGrammar||[]).map(entry=>[entry[1],entry[5]]);
  const allWords=units.map(unit=>[unit.word,unit.chinese]).concat(grammarWords,...(config.routes||[]).map(route=>route.vocabulary),...(config.routes?.length?[[['eastbound','向东行进']]]:[]));
  RRAddTopic({...config,coreWords:allWords.filter((entry,index,list)=>list.findIndex(x=>x[0]===entry[0])===index),quiz,dictation,locators,paragraphs,signals});
  RRPreparedTopics.push({book:config.book,test:config.test,part:config.part,title:config.title,map:Boolean(config.map)});
};
