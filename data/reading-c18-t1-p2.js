RRReadPack({id:'c18-r-t1-p2',location:{book:18,test:1,part:2},title:'森林管理：价值、选择与保留',focus:'同一树木的不同价值；管理目标决定取舍；识别例外和保留条件；段落、方法匹配、一词句子填空。',
words:`
timber|供建造或加工的木材|Timber is wood used for building or making things.|木材可用于建造或制作物品。|The owner compared selling ___ with keeping the trees standing.|所有者比较售木材和保留活树。
accessibility|便于到达或使用的程度|Accessibility concerns how easily a place or resource can be reached or used.|可达性指到达或使用某地某物有多方便。|The timber estimate also considered ___.|木材估价也考虑是否方便到达取用。
stem|树干；茎|A stem supports the main parts of a plant.|茎干支撑植物主体部分。|A mark on the ___ helped the surveyor identify the same tree later.|树干上的标记方便后来辨认同一棵树。
landowner|土地所有者|A landowner owns an area of land.|土地所有者拥有一片土地。|The ___ explained the goals for managing the woodland.|土地所有者解释林地管理目标。
high-grading|只砍优质树的择伐方式|High-grading removes the most valuable trees and leaves less desirable ones.|只伐优质树的方式留下较不理想的树。|The review distinguished ___ from a plan to improve the whole stand.|评论区分只伐优树与改善整片林分的方案。
legacy|遗留影响；遗产|A legacy is something left by earlier events or actions.|遗留影响是过去事件或行为留下的东西。|The present pattern was partly a ___ of earlier decisions.|现有格局部分是早先决定的遗留影响。
regeneration|再生；新一代植物长出|Regeneration is the growth of new plants that replace older ones.|再生是新植物长出以接替老植物。|The survey checked ___ beneath the larger trees.|调查检查大树下的新生植株。
stand|林分；具有共同特点的一片树|A stand is a group of trees sharing certain features in an area.|林分是一片具有某些共同特点的树。|The map treated the young woodland as a separate ___.|地图把年轻林地作为单独林分。
vulnerable|易受伤害的|Something vulnerable can be harmed relatively easily.|脆弱易损的事物较容易受伤害。|The damaged trees were more ___ to later stress.|受损树更容易受到后续压力伤害。
bioenergy|生物质能源|Bioenergy is energy obtained from biological material.|生物质能源来自生物材料。|The report considered wood for ___ as one possible use.|报告把木材用作生物质能源视为一种可能用途。
combustion|燃烧|Combustion releases energy by burning a material.|燃烧通过烧材料释放能量。|The system produced heat through ___.|系统通过燃烧产热。
gasify|使气化；转化成气体|To gasify a material is to turn it into a gas.|使材料气化就是把它转成气体。|The process could ___ the material before another use.|该工艺可先使材料气化再作他用。
foliage|枝叶；叶子总称|Foliage means the leaves of a plant or group of plants.|枝叶在这里指植物叶子的总称。|The observer recorded changes in ___ after the work.|观察者记录作业后的枝叶变化。
crown|树冠|The crown is the upper spreading part of a tree.|树冠是树木上部展开的部分。|The survey compared the size of each ___.|调查比较各树树冠大小。
tailored to|根据……调整的；适合……的|A plan tailored to a goal is adjusted to fit that goal.|按目标调整的计划适合该目标。|The proposal was ___ the owner’s aims.|提案按所有者目标专门调整。
pathogen|病原体；致病生物|A pathogen is an organism or agent that causes disease.|病原体是引起疾病的生物或其他因子。|The test checked for a ___ rather than judging disease from colour alone.|检测检查病原体，不只看颜色判断疾病。
vigorous|生长旺盛的；健壮的|A vigorous tree is growing strongly.|健壮树生长旺盛。|Some trees remained ___ despite damage nearby.|附近受损，仍有一些树生长旺盛。
salvage|抢救性利用；回收可用部分|To salvage material is to recover what is still useful after damage.|抢救利用是受损后取回仍有用的部分。|The team considered what wood it could ___ after the incident.|团队考虑事故后哪些木材还能抢救利用。
shelterwood|渐伐更新法；逐步采伐让幼树接替|A shelterwood system removes older trees in stages while a new generation becomes established.|渐伐更新逐步移除老树，让新一代树站稳。|The forester explained ___ as a planned sequence, not a single accidental loss.|林务员把渐伐更新解释为计划步骤，而非一次意外损失。
established|已扎根并稳定生长的|Established seedlings have taken root and can continue growing.|已稳定生长的幼苗已扎根，能够继续长。|The older cover was reviewed after the young plants became ___.|幼树站稳后，再评估老树覆盖。
thinning|间伐；减少过密树木|Thinning removes some trees to reduce crowding.|间伐移除部分树以减轻拥挤。|The plan proposed ___ rather than removing the entire woodland.|方案提议间伐，不是砍光林地。
retention|保留|Retention means keeping something rather than removing it.|保留就是留下而不移走。|The plan included ___ of selected material on site.|方案包括把选定材料留在现场。
predator|捕食其他动物的动物|A predator feeds on other animals.|捕食者以别的动物为食。|The survey considered whether a ___ used the old trees.|调查考虑是否有捕食者利用老树。
resilience|受冲击后恢复的能力|Resilience is the ability to cope with disruption and recover.|韧性是应对扰动并恢复的能力。|The aim was to improve the woodland’s ___, not guarantee no future damage.|目标是提高林地恢复力，不保证以后无损。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['stem','landowner','foliage','crown','predator'],
contexts:[{id:'values',title:'What should the woodland provide?',words:['timber','accessibility','stem','landowner','high-grading','legacy','regeneration','stand','vulnerable','foliage','crown','tailored to'],paragraphs:[
'A landowner invited a class to compare possible uses of a woodland. Selling {{timber}} was one aim, but not the only one. The value of a tree depended partly on {{accessibility}}: a useful material might be difficult to reach. A mark on its stem let the class find the same tree again.',
'The forester described {{high-grading}} and its possible {{legacy}}. Taking only the most valuable trees could change what remained. The class examined one {{stand}} and looked for {{regeneration}} below the larger trees, rather than judge the future from today’s sale price alone.',
'They compared foliage and crown size, then asked which trees were {{vulnerable}} to further stress. There was no single answer for every owner. The plan would be {{tailored to}} the site and its goals: in practice, this meant choosing a plan that fitted what the owner wanted the woodland to provide over time.'
]},{id:'decisions',title:'Why not remove everything?',words:['bioenergy','combustion','gasify','pathogen','vigorous','salvage','shelterwood','established','thinning','retention','predator','resilience'],paragraphs:[
'A second meeting considered wood for {{bioenergy}}. One system used {{combustion}} to provide heat; another process could {{gasify}} material. These were different methods, not proof that every piece of wood should be taken away.',
'After signs of a possible {{pathogen}}, the team checked both damaged trees and those still {{vigorous}}. It asked what could be recovered through {{salvage}} and what should stay. A predator might use an old tree even if that tree had little sale value.',
'The forester discussed {{thinning}} and a {{shelterwood}} approach. Before changing the older cover, she checked whether young plants were {{established}}. The plan also included {{retention}} of selected material. Her aim was better {{resilience}}: the woodland should have a better chance of coping with later problems, without pretending that any plan could prevent every future loss.'
]}],
vocab:[
['The estimate included accessibility.\naccessibility 是？','资源到达和取用的方便程度','资源已经出售的价格','树木每年增长的高度','所有者唯一的管理目标','可达性可影响价值，但不是价值本身。'],
['Earlier high-grading shaped what remained.\nhigh-grading 是？','挑走最优质树而留下较差树','为改善整体而选择性移除较差树','只做幼苗普查而不采伐','保留每棵成熟树且不取木材','与改善林分的选择性移除方向相反。'],
['The condition was a legacy of earlier choices.\nlegacy 是？','早先选择留下的影响','当前全部目标的清单','下一步唯一可行的方法','只指刚落下的一片叶','过去行为延续到现在的结果。'],
['The survey examined regeneration.\nregeneration 是？','新一代植株长出和接替','只统计已出售木材','只测现有老树售价','所有树同时停止生长','更新关注新生代。'],
['This stand was particularly crowded.\nstand 是？','具有共同特点的一片树','一件用于坐下的家具','全部木材销售收入','一棵树的最高枝条','这里是林分的专业含义。'],
['The trees were vulnerable to disease.\nvulnerable 表示？','比较容易受疾病伤害','已经证明对所有疾病免疫','必定马上全部死亡','只表示它们刚刚种下','易受害是风险，不是必死结果。'],
['The boiler relied on combustion.\ncombustion 是？','通过燃烧释放能量','把材料仅切成更小块','把树苗搬到另一林地','只吸收水分不改变化学过程','燃烧与物理切割不同。'],
['The process could gasify the material.\ngasify 表示？','使材料转成气体','只把材料堆得更密','确保材料永不变化','把全部气体转成树苗','转化方向是气化。'],
['The plan was tailored to local goals.\ntailored to 表示？','按当地目标专门调整','无视目标使用同一安排','已经达到每个目标','只改变方案名称','适配不同于已实现全部目标。'],
['The remaining trees were vigorous.\nvigorous 表示？','生长健壮有活力','已确定完全没有任何风险','必定比所有别的树更老','只指枝干形状笔直','健壮不保证永久无风险。'],
['The team considered salvage after damage.\nsalvage 表示？','从受损材料中回收可用部分','只取健康树并留下全部受损树','确保任何受损物都没有价值','完全不涉及回收的地名','损后有用部分仍可利用。'],
['A shelterwood approach was proposed.\nshelterwood 是？','分阶段移除老树以让幼树接替的方式','只把最高售价树一次拿走','无论幼苗状态一律立即清空','禁止一切林地更新的制度','有计划的代际接替。'],
['The seedlings were established.\nestablished 表示？','已经扎根并稳定生长','刚在纸上列入未来计划','已经都长成最大树木','已经被移出现场出售','站稳的幼苗，不是成熟树。'],
['Thinning was recommended.\nthinning 是？','移除部分树以减少过密','把整片林地全部砍光','只把树木名称缩写','在每个空隙再加种树','部分疏伐与清空不同。'],
['The plan called for retention of selected material.\nretention 是？','把选定材料保留下来','把所有材料全部带走','只给材料统一估价','任何形式的加工都一样','留而不移，注意selected范围。'],
['The objective was greater resilience.\nresilience 是？','受冲击后应对和恢复的能力','保证永远不发生任何冲击','当前唯一一次销售的价格','只指所有树形状一致','恢复力不是无风险保证。']
],
rewrites:[
['A tree’s value depends partly on the management objective.','The same tree can be assessed differently when the intended use changes.','Every observer must assign an identical value.','The tree’s shape is irrelevant under every objective.','Any difference in valuation proves one observer is dishonest.','目的不同允许价值判断不同。'],
['Removing the best material alone may leave a poorer future stand.','Immediate selection for sale value can reduce the quality of what remains.','Every kind of removal necessarily improves the remaining woodland.','Only low-value material is taken in that practice.','Future condition cannot be affected by present choices.','眼前收入与未来保留状态分开。'],
['A market for low-use wood does not make every such tree expendable.','An available outlet does not justify removing all material with a low sale value.','All low-value material must be removed once a buyer appears.','No low-use wood can ever have an energy use.','Every tree with low sale value is identical in habitat value.','市场用途不覆盖全部生态判断。'],
['A cut can be tailored to a particular owner’s priorities.','The approach can be adjusted rather than applied identically everywhere.','The same sequence must be followed at every site.','All owners have already achieved identical results.','Adjustment removes the need to consider any conditions.','按目标适配，不是统一套用。'],
['Keeping some material may support long-term resilience.','Selective retention can contribute to the woodland’s ability to cope with later stress.','Retaining anything guarantees no future loss.','Every retained piece has the same effect.','Resilience means only present-day income.','some/can不等于全体和保证。'],
['Young plants must be established before the later stage begins.','The next step depends on the new growth having taken hold.','The next step must happen before any new growth.','The new plants have to reach their final mature size first.','The sequence depends only on the sale date.','先决状态是扎根稳定，不是完全长成。']
],
match:{title:'Selecting a management approach',text:'The owner examined the {{0}} of earlier decisions. The plan would {{1}} local goals and check {{2}} beneath the older trees. It proposed {{3}} where crowding was high, but also {{4}} of selected material to strengthen {{5}}.',pairs:[['legacy','lasting effect','遗留效应。'],['be tailored to','be adjusted to suit','适配。'],['regeneration','the growth of a replacement generation','更新。'],['thinning','reducing the number of competing trees','疏伐。'],['retention','keeping rather than taking away','保留。'],['resilience','capacity to recover from disruption','恢复力。']],extras:['a guarantee against every future event','removal of the whole woodland','the same objective for all owners']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "Keeping selected old trees, even where their sale value is low,|can support|functions|that|a timber estimate alone|does not measure.",
    "subject": "Keeping selected old trees, even where their sale value is low,",
    "predicate": "can support",
    "skeleton": "Keeping selected old trees can support functions.",
    "translation": "即使售价低，保留选定老树仍能支持单靠木材估值没有测量的功能。",
    "why": "Keeping短语含插入让步作主语，can support为主句。"
  },
  {
    "kind": "backbone",
    "tokens": "The trees|left after a cut|are|not necessarily|the trees|that|a manager pursuing a different goal|would have chosen.",
    "subject": "The trees",
    "predicate": "are",
    "skeleton": "The trees left after a cut are not necessarily the trees a different manager would have chosen.",
    "translation": "采伐后留下的树，不一定是追求另一目标的管理者会选的树。",
    "why": "are为主句，would have chosen属于后方修饰。"
  },
  {
    "kind": "reference",
    "focus": "they",
    "tokens": "The field guide compared|trees with low timber prices|with recently cut branches, young seedlings and the access roads used by workers.|It warned that a sale price described only one kind of value and that a quick visit could miss less visible functions.|Some of the trees had features useful to wildlife, while the seedlings needed room and light.|For this reason,|they|could still be worth keeping even if a conventional buyer offered very little, and removal decisions required more information than a price list alone.",
    "antecedent": "trees with low timber prices",
    "translation": "指南比较低木材售价的树、砍下枝条、幼苗和道路，指出低售价树仍可能有野生动物功能，值得保留。",
    "why": "even if buyer offered little和前述低售价树呼应。"
  },
  {
    "kind": "reference",
    "focus": "the latter",
    "tokens": "The forester distinguished|taking out trees solely for immediate sale|from|removing selected trees to improve the future stand.|Both involved cutting, and both could generate material that a buyer might use.|The owner had asked about income, but also wanted the woodland to remain useful after the current work was over.|The forester explained that|the latter|was defined by its intended effect on what remained, so a similar-looking pile of wood did not show that the two approaches followed the same management goal.",
    "antecedent": "removing selected trees to improve the future stand.",
    "translation": "两种方法都砍树且能卖材料，但后者按对保留林分的未来改善目标定义。木堆相似不代表目的相同。",
    "why": "latter为后一种改善林分的选择性移除。"
  },
  {
    "kind": "logic",
    "text": "The passage recommends keeping some low-use material, not leaving every tree untouched.",
    "q": "建议范围是什么？",
    "options": [
      "选择性保留某些材料。",
      "永远不得动任何一棵树。",
      "必须全部移除低售价树。",
      "每种材料的生态作用完全相同。"
    ],
    "answer": "选择性保留某些材料。",
    "translation": "建议保留一些低用途材料，不是每棵树都不动。",
    "why": "some不能扩大成all。"
  },
  {
    "kind": "logic",
    "text": "An economic use can encourage a management action without proving that the action is suitable everywhere.",
    "q": "能推出什么？",
    "options": [
      "经济用途可能提供动力，但适用性仍需按地点评估。",
      "有买家就证明每个地点都适用。",
      "经济用途永远不影响管理。",
      "某地不适用就表示所有地点都不适用。"
    ],
    "answer": "经济用途可能提供动力，但适用性仍需按地点评估。",
    "translation": "经济用途可促进管理行动，不证明处处合适。",
    "why": "激励与普遍适宜分开。"
  }
],
evidence:{title:'Two owners read the same woodland survey',paragraphs:[
['A woodland survey was presented to two owners who had different priorities for the same group of trees.','One emphasised near-term sales, while the other asked how the area could support learning visits over many seasons.','The survey explained that|a single price list could not represent every purpose,|so both owners needed to state their aims before choosing an action.'],
['The team examined the condition of trees that would remain after any proposed work.','It did not judge a plan only by the value of the material leaving the site.','The assessment recorded|space available for younger growth|because the later condition of the woodland mattered as well as the current load sold.'],
['A buyer accepted some material that conventional timber customers did not want.','This created an additional possible use without deciding whether every available piece should be removed.','The forester kept|selected trees with a useful role on site|outside the sale list, even where their immediate timber price was low.'],
['The work schedule depended on a field check rather than a date chosen solely for convenience.','Young growth needed to be sufficiently secure before the older cover was changed.','The schedule therefore used|evidence that replacement growth had taken hold|as a condition, not simply the arrival of a contractor.'],
['The final plan separated proposed actions from the outcomes they were intended to encourage.','It asked for later observations to see whether the remaining area developed as expected after the work.','The owners agreed to|review the condition of what remained|rather than treat a completed sale as proof that every management objective had been achieved.']
],questions:[
['How did the two owners differ?',0,1,'','一人重近期销售，一人重长期学习利用。'],['What did the team examine beyond material sold?',1,0,'','考察保留树状态。'],['Why was one price list insufficient?',0,2,'a single price list could not represent every purpose,','价值随目的而异。'],['Which future resource was measured?',1,2,'space available for younger growth','年轻更新所需空间。'],['What was a condition for changing older cover?',3,2,'evidence that replacement growth had taken hold','更新站稳后再动老覆盖。'],['What follow-up did the owners agree to?',4,2,'review the condition of what remained','检查留下林分，不把卖出即成功。']
]},
specials:[
{kind:'matching',title:'段落信息匹配',passage:{title:'A woodland decision record',paragraphs:[
{label:'A',text:'The assessor listed possible uses before assigning a value to the trees. A group could be important to a buyer, a school visitor or an owner seeking shade for a path. No single figure could stand for all those interests, and changing the goal could change the assessment.'},
{label:'B',text:'An earlier owner had repeatedly sold the most attractive material. The present survey therefore started with what those choices had left, rather than assume the current pattern was entirely natural. The remaining trees showed why past sales could affect later options.'},
{label:'C',text:'The work team compared a market outlet with the on-site uses of material. The fact that something could be sold did not settle whether it should be removed. A separate retention list made the exceptions visible before loading began.'},
{label:'D',text:'Later checks were planned to compare intended changes with actual ones. A completed operation would show that work had happened, not necessarily that the woodland had improved. The owners wanted observations of the remaining trees as well as a receipt.'}
]},choices:['A','B','C','D'].map(id=>({id,label:id})),rows:[['A reason not to use one figure as a complete measure of worth','A','A不同用途不同价值。'],['The influence of earlier decisions on present choices','B','B先前择伐遗留。'],['A document making planned exceptions clear','C','C保留名单。'],['A distinction between completing work and achieving its aim','D','D操作完成不等于效果达标。'],['An argument against treating a buyer’s interest as sufficient for removal','C','C可卖不等于该移。']]},
{kind:'matching',title:'管理方案匹配',passage:{title:'Three original management proposals',paragraphs:[
{label:'A · Space plan',text:'This proposal reduces crowding around a selected group of trees. The aim is to improve the conditions of the trees remaining there, not to maximise the value of the current load. Material taken away is a consequence of that decision.'},
{label:'B · Recovery plan',text:'This proposal begins after local damage has been assessed. It identifies material that can still be used while keeping unaffected features needed on the site. It does not describe the whole area as worthless simply because one part has suffered.'},
{label:'C · Transition plan',text:'This proposal makes later work conditional on young growth having taken hold. Older cover is changed in stages, with checks between them. Timing follows the condition of the replacement growth, not merely a fixed date in a sales contract.'}
]},choices:[{id:'A',label:'Space plan'},{id:'B',label:'Recovery plan'},{id:'C',label:'Transition plan'}],rows:[['Work follows damage and seeks to recover usable material.','B','B损后回收。'],['The purpose is to reduce competition around retained trees.','A','A减拥挤。'],['Progress depends on checks of the next generation.','C','C更新状态控制步骤。']]},
{kind:'notes',title:'一词句子填空',passage:{title:'Before the field team starts',paragraphs:[
'The coordinator gave each pair a map showing the survey boundary. A coloured ribbon identified a tree selected for closer examination; it did not grant permission to cut it. Observers wrote notes in a folder and checked unclear entries together before leaving the site.',
'A whistle was available for contacting another pair nearby when visibility was poor. Equipment was kept under a cover during rain. At the end of the visit, a register confirmed that every observer had returned. These arrangements helped organise the survey without determining its eventual management recommendation.'
]},rows:[['Each pair received a ___ showing the boundary.','map','边界地图。'],['A ___ identified a tree for closer examination.','ribbon','彩带只标记待查。'],['Notes were kept in a ___.','folder','文件夹。'],['Pairs could use a ___ to contact others nearby.','whistle','哨子联系。'],['Equipment was protected from rain by a ___.','cover','罩子防雨。']]}
]});
