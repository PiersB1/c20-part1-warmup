RRReadPack({id:'c18-r-t1-p1',location:{book:18,test:1,part:1},title:'城市种植的空间、资源与限制',focus:'比较生产方法、选择标准与相对价格；数量上限和条件限制；句子填空、表格填空、事实判断。',
words:`
aeroponic|气雾栽培的|An aeroponic system supplies roots with water in a fine spray.|气雾栽培用细水雾给根部供水。|The display compared an ___ system with plants growing in soil.|展示把气雾栽培系统与土壤种植比较。
vertical|垂直的；竖向的|A vertical support goes upwards rather than along the ground.|竖向支架向上延伸，不是沿地面平放。|The plants grew on a ___ frame beside the wall.|植物长在墙边竖向架子上。
hollow|中空的|A hollow object has space inside it.|中空物体内部有空腔。|Water could pass through the ___ support.|水可穿过中空支架。
dangle|悬垂；吊着|Roots dangle when they hang freely downwards.|根部悬垂就是自由向下垂着。|The roots began to ___ below the support.|根部开始垂在支架下。
horizontal|水平的；横向的|A horizontal surface runs across rather than upwards.|水平表面横向展开，而非向上。|The gardener placed a ___ shelf beside the upright frame.|园丁在竖架旁放了水平搁板。
coconut fibre|椰子纤维|Coconut fibre is material from the outer part of a coconut.|椰子纤维来自椰子外部。|The container held ___ instead of ordinary soil.|容器装椰子纤维，而不是普通泥土。
tend|照料；照看|To tend plants is to look after them.|照料植物就是看护它们。|Volunteers took turns to ___ the young plants.|志愿者轮流照料幼苗。
harvest|收获；采收|To harvest a crop is to collect it when it is ready.|采收是作物成熟可用时把它收下来。|The team planned to ___ only what was ready.|团队只打算采收已成熟的部分。
yield|产量|Yield is the amount a crop produces.|产量是作物生产出的数量。|The comparison measured water use for the same ___.|比较测量相同产量所用的水。
practical constraint|实际条件的限制|A practical constraint limits what can be done in a real situation.|实际限制会约束现实中能做什么。|Roof access was a ___, not just a detail on paper.|屋顶通道是实际限制，不只是纸面细节。
consumption|消费量；消耗|Consumption is the amount used or eaten.|消费或消耗指用掉或吃掉的数量。|The estimate compared local output with household ___.|估算比较本地产出和家庭消费量。
showcase|展示实例；展示平台|A showcase lets people see how an idea works.|展示实例让人看到一个想法怎样运作。|The small garden served as a ___ for the growing method.|小菜园用来展示种植方法。
pesticide|农药；杀虫剂|A pesticide is used to control pests that damage crops.|农药用来控制损害作物的害虫等有害生物。|The report listed each ___ used during the trial.|报告列出试验使用的每种农药。
greenhouse gas|温室气体|A greenhouse gas contributes to warming by trapping heat.|温室气体通过留住热量促进变暖。|The review considered ___ emissions from production as well as delivery.|评论考虑生产和运输的温室气体排放。
withstand|承受；经受住|To withstand a condition is to resist its damaging effects.|经受住某种条件，就是抵抗它的破坏影响。|The container had to ___ repeated movement.|容器必须经得住反复搬动。
wholesaler|批发商|A wholesaler buys and sells goods in large quantities.|批发商大量买卖货物。|The grower compared selling directly with selling through a ___.|种植者比较直销与经批发商销售。
closed circuit|封闭循环系统|A closed circuit returns material through the same system.|封闭循环让物质在同一系统中循环返回。|The water moved through a ___ rather than being discarded after one use.|水在封闭系统中循环，不是用一次就丢弃。
nutrient|养分；营养物质|A nutrient is a substance needed for growth.|养分是生长所需的物质。|The gardener checked whether enough ___ reached the roots.|园丁检查根部是否获得足够养分。
recycle|循环使用；回收利用|To recycle water is to use it again after collecting it.|循环用水就是收集后再次使用。|The design aimed to ___ water while checking its quality.|设计旨在检查水质并循环用水。
intensive|集约化的；高投入高产出的|Intensive farming seeks high output from a limited area using substantial inputs.|集约农业在有限面积上投入较多以求高产。|The comparison included an ___ farm, not only small gardens.|比较包含集约农场，不只有小菜园。
disused|闲置的；不再使用的|A disused building is no longer used for its earlier purpose.|闲置建筑不再用于原有用途。|The group considered a ___ room for the growing trial.|小组考虑用闲置房间做种植试验。
install|安装|To install equipment is to put it in place for use.|安装设备是把它安置好供使用。|A specialist helped to ___ the pump safely.|专业人员帮助安全安装水泵。
viable|切实可行的；能运作下去的|A viable project can work under its actual conditions.|可行项目在实际条件下能运作下去。|Low equipment cost alone did not make the plan ___.|仅设备便宜还不足以使方案可行。
return|收益；回报|A return is what is gained from an investment of money, effort or space.|回报是投入资金、精力或空间后获得的收益。|The crop occupied much space for a small ___.|作物占地很多，回报却少。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['vertical','horizontal','harvest','recycle','install'],
contexts:[{id:'growing',title:'A growing space at the college',words:['aeroponic','vertical','hollow','dangle','horizontal','coconut fibre','tend','harvest','yield','closed circuit','nutrient','recycle'],paragraphs:[
'A college built a small growing space for students to compare methods. An {{aeroponic}} display used a fine spray near the roots. In one vertical support, the centre was {{hollow}}, leaving room for the roots to {{dangle}}. Nearby, plants stood on a horizontal shelf in containers filled with {{coconut fibre}}.',
'Students learned to {{tend}} the plants and check the amount of {{nutrient}} in the water. The pump sent water around a {{closed circuit}}. The class could recycle much of it, but still had to check its quality and replace what the plants used.',
'They agreed to harvest each crop when it was ready, recording the {{yield}} rather than judging success from the appearance of the equipment. A small system could look impressive without producing much. Keeping records helped the class compare the methods fairly instead of assuming that the newest display had to be the best.'
]},{id:'selling',title:'Would a local growing project work?',words:['practical constraint','consumption','showcase','pesticide','greenhouse gas','withstand','wholesaler','intensive','disused','install','viable','return'],paragraphs:[
'A community considered using a {{disused}} room to grow food. The first {{practical constraint}} was access: workers needed to carry supplies in and produce out. A public {{showcase}} had made the idea seem attractive, but the group wanted to know whether it would be {{viable}} in this particular room.',
'They compared expected output with local {{consumption}}. The plan would not replace every existing supplier. One grower sold through a {{wholesaler}}, while another used a stall nearby. A box designed for long transport had to {{withstand}} more handling than one carried only a short distance.',
'The review included an {{intensive}} farm and recorded any {{pesticide}} use. It considered {{greenhouse gas}} emissions as well as price. Volunteers could install simple shelves, but electrical work required help. Finally they compared the likely {{return}} from different crops, taking account of space, work and what neighbours actually wanted to buy.'
]}],
vocab:[
['The aeroponic system delivered a fine spray to the roots.\naeroponic 表示？','用水雾给根部供水的种植方式','一定把所有根埋在普通土里的方式','只依靠露天降雨且无设备的方式','专指把果实放进冷库','核心在根部供水方式。'],
['The support was hollow.\nhollow 表示？','内部有空腔','内部全部填实','一定没有承重能力','外部颜色很浅','形状特征不等于强度结论。'],
['Roots could dangle below the frame.\ndangle 表示？','向下自由悬垂','完全埋在地下','沿地面不断爬行','已经被剪掉','悬垂不是被剪除。'],
['Volunteers tend the plants.\ntend 表示？','照料植物','已经卖掉所有作物','只给植物拍照','永久停止种植','此处为照看，不是趋向。'],
['The design increased yield per unit of space.\nyield 是？','单位空间产量','每株根的必然长度','农药的品牌','销售价与所有费用之差','产量不等于利润。'],
['Access remained a practical constraint.\npractical constraint 是？','现实中限制实施的条件','已被彻底解决的所有问题','只表示方案写得很长','必定使所有类似项目失败的规律','现实限制可因项目而异。'],
['Output covered only part of local consumption.\nconsumption 是？','当地使用或食用的量','种植设备的总高度','只指农民个人收入','全部作物的名称','消费总量不同于生产量。'],
['The site became a showcase for the method.\nshowcase 是？','让人看到方法运作的展示实例','只有文字没有实例的合同','已经覆盖所有城市的规模','禁止公众了解的秘密','展示实例不表示大规模全覆盖。'],
['The plants received a measured nutrient supply.\nnutrient 是？','支持生长的养分','任何情况下都必须有的泥土','只指杀死害虫的药剂','只表示灯光的颜色','养分可以存在于水中。'],
['Water moved around a closed circuit.\nclosed circuit 表示？','在同一封闭系统中循环流动','流过一次就全部排出','设备完全不用水','每次只从远方运来成品','循环不等于完全不补水。'],
['A pesticide was listed in the farm record.\npesticide 是？','控制害虫等有害生物的农药','给根供水的任何管道','只增加照明的设备','所有天然土壤的统称','用途针对有害生物。'],
['The package had to withstand repeated handling.\nwithstand 表示？','经受住而不轻易受损','主动增加搬运次数','证明完全不需包装','使产品立刻成熟','承受能力不是次数或成熟度。'],
['They sold through a wholesaler.\nwholesaler 是？','大量买卖货物的批发商','只在自家吃菜的消费者','所有运输设备的名称','仅指每株植物的主人','销售链角色不同。'],
['They planned to use a disused room.\ndisused 表示？','不再用于原来用途的','从未建造过的','必定不可修复的','每天仍按原用途满负荷使用的','闲置不必等于报废。'],
['The proposal might be viable.\nviable 表示？','在实际条件下有运作可能','已经保证永远盈利','完全没有任何限制','无需任何投入即可完成','可行不等于保盈。'],
['The crop gave a poor return for the space occupied.\nreturn 是？','投入空间所换得的收益','把产品送回原处的动作','每次浇水的间隔','必定等于总销售额','此处为投入回报。']
],
rewrites:[
['The project could supplement local supply, not replace every existing source.','It could provide an additional share without meeting the whole demand.','It would eliminate all other suppliers.','It could make no useful contribution at all.','It already supplied every household.','补充不同于全替代，也不等于无价值。'],
['Water use was compared at an equal yield.','The comparison held output constant when assessing water requirements.','The methods were compared regardless of output.','The method with more water necessarily produced nothing.','The comparison measured price alone.','相同产量是比较基准。'],
['A short delivery route may allow a different crop-selection criterion.','Reduced transport demands can change which qualities growers prioritise.','No crop quality matters when a route is short.','The shortest route guarantees every crop will survive.','Transport distance alone fixes every sale price.','可能改变优先标准，不是全因果。'],
['Cheap equipment alone does not establish that a project is viable.','Low purchase cost is only one part of judging whether the plan can work.','Cheap equipment proves permanent profit.','Equipment cost can never be relevant.','An expensive project is always impossible.','单因素不充分，非不相关。'],
['The price fell between those of two other methods.','It was dearer than one comparison and cheaper than the other.','It was cheaper than both alternatives.','It was dearer than both alternatives.','All three prices were identical.','相对价格需要两个比较对象。'],
['Some crops occupy considerable space for little return.','The output gained may be limited relative to the area committed.','Every crop grown there has no value.','Less space always means lower total output.','Return refers only to how far crops travel.','比例和部分范围保留。']
],
match:{title:'Comparing growing options',text:'The class recorded {{0}} instead of judging the display by size. An unused room was {{1}}, but its doorway imposed a {{2}}. They asked whether a {{3}} would reduce water loss and whether produce could {{4}} handling. The final question was whether the plan was {{5}}.',pairs:[['yield','amount produced','产量。'],['disused','no longer serving its earlier purpose','闲置。'],['practical constraint','real-world limit','现实限制。'],['closed circuit','a system that returns the same water for reuse','循环。'],['withstand','resist damage from','经受住。'],['viable','capable of working under the actual conditions','实际可行。']],extras:['guaranteed to meet all demand','already beyond every physical limit','higher than every alternative price']},
syntax:[
{kind:'backbone',tokens:'Growing close to buyers|can reduce|the need for long transport,|although|it|does not remove|every cost of production.',subject:'Growing close to buyers',predicate:'can reduce',skeleton:'Growing close to buyers can reduce the need for long transport.',translation:'靠近买方种植可降低长距离运输需求，但不消除所有生产费用。',why:'Growing短语作主语，although从句为限制。'},
{kind:'backbone',tokens:'Between|the cost of equipment and the likely sales,|several other conditions|must be considered|by a group|planning|a growing space.',subject:'several other conditions',predicate:'must be considered',skeleton:'Several other conditions must be considered.',translation:'在设备成本和预计销售额之外，规划种植区的小组还必须考虑其他条件。',why:'主句情态被动must be considered，planning修饰group。'},
{kind:'reference',focus:'it',tokens:'The students compared|a mesh basket|with a water tank, a shelf and a lamp.|They placed one young plant inside the first item and adjusted the other equipment around it.|The tank held the supply of water, while the lamp allowed observation in a room with little daylight.|During the demonstration,|it|held the plant in place while leaving enough room for the roots to hang below, a function that neither storing water nor providing light could perform on its own in this arrangement.',antecedent:'a mesh basket',translation:'学生比较网篮、水箱、搁板和灯。能固定植株并给根部留下悬垂空间的是网篮，不是存水或照明设备。',why:'held plant in place与篮的功能吻合。'},
{kind:'reference',focus:'the latter',tokens:'A volunteer distinguished|the cost of buying the equipment|from|the expense of running it over time.|The initial quotation included a pump and a set of shelves, while the later budget included power, replacement parts and routine checks.|A visitor asked whether a low purchase price settled the question of affordability.|The volunteer said|the latter|could still be substantial even where the initial payment was small, so the group needed an estimate covering a realistic period rather than just the day on which the equipment arrived.',antecedent:'the expense of running it over time.',translation:'志愿者区分购置成本和长期运行费。后者含电力、零件和检查，即使初购便宜仍可能不少。',why:'later budget与running expense呼应。'},
{kind:'logic',text:'A lighter system can be suitable for some roofs without being suitable for every roof.',q:'应保留哪个范围？',options:['适合部分屋顶，不保证适合全部。','任何屋顶都适合。','所有屋顶都不适合。','重量是唯一需要考虑的因素。'],answer:'适合部分屋顶，不保证适合全部。',translation:'较轻系统可适合一些屋顶，不保证每个屋顶都行。',why:'some与every不同。'},
{kind:'logic',text:'The method uses less water for an equivalent output; it does not use no water.',q:'比较的是什么？',options:['同等产出所需水量更少。','完全不用水。','产量必定是零。','每种资源的消耗都必然更少。'],answer:'同等产出所需水量更少。',translation:'同等产量时用水更少，不是零用水。',why:'程度、基准和资源范围不外推。'}
],
evidence:{title:'A growing room is put to the test',paragraphs:[
['A community centre converted a small room into a growing trial rather than promise to supply the whole neighbourhood.','The project aimed|to compare practical methods in a real space,|including the work required to maintain them.','Visitors could see the displays, but the organisers judged them using written records rather than appearance alone.'],
['The team measured the amount collected from each growing area and the water used to produce it.','It compared water requirements at similar output so that a very small harvest would not make an inefficient method look economical.','The report also recorded|time spent on routine care|because an apparently simple display could need frequent attention.'],
['Some equipment had a low purchase price but needed regular replacement parts.','The budget separated these later expenses from the initial payment.','The organisers considered|the cost of running the system|before deciding whether the project could continue, rather than treat the first receipt as the whole budget.'],
['A nearby stall accepted small deliveries, while a distant buyer required stronger packaging.','The team noted that these routes placed different demands on the produce.','For each route, it recorded|the condition on arrival|as well as the amount sold, allowing damage during handling to be considered separately from growing performance.'],
['The final review identified useful options but also crops that needed too much space in that room.','It did not present one successful display as a complete solution to every local supply problem.','A new trial would examine|what buyers actually wanted|before expanding, so that a higher harvest would not simply leave more unsold food.']
],questions:[
['What was the project intended to investigate?',0,1,'','实际空间比较方法和维护。'],['Why was output kept similar when comparing water use?',1,1,'','避免低产伪装成节水高效。'],['Which labour measure was recorded?',1,2,'time spent on routine care','日常照料耗时。'],['What expense mattered beyond the purchase?',2,2,'the cost of running the system','长期运行而非单次买价。'],['What measure allowed transport damage to be examined?',3,2,'the condition on arrival','到货状态与种植表现分开。'],['What information was required before expansion?',4,2,'what buyers actually wanted','需求而非单纯多产。']
]},
specials:[
  {
    "kind": "notes",
    "title": "句子填空",
    "maxWords": 2,
    "instruction": "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
    "passage": {
      "title": "A room prepared for growing",
      "paragraphs": [
        "The organiser fixed a noticeboard by the doorway so that everyone could read the daily jobs before entering. A narrow walkway remained clear between the shelves, allowing workers to reach the plants without moving containers. The team checked the space before deciding where any electrical equipment should go.",
        "A wall clock helped volunteers keep care routines consistent. Each volunteer signed a record after finishing a task, and problems were discussed at the next visit. This simple arrangement did not make the system automatic; it made the work visible and easier to share."
      ]
    },
    "rows": [
      [
        "Daily tasks were shown on a ___ near the door.",
        "noticeboard",
        "门旁告示板。"
      ],
      [
        "Workers reached the plants along a clear ___.",
        "walkway",
        "预留走道。"
      ],
      [
        "A ___ helped keep routines consistent.",
        "wall clock",
        "墙钟帮助时间安排。",
        [
          "clock"
        ]
      ]
    ]
  },
  {
    "kind": "table",
    "title": "表格填空",
    "columns": [
      "Stage",
      "Measure or record"
    ],
    "passage": {
      "title": "Keeping the trial organised",
      "paragraphs": [
        "At the start of each visit, the volunteer read a checklist to make sure no essential job was missed. A thermometer showed whether the room had become unusually warm. The group did not assume that a room which felt comfortable to one person was automatically suitable for every crop.",
        "Before packing a delivery, the team checked each container for damage. A label then linked the container to its growing area and collection time. Finally, a tally recorded how many items the stall accepted. This kept the delivery record separate from the growing record."
      ]
    },
    "rows": [
      [
        "Essential jobs were listed on a ___.",
        "checklist",
        "任务清单。",
        [],
        [
          "Start of visit",
          "Read the ___ for essential jobs."
        ]
      ],
      [
        "Room warmth was checked with a ___.",
        "thermometer",
        "温度计。",
        [],
        [
          "Conditions",
          "Check the room with a ___."
        ]
      ],
      [
        "A ___ linked a container to its growing area.",
        "label",
        "标签追溯来源。",
        [],
        [
          "Packing",
          "Attach a ___ showing origin."
        ]
      ],
      [
        "Accepted items were counted in a ___.",
        "tally",
        "计数记录。",
        [],
        [
          "Delivery",
          "Record accepted items in a ___."
        ]
      ]
    ]
  },
  {
    "kind": "judgement",
    "rows": [
      [
        "The trial compared water use at the same output rather than comparing totals from very different harvests.",
        "The comparison took account of the amount produced.",
        "TRUE",
        "同等产量控制基准。",
        "比较相同产量的用水。"
      ],
      [
        "The committee explicitly warned that a small local project could supplement supplies but could not replace them all.",
        "The committee expected the project to meet all local demand.",
        "FALSE",
        "明确不能全替代。",
        "项目能补充不能全部替代。"
      ],
      [
        "The room contained a pump, shelves and a system for recording care work. Volunteers visited on a regular schedule.",
        "Every volunteer had previous commercial farming experience.",
        "NOT GIVEN",
        "设备和访问安排不提供所有人经历。",
        "房间有设备和记录系统，志愿者定期照料。"
      ],
      [
        "Some equipment was inexpensive to buy but required parts and electricity during use.",
        "A low initial price did not remove later expenses.",
        "TRUE",
        "有后续零件电费。",
        "买价低仍有运行费。"
      ],
      [
        "The report found the price above that of method A but below that of method B.",
        "The reported price was lower than both alternatives.",
        "FALSE",
        "高于A直接反驳低于两者。",
        "价格在A和B之间。"
      ],
      [
        "The organisers considered several crop choices and recorded the space each occupied. Buyers at the stall could ask about the growing trial.",
        "The stall sold more produce on weekends than on weekdays.",
        "NOT GIVEN",
        "未有日期销量比较。",
        "记录作物空间，买方可问项目。"
      ]
    ]
  }
]});
