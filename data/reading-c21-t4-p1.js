RRReadPack({id:'c21-r-t4-p1',location:{book:21,test:4,part:1},title:'水生植物扩散、资源利用与社区选择',focus:'问题与潜在用途并存；预期和实测；可负担条件；TRUE/FALSE/NOT GIVEN、两词流程及一词笔记。',
words:`
aquatic|水生的|An aquatic plant grows in or on water.|水生植物生长在水中或水面。|The pond supports several ___ species.|池塘支持几种水生物种。
obstruct|阻挡；妨碍通行|A fallen branch can obstruct a narrow path.|掉落树枝可能挡住窄路。|Dense growth may ___ access to the landing place.|密集生长可能阻碍到达登岸处。
native|原产于当地的|A native species occurs naturally in an area.|本地原生物种自然分布于某地。|The guide distinguishes ___ plants from recently introduced ones.|向导区分本地植物与近期引入植物。
glossy|有光泽的|A glossy leaf reflects the light.|有光泽的叶子反射光线。|The plant has a ___ surface rather than a dull one.|这种植物表面有光泽，并不暗淡。
delicate|纤细柔弱的；精巧的|A delicate flower can be damaged by rough handling.|娇嫩花朵可能被粗暴拿取损坏。|Handle the ___ edges carefully so they do not tear.|小心拿取纤细边缘，避免撕破。
navigate|辨路并通过|Boat users navigate between marked channels.|船只使用者沿标明水道辨路通行。|It became difficult to ___ through the floating growth.|穿过漂浮植物辨路通行变得困难。
decay|腐烂；分解|Wet leaves begin to decay if left in a pile.|湿叶堆放后开始腐烂。|The material will ___ over time rather than stay unchanged.|材料会随时间分解，不是一直不变。
renewable|可再生的|A renewable source can be replaced through natural processes.|可再生来源可以通过自然过程补充。|The project studied a ___ material that could grow again.|项目研究一种能再次生长的可再生材料。
ratio|比例|A ratio compares the amounts of two things.|比例比较两种东西的数量。|The result depends partly on the ___ of water to dry material.|结果部分取决于水与干料的比例。
captivate|吸引住；引起浓厚兴趣|The unusual idea captivated the class.|这个不寻常想法吸引了全班。|A possible new use can ___ researchers without yet being proven practical.|可能的新用途能吸引研究者，但不代表已证实实用。
yield|产量；产出|The yield is the amount produced by a process.|产量是工艺产生的数量。|Compare the ___ from equal amounts of starting material.|比较相同原料量的产出。
convert|转变；转换|The device can convert movement into a signal.|设备能把动作转换为信号。|The workshop will ___ waste material into a usable product.|工坊会把废料转为可用产品。
dual|双重的|A dual purpose serves two aims.|双重用途服务两个目标。|The plan has a ___ aim: reduce waste and support local work.|计划有双重目标：减废并支持本地工作。
menace|威胁；麻烦|A blocked waterway can become a menace to small boats.|堵塞水道可能成为小船的威胁。|The plant was described as a ___ because it spread so quickly.|这种植物因扩散很快被称为威胁。
fermentation|发酵|Fermentation changes material through the activity of microorganisms.|发酵通过微生物活动改变材料。|The class monitored temperature during ___.|课堂监测了发酵时的温度。
break down|分解|Tiny organisms help break down dead plant material.|微小生物帮助分解死亡植物材料。|The mixture should ___ gradually rather than remain intact.|混合物应逐渐分解，而非保持完整。
domestic|家庭日常使用的|Domestic appliances are used in the home.|家用电器在家里使用。|The product was designed for ___ use, not a large factory.|产品为家庭使用设计，不是大型工厂使用。
purify|净化|A filter may help purify water by removing some unwanted material.|滤器可去除部分不需要物质，帮助净化水。|The system aims to ___ the liquid before reuse.|系统旨在再次使用前净化液体。
incubate|孵化；使在适宜条件下发育|To incubate eggs is to keep them in conditions that allow development.|孵蛋是把蛋放在能发育的条件下。|The equipment can ___ eggs at a controlled temperature.|设备能在受控温度下孵蛋。
respiratory|呼吸系统的|Respiratory problems affect breathing or the organs used for it.|呼吸系统问题影响呼吸或有关器官。|The survey recorded ___ symptoms rather than changes in hearing.|调查记录呼吸症状，而非听力变化。
affordability|价格是否负担得起|Affordability depends on cost and what people can pay.|能否负担取决于费用与支付能力。|A useful machine may still face an ___ problem.|有用机器仍可能面临买不起的问题。
depend on|依赖；取决于|The result will depend on the quality of the input.|结果取决于输入质量。|Many households ___ a supply that is becoming less reliable.|许多家庭依赖一种越来越不可靠的供应。
cater for|满足……的需要|The service must cater for users with different needs.|服务必须满足不同需要的用户。|A small system may ___ one household but not an entire village.|小系统可能满足一家，却不能满足全村。
enterprise|经营项目；企业|A small enterprise sells repaired household items.|一家小企业出售修好的家用品。|The group started an ___ using skills already available locally.|小组利用本地已有技能开展经营项目。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['native','glossy','delicate','domestic','depend on'],
contexts:[
{id:'pond',title:'One plant, several questions',words:['aquatic','obstruct','native','glossy','delicate','navigate','decay','renewable','ratio','menace','depend on','respiratory'],paragraphs:[
 'A village group examined an {{aquatic}} plant spreading across a pond. Its glossy leaves and delicate flowers looked attractive, but growth could {{obstruct}} a narrow channel. People who had to {{navigate}} a boat through it regarded it as a {{menace}}. A pretty appearance did not tell them whether the plant was native or what its wider effects might be.',
 'Some residents depend on the channel for work. Others asked what happened when removed leaves began to {{decay}} on the bank. The class compared the {{ratio}} of wet to dry material in a small sample. Calling the material {{renewable}} did not mean there was no need to manage it.',
 'The group also discussed household smoke and {{respiratory}} symptoms, but kept that question separate from the boat access problem. A project might address more than one difficulty; each claimed benefit still needed its own evidence.'
]},
{id:'workshop',title:'Testing a small processing idea',words:['captivate','yield','convert','dual','fermentation','break down','domestic','purify','incubate','affordability','cater for','enterprise'],paragraphs:[
 'A new idea can {{captivate}} a group before anyone knows whether it will work. Our training workshop studied an imagined {{enterprise}} that would {{convert}} unwanted plant material into useful products. It had a {{dual}} aim: reduce waste and provide local work.',
 'One test used {{fermentation}} to help material {{break down}}. Equal starting amounts were compared so that the {{yield}} meant something. Another demonstration explained equipment designed to {{purify}} water, while a separate display showed a device used to {{incubate}} eggs. We did not assume that all these devices used the same process.',
 'The final discussion concerned domestic use. A small system might {{cater for}} one household, yet cost too much for the people who needed it. For users, {{affordability}} therefore mattered alongside performance. The group wanted a practical plan, not just an interesting demonstration.'
].map(s=>s.replace('{{Affordability}}','{{affordability}}'))}],
vocab:[
 ['The aquatic weed spread along the edge of the lake.\naquatic 是？','在水中或水面生长的','只生长在沙漠的','必定有毒的','任何地方都能生长的','水生说明环境，不自动说明毒性。'],
 ['The plant obstructed access without covering the entire lake.\nobstructed 是？','阻碍了通行','完全覆盖了所有水面','净化了入口','仅改变了水的颜色','局部阻挡不能扩大为全湖覆盖。'],
 ['Residents struggled to navigate the crowded channel.\nnavigate 是？','找路并通过','把植物全部挖掉','测出所有水深','禁止其他船只进入','导航通过与清除、测深和管理不同。'],
 ['The leaves decayed after being left in wet piles.\ndecayed 是？','腐烂分解','重新长成完整植株','被直接燃烧','保持质量完全不变','腐烂是分解，不是燃烧。'],
 ['The material was renewable but still costly to collect.\nrenewable 是？','可以自然补充的','收集完全免费的','永远不受任何限制的','已经完成加工的','可再生不等于无成本或无限。'],
 ['A different ratio changed the result even when the total amount stayed equal.\nratio 是？','各成分数量的比例','材料总重','完成操作的总时长','每个样本的名称','总量相等仍可比例不同。'],
 ['The idea captivated researchers before a practical trial existed.\ncaptivated 是？','吸引了浓厚兴趣','已经证明一定可行','被全部拒绝','正式获准全面使用','兴趣先于试验，不能当作验证。'],
 ['The second method gave a higher yield from the same input.\nyield 是？','产出量','购买原料的价格','全村人口','材料起源','same input对比输出。'],
 ['The device converted stored energy into movement.\nconverted 是？','把一种形式转为另一种','把所有损耗彻底消除','只储存而不释放','增加原料数量但不改形式','转换不保证无损耗。'],
 ['The proposal had a dual aim.\ndual 是？','双重的','每个环节完全相同的','没有明确目标的','仅供个人使用的','dual指两个目标，并不说同一过程。'],
 ['The process relied on fermentation rather than direct burning.\nfermentation 是？','微生物参与的发酵','直接燃烧','纯粹的机械压紧','只把水蒸发出去','对比burning排除燃烧。'],
 ['The material began to break down inside the container.\nbreak down 是？','分解','被整块取出','不断增加原尺寸','通过验收','材料语境是分解，不是通过检查。'],
 ['A separate stage was intended to purify the liquid.\npurify 是？','去除不需要成分使更洁净','保证立刻可安全饮用','增加液体总量','改变其归属','净化不自动保证饮用标准。'],
 ['The report examined respiratory symptoms among users.\nrespiratory 是？','与呼吸系统有关','与视力有关','只影响听力','专指皮肤颜色','器官系统明确。'],
 ['Affordability limited adoption despite good performance.\naffordability 是？','购买和使用费用是否承受得起','产品是否新颖','能否在实验室启动','大家是否认识制造商','性能好仍可买不起。'],
 ['The system could cater for a small household.\ncater for 是？','满足其需要','证明每户需求一样','迫使其改变住址','只提供餐饮服务','这里是满足需要，不限餐饮。']
],
rewrites:[
 ['A useful resource can also create a serious obstruction.','A material may have benefits while causing an access problem.','Any useful material must be harmless.','An obstruction can never be used for anything.','Benefits prove the access problem is imaginary.','用途和问题可并存。'],
 ['The estimate concerns dry material rather than its wet weight.','The calculation is based on material after water has been removed.','The wet and dry amounts are assumed identical.','Water content is the only benefit measured.','The estimate applies only to liquid output.','干重与湿重的对象条件不同。'],
 ['The process was promising, but the health effect required further study.','Technical results did not yet establish the size of any health benefit.','Every health benefit had already been proved.','The process showed no technical promise.','More study was needed only because health effects were impossible.','性能和健康效果需分别验证。'],
 ['Lower collection time allowed some residents to do other paid work.','Time saved made additional earning activities possible for some people.','Every resident earned the same extra amount.','No collection work remained anywhere.','Paid work disappeared after collection became easier.','some与allowed不等于全体或实际收益相同。'],
 ['The system could serve more households if its price fell.','Wider access was conditional on a reduction in cost.','The system already served every household.','Cost had no influence on access.','A higher price was necessary for wider access.','if条件保留，不能当已普及。'],
 ['A higher output did not by itself make the method affordable.','Producing more was insufficient to guarantee that users could pay for it.','Higher output always raised the price.','An affordable method must have the lowest output.','Output and price are necessarily identical measures.','产量不是负担能力的充分保证。']
],
match:{title:'A community weighs a proposal',text:'The group considered a {{0}} source of material. One proposal could {{1}} it into a useful product, with a {{2}} aim of reducing waste and supporting work. The team measured {{3}} but also asked about {{4}}. A successful device still needed to {{5}} the people expected to use it.',pairs:[['renewable','naturally replaceable','可通过自然过程补充。'],['convert','transform','转换。'],['dual','two-part','双重。'],['yield','output','产出。'],['affordability','whether the cost can be managed','费用能否负担。'],['cater for','meet the needs of','满足需要。']],extras:['guarantee equal income','the amount of money already earned','completely without cost']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "Processing|a renewable material|creates|costs|that|an estimate of raw output|may omit,|including|time spent|sorting|and|drying|each batch.",
    "subject": "Processing",
    "predicate": "creates",
    "skeleton": "Processing a renewable material creates costs.",
    "translation": "加工可再生材料会产生原料产出估计可能忽略的成本，包括分拣晾干时间。",
    "why": "主语核心Processing，creates为主句；may omit修饰costs。"
  },
  {
    "kind": "backbone",
    "tokens": "The report|attributes|the lower input weight|to|drying,|rather than to|a change|in|the amount of solid material|that|the sample|contained.",
    "subject": "The report",
    "predicate": "attributes",
    "skeleton": "The report attributes the lower input weight to drying.",
    "translation": "报告把较低投入重量归于干燥，而非样本固体材料数量变化。",
    "why": "主句report attributes；contained在定语从句中。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The workshop connected|a fine mesh screen|to the first collection tray.|A small pump moved water towards|a settling tank,|and|a digital scale|was placed on the bench so each sample could be weighed after drying.|The pump made the flow steadier and the tank allowed some particles to sink.|Although each item had a role in the test,|it|caught larger pieces before they entered the narrow tube, preventing a blockage that would otherwise have interrupted the demonstration.",
    "antecedent": "a fine mesh screen",
    "translation": "工坊在收集盘接细网，泵送水到沉淀罐，数字秤称干样。能在大块进入窄管前截住它们、防止堵塞的是细网。",
    "why": "caught larger pieces对应mesh screen的过滤功能。"
  },
  {
    "kind": "reference",
    "focus": "this adjustment",
    "tokens": "The first trial compared equal wet weights, even though the samples contained different amounts of water.|A researcher proposed|comparing samples only after they had been dried to a stable weight.|Another colleague suggested a larger poster and a new name for the project.|Neither publicity change was adopted.|The second trial did introduce|a comparison based on equal dry starting amounts.|In the review,|this adjustment|was credited with making the measured output more comparable, since differences in water content no longer dominated the input figures.",
    "antecedent": "a comparison based on equal dry starting amounts.",
    "accept": [
      "comparing samples only after they had been dried to a stable weight."
    ],
    "translation": "首轮按相同湿重比较，但含水量不同。第二轮改为干至稳定重量后按同干重比较；宣传海报和名称未改。被肯定的是可比输入的调整。",
    "why": "两处均指控制干重的比较方式，不是宣传变化。"
  },
  {
    "kind": "logic",
    "text": "The plant’s capacity to regrow makes it renewable; it does not make its collection or processing free.",
    "q": "renewable能推出什么？",
    "options": [
      "可以再生，但收集加工仍可能有成本。",
      "所有成本都已消失。",
      "产量一定满足任何需求。",
      "无需管理即可无限使用。"
    ],
    "answer": "可以再生，但收集加工仍可能有成本。",
    "translation": "能重新生长使植物可再生，不使收集加工免费。",
    "why": "再生性质和经济成本不同。"
  },
  {
    "kind": "logic",
    "text": "The author presents a possible reduction in symptoms while saying the magnitude of the benefit remains uncertain.",
    "q": "作者的表述强度是？",
    "options": [
      "可能改善，但改善幅度尚不确定。",
      "所有症状已完全消除。",
      "已证明绝不可能改善。",
      "每个人的改善程度相同。"
    ],
    "answer": "可能改善，但改善幅度尚不确定。",
    "translation": "作者提出症状可能减少，同时说收益幅度不确定。",
    "why": "possible与magnitude uncertain必须都保留。"
  }
],
evidence:{
  "title": "A community tests a plant-fibre workshop",
  "paragraphs": [
    [
      "A community centre tested whether cleared plant material could be used in simple craft products at weekend workshops.",
      "Its aim was|to assess a small additional use for collected material,|not to claim that every waterway problem would disappear.",
      "Volunteers kept|the access-clearing work|separate from the product trial so that each could be evaluated."
    ],
    [
      "The first batches contained different amounts of moisture.",
      "The team dried them before weighing, making the input more comparable.",
      "A larger finished item was not counted as more efficient if it had also required much more starting material."
    ],
    [
      "Some pieces broke during shaping while others remained usable.",
      "The group recorded|both failed and successful pieces|rather than displaying only the best examples.",
      "This gave a clearer picture of the practical work required for an ordinary batch."
    ],
    [
      "The workshop sold a few samples at a local event.",
      "The sales showed interest, but did not establish a regular market or a reliable income.",
      "Costs included|the time spent sorting and drying,|not just the purchase of tools."
    ],
    [
      "The report recommended a second trial with clearer records of input, work and sales.",
      "Expansion was conditional on|a realistic account of all costs,|including those volunteers had initially absorbed without payment.",
      "The centre regarded the idea as worth exploring while refusing to describe a demonstration as a complete business plan."
    ]
  ],
  "questions": [
    [
      "What was the limited purpose of the craft trial?",
      0,
      1,
      "",
      "评估已收集材料的小型附加用途，不宣称根治水道问题。"
    ],
    [
      "Why were batches dried before weighing?",
      1,
      1,
      "",
      "控制含水量，让投入可比。"
    ],
    [
      "What activity was evaluated separately from the product trial?",
      0,
      2,
      "the access-clearing work",
      "清通道工作与制品试验分开评估。"
    ],
    [
      "What helped the report avoid selecting only favourable results?",
      2,
      1,
      "both failed and successful pieces",
      "成败都记录，防止只看最佳。"
    ],
    [
      "Which labour cost was included?",
      3,
      2,
      "the time spent sorting and drying,",
      "分拣晾干时间也算成本。"
    ],
    [
      "What condition had to be met before expansion?",
      4,
      1,
      "a realistic account of all costs,",
      "扩展前需真实完整成本，不只是工具购买价。"
    ]
  ]
},
specials:[
 {kind:'judgement',rows:[
 ['The group removed growth from a single access channel and left the rest of the pond unchanged during the first trial.','The entire pond was cleared during the first trial.','FALSE','single channel与entire pond冲突。','首轮只清一条通道，池塘其余处未改。'],
 ['The material was weighed after drying because wet samples contained different amounts of water.','Drying helped make comparisons between inputs fairer.','TRUE','不同含水量是干燥比较理由。','湿样含水量不同，干燥后称重。'],
 ['The training room had two workbenches and a board displaying the day’s steps. Participants worked in pairs and wrote comments after each stage.','All participants had previously worked together.','NOT GIVEN','两人一组不说明以往认识或合作。','教室两工作台和流程板，参与者两人合作并记意见。'],
 ['The report said early sales were too limited to establish regular demand.','Early sales proved that the product had a stable market.','FALSE','明确不足以确认稳定需求。','早期销量太有限，不能确立稳定需求。'],
 ['Tool costs and sorting time were both included in the calculation.','The calculation considered more than the price of equipment.','TRUE','同时含时间与工具成本。','计算包括工具成本及分拣时间。'],
 ['A local college lent equipment for the trial. The group returned it after cleaning and kept photographs for its report.','The college intended to sell the equipment to the group later.','NOT GIVEN','借还与留照片不说明未来出售计划。','学校借设备，清洁归还并留下报告用照片。']
 ]},
 {kind:'flow',title:'流程填空',maxWords:2,instruction:'Choose NO MORE THAN TWO WORDS from the passage for each answer.',passage:{title:'Preparing a batch for comparison',paragraphs:['The technician first writes a batch code on a waterproof tag and attaches it to the container. Loose material is then spread across a drying rack. Once its weight has stopped changing, a balance is used to record the dry input. The batch code stays with the sample throughout these steps.', 'The prepared material is shaped using a wooden frame. Each finished piece is photographed beside a ruler so that its size can be checked later. All records are copied to a shared sheet. Failed pieces are included rather than removed from the results.']},rows:[
 ['Attach a ___ carrying the batch code.','waterproof tag','完整原文waterproof tag符合两词限制。',['tag']],
 ['Spread material across a ___.','drying rack','rack是原文完整名词组，drying说明用途。',['rack']],
 ['Record dry input using a ___.','balance','稳定重量后用天平称量。'],
 ['Shape the material with a ___.','wooden frame','wooden frame是成形工具。',['frame']],
 ['Photograph each piece beside a ___.','ruler','尺子给尺寸参照。']
 ]},
 {kind:'notes',title:'一词笔记填空',passage:{title:'Arranging a public demonstration',paragraphs:['Visitors entered through a gate beside the community hall and received a badge. A volunteer directed them towards the outdoor table, leaving the indoor area free for other classes. The demonstration used a model so that everyone could see the stages without handling working equipment.', 'A microphone carried the explanation to the back of the group. Questions were collected on cards and placed in a box before the discussion. At the end, visitors could take a leaflet that described the trial and its limits. The organisers did not call it a guarantee of future income.']},rows:[
 ['Visitors received a ___ after entering.','badge','badge为入场物品。'],['Stages were shown with a ___ rather than working equipment.','model','模型演示，不让游客操作真实设备。'],['The explanation was made audible using a ___.','microphone','麦克风让后排听见。'],['Written questions were placed in a ___.','box','卡片问题放箱中。'],['Visitors could take a ___ explaining both the trial and its limits.','leaflet','传单说明结果与限制，不是收入保证。']
 ]}
]});
