RRReadPack({id:'c21-r-t2-p2',location:{book:21,test:2,part:2},title:'古代社会、贸易与考古推断',focus:'遗存与推断的对应；时间先后和社会分层；段落匹配、双选和一词摘要。',
words:`
flourish|繁荣；兴盛|The small market began to flourish after the bridge opened.|桥开放后，小市场开始兴盛。|The craft continued to ___ while nearby industries declined.|附近行业衰退时，这门手艺仍继续兴盛。
plateau|高原；平坦高地|A plateau is a broad area of high, fairly flat land.|高原是面积较大、较平坦的高地。|The survey compared the ___ with the lower valley.|调查比较了高原与较低的谷地。
inaccessible|难以到达的|The steep path made the store almost inaccessible.|陡峭小路使仓库几乎无法到达。|The island became ___ when the only landing place was damaged.|唯一登岸处损坏后，这个岛变得难以到达。
surplus|剩余；多余部分|The family sold a surplus after keeping enough food for itself.|家庭留够自用食物后出售剩余部分。|A ___ could be exchanged for goods the village did not make.|剩余产品可以换取村子不生产的物品。
indicate|表明；作为迹象|Dark marks may indicate where a fire once burned.|深色痕迹可能表明以前生过火的位置。|The objects ___ regular contact, although they do not explain every journey.|这些物品表明有定期联系，虽不能解释每次行程。
domesticated|经过驯化的|Domesticated animals are kept and bred by people over generations.|驯化动物经过多代由人饲养繁育。|The study distinguishes ___ animals from wild relatives.|研究区分驯化动物及其野生近亲。
prosperity|繁荣；富足|New jobs brought prosperity to part of the town.|新工作让城镇的部分区域富足起来。|Large houses alone do not prove shared ___ for all residents.|大房子本身不能证明所有居民共同富足。
dwell|居住|Families once dwelt in the rooms above the workshop.|以前家庭住在工坊楼上的房间。|Several people could ___ in one large building.|好几个人可以居住在一栋大建筑中。
enclosure|围起来的区域|An enclosure is a space surrounded by a wall or fence.|围区是被墙或围栏围起来的空间。|A narrow entrance led into the stone ___.|窄入口通向石墙围区。
predate|早于……存在|The oldest wall may predate the road beside it.|最老的墙可能比旁边道路出现得早。|These foundations ___ the later rooms built above them.|这些地基早于上面后来建的房间。
outskirts|城镇外围|The workshop stood on the outskirts, away from the centre.|工坊位于城镇外围，远离中心。|The team surveyed the ___ as well as the central streets.|团队既勘察外围，也勘察中心街道。
accumulate|逐渐积累|Broken tools can accumulate where repairs take place.|维修处可能逐渐积累破损工具。|The deposit took years to ___ rather than forming in one day.|这层堆积用了多年积累，不是一天形成。
interregional|跨地区的|Interregional trade links different parts of a wider area.|跨地区贸易连接较大范围内的不同地区。|The route supported ___ exchange, not merely sales within one village.|这条路线支持跨地区交换，不只是村内买卖。
lucrative|获利丰厚的|A lucrative trade earns a good profit.|获利丰厚的贸易能赚取较好利润。|The business became ___ after transport costs fell.|运输成本下降后，这项生意变得获利丰厚。
authority|权威；统治权|The authority to collect a fee belonged to the council.|收取费用的权力属于议事会。|The report asks who held political ___ in the settlement.|报告追问聚落里谁掌握政治权力。
monopolise|垄断；独占|One firm tried to monopolise the supply by excluding other sellers.|一家公司试图排除其他卖家，垄断供应。|A ruler might seek to ___ a valuable route rather than share control.|统治者可能寻求独占重要路线，而不是分享控制权。
artefact|人工制品；考古器物|An artefact is an object made or changed by people.|人工制品是人制作或改动过的物体。|Each ___ was recorded before being moved from the trench.|每件器物移出探沟前都作了记录。
stylised|经过简化或夸张表现的|A stylised bird may not look like any exact species.|风格化的鸟未必像某一种真实鸟。|The ___ figure uses simple shapes rather than realistic detail.|风格化形象使用简单形状，而非写实细节。
elongated|拉长的；细长的|An elongated shape is unusually long for its width.|细长形状相对宽度而言特别长。|The vessel has an ___ neck above a round body.|这件容器在圆形腹部上方有细长颈部。
intrinsic|本身具有的|Intrinsic value belongs to something itself, not only to its use.|内在价值属于事物本身，而不只取决于用途。|The writer distinguishes ___ worth from the price paid in trade.|作者区分本身价值与交易价格。
decline|衰退；下降|The town entered a period of decline after the port closed.|港口关闭后，城镇进入衰退期。|A fall in building activity may signal ___, but other explanations exist.|建造活动减少可能提示衰退，但也有其他解释。
resource|资源|Fresh water is an important resource for a settlement.|淡水是聚落的重要资源。|The community depended on one ___ that became harder to obtain.|社区依赖的一项资源后来越来越难取得。
drought|干旱；长期少雨|A drought is a long period with too little rain.|干旱是长期雨量过少。|The crop suffered during the ___ despite careful storage.|尽管储存细致，作物仍受干旱影响。
cultivation|耕作；种植|Cultivation leaves different traces from an untouched field.|耕作留下的痕迹与未动过的田地不同。|Marks in the soil suggest ___ before the houses were built.|土壤痕迹表明房屋建造前可能已有人耕作。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['flourish','surplus','dwell','outskirts','decline'],
contexts:[
{id:'trade',title:'Questions about an old market town',words:['flourish','surplus','prosperity','accumulate','interregional','lucrative','authority','monopolise','decline','resource','drought','cultivation'],paragraphs:[
 'Our class imagined how an old market town might flourish. Nearby fields produced a surplus, and traders brought goods that could not be made locally. This {{interregional}} exchange might be {{lucrative}}, but a high income for traders did not prove equal {{prosperity}} for every family.',
 'We considered who held {{authority}} over the market. A leader could try to {{monopolise}} the entrance and collect fees. Broken goods might {{accumulate}} nearby, leaving clues for later researchers. Such a deposit would need careful study: a large pile could form slowly, not necessarily during one busy festival.',
 'The town also depended on a reliable water {{resource}}. A long {{drought}} could affect {{cultivation}} and make trade more difficult. Yet a decline in one activity would not automatically mean that everyone left. We wanted a history that explained different possibilities rather than treating one clue as the whole story.'
]},
{id:'objects',title:'A field team takes notes',words:['plateau','inaccessible','indicate','domesticated','dwell','enclosure','predate','outskirts','artefact','stylised','elongated','intrinsic'],paragraphs:[
 'A team surveyed a {{plateau}} above a river. Part of the area was {{inaccessible}} after rain, so they began on safer ground at the outskirts. An old {{enclosure}} contained several building remains. The team did not assume people used all the rooms to dwell in; some might have been stores.',
 'A foundation appeared to {{predate}} a later wall. Inside it, a small {{artefact}} had a {{stylised}} animal shape, with an {{elongated}} body. These features could {{indicate}} a shared design tradition, but they could not identify the maker on their own.',
 'The researchers compared remains of {{domesticated}} and wild animals from other parts of the site. They also discussed {{intrinsic}} value: perhaps an object mattered to its owner even when it was not being exchanged. A sale price and a personal meaning would not necessarily tell the same story.'
]}],
vocab:[
 ['The finding may indicate trade without identifying every trader.\nindicate 是？','提供迹象','最终证明所有细节','否定其他可能','直接记录了每次交易','may与without限定推断强度。'],
 ['The settlement flourished for a period before trade moved elsewhere.\nflourished 是？','发展兴盛','一直保持不变','首次被发现','完全依赖农业','兴盛不说明发现时间或单一生计。'],
 ['These remains predate the street that cuts across them.\npredate 是？','早于街道存在','与街道同年建造','由街道施工造成','在街道废弃后出现','pre-表示在前。'],
 ['An inaccessible store could be seen but not reached safely.\ninaccessible 是？','难以到达','不能被看见','不允许任何研究','已经完全毁坏','可见但难到达，不能混同不可见。'],
 ['A surplus was exchanged after local needs had been met.\nsurplus 是？','满足自身需要后的剩余','当地全部产出','从外地借来的物品','专门缴纳的税款','after needs met说明余量，不是总量或税。'],
 ['The bones were consistent with domesticated animals.\ndomesticated 是？','经过人类长期驯化的','在房屋里偶然发现的','只在当地存在的','一定用于祭祀的','驯化不等于发现位置，也不能确定用途。'],
 ['The author questions whether prosperity reached the outer districts.\nprosperity 是？','富足程度','行政控制范围','人口密度','住房年代','经济富足与权力、人口及年代不同。'],
 ['Broken pieces accumulated gradually beside the workshop.\naccumulated 是？','逐渐堆积','瞬间被运走','被同时制造','按价格分类','gradually强调形成过程。'],
 ['The route supported interregional exchange rather than local sales alone.\ninterregional 是？','跨地区的','只发生在村内的','必定跨越海洋的','只由国王经营的','跨地区不一定出海或受王室独家经营。'],
 ['The trade was lucrative for merchants but expensive for buyers.\nlucrative 是？','利润丰厚','售价人人可承受','运输风险很低','对全社会都有益','利润属于商人，不能推买家收益。'],
 ['The ruler sought to monopolise access to the route.\nmonopolise 是？','独占控制','放开竞争','只记录通行人数','暂时借用','seek to是意图独占，非已成功。'],
 ['The vessel’s elongated neck contrasted with its broad base.\nelongated 是？','细长的','宽而扁平的','完全中空的','由多个部件拼成的','与broad base对比的是长宽比例。'],
 ['The animal image was stylised rather than anatomically exact.\nstylised 是？','经过简化或夸张表现','严格按真实结构复制','尚未完成任何加工','只有某一用途','rather than排除写实精确。'],
 ['The ornament may have had intrinsic value apart from its exchange price.\nintrinsic 是？','本身具有的','只在出售时产生的','由运输费用决定的','所有人认可的','apart from price区分本身价值与交易价格。'],
 ['A drought affected fields across the region.\ndrought 是？','长期缺雨','一次短暂洪水','土壤被开挖','人类主动停耕','缺雨属于气候条件，不是停耕行为本身。'],
 ['The new excavation examined the enclosure before the rooms outside it.\nenclosure 是？','被墙或围栏围起的区域','建筑内部所有房间','向外延伸的道路','尚未使用的开放田地','围区可包含房间，但不等于全部室内空间。']
],
rewrites:[
 ['The objects suggest contact, but their precise route is unknown.','There is evidence of exchange without a confirmed journey for the objects.','The complete route of every object has been established.','The objects show there was no contact.','The unknown route proves the objects were locally made.','suggest支持联系，unknown保留路径未知。'],
 ['A large residence may indicate status rather than the wealth of everyone nearby.','One substantial home can suggest an owner’s position without showing general prosperity.','Every household had the same wealth as the large residence’s owner.','No large house could be associated with status.','The building proves that all residents were rulers.','单个居所证据不能扩展到全体。'],
 ['The wall was built after the floor had gone out of use.','The floor ceased to be used before construction of the wall.','The wall and floor were first used together.','The floor was laid after the wall was abandoned.','The wall remained unused until the floor was replaced.','before/after改写保留顺序。'],
 ['The figures were probably ceremonial, although their exact purpose remains uncertain.','A ritual use is considered likely, but not securely established in detail.','Every figure has a proven and identical ritual purpose.','No figure could have been used in a ceremony.','The figures were certainly ordinary tools.','probably不等于certainly，uncertain也不是排除可能。'],
 ['Trade may have strengthened authority rather than created it from nothing.','Exchange could have reinforced existing power.','Authority did not exist before the first trade.','Trade removed political control entirely.','The account proves trade had no political effect.','strengthen可增强已有权力，不等于首次产生。'],
 ['The decline coincided with drought, but several causes are proposed.','Drought occurred around the same time, without being treated as the sole established cause.','Drought was proved to be the only cause.','Drought began long after the decline ended.','Several causes were all ruled out.','coincide只确定同期，不能单因果。']
],
match:{title:'Cataloguing an unfamiliar object',text:'An {{0}} was found within a stone {{1}}. Its {{2}} shape did not reproduce an animal exactly. The narrow neck was {{3}}, unlike the round lower body. Researchers asked whether it had {{4}} value to its owner. The find might {{5}} contact with other makers, but they did not treat one design as proof of a complete trade route.',pairs:[['artefact','human-made object','人为制成物。'],['enclosure','bounded space','被界限围起来的空间。'],['stylised','simplified or deliberately shaped','风格化不保证写实。'],['elongated','long in relation to its width','细长是相对宽度较长。'],['intrinsic','belonging to the thing itself','本身价值与交换价格不同。'],['indicate','provide a sign of','提供迹象而不是证明全部细节。']],extras:['a precise natural copy','guarantee a single explanation','an open route between regions']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "The dated deposit,|which|lay|beneath|the later partition,|places|the first use of the room|earlier than|the loose surface objects|had initially suggested.",
    "subject": "The dated deposit,",
    "predicate": "places",
    "skeleton": "The dated deposit places the first use of the room earlier.",
    "translation": "定年堆积位于后隔墙之下，把房间首次使用时间推到松散表面物最初提示的年代之前。",
    "why": "插入which从句说明位置；主句动作places给出年代关系。"
  },
  {
    "kind": "backbone",
    "tokens": "No single ornament|can establish|the wealth of every resident|in|a settlement|whose rooms|may have served|different purposes|at different times.",
    "subject": "No single ornament",
    "predicate": "can establish",
    "skeleton": "No single ornament can establish the wealth of every resident.",
    "translation": "没有单件装饰品能确定一个聚落每位居民的财富；其房间可能不同时期用途不同。",
    "why": "否定在主语No single ornament内，谓语can establish；不可忽略No。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The excavation team uncovered|a narrow channel|running beside the workshop wall.|A broken vessel lay near|a stone platform,|while several pieces of tile had fallen from|the roof|into the space between them.|An assistant photographed the vessel and measured the height of the platform before moving any loose material.|Although the platform could support a heavy container and the tiles explained part of the collapse,|it|carried liquid away from the work area towards an opening outside the building.",
    "antecedent": "a narrow channel",
    "translation": "团队发现工坊墙边窄沟，旁边有碎容器、石台和落瓦。助手先记录再移动材料。能把液体从工作区导向建筑外开口的是窄沟。",
    "why": "carried liquid away对应沟渠功能；石台与瓦片不能承担这个动作。"
  },
  {
    "kind": "reference",
    "focus": "this revision",
    "tokens": "The first report placed the workshop before the market, based on a loose object found nearby.|Later, the team proposed|dating the workshop from material sealed beneath its floor.|One colleague suggested changing the map colours, while another wanted a wider trench.|The map was left unchanged and permission for more digging was delayed.|The report did adopt|an age estimate based on the sealed floor deposit.|When the sequence of buildings was discussed,|this revision|was said to rest on a firmer relationship between the dated material and the building itself.",
    "antecedent": "an age estimate based on the sealed floor deposit.",
    "accept": [
      "dating the workshop from material sealed beneath its floor."
    ],
    "translation": "最初按附近松散物品判断工坊早于市场。后来改为依据地板下封闭堆积定年；改地图和扩大探沟未实行。此修正指采用封闭地层的年代估计。",
    "why": "修正针对定年依据；两个同义表达均指这一改变。"
  },
  {
    "kind": "logic",
    "text": "The discovery of costly objects in one room is compatible with unequal status; it does not establish that every other resident was poor.",
    "q": "可以得出哪项？",
    "options": [
      "发现可支持地位不平等的可能，但不能证明其他人都贫穷。",
      "所有住在其他房间的人都贫穷。",
      "所有居民地位相同。",
      "昂贵物品不可能与地位相关。"
    ],
    "answer": "发现可支持地位不平等的可能，但不能证明其他人都贫穷。",
    "translation": "一间房发现贵重物品与地位不等相容，但不能证明其他每位居民都贫穷。",
    "why": "compatible与establish区分证据强度，也防止every范围扩大。"
  },
  {
    "kind": "logic",
    "text": "The author offers resource pressure as one possible contributor to decline, not as an explanation that excludes changes in trade.",
    "q": "资源压力与贸易变化是什么关系？",
    "options": [
      "资源压力是唯一已证实原因。",
      "贸易变化已被证明无关。",
      "资源压力是一种可能因素，贸易变化仍可能有关。",
      "作者认为两者都绝不可能。"
    ],
    "answer": "资源压力是一种可能因素，贸易变化仍可能有关。",
    "translation": "作者把资源压力作为衰退的可能因素之一，不排除贸易变化。",
    "why": "one possible contributor不是排他的单一原因。"
  }
],
evidence:{
  "title": "Interpreting a riverside workshop",
  "paragraphs": [
    [
      "A field team studied the foundations of a small riverside workshop, separate from the better-known market nearby.",
      "They began with|the floor deposits|because loose objects from the surface could have arrived long after the building was used.",
      "The aim was to relate each find to a particular stage of the structure."
    ],
    [
      "The earliest room had a shallow channel and a worn stone bench.",
      "The team proposed a washing activity, but found no evidence that would identify the material being washed.",
      "A later partition cut across the channel, showing that the use of the room changed rather than continuing unchanged."
    ],
    [
      "Objects from outside the district appeared in a deposit near the doorway.",
      "These suggested exchange, but|their presence alone|could not identify the traders or prove a regular schedule.",
      "The researchers compared|material from neighbouring sites|before proposing a wider pattern."
    ],
    [
      "One large room contained finely finished fragments, while a smaller room held ordinary cooking remains.",
      "The report resisted treating this contrast as a complete measure of household wealth.",
      "Differences might reflect|the activities carried out in each room,|rather than the permanent status of the people using it."
    ],
    [
      "A preliminary drawing placed a gate beside the workshop.",
      "The plan was corrected|after a deeper wall was uncovered,|showing that the apparent opening belonged to a later construction.",
      "The final report marked the gate’s earlier position as uncertain instead of removing every trace of the original proposal."
    ]
  ],
  "questions": [
    [
      "Why were deposits linked to the floor studied before loose surface objects?",
      0,
      1,
      "",
      "表面松散物可能晚到，地板堆积更适合对应建筑阶段。"
    ],
    [
      "Which finding showed that the earliest activity did not continue unchanged?",
      1,
      2,
      "",
      "后来隔墙切过沟渠，直接显示用途变化。"
    ],
    [
      "What additional evidence was compared before a broader pattern was proposed?",
      2,
      2,
      "material from neighbouring sites",
      "周边遗址材料是扩大解释前的比较证据。"
    ],
    [
      "What evidence was insufficient to establish who traded?",
      2,
      1,
      "their presence alone",
      "外来物品存在不足以确定交易主体。"
    ],
    [
      "What alternative to social rank could explain room differences?",
      3,
      2,
      "the activities carried out in each room,",
      "活动差异可能解释遗存不同。"
    ],
    [
      "What discovery led to the map correction?",
      4,
      1,
      "after a deeper wall was uncovered,",
      "更深墙体发现触发改图。"
    ]
  ]
},
specials:[
 {kind:'matching',title:'段落信息匹配',choices:['A','B','C','D'].map(id=>({id,label:id})),passage:{title:'Four questions at a small excavation',paragraphs:[
 {label:'A',text:'The oldest doorway was blocked by a later wall. A surface photograph made the two look contemporary, but the trench showed their order. The team therefore redrew the sequence rather than assigning everything to one building phase.'},
 {label:'B',text:'Several vessels were made of a material not found locally. This suggested contact with another district, although the objects might have passed through several hands. Their origin could not reveal the exact journey.'},
 {label:'C',text:'An unusually decorated panel attracted attention. The researchers compared the workmanship with simpler objects but avoided assuming that the most elaborate item belonged to a ruler. Decoration could have served several social purposes.'},
 {label:'D',text:'Work stopped in one corner because rain made the ground unsafe. The team recorded what remained visible and planned to return later. They did not fill the blank area of the plan with imagined structures.'}
]},rows:[['a safety constraint that limited what could be examined','D','雨后地面不安全导致停工。'],['a correction to the order of construction','A','墙与门的先后被探沟澄清。'],['a warning against inferring an owner’s rank from decoration alone','C','装饰复杂不等于王室所有。'],['evidence of contact that does not establish a complete route','B','外来材料提示联系，不能确定全部旅程。']]},
 {kind:'quiz',title:'多项选择',rows:[
 {type:'multi',q:'The workshop report says that a filled channel and a blocked entrance show structural change. Imported vessels suggest contact, but no payment records survive. Choose TWO supported conclusions.',options:['The building was altered after its first use.','The site had some form of contact beyond its immediate area.','The exact price of imported goods is known.','All imported vessels arrived directly from their source.','The same activity continued in every room.'],answer:['The building was altered after its first use.','The site had some form of contact beyond its immediate area.'],why:'结构改动与外来联系有证据；价格、直达路径和每室活动不成立。'},
 {type:'multi',q:'A survey uses soil samples, drawings and interviews with current residents. The interviews describe recent repairs, not ancient ownership. Choose TWO appropriate uses of the evidence.',options:['Use soil layers to investigate relative sequence.','Use the interviews to understand changes made within living memory.','Treat current residents as eyewitnesses to the ancient construction.','Use decoration alone to identify every owner.','Assume drawings eliminate all uncertainty.'],answer:['Use soil layers to investigate relative sequence.','Use the interviews to understand changes made within living memory.'],why:'材料类型需对应能回答的问题；口述近期修缮不能变成古代目击记录。'}
 ]},
 {kind:'notes',title:'一词摘要填空',passage:{title:'Recording the first season',paragraphs:['The team began by placing a grid across the site. This gave every find a location that could be checked against the drawings. Loose objects went into bags with a code, while fragile pieces were supported in trays. A small brush removed the final soil around delicate edges; workers did not pull the pieces free.', 'Each evening, photographs were copied into a digital register. The team also kept a diary describing changes in the weather and working conditions. At the end of the season, a temporary cover protected the exposed floor. Nothing in the first report presented the unfinished corners as fully understood.']},rows:[
 ['Positions were recorded using a ___ laid across the site.','grid','grid给定位基准。'],['Bags carried a ___ linking finds to their records.','code','编码连接袋装发现与记录。'],['Fragile pieces were supported in ___.','trays','易碎物用托盘，不是普通袋。'],['Final cleaning near delicate edges used a ___.','brush','小刷清土，不能拉扯。'],['Weather and working conditions were entered in a ___.','diary','diary记录每日条件，而不是照片目录。'],['The exposed floor was protected by a temporary ___.','cover','结束阶段保护是cover。']
 ]}
]});
