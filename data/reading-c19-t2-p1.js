RRReadPack({id:'c19-r-t2-p1',location:{book:19,test:2,part:1},title:'工业转型、生产效率与劳动生活',focus:'先后与因果；总体产出和不同群体生活；技术扩散、反对与结果；一词笔记及信息判断。',
words:`
agrarian|以农业为主的|An agrarian economy depends mainly on farming.|农业经济主要依赖耕作。|The village was largely ___ before new industries arrived.|新行业到来前，村庄主要依靠农业。
industrialised|工业化的|An industrialised area has much production organised around industry.|工业化地区有大量围绕工业组织的生产。|The region became more ___ as factories expanded.|工厂扩张后，这个地区工业化程度更高。
mass quantities|大量；大批量|Machines can make some goods in mass quantities.|机器能大批量制造某些商品。|The product was made in ___ rather than one item at a time.|产品大批量制造，而非逐件制作。
efficiency|效率；投入产出效率|Efficiency compares useful output with the resources used.|效率比较有用产出与资源投入。|A larger total alone does not prove higher ___.|总量更大本身不能证明效率更高。
rotary|旋转的|Rotary movement turns around a centre.|旋转运动围绕中心转动。|The mechanism changed a back-and-forth motion into ___ motion.|机构把往复运动改为旋转运动。
cottage industry|家庭或小工坊生产的行业|A cottage industry makes goods in homes or small workshops.|家庭手工业在家或小工坊生产商品。|The trade began as a ___ rather than a large factory business.|这个行业最初是家庭手工业，而非大厂经营。
mechanised|使用机器作业的|A mechanised process uses machines for work once done by hand.|机械化流程使用机器完成以前手工做的工作。|The workshop became partly ___ without removing every manual task.|工坊部分机械化，并没有取消每项手工任务。
adopt|采用|A firm may adopt a method already used elsewhere.|公司可能采用别处已使用的方法。|The team chose to ___ the technique after a small trial.|小试验后，团队选择采用该技术。
smelt|冶炼；从矿石中炼取金属|To smelt is to heat ore to obtain metal.|冶炼是加热矿石以取得金属。|The furnace was used to ___ material rather than shape finished tools.|炉子用于冶炼材料，不是给成品工具塑形。
coke|焦炭|Coke is a fuel produced by heating coal with little air.|焦炭是煤在少量空气条件下加热得到的燃料。|The guide distinguished ___ from ordinary charcoal.|向导区分焦炭与普通木炭。
textile|纺织品；纺织业的|Textile production includes making cloth.|纺织生产包括制造布料。|The museum compares ___ work with metalworking.|博物馆比较纺织业与金属加工。
yarn|纱线|Yarn is a long strand used to make cloth.|纱线是用于织布的长线。|The worker checked the ___ before weaving.|工人织布前检查纱线。
patent|申请专利；专利|A patent gives legal protection to an invention for a period.|专利在一段时间内给发明法律保护。|The inventor sought a ___ before sharing the full design commercially.|发明者商业公开全部设计前寻求专利。
signalling|传递信号的系统或活动|Signalling helps people send instructions or warnings.|信号系统帮助传递指令或警示。|The review examined ___ as well as vehicle speed.|评估既检查信号系统，也检查车速。
urbanisation|城市化；人口和活动向城市集中|Urbanisation increases the share of people living in towns and cities.|城市化增加居住于城镇人口的比例。|Rapid ___ created demand for housing and water services.|快速城市化带来住房与供水服务需求。
sanitation|环境卫生；排污和卫生设施|Sanitation includes safe removal of waste and clean living conditions.|卫生条件包括安全排污与洁净生活环境。|The report considered ___ rather than factory output alone.|报告考虑卫生条件，不只看工厂产出。
economic output|经济产出|Economic output measures goods and services produced.|经济产出衡量生产的商品与服务。|A rise in ___ need not be shared equally by all households.|经济产出增加未必由所有家庭均等分享。
livelihood|生计|A livelihood is a way of earning enough to live.|生计是谋生的方式。|A change in production threatened the worker's ___.|生产变化威胁工人生计。
unskilled|不需要专门技能的；缺少专门技能的|An unskilled role requires little specialist training.|非熟练岗位不需很多专业培训。|The employer replaced a specialised task with several ___ roles.|雇主把一项专门任务换成几个不需专门技能的岗位。
apprentice|学徒|An apprentice learns a trade while working with skilled people.|学徒与熟练者一起工作学习行业技能。|The ___ practised under supervision before working alone.|学徒独立工作前，在指导下练习。
uprising|起义；反抗行动|An uprising is organised resistance against an authority.|反抗行动是针对当局的有组织抵抗。|The account asks what led to the ___, not only how it ended.|叙述追问反抗的起因，不只问结局。
unrest|社会动荡；不满骚动|Unrest involves public dissatisfaction and disturbance.|社会动荡包括公众不满及骚动。|Poor conditions contributed to ___ in several towns.|恶劣条件造成几个城镇的不满骚动。
resistance|抵抗；反对|Resistance is opposition to a change or action.|抵抗是反对某项变化或行动。|The proposal met ___ from people whose work would be affected.|提议遭受工作将受影响人群反对。
vanish|消失；不复存在|A visible pattern may vanish when conditions change.|条件改变时，可见模式可能消失。|The records do not show that all opposition suddenly ___.|记录未显示所有反对突然消失。
`.trim().split('\n').map(r=>r.split('|')).map(r=>r[0]==='vanish'?[...r.slice(0,4),'A temporary improvement does not make every problem ___.','暂时改善并不使每个问题消失。']:r),
omitted:['adopt','textile','yarn','apprentice','vanish'],
contexts:[
{id:'process',title:'From a small workshop to a larger works',words:['agrarian','industrialised','mass quantities','efficiency','rotary','cottage industry','mechanised','adopt','smelt','coke','textile','yarn'],paragraphs:[
 'Our class compared an {{agrarian}} village with a more {{industrialised}} town. In the village, a {{cottage industry}} produced cloth in homes and small rooms. Workers handled yarn and completed different textile tasks. In the town, some products were made in {{mass quantities}}.',
 'The change was not simply from no tools to machines. A partly {{mechanised}} process could still depend on hand finishing. One model showed {{rotary}} movement; another explained equipment used to {{smelt}} metal. A label distinguished {{coke}} from other fuels rather than treating every black material as the same.',
 'Businesses could adopt a new method, but the class asked about {{efficiency}} as well as total production. More goods might require more hours or resources. We needed to know the input before claiming that a larger output meant a more efficient process.'
]},
{id:'people',title:'What changed for the people?',words:['patent','signalling','urbanisation','sanitation','economic output','livelihood','unskilled','apprentice','uprising','unrest','resistance','vanish'],paragraphs:[
 'A second display connected invention with daily life. A {{patent}} protected a design, while improved {{signalling}} could help coordinate transport. Rapid {{urbanisation}} brought more people into towns, where housing and {{sanitation}} became important questions. An apprentice might find new work, but others feared for their {{livelihood}}.',
 'A rise in {{economic output}} did not show that every worker was better off. Some specialised work became {{unskilled}} employment; other skills remained useful. Such {{resistance}} could reflect concern about hours, pay or control, not only a dislike of any new machine.',
 'The exhibition explained {{unrest}} and one imagined {{uprising}} without treating all opposition as the same. A protest could vanish from one set of records while its underlying concerns continued. To understand change, we had to ask who benefited, who bore the cost and what evidence supported each claim.'
].map(s=>s.replace('{{Urbanisation}}','{{urbanisation}}').replace('{{Resistance}}','{{resistance}}'))}],
vocab:[
 ['An agrarian society became more urban and industrial.\nagrarian 是？','主要以农业为基础的','完全没有任何贸易的','只在现代存在的','每个人收入都相同的','农业为主不排除贸易。'],
 ['Goods were produced in mass quantities.\nmass quantities 是？','大批量','完全按每人不同要求逐件定制','仅生产试验一件','只作理论设计不制造','大量与单件定制不同。'],
 ['Output rose, but efficiency could not be assessed without inputs.\nefficiency 是？','资源投入与有用产出的效率','只看总产量','所有工人的满意度','所有产品的市场价格','需要投入才能判断效率。'],
 ['The mechanism produced rotary motion.\nrotary 是？','围绕中心旋转的','只沿直线往返的','完全不动的','只发生在运输途中的','旋转和往复不同。'],
 ['The earlier trade was a cottage industry.\ncottage industry 是？','在家和小工坊生产的行业','所有工人都住在大厂的制度','只供游客参观的建筑','完全没有技术的活动','生产组织规模不同，不等于无技能。'],
 ['Production became mechanised, although hand finishing continued.\nmechanised 是？','引入机器作业','所有人力必定消失','只换了所有者','完全停止生产','机械化可与手工共存。'],
 ['The firm adopted a method developed elsewhere.\nadopted 是？','采用了','一定首次发明了','公开反对了','完全不再使用','采用不等于发明。'],
 ['The furnace was used to smelt ore.\nsmelt 是？','冶炼取得金属','只把成品上色','把布料织成线','单纯给器物测年代','矿石到金属的处理。'],
 ['A patent preceded wider commercial use.\npatent 是？','发明的法律保护','所有用户的满意保证','免费使用的永久承诺','一项公开反对活动','专利不是性能保证。'],
 ['Urbanisation accelerated with the growth of factories.\nurbanisation 是？','人口和活动向城镇集中','所有城镇被弃用','农业完全消失','每个居民变成厂主','城市化不必全称消灭农业。'],
 ['The city faced sanitation problems.\nsanitation 是？','环境卫生和排污条件','只指交通速度','专指工厂利润','仅指学校数量','卫生条件与产值不同。'],
 ['Economic output improved while some households struggled.\neconomic output 是？','经济生产的商品和服务量','每个家庭已获得的收益','所有工资的公平分配','全部人的健康水平','总产出不等于每户生活改善。'],
 ['Skilled workers feared the loss of their livelihood.\nlivelihood 是？','谋生方式','任何短期兴趣','工厂的全部机器','城市边界','担忧收入来源和工作。'],
 ['A task became unskilled after its steps were simplified.\nunskilled 是？','不需很多专门训练的','从事者完全没有任何能力的','完全不需要人参与的','每人都喜欢的','岗位技能要求低不等于人无能力或自动化。'],
 ['The plan met resistance from workers.\nresistance 是？','反对或抵抗','已经全面支持','无任何意见','只记录名字','反对不说明每个人理由相同。'],
 ['The unrest reached several towns.\nunrest 是？','不满骚动','所有生产完全终结','平稳无变化','一次必然成功的发明','社会不稳不等于所有活动结束。']
],
rewrites:[
 ['A new method spread after being improved, rather than appearing fully developed at once.','Development preceded wider adoption.','Every use came before any improvement.','The method was perfect from its first version.','No firm adopted the improved version.','改进和传播顺序保留。'],
 ['An increase in national output did not benefit every group equally.','Aggregate growth coexisted with unequal gains.','Every household received the same benefit.','There was no growth in any production.','Unequal gains prove no output was measured.','总体与分配不能混同。'],
 ['Some hand work survived within mechanised production.','Machines did not replace every manual task.','Every hand process had already disappeared.','No machine was used at all.','Every manual task was identical to its earlier form.','部分延续不等于完全不变。'],
 ['The new role required less specialist training.','The task could be learnt without the same level of specialised preparation.','The workers had no abilities of any kind.','Every task required more training than before.','The role had ceased to exist.','技能要求下降不贬低人的全部能力。'],
 ['Faster transport increased the need for effective coordination.','As journeys became quicker, reliable signalling became more important.','Speed made coordination unnecessary.','Coordination was invented only after all transport stopped.','Every faster journey was guaranteed safe.','需求上升不是安全保证。'],
 ['Opposition reflected threatened livelihoods as well as dangerous conditions.','Concerns about income and safety both contributed to resistance.','Workers opposed every change for one identical reason.','No one feared losing work.','Conditions were known to be harmless.','多重原因保留，不单因解释。']
],
match:{title:'Reading a history of production',text:'The chapter follows a {{0}} becoming partly {{1}}. It compares output with inputs to discuss {{2}}. The city’s {{3}} brought questions about housing and {{4}}. Workers’ {{5}} is explained through several concerns rather than a simple dislike of machines.',pairs:[['cottage industry','small-scale home or workshop production','家庭手工业。'],['mechanised','machine-operated','使用机器作业。'],['efficiency','useful output relative to resources','投入产出效率。'],['urbanisation','growth of urban settlement','城市化。'],['sanitation','safe waste removal and hygiene','卫生排污。'],['resistance','opposition','反对。']],extras:['equal benefit to every household','complete replacement of all skills','a guaranteed decline in output']},
syntax:[
 {kind:'backbone',tokens:'Increased production|did not ensure|equal gains|for|families|whose members|worked|longer hours|under|conditions|that|remained|dangerous.','subject':'Increased production',predicate:'did not ensure',skeleton:'Increased production did not ensure equal gains.',translation:'产量增加没有保证在仍然危险条件下长工时劳动的家庭均等获益。',why:'主句did not ensure；worked、remained都在修饰部分。'},
 {kind:'backbone',tokens:'By|combining|several sources,|the historian|distinguishes|the introduction of a machine|from|the later date|when|it|became|widely used.','subject':'the historian',predicate:'distinguishes',skeleton:'The historian distinguishes introduction from later widespread use.',translation:'历史学家结合多个来源，区分机器引入与后来广泛使用的日期。',why:'By combining为方式说明；主句historian distinguishes。'},
 {kind:'reference',focus:'it',tokens:'The demonstration included|a rotating wheel|beside a small model furnace.|A guide placed|a sample of woven cloth|on the table and used|a pointer|to indicate the parts of the mechanism.|The furnace illustrated heating, while the cloth showed one kind of finished material.|Although all the exhibits concerned production,|it|turned around a central axis when the handle moved, allowing visitors to distinguish rotary movement from the separate back-and-forth action shown in the next model.',antecedent:'a rotating wheel',translation:'演示有转轮、模型炉、织布样品与指示棒。能随把手绕轴转、用于比较旋转和往复运动的是转轮。',why:'turned around central axis直接对应wheel。'},
 {kind:'reference',focus:'these workers',tokens:'The chapter contrasted factory owners with|craft workers who had spent years learning a specialised process.|A new method allowed less-trained operators to perform part of that process, while merchants expected to sell larger quantities.|Several local officials welcomed increased trade, but households faced different consequences.|The author did not assume every opponent had the same complaint.|For|these workers,|the change threatened the value of an acquired skill and the income it supported, not merely the familiar appearance of the equipment they used.','antecedent':'craft workers who had spent years learning a specialised process.',translation:'章节对比厂主和多年学专门工艺的工人，另提较少培训操作者、商人和官员。these workers指手艺工人，担忧技能价值和收入，而不只是设备外观。',why:'acquired skill与years learning对应，不能选商人或官员。'},
 {kind:'logic',text:'The spread of a machine can alter employment without making every earlier skill immediately useless.',q:'可以怎样理解？',options:['就业会改变，但并非全部旧技能立即无用。','每种旧技能都当场消失。','就业不可能受机器影响。','所有人都在同一天获同等好处。'],answer:'就业会改变，但并非全部旧技能立即无用。',translation:'机器传播可以改变就业，但不使每种旧技能立即无用。',why:'alter不等于every immediately useless。'},
 {kind:'logic',text:'A policy response to unrest is a later event; describing it does not, by itself, explain every cause of the unrest.',q:'这句话区分什么？',options:['事后回应与骚动全部成因。','所有事件都在同一时间。','回应必定是骚动的最初原因。','骚动不需要任何解释。'],answer:'事后回应与骚动全部成因。',translation:'描述对骚动的后来政策回应，不足以解释骚动全部起因。',why:'顺序和成因不能颠倒。'}
],
evidence:{
  "title": "A town workshop changes its production",
  "paragraphs": [
    [
      "A historian examined a town workshop that gradually introduced new equipment.",
      "The study used|work diaries as well as sales books|so that output could be compared with the work required to produce it.",
      "A higher sales total alone would not show whether workers used less time or merely worked longer."
    ],
    [
      "One machine simplified a repeated cutting task.",
      "The final shaping still depended on skilled hand work, which remained in the workshop after the installation.",
      "The account therefore described partial mechanisation rather than a complete end to craft knowledge."
    ],
    [
      "The first owners expected lower costs, but early repairs delayed those savings.",
      "The historian distinguished|the original expectation|from the result recorded in the accounts.",
      "He did not treat the purchase date as proof that the machine immediately operated as intended."
    ],
    [
      "Some workers welcomed|a less tiring movement,|while others feared reduced income.",
      "The report preserved these differing reactions instead of assigning one attitude to the whole workforce.",
      "A chapter on households examined|hours, pay and access to clean water,|not only the number of goods leaving the building."
    ],
    [
      "The workshop later expanded into an adjoining room.",
      "The historian revised the date|after a dated repair bill was found,|which placed the extension later than the first plan had suggested.",
      "He kept the earlier proposal separate from the evidence of completed building work."
    ]
  ],
  "questions": [
    [
      "Why were diaries used alongside sales books?",
      0,
      1,
      "",
      "比较产出与劳动投入，不只看销售。"
    ],
    [
      "What showed that craft work had not wholly disappeared?",
      1,
      1,
      "",
      "最终成形仍需熟练手工。"
    ],
    [
      "What benefit was mentioned by some workers who welcomed the change?",
      3,
      0,
      "a less tiring movement,",
      "部分人欢迎动作省力，另一些担心收入；不同群体反应保留。"
    ],
    [
      "What was distinguished from the actual financial result?",
      2,
      1,
      "the original expectation",
      "原始预期不能当实测结果。"
    ],
    [
      "What broader household measures were examined?",
      3,
      2,
      "hours, pay and access to clean water,",
      "多维生活指标而不只产件数。"
    ],
    [
      "What prompted a dating revision?",
      4,
      1,
      "after a dated repair bill was found,",
      "带日期维修账单使扩建定年后移。"
    ]
  ]
},
specials:[
 {kind:'notes',title:'一词笔记填空',passage:{title:'Documenting an old workshop',paragraphs:['The museum received a ledger recording purchases for an old workshop. A number beside each entry linked it to a separate invoice. The curator used a notebook to record uncertain readings before entering the information into a digital table. A photograph of the room helped locate the bench.', 'One tool had a bracket attached to its side. Another stood beneath a shutter that could be opened for light. Both were drawn before cleaning began. The team kept the loose labels in an envelope so that a later researcher could compare them with the original positions.']},rows:[
 ['Purchases were recorded in a ___.','ledger','ledger记采购。'],['Each entry had a ___ linking it to an invoice.','number','编号对应发票。'],['Uncertain readings first went into a ___.','notebook','先笔记，后数字表。'],['A room photograph helped locate the ___.','bench','工作台定位借照片。'],['A ___ was fixed to one tool’s side.','bracket','侧面支架。'],['Light entered through an opening controlled by a ___.','shutter','百叶或挡板控制采光。'],['Loose labels were kept in an ___.','envelope','信封保存标签。']
 ]},
 {kind:'judgement',rows:[
 ['The workshop introduced powered cutting but retained hand finishing for several products.','Every stage became machine-operated after the introduction.','FALSE','仍有手工收尾，排除every。','引入动力切割仍保留部分手工收尾。'],
 ['The historian compared goods produced with the hours and material used to make them.','The comparison considered inputs as well as output.','TRUE','工时材料是投入。','比较产件与工时材料。'],
 ['The ledger listed monthly purchases and repairs. A separate set of letters discussed relations with suppliers.','The workshop owner wrote every supplier letter personally.','NOT GIVEN','记录类别不说明所有信件作者。','账簿月采购维修，另一组信件谈供应关系。'],
 ['The report found that higher output coincided with longer working hours for some families. It explicitly rejected output alone as proof of improved efficiency.','The report treated output growth alone as proof of efficiency.','FALSE','明确拒绝这种推断。','部分家庭产出与工时同增，报告不以产出单独证效率。'],
 ['An intended extension appeared in an early plan, but a later bill showed when the work had actually been completed.','The date of a proposal was distinguished from completion.','TRUE','计划和完成明确区分。','早期规划有扩建，后账单显示实际完成。'],
 ['The exhibition displayed tools, household photographs and extracts from work diaries. Volunteers answered questions during the opening weekend.','The exhibition attracted more visitors than the previous year’s event.','NOT GIVEN','没有前一年人数对比。','展览工具家庭照片日记，开幕周末有志愿者。']
 ]}
]});
