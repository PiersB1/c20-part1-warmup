(() => {
const P=RRParagraph,R=(t,p,e)=>RRReviseTopic(`c19-t${t}-p${p}`,e);
R(1,1,{
coverage:'自然环境分类；学科与活动对应；按年龄调整；户外活动的间接收益；人数、收费与开票条件。',
options:`某种动物当前所在的位置|仅用于饲养动物的围栏|一地出现的全部物种
一年四季都被深水覆盖的区域|只在降雨后短暂潮湿的路面|专供游客涉水的人工水池
为采伐而种的单一树种林|散落在住宅间的几棵树|没有树木的自然草地
缓慢流动的小河|人工铺设的浅沟|仅在潮汐时出现的海湾
标示全部地形的地图|测量行走距离的仪器|显示当前气温的设备
完全取消原定活动|在不作改变的情况下重复|只把活动的名称改掉
给活动作最后评分|代替儿童完成所有任务|只在发生事故后提供帮助
确定所有答案正确的把握|对他人的完全信任|完成任务所需的专业资格`,
grammar:[['The fee depends on how many pupils ___ attend.（actually / previously）','actually','按实际出席，不是预计报名人数。','The invoice lists those who ___ took part.'],['Activities are adjusted ___ the age of the class.（according to / despite）','according to','根据年龄适配，而非无视年龄。','The ranger changes the task ___ the needs of the class.']],
locators:`Wet ground developed after the earlier [extraction|1] of ___ ended.~Once [digging material out|1] stopped, {the pits} gradually filled with water.~extraction 对应 digging material out，先有采掘后成湿地。
The [woodland|1] contains several varieties of ___ .~In the [tree-covered area|1], different species grow together {rather than} forming one plantation.~woodland 对应 tree-covered area，不是单一人工林。
The {science task} requires pupils to [collect|1] ___ .~During the {nature investigation}, children [gather|1] observations and compare {their findings}.~collect 与 gather，收集对象为观察信息。
The [navigation|1] activity uses {a map} and ___ .~For [finding their way|1], {the group} practises reading direction with {an instrument}.~navigation 对应 finding their way，方向工具是待听信息。
The {history activity} examines [previous|1] uses of ___ .~Looking at the past, classes explore what {the ground} was used for [formerly|1].~previous 与 formerly，关注过去用途。
The {visitor study} considers guests' [expectations|1] and ___ .~Children examine [what visitors hope to find|1] and {the difficulties} their visits may create.~expectations 对应 what visitors hope to find，不是已经获得的体验。
In the [music|1] session, pupils use [natural materials|2] to explore ___, {rather than} depending on the instruments they normally play at school.~{The group} will not need its {usual instruments}: in the [sound|1] activity, [sticks and stones|2] provide ways to make repeated patterns, and children compare {the effects} they produce.~music 在活动语境中对应 sound；natural materials 由 sticks and stones 具体化。
An [independent|1] outdoor task can increase pupils' [confidence|2] in ___, even when {the challenge} itself is much simpler than a classroom examination.~{The challenge} does not have to be difficult; completing it [without help|1] can strengthen children's [belief in their own ability|2], which may make them more willing to attempt {an unfamiliar activity}.~independent 对应 without help；confidence 对应 belief in own ability，难度不是收益本身。
The [final charge|1] is based on actual [attendance|2] at ___, {rather than} {the number} of pupils whose names appeared on {the school's} {original list}.~We need the {provisional list} for planning, but the [bill|1] depends on how many pupils [actually come|2]; a child who is absent on {the day} is not counted for {that charge}.~final charge 对应 bill；attendance 对应 actually come，计划名单并非收费依据。
{The school} receives an [invoice|1] [afterwards|2] using confirmed ___, {rather than} making every pupil bring payment to {the gate} before the activities begin on {the day}.~We do not collect money from children at {the gate}; [following the visit|2], {your office} receives a [payment request|1] based on the confirmed numbers, so please check that {our contact} details are current.~invoice 对应 payment request；afterwards 对应 following the visit，收费时点与到场不同。`,
paragraphs:[P('Learning outside',`A ranger offers tasks that [cater for=>are designed to suit=>针对需要提供活动] different age groups. A trail helps pupils [find their bearings=>establish their position and direction=>辨认方位，不是记住所有名称]. Children [pool their findings=>combine what they have discovered=>汇集发现] before comparing habitats. The teacher hopes to [build on=>develop further from=>在已有能力上发展] classroom work. A successful challenge can [boost confidence=>increase belief in one's ability=>强调信心收益]. The visit encourages pupils to [take the initiative=>begin acting without constant direction=>主动探索而非无条件自由行动].`,['memorise place names','work entirely without rules','replace all classroom teaching']),P('Booking a class visit',`The programme is [tailored to=>adapted for=>按群体调整] the class. Adults [remain responsible for=>continue to have a duty towards=>责任不因向导在场而消失] supervision. Lunch space is [set aside=>reserved for a purpose=>预留而非另外收费] for groups. The school pays [in arrears=>after the service has been provided=>事后付款]. The total [reflects actual attendance=>is based on the people who came=>实际出席而非预订名单]. Staff who accompany pupils are [exempt from the charge=>not required to pay=>免收该项费用].`,['paid before the visit','based on the original booking','charged at a lower rate'])],
signals:[{title:'Choosing activities',focus:'学科对应、年龄适配、活动收益。',text:`Our reserve offers several ways for school groups to explore the landscape.
The same route can be used for different subjects, depending on what the teacher wants to develop.
For geography, the emphasis is on using direction and landmarks to decide how to reach the next point.~For geography 明确学科归属，后面才是对应活动。
Classes also compare observations of plants in the sheltered and exposed areas.
We adapt the difficulty to the pupils' age, rather than expecting every class to complete an identical worksheet.~adapt 与 rather than 表明按年龄调整。
Teachers often notice that children enjoy being outside their ordinary classroom.
More significantly, completing a task for themselves can change how confident they feel about attempting something unfamiliar.~由一般愉快体验转到更深层学习收益。
We leave time for the class to discuss those experiences before returning to school.`},{title:'Confirming the booking',focus:'监管责任、收费人数、付款时点。',text:`I can reserve a provisional date while you confirm the numbers with the school.
The ranger will prepare materials and lead the educational part of the visit.
Supervision remains the school's responsibility, so please bring enough accompanying adults for your group.~remains 明确责任归属，不因向导带队而转移。
You can tell us the expected number when completing the booking form.
The amount charged will be based on the pupils who actually attend, not everyone originally listed.~actually 与 not 区分收费依据。
Accompanying staff will be recorded separately on the attendance sheet.
After the visit, we send the school an invoice using the confirmed attendance figures.~After 明确付款通知的时点与依据。
There is no need to collect payment from every family before making the initial enquiry.`}]
});
R(1,2,{
coverage:'交流与接待；周年活动的已定方案和被否决建议；筹款比较；访问安排；地图不改。',
options:`两个城镇合并为同一行政区|由旅行社提供的团体旅游|短期商业合作协议
安排来宾参加比赛|提供来访者交通保险|组织人员外出访问
每年都会举办的普通聚会|首次访问结束的日期|两地居民共同的节假日
向参与者收取全部旅费|把活动盈利分配给会员|申请私人银行贷款
已经完成的出行记录|参观者可自行决定的景点清单|交通工具使用的票价表
只有观赏树木的公园|种植蔬菜的封闭庭院|供牲畜活动的草地
用围栏圈出的野餐区域|建在屋顶上的盆栽区|只供工作人员进入的温室
提供住宿的独立房屋|只出售包装饮料的商店|举行正式晚宴的宴会厅`,
grammar:[['The seat was suggested, but the tree ___ chosen.（was / has）','was','提议与最终选择分开。','Several options were discussed before one scheme ___ approved.'],['Guests will eat at home ___ going to a restaurant.（rather than / as well as）','rather than','二选一替代而非两者都做。','Hosts are asked to offer a quiet meal ___ arrange an evening out.']],
locators:`What was the [highlight|1] of {the recent exchange} visit?~During {our last trip}, the unexpected workshop was [what members enjoyed most|1].~highlight 对应最喜欢的部分，不是发生最早的活动。
Which anniversary proposal was [approved|1]?~For {the celebration}, {the committee} [agreed to|1] {a public mural}, but rejected {the fountain}.~approved 对应 agreed to，建议与定案区分。
Which fundraising event was [most successful|1]?~{The craft} auction [raised the largest amount|1], ahead of {the supper} and film evening.~most successful 在筹款语境中由收入最多体现。
What should [hosts|1] arrange on the first evening?~Those [welcoming the visitors|1] should offer a quiet meal at home when they arrive.~hosts 对应 welcoming visitors 的人。
What will the [musician|1] do during this visit?~The [performer who plays music|1] will lead singing, {rather than} repeat last year's quiz.~musician 对应 performer who plays music，活动是今年的新安排。
Map retained~Map retained~地图保留。
Map retained~Map retained~地图保留。
Map retained~Map retained~地图保留。
Map retained~Map retained~地图保留。
Map retained~Map retained~地图保留。`,
paragraphs:[P('Making joint plans',`The association wants to [strengthen ties=>develop closer relationships=>加强关系而非行政合并]. A celebration will [mark the occasion=>commemorate the event=>纪念特定事件]. One idea was [turned down=>rejected=>未获采纳]. A mural was [settled on=>chosen after discussion=>讨论后的最终决定]. It must stay [within budget=>inside the agreed spending limit=>预算范围限制]. Hosts will [be briefed=>receive practical information=>事前获知安排].`,['still undecided','approved immediately','spend without a limit']),P('A weekend programme',`The first evening should be [low-key=>quiet and informal=>轻松低调而非取消]. Visitors need time to [recover from=>rest after=>旅途后休息] the journey. A morning walk is [weather permitting=>dependent on suitable conditions=>天气前提]. The organiser has [allowed for=>included time for=>安排中预留] a break. A musical session will [take the place of=>replace=>替代旧活动，不是额外并列] the quiz. The group will [round off=>finish=>结束活动] the weekend together.`,['regardless of conditions','be added alongside','formal and elaborate'])],
signals:[{title:'Confirmed plans',focus:'比较活动、已定方案、首次晚间安排。',text:`Our exchange association has now reviewed the suggestions for the anniversary weekend.
Members proposed several ways to leave a lasting reminder of the partnership.
The committee has chosen a mural; the proposed water feature will not be taken forward.~has chosen 与否定方案对照，明确最终决定。
The cost will be met through the events organised earlier in the year.
Of those events, the craft auction raised more than either the supper or the film evening.~比较筹款结果，不只标记活动名。
Next week our visitors will arrive after a long journey.
For their first evening, please offer a quiet meal at home rather than taking them straight to a large reception.~first evening 限定安排时段，rather than 排除外出接待。
The more active part of the programme will begin the following morning.`}]
});
R(1,3,{
coverage:'食品项目成就与未来用途区分；双方认可；标签功能；消费趋势的观点匹配与证据强弱。',
options:`已经无法再利用的废弃食品|企业为新产品额外采购的食材|消费者尚未选择的菜单
把物品按原用途重复使用|把物品拆成原料后加工|把不同物品混合后丢弃
已经证明营养丰富的|适合长期储存的|比其他食品价格更低的
已准备大规模销售的成品|按规则选取的调查样本|品牌宣传使用的包装
用来显示固定日期的印刷标记|能自动改变食品成分的设备|只记录产品售价的标签
包装看起来新颖的程度|产品离生产地点的距离|食物被购买的频率
只为增加重量填入的材料|负责运送商品的车队|产品的全部品牌宣传
任何不喜欢某食品的态度|对食品必然危及生命的过敏|为控制体重作出的选择`,
grammar:[['The device could be adapted, but that use ___ been tested.（has not / does not）','has not','潜在用途不是已经完成的测试。','The proposed medical application ___ been evaluated yet.'],['The students agree ___ clearer information is needed.（that / what）','that','明确双方一致的命题。','Both speakers accept ___ claims should be checked.']],
locators:`Which TWO [achievements|1] concern {the food}-shaping project?~{The team} describes [what it managed to do|1]: improve leftovers' appearance and shape {the mixture}.~achievements 对应已经做到的事，不是未来设想。
Which TWO benefits do the students [both accept|1]?~[They agree|1] that using otherwise wasted material and varying portions are genuine benefits.~both accept 对应 they agree，单人建议不属于双方共识。
Which TWO [potential uses|1] concern responsive labels?~The students discuss [possible applications|1] in medicine packaging and versions readable without sight.~potential uses 对应 possible applications，尚非已验证用途。
Which TWO prototype claims need further [evidence|1]?~Long storage and different liquids need more [supporting results|1] before {the claims} can be confirmed.~evidence 对应 supporting results，不是推广需求。
What is said about food [sourced locally|1]?~[Buying from nearby producers|1] is already common in many shops, the students think.~sourced locally 对应 buying from nearby producers。
What should retailers do about [unnecessary|1] packaging?~Stores should do more to reduce [avoidable|1] wrapping around ordinary products.~unnecessary 与 avoidable，指可避免部分而非所有包装。
What concern is expressed about [special diets|1] and consumers' [expectations|2], even when labels correctly state which ingredients are absent from {a product}?~{The ingredient} list may be accurate, but products for [restricted eating patterns|1] may not deliver [the benefits buyers anticipate|2]; avoiding one ingredient does not automatically make every aspect of {a diet} healthier.~special diets 对应 restricted eating patterns；expectations 对应 benefits buyers anticipate，成分信息与效果预期分开。
What opinion concerns [celebrity|1] food products and their [price|2], {rather than} the ordinary difference between a large portion and a smaller one?~{A larger} portion may reasonably cost more, but putting a [famous person's|1] name on the package can raise the [amount charged|2] without any clear improvement in {the food} itself.~celebrity 对应 famous person；price 对应 amount charged，排除正常份量差价。
What is said about [delivery-only kitchens|1] and customers' [awareness|2], especially when the website resembles that of {a restaurant} where people can sit down?~The website may look familiar, but these [places without a dining room|1] operate differently; public [understanding|2] of that arrangement is limited, so clearer information could help customers choose.~delivery-only kitchens 对应 places without a dining room；awareness 对应 understanding。
What opinion concerns [health claims|1] and the need for [regulation|2], {rather than} {the general popularity} of food marketed as suitable for particular diets?~Popularity tells us little about evidence: promises of [medical benefits|1] should face stronger [official checks|2], particularly where {the wording} might lead shoppers to expect an effect that has not been demonstrated.~health claims 对应 medical benefits；regulation 对应 official checks，不用销量推断证据。`,
paragraphs:[P('A promising prototype',`A team used [left over=>remaining after earlier needs were met=>有剩余不等于已经变质] ingredients. Its model was [a proof of concept=>a demonstration that an idea could work=>可行演示而非成熟商品]. The design [opened up possibilities=>created potential new uses=>潜在用途未必已实现]. A label responded to [a change in condition=>an alteration in the product's state=>状态变化，不是固定日期]. The students [stopped short of claiming=>did not go as far as asserting=>刻意限制结论] universal reliability. More tests were [called for=>considered necessary=>还需测试].`,['a finished commercial product','already proved all uses','no further checks required']),P('Evaluating trends',`One practice has [caught on=>become popular=>开始普及]. Another has [failed to live up to=>not met=>效果未达到] expectations. A familiar name can [carry weight=>influence judgement=>影响判断而非保证品质]. Customers may [be in the dark about=>lack information about=>缺乏了解] production. Claims should be [backed up=>supported by evidence=>证据支持]. A rule would [hold suppliers to account=>require providers to explain their conduct=>追究责任，不是代替生产].`,['guaranteed quality','remained obscure','be accepted without evidence'])],
signals:[{title:'What has been demonstrated?',focus:'成就与设想、标签功能、保留意见。',text:`I liked the project that turned unused catering material into shaped portions.
The photographs made the result look quite different from the original mixture.
What the team demonstrated was a workable shaping process, not that every kind of leftover could safely be reused.~明确已证明的范围，排除扩大概括。
The responsive label project raised a different set of possibilities.
For future development, both of us thought a version readable by touch would be worth investigating.~future 与 both 指定共同认可的未来方向。
There were also suggestions about using similar materials outside food production.
Those remain suggestions, though; the prototype has not established reliability in every proposed setting.~though 限定潜在用途与验证结果。
Our presentation should make that distinction clear before discussing commercial applications.`},{title:'Opinions about food fashions',focus:'趋势评价、消费者认知、监管要求。',text:`Several food trends appeared in the articles we read for the seminar.
Some concern where products come from, while others concern how they are promoted.
Buying from nearby producers already seems widespread, so I would not describe that as an unfamiliar idea.~already 指定普及状态，排除陌生趋势评价。
The situation is different for businesses preparing takeaway meals without a public dining room.
Many customers may not realise how those kitchens operate, which makes clearer information useful.~从经营方式转到认知不足的评价。
The final article discussed products promoted through claims about health.
Here the issue is whether the claims are supported, and I think providers should face stronger checks.~Here 切换评价维度，从普及度转为证据和监管。
We should give each trend its own comment rather than applying the same criticism to all of them.`}]
});
R(1,4,{
coverage:'发现过程先后；传统工具的新用途；缺少某条件与保存的因果；形状纠正；器物双重用途；土地与气候变化。',
options:`最早出现全部人类活动的|只以打猎为生的时期的|现代农业机械化阶段的
完全分解形成的矿物泥沙|在干燥沙地中堆积的灰尘|深海中形成的岩石层
用来挖开整条沟的铲子|测量物体放射性的仪器|标记地面边界的绳索
把新物品复制成旧式样|对历史材料重新命名|记录材料现在的售价
某种物质过量存在|某种物质正常消耗的速度|材料完全消失的结果
根据石头形状猜测用途|按文献记载推断人物年龄|根据当前土层厚度计算价格
仅在短期放牧时使用的围栏|现代规划的农地边界|由自然水流形成的聚集区
把饲料集中运进室内|耕地上种植可售作物|把牲畜长期圈在棚中`,
grammar:[['Objects survived ___ little air reached the buried layer.（because / although）','because','缺氧是保存原因，不是让步。','The material decayed slowly ___ the conditions restricted normal breakdown.'],['The pots served as containers ___ light sources.（as well as / instead of）','as well as','双重用途，不是替代。','The same object was used for storage ___ for illumination.']],
locators:`{The observer} noticed ___ hidden below the [bog|1].~{An early observer} noticed lines hidden below the [wet ground|1].~bog 对应湿地环境，排列是另一个信息点。
{The investigator} with [archaeological training|1] belonged to the same ___ .~Years afterwards, {a family} member [had studied ancient remains|1] and examined the site systematically.~archaeological training 对应研究古代遗存的专业背景。
The [probing|1] technique had previously located ___ .~People locally used rods for [feeling below the surface|1] to find material for burning.~probing 对应用杆探查地表以下，不是挖开整片区域。
Unusual [preservation|1] resulted from {a shortage} of ___ .~The [survival of organic material|1] was helped by very little air reaching the wet layer.~preservation 在此由有机材料保存下来表达。
The [dwellings|1] were ___ {rather than} circular.~The [houses|1] were long and narrow, despite what visitors sometimes imagine.~dwellings 与 houses 对应，圆形为被纠正的假设。
{Some vessels} had an [additional use|1] as ___ .~Holding {a burning} supply gave containers [another function|1], besides storing food.~additional use 对应 another function，一物有多用。
The [enclosed plots|1] were large enough to [support|2] ___, {rather than} providing only the small quantity of food needed by one person.~These [bounded areas|1] contained enough resources to [sustain|2] several related people living together; their scale suggests {a household} unit {rather than} a tiny garden for {an individual}.~enclosed plots 对应 bounded areas；support 对应 sustain，群体规模需从后文听取。
The absence of [shelter|1] suggests [throughout the year|2] animals relied on outdoor ___, although the lecturer presents this as {an inference} {rather than} a direct observation.~No [housing|1] for livestock has been identified, so {the interpretation} is [year-round|2] outdoor grazing; that remains {an inference} from what is missing, {rather than} a direct observation of {the animals}.~shelter 对应 housing；throughout the year 对应 year-round，推断不等于直接观察。
A decline in land [productivity|1] may explain the [abandonment|2] of ___, {rather than} proving that one sudden event forced {every household} to leave.~{The ground's} [ability to produce crops|1] may have fallen gradually, contributing to people [giving up|2] cultivation; {the evidence} does not establish a single dramatic event as the explanation for {the whole area}.~productivity 对应 ability to produce crops；abandonment 对应 giving up，原因强度受 may 限定。
Conditions became [wetter|1] as [precipitation|2] increased, eventually affecting people's use of the ___ {rather than} representing only one unusually wet season in an otherwise stable period.~One wet season would not establish the longer trend; {the records} instead suggest [damper|1] conditions {over time}, with more [rainfall|2] affecting {the ground} and eventually the way people could use it.~wetter 对应 damper；precipitation 对应 rainfall，季节异常与长期趋势区分。`,
paragraphs:[P('From a clue to an investigation',`A local observer [came upon=>discovered by chance=>偶然发现而非有计划挖掘] a line of stones. The pattern [aroused interest=>prompted curiosity=>引起研究兴趣]. A later investigation [made use of=>employed=>使用已有方法] a traditional probing technique. Dating [placed the site in=>assigned the remains to=>确定时代归属] an early farming period. Wet conditions [slowed down=>reduced the rate of=>减慢而非完全阻止] decay. The team avoided [taking for granted=>assuming without checking=>不能未经核实就接受] the first explanation of the walls.`,['deliberately constructed','stopped completely','proved every suggestion']),P('Reading traces of farming',`A boundary may [point to=>suggest=>线索提示而非绝对证明] controlled grazing. No winter shelter has [come to light=>been discovered=>尚未发现不等于绝不曾存在]. A vessel could [double as=>serve a second function as=>一物兼作另一用途] a light source. Repeated cultivation may [wear out=>reduce the productivity of=>使土地肥力下降] land. Several pressures could [have played a part=>have contributed=>共同起作用]. The final interpretation [leaves room for=>allows the possibility of=>保留其他解释的空间] further evidence.`,['proves beyond doubt','serve only as','exclude all alternatives'])],
signals:[{title:'Discovery and preservation',focus:'发现时序、工具原用途、保存原因。',text:`This fictional wetland site was first noticed by a resident rather than an excavation team.
The resident found regularly arranged stones while carrying out ordinary work.
Only much later did a trained investigator recognise the wider pattern and begin a systematic survey.~Only much later 标记发现与系统调查的先后，不混同人物。
The survey combined modern dating with a simple technique already familiar locally.
That technique had originally been used to locate buried material for burning, not to map ancient structures.~originally 与 not 区分工具原用途和新用途。
The excavation also revealed organic objects that often disappear in other settings.
Their survival is explained partly by the shortage of air in the wet layer, which slowed normal decay.~因果句说明保存条件，不是列举所有湿地特点。
The team therefore recorded the surrounding conditions alongside each object.`},{title:'Interpreting daily life',focus:'形状纠正、器物双用、弃耕多因素。',text:`Reconstructing life at the settlement requires more than identifying the age of the site.
The team also compared building outlines and marks on surviving vessels.
Contrary to the first assumption, the houses followed an elongated outline rather than a circular one.~Contrary 修正原假设，rather than 明确形状对照。
Some containers held traces of material that could burn with a small flame.
This suggests a second use for lighting, alongside their ordinary role in keeping supplies.~second use 与 alongside 表明一物多用。
The final stage of occupation is less straightforward to explain.
Declining land productivity may have contributed to abandonment, but the environmental records also point to changing weather.~may 与 but 限定单因解释，并补充另一压力。
The account should therefore present a combination of possibilities rather than one certain cause.`}]
});
R(2,1,{
coverage:'姓名拼写与地点；过去和现在的上课安排；初学者顾虑；课程活动顺序；扫弦与单音、集体与个人。',
options:`已经能独立演出的学习者|开始担任教师的人|刚加入但已有多年经验的人
负责评判演出的人|只负责收取会费的人|参加活动的资深学生
一整学期的连续课程|一次正式的舞台演出|个人在家的全部练习
调节每段曲子的速度|改变乐器音量大小|把乐曲改为另一种风格
按先后弹出的单个音|完整歌曲中的一个段落|手指按弦的动作位置
依次单独拨响每根弦|通过拍手帮助保持节奏|更换乐器上已经磨损的弦
演奏声音的强弱|乐器音高的准确程度|歌曲一共有多少段
与主旋律无关的背景噪声|演出前用来校音的声音|用来说明指法的口头指导`,
grammar:[['The group used to meet at home, but now ___ at a college.（meets / met）','meets','used to 与 now 区分旧地点和现地点。','The class previously met in the morning, but now ___ at midday.'],['Members practise slowly before ___ speed.（increasing / increased）','increasing','before 后动名词，先准确后提速。','Check the chord shape before ___ the tempo.']],
locators:`{The coordinator's} [surname|1] is ___ .~{The organiser's} [family name|1] is Reed, spelt R-E-E-D.~surname 对应 family name，名字类别需区分。
The [current|1] meeting place is at the ___ .~We [now|1] meet in the {arts centre}, not at the {teacher's house}.~current 对应 now，旧地址被排除。
The {room number} is ___ on the [upper floor|1].~[Upstairs|1], look for {the door} marked C two eighteen.~upper floor 对应 upstairs，房间号另听。
The [revised|1] starting time on Wednesday is ___ .~The start has been [changed|1] from twelve to twelve thirty for the {midweek meeting}.~revised 对应 changed，旧时间不是最终时间。
At [beginner|1] level, previous ___ experience is not required.~People joining can be [complete newcomers|1] to playing; performance experience is not required.~beginner 对应 complete newcomers，不是只接收有舞台经验者。
A [second-hand|1] website may help learners find a ___ .~An online marketplace selling [previously owned|1] guitars may help you find {an instrument}.~second-hand 对应 previously owned，并非免费借用。
The [initial|1] activity involves [tuning|2] the ___ before everyone plays together, even if members believe their instruments already sounded correct before {the journey} to {the lesson}.~{An instrument} can change on {the journey}, so [at the start|1] everyone [adjusts the pitch|2] of {the strings}; {the teacher} listens before asking the {whole group} to begin {a tune}.~initial 对应 at the start；tuning 对应 adjusts the pitch，出门前调过仍要核查。
In {the rhythm} task, [strumming|1] replaces [individual|2] notes to maintain a regular ___, although both techniques will be useful when {the group} attempts {a complete song}.~Both techniques matter later, but to keep a {steady beat} we [brush across several strings|1], instead of sounding [single|2] notes one at {a time}; {the aim} here is a regular pulse.~strumming 对应 brush across several strings；individual 对应 single，阶段目标是节奏。
An [unfamiliar|1] chord is practised [slowly|2] until everyone can adopt the correct ___, {rather than} trying to keep the normal tempo from the very first attempt.~The {usual tempo} can wait: when {the hand} shape is [new|1], {the teacher} checks it [at a reduced speed|2], then returns to {the tune} once everyone can move into position.~unfamiliar 对应 new；slowly 对应 at a reduced speed，速度恢复在熟悉之后。
In the [final|1] activity, learners play [individually|2] so {the tutor} can hear ___ hidden by {the group's} sound, although most of {the session} involves playing together.~Playing together occupies most of {the lesson}, but [near the end|1] {each learner} may try a phrase [alone|2]; this lets {the tutor} hear details that disappear in {the combined sound}.~final 对应 near the end；individually 对应 alone，独奏只属末段安排。`,
paragraphs:[P('Finding a suitable group',`A learner worried about [being left behind=>not keeping up with others=>担心跟不上而非迟到]. The organiser said the class was [pitched at=>designed for the level of=>针对某能力水平] newcomers. A meeting room became available [at short notice=>with little advance warning=>通知时间短]. The old venue was [no longer in use=>not used now=>过去使用但现在停止]. The new member could [pick up=>buy or obtain=>此处指买到乐器] a used instrument. There was [no obligation to=>no requirement to=>不强制，而非不允许] perform publicly.`,['late for a meeting','still the regular venue','forbidden to']),P('During a lesson',`The teacher starts by [bringing the instruments into tune=>adjusting their pitches=>调音，不是加快速度]. Members then [keep time=>maintain the beat=>保持节拍]. They [go over=>practise again=>复习而非跳过] a difficult change. A recording gives [something to play along with=>an accompaniment=>配合练习的伴奏]. The speed is [built up gradually=>increased in stages=>逐步提速]. Before leaving, learners [make a note of=>write down=>记录课后要求] the week's practice task.`,['play at maximum speed','skip completely','a spoken explanation only'])],
signals:[{title:'Current arrangements',focus:'旧新地点、调整后的时间、初学要求。',text:`The guitar group began as a few neighbours meeting in the tutor's living room.
More people have joined since then, including several who had never played before.
We now use a room at the arts centre, so please do not go to the tutor's home.~now 与 do not 明确当前地点，排除旧址。
The centre also hosts a discussion group immediately before our lesson.
Because that group needs extra time, our session starts half an hour later than the time on the old leaflet.~因果结构引出最新时间变化，旧宣传单失效。
You should bring an instrument if you have one and a notebook for the practice task.
Previous performance experience is not required; the class is intended for people learning the basics.~not required 与 intended for 说明加入门槛。
Please contact the organiser if you need advice on finding a suitable instrument.`},{title:'Sequence of activities',focus:'先后顺序、动作区别、个体形式。',text:`A normal lesson contains several short activities rather than one long performance.
The teacher usually talks through the plan while people unpack their instruments.
Before the group plays together, everyone checks that the strings are at the right pitch.~before 限定调音是合奏前提。
The first playing exercise uses a simple rhythm and familiar chords.
When a new chord appears, we practise the hand position slowly before adding it to the song.~when 与 before 共同确定新和弦的处理顺序。
A recording may then help the group maintain a regular beat.
In the final activity, the teacher sometimes asks each person to play alone, rather than relying on the sound of the whole group.~final 与 each person 区分末段独奏和合奏。
The lesson ends with a short explanation of what to work on at home.`}]
});
R(2,2,{
coverage:'加入动机；慈善资金来源；健康评估中的担心与结果；响应时间分段；决定权；培训经历与个人收益。',
options:`负责长途运输的商船|只供训练使用的模拟船舱|为乘客提供观光的游艇
参加海边活动的游客|负责岸上募款的所有人|在船上接受救援的人
所有申请者正式入职|现有成员定期参加培训|从成员中选出最高负责人
只在近岸浅水区进行的|需要乘船但不过夜的|专门负责海上导航的
预先安排的普通训练|收到报警但无需响应的记录|每次值班结束后的总结
事故之后一次性更换全部设备|仅检查设备外观是否整洁|对人员能力作年度评分
实际事故的现场救援|不用设备的理论考试|已完成训练的结果报告
接受岗位之前的身体测试|在模拟场景中的最高成绩|保证所有任务都成功`,
grammar:[['He was worried about the test, but the result ___ satisfactory.（was / were）','was','担忧不等于不合格，but 后才是结果。','The suspected problem ___ ruled out after the examination.'],['The decision to launch rests ___ the person in command.（with / on）','with','rest with 表示决定权属于某人。','Responsibility for the final decision lies ___ the team leader.']],
locators:`Why did {the volunteer} [relocate|1] to {the coast}?~[Moving house|1] offered a way to pursue a long-standing interest in boats.~relocate 对应 moving house，原搬家动机不是后来的招募机会。
How was {the station} building [financed|1]?~{A local donation} [paid for|1] {the new base} {rather than} a central grant.~financed 对应 paid for，资金来源被纠正。
What was the outcome of {the medical} [assessment|1]?~{The examiner's} [check|1] found no problem with {the difficulty} initially suspected.~assessment 对应 check，怀疑与结论不同。
How is [response time|1] measured after {an alert}?~The [interval before volunteers react and arrive|1] is recorded separately from {the launch} itself.~response time 对应反应到站的时间，不能混合出港时间。
Who has [final authority|1] over launching the boat?~The person commanding the crew has [the last word|1] on whether departure is safe.~final authority 对应 the last word，指最终决定权。
What is the [preventive|1] purpose of public talks?~Speaking to local clubs can [stop difficulties developing|1] before rescue becomes necessary.~preventive 对应 stop difficulties developing。
Which TWO [practical|1] activities prepare volunteers for [emergencies|2], {rather than} simply giving them information about how the organisation began operating on {this coast}?~{The history} talk is useful background, but readiness depends on [hands-on|1] exercises, such as handling ropes under pressure and rehearsing what to do in [urgent incidents|2] before an actual call arrives.~practical 对应 hands-on；emergencies 对应 urgent incidents，组织历史不是技能演练。
Which TWO [previous|1] skills proved [useful|2] to {the team}, despite having been acquired before {the volunteer} considered joining a coastal rescue organisation?~I had learned first aid and digital record keeping [earlier|1] in quite different jobs; both turned out to be [valuable|2] here, although neither had been taught specifically for rescue work.~previous 对应 earlier；useful 对应 valuable，技能来源与新用途不同。
Which TWO personal [benefits|1] does {the volunteer} [emphasise|2], {rather than} {the practical skills} that the interviewer has already asked about earlier in the conversation?~{The practical skills} matter, of course, but I would [stress|2] two personal [gains|1]: learning to stay calm when several things happen at once, and knowing I can trust {my colleagues}.~benefits 对应 gains；emphasise 对应 stress，问题转向个人收益。
Which TWO features of [winter|1] work affect {the volunteer's} [attitude|2], even though the difficult conditions do not make {the volunteer} unwilling to take part?~{The long nights} in [the colder months|1] demand more effort, but my [feelings about the work|2] are still positive: helping in a serious incident can make those demanding shifts especially worthwhile.~winter 对应 colder months；attitude 对应 feelings about work，困难与肯定态度并存。`,
paragraphs:[P('Choosing to volunteer',`An interest in boats [went back to=>had existed since=>爱好起源早于招募]. The applicant [put his name forward=>offered to be considered=>申请而非确认录用]. A medical concern [turned out to be unfounded=>proved not to be a real problem=>担心被排除]. The team [relies on=>depends on=>资金依赖关系] donations. Crew members must [be on call=>be ready to respond if needed=>待命不等于一直在船上]. The leader [has the final say=>makes the ultimate decision=>最终决定权].`,['was rejected immediately','works continuously offshore','merely gives advice']),P('Learning and contributing',`Training [does not stop at=>continues beyond=>不会止于入门阶段] induction. An exercise [recreates=>simulates=>模拟而非真实事故] difficult conditions. Repetition helps staff [keep a cool head=>remain calm=>压力下冷静]. The volunteer can [draw on=>use knowledge gained from=>利用旧技能] earlier experience. Colleagues [look out for one another=>support each other's welfare=>相互照应]. Demanding incidents can be [deeply rewarding=>strongly satisfying=>价值感而非轻松].`,['effortless','a real emergency','forget previous skills'])],
signals:[{title:'From interest to responsibility',focus:'动机、资金来源、决定权。',text:`I had enjoyed small boats long before I moved to this coastal town.
At first I simply hoped to spend more of my spare time near the water.
Joining the rescue team came later, after I noticed that it was seeking new volunteers.~came later 区分原搬家动机与后来加入契机。
The station is a familiar building to most people in the area.
It was paid for by a private donation, rather than through the government budget many visitors assume supported it.~rather than 更正资金来源假设。
There are people working on equipment, training and public information as well as the crew.
When a launch is considered, the final decision belongs to the person in command of the boat.~When 引入出港情景，final decision 标明职权归属。
That responsibility continues even when the whole team is eager to respond.`},{title:'What training changed',focus:'担心与结果、持续培训、收益。',text:`The application process included an assessment and a discussion of the duties I could realistically undertake.
One part of the medical check made me anxious at first.
Fortunately, the suspected difficulty was ruled out, so it did not prevent me from joining.~Fortunately 与 ruled out 说明最终结果，不把担心当事实。
The introductory course was only the first part of a longer learning programme.
Training has continued throughout my time here, with practical exercises under increasingly demanding conditions.~throughout 说明持续培训，非仅入门。
My previous work also gave me skills I could share with other members.
The greatest change for me is the confidence to remain calm when several things need attention at once.~greatest 明确个人最看重的收益。
I still find some nights difficult, but the support of the team makes the work worthwhile.`}]
});
R(2,3,{
coverage:'看法改变；数量与比例；拒收原因与外观干扰；不同鞋类原因匹配；消费者真实拒绝理由。',
options:`只指运动时穿的鞋|只指已经损坏的旧鞋|制作鞋子所用的全部材料
供二手商品继续销售的商店|把废物拆成原料的工厂|给可再用物品临时分类的仓库
直接把旧物加工成原料|将物品按捐赠日期记账|把一批物品全部清洗
能在无工具条件下拆下的|只使用一种材料制成的|已经过分拣和消毒的
正常使用造成的磨损|不同材料难以分离的结构|鞋子原有的颜色差异
按同样尺寸排好序的|由同一种材料制成的|已经修好可以出售的
物品最初设计的款式|产品当前的市场价格|物品原主人使用的年数
永久缝接不可取下的|可伸缩但不可分开的|能在湿水后恢复形状的`,
grammar:[['Sales rose, ___ the proportion recycled fell.（while / because）','while','总销量增长与回收比例下降可并存。','More shoes were sold, ___ a smaller share entered reuse.'],['The pair was rejected ___ the colours differed.（because / although）','because','拒收原因要从细节中确定。','The usable parts were not matched ___ their sizes were incompatible.']],
locators:`How did the student's [initial|1] opinion of recycling change?~She [originally|1] expected {a simple charity}-shop topic but discovered a much more complex system.~initial 对应 originally，变化前后不可混同。
What [disagreement|1] concerns school footwear?~One considers casual shoes unsuitable, but the other [holds a different opinion|1] about smarter styles.~disagreement 对应 holds a different opinion，观点主体不同。
Why does the student [discard|1] shoes that {still work}?~They {remain wearable}, but she [gets rid of|1] them because she dislikes {their appearance}.~discard 对应 gets rid of，不一定因为损坏。
What trend concerns recycling [rates|1]?~The [proportion returned|1] has fallen, even though the total number purchased has increased.~rates 在此对应 proportion returned，比例不等于购买总量。
Why did the rebuilt pair fail to [appeal to|1] buyers?~It did not [attract|1] customers because the two shoes looked visibly different.~appeal to 与 attract，实际原因是外观不一致。
What [broader|1] perspective do the students propose?~They suggest a [wider|1] view, including what happens after collection {rather than} only personal habits.~broader 与 wider，研究范围延伸到捐赠之后。
Why were the [light-coloured|1] boots [rejected|2], despite the fact that {their heels} were sound and {the material} was strong enough for continued use?~{The heels} were sound and {the boots} were still sturdy, but the [pale|1] pair was [turned down|2] because one side had faded much more than the other during storage.~light-coloured 对应 pale；rejected 对应 turned down，结构完整不保证可收。
Why were the [children's|1] shoes unsuitable for [donation|2], although the item that reached the sorting table appeared new and showed no obvious sign of wear?~There was no wear on the [young person's|1] shoe, but {its partner} {could not be found}; the [gift to the charity|2] therefore could not be accepted as a usable pair.~children's 对应 young person's；donation 对应 gift to charity，缺少另一只才是关键。
Why were the [sports shoes|1] unsuitable for [resale|2], even though {their upper surfaces} looked considerably cleaner than those of several pairs that {the charity} accepted?~{The uppers} looked clean, but the [running pair|1] had {a hole} underneath; without {a sound sole} it could not be offered for [sale again|2], however attractive it appeared from above.~sports shoes 对应 running pair；resale 对应 sale again，鞋面外观为干扰。
Why were the [formal|1] shoes [set aside|2], despite having been worn less often than many of {the other items} examined during the sorting session?~The soles showed little wear, but the [dress|1] pair had permanent marks across {the uppers}; staff [put them to one side|2] because cleaning would not remove {those stains}.~formal 对应 dress；set aside 对应 put to one side，穿得少不代表能去除污渍。`,
paragraphs:[P('Following a donation',`A collector first [sorts through=>examines and separates=>检查分类，不是重新加工] the items. Some are [fit for reuse=>suitable to be used again=>仍适合原用途]. Others are [beyond repair=>too damaged to restore=>无法修复]. A missing partner can [rule a pair out=>make it unsuitable=>配对条件不满足]. Different materials may be [bonded together=>joined so they are difficult to separate=>复合结构妨碍拆解]. Collection therefore does not [amount to=>mean the same as=>收集与实际回收不是同一概念] successful recycling.`,['automatically ready for sale','easy to detach','guarantee']),P('Finding the actual reason',`A damaged surface can [put buyers off=>discourage customers=>购买态度而非物理阻止]. One explanation was [a red herring=>a distracting but irrelevant possibility=>听到但不是实际原因]. The students [traced the problem back to=>identified the underlying source as=>追溯实际原因] uneven fading. They [set that apart from=>distinguished it from=>区分相近问题] ordinary wear. A usable object can still [fall short of=>fail to meet=>不满足特定接收标准] resale requirements. The account [goes beyond=>examines more than=>研究范围超过个人行为] what happens at the donation point.`,['the confirmed cause','meet every standard','is limited to'])],
signals:[{title:'A topic becomes more complex',focus:'原看法与新认识、比例变化、研究范围。',text:`I originally thought our presentation would be a straightforward account of donating old shoes.
There are collection boxes at several shops near where I live.
After reading the report, I realised that collection is only the start of a much longer sorting process.~After reading 标记认识改变，only the start 限定流程。
Some items can be sold again, while others have parts that are difficult to separate.
What surprised me was that purchases had increased while the share being reused had declined.~surprised 与 while 对照总量和比例。
That seems worth explaining with a simple diagram rather than more personal examples.
We should focus on what happens after people donate, instead of judging the whole system from our own habits.~should focus 明确新的研究范围。
The manager's examples will help show why apparently usable items may still be rejected.`},{title:'Rejected for different reasons',focus:'物品原因匹配、先否定后纠正、真实购买理由。',text:`The sorting manager gave several examples of donations that could not be resold.
Not every rejected pair was badly worn or poorly made.
The pale boots were rejected because one had faded much more than the other, not because the heels were damaged.~物品和真实原因对应，not 排除相近损坏因素。
Another pair had hardly been worn and still looked new.
In that case, the difficulty was simply that the matching shoe could not be found.~In that case 切换对象，原因变为缺少配对。
The project also tried combining sound parts from different old shoes.
Buyers objected to the mismatched appearance; the report did not establish hygiene as the reason for refusing them.~区分实际反馈与听者可能的卫生推断。
Those examples give us different reasons to match, rather than one general explanation about quality.`}]
});
R(2,4,{
coverage:'外观类别与具体特征；器官功能替代；耐受范围；隐生诱因、过程与复苏；可重复证据与未经复验记录。',
options:`用肉眼可以轻易分辨的|只能在照片上存在的|仅由单个细胞构成的
在所有环境中永不受损的|始终保持活跃不休眠的|能主动改变周围环境的
动物完全停止生存的状态|通过快速繁殖应对环境|一种保持正常活动的适应
生物外表发生的颜色变化|动物在环境中的移动速度|生物摄取食物的频率
摄取过量水分的过程|转入温度更高区域的过程|通过皮肤排出毒素的过程
再次进入休眠的过程|改变身体形状的过程|从水中排出杂质的过程
只用于感知外界的触须|帮助摄入液体的口器|体表覆盖的柔软保护层
用于吸附表面的圆盘|进行呼吸的细小管道|体内运送液体的空腔`,
grammar:[['When conditions improve, activity can ___ .（resume / resumed）','resume','can 后接动词原形；恢复不是重新产生生命。','Normal movement may ___ after moisture returns.'],['The older result has never ___ independently repeated.（been / being）','been','完成被动，未经重复验证的证据要谨慎。','That unusually long survival claim has not ___ confirmed by another team.']],
locators:`{The animal's} [nickname|1] partly reflects its ___ .~Its [informal name|1] comes from a familiar resemblance in {its gait}.~nickname 与 informal name，名称来源与步态有关。
Each of the repeated [segments|1] bears two ___ .~Each of the small [sections|1] bears two legs.~segments 与 sections，分节与附肢数量区别。
{Some species} [adhere|1] to surfaces using ___ .~Certain forms [hold on|1] by suction instead of using {hooked feet}.~adhere 对应 hold on，吸附与钩爪是不同机制。
The [absence|1] of lungs means transport relies on ___ .~There are [no|1] dedicated lungs, so fluid within the {body cavity} carries substances.~absence 与 no，否定为同一缺失关系。
Pointed mouthparts are used to [puncture|1] ___ .~{The feeding} structures [pierce|1] a cell wall {rather than} chew solid food.~puncture 与 pierce，不是咀嚼。
The threat of ___ can [trigger|1] an inactive state.~The threat of drying can [bring about|1] {a change} into the resting form.~trigger 对应 bring about，诱因与结果分开。
During [dormancy|1], chemical ___ is [drastically reduced|2], {rather than} maintained at {the usual level} observed when food and moisture are readily available around {the animal}.~In the [inactive state|1], normal chemical activity becomes [extremely low|2]; this helps explain survival under difficult conditions, but it does not mean {the animal} is functioning normally throughout {that period}.~dormancy 对应 inactive state；drastically reduced 对应 extremely low，不把存活当正常活动。
Certain [compounds|1] [preserve|2] material inside ___ during the {inactive period}, although {this protection} does not guarantee that {every animal} will survive indefinitely in difficult conditions.~Survival is not unlimited, but [substances|1] produced in the resting form can [protect|2] important material inside cells, reducing damage while {the animal} cannot maintain {its usual level} of activity.~compounds 对应 substances；preserve 对应 protect，保护作用有范围。
[Revival|1] can begin when moisture is [restored|2], provided {the animal} has survived ___ {rather than} suffered irreversible damage that the return of water cannot repair.~Water cannot reverse {every injury}, but if {the animal} has survived, activity can [resume|1] once moisture becomes [available again|2]; the return of movement is {a recovery} from inactivity.~revival 与 resume 建立恢复关系；restored 对应 available again，复苏有存活前提。
The claim lacks [independent|1] [verification|2] through ___, {rather than} having been established by {several research} teams reproducing {the result} under conditions comparable with those in the {historical report}.~It is a striking report, but no [separate team|1] has supplied [confirmation|2] by reproducing {the result}; an {old account} should therefore not be presented with the certainty of a {repeatable finding}.~independent 对应 separate team；verification 对应 confirmation，缺乏复验不等于已证伪。`,
paragraphs:[P('Structure and function',`The animal is [barely visible=>almost too small to see unaided=>接近肉眼观察极限]. Its nickname [stems from=>originates in=>名称来源] a familiar resemblance. The body [is made up of=>consists of=>组成关系] repeated sections. Some forms [cling to=>hold tightly onto=>附着行为] surfaces without hooks. A mouthpart can [puncture=>pierce=>刺穿而非咀嚼] a cell. Similar appearance does not [imply=>necessarily indicate=>不能只由相似推断功能相同] identical functions.`,['chew into pieces','clearly visible from a distance','has no relation to']),P('Surviving inactivity',`A drying threat can [bring about=>cause=>触发状态变化] dormancy. Activity is [drastically reduced=>lowered to a very small level=>大幅降低，不等于确认死亡]. The animal may [remain in that state=>stay in the same condition=>持续状态] for a long period. Water allows activity to [start up again=>resume=>恢复活动]. An exceptional claim should be [independently verified=>confirmed by a separate investigation=>独立验证]. Without that check, it is [not firmly established=>not securely demonstrated=>证据不充分而非已经被证伪].`,['proved false','maintained at the usual level','automatically accepted'])],
signals:[{title:'A small animal with several features',focus:'结构、替代功能、口器作用。',text:`The organisms in this example are so small that close observation is needed to examine their structure.
Several familiar nicknames refer to how they look or move.
The body has repeated sections, and each of those sections carries a pair of limbs.~从名称转入具体结构与配对数量关系。
Many species have small hooks at the ends of those limbs.
Some forms, however, attach by suction instead, so a hook is not a feature shared by every species.~however 与 instead 限定普遍性并引出功能替代。
The mouth also contains specialised structures that can be difficult to see.
Their role is to pierce material and obtain fluid, rather than to chew it as teeth might suggest.~rather than 区分名字引发的联想与实际功能。
We should therefore be careful about using ordinary words as if they described identical structures.`},{title:'Dormancy and evidence',focus:'触发条件、复苏条件、证据强度。',text:`The animals' ability to tolerate difficult conditions has attracted considerable research interest.
They do not remain equally active in every environment they can survive.
When drying threatens, they can enter a protective inactive state in which ordinary activity becomes extremely low.~when 表明诱因，并限定耐受不等于正常活动。
Some reports describe that condition continuing for a very long period.
Activity can resume when moisture returns, provided that the animal has survived the interval.~复苏有水分和存活前提，不是无条件恢复。
Historical accounts sometimes give especially striking survival durations.
The most exceptional of those claims should be treated cautiously because it has not been independently reproduced.~because 引出谨慎对待的证据原因。
A recorded claim and a repeatable finding should not be presented as having the same certainty.`}]
});
R(3,1,{
coverage:'店铺位置与参照物；班车信息；出售项目与自制商品；数量单位、单复数、季节供货与替代品。',
options:`加工后可以长期保存的全部食品|只供农场自己消费的收成|任何在店内摆放的商品
只在本地生产的|完全不经过包装的|已经证明营养更高的
只指一台烤面包的机器|只指当天出售的面包|只提供面粉的工厂
工作人员专用的出口|店内通往楼上的通道|整幢建筑的中心区域
需要预先购票的目的地|用于划定行政区的标志|指示营业时间的通知
不限路线随叫随到的车|只运货不载人的车辆|必须另行安排的出租车
用容器精确量出的份量|一次购买的最大法定数量|商店整袋包装的商品
所有切片面包的总称|单独的一片面包|烤面包用的一袋面粉`,
grammar:[['A loaf is sold whole, whereas rolls ___ counted individually.（are / is）','are','loaf 与 rolls 的计量和单复数不同。','The small rolls ___ priced separately from the large loaf.'],['If the seasonal item is unavailable, staff ___ suggest an alternative.（can / has）','can','缺货时可能建议替代，并非永远有货。','The assistant ___ offer a substitute when the usual variety is unavailable.']],
locators:`{The shop} entrance is [opposite|1] the ___ .~Use the smaller door [across from|1] {the old clock}, {rather than} {the delivery} gate.~opposite 对应 across from，入口对象受限定。
The [complimentary|1] minibus leaves from the ___ .~Our [free|1] transport picks up passengers beside the rail forecourt at the marked stop.~complimentary 对应 free，不是表扬服务好。
{The vegetables} are [locally grown|1] and described as ___ .~{The crops} are [produced nearby|1], without the specified artificial treatments.~locally grown 对应 produced nearby，本地与生产标准是两个信息。
{The bread} is made [on site|1] in the ___ .~{The loaves} come from {our own ovens} [here in the building|1].~on site 对应 here in the building，非外部供应。
The seasonal opening time is [altered|1] in ___ .~During the {warmer months} the {morning hours} are [changed|1] for deliveries.~altered 对应 changed，调整发生的季节另听。
{The recipe} requires a [handful|1] of ___ .~For the soup, you need [as much as fits in one hand|1], not {a full packet}.~handful 对应一手握得下的量，不是整包。
The customer wants one [whole|1] loaf that is not [cut into slices|2], since it will be divided later once the rest of the ___ is ready.~We will share {the bread} outdoors, so please do not have it [sliced|2]; one [complete|1] loaf will be enough, and we can divide it ourselves once the rest of {the food} is ready.~whole 对应 complete；cut into slices 对应 sliced，两句都排除预先切片。
An [alternative|1] from another local ___ is offered because the usual variety is [unavailable|2], although the customer still wants fruit produced nearby {rather than} imported goods.~{The usual apples} are [out of stock|2] today, but we can offer a [substitute|1] from another {nearby grower}; that keeps {the local source} without delaying {your order} until {next week}.~alternative 对应 substitute；unavailable 对应 out of stock，替代品仍满足本地产地要求。
Fresh berries can be [stocked|1] during the [harvest|2], whereas {the shop} sells ___ fruit {in winter} and cannot promise {the same fresh choice} {throughout the year}.~Frozen fruit is available {in winter}, but fresh berries can only be [kept for sale|1] when [the crop is ready|2] nearby; we do not promise {the same fresh selection} in {every season}.~stocked 对应 kept for sale；harvest 对应 crop is ready，鲜果与冻果不混同。
To have an item [reserved|1] for collection, customers must contact {the shop} [before|2] ___, {rather than} assuming that anything requested will remain available until closing.~We can keep an item for you, but please call [ahead of|2] {the stated deadline} to have it [put aside|1]; simply arriving late does not guarantee {that stock} will still be available.~reserved 对应 put aside；before 对应 ahead of，预留有联络时限。`,
paragraphs:[P('Finding the shop',`The store is [within walking distance=>close enough to reach on foot=>步行可达，不是必须步行]. A sign is [easy to miss=>not readily noticed=>容易忽略]. Customers should [look out for=>watch for=>留意参照物] the clock tower. A minibus runs [at regular intervals=>with a consistent gap between trips=>固定班次]. The service is [complimentary=>provided without a fare=>免费而非必须提前付费]. It stops [just short of=>a little before reaching=>在目标前一点] the main entrance.`,['available on demand','beyond the entrance','charged separately']),P('Buying what is available',`Fresh items are [locally sourced=>obtained from nearby suppliers=>来源本地，不保证其他生产标准]. Some are [in short supply=>available in limited quantities=>供应有限而非完全售罄]. Staff may [set something aside=>reserve an item=>预留而非丢弃]. A substitute is [an alternative=>another suitable option=>替代品，不是额外必须购买]. Bread is sold [by the loaf=>as a whole baked unit=>计价单位，不是每片]. Herbs can be bought [in small quantities=>in modest amounts=>小份而非只售整箱].`,['completely sold out','an additional compulsory purchase','per slice'])],
signals:[{title:'Directions and transport',focus:'入口参照、班车区别、营业时段。',text:`The food store is in the converted building beside the old rail yard.
Several visitors first notice the large delivery gate on the roadside.
Customers should use the smaller door opposite the clock tower, not the gate used by the vans.~区分顾客入口与送货入口，opposite 提供参照。
There is a short walk from the station through the public square.
If you need the courtesy minibus, wait at the marked stop; it follows a timetable rather than operating on request.~if 限定乘车情形，rather than 区分定时与随叫。
The timetable is displayed on the notice board beside the stop.
During the harvest season the shop opens earlier, but the closing time remains unchanged.~季节变化只影响开门时间，不能扩大到闭店。
Please check the board if you are arriving before the usual morning hours.`},{title:'A shopping enquiry',focus:'计量、缺货与替代、预留条件。',text:`I am shopping for a small picnic and do not need a large amount of anything.
The assistant suggested a few local vegetables and some bread from the store's ovens.
For the bread, I want one whole loaf, not several individual rolls.~明确单位与数量对象，排除相近面包形式。
The herbs for the dressing will only be needed in a small amount.
The usual apple variety has sold out, but another variety from a nearby grower is available as a substitute.~but 从缺货转向可用替代，不是原品补货。
That would suit us as long as it can be collected later today.
To have it reserved, I need to contact the shop before the collection deadline rather than simply arriving at closing time.~条件与行动时点对应，预留不是自动发生。
I will confirm the quantity once I have checked how many people are coming.`}]
});
R(3,2,{
coverage:'不同活动各自的参与方式与年龄范围；主题和主要收益区分；跨年龄建议与活动评价。',
options:`只观看讲者演示的讲座|单纯展示成品的展览|以正式考试结束的课程
只为作品校对文字的人|负责出版发行图书的人|在活动现场出售图书的人
只逐字朗读书面文字|只请儿童自己写故事|只演出已经改编的剧本
每个人单独完成相同任务的|老师为每个人完成作品的|只由两位专家共同主持的
完全不改动文字的复印版|针对原作进行的字词校对|将多本书按类型分类
只能通过网络观看的|参与者可随意更改规则的|无需任何指导即可完成的
所有年龄都使用同样要求的|只按人数安排活动的|必须已有阅读能力才能参加的
活动报名人数的多少|听众对作品评分的高低|场地容纳所有人的能力`,
grammar:[['The activity is designed for children ___ are new to chapter books.（who / which）','who','关系从句限定适合对象。','The session welcomes readers ___ prefer short illustrated stories.'],['Adults may join in, but they ___ do the task for the children.（should not / need not）','should not','不应代做与不必参与不是同义。','Parents ___ complete the illustrations on behalf of younger participants.']],
locators:`What distinguishes the [illustration|1] workshop for younger children?~In the [drawing|1] session, beginners invent characters without writing a {full story}.~illustration 对应 drawing，绘画与写作要求区分。
How does the storytelling event involve the [audience|1]?~The [listeners|1] help decide what happens next {rather than} only hearing a prepared tale.~audience 对应 listeners，参与方式另听。
What does each child [contribute|1] to {the group} book?~For the {shared volume}, each participant [adds|1] one page, not a {whole book}.~contribute 对应 adds，个人贡献不等于完整成果。
What [source material|1] is used in the adaptation activity?~A [familiar tale|1] is changed into a {short scene} in {the performance} workshop.~source material 由 familiar tale 具体化，场景是改编结果。
How do [adolescents|1] take part in {the readers'} session?~[Teenage participants|1] compare endings and argue for {the version} they prefer.~adolescents 对应 teenage participants，年龄对象与活动分开。
How is reading [shared|1] in {the family} activity?~Adults and children [take turns|1] describing {the pictures} instead of leaving all the talk to adults.~shared 在此通过 take turns 体现。
Which TWO suggestions help [reluctant|1] readers gain [interest|2], {rather than} simply increasing {the number} of pages {an adult} expects them to finish {each day}?~For children [unwilling|1] to begin, choosing {their own subject} and sharing a {short extract} aloud may encourage [curiosity|2]; {a larger} {daily page target} could make {the experience} feel more demanding.~reluctant 对应 unwilling；interest 对应 curiosity，页数指标可能反而增加压力。
Which TWO [requirements|1] should parents check [before booking|2], even when {the activity's} title sounds suitable for a child who already enjoys stories?~{The title} describes {the theme}, not all the [conditions|1]; [prior to reserving a place|2], check the {age guidance} and whether {an adult} must stay, as these differ between sessions.~requirements 对应 conditions；before booking 对应 prior to reserving a place，主题不等于报名条件。
Which TWO benefits arise when children [collaborate|1] on {a story} and [justify|2] {their choices}, {rather than} completing independent pages without discussing them with other participants?~Children [working together|1] must build on another person's idea and [give reasons for|2] a decision; {that exchange} is missing when everybody writes {a separate page} without talking about the developing story.~collaborate 对应 working together；justify 对应 give reasons for，合作与并排独作不同。
Which TWO [restrictions|1] apply to the [illustration room|2], although visitors may enter some of {the other festival} spaces without reserving a place or borrowing special materials?~Elsewhere you may drop in, but the [drawing studio|2] has two [limits|1]: places must be booked, and only the {listed materials} may be used because {the tables} serve {several groups}.~restrictions 对应 limits；illustration room 对应 drawing studio，不把单房间规则扩展到全场。`,
paragraphs:[P('Choosing a session',`The festival aims to [spark interest=>arouse curiosity=>激发兴趣，不保证立刻熟练]. Activities [range from=>extend across a variety beginning with=>范围多样] quiet reading to performance. Age guidance [gives an indication of=>offers a general guide to=>指引而非所有能力的精确评定] difficulty. Some children prefer [hands-on work=>practical participation=>亲手参与]. Others enjoy [joining in=>taking part alongside others=>加入活动而非主持]. Families should [check in advance=>confirm before arrival=>到场前核实] supervision rules.`,['watching without taking part','a precise guarantee','organise the event']),P('Supporting a reader',`A reluctant reader may [be put off by=>feel discouraged by=>产生退缩的原因] a long page. A short extract can [break the ice=>make it easier to begin=>降低开始的心理门槛]. Choice helps create [a sense of ownership=>a feeling of personal involvement=>参与感，不是法律产权]. An adult should [follow the child's lead=>respond to the child's interests=>顺应兴趣而非完全放弃引导]. Shared discussion can [bring a story to life=>make a narrative feel vivid=>生动理解]. Progress need not [be measured solely by=>be judged only through=>评价不能只看单一指标] reading speed.`,['legal possession','force a fixed preference','judge exclusively'])],
signals:[{title:'Activities with different purposes',focus:'活动匹配、参与要求、年龄范围。',text:`Our reading festival offers activities in several rooms throughout the day.
Some sessions use familiar stories, but that does not mean they all involve the same kind of participation.
In the illustration room, children invent a character through pictures without needing to write a complete narrative.~In the illustration room 绑定活动与要求。
The neighbouring room hosts a session with a visiting storyteller.
There the audience helps choose the next event, rather than simply listening to an uninterrupted reading.~There 延续地点，rather than 区分参与方式。
Older readers have a separate discussion after lunch.
Please check the stated age guidance before booking, since the discussion assumes an interest in comparing different interpretations.~before 与 since 说明适合对象及原因。
The programme gives the room and supervision arrangements for every event.`},{title:'Helping someone begin',focus:'对象、建议和禁忌、收益界限。',text:`Parents often ask how to help a child who avoids longer books.
There is no single choice of book that will suit every family.
One useful starting point is to let the child choose a subject, rather than deciding only by the adult's preferences.~rather than 指出选择权的安排。
A shared extract can then give both people something to discuss.
The adult should support the conversation without taking over every turn or completing the child's contribution.~without 明确帮助与代替的边界。
Some families enjoy returning to the same short text several times.
What matters is growing involvement with the story, not merely an increase in the number of pages completed.~not merely 限定评价标准，重点是参与而非数量。
The festival volunteers can recommend different starting points if the first choice does not appeal.`}]
});
R(3,3,{
coverage:'学生反应与实验可行性；数据可得性、伦理与外推；实验控制；流程顺序、容器用途与计算。',
options:`实验后已经确认的结论|只记录观察内容的日志|没有检验可能性的个人偏好
必须在实验中完全消除的误差|同一组内所有个体的共同点|实验最后计算出的平均值
不作任何观察的空白记录|每次重新重复实验的步骤|负责检查仪器的实验人员
在原报告上重新计算结果|只复制旧实验的书面说明|改变主要条件后直接比较
对结果给出的主观解释|提前猜测数据的大致范围|记录实验总共持续的日期
实验完成后的最高读数|对所有实验结果求出的平均数|用于宣传研究的理想目标
只用于盛放废弃材料的袋子|测量时间的电子设备|给样本编写的识别标签
实验起点和终点的日期|两组样本之间的大小差异|测量结果可能波动的范围`,
grammar:[['Keep all conditions constant ___ the tested variable.（except / despite）','except','只改变被测变量，其余受控。','The procedure controls every factor ___ the condition under investigation.'],['Record the baseline before ___ the treatment.（introducing / introduced）','introducing','流程先后，before 后接动名词。','Take the first measurement before ___ any supplement.']],
locators:`How do both trainees feel about pupils' [questions|1]?~They were impressed by how carefully {the class} [asked for reasons|1].~questions 由具体提问行为 asked for reasons 体现。
What concern affects the proposed [diet survey|1]?~The [study of eating habits|1] may lack sufficiently complete {food records} for {a comparison}.~diet survey 对应 study of eating habits，问题在资料完整性。
What limits [applying|1] {animal findings} to people?~Results from one species may not [transfer|1] reliably to another, even after a well-designed experiment.~applying 在跨物种语境中对应 transfer。
Which research question do they [select|1]?~They [choose|1] to investigate whether {the extra ingredient} changes feeding behaviour.~select 与 choose，讨论过不代表最终选择。
What possible [extension|1] follows the {first experiment}?~A [further stage|1] could test {another level} of {the ingredient} if the {initial comparison} works.~extension 对应 further stage，后续有前提。
Select subjects at an [equivalent|1] stage before dividing the ___ .~Before dividing {the sample}, choose individuals at a [comparable|1] stage of development.~equivalent 与 comparable，控制起始状态。
Use [distinct|1] codes to [differentiate|2] {the groups} without changing the measurement ___, {rather than} treating {the label} as {another condition} that could influence the {experimental result}.~Keep the {measurement conditions} the same, but give {each group} a [different|1] code so you can [tell them apart|2]; {the label} records {the group} and is not {another treatment}.~distinct 对应 different；differentiate 对应 tell apart，标签不是实验变量。
Add the [supplement|1] only to the ___ given to the [experimental group|2], {rather than} putting it into {both groups} before {the comparison} of {their development} begins.~{Both groups} receive the {ordinary mixture}, but only the [treatment set|2] gets the extra [ingredient|1]; otherwise you could not compare its effect with {a group} that had not received it.~supplement 对应 ingredient；experimental group 对应 treatment set，对照组不加。
Use the ___ to prevent [escape|1] [during|2] weighing, {rather than} introducing {a separate treatment} or handling one group differently from the other during the measurement procedure.~{The chamber} is used [while|2] a measurement is taken, simply to stop {the subject} [moving away|1]; it is not intended as {a separate treatment}, so {both groups} are handled in the same way.~escape 对应 moving away；during 对应 while，器具用途不是另一处理条件。
Complete [calculations|1] [after|2] all readings are on the ___, {rather than} comparing results while missing notes could still be mistaken for real differences between {the groups}.~Finish recording first; [once|2] all {the readings} are on {the sheet}, [work out the figures|1] needed for comparison, so that missing notes are not mistaken for differences between groups.~calculations 对应 work out figures；after 对应 once，流程完成后再计算。`,
paragraphs:[P('Selecting a workable experiment',`A proposal may [sound promising=>appear worth pursuing=>看似有希望，不保证可行]. The students must [gain access to=>obtain permission to use=>取得资料使用机会] suitable records. Results could be [hard to interpret=>difficult to explain reliably=>解释困难而非数据完全没有]. Animal findings may not [carry over to=>apply in another context to=>跨情境适用] humans. The pair [narrowed down=>reduced the range of=>缩小选题范围] their question. They chose a comparison [within reach=>feasible with available resources=>现有条件可实现].`,['already proved','universally applicable','beyond available resources']),P('Keeping the procedure fair',`The groups should [start on an equal footing=>begin under comparable conditions=>起点可比]. One factor is [held constant=>kept unchanged=>控制变量]. Another is [deliberately varied=>changed as part of the test=>主动操纵的变量]. Readings are taken [at fixed intervals=>with equal gaps in time=>固定测量间隔]. A chamber [serves to=>has the purpose of=>器材用途] limit movement. Calculations come [once recording is complete=>after the data have been noted=>记录完成后进行].`,['changed unpredictably','before any observation','with unequal gaps'])],
signals:[{title:'Choosing the question',focus:'提议的局限、外推边界、最终决定。',text:`The first idea would involve collecting information about what children usually eat.
It is relevant to the course, and the topic might interest the class.
My concern is whether sufficiently complete records would be available, rather than whether pupils would enjoy it.~concern 明确担心维度，排除兴趣解释。
The alternative uses a controlled comparison with a small group of animals.
We should be cautious about applying those findings directly to people, even if the comparison itself is well designed.~even if 限定设计好不等于可直接外推。
That would still leave a useful question about the response within the species studied.
Let us choose a change in feeding behaviour as the main question and leave broader health claims for later research.~choose 明确最终题目，其他主张留后。
We can now outline a procedure that keeps the comparison manageable.`},{title:'Reading a procedure',focus:'起点控制、测量用途、计算顺序。',text:`The procedure needs to be clear enough for another class to repeat it.
We should list the equipment before describing what happens to each group.
First, select subjects at a comparable stage, so that an initial difference does not explain the outcome.~First 与 so that 表明筛选及控制目的。
Each group can then be given a code that distinguishes it without changing the treatment.
During measurement, the chamber keeps the subject in position; it is not another treatment condition.~器具用途明确，排除误当实验变量。
The readings should be entered on the sheet immediately.
Only when the measurements have been recorded should the class calculate and compare the results.~Only when 与倒装指定计算在记录之后。
That order makes errors easier to trace if the final comparison looks unexpected.`}]
});
R(3,4,{
coverage:'微塑料来源；暴露路径与效果分离；进入土壤的途径；实验目的、观察结果、原因与不确定性。',
options:`材料最初完整的产品|经过溶解后消失的物质|不同物质均匀混合的液体
天然形成但外观类似塑料的|只供实验室使用的|任何经过回收处理的
通过化学溶解形成的变化|材料接触空气后的燃烧|物品在储存中的自然增重
物质接触身体外表的过程|气体进入肺部的过程|食物离开体内的过程
同一地点所有生物的总数|某物种在食物中的营养成分|只指人类购买食品的过程
未经使用的纯净灌溉水|自然形成的干燥岩屑|只含植物落叶的覆盖层
生活在水面的微小鱼类|植物吸收营养的根系|让种子发芽的微生物总称
植物种子被传播到远方|植物完成开花结果|幼苗进入休眠状态`,
grammar:[['The particles were found, but their effects ___ uncertain.（remain / remains）','remain','检出不等于健康影响已确认。','The longer-term consequences ___ unclear despite the measurements.'],['The study asked whether exposure ___ growth.（affected / affecting）','affected','研究问题与实验结果分开，不能把问题当结论。','The researchers tested whether the material ___ development.']],
locators:`Synthetic fabric may [release|1] fibres during ___ .~Man-made material can [shed|1] small strands when washed.~release 对应 shed，形成来源与排放动作分开。
[Abrasion|1] breaks larger objects into tiny ___ .~[Repeated rubbing|1] can create {tiny pieces} from an originally larger item.~abrasion 对应 repeated rubbing，不是主动切割。
One entry route into animals is [ingestion|1] with ___ .~Wildlife may [swallow|1] {small particles} along with ordinary food.~ingestion 与 swallow 为名词到动作改写。
Effects on human health remain ___ despite widespread [detection|1].~[Finding particles|1] in many places has not settled what they do to people.~detection 对应 finding particles，检出不等于危害已证实。
Material applied to [agricultural land|1] can carry plastic ___ .~Substances spread on [fields|1] may carry small {plastic residues} into {the ground}.~agricultural land 对应 fields，进入路径另听。
Earthworms [enhance|1] soil quality by ___ {the ground}.~{These animals} mix {the ground} and [improve|1] {its condition}.~enhance 对应 improve，正常生态角色与实验影响分开。
To test [exposure|1] and [development|2], researchers used a ___ group {rather than} treating {the detection} of particles alone as proof that a {biological effect} had occurred.~The presence of particles was already known; researchers wanted to see whether [contact with the material|1] altered [growth|2], using a {comparison group} instead of treating detection itself as a {biological effect}.~exposure 对应 contact with material；development 对应 growth，目的不是检出。
The [exposed group|1] showed [reduced|2] ___ compared with untreated subjects, although {this observation} alone {could not establish} {the mechanism} responsible for the difference.~Subjects [receiving the material|1] gained [less|2] mass than the {comparison group}; that was an {observed outcome}, but further tests were needed to explain exactly why the two groups developed differently.~exposed group 对应 receiving material；reduced 对应 less，结果和机制分开。
One [proposed explanation|1] concerns [feeding|2], but ___ was controlled in {the comparison} {rather than} being accepted as an established cause of the observed difference between {the groups}.~Age was controlled in {this comparison}; a [possible reason|1] is that {the animals'} [food intake|2] changed, but {the experiment} did not directly establish {that mechanism} or justify generalising it to other species.~proposed explanation 对应 possible reason；feeding 对应 food intake，推测不可升级为结论。
[Further research|1] across [multiple generations|2] is needed to understand continued ___, {rather than} assuming that an immediate change in {a short trial} reveals all the later consequences.~{The short trial} cannot answer every question; [later studies|1] should follow what happens to [offspring and their descendants|2], as an immediate change may differ from the consequences of continued contact.~further research 对应 later studies；multiple generations 对应 offspring and descendants，跨代不同于单次短试验。`,
paragraphs:[P('From product to particle',`A larger object can [break down into=>fragment into=>分解成碎片，不一定化学消失] small pieces. Fibres may be [released=>shed=>从材料脱落] during use. Particles can [find their way into=>enter=>进入途径] soil. Their presence is [well documented=>supported by many records=>存在证据充分]. However, presence alone does not [tell us the extent of=>establish how large something is=>无法单凭检出判定影响程度] harm. Exposure and outcome must be [kept distinct=>treated as separate questions=>接触与后果分开].`,['proved harmless','disappear chemically','considered identical']),P('Interpreting a study',`The experiment compared an [exposed group=>set receiving the material=>处理组] with a control. A difference in growth [came to light=>was revealed=>结果被观察到]. One possible mechanism was [put forward=>proposed=>提出解释，不等于证实]. The team did not [pin the change on=>identify as the definite cause=>不能直接认定原因] a single process. A short trial cannot [settle the question of=>provide a final answer about=>无法终结长期问题] lifetime effects. More work would [fill in the gaps=>supply missing evidence=>补足证据].`,['established beyond doubt','the definite cause','a final answer already available'])],
signals:[{title:'Routes and effects',focus:'材料来源、进入途径、检出与危害。',text:`Small plastic particles can originate from several ordinary products and processes.
They are not all manufactured as small pieces from the start.
Repeated wear can release fragments from larger objects, while washing can detach fibres from some fabrics.~区分来源与形成过程。
Those particles may then travel through water, air or material spread on land.
For soil, an important route is the addition of treated waste containing small residues.~For soil 锁定环境，important route 转入具体途径。
Researchers have also detected particles in a range of living organisms.
Detection does not by itself establish the size of a health effect, so the two questions must be examined separately.~does not 限定从检出推危害的结论。
The next study illustrates how a particular effect can be investigated under controlled conditions.`},{title:'A result and an explanation',focus:'实验目标、观察结果、机制尚未证实。',text:`The researchers compared two groups of soil-dwelling organisms under similar laboratory conditions.
Only one group was deliberately exposed to the material being tested.
The question was whether exposure changed development, not whether particles could simply be detected.~明确研究目标，不把检出当作效果。
Measurements were taken at agreed points during the trial.
The exposed group gained less mass than the comparison group, although the difference did not explain its own cause.~观察结果与原因分开。
Reduced feeding was suggested as one possible explanation.
That mechanism still needs testing, and a short trial cannot establish what happens over an entire lifetime.~still needs 与 cannot 限定解释和长期外推。
Future studies should therefore keep recording both the immediate response and later recovery.`}]
});
R(4,1,{
coverage:'入职人员职责；个人物品、工资、制服；培训与正式工作先后；补货、日期检查、卫生和安全区域。',
options:`负责核算所有工资的人|仅负责招聘面试的人|与新员工同级的搭档
放在货架上的陈列箱|存放所有员工工资的保险柜|顾客临时寄存购物的篮子
员工每周轮班的时间表|公司全部货物的库存表|对工作能力进行评分的表
上班时可自行挑选的便服|只在清洁工作时使用的手套|商店向顾客出售的服装
试用期结束的正式评估|每周重复举行的销售会议|员工自行研究的业务资料
员工的工资标准|商品按日期排列的库存|顾客预约提货的清单
只把已有商品移到另一层|撤下所有接近到期的货物|记录已售商品但不补充
产品最早到货的日期|最后一次检查商品的时间|顾客购买后的保修期限`,
grammar:[['Use the equipment only after you ___ trained.（have been / have）','have been','先受训再使用，完成被动不能漏听。','Enter the controlled area only when you ___ authorised.'],['Check dates before ___ the shelf.（replenishing / replenished）','replenishing','补货前核查日期，动名词形式。','Inspect the remaining stock before ___ the display.']],
locators:`New staff must [initially|1] report to the ___ .~[First|1], speak to {the supervisor} responsible for {the shift} {rather than} going directly to {your department}.~initially 对应 first，第一步骤不能跳过。
[Personal belongings|1] must be kept in the ___ .~[Bags and coats|1] belong in your assigned compartment, not behind {the counter}.~personal belongings 由 bags and coats 具体化。
Accurate [banking details|1] are needed for processing ___ .~For processing wages, check that your [account information|1] is correct.~banking details 对应 account information，不是住址。
The [uniform|1] is issued once {the employee's} ___ is confirmed.~Once your size is confirmed, we provide the [work clothing|1].~uniform 对应 work clothing，领取有先决条件。
The [induction|1] happens before the first ___ shift.~The [introductory briefing|1] happens ahead of your {first shift} without direct support.~induction 对应 introductory briefing，先培训再独立上岗。
Changes to the [rota|1] require {the supervisor's} ___ .~Any revised [shift arrangement|1] requires {the supervisor's} agreement, even if {both employees} are willing.~rota 对应 shift arrangement，双方愿意仍需批准。
Before [replenishing|1] stock, check dates on [existing|2] items and move {older goods} ___, {rather than} examining only the {new deliveries} as they reach {the sales} floor.~{The new delivery} needs checking too, but [when adding more goods|1], first look at what is [already there|2] and move older items forward so they are not left behind.~replenishing 对应 adding more goods；existing 对应 already there，核查旧货后补货。
[Cleaning products|1] must be stored [separately|2] from ___, even when staff are busy and need quick access to both types of supplies during {a shift}.~Convenience does not change the rule: materials [used for sanitising|1] must remain [apart|2] from food supplies, {rather than} sharing {a shelf} simply because both are used in {the preparation} area.~cleaning products 对应 used for sanitising 的材料；separately 对应 apart，忙碌不取消隔离。
[Protective clothing|1] is required when [entering|2] ___, {rather than} only when staff operate machinery or handle goods that have arrived from outside {the building}.~The requirement applies to everyone [going into|2] the chilled preparation room; wear the specified [safety items|1] even if you are only collecting a container and will not operate any equipment.~protective clothing 对应 safety items；entering 对应 going into，进入即适用。
The machine may be [operated|1] only by [authorised|2] staff who have completed ___, {rather than} by anyone who has simply watched a colleague demonstrate how it works.~Watching {a demonstration} is not enough: the machine may be [used|1] only by employees who have completed training and been [approved|2] by {the supervisor}, even if somebody else is standing nearby.~operated 对应 used；authorised 对应 approved，培训与许可双重限制。`,
paragraphs:[P('Before the first shift',`The supervisor will [show you around=>introduce the workplace=>熟悉场地，而非独立操作培训的全部]. A locker is [allocated=>assigned=>指定给个人] to each employee. Bank details should be [checked for accuracy=>verified as correct=>核实而非猜测]. A rota is [drawn up=>prepared=>排班表被制定]. Any change needs [prior approval=>permission obtained beforehand=>先批准后变更]. Staff should [raise a query=>ask for clarification=>提出问题而非默认接受] if the written hours differ.`,['permission sought afterwards','a personal choice without agreement','discarded']),P('Keeping the shop safe',`Replenishment means [topping up=>adding enough to restore the supply=>补足数量而非全部更换] a display. Date checks help [prevent waste=>avoid unnecessary disposal=>防止浪费]. Older stock should [be brought forward=>be moved towards the front=>先售出较早的货品]. Cleaning products must [be kept apart=>be stored separately=>分类隔离]. Some equipment is [off limits=>not available for unauthorised use=>权限限制]. An emergency instruction [takes precedence=>has priority=>紧急要求优先于例行工作].`,['available to every visitor','replace all stock','has lower priority'])],
signals:[{title:'Arriving for work',focus:'报到顺序、私人储物、排班批准。',text:`This short introduction explains what new employees should do before beginning their first independent shift.
You will receive a written summary to keep with your employment information.
On arrival, report to the duty supervisor rather than going directly to the department where you expect to work.~On arrival 明确第一步，rather than 排除直接上岗。
The supervisor will introduce the team and check which clothing you need.
Personal bags must be left in the assigned locker, not stored behind the service counter.~must 与 not 明确私人物品存放规则。
Your normal hours will be shown on the weekly rota.
Any swap with another employee still requires approval, even if both of you are willing to make the change.~even if 说明双方愿意换班仍不满足全部条件。
Please raise any uncertainty before the rota is finalised rather than missing a shift later.`},{title:'Stock and safety',focus:'补货前核查、清洁隔离、操作权限。',text:`Several routine tasks help keep the sales floor ready for customers.
You may be asked to add goods to a display during a quieter part of the shift.
Before adding new items, check the dates on the stock already there and move older goods forward.~before 明确先核查旧货再补货。
The cleaning materials for the area are labelled and stored in a separate cupboard.
They must remain apart from food supplies even when you are working quickly.~even when 强调忙碌不取消隔离要求。
Some departments also have equipment that requires additional instruction.
Only employees who have completed that training and received approval may operate it.~only 限定操作对象，同时需要培训与授权。
If you are asked to use unfamiliar equipment, contact the supervisor before proceeding.`}]
});
R(4,2,{
coverage:'新手跑步建议与原因；渐进、频率、恢复与支持；个人障碍匹配；何时报名比赛。',
options:`一次把训练量提升到目标值|每次训练保持完全相同的量|只在身体不适时降低训练量
一次训练持续的总时长|每周参加训练的次数|不休息能跑多远的能力
每天跑完全相同的路线|每次都刷新最快成绩|只在有空时集中跑很久
完全停止所有日常活动|训练中短暂加速的阶段|正式参赛前的最后冲刺
完全无法参与的|必然会造成损伤的|没有任何效果的
随时取消计划而不替代|依靠他人决定每次路线|让所有人使用同一训练表
某一瞬间能达到的最快速度|跑步动作的准确程度|肌肉在训练后的酸痛程度
替别人完成全部训练|只在比赛时为人加油|对每次成绩作严格评分`,
grammar:[['Increase distance gradually rather than ___ too much at once.（doing / did）','doing','rather than 后平行动名词，渐进与突增对比。','Develop a habit instead of ___ more than you can sustain.'],['A missed session need not mean that the plan ___ failed.（has / have）','has','单次缺席不等于整个计划失败。','One slower run does not mean the programme ___ stopped working.']],
locators:`Which TWO strategies help [novice|1] runners start?~[Beginners|1] can alternate short runs with walking and choose a manageable regular time.~novice 与 beginners 对应。
Which TWO habits support [consistency|1]?~Preparing equipment and agreeing {a meeting} make [regular participation|1] easier.~consistency 在此对应 regular participation。
Which TWO mistakes may [hinder|1] progress?~Too much extra distance and neglecting recovery can [hold back|1] improvement.~hinder 对应 hold back，更多训练不总有更大收益。
Which TWO benefits come from [companionship|1] while running?~[Having someone with you|1] offers encouragement and a reason to keep an agreed appointment.~companionship 对应 having someone with you，不只是速度比较。
Why does a [flexible|1] timetable help busy runners?~A schedule that can be [adjusted|1] lets practice fit around other duties.~flexible 对应 adjusted 的可调整性。
Why should beginners avoid [comparisons|1] with experienced runners?~[Judging themselves against others|1] may damage confidence {rather than} show {their own progress}.~comparisons 对应 judging themselves against others。
Why is a [familiar|1] route useful [initially|2], even though the coach does not suggest {that runners} must always stay on exactly {the same path}?~[In the early weeks|2], a [well-known|1] path reduces {the decisions} needed and makes starting simpler; later, a runner who wants more variety can choose {a different route} without changing {the whole routine}.~familiar 对应 well-known；initially 对应 in early weeks，早期建议不等于永久限制。
Why is [recovery|1] important between [demanding|2] sessions, {rather than} treating {every day} without a {hard run} as evidence that the {training plan} has failed?~{A day} without hard running can still be useful: [rest|1] after [strenuous|2] exercise allows {the body} to adapt to {the work} already completed, so it belongs within a sensible {training plan}.~recovery 对应 rest；demanding 对应 strenuous，休息属于计划。
When should [newcomers|1] consider a [competition|2], {rather than} using an {organised race} as their first attempt at following a manageable programme of {regular running}?~{A race} should not be {the first training} session; once [people new to running|1] have established {a routine} they can maintain, a modest [event with other runners|2] may provide {a useful next challenge}.~newcomers 对应 people new to running；competition 对应 event with other runners，参赛有练习基础。
How should a [single|1] slow session be understood in relation to [overall progress|2], {rather than} being treated as proof that {several weeks} of training were pointless?~[One|1] disappointing run may reflect tiredness or weather; it does not erase [the improvement made over time|2], so look at the pattern across {several weeks} before deciding that {the programme} is ineffective.~single 对应 one；overall progress 对应 improvement made over time，单次与长期区分。`,
paragraphs:[P('Making a beginning',`A new runner should [ease into=>begin gently and build gradually=>逐步进入而非立刻冲量] a routine. A realistic plan is [easier to stick to=>more likely to be maintained=>可持续]. One missed day need not [throw everything off=>disrupt the entire plan=>不要把局部偏差扩大]. The next session can [get you back on track=>restore the intended routine=>回到计划，不是补完所有错过的量]. Progress should [take individual circumstances into account=>allow for personal differences=>按个人情况评价]. The aim is [a habit that lasts=>a sustainable routine=>长期习惯而非短期极限].`,['an immediate maximum effort','identical for everybody','make up every missed kilometre']),P('Matching support to an obstacle',`A partner can provide [a nudge=>a small encouragement to act=>推动行动，不是代替训练]. Some runners feel [self-conscious=>uncomfortable about being observed=>在意别人目光]. A quiet route may [take the pressure off=>reduce the feeling of being judged=>减轻心理压力]. Recovery lets the body [respond to=>adapt to=>对训练产生适应] earlier effort. A flexible plan can [accommodate=>fit around=>兼顾其他责任] family duties. An event should [give focus to=>provide a clear aim for=>形成训练目标] established practice.`,['replace recovery','ignore family duties','guarantee a fast result'])],
signals:[{title:'Starting without overreaching',focus:'适量、单次与整体、恢复。',text:`People beginning a running routine often feel they should improve as quickly as possible.
That enthusiasm can help them get started, but it needs a manageable plan.
Begin with an amount you can repeat comfortably, rather than using the first session to discover your absolute limit.~rather than 对比可重复练习与极限测试。
Your routine will probably have to fit around work and family arrangements.
If one session is missed, adjust the plan and continue; it does not mean that the whole programme has failed.~if 后给出应对，否定局部失败扩大为整体失败。
You may also notice that effort feels different from one day to another.
Allow recovery between demanding sessions so that the body can adapt to the work already completed.~so that 说明恢复目的。
Judge progress over several weeks instead of expecting every outing to be faster.`},{title:'Reasons behind advice',focus:'障碍与建议匹配、支持作用、参赛时机。',text:`The same training advice will not solve every beginner's difficulty.
One person may struggle to find time, while another feels uncomfortable running where people can watch.
For someone who feels observed, a quieter familiar route can reduce pressure without changing the whole programme.~For someone 锁定对象，建议对应心理障碍。
A busy parent may need a different solution involving the timetable.
Running with a partner is useful when the main difficulty is getting started, because an agreed meeting creates a commitment.~because 解释伙伴建议的坚持机制。
Neither solution requires comparing your speed with experienced athletes.
Consider entering a modest event once a manageable routine is established, rather than using a race as the first training session.~once 与 rather than 指定参赛前提。
The event can then provide a focus for practice you are already able to maintain.`}]
});
R(4,3,{
coverage:'对建议的态度；情感价值与市场价值；双方观点；叙述的作用；书店不同类别的位置匹配，非地图跟走。',
options:`重新印刷但从未售出的|只用于学校课堂的|已经绝版而无法出售的
一本书当前剩余的数量|同一套书包含的册数|书店按主题设置的分类
保证某书适合所有人|把一本书标为最高售价|只列出一本书的出版信息
所有人都认为便宜的|价格最低但已损坏的|可以免费借阅的
事先确定一本书后直接取货|按编号检查全部库存|仔细阅读一本书的每一页
仓库中未整理的全部藏书|按时间排列的销售记录|只供员工查看的价目表
某类书籍的全部库存|为顾客预留的纸袋|存放档案的封闭库房
楼梯下面不能进入的区域|需要另付费的阅览室|只堆放未开箱货物的储藏间`,
grammar:[['The books matter to her because of their history, ___ their price.（not / so）','not','情感价值不等于市场价格。','She keeps the volumes for their associations, ___ their resale value.'],['Requested books are kept ___ staff can retrieve them quickly.（where / although）','where','地点安排服务于取书功能。','Reserved volumes remain ___ the assistant can easily find them.']],
locators:`How does the student regard the [guidance|1] on packing?~He thinks the [advice|1] sounds sensible, though following every step takes time.~guidance 对应 advice，耗时不表示不认可。
Why does she keep the [inherited|1] books?~{The volumes} [passed down in the family|1] remind her of conversations {rather than} their resale value.~inherited 对应 passed down in family，情感与市值区分。
What do {both speakers} say about [bindings|1]?~They agree beautiful [book covers|1] should be visible {rather than} hidden away.~bindings 在此对应书的装帧外观，展示态度另听。
What is {the function} of {the childhood} [anecdote|1]?~By telling a short [personal story|1], she explains why careful handling matters.~anecdote 对应 personal story，关注叙事作用。
What concern relates to new books' [affordability|1]?~Recent publications may cost more than [some readers can pay|1].~affordability 对应读者付得起的程度，不是书的质量。
Where are [fragile|1] volumes kept in {the shop}?~Books [needing careful handling|1] are in {a case} beside {the desk}.~fragile 对应 needing careful handling，保护需要定位类别。
Where are books for [young readers|1] [displayed|2], {rather than} the illustrated volumes intended for adults that occupy a {higher shelf} near {the same window}?~{The adult} illustrated books are above eye level; the [children's|1] stories are [on show|2] in the {low corner unit} beside {the window}, where small visitors can reach them {without assistance}.~young readers 对应 children；displayed 对应 on show，读者对象与书架高度有关。
Where are [unwanted|1] donations kept [temporarily|2], {rather than} being mixed with items that {the shop} has already accepted and entered into its {permanent stock}?~Books accepted for stock go onto the {sorting shelf}, but items [not needed|1] stay [for the time being|2] in the {labelled crate} by the {rear door} until another organisation can collect them.~unwanted 对应 not needed；temporarily 对应 for time being，临时去向不是正式库存。
Where are [reserved|1] titles kept for [collection|2], although an identical copy may still be visible on an open shelf for customers who have not ordered ahead?~The {open shelves} may hold {another copy}, but books [requested in advance|1] wait behind {the assistant} for [pickup|2]; that arrangement keeps the named customer's order separate from ordinary browsing stock.~reserved 对应 requested in advance；collection 对应 pickup，预留本与陈列本区分。
Where are [study guides|1] available [beside|2] a fixed feature, {rather than} among the {general fiction} displayed at {the rear} of {the shop}?~{General fiction} is {at the back}, but [exam preparation books|1] occupy {the narrow unit} [next to|2] {the stairway}; {the small table} nearby is for {recent arrivals} {rather than} educational material.~study guides 对应 exam preparation books；beside 对应 next to，楼梯与附近桌子参照不同。`,
paragraphs:[P('Why a book is kept',`One volume has [sentimental value=>personal importance through memories=>情感价值不是售价]. Its owner is [attached to=>emotionally fond of=>依恋而非法律依附] it. A dealer may assess [market worth=>the price it could sell for=>转售价值] differently. Advice on handling is [common sense=>practical judgement that seems obvious=>认为合理并不等于容易执行]. An anecdote [makes a point=>illustrates an argument=>叙事服务于论点]. A new edition can be [out of reach=>too expensive for some buyers=>此处指经济不可及].`,['physically too high','high resale value','merely lists events']),P('A shop arranged for readers',`Customers can [browse at leisure=>look through without hurrying=>从容浏览]. Requested titles are [put by=>reserved=>预留给特定读者]. Delicate bindings are [under cover=>protected in a case=>保护性陈列]. Children's books are [at an accessible height=>low enough to reach=>摆放高度适宜]. A box holds items [not taken into stock=>not accepted for sale=>未纳入销售库存]. A catalogue helps staff [keep track of=>maintain a record of=>记录并掌握] what is available.`,['placed beyond reach','all permanently discarded','available to any buyer immediately'])],
signals:[{title:'What books mean to owners',focus:'态度、情感与价格、故事功能。',text:`I have been sorting the books my aunt left me and wondering which ones to keep.
Some are ordinary editions that would not interest a specialist collector.
Their value to me comes from remembering our conversations, not from the price a dealer might offer.~not 区分个人价值与转售价。
She also left detailed advice about wrapping and supporting the bindings.
I think the advice is sensible, even though following every step takes longer than putting everything in a box.~态度为认可，even though 的困难不代表反对。
When I was younger, I damaged a book by pulling it carelessly from a shelf.
That example explains why I now pay attention to handling, rather than simply describing a childhood accident.~That example 明确故事在论述中的功能。
The attractive volumes will be displayed once I have found a suitable protected space.`},{title:'Matching books to places',focus:'类别改写、临时与固定位置、位置参照。',text:`The shop owner arranges books according to how readers use them and how much protection they need.
It is a compact shop, so several categories are close together.
Delicate volumes are kept in the case beside the desk, rather than on the open shelves.~类别与保护性位置对应，排除普通陈列。
Children can look through the low unit near the window without needing an adult to lift books down.
Titles requested in advance are kept behind the assistant, where staff can find them quickly for collection.~requested in advance 对应预留类别与取书位置。
Donations still awaiting a decision have a separate temporary box.
Study guides are next to the stairs, not mixed with the general fiction at the back.~类别、参照物和否定位置共同定位。
Those distinctions are easier to remember if you connect each arrangement with its purpose.`}]
});
R(4,4,{
coverage:'项目目标多重性；本地与外来物种；遗传多样性和抗性；土地选择；监测、种子传播与社区生计。',
options:`在任何无树地区首次造林|只在城市街道栽植观赏树|对现存森林进行商业采伐
只在本国培育但来自外地的|由人选择种植的所有树木|当前数量最多的树种
所有从别处引进的物种|只在某一地块生长的物种|生长速度较慢的外来植物
一个地区树木种类的数量|同种树木外观完全相同|不同物种混合种植的密度
把旧环境改造成全新用途|只以经济产量为目标的种植|完全不干预让所有变化自行发生
完全没有任何生物的|近期没有被人访问的|不适合任何形式恢复的
已经成熟可以采伐的树|尚未开始萌发的种子|从母树剪取的所有树枝
种子在原地完成萌发|树木通过根系吸收水分|人为按规则修剪树冠`,
grammar:[['Restoration should support livelihoods ___ protect habitat.（as well as / instead of）','as well as','生态与生计是并列目标。','The project aims to store carbon ___ benefit local people.'],['Seeds are selected for diversity so that trees ___ resist future pressures.（can / have）','can','so that 引出提高抗性的目的。','A varied seed supply helps ensure the forest ___ adapt to change.']],
locators:`[Invasive|1] plants could displace ___ species.~Avoid [aggressive outsiders|1] that could displace {local plants}, even in a {varied planting}.~invasive 对应 aggressive outsiders，不是所有外来植物的笼统定义。
Sustainable [livelihoods|1] should benefit local ___ .~{Local households} need a dependable [way to earn a living|1] from the {restored area}.~livelihoods 对应 way to earn a living，不只是一次性补助。
[Genetic diversity|1] can improve resistance to ___ .~Seeds from [varied parent trees|1] help the next generation cope with {disease pressures}.~genetic diversity 由不同亲本来源体现。
Choose [degraded|1] woodland instead of land growing an important ___ .~Choose [damaged|1] forest ground, not land already supporting an {important crop}.~degraded 对应 damaged，不占用现有重要农田。
[Reliable|1] ground data is needed before choosing ___ .~Before choosing locations, obtain [accurate and dependable|1] information {rather than} relying on an old sketch.~reliable 对应 accurate and dependable，可靠资料先于实施。
[Remote monitoring|1] helps locate unauthorised ___ .~[Observations from above|1] help locate disturbed patches without walking through every part of {the forest}.~remote monitoring 由 observations from above 具体化。
[Seed dispersal|1] by returning [wildlife|2] can support ___ beyond the original patch, {rather than} all further growth depending on {another team} planting {each individual} tree.~The planted patch need not be the final boundary: returning [animals|2] can contribute to [spreading seeds|1] into neighbouring ground, allowing some regeneration without workers planting every new tree themselves.~seed dispersal 对应 spreading seeds；wildlife 对应 animals，生态传播区别于人工栽种。
The [coastal|1] project selected trees [adapted to|2] changing ___ levels, {rather than} copying the inland planting design unchanged into {an environment} affected by the daily tide.~The {inland design} could not simply be copied; at the [shoreline|1] site, {the team} selected trees [suited to|2] changes in salty water as the tide rose and fell through {the day}.~coastal 对应 shoreline；adapted to 对应 suited to，地理条件限制选择。
[Success|1] is measured by trees that [survive|2] through later ___, {rather than} the total planted on {the first day} before {water stress} and competition begin affecting them.~{The planting}-day total records effort, but [achievement|1] is better judged by how many {young trees} [remain alive|2] through {later seasons}, when {water stress} and competition begin to affect the {restored area}.~success 对应 achievement；survive 对应 remain alive，投入数量不等于最终成效。
[Ongoing|1] funding allows repeated [monitoring|2] and adjustments to site ___, {rather than} ending {the budget} as soon as the {first planting target} has been reached.~Reaching {the first target} is only {a stage}; [continued|1] financial support must cover regular [checks|2] afterwards, so that problems are noticed while there is still time to adjust {the management} of the site.~ongoing 对应 continued；monitoring 对应 checks，经费覆盖后续阶段。`,
paragraphs:[P('Choosing what and where',`A project should [restore rather than replace=>recover earlier functions instead of imposing a different ecosystem=>恢复与替换不同] a landscape. Local species can be [well suited to=>appropriately adapted for=>适应条件] the site. An outsider may [outcompete=>use resources more successfully than=>资源竞争中排挤] existing plants. Diverse seed sources [spread the risk=>reduce dependence on one uniform response=>避免全部同样脆弱]. Productive land should not be [taken out of use=>removed from its current function=>挤占既有重要用途] without considering consequences. Planning needs [a reliable baseline=>trustworthy information on the starting conditions=>先了解起点].`,['replace every existing plant','make all trees identical','ignore present land use']),P('What lasts beyond planting day',`A large planting total is [not an end in itself=>not the final objective on its own=>数量本身非最终目标]. Young trees must [take hold=>establish successfully=>扎根存活]. Returning wildlife can [play a role in=>contribute to=>参与过程] dispersal. A project should [sustain livelihoods=>support dependable ways of making a living=>保障社区长期生计]. Monitoring helps [pick up on=>detect=>发现后期变化] losses. Success is [judged over time=>assessed across later periods=>跨时间评价] rather than at a launch event.`,['guaranteed by a launch count','remove all human activity','assessed only on the first day'])],
signals:[{title:'More than adding trees',focus:'地类选择、遗传多样性、并列目标。',text:`Tree planting can contribute to restoration, but planting the largest possible number is not always the right aim.
The condition and current use of the land need to be understood first.
Priority should go to damaged former woodland, rather than land already providing an important crop for local people.~Priority 与 rather than 指明地类选择及排除对象。
The choice of species also affects what happens after planting.
Seeds from a varied set of parent trees help avoid a forest in which every individual shares the same vulnerability.~遗传多样性与抗性目的对应。
That variety must still be suitable for the conditions at the site.
The project should support local livelihoods as well as ecological recovery, rather than treating residents as an obstacle.~as well as 强调并列目标，排除把居民视为障碍。
Those objectives need to be discussed before the planting pattern is finalised.`},{title:'Following recovery',focus:'数量与成活、生态过程、经费范围。',text:`A project report may begin with an impressive total of seedlings placed in the ground.
That figure is useful, but it records activity rather than the whole outcome.
The more meaningful question is how many establish and continue growing through later seasons.~从投入数量转向长期成活结果。
Animals returning to the area may then contribute to recovery in other ways.
For example, carrying seeds beyond the planted patch can extend regeneration without another planting team.~For example 引入生态传播机制的具体表现。
Changes like those will not all be visible at the opening ceremony.
Funding must therefore cover repeated monitoring, not stop once the first planting targets have been reached.~therefore 与 not 限定经费覆盖后续工作。
A useful final assessment combines survival, habitat condition and the effects on nearby communities.`}]
});
})();
