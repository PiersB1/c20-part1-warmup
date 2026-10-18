RRReadPack({id:'c17-r-t1-p1',location:{book:17,test:1,part:1},title:'地下铁路：拥堵、施工与技术条件',focus:'问题与方案；初始计划和实际采用；缓解但未解决；技术成就与盈利；一词笔记、事实判断。',
words:`
congested|拥堵的|A congested route contains more traffic than can move freely.|拥堵路线的交通量使车辆无法畅行。|The proposal responded to a ___ central area.|提案应对中心区拥堵。
overground|地面上的|An overground railway runs above ground rather than in a tunnel.|地面铁路在地面上运行，不在隧道里。|The plan connected an ___ line with an underground route.|方案连接地面线与地下路线。
advocate|倡导者；积极支持某方案的人|An advocate argues in favour of a proposal or cause.|倡导者积极支持一项提案或事业。|An ___ described why the connection would help travellers.|倡导者解释连接线为何有助旅客。
relocate|搬迁；迁往新地点|To relocate people is to move them to another place.|迁移人员就是让他们搬到别处。|The proposal would ___ some residents rather than simply widen the road.|提案会搬迁部分居民，不只是拓宽道路。
suburb|郊区；城市外围住宅区|A suburb is a mainly residential area outside a city centre.|郊区通常是城市中心外围的居住区。|The route linked a ___ with places of work.|路线把郊区与工作地点相连。
submit|提交；呈交|To submit a plan is to present it for consideration.|提交计划就是呈交给有关方面审议。|The group would ___ the revised proposal for approval.|小组将提交修订提案申请批准。
reject|否决；拒绝接受|To reject a proposal is to decide not to accept it.|否决提案就是决定不接受它。|The committee could ___ one plan while considering another.|委员会可否决一个方案同时考虑另一个。
coincide with|与……同时发生|To coincide with an event is to happen at the same time as it.|同时发生就是与另一事件时间重合。|The announcement would ___ a separate proposal.|公告将与另一提案同时出现。
merge|合并|To merge groups is to combine them into one.|合并群体就是把它们结合成一个。|The organisers chose to ___ rather than compete with separate plans.|组织者选择合并，而非各持方案竞争。
raise funding|筹集资金|To raise funding is to obtain money for a project.|筹资是为项目获得资金。|The company needed to ___ before construction could begin.|公司需先筹资才能开工。
objector|反对者；提出异议的人|An objector argues against a proposed action.|反对者对拟议行动提出异议。|An ___ questioned the effect on nearby buildings.|反对者质疑对邻近建筑的影响。
persist|坚持；继续努力|To persist is to continue despite difficulty or opposition.|坚持是遇困难或反对仍继续。|The supporters decided to ___ after the first setback.|支持者遇首次挫折后仍决定坚持。
demolish|拆除建筑|To demolish a building is to pull it down.|拆建筑就是把它拆掉。|The team sought a route that would ___ fewer buildings.|团队寻找需拆较少建筑的路线。
cut and cover|明挖回填法；先挖沟再封顶回填|Cut and cover makes a tunnel by digging from the surface and covering the structure afterwards.|明挖回填先从地面开挖，再给隧道结构封顶回填。|The model used ___ rather than a tunnel bored entirely at depth.|模型采用明挖回填，不是完全在深处掘进。
trench|狭长沟槽|A trench is a long narrow excavation in the ground.|沟槽是在地面挖出的狭长空间。|The team measured the ___ before adding supports.|团队先测沟槽再加支撑。
temporary|临时的|Something temporary is intended to last for a limited time.|临时事物只打算存在有限时间。|The ___ supports were not the finished structure.|临时支撑不是完工结构。
arch|拱；拱形结构|An arch is a curved structure spanning an opening.|拱是跨越开口的弯曲结构。|The diagram showed an ___ above the opening.|图示开口上方的拱。
condense|使冷凝；凝结成液体|Steam condenses when it changes into liquid water.|蒸汽冷凝后变成液态水。|The equipment helped ___ part of the steam.|设备帮助冷凝部分蒸汽。
fume|烟气；有刺激性的气体|A fume is a gas or vapour that may be unpleasant or harmful.|烟气是可能难闻或有害的气体。|A ___ remained noticeable despite the added opening.|虽增加开口，烟气仍明显。
ventilation shaft|通风井|A ventilation shaft is a passage allowing air to move into or out of an underground space.|通风井让空气进出地下空间。|The design included a ___ rather than a passenger entrance at that point.|那处设计为通风井，不是旅客入口。
confined|狭窄封闭的；空间受限的|A confined space has limited room and is enclosed.|受限空间较狭小且封闭。|The engine choice had to suit a ___ underground space.|发动机选择需适应狭窄地下空间。
reliable|可靠的；能稳定运作的|A reliable system works consistently as expected.|可靠系统能稳定按预期工作。|The service depended on a ___ power supply.|服务依赖可靠电力供应。
carriage|客车厢|A railway carriage carries passengers.|铁路客车厢运送旅客。|The drawing showed a narrow ___ rather than an engine.|图画展示窄客车厢，不是发动机。
extension|延伸段；扩建|An extension adds a new section to something already there.|延伸是在已有部分上增加新段。|The proposal concerned an ___ to the existing route.|提案涉及现有路线延伸。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['suburb','submit','reject','temporary','reliable'],
contexts:[{id:'proposal',title:'A connection is proposed',words:['congested','overground','advocate','relocate','suburb','submit','reject','coincide with','merge','raise funding','objector','persist'],paragraphs:[
'A fictional town had a {{congested}} centre and several {{overground}} routes ending outside it. An {{advocate}} proposed a new connection. She also asked whether better transport could help people who might {{relocate}} to a suburb reach their work without a difficult journey.',
'One group would submit a plan while another developed a separate idea. The announcements could {{coincide with}} a wider review of travel. The committee might reject one proposal without rejecting every possible connection, so the supporters decided to {{persist}} rather than treat the first setback as the end.',
'The groups later chose to {{merge}}. They still needed to {{raise funding}}, and an {{objector}} asked about effects on nearby buildings. Combining support did not make those questions disappear. The organisers revised the plan and explained the conditions under which they thought it could work, instead of assuming that a useful goal automatically proved a safe design.'
]},{id:'construction',title:'How should the route be built?',words:['demolish','cut and cover','trench','temporary','arch','condense','fume','ventilation shaft','confined','reliable','carriage','extension'],paragraphs:[
'A class compared ways to build an {{extension}}. One route would {{demolish}} more buildings than another, so the team looked at the existing streets before selecting it. Their model of {{cut and cover}} began with a {{trench}}, temporary supports and an {{arch}} before the surface was restored.',
'The class then considered a more {{confined}} space at greater depth. A reliable supply of power would matter as much as the ability to dig. They compared an engine with a passenger {{carriage}}, making sure that a feature of one was not automatically assigned to the other.',
'Another display showed equipment intended to {{condense}} steam and a {{ventilation shaft}} for airflow. A noticeable {{fume}} could remain even after an opening was added. The class described this as a partial improvement, not proof that nothing had changed or that every problem had vanished. A finished route still needed to be judged through actual operation.'
]}],
vocab:[
['The central streets were congested.\ncongested 表示？','交通过多而无法畅行','完全没有车辆','只指道路建得很新','每段路线都已关闭','拥堵与关闭不同。'],
['An advocate supported the connection.\nadvocate 是？','积极主张方案的人','只负责反对所有方案的人','已经获得全部施工款的人','每位使用线路的旅客','支持立场不自动含资金或使用身份。'],
['The plan would relocate residents.\nrelocate 表示？','让居民迁往别处','只记录原住址','保证所有居民都不移动','改变街道名称但无人员变化','搬迁含地点改变。'],
['The two proposals coincided.\ncoincide with 表示？','时间上同时发生','内容所有细节都相同','一个必然导致另一个','两者都已经获批','时间重合非同义或因果。'],
['The two groups merged.\nmerged 表示？','结合成为一个组织','其中一个必被彻底取消所有想法','两组永远互不联系','仅在同一天开会','合并不只是同时出现。'],
['The firm needed to raise funding.\nraise funding 表示？','为工程筹集所需钱款','已经获得所有未来利润','只提高车票价格的同义词','证明每名支持者都已付款','筹资与盈利不同。'],
['An objector questioned the plan.\nobjector 是？','提出反对或异议的人','一定参与过所有施工的人','只用数据证明方案成功的人','已接受方案全部条件的人','异议者不预设经历或正确性。'],
['Supporters persisted after rejection.\npersisted 表示？','尽管遇阻仍继续','已经保证最终成功','撤回所有尝试','完全没有改变任何细节','坚持可伴随修订，不保证结果。'],
['The route would demolish fewer buildings.\ndemolish 表示？','拆掉建筑','把建筑原样搬到另一地','仅更换楼的名称','把建筑完全加固','拆除与迁移加固不同。'],
['The model used cut and cover.\n这是什么方法？','从地面挖开、建隧道后再封顶回填','地面毫不打开只在深处掘进','只架高轨道而不形成隧道','只修车厢不涉及土方','施工先后特征。'],
['The supports were temporary.\ntemporary 表示？','只在有限时期内使用','就是最终永久结构','一定完全不能承重','从来没有实际安装','临时性不等于无用。'],
['The design could condense some steam.\ncondense 表示？','使蒸汽变成液体','只把液体全部变成蒸汽','保证全部烟气都不存在','只把通道拓宽','相变与烟气清除不同。'],
['A ventilation shaft was added.\nventilation shaft 是？','供地下空间空气进出的通道','专供每名乘客进站的入口','只用于车厢停放的站台','保证完全无烟的证书','功能为通风，不保证净化全部。'],
['The engine had to suit a confined space.\nconfined 表示？','狭小或封闭受限的','没有任何边界的开阔场地','只表示空间很昂贵','只表示人们曾反对过','空间条件不同于成本或态度。'],
['The power supply was unreliable.\nreliable 表示？','能稳定按预期工作的','只因技术先进就不会有故障的','只要建成便有利润的','使用人数必定最多的','可靠性与新颖盈利不同。'],
['An extension was authorised.\nextension 是？','在现有路线基础上增加的新段','原路线所有部件完全替换','一节客车厢内部长度','停运所有现有服务','延伸不等于全线替换。']
],
rewrites:[
['Rejecting one proposal did not mean rejecting every underground connection.','A decision against a particular plan need not rule out the wider idea.','Every possible connection was permanently prohibited.','The rejected plan had already been fully built.','All plans must have identical features.','对象范围不扩大。'],
['The route followed existing streets to reduce demolition.','The alignment aimed to limit the amount of building removal.','Every building was guaranteed to remain untouched.','Demolition was chosen as the sole purpose of the line.','The route had no connection with cost considerations.','减少不等于零。'],
['Additional ventilation improved conditions without removing every fume.','A partial benefit could coexist with a remaining problem.','Any remaining smoke proves no improvement occurred.','Adding a shaft guaranteed completely clean air.','Ventilation means changing only the train’s name.','残留不抹掉改善，改善非根除。'],
['The ability to dig deeper was not enough without suitable propulsion.','Construction capability and an appropriate power system were separate requirements.','Any tunnel that can be dug must suit every engine.','Power technology had no relevance underground.','A deep route was impossible even after all requirements were met.','两个必要条件不能混同。'],
['A technical achievement did not immediately produce a profit.','Engineering success and financial success did not necessarily coincide.','An impressive line must already be profitable.','A lack of profit proves the railway never operated.','Revenue and technical performance are the same thing.','工程成果与经济成效分开。'],
['The original design was proposed but a different arrangement was actually used.','The initial intention should not be treated as the implemented system.','Every proposed feature was installed unchanged.','The implemented arrangement proves no planning occurred.','A proposal always describes the final facts.','计划与实际采用有差别。']
],
match:{title:'From proposal to operation',text:'An {{0}} supported a connection through a {{1}} centre. The groups would {{2}} and {{3}}, but an {{4}} still raised concerns. They chose to {{5}} without assuming that support guaranteed success.',pairs:[['advocate','active supporter','倡导者。'],['congested','crowded with traffic','拥堵。'],['merge','combine into one','合并。'],['raise funding','obtain money for the project','筹资。'],['objector','person arguing against a proposal','异议者。'],['persist','continue despite difficulty','坚持。']],extras:['accept every design unchanged','receive guaranteed future profits','remove every possible construction limit']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "The route|selected to avoid extensive demolition|still required|careful construction|beneath|streets that remained important to the town.",
    "subject": "The route",
    "predicate": "still required",
    "skeleton": "The route still required careful construction.",
    "translation": "为避免大量拆除而选的路线，仍需在城镇重要街道下谨慎施工。",
    "why": "selected短语修饰route，still required主句完整谓语。"
  },
  {
    "kind": "backbone",
    "tokens": "Until a suitable means of supplying power was available,|a deeper line|could not operate|in the way|its supporters|intended.",
    "subject": "a deeper line",
    "predicate": "could not operate",
    "skeleton": "A deeper line could not operate until suitable power was available.",
    "translation": "在合适供电手段可用前，更深线路无法按支持者意图运行。",
    "why": "Until从句是条件界限，could not operate主句。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The class placed|a ventilation model|beside a route map, a carriage drawing and a timetable.|The map showed where the proposed connection would run, while the drawing displayed the space available to passengers.|The timetable described a planned service rather than conditions inside the tunnel.|By demonstrating the movement of air through an opening,|it|helped explain why an added passage might improve conditions without proving that every unwanted gas would disappear, so visitors could distinguish the intended function from a claim about complete effectiveness during operation.",
    "antecedent": "a ventilation model",
    "translation": "通风模型、路线图、车厢图、时刻表中，演示空气穿过开口的是通风模型；它说明功能不证明所有烟气清除。",
    "why": "movement of air定位通风模型。"
  },
  {
    "kind": "reference",
    "focus": "the latter",
    "tokens": "The historian distinguished|a plan approved in principle|from|the arrangement that engineers actually installed.|The early document described several features intended to improve travel, and later records showed changes made as practical difficulties emerged.|A visitor assumed that every sentence in the first plan described the railway on its opening day.|The historian explained that|the latter|had to be established from construction and operating evidence, because a proposal could show an intention without proving that the same equipment had ultimately been selected, built and used in service.",
    "antecedent": "the arrangement that engineers actually installed.",
    "translation": "原则获批计划与实际安装不同。后者需施工运行证据，提案只显意图不证设备已采用。",
    "why": "latter实际安排需实际资料。"
  },
  {
    "kind": "logic",
    "text": "The route reduced one source of congestion, but other traffic pressures continued to grow.",
    "q": "能推出什么？",
    "options": [
      "部分改善可以与更大范围问题持续并存。",
      "既然整体仍堵就没有任何改善。",
      "减少一处拥堵保证全城永久畅通。",
      "所有交通压力都来自同一条线路。"
    ],
    "answer": "部分改善可以与更大范围问题持续并存。",
    "translation": "缓解一种拥堵，其他压力仍增。",
    "why": "局部与总体不同层次。"
  },
  {
    "kind": "logic",
    "text": "The supporters persisted, although their first submission was rejected.",
    "q": "此句证明了什么？",
    "options": [
      "他们遇否决后继续努力。",
      "第一方案随后必定原样通过。",
      "他们从未修改任何内容。",
      "最后工程必定盈利。"
    ],
    "answer": "他们遇否决后继续努力。",
    "translation": "首提被拒仍坚持，未给最终保证。",
    "why": "态度和行动持续不预定结果。"
  }
],
evidence:{title:'A town connection in the planning archive',paragraphs:[
['A local archive displayed plans for a fictional town connection between several routes that ended outside a busy centre.','The display aimed|to separate the intended solution from what was eventually built,|using proposals alongside construction and operating records.','Visitors were encouraged to ask what each type of document could actually establish.'],
['Supporters argued that a link could improve travel and help residents reach work from different neighbourhoods.','One early submission was rejected, but this did not prevent a later group from developing another arrangement.','The archive treated|a decision about one particular plan|as narrower than a permanent judgement on every possible connection.'],
['The selected route followed existing streets where possible.','This was intended to reduce the amount of property that would need removal, although the project still involved substantial work.','The plan listed|buildings affected by each proposed alignment|so that a claimed saving could be checked rather than accepted from a slogan.'],
['Engineers examined how air and power would reach a space below the surface.','The ability to excavate did not by itself show that any available engine could work safely and reliably there.','The records distinguished|construction capability from operating requirements|because both mattered to a service that passengers would actually use.'],
['The line opened with some practical difficulties that later work attempted to address.','The final panel did not equate being built, being technically notable and earning enough income to cover costs.','It asked visitors to compare|engineering results with financial accounts|before describing the project as a success in every sense, rather than let one crowded opening day stand for its whole history.']
],questions:[
['What distinction guided the archive display?',0,1,'','意图方案和实际建成。'],['What happened after the early rejection?',1,1,'','后续小组仍发展新安排。'],['What was the scope of the negative decision?',1,2,'a decision about one particular plan','仅该方案，不是所有线路。'],['What allowed a claimed demolition saving to be checked?',2,2,'buildings affected by each proposed alignment','各线位影响楼宇清单。'],['What two requirements did the engineering records distinguish?',3,2,'construction capability from operating requirements','能挖与能运行不同。'],['What comparison was needed before judging all-round success?',4,2,'engineering results with financial accounts','工程和经济结果。']
]},
specials:[
{kind:'notes',title:'一词笔记填空',passage:{title:'Recording the work around a fictional tunnel model',paragraphs:[
'The demonstration team used a barrier to keep visitors outside the work area. A diagram showed where the model route passed beneath a surface board. Each removable section had a handle so it could be lifted without disturbing the parts beside it.',
'A gauge indicated pressure in one demonstration system. The operator used a signal before moving a part and entered each test in a journal. When a result differed from the plan, the note explained the change instead of silently treating the original drawing as an exact record of the finished model.'
]},rows:[['Visitors remained behind a ___.','barrier','围栏限制接近。'],['The route was explained in a ___.','diagram','示意图。'],['Each removable section had a ___.','handle','把手便于提起。'],['Pressure was shown by a ___.','gauge','压力表。'],['A ___ preceded movement of a part.','signal','先发信号。'],['Tests were entered in a ___.','journal','试验日志。']]},
{kind:'judgement',rows:[
['One proposal was rejected, but a later group obtained permission for a different arrangement.','Rejection of the first proposal did not end all work on a connection.','TRUE','后来继续另方案。','首拒后另方案获许。'],
['The design followed existing streets to reduce removal of buildings; it did not avoid all removal.','No building removal was required.','FALSE','明确非零。','选街下线减拆，不是免拆。'],
['The archive displayed a plan, construction notes and records of service after opening.','Every engineer who wrote a note was also a shareholder.','NOT GIVEN','未给作者股东身份。','有计划施工运营资料。'],
['The team recorded remaining smoke after adding a ventilation opening, while also noting improved airflow.','Improvement and an unresolved problem were both recorded.','TRUE','改善空气与残烟共存。','通风改善但仍有烟。'],
['The original equipment described in the first plan was replaced by a different arrangement before service began.','All equipment in the first plan was installed unchanged.','FALSE','明确替换。','开通前改设备安排。'],
['The line carried passengers and was described as technically notable, while financial records showed difficulty covering costs.','Passengers rated the new service more highly than every other route.','NOT GIVEN','客流技术财务不提供评价排名。','载客技术突出但成本难覆盖。']
]}
]});
