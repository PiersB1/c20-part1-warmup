RRReadPack({id:'c19-r-t4-p1',location:{book:19,test:4,part:1},title:'气候变化、活动时间与种群差异',focus:'数量、分布与活动时间是不同变量；提前并不普遍有益；单一与部分原因；信息判断和一词笔记。',
words:`
knock-on effect|连带影响；后续影响|A knock-on effect happens when one change leads to another.|连带影响是一种变化带来另一种变化。|A delayed opening could have a ___ on later activities.|开放延迟可能连带影响后续活动。
ecosystem|生态系统|An ecosystem includes living things and their surroundings.|生态系统包括生物及周围环境。|The report considered the ___ rather than only one species.|报告考虑生态系统，不只看一个物种。
prey|被捕食的动物；猎物|Prey are animals hunted and eaten by others.|猎物是被其他动物捕猎食用的动物。|The observer recorded predators as well as their ___.|观察者既记录捕食者，也记录猎物。
halt|使停止；停住|To halt a decline is to stop it becoming worse.|遏止下降是使其不再恶化。|The first aim was to ___ the loss before seeking a recovery.|首要目标是先阻止损失，再争取恢复。
reverse|逆转；转为相反方向|To reverse a decline is to turn it towards growth.|逆转下降是使其转向增长。|A stable total does not yet ___ the earlier fall.|总数稳定还不算逆转先前下降。
phenology|物候；季节性生命活动的时间|Phenology concerns when seasonal life events occur.|物候关注季节性生命活动何时发生。|The study compared ___ with changes in population size.|研究比较活动时间与种群大小的变化。
advance|使时间提前；提前|An event advances when it happens earlier than before.|活动提前表示发生时间早于以前。|Warm conditions may ___ the start of the growing season.|温暖条件可能使生长季开始时间提前。
be equipped to|具备应对……的条件或能力|To be equipped to do something is to have what is needed.|具备应对条件是拥有所需能力或资源。|A species may ___ handle one change but not another.|一个物种可能具备应对一种变化的能力，却不能应对另一种。
adjust|调整；适应|To adjust is to change in response to conditions.|调整是根据条件作变化。|The team will ___ its method if access to a site changes.|现场通行改变时，团队会调整方法。
variable|变量；会变化的因素|A variable is a factor that can take different values.|变量是可能有不同数值的因素。|The survey treated timing as a ___ separate from total numbers.|调查把时间当作与总数量分开的变量。
abundance|数量多寡；丰富程度|Abundance describes how many individuals are present.|丰度描述有多少个体存在。|A wider range does not necessarily mean greater ___.|分布更广不一定表示个体更多。
distribution|分布范围或格局|Distribution describes where things occur.|分布描述事物出现在哪里。|The map showed ___ rather than the size of every local group.|地图显示分布，而非每个本地群体大小。
extent|范围；程度|Extent describes how far something reaches.|范围表示延伸到多远。|The report measured the northern ___ of the records.|报告测量记录延伸到的北界范围。
emergence|出现；羽化为成虫的时间|Emergence can describe an insect becoming an adult.|羽化可以描述昆虫变成成虫。|The observer recorded adult ___ rather than egg numbers.|观察者记录成虫出现，而非卵数。
flexible|能随条件调整的|A flexible process can change under different conditions.|灵活流程能随不同条件改变。|A more ___ schedule allowed extra work when conditions suited.|更灵活安排在条件合适时允许额外工作。
reproductive cycle|繁殖周期|A reproductive cycle is a sequence of stages involved in producing offspring.|繁殖周期是产生后代的阶段序列。|The study compared the ___ with the length of the suitable season.|研究比较繁殖周期与适宜季节长度。
colony|共同生活的种群或群体|A colony is a group living together in one place.|群落是在同一处共同生活的群体。|The observer counted one ___ without assuming it represented the whole region.|观察者统计一群体，不假设代表整个地区。
restricted to|受限于；仅限于|Restricted to means limited to a specified range.|限于表示范围受到特定约束。|The records were ___ the marked area.|记录仅限标记区域。
specialise in|专门依赖或擅长于|To specialise in something is to focus on a particular kind.|专门化是集中于特定类型。|Some species ___ a narrow range of conditions.|有些物种专门依赖很窄的条件范围。
sole cause|唯一原因|A sole cause would explain the result without other contributing factors.|唯一原因是不需其他促成因素就解释结果的原因。|The report did not identify warming as the ___.|报告没有把变暖确定为唯一原因。
downfall|衰败；严重下降|A downfall is a serious loss of position or success.|衰败是地位或成功的严重丧失。|Several pressures may have contributed to the group's ___.|几种压力可能共同造成群体衰败。
capacity|能力；潜力|Capacity is the ability to do something under suitable conditions.|能力是在适当条件下做某事的本领。|The findings suggest a ___ to change, not a guarantee that change will occur.|发现提示变化能力，而非一定发生变化。
extract benefits|从中获得益处|To extract benefits is to gain advantages from something.|获得益处是从某事取得好处。|A group may ___ from one change while facing another cost.|一个群体可能从某变化获益，同时承受别的成本。
solely|仅仅；只由……|Solely excludes other contributors or purposes.|仅仅排除其他促成因素或目的。|The outcome was not explained ___ by temperature.|结果并非仅由温度解释。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['prey','adjust','colony','flexible','capacity'],
contexts:[
{id:'timing',title:'More than one way to describe a change',words:['ecosystem','prey','phenology','advance','adjust','variable','abundance','distribution','extent','emergence','colony','restricted to'],paragraphs:[
 'A nature group studied a small {{ecosystem}}, recording several kinds of life rather than prey alone. One colony was easy to watch, but the survey was not {{restricted to}} that single place. The group drew a map of {{distribution}} and separately counted {{abundance}}.',
 'Timing was another {{variable}}. The group used {{phenology}} for the timing of seasonal life events and noted adult {{emergence}}. A suitable period might {{advance}}, but earlier did not automatically mean more individuals would survive. The northern {{extent}} of sightings was different again from either timing or the local count.',
 'When a path closed, the group had to adjust where it could observe. It kept that change visible in its notes. Otherwise a different view of the area might look like a change in the animals themselves.'
]},
{id:'interpret',title:'An encouraging pattern needs an explanation',words:['knock-on effect','halt','reverse','be equipped to','flexible','reproductive cycle','specialise in','sole cause','downfall','capacity','extract benefits','solely'],paragraphs:[
 'The report asked whether a longer suitable season could affect a {{reproductive cycle}}. A species with a flexible schedule might {{be equipped to}} use extra time, while one that had to {{specialise in}} narrow conditions might not. The same change could have a different {{knock-on effect}} for different groups.',
 'The first conservation goal was to {{halt}} a decline. To {{reverse}} it would require growth, not just a total that stopped falling. A change could help one group {{extract benefits}} while creating another difficulty. Capacity to respond was not a promise that every population would actually do so.',
 'The writer avoided calling one factor the {{sole cause}} of a {{downfall}}. Counts, timing, habitat and observation conditions could all matter. Explaining the outcome {{solely}} through one convenient variable would be a stronger claim than the evidence justified.'
]}],
vocab:[
 ['A change produced knock-on effects for other species.\nknock-on effects 是？','连带的后续影响','完全独立无关的事件','仅指直接碰撞','已证明每个对象相同受益','后续连锁不一定全部相同。'],
 ['The aim was to halt the decline before reversing it.\nhalt 是？','使下降停止','已经恢复到最高数量','保证每个个体存活','只描述更早日期','停止下降与恢复增长不同。'],
 ['A stable total had not yet reversed the earlier fall.\nreversed 是？','使趋势转向相反方向','仅保持不变','把资料全部删除','说明没有过去下降','稳定不是增长反转。'],
 ['Phenology changed even where the count did not.\nphenology 是？','季节性活动发生的时间','全部个体数量','只指领地面积','所有动物的名字','时间与数量可分开变化。'],
 ['The seasonal event advanced.\nadvanced 在此是？','时间提前','技术程度必然提高','路线向南','活动永久停止','时间语境不是能力先进。'],
 ['The species was equipped to cope with one kind of change.\nequipped to 是？','具备所需应对条件','保证能应对所有变化','外表被人工装备了工具','已经消除了全部风险','对一种变化有能力不保证全部。'],
 ['Abundance rose in some local groups.\nabundance 是？','个体数量多寡','只有活动开始日期','所有地点的海拔','完全等同分布范围','数量和范围不同。'],
 ['Distribution shifted without an equal rise in local numbers.\ndistribution 是？','出现的空间格局','单处群体的个体总数','每年的全部费用','所有个体出生日期','空间变化不要求每处数量同增。'],
 ['The study measured northward extent.\nextent 是？','延伸范围','只指平均体重','参加者的收入','所有变量都不变','范围距离维度。'],
 ['Adult emergence was observed earlier.\nemergence 在此是？','成虫出现或羽化','成虫数量一定翻倍','所有卵同时消失','地面所有植物生长','早出现不直接确定数量。'],
 ['The reproductive cycle differed between species.\nreproductive cycle 是？','繁殖的阶段周期','固定观察者路线','所有生态关系总称','只指个体寿命终点','产生后代的周期与寿命终点不同。'],
 ['The records were restricted to one marked route.\nrestricted to 是？','限于指定范围','已经包括所有范围','与范围毫无关系','由该路线独家创造','调查范围限定。'],
 ['Some species specialise in a narrow habitat type.\nspecialise in 是？','专门依赖或集中于','适应全部可能环境','完全不受环境影响','已迁到每个地区','特定依赖可能限制灵活性。'],
 ['Warming was not identified as the sole cause.\nsole cause 是？','唯一原因','部分可能因素','一项观察工具','已经排除的全部证据','not sole不等于无影响。'],
 ['Capacity to add a stage was observed elsewhere.\ncapacity 是？','有能力或潜力','已经在每个地点完成的结果','必然发生的固定日程','完全没有任何可能','能力与实际结果不同。'],
 ['The pattern was not explained solely by temperature.\nsolely 是？','仅仅；只靠','部分地但不排他地','完全没有提及','只在未来发生','solely排其他解释，not solely保留多因。']
],
rewrites:[
 ['Earlier timing was beneficial for some groups but not all.','The effect of advancing the event differed across groups.','Every group benefited equally.','Earlier timing was harmful in every case.','No group changed its timing.','some but not all保留差异。'],
 ['The range expanded without proving an increase at every site.','Wider distribution did not establish universal local growth.','Every local population grew by the same amount.','The wider range proves local counts were never made.','No expansion occurred anywhere.','范围与各地数量区分。'],
 ['The factor may have contributed without being the sole cause.','A partial role was possible without a complete single-factor explanation.','The factor was proved irrelevant.','The factor was certainly the only cause.','Every proposed cause was equally confirmed.','部分因果与唯一因果不同。'],
 ['A capacity observed elsewhere does not guarantee the same response here.','An ability in one setting may not be realised in every other setting.','Every site must respond identically.','No evidence from elsewhere can ever be useful.','An ability is the same as an already completed result.','可参考但不普遍保证。'],
 ['The count became stable before any recovery was shown.','The loss halted without evidence yet of renewed growth.','Stability proved a return to the earlier peak.','A stable count means all individuals died.','Growth had already been shown before the loss stopped.','止跌与回升顺序强度不同。'],
 ['The study considered several variables rather than timing alone.','The explanation examined factors in addition to when the event occurred.','Timing was the only observation.','No variables were compared.','Every variable was proved equally causal.','consider多变量不等于因果全证。']
],
match:{title:'Interpreting a changing pattern',text:'The observer measured {{0}} as well as {{1}}. A change in {{2}} concerned the date, not automatically the count. The report asked whether a group had the {{3}} to respond. It aimed first to {{4}} a loss and avoided naming a {{5}} without stronger evidence.',pairs:[['abundance','numbers present','数量。'],['distribution','where occurrences are found','分布。'],['phenology','timing of seasonal events','物候。'],['capacity','ability','能力。'],['halt','stop further decline','使停止下降。'],['sole cause','single complete explanation','唯一原因。']],extras:['proof of identical benefit','growth at every site','the total removal of all risks']},
syntax:[
 {kind:'backbone',tokens:'A wider distribution|does not imply|an increase|at|every site|where|the species|has been recorded.',subject:'A wider distribution',predicate:'does not imply',skeleton:'A wider distribution does not imply an increase at every site.',translation:'更广分布不意味着每个记录地点的数量都增加。',why:'主句does not imply，has been recorded修饰site。'},
 {kind:'backbone',tokens:'By|comparing|timing|with|several other variables,|the researchers|tested|a pattern|that|a count alone|would have missed.',subject:'the researchers',predicate:'tested',skeleton:'The researchers tested a pattern.',translation:'研究者把时间与其他变量比较，检验单靠数量会漏掉的模式。',why:'By comparing为方法说明，tested主句。'},
 {kind:'reference',focus:'it',tokens:'The volunteer fixed|a numbered route marker|beside the meadow entrance.|A thermometer recorded the air temperature, and|a notebook|held the observer’s descriptions of each visit.|The team also used a camera to document unusual sightings.|Although the temperature record and the photographs added context,|it|identified the same starting point on later visits so that a change in the area being observed would not be confused with a change in the number of insects present along the route.',antecedent:'a numbered route marker',translation:'志愿者在草地入口设编号路线标，另用温度计、笔记和相机。能固定后续观察起点、避免范围差异混淆的是路线标。',why:'identified same starting point对应marker。'},
 {kind:'reference',focus:'the latter',tokens:'The review distinguished|a rise in the total number observed|from|an earlier date of adult appearance.|Some local groups showed both, while others changed in only one measure.|Maps added another kind of evidence by showing places where records occurred.|The researchers checked that every comparison used a similar observation period and coverage.|They stressed that|the latter|was a timing measure and could not, by itself, establish that more individuals were present, even if the new date looked like an encouraging response to warmer conditions.',antecedent:'an earlier date of adult appearance.',translation:'评论区分数量增加与成虫日期提前，地图另显示范围。latter是后者日期指标，不能独自证明更多个体。',why:'timing measure核实后项，不是数量或地图。'},
 {kind:'logic',text:'A response that benefits one lifecycle pattern may not benefit a different one.',q:'可以推出什么？',options:['作用可能依生命活动模式而异。','所有模式都必同样受益。','每种不同模式都必定受损。','模式差异完全没有可能相关。'],answer:'作用可能依生命活动模式而异。',translation:'对一种生活周期有益的变化，未必对另一种同样有益。',why:'条件限制不变全称。'},
 {kind:'logic',text:'The author calls for attention to warning signs without claiming that one sign predicts every future outcome.',q:'预警线索的限度是什么？',options:['值得关注，但不保证预测所有结果。','一条线索足以保证全部未来。','没有预测保证就完全无价值。','所有未来都已经发生。'],answer:'值得关注，但不保证预测所有结果。',translation:'作者主张关注警示，不声称单个警示预测所有未来结果。',why:'attention与universal prediction不同。'}
],
evidence:{title:'A meadow group compares seasonal records',paragraphs:[
 ['A local nature group reviewed several seasons of observations from marked meadow paths.','Its aim was|to separate changes in timing from changes in numbers and location,|not to treat every early sighting as proof of recovery.','Observers recorded the first adult appearance as well as later visits along the same routes.'],
 ['Some groups appeared earlier but were not seen in greater numbers.','Others spread to additional parts of the meadow while remaining scarce at the original points.','The report kept these measures separate so that a larger map range would not be mistaken for growth at every location.'],
 ['The group checked|the length of each observation visit|before comparing records.','A longer search could produce more sightings even if the population had not changed.','Bad weather also affected what could be seen, so|the notes|accompanied the totals.'],
 ['One habitat strip had changed after nearby work.','The team considered this alongside seasonal temperature rather than explain every difference through warming alone.','It recorded|the condition of the observation area|as part of the context for interpreting a local fall.'],
 ['The conclusion welcomed an improved count in one part of the meadow.','It still asked for|further seasons of comparable records|before calling the improvement secure.','A short positive change was useful evidence, but not a reason to ignore the groups that continued to decline.']
],questions:[
 ['What distinctions shaped the main review?',0,1,'','时间、数量、地点分开。'],
 ['Why was a larger map range not equivalent to growth everywhere?',1,2,'','各地可稀少，即范围不同于每点数量。'],
 ['Which aspect of observation effort was checked?',2,0,'the length of each observation visit','搜索时长影响看到多少。'],
 ['What accompanied the totals when visibility changed?',2,2,'the notes','天气笔记解释可见度变化。'],
 ['What habitat context was recorded?',3,2,'the condition of the observation area','观测区状态为局部变化背景。'],
 ['What evidence was required before calling improvement secure?',4,1,'further seasons of comparable records','更多可比季节，不只一次好数。']
]},
specials:[
 {kind:'judgement',rows:[
 ['The review separated first appearance dates from total sightings, noting that the two could change independently.','An earlier first sighting necessarily meant a larger total.','FALSE','明确可独立变化，否定必然。','首见日期与总数可独立变化。'],
 ['The survey used marked routes on later visits to keep coverage comparable.','The method attempted to control the area observed.','TRUE','标记路线控制范围。','后续沿同一路线以保持覆盖可比。'],
 ['Several volunteers recorded weather, dates and sightings. A coordinator combined their notes at the end of each season.','All volunteers had the same number of years of experience.','NOT GIVEN','任务描述未给经验年数。','志愿者记天气日期目击，协调员季末合并。'],
 ['The report described one positive local change but explicitly said the pattern was not shared by every group.','Every group showed the same improvement.','FALSE','明确not shared by every。','一处积极变化不代表全部。'],
 ['A nearby habitat change was considered together with temperature when interpreting the decline.','More than one possible influence was examined.','TRUE','两个因素共同考察。','考虑生境改变及温度。'],
 ['The final report included maps and a table of observation dates. A short summary was displayed in the visitor centre.','The displayed summary was longer than the online report.','NOT GIVEN','未比较长度。','报告地图日期表，中心有简要摘要。']
 ]},
 {kind:'notes',title:'一词笔记填空',passage:{title:'Preparing a seasonal observation route',paragraphs:['The team placed a flag at the starting point and gave each observer a card listing the route. A timer kept the length of each visit consistent. The path included a gate that had to be left as it was found. Uncertain sightings were marked with a question mark in the notebook.', 'A sketch showed the part of the meadow affected by recent work. At the end of the day, cards were stored in a wallet so they could be checked against the later digital record. Observers were asked to preserve original notes even when a summary had already been made.']},rows:[
 ['The start was identified by a ___.','flag','起点旗标。'],['Each observer received a route ___.','card','路线卡。'],['Visit length was controlled by a ___.','timer','计时器控制时长。'],['A ___ on the route had to be left in its original state.','gate','门恢复原状态。'],['Uncertain sightings were noted in a ___.','notebook','笔记本标问号。'],['Recent work was shown in a ___.','sketch','草图显示改变区。'],['The route cards were kept in a ___.','wallet','卡片收钱包。']
 ]}
]});
