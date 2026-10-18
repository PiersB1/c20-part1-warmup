RRReadPack({id:'c19-r-t1-p1',location:{book:19,test:1,part:1},title:'运动器材的调整与性能',focus:'细微修改、个体需要、材料取舍；归因与证据；TRUE/FALSE/NOT GIVEN、一词笔记。',
words:`
customise|按个人需要改制|A maker can customise equipment for a particular user.|制作者能按特定使用者的需要改制设备。|The shop will ___ the fit rather than sell every customer the same setting.|商店会按人调整适配，不给每位顾客相同设置。
subtle|细微、不易察觉的|A subtle change may matter even if it is hard to see.|细微变化即使难看出，也可能重要。|The difference was ___, so the team measured it carefully.|差别很细微，所以团队仔细测量。
publicise|广泛宣传；公开报道|To publicise a result is to make it widely known.|宣传结果是让它广为人知。|The club decided to ___ the event after confirming the date.|俱乐部确定日期后决定宣传活动。
elite|顶尖群体；精英|Elite athletes compete at the highest levels.|顶尖运动员在最高水平赛事竞争。|A product used by the ___ is not necessarily suitable for a beginner.|顶尖群体使用的产品不一定适合新手。
specification|规格；具体要求|A specification lists the required size and performance.|规格列明所需尺寸和性能。|Check each ___ before making the replacement part.|制作替换件前，检查每项具体规格。
manufacturer|制造商|A manufacturer produces goods for sale.|制造商生产出售的商品。|The ___ supplied instructions for adjusting the device.|制造商提供调整设备的说明。
dense|密集的|A dense pattern has little space between its parts.|密集图案的组成部分间空隙小。|The weave was too ___ to let much air through.|织纹太密，难让空气大量通过。
competitive advantage|竞争优势|A competitive advantage helps someone perform better than rivals.|竞争优势帮助人比对手表现更好。|A small improvement may provide a ___ without guaranteeing victory.|小改进可能带来竞争优势，但不保证获胜。
amateur|业余的；非职业的|An amateur takes part without making it a profession.|业余参加者不以此为职业。|The event welcomes ___ players as well as professionals.|活动既欢迎业余选手，也欢迎职业选手。
ban|禁止|A ban prevents something from being used or done.|禁令阻止使用或实施某物。|The club may ___ equipment that creates an unfair risk.|俱乐部可能禁止带来不公平风险的器材。
significance|重要性；意义|The significance of a small change may only appear during use.|小改动的重要性可能使用中才显现。|The study asks about the ___ of the difference, not only its existence.|研究问差别有多重要，不只问是否存在。
tension|拉力；绷紧程度|Tension describes how tightly a line is stretched.|张力表示绳线绷得多紧。|Changing the ___ alters how the surface responds.|改变绷紧程度会改变表面的反应。
climatic|与气候条件有关的|Climatic conditions include temperature and humidity.|气候条件包括温度和湿度。|The test considers ___ differences between venues.|测试考虑场地间气候条件差异。
durable|耐用的|A durable material can resist wear over time.|耐用材料能长期抗磨损。|The cover must be ___ enough for repeated use.|护套必须足够耐用，能反复使用。
stiff|僵硬的；不易弯曲的|A stiff strip does not bend easily.|硬条不易弯曲。|The first sample was too ___ for the intended movement.|第一个样品太硬，不适合预期动作。
additive|为改变性能而加入的成分|An additive is a substance mixed in to change a material.|添加剂是混入以改变材料的物质。|A small amount of ___ improved the flexibility.|少量添加成分改善了柔韧性。
hybrid|由不同类型结合而成的|A hybrid design combines different types or materials.|混合设计结合不同类型或材料。|The ___ version uses one material in the centre and another at the edge.|混合版本中心一种材料、边缘另一种。
attribute|把……归因于|We should not attribute a result to one change without checking alternatives.|未查其他解释前，不应把结果归因于一项改变。|The report did not ___ the whole improvement ___ the new part.|报告没有把全部改善都归因于新部件。
handle|手柄；握持部位|The handle is the part held by the user.|手柄是使用者握住的部分。|A different ___ may feel more comfortable without changing the whole frame.|不同手柄可能更舒服，而不改变整个框架。
mould|塑造成形；按模具制作|The maker can mould a soft material into a chosen shape.|制作者能把软材料塑成所选形状。|The process will ___ the surface to match the user's hand.|工艺会把表面塑成适合使用者手形的形状。
anticipate|预料；预计|We anticipate extra wear at the point of contact.|我们预计接触点会有额外磨损。|Designers should ___ how repeated use may affect the part.|设计者应预料反复使用可能如何影响部件。
adjustment|调整；小改动|An adjustment changes one setting without replacing everything.|调整改变某个设置，不替换全部。|A minor ___ made the tool easier to control.|小调整让工具更容易控制。
primary|最主要的|The primary aim is the main purpose.|首要目标是最主要目的。|Cost was a concern, but safety remained the ___ consideration.|费用是问题，但安全仍是首要考虑。
readily available|容易买到或取得的|A readily available part can be obtained without a special search.|容易取得的部件无需专门寻找即可获得。|The test used ___ materials instead of rare custom parts.|测试使用易得材料，不用罕见定制部件。
`.trim().split('\n').map(r=>r.split('|')).map(r=>r[0]==='attribute'?[r[0],r[1],r[2],r[3],'We should not ___ the whole improvement to a single change.','我们不应把全部改善归因于单个变化。']:r),
omitted:['amateur','ban','manufacturer','handle','primary'],
contexts:[
{id:'user',title:'Finding a setting that suits one player',words:['customise','subtle','publicise','elite','specification','manufacturer','competitive advantage','amateur','ban','significance','primary','adjustment'],paragraphs:[
 'An amateur player visited a repair shop after struggling with a new piece of equipment. The manufacturer’s standard setting was not necessarily the best one for him. The maker offered to {{customise}} the fit, beginning with a small {{adjustment}} rather than replacing everything.',
 'Each {{specification}} was written down before testing. A {{subtle}} change could have real {{significance}} even if a visitor could hardly see it. The player understood that a possible {{competitive advantage}} did not guarantee success. What worked for the {{elite}} might not suit his experience or movement.',
 'Safety remained the primary concern, and the club could ban an unsafe modification. The shop did not {{publicise}} a dramatic result after one successful attempt. It wanted the player to try the setting over several sessions before making a stronger claim.'
]},
{id:'materials',title:'Comparing two materials fairly',words:['dense','tension','climatic','durable','stiff','additive','hybrid','attribute','handle','mould','anticipate','readily available'],paragraphs:[
 'Our design class compared two covers made from {{readily available}} materials. One was more {{durable}} but also more {{stiff}}. A small {{additive}} might improve flexibility, though it could affect other properties. A {{hybrid}} sample combined different materials rather than assume one had to do every job.',
 'We kept the {{tension}} the same and noted {{climatic}} conditions such as humidity. A more {{dense}} weave changed the surface too. With several differences present, we could not simply {{attribute}} the whole change in performance to just one of them. We needed a comparison that separated the factors.',
 'The maker then showed how to {{mould}} a soft layer around a handle. We tried to {{anticipate}} wear after repeated use instead of judging only the first touch. The best-looking sample was not automatically the one that would remain comfortable for the longest time.'
]}],
vocab:[
 ['The frame was customised for one user.\ncustomised 是？','按个人需要改制','只换了包装名称','保证所有人都适用','未经任何检查直接出售','个性化不是普遍保证。'],
 ['A subtle change went almost unnoticed.\nsubtle 是？','不易察觉的','必定没有影响的','永久无法测量的','已经完全显眼的','难察觉不等于无影响。'],
 ['The supplier publicised the new range widely.\npublicised 是？','广泛宣传','只私下测试','全部撤回','按人定制','宣传不等于定制或验证。'],
 ['Elite equipment was not sold in the ordinary shop range.\nelite 是？','顶尖群体的','只因为便宜的','专门供儿童的','完全未经改动的','群体水平而非价格或年龄。'],
 ['The specification required a narrow edge.\nspecification 是？','具体规格要求','全部制作成本','营销承诺的结果','一次比赛的排名','尺寸要求属于规格。'],
 ['The denser pattern left less space between lines.\ndenser 是？','更密集的','每根线必然更粗的','总重量必定更轻的','接触更少的','间隔密度与线粗、重量不必相同。'],
 ['The modification offered a competitive advantage but not certain victory.\ncompetitive advantage 是？','相对对手的优势','必然获胜的证明','所有选手都获同样收益','完全没有规则限制','优势不保证胜利。'],
 ['The primary aim was control rather than appearance.\nprimary 是？','首要的','唯一可能存在的','最后才出现的','没有被说明的','主要不等于唯一。'],
 ['Tension was changed without replacing the material.\ntension 是？','绷紧程度','材料种类','整件物品价格','手柄名称','设置变化与材料替换不同。'],
 ['Climatic conditions varied across venues.\nclimatic 是？','与气候有关','与比赛规则有关','与品牌名字有关','仅指运动员心情','温湿度属环境气候条件。'],
 ['The material was durable but too stiff.\ndurable 是？','耐用的','容易弯曲的','最便宜的','接触最舒适的','耐磨与柔软是不同性质。'],
 ['The additive altered how the material bent.\nadditive 是？','加入以改变性能的成分','已经完成的外包装','产品售后规则','一种测试排名','添加成分参与材料性能变化。'],
 ['A hybrid design used two types together.\nhybrid 是？','结合不同类型的','每部分完全相同的','只能使用一种材料的','完全没有结构的','混合需要结合差异。'],
 ['The maker attributed only part of the improvement to the new surface.\nattributed…to 是？','把部分结果归因于','证明全部变化都由它造成','否定任何可能影响','只记录表面颜色','only part限制归因范围。'],
 ['The soft material was moulded to a user’s hand.\nmoulded 是？','塑造成适合的形状','仅按原样储存','全部熔成无法使用状态','只在纸上改名称','塑形与不改变实体不同。'],
 ['The component was readily available from several local suppliers.\nreadily available 是？','容易取得','每个供应商都免费','只能私人订制','已经用完再也买不到','易获得不等于免费。']
],
rewrites:[
 ['A slight adjustment may matter when performance differences are small.','A minor change can be significant in a closely matched contest.','Small changes are always irrelevant.','Every adjustment guarantees victory.','Performance depends only on equipment.','小改动可重要，不是必胜或唯一因素。'],
 ['The professional version was not identical to the retail model.','The version used by professionals differed from the ordinary product for sale.','Every customer bought exactly the professional version.','Professionals never used equipment.','The retail model was proved unsafe.','不相同不能推出零售品不安全。'],
 ['A more durable material was not necessarily more comfortable.','Greater resistance to wear did not guarantee a better feel.','Durability always made it painful to use.','Comfort and durability are identical measurements.','A comfortable material could never last long.','不保证舒服不等于必不舒服。'],
 ['The effect could not be attributed entirely to one modification.','A single change was not established as the complete explanation.','No modification had any effect.','The one change was proved to explain everything.','The result was certainly fabricated.','否定完全归因不否定任何影响。'],
 ['The setting varied with conditions rather than remaining fixed.','Different circumstances led to changes in the setting.','The setting never changed under any conditions.','Conditions were irrelevant to every user.','The material was replaced after every attempt.','设置变化不自动等于材料替换。'],
 ['The design combined two materials instead of choosing one exclusively.','It used a hybrid arrangement rather than a single material throughout.','Both materials had identical properties.','No material was used.','One material was removed before the design was tested.','结合不等于性能相同。']
],
match:{title:'Choosing a trial design',text:'The maker wrote a {{0}} before altering the tool. One {{1}} looked minor, but its {{2}} required testing. A {{3}} version combined two materials. They were {{4}}, so replacements could be obtained easily. The maker asked whether the design would remain {{5}} after repeated use.',pairs:[['specification','set of detailed requirements','规格。'],['adjustment','small alteration','调整。'],['significance','importance','重要性。'],['hybrid','mixed-type','不同类型结合。'],['readily available','easy to obtain','易取得。'],['durable','resistant to wear','耐用。']],extras:['guaranteed to win','impossible to measure','identical in every condition']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "The new sample|lasted|longer|in the wear test,|while|its greater stiffness|made|it|less comfortable|for|several users|who|preferred|the softer version.",
    "subject": "The new sample",
    "predicate": "lasted",
    "skeleton": "The new sample lasted longer in the wear test.",
    "translation": "新样品耐磨测试更持久，但更高硬度让几个偏好软版本的人感觉不舒服。",
    "why": "首主句sample lasted；while分句说明另一性质代价。"
  },
  {
    "kind": "backbone",
    "tokens": "The technician|changed|one setting at a time|so that|the effect of each adjustment|could be compared|with|the unchanged original version.",
    "subject": "The technician",
    "predicate": "changed",
    "skeleton": "The technician changed one setting at a time.",
    "translation": "技术员一次改一项设置，以把各项调整效果与未改原版比较。",
    "why": "changed为主句；could be compared在目的从句。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The technician placed|an adjustable clamp|on the test bench beside the sample.|A digital display showed|the sensor reading,|while|a ruler|was used to check the starting length of each strip.|An assistant recorded the room temperature and labelled the containers holding spare material.|Although the display supplied measurements and the ruler helped set the initial length,|it|held the strip at a chosen tightness while allowing the technician to change that setting without replacing the material itself.",
    "antecedent": "an adjustable clamp",
    "translation": "技术员把可调夹具放在样品旁，显示器给传感读数，尺子量初始长度，助手记温度。能固定并改变绷紧程度而不换材料的是可调夹具。",
    "why": "held tightness与clamp对应，不是显示器或尺子。"
  },
  {
    "kind": "reference",
    "focus": "the former",
    "tokens": "The second trial compared|a flexible cover that wore quickly|with|a harder cover that remained intact for longer.|Some learners preferred the soft initial feel, while others valued the stability of the harder version during repeated attempts.|The technician kept the shape, starting tightness and room conditions the same, so those features did not explain the difference.|When later wear was considered alongside comfort,|the former|needed replacing sooner despite being preferred by several users at the first session; the report therefore avoided describing one early preference as evidence of greater durability.",
    "antecedent": "a flexible cover that wore quickly",
    "translation": "测试比较易磨损软罩与较硬耐用罩，控制形状、张力和环境。former指前者软罩，初期更受部分人喜欢但更快需换。",
    "why": "former按对比顺序指前项，despite区分初始舒适与耐用。"
  },
  {
    "kind": "logic",
    "text": "A version suited to a leading athlete may not be the best choice for a novice with a different style.",
    "q": "哪项符合？",
    "options": [
      "顶尖运动员适用不保证新手同样最佳。",
      "每位新手必须用顶尖运动员版本。",
      "顶尖运动员器材对任何人都无用。",
      "风格完全不影响适配。"
    ],
    "answer": "顶尖运动员适用不保证新手同样最佳。",
    "translation": "适合顶尖选手的版本未必最适合风格不同的新手。",
    "why": "对象条件不同，不能普遍推广。"
  },
  {
    "kind": "logic",
    "text": "Changing two properties at once may improve the result while leaving their individual contributions uncertain.",
    "q": "可以确定与不能确定的分别是什么？",
    "options": [
      "整体结果可改善，但每项贡献仍可能不清楚。",
      "每项贡献必定完全已知。",
      "整体一定没有改善。",
      "两项变化必定互相抵消。"
    ],
    "answer": "整体结果可改善，但每项贡献仍可能不清楚。",
    "translation": "同时改两项可改善结果，却仍不能分清各自贡献。",
    "why": "结果与归因分开。"
  }
],
evidence:{
  "title": "Testing a hand-held practice tool",
  "paragraphs": [
    [
      "A training centre compared two versions of a small hand-held tool.",
      "Its purpose was|to find a setting suited to new learners,|not to reproduce the preferences of the strongest experienced user.",
      "The team recorded|each participant’s usual way of holding the tool|before the trial."
    ],
    [
      "Both versions had the same outer dimensions but different surface materials.",
      "The centre kept the task and the initial tightness the same so that the comparison would not change several factors at once.",
      "A familiar appearance therefore did not mean the samples had identical properties."
    ],
    [
      "Some learners preferred the softer version, while others found it difficult to control.",
      "The report recorded|the range of responses|rather than selecting only the group that liked the new material.",
      "It avoided describing a preference expressed by a few learners as a universal improvement."
    ],
    [
      "The first test took place during one afternoon.",
      "A later session checked whether the material still felt the same after repeated use.",
      "Staff recorded wear|alongside comments on comfort,|because a pleasant first touch did not establish durability."
    ],
    [
      "The final recommendation allowed individual adjustment within safe limits.",
      "It did not attribute every change in performance|to the surface material alone,|since learners also gained practice during the sessions.",
      "The centre regarded the result as useful for choosing a trial setting rather than a guarantee of success for every user."
    ]
  ],
  "questions": [
    [
      "What user group was the comparison designed to help?",
      0,
      1,
      "",
      "新学习者适配，不是复制最强熟手偏好。"
    ],
    [
      "Why were task and tightness kept constant?",
      1,
      1,
      "",
      "避免一次改变多个因素。"
    ],
    [
      "Which background habit was noted before testing?",
      0,
      2,
      "each participant’s usual way of holding the tool",
      "试验前记录的是原有握持方式，不是再次询问比较对象。"
    ],
    [
      "What kept the report from favouring only positive reactions?",
      2,
      1,
      "the range of responses",
      "保留全部反应范围。"
    ],
    [
      "What was considered together with wear?",
      3,
      2,
      "alongside comments on comfort,",
      "舒适与耐用分开记录。"
    ],
    [
      "What single-cause interpretation did the report avoid?",
      4,
      1,
      "to the surface material alone,",
      "练习效应也可能存在，不能全归材料。"
    ]
  ]
},
specials:[
 {kind:'judgement',rows:[
 ['The centre altered the surface while keeping the outer dimensions constant.','The two versions differed in both surface and outer size.','FALSE','尺寸相同，与both尺寸不同冲突。','表面不同，外部尺寸保持相同。'],
 ['The recommendation permitted users to choose a setting within a defined safe range.','The recommendation allowed some individual adjustment.','TRUE','允许安全范围内选择。','建议在界定安全范围内个人选择设置。'],
 ['The shop supplied a written specification and a short guide to care. Customers could ask staff to explain either document.','Most customers read the care guide before the specification.','NOT GIVEN','有文件和可询问，不说明阅读顺序统计。','商店提供规格和保养指南，顾客可请员工解释。'],
 ['The report said the first short session could not establish how long the surface would last.','The short first session proved the material’s long-term durability.','FALSE','明确不能确定寿命。','初次短测试不能证明长久耐用。'],
 ['The later comparison used equal starting lengths and the same room conditions for both samples.','Several test conditions were held constant across the samples.','TRUE','相同长度和室内条件直接支持。','后续对比控制相同长度和室内条件。'],
 ['Several participants asked for a softer setting, while others kept the original version. Staff recorded both choices.','The participants who changed settings were all younger than those who did not.','NOT GIVEN','偏好记录不说明年龄比较。','部分人要更软，另一些保留原版，两者都记录。']
 ]},
 {kind:'notes',title:'一词笔记填空',passage:{title:'Recording an equipment trial',paragraphs:['Each trial item was placed in a case marked with a letter, so reviewers could compare versions without seeing a brand name. A gauge measured the force needed to move the surface. The starting position was marked with a line, and a cloth kept the table free of loose dust.', 'After each attempt, comments went into a log. The samples were kept in a cupboard between sessions, away from the window. A spare strap remained unused until a repair was necessary. The summary reported changes in measured response separately from personal preference.']},rows:[
 ['Each item arrived in a lettered ___.','case','字母标记盒子隐藏品牌。'],['Force was measured with a ___.','gauge','测力工具是gauge。'],['A ___ marked the starting position.','line','起始位置用线。'],['The table was cleaned with a ___.','cloth','布清除浮尘。'],['Comments were entered in a ___.','log','测试后记日志。'],['Samples were stored in a ___ between sessions.','cupboard','放橱柜避开窗边。']
 ]}
]});
