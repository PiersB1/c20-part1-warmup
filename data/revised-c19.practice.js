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
locators:`The [wet ground] developed after [earlier] ___ ended.~Once [the former extraction work stopped], [the pits gradually filled with water].~先前土地用途与湿地形成的先后。
The [tree-covered area] includes [different] ___ .~In [the woodland], [several varieties grow together] rather than one plantation alone.~林地与树种多样性对应。
The [science task] requires children to [collect] ___ .~During [the nature investigation], pupils [gather observations] and compare their findings.~学科活动与数据收集对应。
The [navigation activity] uses a map and ___ to [find a route].~For [working out where to go], the group practises [reading direction with an instrument].~辨认用途，不是只找 compass 的释义。
The [history activity] examines [changes in] ___ .~[Looking at the past], classes explore [how the same ground was used differently].~历史关注土地用途变化。
The [visitor study] considers people's [needs and] ___ .~When [learning about tourism], children examine [what guests expect and the difficulties their visits create].~旅游活动与需求、影响共同对应。
The [music session] uses [natural objects] to explore ___ .~For [the sound activity], [sticks and stones] become materials for repeated patterns.~学科与材料及节奏用途对应。
A [benefit of independent outdoor tasks] is greater ___ [in pupils].~When [children discover they can manage a challenge themselves], [their belief in their own ability grows].~从独立完成任务推断信心提升。
The [final charge] is based on [the number of] ___ .~[We calculate the bill] from [those who actually come], not the original list.~收费人数是实际到场者。
The [school] receives the ___ [after the visit].~[Your office] will be sent [a payment request once the trip is over].~机构与开票时点对应。`,
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
locators:`What was the [highlight] of the [recent exchange visit]?~During [our last trip], the [unexpected workshop was what members enjoyed most].~最高评价与最近一次行程共同定位。
Which [anniversary proposal] has [actually been approved]?~For [the celebration], we [agreed on a public mural], while the fountain idea was rejected.~建议与最终方案区分。
Which [fundraising event] was [most successful]?~Among [the activities raising money], the [craft auction brought in the largest amount].~筹款成效用收入最大表达。
What should [hosts] arrange on the [first evening]?~When [welcoming the visitors on arrival], [keep the meal simple and stay in].~接待者与抵达当晚的安排对应。
What will the [Saturday performer] do on [this visit]?~[The musician coming at the weekend] [will lead a short singing session], rather than repeat last year's quiz.~本次职责不能混同上次活动。
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
locators:`Which TWO [achievements] concern the [food-shaping project]?~The team [made leftovers appealing] and [found a workable way to shape the mixture].~已经实现的成就与潜在用途区分。
Which TWO [benefits] do [both students accept]?~[We agree] that the process [uses material that would otherwise be wasted] and allows flexible portions.~双方确认范围由 we agree 标示。
Which TWO [future applications] concern [responsive labels]?~The students suggest [adapting the labels for medicines] and [making changes detectable without sight].~未来建议不是现有功能。
Which TWO [claims] about the [prototype] need further evidence?~[We cannot yet confirm] its [performance over long storage] or its usefulness across different liquids.~证据限定与待检验用途对应。
What opinion concerns [locally sourced food] and [current uptake]?~They consider [buying from nearby producers] [already common in many shops].~趋势评价用普及程度表达。
What opinion concerns [unnecessary packaging] and [retailers]?~[Stores should do more] to [reduce avoidable wrapping].~行动主体与应改进的方面对应。
What opinion concerns [special diets] and [unrealistic expectations]?~Products [avoiding certain ingredients] may [not deliver the benefits some buyers expect].~饮食类别和效果预期分开。
What opinion concerns [celebrity-linked products] and [cost]?~[A famous cook's name] can make shoppers [pay more without a clear improvement].~名人品牌与价格效果评价对应。
What opinion concerns [delivery-only kitchens] and [public knowledge]?~[Places making meals without a dining room] are [poorly understood by many customers].~由经营方式识别概念，由不了解表达观点。
What opinion concerns [health claims] and [regulation]?~[Promised medical benefits] should be [subject to stricter checks].~健康主张与监管强度对应。`,
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
locators:`The [first discovery] involved stones arranged in ___ [beneath wet ground].~[An early observer] noticed [ordered lines hidden below the bog].~初次发现与排列特征定位。
The [later investigation] was carried out by a ___ [with archaeological training].~[Years afterwards], [a trained researcher from the same family] examined the site.~人物关系与专业背景、时间分开。
The [probing method] had previously been used to find ___ [locally].~[People in the area] had [used rods to locate buried material for burning].~传统工具原用途与考古新用途对应。
Unusual [preservation] resulted from [a shortage of] ___ .~[The survival of organic material] was helped by [very little air reaching it].~保存与缺少某条件的因果。
The [houses' shape] was ___ rather than [the commonly assumed form].~[The dwellings] were [long and narrow], not circular as visitors sometimes imagine.~纠正形状的先入印象。
Some [containers] also provided ___ when [filled with combustible material].~[A vessel holding a small burning supply] could [give light] as well as store food.~同物双重用途的转换。
The [plot size] could support a [large] ___ .~[Each enclosed area] offered enough resources for [several related people living together].~规模与可供养群体对应。
The [lack of shelter] suggests animals stayed [outside during] ___ .~[No seasonal housing has been identified], which points to [year-round outdoor grazing].~由缺少建筑作谨慎推断。
A [decline in land quality] may have caused [the end of] ___ .~[Ground that became less productive] could explain [why cultivation stopped].~质量下降与弃耕的因果。
The [climate became wetter] as the amount of ___ [increased].~[A shift towards damper conditions] followed [more frequent precipitation].~气候变化与降水增加的词组转换。`,
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
locators:`The [coordinator's surname] is ___ [spelt aloud].~[Our organiser is called] Reed; [the letters are] R-E-E-D.~姓名类别与逐字母拼写对应。
The [current venue] is a room at the ___ [rather than a home].~[We no longer use the teacher's house]; [we meet in the arts centre].~旧地点被否定，新地点才是当前安排。
The [room number] is ___ on the [upper floor].~[Upstairs], look for [the door marked] C two eighteen.~楼层与房间标识共同定位。
The [revised starting time] is ___ on [Wednesday].~For [the midweek meeting], [we have moved the start] from twelve to twelve thirty.~更改后时间与旧时间区分。
Suitable [entry experience] is described as ___ [level].~[People joining the group] can be [complete newcomers to playing].~无经验也可加入，不要因熟练同学产生误判。
The recommended [source of an instrument] is a ___ [website].~For [finding a guitar], [an online second-hand marketplace] may help.~购买来源与课堂用品提供分开。
The [first activity] is ___ [before playing together].~[At the beginning], everyone [adjusts the strings to the right pitch].~课程顺序与调音动作对应。
The [rhythm exercise] uses ___ rather than [individual-note playing].~For [keeping a steady beat], we [brush across several strings].~扫弦与逐音拨弦区分。
The [new chord] is practised ___ [before the song].~[Before starting the tune], the teacher [checks the unfamiliar hand shape slowly].~新手形先于合奏。
The [final practice] sometimes requires members to play ___ [without the group].~[Near the end], each learner may [try the phrase alone].~顺序与独奏形式共同定位。`,
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
locators:`Why did the volunteer [move to the coast] before [joining the team]?~[Living nearer the sea] offered a way to [pursue a long-standing interest in boats].~原搬家动机不等于后来的招募机会。
How was the [station building] [funded]?~[A local donor paid for] [the new base], rather than a central grant.~资金来源与建筑对象对应。
What was the outcome of the [health concern] at [assessment]?~[The examiner checked the suspected difficulty] and [found no problem].~怀疑与最终检查结果区分。
How does the team [measure response time] [after an alert]?~[Once contacted], volunteers [count the journey to the station separately from launching].~响应分段，不把到站和出港时间混为一体。
Who has [final authority] to [launch the boat]?~[The person commanding the crew] [decides whether departure is safe].~职权通过安全决定表达。
What is said about [public talks] and [prevention]?~[Speaking to local clubs] helps people [avoid difficulties before a rescue is needed].~岸上工作与预防目的对应。
Which TWO [training activities] develop [practical readiness]?~The programme includes [handling ropes under pressure] and [rehearsing emergency procedures].~技能训练与实际出动区分。
Which TWO [previous skills] proved [useful to the team]?~[Earlier first-aid learning] and [experience maintaining digital records] helped in different duties.~既有技能与工作用途对应。
Which TWO [personal benefits] does the volunteer [emphasise]?~[What I value most] is [learning to stay calm] and having colleagues I can trust.~强调的收益而非所有经历。
Which TWO [winter conditions] affect [the volunteer's attitude]?~[Difficult nights demand more effort], but [helping in a serious incident feels especially worthwhile].~困难与价值感并存，不误判为不愿工作。`,
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
locators:`How did the student's [initial opinion] of [recycling] change?~[She expected a simple charity-shop topic], but [found a much more complex system].~前后认识改变，不是问最终是否喜欢。
What do the students [disagree about] regarding [school footwear]?~[One considers casual shoes unsuitable], while [the other thinks some styles look smart enough].~人物对立意见与使用场景对应。
Why does the student [discard shoes] that [still function]?~[They remain wearable], but [she no longer likes how they look on her].~仍可用与主观外观评价区分。
What [trend] surprises them about [recycling rates]?~[The share returned for reuse has dropped], even though [overall purchases have increased].~比例与总量两个指标对照。
Why did the [rebuilt pair] fail to [attract buyers]?~[People did not choose it] because [the two shoes were visibly different], not because a hygiene problem was established.~真实购买拒绝原因与猜测分开。
What [broader perspective] do [both students propose]?~[We should look beyond our own habits] to [what happens after collection].~双方研究视角扩大，不是仅增加个人案例。
Why were the [pale boots] [rejected]?~[The ankle pair] was sturdy, but [one side had faded more than the other].~外观不一致与结构完好对照。
Why were the [small shoes] [unusable as a donation]?~[The children's item] was new, but [its matching partner was missing].~新品不保证可接受，真正原因是配对。
Why were the [sports shoes] [unsuitable for resale]?~[The running pair] had [a worn-through area underneath].~鞋类与鞋底破损对应。
Why were the [formal shoes] [set aside]?~[The dress pair] had [marks that could not be removed], despite little wear.~污渍原因与磨损程度分开。`,
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
locators:`The [animal's nickname] refers partly to the way it ___ [when moving].~Its [informal name] comes from [a resemblance in its gait].~名字来源与运动方式对应。
The [body] is divided into ___ with [paired limbs].~[The short body] has [repeated sections, each bearing two legs].~结构关系而非只识别 body。
Some species [attach to surfaces] using ___ [rather than claws].~Instead of [hooked feet], certain forms [hold on by suction].~结构替代与功能对应。
The [absence of breathing organs] means substances move through ___ [inside the body].~With [no dedicated lungs], transport relies on [fluid within the body cavity].~缺少器官与替代运输方式的逻辑。
The [mouth structures] are used to ___ [cells].~The [pointed feeding parts] can [pierce a cell wall] rather than chew solid food.~结构和功能对应，排除咀嚼。
[Extreme conditions] may trigger a ___ [state].~When [drying becomes a threat], the animal [enters a protective inactive form].~环境诱因与保护状态对应。
During [inactivity], the rate of ___ [drops sharply].~In [the resting form], [ordinary chemical activity becomes very low].~代谢率通过体内活动表达。
[Protective substances] help preserve ___ [during dormancy].~[Compounds produced in the inactive form] [reduce damage to important cellular material].~物质产生与保护作用对应。
The [revival process] begins when ___ [is restored].~[Activity resumes] once [moisture becomes available again].~复苏与水分恢复构成条件关系。
The [oldest survival claim] lacks ___ [from another experiment].~[The most remarkable historical report] [has not been reproduced independently].~记录与独立重复证据分开。`,
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
locators:`The [shop entrance] is [opposite] the ___ .~To [get into the store], use the door [across from the old clock].~入口与参照物、相对位置对应。
The [free transport] leaves from the ___ [near the station].~[The courtesy minibus] picks up passengers at [the stop beside the rail forecourt].~交通服务与上车点共同定位。
The [vegetables] are described as ___ [grown nearby].~[The local crops] are [produced without the specified artificial treatments].~本地来源与生产方式不能混为一谈。
The [bread] is made in the ___ [on site].~[The loaves] come from [our own ovens at the rear of the building].~商品与制作地点、店内自制对应。
The [seasonal opening time] changes in ___ [rather than winter].~[During the warmer months], [we open earlier] for the morning deliveries.~营业调整与季节限定。
The [quantity requested] for the soup is a ___ [of herbs].~For [that recipe], you only need [as much as fits in one hand].~食谱份量与手握量表达对应。
The customer wants [one whole unit] of ___ [not slices].~[Please keep it uncut]; [one loaf] is enough for the picnic.~计量单位与是否切片对应。
The [alternative item] is suggested because the [usual variety] is ___ .~[The regular apples have sold out], so [we can offer a different local variety].~缺货原因与替代建议关联。
The [availability] of fresh berries depends on the ___ [season].~[When the local harvest is ready], [we can stock fresh berries].~上市条件而非全年保证。
The [order collection] must be arranged [before] ___ .~[Contact us ahead of closing] if you want [an item put aside for pickup].~预留提货与联系时点对应。`,
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
locators:`What is distinctive about the [drawing session] for [younger children]?~In [the picture workshop], [beginners can invent characters without writing a full story].~活动与特色要求对应。
What is said about the [story event] and [audience participation]?~During [the narrative session], [listeners help decide what happens next].~参与式故事而非只听朗读。
What is said about the [group project] and [individual work]?~For [the shared book], [each child contributes one page] rather than completing a whole volume alone.~合作结构与个人贡献区分。
What is said about the [adaptation activity] and [source material]?~In [the performance workshop], [a familiar tale is changed into a short scene].~改编媒介通过场景演出表达。
What is said about the [older readers' session] and [choice]?~[Teenage participants] can [compare endings and argue for their preferred version].~年龄群体与活动认知要求对应。
What is said about the [family activity] and [shared reading]?~At [the joint session], [adults and children take turns describing the pictures].~轮流参与而非成人代读全部。
Which TWO [suggestions] help [reluctant readers]?~[Letting them choose the subject] and [sharing short extracts aloud] can make a start easier.~对象与两种支持方式对应。
Which TWO [features] should [parents check before booking]?~[The recommended age range] and [whether an adult must remain] are listed for each event.~报名条件而非活动主题。
Which TWO [benefits] relate to [collaborative storytelling]?~[Building on another person's idea] and [explaining a choice] are central to the group story.~从具体行为定位合作收益。
Which TWO [restrictions] apply to [the illustration room]?~[Places must be reserved] and [only the listed materials can be used] for that session.~具体房间的限制不扩展到整个节日。`,
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
locators:`How do [both trainees] feel about [pupils' questions]?~[We were impressed] by [how carefully the class asked for reasons].~双方态度通过评价学生具体行为表达。
What [concern] affects the [diet survey proposal]?~[The necessary food records] may be [too incomplete to support a comparison].~数据可得性而非主题不有趣。
What [problem] could affect [using animal results]?~[Findings from one species] might [not transfer reliably to another].~外推局限不是伦理审批困难。
Which [research question] do they [finally choose]?~[We should investigate] [whether the extra ingredient changes feeding behaviour].~最终选择不是所有讨论过的题目。
What [extension] might follow the [first experiment]?~[If the initial comparison works], they could [test a different level of the same ingredient].~后续实验有前提，区别当前方案。
Select subjects with the [same starting] ___ [before allocation].~[Before dividing the sample], choose individuals [at an equivalent developmental stage].~先筛选后分组，控制起点。
Use [different identifying] ___ for the [two groups].~To [tell the sets apart], [give each group a distinct code].~区别标识而非改变被测条件。
Add the [test ingredient] only to ___ in the [experimental group].~[For the treatment set], [the supplement goes into the feeding mixture].~对象和加入位置、组别限定。
Use the [holding chamber] to prevent ___ [while measuring].~[During weighing], [the enclosure keeps the subject from moving away].~容器用途通过阻止离开表达。
Complete the [final] ___ [after recording readings].~[Once the figures are written down], [work out the required comparisons].~流程末段计算与数据记录分离。`,
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
locators:`One [source of fibres] is the ___ of [synthetic material].~[Man-made fabric] can [release small strands during washing].~材料来源与释放过程共同定位。
The [breakdown of larger items] produces ___ through [wear].~[Repeated rubbing] can [create tiny pieces from an originally larger object].~磨损过程与碎片形成的因果。
The [entry route] into [animals' bodies] includes ___ .~[Wildlife may swallow] [small particles along with ordinary food].~摄入路径不等于效果。
Claims about [human health] remain ___ despite [widespread detection].~[Finding particles in many places] has [not settled what they do to people].~广泛检出与影响未定对照。
Some [soil contamination] comes from ___ used on [agricultural ground].~[Material spread on fields] can [carry small plastic residues into the soil].~施用物作为进入路径。
[Earthworms] normally improve ___ through [their activity].~[These soil-dwelling animals] help [mix and enrich the ground].~生物角色与土壤改善对应。
The [experiment's aim] was to test [the effect on] ___ .~[The researchers wanted to find out] [whether exposure altered development].~目的不能当作已发生结果。
The [exposed group] showed [a change in] ___ .~[Subjects receiving the material] [did not gain as much mass] as the comparison group.~处理组与体质量变化对应。
One [proposed explanation] concerns the animals' ___ [rather than age].~[Reduced feeding] is [a possible reason], not a confirmed mechanism.~假设解释的强度限定。
[Further work] is needed to establish [long-term] ___ .~[Later studies should examine] [what happens over several generations].~长期由跨代观测改写。`,
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
员工的固定工资标准|商品按日期排列的库存|顾客预约提货的清单
只把已有商品移到另一层|撤下所有接近到期的货物|记录已售商品但不补充
产品最早到货的日期|最后一次检查商品的时间|顾客购买后的保修期限`,
grammar:[['Use the equipment only after you ___ trained.（have been / have）','have been','先受训再使用，完成被动不能漏听。','Enter the controlled area only when you ___ authorised.'],['Check dates before ___ the shelf.（replenishing / replenished）','replenishing','补货前核查日期，动名词形式。','Inspect the remaining stock before ___ the display.']],
locators:`New staff should report [first] to the ___ [on duty].~[Before starting work], [speak to the supervisor responsible for the shift].~最先步骤与当班负责人对应。
[Personal belongings] must be kept in a ___ [not the sales area].~[Bags and coats] belong in [your assigned storage compartment], not behind the counter.~私人物品与储物位置共同定位。
The [payroll form] requires the employee's ___ [details].~For [processing your wages], [the account information must be accurate].~工资处理用途与银行信息对应。
The [uniform] is collected [after] ___ .~[Once your measurements are checked], [we issue the work clothing].~发放用品有先决检查。
The [induction session] takes place [before] ___ .~[The introductory briefing] happens [ahead of your first independent shift].~培训与独立上岗的先后。
Changes to the [working rota] must be [confirmed by] ___ .~[Any revised shift arrangement] needs [the supervisor's agreement].~个人换班意愿不等于批准。
Before [replenishing stock], check the [existing items'] ___ .~[When adding more goods], first [look at the dates on what is already there].~补货之前的核查对象不是只看新品。
[Cleaning materials] are stored [separately from] ___ .~[The products used for sanitising] must [remain away from food supplies].~卫生用品隔离要求。
[Protective clothing] is required when [entering] the ___ .~[Anyone going into the chilled preparation room] must [wear the specified safety items].~区域限定与防护要求对应。
The [restricted equipment] may be used only by ___ [staff].~[Only trained and approved employees] can [operate the cutting machine].~only 的对象范围与授权使用对应。`,
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
locators:`Which TWO [starting strategies] help [new runners]?~[Alternate short runs with walking] and [choose a manageable regular time].~新手与渐进、规律两项建议对应。
Which TWO [habits] support [long-term consistency]?~[Preparing equipment in advance] and [agreeing a meeting with a partner] make regular participation easier.~通过具体做法定位坚持机制。
Which TWO [mistakes] can [undermine progress]?~[Adding too much distance at once] and [neglecting recovery] can interrupt training.~不是所有努力都带来进步，定位风险动作。
Which TWO [benefits] come from [running with others]?~[Sharing encouragement] and [having someone expect you] can help when motivation drops.~情感支持与承诺机制区分。
Why is [a flexible timetable] useful for [busy people]?~[Changing the session time] helps runners [fit practice around other duties].~建议与适用原因对应。
Why should [novices] avoid [comparing their speed]?~[Beginners] may [lose confidence when judging themselves against experienced runners].~比较引发挫败而非不能学习技术。
Why is [a familiar route] helpful [at first]?~[In the early weeks], a known path [reduces the number of decisions needed].~新手阶段的认知负担与路线选择。
Why does the coach recommend [rest] [between demanding sessions]?~[Time to recover] helps [the body adapt to the work already done].~恢复目的不是完全放弃活动。
When should [new runners] [consider entering an event]?~[After establishing a manageable routine], [choose a modest challenge] rather than rushing straight into a race.~报名时点由先具备稳定练习限定。
What is said about [one disappointing run] and [overall progress]?~[A single slow session] [does not erase the improvement made over several weeks].~单次表现不能代表长期趋势。`,
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
locators:`How does the student [regard] the [packing advice]?~[He thinks the guidance] [sounds sensible], although some steps take time.~态度与执行难易分开。
Why does the student [want to keep] the [inherited books]?~[The volumes remind her of family conversations], rather than [offering a high resale price].~情感价值与市场价值对比。
What do [both speakers] say about [attractive hardbacks]?~[We agree] that [beautiful bindings should be visible rather than hidden away].~双方态度与展示建议对应。
What is the [purpose] of the student's [childhood anecdote]?~[By describing an early mistake], she [shows why careful handling matters].~识别叙述功能，不是只抓故事细节。
What [concern] do they express about [new-book prices]?~[Buying recent publications] may [be beyond some readers' budgets].~价格与可负担性，非讨论品质。
Where are [fragile volumes] kept [in the shop]?~[Books needing careful handling] are [in a case beside the desk].~类别由保护需要改写，位置由参照物表达。
Where are [children's stories] [displayed]?~[Young readers' books] are [in the low corner unit near the window].~目标对象与低位陈列匹配。
Where are [unwanted donations] [placed temporarily]?~[Items not joining the stock] are [in a labelled crate by the rear door].~临时位置与正式库存分开。
Where are [reserved titles] kept [for collection]?~[Books requested in advance] wait [on a shelf behind the assistant].~预留类别与取书位置对应。
Where are [study guides] [available]?~[Exam preparation books] occupy [the narrow unit next to the stairway].~学习资料具体化与位置表达。`,
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
locators:`The [species mix] should avoid [competition from] ___ .~[Choose a varied planting], but [exclude aggressive outsiders that could displace local plants].~物种选择与入侵风险对应。
The [community benefit] should include a sustainable [source of] ___ .~[Local households] need [a dependable way to earn from the restored area].~社区目标与生计来源改写。
[Genetic variation] can improve [resistance to] ___ .~Using [seeds from varied parent trees] helps [the next generation cope with disease pressures].~遗传来源与抗性目的对应。
The [preferred planting land] has ___ [rather than current productive use].~[Choose damaged former woodland], not [ground already supporting an important crop].~优先地类与排除地类对比。
[Planning decisions] require accurate ___ [before planting].~[Before choosing locations], [obtain reliable information about the ground].~数据先于实施。
[Remote monitoring] helps locate [areas affected by] ___ .~[Aerial observations] can [reveal patches disturbed by unauthorised clearing].~观测方式与识别目标对应。
[Seed dispersal] may improve once [wildlife] ___ .~As [animals return], they [carry seeds beyond the planted patch].~生态过程与传播载体对应。
The [coastal example] restored ___ [adapted to tides].~At [the shoreline project], [trees suited to changing salt water levels] were re-established.~环境与植被适应性关系。
The [success measure] should include ___ [after several seasons].~[Long after planting day], [check how many young trees remain alive].~长期成活而非首次栽种数量。
[Ongoing funding] is needed for ___ [not only planting].~A budget must [support repeated checks], rather than [end with the opening ceremony].~项目经费覆盖后续监测。`,
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
