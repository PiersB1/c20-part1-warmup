(() => {
  const T=RRReadTokens, P='c15-r-t4-p1';
  const quiz=(q,options,answer,why,i)=>{const n=(i*3+1)%4;return {q,options:options.slice(n).concat(options.slice(0,n)),answer,why};};
  const vocab=[
    ['The reserve occupies an arid plateau where rainfall is both low and unpredictable.\n这里 arid 指？',['气候干旱的','季节性被水淹没的','土壤完全无养分的','全年气温很高的'],'气候干旱的','arid说明缺乏降水；不能据此推出全年高温或完全没有养分。'],
    ['A fragile ecosystem may recover slowly from damage that a more resilient one could absorb.\n这里 fragile 强调？',['容易受破坏的','物种数量必然很少的','尚未被人类研究的','已经无法恢复的'],'容易受破坏的','fragile强调脆弱性；后文说恢复慢，没有说不能恢复。'],
    ['The planting scheme favours native shrubs over imported ornamental varieties.\n这里 native 指？',['该地区自然原有的','在当地人工培育后才出现的','只在该地区存活的','能在当地快速生长的'],'该地区自然原有的','native说明原生属性，不等于仅存在于此，也不保证生长速度。'],
    ['The nursery aims to restore vegetation on disturbed ground, rather than preserve the site in its present bare condition.\n这里 restore 的意思是？',['使其恢复到较好的原有状态','原样维持目前的状态','用另一种土地用途取代它','证明它从未遭到破坏'],'使其恢复到较好的原有状态','restore强调恢复；preserve更侧重保护、维持，两者不可在本句互换。'],
    ['Deep-rooted plants can withstand brief shortages of moisture, although prolonged shortages may still kill them.\n这里 withstand 表示？',['承受住','完全阻止发生','在发生前准确预测','发生后立即消除'],'承受住','withstand是抵御、耐受，不等于阻止短缺发生，brief也不能扩大成任何时长。'],
    ['The extra windbreak was intended to counteract the drying effect of the afternoon breeze.\n这里 counteract 指？',['抵消某种不利影响','记录某种影响的强度','利用某种影响增加收益','彻底消除造成影响的源头'],'抵消某种不利影响','抵消干燥效应不等于让风停止，也不保证完全抵消。'],
    ['The meadow provides a refuge for insects when neighbouring fields are sprayed.\n这里 refuge 指？',['供生物躲避威胁的场所','用于统计生物数量的区域','保证生物永久定居的区域','专门饲养昆虫的设施'],'供生物躲避威胁的场所','refuge是庇护场所，不要求人工饲养，也未承诺永久定居。'],
    ['Several owners agreed to get on board after the researchers explained how access to their fields would be managed.\n这里 get on board 指？',['同意参与并支持','同意把土地所有权转交出去','完成全部现场工作','只同意了解项目进展'],'同意参与并支持','get on board在项目语境中是加入、支持，不能读成出售土地或已完成任务。'],
    ['The initial grant bought equipment, but a sustainable income would be needed to pay for maintenance over many seasons.\n这里 sustainable income 强调？',['可长期维持的收入来源','启动阶段一次性收到的资金','不扣除任何成本的销售额','每个季节都完全相等的利润'],'可长期维持的收入来源','sustainable强调能够持续，并不保证收入恒定；income也不是扣成本后的利润。'],
    ['The pilot was confined to sheltered plots; exposed ground was excluded until better screens became available.\n这里 confined to 表示？',['范围被限制在','首先从这里开始但已覆盖别处','主要集中在但没有排除别处','只是在此处停留时间较长'],'范围被限制在','confined to是范围限制；后句明确排除暴露地块，不能弱化成主要集中于。'],
    ['Only after the trial has been independently assessed will the method be rolled out to additional nurseries.\n这里 rolled out 指？',['推广实施','停止使用并回收','重新进行基础设计','只向公众公布但不应用'],'推广实施','roll out a method是扩大部署；only after限制开始推广的条件。'],
    ['The project exploited a brief period of cool weather to move seedlings without exposing them to severe heat.\n这里 exploited 最接近？',['充分利用了','人为制造了','提前延长了','耗尽并破坏了'],'充分利用了','exploit机会或条件表示利用，未必含有剥削、破坏的贬义。'],
    ['A continuous corridor of vegetation connects two nesting areas that would otherwise be isolated.\n这里 corridor 指？',['连接栖息地的植被通道','包围全部栖息地的封闭边界','为游客修建的步行通道','用于划分不同物种的隔离带'],'连接栖息地的植被通道','生态语境的corridor承担连接作用，不是建筑走廊或隔离边界。'],
    ['The cultivation of seedlings takes place inside the nursery; naturally established plants outside it are counted separately.\n这里 cultivation 指？',['人工栽培','自然定居生长','收集后分类记录','采摘成熟植物'],'人工栽培','cultivation指栽培过程，不能和自然生长、采收或调查等同。'],
    ['The volunteers hoped to overcome prejudice against untidy-looking vegetation by showing its ecological value.\n这里 prejudice 指？',['未经充分了解而形成的偏见','根据长期试验形成的定论','关于维护费用的精确估算','已经实施的禁止种植规定'],'未经充分了解而形成的偏见','prejudice是先入之见，不等于正式规则或有证据支持的结论。'],
    ['The sheltered strip reduced evaporation from the trays, so the same quantity of moisture lasted longer.\n这里 evaporation 指？',['液体转为气体而散失的过程','液体流到更深土层的过程','植物从土壤吸收养分的过程','空气中的水汽凝结的过程'],'液体转为气体而散失的过程','evaporation是蒸发；下渗、吸收和凝结是不同过程。']
  ].map((v,i)=>quiz(...v,i));
  const rewrites=[
    ['Seedlings survived where they had access to shade.\n选择信息一致的表达。',['Seedlings remained alive in places where shade was available to them.','Seedlings created shade wherever they survived.','Shade was available only where every seedling survived.','Seedlings could not survive without shade in any environment.'],'Seedlings remained alive in places where shade was available to them.','have access to可改写为有条件获得；本句描述观察到的地点，不能升级成普遍必要条件。'],
    ['The trial has the potential to benefit small nurseries.\n选择信息一致的表达。',['The trial may prove useful to small nurseries.','Small nurseries have already obtained benefits from the trial.','The trial is scheduled to be adopted by all small nurseries.','Only small nurseries could possibly benefit from the trial.'],'The trial may prove useful to small nurseries.','potential是潜力，不是已发生的收益、实施日程或排他性。'],
    ['Shrubs were planted in place of a fence along one boundary.\n选择信息一致的表达。',['Shrubs replaced a fence on one edge of the site.','A fence was added to protect shrubs around the whole site.','Shrubs and a fence were installed together along one edge.','A fence replaced shrubs along one edge of the site.'],'Shrubs replaced a fence on one edge of the site.','in place of表示替代；注意谁替代谁，one boundary也不能扩大到整个边界。'],
    ['Recruiting volunteers was essential, but it did not by itself ensure the project’s success.\n选择信息一致的表达。',['The project needed volunteers, although recruiting them alone was insufficient.','Recruiting volunteers was enough to make the project successful.','Volunteers would be needed only if the project became successful.','The project could succeed equally well with or without volunteers.'],'The project needed volunteers, although recruiting them alone was insufficient.','essential表示必要；not by itself ensure排除充分性，两者必须同时保留。'],
    ['The nursery has yet to recover its initial costs.\n选择信息一致的表达。',['The nursery has not earned back its start-up expenditure so far.','The nursery has earned back its costs but has made no additional profit.','The nursery will never earn back its start-up expenditure.','The nursery has not yet paid any of its initial bills.'],'The nursery has not earned back its start-up expenditure so far.','has yet to=到目前仍未；不等于永不，也不等于尚未付款。'],
    ['The estimate refers to the planted strip rather than the entire reserve.\n选择信息一致的表达。',['The calculation concerns only the strip where planting took place.','The calculation covers the whole reserve except the planted strip.','The planted strip and the whole reserve have the same estimated area.','The calculation concerns most of the reserve, including the planted strip.'],'The calculation concerns only the strip where planting took place.','rather than划定估计对象，不能把局部数据推及整个保护区。']
  ].map((v,i)=>quiz(...v,i+16));
  const pairs=[
    ['pioneering','breaking new ground','pioneering强调开拓性，不保证已经成功或广泛推广。'],
    ['reinstate','bring back','reinstate在此是恢复一种停用的做法，不是首次引入。'],
    ['aspirational','keen to improve their prospects','aspirational指期望提升处境；不等于当前已富裕。'],
    ['resuscitation','revival','文化语境的resuscitation是重新唤起活力，不是逐字医疗含义。'],
    ['smallholdings','small farms','smallholding是小农场，并不表示产量或利润必然很低。'],
    ['packed with','rich in','packed with在此是富含；不意味着完全由某物构成。']
  ];
  const segments=['A ',{n:0},' education scheme invited older residents to ',{n:1},' the practice of recording the first flowering dates of local plants. Some ',{n:2},' young growers saw participation as a way to develop their skills. The organisers described the programme as the ',{n:3},' of a neglected tradition, rather than the invention of a new one. Visits included both large estates and ',{n:4},'. After each visit, participants shared notebooks ',{n:5},' observations; these were accounts of what they had seen, not instructions for running a farm.'];
  const matching={id:P+'-match',title:'A record of seasonal change',segments:segments.map(x=>typeof x==='string'?x:{id:P+'-slot'+x.n,text:pairs[x.n][0],answer:P+'-choice'+x.n,explanation:pairs[x.n][2]}),choices:[...pairs.map((p,i)=>({id:P+'-choice'+i,text:p[1]})),{id:P+'-x1',text:'already financially secure'},{id:P+'-x2',text:'introduce for the first time'},{id:P+'-x3',text:'made entirely of'}]};
  matching.choices=[7,2,4,0,8,3,6,1,5].map(i=>matching.choices[i]);
  const sentences=[
    {id:P+'-syntax1',kind:'backbone',tokens:T('Although|the surveyors|who|visited|the exposed ridge|expected|poor survival,|the seedlings|that|had received|temporary shelter|retained|most of their foliage|after|the protective screens|were removed.'),subject:'the seedlings',predicate:'retained',skeleton:'The seedlings retained most of their foliage.',translation:'尽管到暴露山脊调查的人员预期存活情况不佳，那些得到过临时遮护的幼苗在屏障移除后仍保留了大部分叶片。',why:'who visited修饰surveyors；that had received修饰seedlings。主句动作是retained，were removed属于after从句。'},
    {id:P+'-syntax2',kind:'backbone',tokens:T('The claim|that|a dense planting scheme|would always conserve|more moisture|than|a sparse one|was questioned|by|a researcher|whose measurements|revealed|substantial competition|between|closely spaced plants|during|the hottest weeks.'),subject:'The claim',predicate:'was questioned',skeleton:'The claim was questioned by a researcher.',translation:'一位研究人员的测量显示，最热的几周里，间距小的植物存在显著竞争；他因此质疑了“密植总比疏植保存更多水分”这一说法。',why:'that引出claim的内容；whose引出研究人员的测量。主句谓语是完整的被动结构was questioned。'},
    {id:P+'-syntax3',kind:'reference',focus:'it',tokens:T('To investigate why several seedlings bent away from the exposed edge,|the technician installed|a removable wind screen|beside the outdoor trays.|A second assistant photographed|the seedlings|each morning, checked|the nearby thermometer|and recorded whether|the irrigation pump|had completed its cycle.|Although the photographs helped the team compare growth over time and the pump supplied moisture to every tray,|it|reduced the force of the gusts reaching the youngest plants,|which remained upright more often than those in the unsheltered row.'),antecedent:'a removable wind screen',translation:'为调查几株幼苗为何背向暴露边缘弯曲，技术员在室外托盘旁安装了可拆卸挡风屏。另一名助手每天拍摄幼苗、检查附近温度计，并记录灌溉泵是否完成运转周期。照片帮助团队比较生长过程，泵为各托盘供水，而挡风屏减弱了吹向最幼小植株的阵风，使它们比无遮挡那排更常保持直立。',why:'it对应能减弱阵风的wind screen。thermometer与pump同样是单数名词，但与reduced the force of the gusts不构成合理动作关系。'},
    {id:P+'-syntax4',kind:'reference',focus:'this measure',tokens:T('During a review of the nursery’s working practices,|the supervisor suggested|moving deliveries to the morning,|while the plant specialist proposed|keeping all incoming seedlings apart from the established stock for an observation period.|The delivery proposal was rejected because drivers served several sites,|but the team adopted|a temporary separation rule for new arrivals.|A revised rota for weekend watering was circulated later that week.|In the annual review,|this measure|was credited with preventing pests carried by recently purchased plants from spreading through the older collection.'),antecedent:'a temporary separation rule for new arrivals.',accept:['keeping all incoming seedlings apart from the established stock for an observation period.'],translation:'审查苗圃工作方式时，主管建议将送货改到早晨，植物专家则建议把所有新到幼苗与原有植株隔开观察一段时间。由于司机要服务多个地点，送货提议被否决；团队采用了新到植株临时隔离规则。当周稍后又发布了周末浇水轮班表。年度回顾认为，该措施阻止了新购植株携带的害虫向老植株扩散。',why:'this measure是已采用的隔离措施。防止害虫从新植株扩散这一结果排除了送货时间和轮班表；前文完整描述同一隔离措施的表达也接受。'},
    {id:P+'-syntax5',kind:'logic',text:'Even if the new shrubs tolerate the local climate, planting cannot begin unless the landowners grant access to the slope.',q:'哪项准确保留了条件关系？',options:['适应气候并不保证能开工；获得土地进入许可仍是必要条件。','只要适应气候，即使没有土地进入许可也能开工。','一旦获得土地进入许可，就能确定灌木一定适应气候。','只有灌木不适应气候时，才需要土地进入许可。'],answer:'适应气候并不保证能开工；获得土地进入许可仍是必要条件。',translation:'即便新灌木能够适应当地气候，如果土地所有者不允许进入坡地，种植也不能开始。',why:'even if表示让步假设；unless引出开工的必要条件，不能把两个条件倒置。'},
    {id:P+'-syntax6',kind:'logic',text:'The botanist regarded the result as encouraging, whereas the funding committee withheld approval for expansion until a second season’s observations were available.',q:'哪项判断有依据？',options:['植物学家持积极态度，但委员会仍在等待更多观察后才决定扩建审批。','植物学家与委员会都已同意立即扩大项目。','委员会已认定植物学家的观察结果错误。','委员会拒绝了项目今后任何扩建的可能。'],answer:'植物学家持积极态度，但委员会仍在等待更多观察后才决定扩建审批。',translation:'植物学家认为结果令人鼓舞，而资助委员会暂缓批准扩建，直到有第二季观察资料可用。',why:'区分两方立场；withheld approval until是暂缓，不是永久拒绝，也不表示否定数据。'}
  ];
  sentences.filter(x=>x.kind==='logic').forEach((x,i)=>{const n=i+1;x.options=x.options.slice(n).concat(x.options.slice(0,n));});
  const evidencePassage={title:'Testing shelter on an exposed slope',paragraphs:[
    {label:'A',sentences:[
      {id:P+'-a1',tokens:T('A restoration team|established|a trial on an abandoned hillside|to examine whether temporary shelter improved the establishment of native seedlings.')},
      {id:P+'-a2',tokens:T('The plants|came from|a local nursery,|and|the trial|compared|sheltered and exposed rows|rather than native and imported species.')},
      {id:P+'-a3',tokens:T('Both sets of rows|were planted|during the same week,|using|seedlings of similar size|so that differences in starting conditions were limited.')}
    ]},
    {label:'B',sentences:[
      {id:P+'-b1',tokens:T('At first,|staff|counted|every green plant visible in each row,|including seedlings that had appeared naturally.')},
      {id:P+'-b2',tokens:T('They|later|excluded|unmarked plants|from the survival totals|because|only tagged individuals|could be confirmed as members of the planted group.')},
      {id:P+'-b3',tokens:T('Naturally established seedlings|were still mapped separately,|since|their distribution|might help explain|which parts of the slope were easiest to colonise.')}
    ]},
    {label:'C',sentences:[
      {id:P+'-c1',tokens:T('The shelters|were made from|woven panels|placed on the side facing the prevailing wind,|without enclosing each row completely.')},
      {id:P+'-c2',tokens:T('They|were removed|for inspections|so that|observers|could check|both groups|under the same viewing conditions.')},
      {id:P+'-c3',tokens:T('This arrangement|required|additional labour,|but|the team|considered|consistent observation|more important|than minimising the time spent at each row.')}
    ]},
    {label:'D',sentences:[
      {id:P+'-d1',tokens:T('At the end of the first season,|the sheltered rows|contained|a greater proportion of surviving seedlings,|although|the tallest individual|grew|in an exposed row.')},
      {id:P+'-d2',tokens:T('This difference|was most pronounced|near the ridge,|where|the wind|was strongest,|and|much smaller|lower down the slope.')},
      {id:P+'-d3',tokens:T('The researchers|therefore|warned against|treating|a figure for the entire hillside|as an accurate description of every planting location.')}
    ]},
    {label:'E',sentences:[
      {id:P+'-e1',tokens:T('A neighbouring nursery|expressed interest in the shelters,|but|its interest|did not amount to|an agreement to purchase them.')},
      {id:P+'-e2',tokens:T('Before|recommending wider adoption,|the researchers|wanted|evidence from a second exposed site|to check whether the effect depended on unusual local conditions.')},
      {id:P+'-e3',tokens:T('For now,|the panels|would remain|part of an experimental system,|and|the team|planned|to publish both the advantages and the extra work involved.')}
    ]}
  ]};
  const evidence=[
    {id:P+'-ev1',q:'Find the sentence showing that the trial compared protection conditions, not plant origins.',sentence:P+'-a2',why:'比较对象是sheltered与exposed；native与imported这一看似相关的分类被明确排除。'},
    {id:P+'-ev2',q:'Which sentence distinguishes commercial interest from an actual buying commitment?',sentence:P+'-e1',why:'expressed interest不能升级成agreement to purchase，注意否定的范围。'},
    {id:P+'-ev3',q:'Find the evidence that some visible plants were no longer included in the main survival count. Mark the excluded group.',sentence:P+'-b2',phrase:'unmarked plants',why:'excluded…from the survival totals对应no longer included；未标记植物不是已确认的种植样本。'},
    {id:P+'-ev4',q:'Find why the screens were taken away during checks. Mark the condition the observers wanted to keep equal.',sentence:P+'-c2',phrase:'under the same viewing conditions.',why:'so that引出移除屏障的目的；不是说屏障本身降低存活率。'},
    {id:P+'-ev5',q:'Find where the survival advantage was greatest. Mark the location.',sentence:P+'-d2',phrase:'near the ridge,',why:'most pronounced对应greatest；lower down是差异较小的对照地点。'},
    {id:P+'-ev6',q:'Find the requirement for recommending use beyond the trial. Mark the further evidence required.',sentence:P+'-e2',phrase:'evidence from a second exposed site',why:'before限制推荐推广的前提；不是邻近苗圃感兴趣就足够。'}
  ];
  const judgements=[
    {id:P+'-tf1',text:'After a frost warning, staff moved the tender plants indoors. The hardy varieties remained outside throughout the cold spell.',q:'Every plant was moved indoors during the cold weather.',answer:'FALSE',why:'hardy varieties留在室外，直接反驳every plant。',translation:'接到霜冻预警后，工作人员把不耐寒植株移入室内；耐寒品种在整个寒冷阶段一直留在室外。'},
    {id:P+'-tf2',text:'The restored meadow attracted more visiting insects than the mown lawn beside it. Observations were made at the same time of day in both areas.',q:'More insects were recorded visiting the restored meadow than the adjacent lawn.',answer:'TRUE',why:'attracted more visiting insects与more…recorded visiting在相同观察语境中对应，adjacent对应beside。',translation:'恢复后的草地吸引了比旁边修剪过的草坪更多的来访昆虫；两处观察都在一天中的相同时段进行。'},
    {id:P+'-tf3',text:'A cooperative began offering seedling identification workshops to its members. The first sessions were held in a borrowed classroom, and bookings were handled by the cooperative’s secretary.',q:'The secretary had previously taught plant identification professionally.',answer:'NOT GIVEN',why:'负责预约不说明过去是否做过职业教师；classroom也不能补出任教经历。',translation:'一家合作社开始为成员开设幼苗辨认课程；最初借用教室上课，由秘书处理预约。'},
    {id:P+'-tf4',text:'The nursery replaced disposable labels with reusable markers. The manager explained that the change was intended to reduce waste, rather than to make the labels easier to read.',q:'Reducing discarded material was the stated purpose of changing the labels.',answer:'TRUE',why:'reduce waste对应reducing discarded material；可读性被排除为所述目的。',translation:'苗圃用可重复使用的标记替换一次性标签；经理解释，目的是减少废弃物，而不是提高标签可读性。'},
    {id:P+'-tf5',text:'Sales of young plants increased in the spring. Even so, the nursery’s receipts for that season were lower than its expenditure on staffing and materials.',q:'The nursery made a profit that spring.',answer:'FALSE',why:'收入低于支出，与获得利润冲突；销量增加不能推出盈利。',translation:'春季幼株销量增加；不过，该季收入仍低于人员和材料支出。'},
    {id:P+'-tf6',text:'A researcher suggested that the same monitoring technique might be useful in coastal habitats. Her team is currently completing its report on the inland trial.',q:'The team has arranged a coastal field visit for next season.',answer:'NOT GIVEN',why:'might be useful只表示潜在用途；正在完成内陆报告不说明是否安排沿海访问，也不否定安排的可能。',translation:'一位研究人员提出，同样的监测技术也许适用于沿海生境；她的团队目前正在完成内陆试验报告。'}
  ];
  const notesPassage={title:'Collecting seed without disturbing a reserve',paragraphs:[
    'A reserve runs a small collection programme to supply its own nursery. Permission applies only to the marked collection zone, not to the reserve as a whole. Before setting out, each volunteer receives a map showing the exclusion areas. Collectors examine ripe material in the field and place damaged specimens in a separate container for later inspection.',
    'Each usable batch is put in an envelope, rather than a plastic bag, to allow air to circulate. Its label records the collection date and the name of the collector. Staff keep batches from different locations apart even when they belong to the same species; mixing them would make it impossible to trace their origin.',
    'On arrival at the nursery, the batches spend an observation period in quarantine. They are checked for insects before entering the main storage room. A weekly inspection then looks for mould. If any is found, the affected batch is removed from the shared space. The programme is intended to supplement natural regeneration, not to replace it.'
  ]};
  const notes=[
    {id:P+'-note1',q:'Before collecting, volunteers are given a ___ showing places they must avoid.',answer:'map',why:'receives a map…exclusion areas；avoid对应被排除的采集区域。'},
    {id:P+'-note2',q:'An ___ is used for each usable batch so that air can pass through.',answer:'envelope',why:'put in an envelope对应所用容器；plastic bag是明确排除的干扰。'},
    {id:P+'-note3',q:'Besides the date, labels identify the ___.',answer:'collector',why:'the name of the collector对应标签上的人员身份，不是植物种名。'},
    {id:P+'-note4',q:'Batches are separated by location to preserve information about their ___.',answer:'origin',why:'trace their origin解释为什么不能混合；species是相同也仍要分开的条件。'},
    {id:P+'-note5',q:'During storage, staff check weekly for ___.',answer:'mould',why:'weekly inspection looks for mould；insects属于进入主储藏室之前的检查。'}
  ];
  const tablePassage={title:'Materials for a trial planting bed',paragraphs:[
    'The trial bed uses several materials with different functions. Gravel is spread over the base to let surplus moisture drain away. Above it, a layer of coconut fibre holds moisture close to the developing plants. Although the fibre comes in flat sheets, it is not intended to stop animals entering the bed.',
    'A metal mesh surrounds the sides and keeps grazing animals out. The mesh does not cover the top, which remains open for inspection. At one end, a layer of pale sand makes fallen seeds easier to see during counting. None of these materials is treated as a substitute for regular checks by staff.'
  ]};
  const table=[
    {id:P+'-table1',q:'___',cells:['At the base','___','Allows excess moisture to escape'],answer:'gravel',why:'let surplus moisture drain away对应allows excess moisture to escape；注意底部位置。'},
    {id:P+'-table2',q:'___',cells:['Above the base','___','Retains moisture near young plants'],answer:'coconut fibre',accept:['fibre'],why:'holds moisture close to…对应retains moisture near…；完整名称是coconut fibre，也接受短文后面使用的简称fibre。coconut本身不能说明材料形态。'},
    {id:P+'-table3',q:'___',cells:['Around the sides','___','Excludes grazing animals'],answer:'metal mesh',accept:['mesh'],why:'metal mesh…keeps grazing animals out对应excludes，也接受文中的简称mesh；纤维层的防动物用途被明确否定。'}
  ];
  RRAddReadingTopic({id:P,location:{book:15,test:4,part:1},title:'乡土植物与生态恢复',focus:'干旱生态与恢复；功能与用途对应；局部和整体；参与的必要性；潜力、意图与实际结果；笔记及表格中的词数限制。',
    coreWords:[['arid','干旱的'],['fragile ecosystem','脆弱的生态系统'],['native','本地原生的'],['subsoil','底土；表层以下的土壤'],['withstand','承受住；耐受'],['erosion','土壤侵蚀'],['clear woodland','清除林地'],['smallholding','小农场'],['restore','使恢复'],['habitat','生境；栖息地'],['pioneering','开拓性的'],['get on board','同意参与并支持'],['prejudice','偏见'],['aspirational','期望改善处境的'],['resuscitation','复兴；重新唤起活力'],['reinstate','恢复；重新确立'],['sustainable income','可持续的收入'],['cultivation','栽培'],['seed pod','种荚'],['herbal remedy','草药疗法；草药制剂'],['charcoal','木炭'],['certified organic','经有机认证的'],['counteract','抵消；对抗'],['corridor','连接生境的通道'],['evaporation','蒸发'],['refuge','庇护场所'],['biodiversity','生物多样性'],['confined to','局限于'],['exploit','充分利用'],['roll out','推广实施'],['have the potential to','有可能；有潜力'],['packed with','富含'],['seedling','幼苗'],['regeneration','自然更新；再生'],['quarantine','隔离观察'],['expenditure','支出']],
    practices:[
      [
        {id:P+'-vocab',type:'quiz',unit:'题',title:'语境词汇',instruction:'根据语境选择准确的词义，留意范围和程度。',items:vocab},
        {id:P+'-rewrites',type:'quiz',unit:'题',title:'同义改写',instruction:'选择意思、范围和条件均一致的表达。',items:rewrites},
        {id:P+'-matching',type:'paraphrase',title:'词组匹配',instruction:'拖动表达完成匹配；也可先点选项再点空格。已填选项可以拖回词库，或点击退回。',items:[matching]},
        {id:P+'-sentences',type:'reading-sentence',unit:'题',title:'长句理解',instruction:'依次练习主句主干、长语境指代和句意关系。整套核对后显示翻译与解析。',items:sentences}
      ],
      [
        {id:P+'-evidence',type:'reading-evidence',unit:'题',title:'定位与证据',instruction:'选择对应的证据句。第3–6题还需点击句内的一处定位表达。',passage:evidencePassage,items:evidence},
        {id:P+'-judgements',type:'reading-judgement',unit:'题',title:'信息一致性判断',instruction:'仅根据每题文字选择TRUE、FALSE或NOT GIVEN。',items:judgements},
        {id:P+'-notes',type:'reading-notes',unit:'题',title:'笔记填空',instruction:'Choose ONE WORD ONLY from the passage for each answer. 每空从短文提取一个单词。',passage:notesPassage,items:notes},
        {id:P+'-table',type:'reading-table',unit:'题',title:'表格填空',instruction:'Choose NO MORE THAN TWO WORDS from the passage for each answer. 每空从短文提取不超过两个单词。',maxWords:2,columns:['Position','Material','Function'],passage:tablePassage,items:table}
      ]
    ]
  });
})();
