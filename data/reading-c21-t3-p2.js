RRReadPack({id:'c21-r-t3-p2',location:{book:21,test:3,part:2},title:'城市增长与公共交通',focus:'覆盖范围、系统容量和实际客流；规划与完成；通行方式、票务和利益相关方；信息判断与一词笔记。',
words:`
projection|根据数据作出的预测|A projection estimates what may happen if current patterns continue.|预测估计当前模式继续时可能发生什么。|The ___ is not a count of people already living there.|这项预测不是对目前已居住人口的统计。
anticipate|预期；预计|Planners anticipate more travel between the two districts.|规划者预计两区之间出行会增加。|We ___ a busier term, but the bookings are not yet complete.|我们预计学期会更忙，但预约尚未结束。
swell|增多；膨胀|The town's daytime population swells when workers arrive.|工人到来时，城镇白天人口增加。|Visitor numbers ___ during the summer holiday.|暑假期间游客数量增加。
informal settlement|未经正式规划的聚居区|An informal settlement may grow before services are fully planned.|非正式聚居区可能先发展起来，服务规划随后才跟进。|The survey included an ___ beside the old road.|调查包括旧路旁一处未经正式规划的聚居区。
intersection|道路交叉口|An intersection is where roads meet.|交叉口是道路相交的地方。|The queue began at the busy ___.|车队从繁忙交叉口开始排起。
suburban|市郊的|A suburban service links outer neighbourhoods with the centre.|市郊交通把外围社区与中心连接起来。|The plan adds a ___ route rather than another central loop.|规划增加市郊路线，而非另一条中心环线。
arterial road|交通干道|An arterial road carries traffic between major parts of a city.|交通干道连接城市主要区域，承载车流。|The new path crosses an ___ used by heavy traffic.|新步道穿过一条车流量大的交通干道。
legacy|过去留下的影响|The road pattern is a legacy of earlier planning.|道路格局是早期规划留下的影响。|The city must work with the ___ of decisions made long ago.|城市必须应对很久以前决策留下的影响。
periphery|外围；边缘地带|The periphery is the outer part of an area.|外围是一个区域的外侧部分。|New homes appeared on the ___ rather than in the old centre.|新住房出现在外围，而不是旧中心。
strategy|有步骤的总体计划|A strategy links actions to a wider goal.|总体策略把行动与更大的目标联系起来。|The project needs a transport ___, not just one isolated road.|项目需要交通总体策略，不只是一条孤立道路。
pin hopes on|寄希望于|Residents pin hopes on the new bridge to shorten their journeys.|居民寄希望于新桥缩短路程。|The council may ___ a project that has not yet been tested.|市政部门可能寄希望于一个尚未测试的项目。
achievable|可以实现的|An achievable plan fits the money and time available.|可实现的计划符合可用资金与时间。|A smaller change may be more ___ than a complete rebuild.|小改动可能比全部重建更可实现。
boarding|上车；登乘|Boarding begins after passengers have checked their tickets.|乘客检查车票后开始登车。|Please keep the door clear during ___.|登车时请不要堵住车门。
step-free|无需走台阶的|A step-free entrance lets people enter without climbing stairs.|无台阶入口让人不用爬楼梯就能进入。|The route is ___ from the street to the platform.|从街道到站台的路线无需走台阶。
accessible|方便不同人群使用的|An accessible service can be used by people with different needs.|无障碍便利服务可由有不同需要的人使用。|A clear announcement makes the system more ___ to some users.|清楚播报让部分用户更方便使用系统。
capacity|可容纳或承载的最大量|Capacity is how much a service can hold or carry.|容量是服务能容纳或承载多少。|Actual use may remain below the line's designed ___.|实际使用量可能低于线路设计运力。
depot|车辆停放、维修的场站|A depot is a base where vehicles are kept and serviced.|场站是车辆停放维修的基地。|Several buses stayed at the ___ for repairs.|几辆公交留在场站维修。
mechanical|机械装置方面的|A mechanical fault affects the physical working parts.|机械故障影响实际运转部件。|The failure was ___ rather than an error in the timetable.|故障来自机械装置，而不是时刻表错误。
considerable|相当大的；数量可观的|A considerable delay can affect many later journeys.|相当大的延误可能影响后续许多行程。|There was a ___ gap between the promised and actual service.|承诺服务与实际服务之间有相当大的差距。
imminently|即将；很快就会|Work due to start imminently is expected to begin very soon.|计划即将开始的工程预计很快开工。|The report says the trial will begin ___, not that it has finished.|报告说试验即将开始，不是已经结束。
preliminary|初步的|A preliminary design is an early version that may change.|初步设计是可能改变的早期版本。|The map is ___ and should not be treated as the final route.|地图是初步的，不能当作最终路线。
stakeholder|利益相关方|A stakeholder is someone affected by or involved in a decision.|利益相关方是受决定影响或参与决定的人。|Each ___ was invited to comment before the route was fixed.|路线确定前，每位利益相关方都获邀提意见。
transformational|带来重大改变的|A transformational change alters how a service works in a major way.|变革性改变会大幅改变服务运作方式。|The improvement could be ___ for people with few other travel choices.|对出行选择很少的人，这项改善可能带来重大改变。
reliance on|对……的依赖|Reliance on one route creates problems when it closes.|依赖一条路线，在路线关闭时会出问题。|Better connections could reduce ___ private cars.|更好交通连接可能减少对私家车的依赖。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['intersection','suburban','boarding','accessible','considerable'],
contexts:[
{id:'growth',title:'Planning beyond the old centre',words:['projection','anticipate','swell','informal settlement','intersection','suburban','arterial road','legacy','periphery','strategy','pin hopes on','reliance on'],paragraphs:[
 'At a town meeting, planners showed a population {{projection}}. They explained what they {{anticipate}} if current patterns continue. The figure was not a count of people already there. The town could {{swell}}, but the pace would depend on jobs, housing and other changes.',
 'Much growth was on the {{periphery}}. One {{informal settlement}} had formed beside an {{arterial road}}, while suburban homes stretched farther from the centre. A crowded intersection showed the limits of the old layout. That layout was a {{legacy}} of a much smaller town, not necessarily a suitable plan for today.',
 'Residents did not want to {{pin hopes on}} one bridge without considering the whole journey. They asked for a {{strategy}} that linked walking, buses and local services. A useful network might reduce {{reliance on}} cars rather than simply make it easier for more vehicles to enter the same narrow streets.'
]},
{id:'service',title:'From a drawing to a working service',words:['achievable','boarding','step-free','accessible','capacity','depot','mechanical','considerable','imminently','preliminary','stakeholder','transformational'],paragraphs:[
 'The first plan was {{preliminary}}, so residents could still suggest changes. Each {{stakeholder}} received a map and a chance to comment. Engineers compared the cost of different options and chose one they considered {{achievable}} with the available money. The report said work would begin {{imminently}}; that did not mean passengers could already use it.',
 'The design included a {{step-free}} path so the route would be accessible without stairs. Staff tested boarding arrangements and checked whether ticket queues could block the entrance. The buses needed space at a {{depot}} for servicing. A {{mechanical}} failure there could reduce the number available even if the route itself remained open.',
 'The service had a planned {{capacity}}, but actual passenger numbers might be lower at first. A considerable difference would need explaining rather than hiding. For residents with few alternatives, the new link could be {{transformational}}, yet that claim would be judged through ordinary use, not the opening ceremony alone.'
]}],
vocab:[
 ['The report gives a projection, not a record of current residents.\nprojection 是？','依据现有数据作出的未来预测','已经普查得到的当前总数','对过去事件的逐项记录','不允许更改的最终目标','预测与当前实测不同。'],
 ['The district’s population swells during the working day.\nswells 是？','增加','人数完全不变','均匀搬离','全部更换身份','白天增多不一定是长期居住人口增长。'],
 ['The road layout is a legacy of an earlier plan.\nlegacy 是？','早期安排留下的影响','目前最优的唯一方案','未来尚未讨论的可能','最近发生的施工事故','历史遗留不代表现阶段最佳。'],
 ['Most expansion occurred on the periphery.\nperiphery 是？','外围地带','最核心商业区','地下线路','所有规划禁建区','空间外围与用途限制无必然关系。'],
 ['An informal settlement grew before services were agreed.\ninformal settlement 是？','未按正式规划形成的聚居区','专供短期游客的旅馆区','已完全撤空的旧街区','所有居民都有相同收入的社区','未正式规划不直接说明住户收入一致。'],
 ['The council pins its hopes on a cheaper option.\npins its hopes on 是？','寄希望于','已经证明完全成功','规定只能由它经营','因失败而放弃','希望不是结果。'],
 ['The alternative was cheaper and more achievable.\nachievable 是？','按条件更可能实现','已经全部完成','对每人都最便宜','不再需要维护','可实现不等于已完成或无维护。'],
 ['Ticket checks took place before boarding.\nboarding 是？','登上车辆','买票之前','旅程结束后的检查','列车维修','before限定先验票后登乘。'],
 ['The path is step-free but still quite long.\nstep-free 是？','不用走台阶','完全不用移动','长度最短','不需要任何指示','无台阶不保证短。'],
 ['The line carries fewer people than its designed capacity.\ncapacity 是？','设计可承载量','已经搭乘的总人数','所有票价之和','线路的实际盈利','设计上限与实际使用分开。'],
 ['Buses remained at the depot after a fault.\ndepot 是？','车辆停放维修基地','每一处路边站牌','所有乘客共同目的地','单独的交通管理法规','depot不同于普通乘降站。'],
 ['A mechanical problem stopped the gate from opening.\nmechanical 是？','装置运转部件方面的','由于文字翻译造成的','必定有人恶意破坏的','只影响票价统计的','机械故障不一定恶意。'],
 ['Construction is due to start imminently.\nimminently 是？','预计很快','实际上已经结束','多年后才能讨论','仅在无限远未来','due to start是预期开工，不能变已完工。'],
 ['The preliminary design was shared for comments.\npreliminary 是？','初步仍可调整的','已经最终批准不可变的','专门隐瞒给公众的','只描述过去且不涉未来的','征求意见说明初步状态。'],
 ['Local operators were included as stakeholders.\nstakeholders 是？','受影响或参与的相关方','只负责购买股票的人','永远没有利益关系的旁观者','只包括中央政府的官员','stakeholder不等于shareholder，也不限官员。'],
 ['The service could be transformational for isolated neighbourhoods.\ntransformational 是？','可能带来重大改变','已经保证所有问题消失','只改了标志颜色','每个地区效果必定一样','could保留可能，重大改变不等于万能。']
],
rewrites:[
 ['The route was planned to serve outer districts.','Serving peripheral neighbourhoods was the intention, not necessarily an accomplished result.','Every outer neighbourhood was already connected.','The route was designed only for the city centre.','Planning proved that construction was complete.','planned是计划，不自动为结果。'],
 ['Actual ridership remained below designed capacity.','The service was carrying fewer passengers than it had been built to accommodate.','The system carried more than its maximum.','Designed capacity was calculated from actual fares alone.','Every available seat was always occupied.','运力与客流分开。'],
 ['The journey became shorter, although waiting remained a problem.','Travel time improved without removing all difficulties at the stop.','All waiting ended when journey time fell.','The route took longer after the change.','Waiting was never measured and cannot be mentioned.','让步保留残余问题。'],
 ['The project aimed to involve existing operators rather than replace them all.','Participation by current providers was intended instead of their wholesale removal.','Every operator had already been replaced.','Only foreign providers were permitted to participate.','Current operators were never consulted about anything.','目标是纳入而不是全替代。'],
 ['A step-free route does not by itself ensure a convenient journey.','Removing stairs addresses one obstacle but does not guarantee overall ease of travel.','Any route without stairs is automatically convenient.','Stairs are irrelevant to all travellers.','A long step-free path must be inaccessible.','一项必要改善不是全部体验的充分保证。'],
 ['The forecast depends on present trends continuing.','The estimate is conditional on the continuation of current patterns.','The forecast is an unconditional record of future facts.','Current trends have already ended.','Any change in trends would leave the estimate equally certain.','条件预测不能写成无条件确定。']
],
match:{title:'Understanding a project update',text:'The update described a {{0}} design, not a final route. Planners said the scheme was {{1}} within their budget and expected work to begin {{2}}. They invited each {{3}} to comment. A new service might be {{4}}, but its planned {{5}} would not be the same as the number of passengers using it on the first day.',pairs:[['preliminary','initial','初步。'],['achievable','possible to carry out','可按条件实施。'],['imminently','very soon','即将开始。'],['stakeholder','affected or involved party','利益相关方。'],['transformational','capable of major change','可能带来重大改变。'],['capacity','maximum designed carrying ability','设计承载能力。']],extras:['already completed','the current number of users','guaranteed to remove every difficulty']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "One stop|was relocated|after|residents|described|a dangerous crossing,|even though|the new position|made|some users’ walks|slightly longer.",
    "subject": "One stop",
    "predicate": "was relocated",
    "skeleton": "One stop was relocated.",
    "translation": "居民描述危险穿越点后，一个站点被迁移，即使新位置使部分用户多走一点。",
    "why": "主句stop was relocated；after和even though分别说明原因时间背景和代价。"
  },
  {
    "kind": "backbone",
    "tokens": "What the map describes as a connection|may remain|difficult in practice|if|a long approach path|or|an unreliable service|prevents|people|from completing the journey.",
    "subject": "What the map describes as a connection",
    "predicate": "may remain",
    "skeleton": "What the map describes as a connection may remain difficult in practice.",
    "translation": "若长接近路段或不可靠服务妨碍完成行程，地图所称的连接实际仍可能困难。",
    "why": "what从句整体作主语；may remain为主句，prevents在if条件内。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The station team tested|a portable ticket reader|before the morning service.|A map board stood beside|a new shelter,|and staff placed|a temporary barrier|near the gate to keep the queue away from passing bicycles.|The shelter protected passengers from rain and the barrier helped organise movement.|Although all the additions changed the entrance,|it|checked whether each ticket had already been used before allowing the passenger through, replacing a check that staff had previously performed by hand.",
    "antecedent": "a portable ticket reader",
    "translation": "团队测试便携验票器，旁边有地图牌、新候车棚和临时护栏。棚遮雨、栏杆组织队列，能检查票是否用过并放行的是验票器。",
    "why": "checked each ticket对应reader，不是较近的barrier。"
  },
  {
    "kind": "reference",
    "focus": "the latter",
    "tokens": "The consultation compared|a short approach with several steps|and|a longer route with a continuous gentle slope.|Some residents preferred the shorter walk, while people travelling with wheeled equipment described the difficulty of the steps.|A separate proposal concerned moving a shelter, but its location had not yet been agreed.|The access adviser explained that distance and ease of entry were different measures.|Although it required more walking,|the latter|allowed travellers to reach the platform without using stairs, so the review retained both the extra distance and the access benefit in its assessment.",
    "antecedent": "a longer route with a continuous gentle slope.",
    "translation": "征询比较短而有台阶的接近路与较长连续缓坡，另提候车棚。the latter指这两个路线中的后者，即较长缓坡。",
    "why": "latter按明确并列的后项定位，不是最近出现的候车棚；without stairs再次核实。"
  },
  {
    "kind": "logic",
    "text": "The report predicts faster travel if enough vehicles are available; it does not say the infrastructure alone guarantees that result.",
    "q": "提速预测附带什么限制？",
    "options": [
      "需要足够车辆，只有基础设施还不保证。",
      "道路建好便必定达成。",
      "所有车辆不足都与结果无关。",
      "报告否认任何提速可能。"
    ],
    "answer": "需要足够车辆，只有基础设施还不保证。",
    "translation": "报告在车辆充足的条件下预测提速，基础设施本身并非充分保证。",
    "why": "if条件不可省略。"
  },
  {
    "kind": "logic",
    "text": "Residents may benefit from a shorter ride while still facing a longer walk to the stop.",
    "q": "这句如何评价出行？",
    "options": [
      "某一环节改善与另一环节不便可以同时存在。",
      "乘车短就证明全程一定短。",
      "步行长就证明乘车没改善。",
      "居民只能受益或受损二选一。"
    ],
    "answer": "某一环节改善与另一环节不便可以同时存在。",
    "translation": "居民乘车时间可缩短，同时仍可能步行更久才能到站。",
    "why": "while连接可共存的不同环节结果。"
  }
],
evidence:{
  "title": "A neighbourhood tests a new bus link",
  "paragraphs": [
    [
      "A council tested a short bus link between a housing area and a rail station.",
      "The aim was|to connect residents with the existing rail service,|rather than duplicate the whole train route.",
      "The trial timetable|was published before vehicles began carrying passengers."
    ],
    [
      "The bus used ordinary roads, so its travel time varied with congestion.",
      "Several riders saved time on the ride but still walked a long way from the last stop to their workplaces.",
      "The survey therefore measured door-to-door journeys instead of recording bus time alone."
    ],
    [
      "One stop was moved after residents described a difficult crossing.",
      "The new position was chosen|to avoid the busy junction,|even though this meant a slightly longer walk for some users.",
      "The council recorded the trade-off rather than saying every passenger benefited equally."
    ],
    [
      "A vehicle fault reduced the number of departures on one day.",
      "The report separated|service actually operated|from the published timetable,|so that a planned departure was not counted as a completed trip.",
      "Drivers noted the reason for each cancellation while staff kept passengers informed."
    ],
    [
      "Residents could comment online or leave a paper form at the library.",
      "The council retained both routes|because not every resident could use the online form,|rather than assuming digital access was universal.",
      "The next review would compare ordinary weeks with the unusually busy holiday period."
    ]
  ],
  "questions": [
    [
      "What connection was the trial intended to provide?",
      0,
      1,
      "",
      "连接住宅与现有铁路，不是复制全程。"
    ],
    [
      "Why did the survey measure the entire journey?",
      1,
      2,
      "",
      "单段乘车时间不能代表门到门体验。"
    ],
    [
      "What was made available before passenger operation began?",
      0,
      2,
      "The trial timetable",
      "时刻表先公布，客运后来开始；计划文件与运营时点分开。"
    ],
    [
      "What safety-related feature shaped the new stop location?",
      2,
      1,
      "to avoid the busy junction,",
      "避开繁忙路口，不是保证所有人更近。"
    ],
    [
      "What was distinguished from the published plan?",
      3,
      1,
      "service actually operated",
      "实际运行与时刻表分开。"
    ],
    [
      "Why was paper feedback retained?",
      4,
      1,
      "because not every resident could use the online form,",
      "数字使用能力不是普遍，保留另一渠道。"
    ]
  ]
},
specials:[
 {kind:'judgement',rows:[
 ['The first phase connected two outer districts. A central extension was still at the design stage when the trial began.','The central extension was operating from the first day of the trial.','FALSE','仍在设计，与已运行冲突。','试点第一阶段连两个外围区，中心延伸段仍在设计。'],
 ['Tickets were checked at the entrance before people joined the platform queue.','Passengers passed ticket control before waiting on the platform.','TRUE','before顺序一致。','乘客先在入口验票，再到站台排队。'],
 ['The new shelter had seating and a clear route around it. A notice showed the hours when the stop was served.','Passengers rated the seating as more comfortable than that at the rail station.','NOT GIVEN','设施描述不提供舒适性比较。','新候车棚有座椅、绕行通道和服务时间牌。'],
 ['The line was designed for more passengers than it carried during the first month.','Actual use initially exceeded the line’s designed carrying ability.','FALSE','designed for more说明实际低于设计。','线路设计承载量高于首月实际客流。'],
 ['Local operators took part in planning the interchange and later supplied staff for it.','Existing providers were involved rather than entirely excluded.','TRUE','参与规划和派员直接支持。','本地运营者参与换乘点规划并后来提供员工。'],
 ['The report records cancellations and additional departures in an appendix. The main text discusses how accurately the timetable reflected ordinary operation.','The appendix was written by the longest-serving driver.','NOT GIVEN','未说明作者或工龄。','附录记取消与加班次，正文讨论时刻表与实际符合度。']
 ]},
 {kind:'notes',title:'一词笔记填空',passage:{title:'Preparing the neighbourhood shuttle',paragraphs:['The trial shuttle used a loop so that vehicles could return without reversing beside the stop. A sign at the entrance showed where the queue should begin. Staff checked the pavement and removed a post that narrowed the path. They kept a bench outside the main flow of passengers.', 'Each driver carried a radio to report delays. At the end of a shift, the log went to the coordinator, who compared it with the published timetable. A spare key remained in a locked cabinet at the office. Residents were invited to send comments using a postcard handed out during the first week.']},rows:[
 ['Vehicles returned using a ___ rather than reversing at the stop.','loop','环线回转，不倒车。'],['The beginning of the queue was marked by a ___.','sign','sign指示起点。'],['A ___ narrowing the path was removed.','post','移除柱子以拓宽通道。'],['Drivers used a ___ to report delays.','radio','无线电报告延误。'],['A spare key was kept in a locked ___.','cabinet','钥匙存锁柜。'],['Residents could give written feedback on a ___.','postcard','明信片收意见，不是驾驶日志。']
 ]}
]});
