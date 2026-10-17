(() => {
const P=RRParagraph,R=(t,p,e)=>RRReviseTopic(`c18-t${t}-p${p}`,e);
R(1,1,{
coverage:'区分惯常出行与本次行程；日期自我修正；费用归属；转折后的抱怨；不同人的行程；否定原因与缺少条件。',
options:`投递邮件的街道名称|电话号码的区域前缀|房屋在街上的编号
今天临时安排的外出|工作中跨城市的出差|从起点到终点的任意旅行
因违停支付的罚款|每月养车的支出|停车场按时收取的费用
公交乘客过多造成的拥挤|道路施工造成的改道|车辆不能按时到站
每次乘车所花的时间|一条线路途经的站数|同一班车可搭载的人数
购买换乘票的窗口|两辆车同时到站的时刻|从家到车站的步行距离
车内设备的使用寿命|整段旅程的平均速度|每天安排的总班次数
使用手推车的人|下车换乘的旅客|在路口指挥车辆的人`,
grammar:[['The complaint concerns late buses, ___ the journey itself is short.（although / so that）','although','让步：路程短不抵消晚点问题。','She still takes the bus, ___ the evening timetable is inconvenient.'],['Her partner drives to work, ___ she walks.（whereas / unless）','whereas','whereas 对比两个人，不能把后者的信息归给前者。','The respondent cycles locally, ___ her brother takes the train.']],
words:[['a lack of','缺少'],['be put off by','因……而打消念头'],['on time','准时']],
locators:`{The date} of the [latest|1] journey was ___ .~My [most recent|1] trip was {on Monday}; no, Tuesday, just after {the holiday}.~latest 与 most recent 对应，日期更正不属于这对表达。
The [principal|1] purpose of today's visit was ___ .~I bought groceries too, but came [mainly|1] for a {repair appointment}.~principal 与 mainly 指主要目的，购物是附带活动。
{The motorist} considered the [parking fee|1] ___ .~{The fuel} was affordable, but the [charge for leaving the car|1] seemed unreasonable.~费用对象是停车，而非燃油。
The passenger [boarded|1] {the bus} on ___ Road.~I [got on|1] in Alder Road, not at {the terminus} near {the library}.~boarded 对应 got on；下车地点不属于此动作。
{The complaint} concerned the [early service|1] and its ___ .~{The seats} were fine, but the [morning bus|1] arrived much later than expected.~early service 在此指早班车，不是服务质量差。
Buses run [least frequently|1] during the ___ .~{At lunchtime} there are plenty; {after sunset} they come [only occasionally|1].~频率最低对应很少有车，不是车程短。
The respondent [usually|1] travels by car to ___, whereas the [relative|2] mentioned in {the interview} drives to {a different destination}.~My [sister|2] drives to college {every morning}, but I [generally|1] use {the car} for the {swimming centre}; we sometimes share {the journey} to {the shops}.~usually 对应 generally；relative 由 sister 具体化，不能交换配对。
The respondent's [objection|1] to [cycling|2] in {the centre} concerns ___, although {the route} outside town is considered pleasant to use.~[Riding a bicycle|2] outside town is enjoyable, and {the cost} is low; my main [reservation|1] about the central route is the {unsafe junctions}, {rather than} its length.~objection 对应 reservation；cycling 对应 riding a bicycle。便宜和路线长短是干扰。
The respondent cannot [purchase|1] {a bicycle} because suitable [storage|2] is unavailable at ___, despite having enough money for {a basic model}.~I could [buy|1] {a simple bike} now, and there is plenty of space indoors, but {our building} offers nowhere for [keeping it securely|2] without blocking {the entrance}.~purchase 对应 buy；storage 关注安全存放，不等于室内有空间。
An [improvement|1] for passengers making a [connection|2] would be ___, {rather than} an increase in {the number} of {direct services}.~A later {direct bus} would suit {some people}, but a {covered waiting area} would be a real [benefit|1] for anyone [changing buses|2], especially when {the weather} turns wet.~improvement 与 benefit 表达改善；connection 对应 changing buses，不能套到直达乘客。`,
paragraphs:[P('A different journey',`A resident described a tram trip. She was [under the impression=>assuming=>表示原先的理解，未必正确] that weekend tickets covered Monday mornings. The inspector [pointed out=>drew attention to=>指出之前忽略的规则] a restriction. She [changed her mind=>reconsidered her decision=>改变原决定，不是忘记决定] about buying a season pass because the return service was [few and far between=>infrequent=>形容班次稀少，不是路程长]. Her [outward journey=>trip away from home=>去程，与返程方向相反] had been pleasant, but the trip home [fell short of expectations=>was less satisfactory than anticipated=>没有达到预期，不等于完全停运].`,['frequent','the return leg','confirmed her original decision']),P('Reasons and ownership',`During another interview, a walker explained that driving was [out of the question=>not a realistic option=>并非只是价格偏高，而是不可行]. A narrow driveway was [shared with=>used jointly by=>表示共同使用，不是分开拥有] neighbouring households. The family car was [rarely used=>seldom driven=>频率低，不表示完全不用]. A relative, [rather than the interviewee=>instead of the person answering=>明确动作的主体], normally took it away. The resident would cycle [provided that=>on condition that=>引出前提条件] safe parking became available. This was [a practical obstacle=>a difficulty affecting what could be done=>实际条件的阻碍，不是缺乏兴趣].`,['used exclusively by','regardless of whether','a personal dislike'])],
signals:[{title:'Journey details',focus:'日期修正、费用归属、转折后的投诉。',text:`Thank you for helping with our neighbourhood travel survey today.
I can describe the journey I made to the repair workshop last week.
Actually, that visit was on Thursday, because the workshop was shut on the day I first intended to go.~Actually 纠正此前的行程日期，后面的星期才是最终信息。
I took my usual route and carried a small bag with me.
The expense that changed my decision was the charge for leaving a vehicle, rather than the amount of fuel I would use.~由一般支出转到真正影响选择的费用，rather than 排除另一项。
The bus itself was clean and I found a seat easily.
What disappointed me was having to stand at the stop long after the advertised departure time.~前面是优点，这里转入实际抱怨；不能把 clean 当投诉。
I would still consider using that route again if the timetable became more dependable.`},{title:'Two household members',focus:'人物归属、否定原因、条件限制。',text:`There are two adults in our household, and our routines are quite different.
My partner needs the car for occasional journeys outside town.
As for me, the vehicle is mainly useful when I carry heavy equipment to the community studio.~As for me 明确切换到受访者本人，后面的用途不能归给伴侣。
For smaller errands I generally prefer to walk through the neighbourhood.
It is not the distance that discourages me from cycling, but the traffic at the narrow bridge.~not...but 排除距离，真正障碍在后半句。
The bicycle shop nearby has several affordable second-hand models.
I would buy one only if our building provided a secure place to keep it overnight.~only if 引出购买的必要条件，不是已经购买。
Until that changes, looking at different models will remain a weekend pastime rather than a firm plan.`}]
});
R(1,2,{
coverage:'持续培训与入门培训的区别；投入程度与可用时间；活动所需优势的间接表达；排除看似相关但非必需的经验。',
options:`已经获得正式岗位的人|为活动提供资金的人|为别人填写推荐信的人
定期进行的岗位进修|完成服务后的总结评估|确认录用资格的面试
对岗位感兴趣的程度|愿意接受岗位的意愿|过去参加服务的次数
一次活动临时到场|申请时表达的兴趣|已经完成的服务时长
机构内部行政方面的|专业技术操作方面的|公开宣传推广方面的
只能在原岗位使用的|必须经机构认证的|只通过正式课程学到的
制定机构长期政策|提供专业财务审计|负责活动的公开演出
替服务对象作生活决定|只在首次见面时聊天|向服务对象提供医疗建议`,
grammar:[['Training continues ___ volunteers begin their duties.（after / despite）','after','持续培训不能误听为仅上岗前培训。','Further coaching is offered ___ the first placement has started.'],['Stage experience helps, but applicants ___ be professional actors.（need not / must not）','need not','不必具备某条件不等于禁止有该条件。','Helpers at the drama group ___ have formal theatre qualifications.']],
words:[['ongoing training','持续培训'],['come up with','想出'],['keep track of','记录并掌握进展']],
locators:`Why does {the speaker} [apologise|1] about {the meeting} room?~[Sorry|1] about {the narrow gaps} between chairs; at least everyone has a seat.~apologise 通过 Sorry 表达，不是感谢来访。
What {matters more than} {a volunteer's} [age|1]?~Whether you {can be depended on} {matters more than} [how old you are|1].~age 对应 how old you are；可靠性是回答信息，不必整句标记。
How long does [training|1] continue after {a volunteer} joins?~The [learning sessions|1] continue throughout {your time} here, {not just} {during induction}.~training 对应 learning sessions，持续时间由后文限定。
Which TWO points concern {a volunteer's} [commitment|1]?~Consider {the hours} available and your [willingness to keep helping|1] {over several months}.~commitment 在此强调持续投入，不是只参加一次。
Which TWO qualities help volunteers [attend regularly|1]?~We value Saturday helpers who [turn up consistently|1] and tell us early if plans change.~regular attendance 的改写是 turn up consistently。
What advantage is useful when [raising funds|1] through new events?~For [collecting donations|1], we need someone who {can think of} {a fresh idea}.~raising funds 对应 collecting donations；新点子是能力信息。
What personal quality helps volunteers [remove litter|1] along [extended routes|2], when vehicles can carry {the bags} but cannot transport the helpers?~{The vehicle} takes away {the bags}, so heavy lifting is limited; people [clearing rubbish|1] still need to walk [long distances|2], often across ground that is uneven.~remove litter 对应 clearing rubbish；extended routes 对应 long distances。搬运袋子的车辆不能解决步行要求。
What knowledge is most useful for the [youngsters'|1] healthy-living sessions, where the emphasis is on [nutrition|2] {rather than} sporting achievement?~Some applicants have coached children in sport, which is welcome, but for the [children's|1] sessions we particularly need {an understanding} of [balanced diets|2] and everyday food choices.~youngsters 与 children 对应；nutrition 由 balanced diets 具体化，不要把体育经验当成营养知识。
Which experience is relevant to [performances|1] in {the story} group, even if {the volunteer} has never worked with [young children|2] before?~Experience with [small children|2] is useful elsewhere, but for {this group} somebody who has taken part in [drama|1] could help us rehearse the stories and prepare {a simple show}.~performances 与 drama 对应；young children 与 small children 对应，经验与服务对象分开。
What ability is essential when volunteers [learn|1] {the emergency} procedure, given that they must [remember|2] {the sequence} without relying on written notes?~{The notes} are available during practice, and {the instructor} demonstrates {each stage}; when volunteers [are taught|1] {the routine}, however, they must [retain|2] {the order} for {an actual emergency}.~learn 在教学关系中对应 are taught；remember 对应 retain，不能把示范等同于记住步骤。`,
paragraphs:[P('A volunteer briefing',`Our coordinator explained that induction was [only the beginning=>the initial stage rather than the whole programme=>不是全部培训]. Later support was [available on request=>provided when someone asks=>并非自动安排给所有人]. Reliable helpers [stick to=>keep to=>表示遵守约定] their agreed timetable. A busy applicant can still contribute [on a regular basis=>at consistent intervals=>定期而非随时]. She should [be upfront about=>state honestly=>坦诚说明时间限制] any restrictions. The scheme values [dedication=>willingness to give sustained effort=>强调持续投入而非只表示兴趣].`,['the complete programme','without being asked','at unpredictable intervals']),P('Matching strengths to activities',`The repair event needs someone who can [put people at ease=>help others feel relaxed=>人际能力的具体表现]. Another helper can [think on her feet=>respond quickly to an unexpected situation=>强调临场应变]. The walking group needs [stamina=>the ability to sustain physical effort=>耐力，不是瞬间速度]. At the craft sessions, experience [comes in handy=>proves useful=>有用而非必需]. A helper who can [break instructions down=>divide guidance into manageable steps=>把说明分成易理解的步骤] will support new members. None of these roles requires [a formal qualification=>an officially recognised certificate=>没有证书要求不等于无需能力].`,['a burst of speed','is compulsory','combine all steps into one'])],
signals:[{title:'Joining and remaining',focus:'年龄与能力的权重、培训持续性、可用时间。',text:`Welcome to this introduction to our community volunteer scheme.
You will meet people with very different working lives and family responsibilities.
The deciding factor is whether we can rely on you, rather than the year in which you were born.~deciding factor 标出真正标准，并排除以年龄直接判断。
We begin with a short introduction to the building and its procedures.
That is not the end of your training; experienced colleagues will continue to coach you as your responsibilities grow.~否定培训结束的误解，转入持续培训安排。
Some applicants already have impressive professional experience and others have none.
Before accepting a role, work out how many hours you can consistently set aside for it.~从背景介绍转入申请前需要明确的时间条件。
An honest estimate is more helpful than offering every afternoon and then repeatedly cancelling.`},{title:'What helpers can offer',focus:'活动与优势的间接对应、排除非必要条件。',text:`Our three new activities need different kinds of help this season.
The community fair already has a venue and enough people to run stalls.
What we still lack is someone who can suggest an unusual way of attracting donations.~still lack 引出真正缺少的优势；场地和人手已具备。
The outdoor group usually follows a long path with a gentle climb.
For that team, being able to maintain a steady walk matters more than knowing the area beforehand.~对比结构明确持续体力比先前熟悉地点更重要。
Finally, our younger visitors will be trying a simple drama activity.
You do not have to be a parent to assist, but having performed in front of an audience would be an advantage.~排除父母身份，but 后指出演出经验这一优势。
Please tell the coordinator which of these descriptions fits what you can offer.`}]
});
R(1,3,{
coverage:'观点归属、双方同意与保留意见、批评对象、职业选择时间、从实例概括需求。',
options:`按时间保存的全部草稿|给客户使用的项目说明书|学校统一颁发的作品证书
试用后自动转正的职位|只在课堂进行的模拟工作|为企业提供的永久免费劳动
项目实际开始的时间|预计完成工作的时长|可以随时延期的目标时间
购买现成商品的顾客|负责评定作业的老师|代表公司联系求职者的人
作品完成后的评价|向媒体介绍设计师的短文|按日期排列的工作日程
只针对个人能力的否定|客户对价格的协商|对设计方案的最终批准
有较高艺术价值的|只供专业人士使用的|能免费向公众提供的
服装生产制造环节|设计师间的作品交流|向商店批量供应货品`,
grammar:[['Lena agrees about the variety, ___ not about the timing.（but / so）','but','同意范围有限，不能据此判断两人全面一致。','They approve of the placement, ___ disagree about when to apply.'],['It was the source of the advice ___ she questioned.（that / what）','that','强调句锁定被批评的方面。','It was the choice of adviser ___ the students challenged.']],
words:[['keep an open mind','暂不预设结论'],['take criticism on board','听取并考虑批评'],['be prepared for','对……有心理准备']],
locators:`Why was {the opening} demonstration [hard to see|1]?~{The first design} was [not clearly visible|1] from her seat because {a pillar} blocked {the view}.~hard to see 对应 not clearly visible，视觉障碍不是听不清。
What [surprised|1] both students about {the career} options?~They [had not anticipated|1] such {a range} of jobs outside clothing design.~surprised 对应 had not anticipated，必须保留未曾预料的否定关系。
What is the students' shared [criticism|1] of the guest speaker?~We both felt his comments about beginners were [too dismissive|1].~criticism 由具体负面评价 too dismissive 实现。
Which aspect of {the careers} advice do they [question|1]?~{The timing} was useful, but they [have doubts about|1] {the advisers'} recent industry experience.~question 在此是质疑，不是提出一个一般问题。
What do the students [disagree about|1] when choosing {a specialism}?~One would decide now; the other [takes a different view|1] and wants more experience first.~disagree about 对应 takes a different view，时间态度不同。
How does Noah regard [unpaid|1] placements?~He expects to work [without a salary|1] at first, although his partner thinks that unfair.~unpaid 对应 without a salary，不代表没有任何工作任务。
Which TWO mistakes concerned the beginner's expectations of [advancement|1] and the way she expressed [dissatisfaction|2] to colleagues during her first job?~She had expected [promotion|1] within weeks, even though the role was meant for a beginner; she also made her [irritation|2] obvious when others asked her to revise work.~advancement 与 promotion 对应；dissatisfaction 与 irritation 对应，情绪与晋升不可交叉。
Which TWO lessons concerned [customers|1] and their [responses|2] to proposed designs, {rather than} {the technical skills} needed to produce {the drawings}?~She became quicker at drawing, but said the more valuable lesson was listening to [clients|1]; their [feedback|2] often revealed a problem that defending her first proposal would have hidden.~customers 与 clients；responses 与 feedback。画图速度是另一层面。
Which TWO kinds of information from [retail staff|1] could help {the design} team identify [recurring complaints|2] before planning {the following season's} collection?~Sales totals give only part of {the picture}; [shop assistants|1] can explain which features buyers fail to find and pass on [repeated criticisms|2] about garments after customers have worn them.~retail staff 对应 shop assistants；recurring complaints 对应 repeated criticisms，销售总额不是投诉内容。
Which TWO benefits of [brief placements|1] do the students [both acknowledge|2], despite their different views about whether beginners should receive {a salary}?~We still disagree about payment, but [we agree|2] that [short periods in a workplace|1] reveal {everyday routines} and help students test their assumptions before committing themselves to {a particular career}.~both acknowledge 对应 we agree；brief placements 对应 short periods in a workplace，不表示薪资问题也达成共识。`,
paragraphs:[P('After the careers event',`Maya found the talk [an eye-opener=>something that changed her understanding=>由新认识表达惊讶，不只是有趣]. She had [taken it for granted=>assumed without questioning=>此前未经核实的假设] that drawing was the main requirement. Her friend [shared her view=>held the same opinion=>表示观点一致] about the importance of production knowledge. However, he [took issue with=>objected to=>明确提出异议] the recommendation to specialise immediately. He wanted to [keep his options open=>avoid committing to one choice yet=>推迟确定方向，而非没有兴趣]. Maya agreed that one impressive example was [not the whole picture=>an incomplete account of the situation=>实例不能代表全部情况].`,['was undecided about','choose a direction immediately','confirmed an existing belief']),P('Learning from a first job',`A designer described how she [came across as=>gave others the impression of being=>强调别人感受到的表现] impatient. She had [overestimated=>judged something to be greater than it was=>高估而非低估] her influence over a collection. A supervisor helped her [take feedback on board=>consider comments seriously=>接受并考虑意见，不是照抄]. Later she examined garments [sent back=>returned after purchase=>购买后退回而非上新]. This showed where the range [failed to meet a need=>did not provide what customers wanted=>未满足需求，不等于完全没有销量]. Her next proposal was [informed by=>developed using knowledge from=>通过证据形成方案] these observations.`,['underestimated','dispatched to customers','copied without understanding'])],
signals:[{title:'Agreeing selectively',focus:'共同观点与局部分歧；批评对象；说话人归属。',text:`I thought the careers evening would just cover sketching and putting a collection together.
Yes, I went in with much the same expectation, although I enjoyed the technical demonstration.
What surprised us both was how many roles involved organising production rather than drawing new clothes.~both 锁定共同惊讶点，后面的 rather than 排除先前预期。
The speaker had clearly worked in several departments before becoming independent.
I agree about the range of opportunities, but I do not think we should choose one department during our first term.~同意机会范围，但对确定方向的时间提出保留。
Perhaps a short placement would help us compare the jobs before deciding.
My criticism concerns who gives the advice, not how early students receive it.~明确批评的维度，否定另一看似相关的维度。
That distinction would be worth including when we review the event for our course.`},{title:'From examples to conclusions',focus:'承认错误、间接态度、实例概括。',text:`Did you make a note of the speaker's account of her first commission?
I did, although I was more interested in what she learned from the shop afterwards.
She admitted that defending every detail of her original idea had prevented her from understanding the customer.~admitted 引出本人承认的失误，不是旁人的指责。
The following project involved looking at comments from people who had bought similar products.
That example suggests we need information about unmet requirements, rather than another list of fashionable colours.~从实例概括所需信息，排除只追流行。
I would still like to ask whether a brief period in a shop is enough.
So we agree that customer contact is useful, but we have not established how much experience is necessary.~总结双方同意的范围，同时保留时长尚未确定。
We can put that unresolved question at the end of our presentation.`}]
});
R(1,4,{
coverage:'过量与环境承载的因果；保持社会群体；操作速度的目的；体位与呼吸风险；持续监测；迁地后的社区效益。',
options:`动物自行作出的季节性迁徙|让动物暂离饲养区接受治疗|在原有保护区扩大活动范围
因出生数上升造成的任何增长|某物种占所有动物的比例|整个区域内不同物种过少
人工准备的动物饲料|供动物躲避的地形结构|保护区全部生态条件
为控制种群进行的合法捕捉|动物相互争夺食物的行为|捕食者正常的野外狩猎
同一地点出现的所有动物|只由幼年动物组成的群体|共同使用路线的运输车辆
使动物永久失去知觉|对受伤动物实施外科手术|单纯限制动物活动的围栏
兽医佩戴的防护装具|运输车辆安装的导航设备|动物身上的电子定位器
沿同一路线交替出发的车辆|只在保护区内工作的巡逻队|负责管理运输的人数`,
grammar:[['The team worked quickly ___ disturbance could be kept low.（so that / even though）','so that','so that 引出操作的目的，不是让步。','The handling period was shortened ___ the animals would be disturbed less.'],['The animals were checked ___ the transfer, not just at departure.（throughout / until）','throughout','throughout 表示整个过程中持续。','A specialist remained nearby ___ the recovery period.']],
words:[['minimise disturbance','尽量减少干扰'],['keep an eye on','留意并监测'],['in order to','为了']],
locators:`Pressure on {the reserve} increased because of [overpopulation|1] and competition for ___ .~{The reserve} [could not support so many animals|1], and {grazing space} was becoming scarce.~overpopulation 对应数量超过环境支持能力，而非动物单纯迁入。
The selected animals remained within their [social group|1] during ___ .~Those chosen for transfer stayed with [familiar companions|1] {rather than} being moved individually.~social group 由熟悉同伴体现，不是随机分组。
A preliminary check established whether the [destination|1] had enough ___ .~Before approval, staff assessed water supplies at the [receiving reserve|1] {throughout the year}.~destination 对应 receiving reserve，不能混同出发地。
The handling period was shortened to [reduce|1] ___ .~Keeping restraint brief helped [limit|1] unnecessary disturbance while {the team} completed {its checks}.~reduce 对应 limit，标记动作，不包下整个处理过程。
{The animal} was repositioned to [protect|1] its ___ .~Workers changed how it was lying to [avoid damage to|1] a vulnerable area.~protect 与 avoid damage to 表达保护关系。
During recovery, {the specialist} [monitored|1] ___ .~As {the medicine} wore off, {the specialist} [kept checking|1] {the animal's} responses.~monitored 对应 kept checking，强调持续观察。
{The team} [inspected|1] the {securing equipment} [prior to|2] ___, although {the vehicle} itself had already been checked earlier in {the morning}.~{The driver} had checked {the vehicle} {before breakfast}, but {the team} still [examined|1] every strap [before|2] lifting began, since {a vehicle} check {could not establish} that {the animal} was secured.~inspected 与 examined；prior to 与 before，检查对象和先后关系都要辨明。
After release, staff followed {the herd's} [movements|1] using a device [fitted to|2] ___, {rather than} approaching the {whole group} {at regular intervals}.~Walking near {the herd} would have disturbed it, so {a collar} [attached to|2] {a familiar leader} allowed staff to follow its [travels|1] remotely while {the animals} explored the {new reserve}.~movements 对应 travels；fitted to 对应 attached to，远程追踪与接近观察区分。
One [benefit|1] for {nearby residents} was an increase in [employment|2] connected with ___, although {the programme} also required considerable spending on transport.~{Transport costs} were substantial, but {the project} brought a clear [advantage|1] locally: new [jobs|2] in guiding and maintenance gave residents a way to earn money from {the reserve}.~benefit 对应 advantage；employment 对应 jobs，运输支出不是当地收益。
The [long-term|1] assessment considered ___ in the [habitat|2], {rather than} judging success only from {the number} of animals arriving safely at {the reserve}.~Counting arrivals was merely the first step; [several seasons later|1], researchers also examined the [natural environment|2] to see whether {the larger} population was affecting vegetation and access to water.~long-term 由 several seasons later 体现；habitat 对应 natural environment，不能只看抵达数量。`,
paragraphs:[P('Preparing a wildlife transfer',`In a fictional reserve, a growing herd had [put pressure on=>strained=>强调需求超过环境的负担] a limited feeding area. Moving a group was [a last resort=>an option used only after alternatives were considered=>不是首选措施]. Rangers selected animals with [established bonds=>long-standing social relationships=>社会联系而非仅身体接近]. The receiving habitat was assessed [well in advance=>long before the operation=>提前完成，不是抵达后检查]. Approval [hinged on=>depended critically on=>决定性条件] reliable water supplies. A new enclosure alone was [insufficient=>not enough=>不足而非完全无用].`,['a first choice','physical restraints','after arrival']),P('Handling and follow-up',`A specialist [remained on hand=>stayed available to help=>强调随时提供协助] while the medicine wore off. Staff [made adjustments=>altered the arrangement=>调整而非取消操作] to the supports. The purpose was to [take pressure off=>reduce the load on=>减轻压力而非增加约束] vulnerable areas. Checks were made [at frequent intervals=>repeatedly with short gaps=>持续性监测，不是一次检查]. After arrival, staff [kept tabs on=>monitored=>跟踪掌握情况] the group. The assessment also considered [knock-on benefits=>positive effects extending beyond the immediate result=>直接目标之外的后续效益] for surrounding communities.`,['a single inspection','increased the load on','immediate costs'])],
signals:[{title:'Why the operation changes',focus:'承载能力、保持群体、操作目的。',text:`This case study describes a fictional wildlife transfer between two managed reserves.
The animals had been protected successfully for many years, and their numbers had risen.
The difficulty was that food supplies had not increased with the population, so keeping every animal there was no longer practical.~由数量增长转向资源限制，so 后明确问题形成的原因。
The receiving reserve had already been assessed by a separate ecological team.
Instead of selecting isolated individuals, the planners chose a group that already had strong social connections.~instead of 排除随机个体选择，转向维持群体关系。
Several experienced handlers worked alongside the veterinary staff during the transfer.
The aim of working quickly was to limit disturbance, not to reduce the number of safety checks.~明确速度的目的，同时排除少检查这一错误推断。
The transport schedule therefore allowed extra time whenever an animal needed attention.`},{title:'Care and wider outcomes',focus:'因果目的、持续监测、转入社区结果。',text:`Reaching the receiving reserve was only one stage of the relocation project.
Animals recovering from medication still needed individual supervision before joining the group.
Their supports were adjusted to prevent unnecessary pressure on vulnerable parts of the body.~to prevent 表明调整支撑的目的，不能只记操作动作。
The team also recorded ordinary behaviour, such as resting and responding to nearby sounds.
Monitoring continued throughout recovery, rather than stopping after a single reassuring observation.~throughout 与 rather than 区分持续观察和单次检查。
Later reports considered how well the animals were using the new habitat.
Beyond animal welfare, the project created paid work for residents who had previously relied on less dependable income.~Beyond 明确从动物结果转到社区方面的效益。
Those wider changes were assessed separately from the initial survival figures.`}]
});
R(2,1,{
coverage:'比较不同分店；必要条件与有用经历；工资包含范围；由谁提供用品；班次与交通；申请步骤。',
options:`仅在内部晋升的职位|已经安排给求职者的工作|临时缺勤留下的单次任务
员工每周工作的总时长|固定连续工作的总月数|按个人意愿安排的休息时段
已经被聘用的新员工|为公司介绍求职者的人|核实应聘资料的工作人员
通过课程取得的专业证书|对某行业的个人兴趣|雇主承诺提供的培训
申请人自己的工作总结|经理列出的岗位职责|确认录用的正式合同
雇员自行选择的便服|为单次危险任务穿的防护服|企业只提供给顾客的围裙
每个班次固定支付的工资|包含小费的月收入|扣税之后的每周工资
签约前的招聘面谈|休假期间的补充培训|保证正式录用的合同期`,
grammar:[['Experience is useful but ___ essential.（not / never to）','not','useful 与 essential 分开，有帮助不等于必须。','Previous kitchen work is helpful, but it is ___ a condition of applying.'],['The rate excludes tips, ___ are paid separately.（which / what）','which','非限制性从句说明小费另付，不包含在时薪中。','Extra payments, ___ vary each week, are listed separately.']],
locators:`The [vacancy|1] at the {riverside restaurant} is for a ___ .~We have a [post available|1] for a {kitchen assistant} at {the branch} beside {the river}.~vacancy 对应 post available，岗位与分店位置分开。
The {early shift} begins at ___ on [weekdays|1].~From [Monday to Friday|1], the {morning team} {starts at} seven forty.~weekdays 对应 Monday to Friday，不包括周末。
[Previous experience|1] in preparing food is ___ .~[Having worked in a kitchen before|1] {would help}, but we also consider beginners.~previous experience 通过曾在厨房工作表达，不是必须有经验。
A [former supervisor|1] should comment on {the applicant's} ___ .~Ask [someone who previously managed your work|1] to provide a short comment.~former supervisor 指过去的工作主管，不是任何认识的人。
{The employer} [supplies|1] ___ for the {first shift}.~For your {initial day}, we [provide|1] {a shirt}, but you bring {suitable shoes}.~supplies 对应 provide，鞋与制服提供范围不同。
[Tips|1] are ___ after the {basic hourly wage} is paid.~Your hourly wage is fixed; [guests' extra payments|1] {are shared afterwards}.~tips 对应顾客额外支付，而非基本工资。
During [probation|1], progress is [reviewed|2] after ___, even though informal advice is available from {the supervisor} throughout each working week.~You can ask {the supervisor} questions on any shift; [in the trial period|1], however, {the manager} [assesses|2] {your progress} at the end of {each fortnight} before deciding on further support.~probation 对应 trial period；reviewed 对应 assesses，随时答疑不是正式考核频率。
The [latest|1] finish may affect {the applicant's} [return journey|2] to ___, whereas an earlier shift would allow travel by {the usual bus}.~The afternoon bus is convenient, but check {the last service} carefully: when you leave at the [end of the evening|1], [getting home|2] may require {a different route} through town.~latest 在此对应晚间最后下班时段；return journey 对应 getting home。
{An interview} with the ___ is offered [once|1] {the application} has been [checked|2], {rather than} being arranged immediately when {the applicant} first telephones.~This call gives you {the basic details}, but it does not book {an interview}; [after|1] {the manager} has [reviewed|2] {your form}, we can invite you in for {a meeting}.~once 与 after 表示完成后的顺序；checked 对应 reviewed。
The [town-centre branch|1] requires applicants to be [available|2] on ___, while the riverside branch needs extra staff mainly during weekday lunches.~The lunchtime vacancies are beside {the river}; for the [central restaurant|1], you must be [free to work|2] on Sunday mornings because {the regular assistant} is not on duty then.~town-centre branch 对应 central restaurant；available 对应 free to work，分店安排不能套用。`,
paragraphs:[P('Comparing two vacancies',`One café needs [cover=>someone to take another worker's place=>临时替班而非永久补招]. The role is [part-time=>involving fewer than full-time hours=>工时类型，不是合同期限]. Applicants must [be available=>be able to work at the required times=>说明可排班时间] during lunch. Experience is [desirable=>helpful but not compulsory=>有帮助而非硬条件]. The second café offers [on-the-job training=>instruction while carrying out the work=>边工作边培训]. Neither enquiry [guarantees a position=>ensures an offer of employment=>咨询不保证录用].`,['compulsory','a permanent appointment','training completed before any work']),P('Pay and practical arrangements',`The adviser quoted [gross pay=>earnings before deductions=>税前而非到手工资]. Travel expenses are [not covered=>not paid by the employer=>费用由谁承担]. A worker must [make their own way=>arrange their journey independently=>自行解决交通]. The manager will [get back to=>contact again=>稍后回复，不是回到场地] shortlisted applicants. Starting dates are [subject to agreement=>dependent on mutual confirmation=>仍待双方确认]. The offer should be checked [in writing=>in a recorded written form=>书面确认，不是口头印象].`,['take-home earnings','automatically confirmed','provided transport'])],
signals:[{title:'Two branches',focus:'分店归属、经验要求、用品提供范围。',text:`We have openings at the garden café and at the restaurant near the theatre.
They are run by the same company, but the working arrangements are different.
For the garden café, the essential requirement is being free at lunchtime, rather than having worked in catering before.~先锁定分店，essential 与 rather than 区分必要条件和经验。
The theatre restaurant is busier in the evening and attracts larger groups.
That branch asks for some service experience, although training on its booking system will be provided.~切换分店后要求变化，培训不代表无需服务经历。
Both managers will explain the clothing rules at the interview.
The company supplies the apron, but suitable dark trousers must be brought by each employee.~but 区分企业提供和员工自备的用品。
Please check those details carefully before deciding which vacancy suits your timetable.`},{title:'Checking the offer',focus:'收入范围、合同期限、申请先后。',text:`The recruitment adviser has now sent a summary of the proposed café position.
It includes the location, expected hours and the name of the person supervising new staff.
The hourly figure is before deductions and does not include any money customers leave for the service.~明确金额范围，避免把额外收入计入固定时薪。
There is also information about opportunities at other branches later in the year.
Those possibilities do not change the present offer, which is for a limited period only.~限制当前合同，未来可能性不等于永久工作。
You can ask for clarification if the written information differs from your notes.
Only after your reference has been checked will the manager confirm a starting date.~only after 规定确认开工日期的前提。
Until then, please avoid making travel arrangements that cannot be changed.`}]
});
R(2,2,{
coverage:'选址原因与便利条件的区分；公众肯定与待改进项；适合多年龄群体；地图保留。',
options:`现有住宅的日常维修|单一楼房的产权转让|已经完成的居民搬迁
开发商发布最终决定|施工单位办理竣工审核|居民正式签署购房合同
所有人都能免费取得的|政府已经付款购买的|只向低收入者开放的
只用于商业经营的建筑|住户每月应付的服务费|改变土地用途的申请
为学龄儿童提供住宿的学校|供成人进修的培训中心|由家长轮流看护的私宅
专门提供儿童托管的室内教室|可供举办比赛的专业场地|仅有观赏作用的绿地
供单户家庭居住的客厅|物业工作人员的办公室|只接待外来访客的会议室
只存放私家汽车的车库|必须由工作人员代骑的服务|只出售新车的商店`,
grammar:[['The railway is convenient, ___ it was not the main reason for the site choice.（but / because）','but','便利条件不一定是主要选址标准。','The station is nearby, ___ that did not determine the choice.'],['The design is suitable for families ___ older residents.（as well as / instead of）','as well as','两个群体都包含，不能听成替代。','The outdoor space serves younger residents ___ their grandparents.']],
locators:`Which TWO factors influenced the [selection|1] of {the building} site?~The [choice|1] depended on short journeys to jobs and access to everyday services.~selection 与 choice 对应，后面才是具体因素。
Which TWO facilities were [essential|1] before construction began?~Reliable drainage and {a safe road} link were [necessary|1] before any building work could start.~essential 与 necessary，不是可选的未来增设项目。
Which TWO aspects of {the design} did residents [welcome|1]?~Local people [responded positively to|1] the shared {outdoor spaces} and {the hillside} layout.~welcome 对应 responded positively to。
Which TWO improvements are still [under consideration|1]?~We are [weighing up|1] more covered cycle stands and a longer pedestrian link; neither is agreed.~under consideration 与 weighing up 表示仍在考虑。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。`,
paragraphs:[P('Choosing the site',`A fictional estate is intended to [meet demand=>provide what is needed=>满足需求而非制造需求]. Access to employment [tipped the balance=>was the deciding advantage=>真正决定选择的优势]. The nearby station was [an added bonus=>a further benefit rather than the main reason=>附加便利，不是主要理由]. A steep section was [taken into account=>considered in planning=>已经考虑，不等于问题不存在]. Designers [worked around=>adapted their plans to accommodate=>因地制宜调整方案] existing trees. The proposal remains [open to revision=>able to be changed=>不是最终不可变更].`,['the sole reason','ignored during planning','already final']),P('Listening to residents',`Residents were asked to [have their say=>express their views=>征询意见而非作出最终决定]. Many liked the [mix of housing=>variety of dwelling types=>住房种类而非数量]. Some requested [better provision for=>more suitable facilities for=>改善设施供给] cyclists. These suggestions are [being looked into=>under investigation=>正在考虑，尚未保证实施]. Shared spaces should [bring generations together=>encourage contact between age groups=>跨年龄交流]. Changes will be announced [in due course=>at an appropriate later time=>稍后安排，而非立即落实].`,['already implemented','separate age groups','the total number of dwellings'])],
signals:[{title:'Explaining the proposal',focus:'真正的选址理由、尚未确定的建议、覆盖群体。',text:`This meeting concerns the proposed housing scheme on the eastern side of our town.
Several people have asked about the new station and the views from the upper part of the land.
Although those are advantages, our main reason for choosing this location was the need for homes close to employment.~although 排除把附带优势当作主因。
We have received many helpful comments about the appearance of the buildings.
The extra cycle storage is still a proposal, so please do not treat it as part of the approved design yet.~still a proposal 修正已批准的可能误解。
There will be another opportunity to comment once the revised drawings are ready.
The shared courtyard is intended for residents of different ages, not exclusively for households with young children.~明确设施适用范围，排除仅限某类住户。
Our next update will explain how the comments have influenced the final arrangements.`}]
});
R(2,3,{
coverage:'史料与推断区分；更正地理和时间；因果证据强弱；地区差异与影响匹配。',
options:`熔岩冷却后形成的地形|喷发后持续出现的地震|山体受到风化的过程
冷却后形成的大块岩石|火山释放的全部气体|被气流卷起的普通沙尘
由水滴形成的普通浓雾|地面堆积的火山灰层|暂时挡住阳光的厚云层
现代人回顾过去写成的|同一年发表的全部文献|使用当代语言翻译的
事件影响的严重程度|不同地区的重要性排序|历史证据的可靠程度
对某项记录提出反驳|完全复制已有的研究结论|仅凭理论猜测真实经过
只与地表岩层有关的|只与海洋洋流有关的|只与人类活动有关的
收成低于上一年的任何变化|食物运输过程中发生的损失|农民主动减少播种面积`,
grammar:[['The diary records events ___ they happened.（as / in spite of）','as','同时记录和事后回顾的证据性质不同。','The observer wrote notes ___ the unusual weather developed.'],['The timing suggests a link but ___ prove a cause.（does not / must）','does not','先后相关并不自动证明因果。','The two changes occurred together, which ___ establish a causal explanation.']],
locators:`What changed the students' [initial view|1] of {the eruption}?~They [first thought|1] {its effects} were local, until they read reports from distant regions.~initial view 对应 first thought，后来的证据改变该看法。
Why do they prefer the [eyewitness account|1]?~{The diary} was [written by someone who was there|1] and records observations day by day.~eyewitness account 对应在场者记录，不是后来的概述。
Which geographical statement do they [correct|1]?~They [revise|1] the claim that {the effects} stopped at {the coast} after reading inland reports.~correct 在此对应 revise，修正已有说法。
What limitation affects the estimate of [mortality|1]?~The recorded [deaths|1] are not reliably separated by cause, so the total needs caution.~mortality 在此对应 deaths，不是人口总数。
Which TWO observations suggest a [widespread|1] atmospheric effect?~Similar skies were reported [over a large area|1], and {several accounts} date from the {same period}.~widespread 对应 over a large area；同时发生是另一项证据。
Which TWO possible explanations remain [unconfirmed|1]?~Changes in trade and the loss of {local crops} are [not yet established|1] as causes.~unconfirmed 对应 not yet established，不是已经被否定。
What [consequence|1] is linked to the [northern settlement|2], as distinct from {the agricultural difficulties} described in the {inland districts} later in {the discussion}?~The inland account concerns crops, but in the [community farther north|2] the most immediate [effect|1] was on transport: boats could not leave {the harbour} {for several days}.~consequence 与 effect；northern settlement 与 community farther north，地区信息先区分。
What happened in the [agricultural|1] districts when the start of the {growing season} was [postponed|2], despite the expectation {that conditions} would soon improve?~At first people expected a short interruption, but the [farming|1] communities reported {that planting} was [delayed|2] well beyond {the normal period}, leaving less time for crops to mature.~agricultural 对应 farming；postponed 对应 delayed，最初期待不是最终情况。
What [unexpected|1] demand for public [assistance|2] was reported in the {southern towns}, {rather than} in the {harbour community} discussed earlier?~{The harbour} had transport problems, whereas farther south officials recorded a [surprising|1] rise in requests for [help|2] from households that had previously managed {without support} from {the town}.~unexpected 与 surprising；assistance 与 help，地点和问题类型不同。
Which interpretation do the students [both accept|1] about the [interacting|2] pressures, although they cannot establish a single explanation that applies to {every region}?~One region's experience cannot explain all the others; [they agree|1] that several [mutually reinforcing|2] difficulties probably contributed, while the balance between them varied according to local conditions.~both accept 对应 they agree；interacting 对应 mutually reinforcing，强调多因素共同作用。`,
paragraphs:[P('Reading historical evidence',`The students began with [first-hand accounts=>reports by people who experienced the events=>亲历而非转述]. Some descriptions were [at odds with=>in conflict with=>内容相矛盾] later summaries. A date was [cross-checked=>verified against another record=>交叉核对，不是简单重抄]. They [ruled out=>excluded as an explanation=>排除解释] a printing error. Similar reports [lent weight to=>strengthened=>增加解释的支持力度] the regional comparison. Nevertheless, the evidence was [far from conclusive=>insufficient to settle the matter=>证据尚不能定论].`,['proved beyond doubt','copied into another document','supported as the only explanation']),P('Different effects',`One region experienced [a shortfall=>an amount below what was needed=>实际不足而非全部消失] in supplies. Another saw [disruption=>interference with normal activity=>正常活动受到扰乱] to transport. The changes [coincided with=>occurred at the same time as=>同时发生不等于确定因果] unusual weather. The pair [distinguished between=>treated as separate=>区分两种证据] observation and inference. They wanted to [avoid overstatement=>keep claims within the evidence=>不超过证据能支持的范围]. Their explanation was [tentative=>open to revision=>暂定而不是已被否定].`,['a complete disappearance','certainly caused','rejected as impossible'])],
signals:[{title:'Assessing an old record',focus:'更正、资料来源、因果限定。',text:`I have compared the old newspaper account with the extracts from the local diary.
The newspaper is easier to read, but the diary contains more observations from individual days.
We should correct our introduction: the strange conditions were reported inland as well as along the coast.~correct 明确更正地理范围，as well as 扩展而非替换。
That would also explain why the second archive contains relevant material.
The strongest reason for using the diary is that it was written while the events were unfolding.~从资料特点转入采用它的核心理由。
Some later descriptions repeat it without naming their source.
Even so, the dates alone do not establish that the eruption caused every difficulty mentioned in the record.~Even so 限定结论强度，同时发生不能概括为全部因果。
We should keep those different levels of certainty clear in the presentation.`},{title:'Matching places to consequences',focus:'地区切换、被否定的解释、共同结论。',text:`The reports from the northern valley and the southern port describe rather different problems.
At first I assumed they would all be about shortages on farms.
In the valley, however, the clearest evidence concerns journeys being interrupted, rather than failed harvests.~地区明确后转折，排除先前预期的农业损失。
The port account discusses families asking the authorities for assistance.
That does not necessarily mean food production collapsed there; the report gives no figures for local harvests.~not necessarily 阻止从求助直接推出生产崩溃。
Perhaps we should show the places separately on our presentation slide.
Yes, our shared conclusion should be that the impact varied with local circumstances, rather than being identical everywhere.~Yes 明确双方一致的概括，rather than 排除各地相同。
That leaves space to explain why some of the records are still difficult to interpret.`}]
});
R(2,4,{
coverage:'服装历史的先后与性别差异；可拆卸与缝入；装饰与实用；物品用途与社会限制。',
options:`可折叠但不能拆下的|可按身材伸缩的|能翻面穿着的
一整套搭配好的服饰|制作衣物的布料|衣物表面的装饰图案
缝制袋口的接缝|衣服内侧的衬层|束紧衣服的系带
可看见但拿不到的|可拆下并单独携带的|只在特定场合使用的
衣物开口处的边缘|内外两层布之间的空间|用来扣合衣服的系带
衣物外表的装饰层|衣服内部的储物袋|两片衣料连接的线
衣物表面的花纹|穿着时的身体动作|布料本身的质感
衣服可容纳物品的重量|衣服制作工艺的复杂程度|服装外观引起的社会评价`,
grammar:[['Earlier bags were separate, ___ later versions were sewn in.（whereas / unless）','whereas','对比不同时期的结构。','Some pockets were attached permanently, ___ others could be removed.'],['The shape changed ___ smaller objects could be carried discreetly.（so that / even if）','so that','结构变化服务于携带物品这一目的。','The opening was concealed ___ valuables were less visible.']],
locators:`In early men's garments, pockets were [sewn|1] into the ___ .~In male clothing of {that period}, storage spaces were [stitched|1] inside an inner layer.~sewn 对应 stitched，不是用带子系上。
For [professional|1] wearers, larger pockets carried ___ .~People doing [specialised work|1] needed space for {the tools} of {their occupation}.~professional 在此对应 specialised work，不是正式场合穿着。
Women's [detachable|1] pockets were secured with ___ .~The [removable|1] versions were fastened around {the waist} beneath the outer garment.~detachable 与 removable 表示可分离。
{An opening} in {the skirt} gave [access to|1] the ___ .~{A gap} let {the wearer} [reach|1] {the pouch} beneath the outer garment.~access to 对应 reach，不是从外部看见。
{A change} in [silhouette|1] reduced space for ___ .~Dresses became narrower in [outline|1], making bulky pouches harder to conceal.~silhouette 对应 outline，关注外形而非布料。
[Decorative|1] pockets differed from practical ones in ___ .~[Ornamental|1] examples emphasised appearance, whereas working versions favoured capacity.~decorative 对应 ornamental，不能对应 practical。
Some [valuable|1] items were kept in [concealed|2] ___ beneath the outer layer, {rather than} in the visible pockets used for things needed frequently during work.~Coins were needed often, but objects [worth protecting|1] might be kept in spaces [hidden|2] beneath the outer layer, where they were less easy for someone else to reach.~valuable 对应 worth protecting；concealed 对应 hidden，常取用与防护用途区分。
A [separate|1] bag carried belongings [outside|2] {the outfit} and created another opportunity for ___, unlike earlier pouches worn beneath an outer layer of clothing.~Unlike the earlier pouches under {a skirt}, an [independent|1] bag could be carried [externally|2]; its visible position also gave makers another opportunity to decorate an everyday object.~separate 与 independent；outside 与 externally，不要把 earlier 的位置套到新配件。
Changes in women's [occupations|1] increased the [need for|2] ___, especially when {the tasks} involved moving about {rather than} remaining seated indoors.~As more women entered practical [jobs|1], there was greater [demand for|2] accessible storage; carrying things {by hand} was inconvenient when {both hands} were already needed for {the work}.~occupations 与 jobs；need for 与 demand for，任务变化解释需求。
The lecturer's [concluding|1] argument is that [functional|2] storage should meet {the wearer's} ___, {rather than} being judged only by {its appearance} or {its historical style}.~The historical examples vary greatly in style, but the [final|1] point is that {a pocket} must be [useful|2]; decoration alone does not tell us whether it meets {the wearer's} needs.~concluding 对应 final；functional 对应 useful，外观不是功能的同义表达。`,
paragraphs:[P('Clothing and storage',`A display compares pockets [built into=>incorporated as part of=>成为衣服结构的一部分] coats with bags [worn separately=>carried independently of the garment=>与服装分离]. The curator asks visitors to [bear in mind=>remember when judging=>提醒判断时应考虑] who used each item. For a craft worker, storage had to be [within easy reach=>readily accessible=>拿取方便，而不只是看得见]. Decoration sometimes [took priority over=>was considered more important than=>说明设计权重] capacity. Yet one style did not [replace overnight=>immediately take the place of=>变化并非一夜完成] every earlier design.`,['sewn permanently inside','out of reach','was less important than']),P('A changing outline',`Later fashions [made room for=>created space for=>腾出空间] different accessories. A narrow cut could [get in the way of=>interfere with=>妨碍实用储物] comfortable movement. Designers [responded to=>made changes because of=>回应使用需要] new routines. Some surviving examples show [signs of wear=>evidence of repeated use=>使用痕迹而非故意装饰]. These help researchers [work out=>infer from evidence=>据线索推断] how objects were carried. The interpretation remains [dependent on context=>meaningful only with surrounding information=>不能脱离穿着场景判断].`,['deliberate decoration','ignore completely','independent of circumstances'])],
signals:[{title:'Construction and purpose',focus:'历史阶段、两种结构、用途。',text:`Our exhibition follows the relationship between clothing and the storage of everyday belongings.
The surviving examples include coats, skirts and a number of separate accessories.
In the earlier group, the container was independent of the outer garment, rather than permanently stitched into it.~明确早期结构，对比独立与缝入。
That arrangement allowed a wearer to use the same container with different outfits.
The important distinction is not simply whether a pocket was large, but what the wearer needed to keep within reach.~not...but 从外观转到实际用途。
Decorated examples can be impressive, but practical objects are equally useful as evidence.
Later changes in the outline of clothing made some older storage arrangements difficult to conceal.~Later 引入历史变化及其影响。
The display shows how several solutions existed alongside each other for a considerable time.`},{title:'Interpreting a surviving object',focus:'磨损与用途、证据限定、总结。',text:`This small fabric container entered the collection without a clear description of its owner.
Its decoration attracted attention when it was first displayed to the public.
Closer examination, however, revealed wear around the fastening, suggesting regular practical use.~however 修正仅看装饰的印象，转入支持用途的证据。
A portrait from a similar period gives another possible comparison.
We cannot assume that the portrait shows this exact item, even though the outline looks similar.~不能由外观相似推出同一件物品，限定推断。
The records also contain several references to changing working routines.
Taken together, the evidence supports studying storage as part of everyday activity, rather than treating it only as fashion decoration.~Taken together 总结多项证据，指出研究视角。
Future displays will therefore include both construction details and the circumstances in which garments were worn.`}]
});
R(3,1,{
coverage:'报名信息、加入目的、会费范围；比赛主题与要求分离；正面评价之后的具体缺点。',
options:`每次参赛的单独报名费|订阅摄影刊物的资格|所有活动的终身通行权
参加一次比赛的费用|购买摄影器材的分期付款|每幅参赛照片的冲印费
由老师统一布置的练习|成员自发组织的展览|只讨论技术的学习课程
作品使用的拍摄技巧|照片拍摄的具体地点|比赛获奖者的个人风格
相机采用的硬件配置|照片打印纸的尺寸|拍摄时使用的光线强度
照片对公众展示的时长|图像画面的清晰程度|拍摄对象与相机的距离
只按分数排出的名次|评委公布的最终获奖决定|参赛者对规则的提问
准备参赛但尚未提交的草稿|会员收藏的所有图片|由评委提供的示例图片`,
grammar:[['The theme is open, ___ the image must be taken indoors.（but / so）','but','主题自由不代表拍摄地点无限制。','Any subject is allowed, ___ the picture must include a built structure.'],['The judge liked the idea but said it ___ too dark.（was / were）','was','it 指单幅照片，用单数；评价对象不能移到主题。','The second photograph ___ well framed but slightly blurred.']],
locators:`{The applicant's} [home address|1] is in ___ Road.~For [where you live|1], {the road} is called Birch, spelt B-I-R-C-H.~home address 对应 where you live，路名拼写是待听信息。
The [colleague|1] told {the applicant} about the ___ .~Someone [at work|1] {first told me} about {the group}, not the notice in {the shop}.~colleague 对应工作中认识的人，商店告示为干扰来源。
The {main reason} for joining is to [improve|1] ___ .~I want to [get better at|1] spotting my mistakes through other members' comments.~improve 对应 get better at，评论是改进途径。
The {annual fee} [excludes|1] {the cost} of ___ .~Your {yearly payment} covers meetings, but [does not include|1] coach outings.~excludes 与 does not include，注意否定范围。
In the architecture round, {the scene} must [contain|1] ___ .~For {that competition} we need {a picture} that [includes|1] part of a doorway.~contain 对应 includes，不等同于只拍该对象。
{The picture's} [composition|1] was described as ___ .~{The colours} were pleasing, but the [arrangement of objects|1] was unbalanced.~composition 指构图，颜色是已肯定的干扰信息。
The [landscape|1] entry needed greater [detail|2] in ___, even though {the judge} was pleased with {the colours} and {the position} of {the horizon}.~{The horizon} was well placed, and {the colours} worked, but your [countryside|1] image lacked [visible features|2] in {the foreground}, where the dark shapes tended to merge into one another.~landscape 对应 countryside；detail 对应 visible features，不能把肯定项当成待改进项。
The [night|1] photograph was criticised for [insufficient|2] ___, {rather than} for camera movement, which {the judge} thought had been controlled successfully.~There was no sign that {the camera} had moved; the problem with the [after-dark|1] shot was [too little|2] light reaching {the sensor}, so {several important features} were barely visible.~night 对应 after-dark；insufficient 对应 too little，清晰与曝光是不同维度。
By the [deadline|1], {the club} must have [received|2] ___, {rather than} merely being informed that {the applicant} intends to send an entry later.~An email promising an entry is not enough: {the actual file} must have [reached|2] {our inbox} by the [closing date|1], so allow enough time if {your internet} connection is unreliable.~deadline 对应 closing date；received 对应 reached，发出和收到不混同。
The [title|1] will be revealed at the [next|2] meeting, after {the committee} considers members' ___ {rather than} announcing {a theme} before {their ideas} have been discussed.~You may send ideas this week, but the [name|1] of the new round will not be revealed until our [following|2] gathering, once {the committee} has considered {the suggestions}.~title 对应 name；next 对应 following，建议时间不是公布时间。`,
paragraphs:[P('Joining a group',`A caller wants to [improve her eye=>develop visual judgement=>提高观察与判断，不是修理设备]. The organiser says members [learn from one another=>develop through exchanging experience=>互相学习而非只听老师]. A subscription [falls due=>becomes payable=>到应缴纳的时间] each spring. Outings are [charged separately=>paid for in addition=>不含在基本费用内]. The caller can [try it out=>experience it before committing=>先体验后决定] at an open evening. This does not [commit her to=>oblige her to accept=>咨询和体验不产生必然承诺] a full year's membership.`,['included in the basic fee','becomes refundable','obtain a qualification']),P('Understanding feedback',`A judge praised a photograph's [sense of depth=>impression of distance within the scene=>画面纵深感]. The horizon was [off-centre=>away from the middle=>位置偏离中心，不等于倾斜]. However, one bright area [drew the eye away=>distracted attention=>使注意力偏离主体] from the subject. The maker was advised to [crop out=>remove by trimming the image=>裁去画面部分] a sign. Another image was [out of focus=>not sharply defined=>不清晰而非光线不足]. These comments [related to=>concerned=>指出评价针对的方面] different technical issues.`,['underexposed','tilted','restore an omitted area'])],
signals:[{title:'Membership choices',focus:'目的、费用范围、下一步。',text:`The club welcomes people using simple cameras as well as those with specialist equipment.
Our meetings include informal discussions and occasional visits from experienced photographers.
If your aim is to understand why a picture does not work, the feedback evenings will be more useful than the sales demonstrations.~if 引出目标，区分两类活动适用性。
You can attend one open meeting before you decide whether to join.
The annual payment includes those meetings, but travel on organised outings is an additional expense.~but 限制会费包含范围。
Our secretary keeps a list of anyone interested in a particular visit.
Before paying for membership, please check that the normal meeting time fits your schedule.~before 明确先核实时间，再付款。
That will help you choose the membership option you are actually likely to use.`},{title:'Separating theme from criticism',focus:'比赛要求、优点与缺点、截止动作。',text:`We have now looked at the entries for the reflections competition.
Several photographers chose windows, while others used water or polished metal.
The rule concerned including a reflected image, not photographing a particular kind of surface.~说明规则范围，表面材料只是实例。
The judge found a number of imaginative ideas in the group.
In the harbour photograph, the idea was successful, but the bright sign diverted attention from the main subject.~赞扬之后转入具体问题，不把 idea 当作缺点。
There will be time to revise images for the separate exhibition next month.
Remember that the organiser must receive the revised file by the closing date; posting a message that evening is not sufficient.~必须收到文件，否定仅发送消息即可满足要求。
Please keep a copy in case the organiser asks you to resend it.`}]
});
R(3,2,{
coverage:'禁令与建议；常见说法的否定；外观与安全不能等同；采集限制、环境变化与保存条件。',
options:`确认是否适合食用|记录某地出现的数量|按颜色给样本排序
味道令人喜欢的|经过烹调处理的|对所有动物都无害的
只会引起不适但不含毒素的|只在生食时有危险的|有明显难闻气味的
代表某地全部物种的统计|用于辨识的一张参考照片|采集时使用的工具
某物种当前出现的数量|样本表面呈现的颜色|采集路线的行政边界
向导提供的辨识结论|活动参加者购买的门票|采集之后补交的登记表
菌盖上表面的斑点|菌柄底部的根状结构|孢子落下形成的图案
可见的幼小菌体|用于储存养分的根部|覆盖菌盖的表皮`,
grammar:[['A familiar appearance ___ establish safety.（does not / is not）','does not','否定外观足以证明安全的推断。','The fact that an animal eats it ___ prove it is suitable for people.'],['Collect specimens only ___ the landowner permits it.（where / despite）','where','only where 限定允许采集的地点。','Photography is welcome ___ collecting is not permitted.']],
locators:`Which TWO warnings concern [collecting|1] specimens?~Do not [take samples|1] home unidentified, or enter areas where access has been restricted.~collecting 对应 take samples，禁止范围由语境限定。
Which TWO claims about [appearance|1] does the guide reject?~Neither colour nor [how attractive something looks|1] establishes that {a specimen} is safe.~appearance 对应 looks 相关描述，不可仅凭外观判断。
Which TWO rules concern {the group's} [conduct|1]?~The guide explains [how everyone should behave|1]: stay in sight and leave unfamiliar specimens alone.~conduct 在此指行为规范，不是带领活动。
Which TWO conditions affect [safe observation|1]?~To [look around without unnecessary risk|1], we need daylight and permission to enter {the woodland}.~safe observation 对应安全观察，不表示允许自行试吃。
What support is recommended for [novices|1]?~[Beginners|1] should learn with an experienced group instead of relying on {a photograph} alone.~novices 与 beginners 对应。
Why is the [removal|1] of specimens restricted here?~[Taking samples away|1] is limited to protect material needed for future growth.~removal 对应 taking samples away，观察不等于采走。
What change has affected local [habitats|1], particularly where new construction has [fragmented|2] woodland that previously formed a continuous area around {the reserve}?~The total wooded area has not vanished, but {these organisms'} [natural environments|1] have been [broken into smaller pieces|2] by building work, making {some populations} more isolated.~habitats 对应 natural environments；fragmented 对应 broken into smaller pieces，非完全消失。
Why does {an app's} [suggestion|1] not provide a [definitive|2] identification, even when {its photograph} appears to resemble {the specimen} found beside {the path}?~A close-looking photograph may be useful, but {the app} offers only a [possible answer|1], not a [conclusive|2] identification; important features may be hidden or missing from {the image}.~suggestion 对应 possible answer；definitive 对应 conclusive，外表相像不足以确证。
What storage advice concerns [research samples|1] that must remain [separate|2] until {a specialist} has examined them, despite having been labelled at {the collection} point?~{A label} records where {a sample} came from; it does not identify it, so [material for study|1] must be kept [apart|2] from food until {the specialist} has completed the check.~research samples 对应 material for study；separate 对应 apart，标签不等于鉴定结果。
What should {a learner} do when [uncertain|1] about {a specimen}, particularly if moving it would [disturb|2] {the surrounding material} needed for later observation?~If you [cannot be sure|1] what it is, do not [interfere with|2] it or {the ground} nearby; leave everything in place and ask {the leader} to come and examine it.~uncertain 对应 cannot be sure；disturb 对应 interfere with，求助前不移动样本。`,
paragraphs:[P('An observation walk',`Participants are asked to [err on the side of caution=>choose the safer response when uncertain=>不确定时宁可保守]. A photograph is [no substitute for=>not able to replace=>不能替代专业判断] expert assessment. Several species are [easily mistaken for=>readily confused with=>外观易混，不表示同一物种] one another. The guide keeps [a close watch on=>carefully monitors=>留意活动过程] the group. Visitors must [leave intact=>avoid damaging or removing=>保持完整] specimens in protected patches. The exercise is [for observation only=>not intended to authorise collection or consumption=>明确活动目的与边界].`,['identical to','permission to eat','collect for later examination']),P('Checking an assumption',`A beginner had [jumped to the conclusion=>decided without enough evidence=>过早作出结论] that an attractive colour meant safety. The guide [challenged that assumption=>questioned the basis of that belief=>质疑依据而非默认认同]. One feature [in isolation=>considered without other information=>脱离其他特征] could mislead. Several observations must [be taken together=>be considered jointly=>综合而非择一]. When doubt remains, the learner should [refrain from=>choose not to=>主动避免行动] handling the example. Careful records may [shed light on=>help explain=>帮助理解而非保证定论] its identity later.`,['settled the matter','be considered separately','confirmed that belief'])],
signals:[{title:'Warnings and beliefs',focus:'行为禁令、否定推断、活动范围。',text:`Today's woodland activity is an introduction to careful observation, not a collecting expedition.
The leader will show features that can help distinguish examples during later study.
Please do not take an unfamiliar specimen away merely because it resembles a picture you have seen.~do not 明确行为禁令，merely because 指出不足的依据。
There are several ways to record details without removing anything from the ground.
A common mistake is to treat one attractive feature as proof of safety, when identification requires a wider assessment.~common mistake 引出需要否定的推断，不是给出食用规则。
Our photographs will be discussed by a specialist after the walk.
Until that assessment is complete, the exercise should not be treated as permission to taste or collect anything.~until 限定状态，明确观察不授权采食。
Please ask the leader whenever you are unsure what the activity permits.`},{title:'Protecting the study area',focus:'限制目的、环境变化、证据局限。',text:`The reserve contains small study plots that have been monitored over several seasons.
You may notice string markers and numbered labels beside the path.
These areas must be left undisturbed so that researchers can compare observations made at different times.~so that 解释保护的研究目的。
Outside the plots, the surrounding landscape has also been changing.
The main local pressure comes from habitats being broken into smaller patches, rather than from a shortage of visitors.~main pressure 区分真正原因和无关解释。
Volunteers can contribute photographs with the location and date attached.
However, a missing photograph does not prove that a species was absent, because people may simply have overlooked it.~however 限定由未观察到推出不存在的推断。
That is why repeated observations are useful when reviewing the reserve's records.`}]
});
R(3,3,{
coverage:'历史类比的态度；预测与事实；怀疑范围；职业与任务的区分；行业评价匹配。',
options:`完全取消所有人的工作|只用电脑保存工作记录|让员工远程完成原有任务
个人当天承担的一项任务|某人连续受雇的总时长|为某项工作支付的工资
员工主动更换职业|因表现问题受到处分|正常达到退休年龄
依据已发生事实作出的记录|已经确认的政策承诺|不会变化的统计结果
无需任何技术就能完成的|只由新员工承担的|必须每天同一时间进行的
服从现有规则而不改变|同时完成更多工作的速度|独立工作时不接受帮助
通过固定程序重复执行|对结果进行简单计数|照别人指令完成动作
对现有技能作定期测试|新员工上岗前的介绍|给已离职者支付的补偿`,
grammar:[['Some tasks may change without the occupation ___ .（disappearing / disappeared）','disappearing','without 后用动名词；任务变化不等于整个职业消失。','Routine duties can be automated without the whole role ___ .'],['The forecast depends on ___ employers adopt the system.（whether / that）','whether','是否采用是预测的条件，不能当作既定事实。','The outcome will depend on ___ organisations invest in training.']],
locators:`Which TWO attitudes concern workers who [opposed|1] machinery?~The students understand their fears but doubt whether [resisting|1] {the change} could stop it.~opposed 对应 resisting，理解动机不等于认可效果。
Which TWO historical claims do the students [doubt|1]?~They [are unconvinced|1] that every displaced worker gained a better job or {that change} was uniform.~doubt 对应 are unconvinced，不是明确断言所有说法都错误。
Which TWO predictions concern [working hours|1]?~They question whether technology will shorten [time spent at work|1] or delay retirement everywhere.~working hours 对应 time spent at work，退休年龄是另一预测。
Which TWO benefits depend on employers' [decisions|1]?~Training and a fairer distribution of gains require [choices|1] about how technology is introduced.~decisions 对应 choices，不是技术自然保证的结果。
What is said about [routine|1] bookkeeping tasks?~[Standard, repetitive|1] entries {may be automated}, while {unusual cases} still need judgement.~routine 对应 standard, repetitive，异常个案不是常规任务。
What trend affects [demand|1] for {personal services}?~For hands-on care, people's [need for the service|1] is increasing {rather than} disappearing.~demand 对应 need for the service，不是服务供给人数。
What comment concerns [administrative|1] teams whose [workforce|2] has changed, although {some complex tasks} still require staff with detailed knowledge of the organisation?~The difficult enquiries have not disappeared, but in [office support|1] teams the [number of employees|2] has already fallen, because software now handles several of the simpler steps automatically.~administrative 对应 office support；workforce 对应 number of employees，工作仍存在不代表人数不变。
How has technology affected [agriculture|1] and [productivity|2], even though the students do not claim that {every farming} task can be completed without human judgement?~{Some decisions} still require experience, but in [farming|1] fewer people can now produce more in the {same period}; that rise in [output per worker|2] does not mean no workers remain.~agriculture 与 farming；productivity 与 output per worker，避免把效率提升听成完全无人化。
What does an [ageing|1] population imply for [future demand|2] in care-related occupations, {rather than} for {the number} of {routine processing} jobs discussed earlier?~{Routine processing} may shrink, but as {the population} [gets older|1], the [need in coming years|2] for personal assistance is likely to grow, especially where people remain in {their own homes}.~ageing 对应 gets older；future demand 对应 need in coming years，不同职业趋势相反。
What has changed in the [duties|1] of bank staff dealing with [complex|2] enquiries, even though customers can now complete many straightforward transactions without visiting {a branch}?~{Routine payments} are increasingly handled online; the [responsibilities|1] of branch staff therefore involve more [complicated|2] questions, where a customer may need an explanation {rather than} a standard automated response.~duties 对应 responsibilities；complex 对应 complicated，线上能完成的是常规事务。`,
paragraphs:[P('Looking back',`The students found older fears [understandable=>reasonable in the circumstances=>理解不等于支持所有行动]. They warned against [looking back with hindsight=>judging earlier decisions using later knowledge=>不能用后来结果简化当时处境]. One example was [not representative of=>not typical of=>个例不代表整体] every worker. A new machine could [put a role at risk=>make a job less secure=>风险而非已经消失]. Effects [varied considerably=>differed substantially=>不同群体影响有差异]. Historical parallels should therefore be [used with caution=>applied carefully=>谨慎类比，不是完全不能类比].`,['already eliminated the job','identical in every case','fully typical of']),P('What a forecast assumes',`A forecast [rests on=>depends on=>结论依赖前提] several assumptions. It may [take no account of=>ignore=>没有考虑] employers' choices. Greater output does not [necessarily translate into=>automatically lead to=>不保证转化为] shorter hours. New duties may [emerge=>come into existence=>出现而非仅被重新命名]. Workers need opportunities to [keep pace with=>adapt as quickly as=>跟上变化] those demands. The students were [sceptical of=>doubtful about=>保留怀疑，不是已经证伪] a precise timetable.`,['automatically guarantees','have already disappeared','proved false'])],
signals:[{title:'A historical comparison',focus:'态度限定、职业与任务、预测条件。',text:`I had assumed the old protests were simply a refusal to accept new ideas.
That seems too easy a judgement when you consider how little support the workers had.
We can understand their anxiety without concluding that every action they took was effective.~without 区分理解动机与认同行为有效。
The article then moves from historical examples to modern office systems.
It is individual duties that may be replaced first, rather than necessarily the whole occupation.~强调替代对象，排除把任务等同职业。
Some organisations are already changing the balance between routine work and advice.
But the speed of that change depends on investment and training, not on technical possibility alone.~but 与 depends on 引出预测前提。
We should make those assumptions visible when comparing the different forecasts.`},{title:'Which predictions do we accept?',focus:'双方同意范围、怀疑的具体预测、行业差异。',text:`The report predicts that digital systems will make several services cheaper to provide.
Yes, although lower costs do not tell us how the savings will be used.
We both doubt that a rise in productivity will automatically give every employee a shorter week.~both 明确一致怀疑的具体主张。
Some employers might expand the service rather than reduce staffing hours.
For personal care, however, demand could grow even while routine administrative tasks become automated.~行业切换并对比两种变化。
That makes a single estimate for all occupations rather misleading.
So our conclusion should separate changes already observed from outcomes that still rely on future decisions.~So 引出总结要求，区分事实与条件性预测。
We can use different colours for those categories on the final slide.`}]
});
R(3,4,{
coverage:'系统设想与现状；费用下降导致数量增加；信息共享障碍；小碎片识别；协调避碰与监管。',
options:`物体与地面的垂直距离|物体每秒移动的速度|发射时经过的大气路线
已经停止工作的完整卫星|所有正在运行的航天器|预定返回地球的设备
两物体靠近但没有接触|卫星主动改变运行高度|物体正常进入预定轨道
只确认某个物体的身份|只计算物体的总数量|发射前安排运行时间
物体某一时刻的坐标|物体上报信息的频率|物体形状的外轮廓
航天器自然发生的漂移|地面站定期接收信息|监测系统发现异常信号
单一运营商独立作决定|完全统一所有机构权限|把信息公开给全部公众
只在发射当天检查|对单一事故进行事后调查|由航天器自行传输身份`,
grammar:[['Operators may withhold data ___ commercial concerns.（because of / although）','because of','because of 后接名词原因，信息不共享有动机。','Details may remain private ___ security requirements.'],['The system would improve safety if standards ___ agreed.（were / have）','were','假设方案而非已存在的事实。','Coordination would be easier if data formats ___ consistent.']],
locators:`The proposed orbital system resembles [aviation|1] arrangements for ___ .~The planned service is compared with {the coordination} of [aircraft|1] movements.~aviation 与 aircraft 属领域到具体对象的改写。
Operators lack [agreed|1] rules for ___ .~At present {the rules} are not [accepted by all operators|1].~agreed 对应 accepted by all operators，否定保留在句中。
The [reduction|1] in {launch costs} led to more ___ .~As sending equipment up became cheaper, the [fall|1] in costs attracted more organisations.~reduction 对应 fall，成本下降而非发射量下降。
Identifying details may not be [disclosed|1] by ___ .~Operators may choose not to [make public|1] details that help identify their satellites.~disclosed 与 make public 对应，注意 not 的范围。
Very small fragments are hard to [detect|1] using current ___ .~Current equipment cannot easily [pick out|1] {tiny pieces} among the tracked objects.~detect 对应 pick out，不是移除碎片。
{Some details} are [withheld|1] to prevent ___ benefiting.~Businesses [keep certain details private|1] because rivals could benefit from knowing them.~withheld 对应 keep details private，保留信息不等于没有信息。
Fresh [observations|1] are needed to [revise|2] a predicted ___, {rather than} continuing to rely on one position recorded several days before another object may pass nearby.~One {old position} gives only a rough guide; fresh [measurements|1] allow observers to [update|2] the {predicted trajectory} as conditions change, which matters when another object may pass nearby.~observations 对应 measurements；revise 对应 update，旧位置不能替代连续更新。
Operators must [coordinate|2] {their manoeuvres} to [prevent|1] ___, {rather than} both changing course independently and potentially creating a new conflict after receiving {the same warning}.~{A warning} alone is insufficient: operators need to [work together on|2] {the manoeuvres} so that their combined actions [avoid|1] {an impact}, {rather than} both moving into a new conflict.~prevent 对应 avoid；coordinate 对应 work together on，收到警报不等于完成协商。
An end-of-service plan must cover retiring an [inactive|1] satellite [safely|2] without creating ___, {rather than} stating only when the operator expects {the equipment} to stop working.~The document should cover more than the {final working date}; once {a satellite} is [no longer operating|1], {its retirement} must proceed [without creating new hazards|2] for other objects nearby.~inactive 对应 no longer operating；safely 对应 without creating new hazards。
[International|1] rules need a way to verify [compliance|2] in operators' daily ___, {rather than} relying entirely on a common statement of principles about responsible behaviour.~A common statement of principles is useful, but [standards shared across countries|1] also need a way to verify {that operators} are [following the requirements|2] in {their actual day}-to-day decisions.~international 对应 shared across countries；compliance 对应 following requirements，表态不等于执行。`,
paragraphs:[P('A crowded operating environment',`The lecture describes objects [sharing the same region=>occupying a common area=>共同区域，不表示轨道完全相同]. Their paths can [intersect=>cross one another=>路径相交，尚不等于已经碰撞]. A warning is [time-sensitive=>useful only if acted on promptly=>时间窗口影响效用]. Operators should [pool information=>combine their data=>汇集而非各自保留]. Yet some are [reluctant to disclose=>unwilling to reveal=>不愿公开不等于没有信息] sensitive details. This creates [a gap in coverage=>an area not adequately observed=>监测覆盖不足].`,['already collided','without a time limit','have no data to share']),P('Prevention and responsibility',`A safety plan aims to [head off=>prevent before it happens=>事前预防] additional hazards. It cannot [wipe out=>remove completely=>完全消除] every existing fragment. Any manoeuvre must [take account of=>consider=>考虑别人的行动] neighbouring traffic. Otherwise two well-intended changes could [work against each other=>have conflicting effects=>行动互相抵消或冲突]. Rules need [a means of enforcement=>a way to ensure requirements are followed=>规范要有执行机制]. Long-term success depends on [shared responsibility=>obligations accepted by all involved=>共同责任而非推给单一机构].`,['repair after impact','operate independently','a voluntary suggestion only'])],
signals:[{title:'An idea and its obstacles',focus:'现状与设想、增长原因、信息保密。',text:`A traffic service for orbiting equipment is often compared with the coordination of aircraft.
The comparison is useful, but the operating environment presents different difficulties.
At present, the fully coordinated service being described is a proposal rather than an established global system.~at present 及 rather than 区分设想与现状。
Meanwhile, more organisations can afford to place equipment in space.
Lower costs have encouraged that growth, which increases the need to exchange reliable information.~费用变化与数量增长构成因果。
Some technical information could already be exchanged through existing networks.
The obstacle is not always a lack of measurements; operators may be unwilling to reveal commercially sensitive details.~not always 修正缺数据的单一解释，转入不愿共享。
A workable service must therefore address incentives as well as technical accuracy.`},{title:'Preventing the next problem',focus:'识别局限、协调动作、执行条件。',text:`Monitoring equipment can detect many larger objects moving through a particular region.
Repeated observations help estimate where those objects are likely to be later.
The smaller fragments remain a difficulty because some cannot be distinguished reliably by current sensors.~转向监测局限并给出具体原因。
An operator receiving a warning may consider changing the path of a satellite.
That action must be coordinated with others, otherwise separate attempts to avoid danger could create a new conflict.~otherwise 说明不协调的风险，不能只记改变轨道。
Agreed reporting standards would make those conversations easier.
However, announcing a standard is not enough unless there is a practical way to check that it is followed.~however 与 unless 引出标准实施所需条件。
Responsibility continues when equipment stops operating, because an inactive object can still affect other traffic.`}]
});
R(4,1,{
coverage:'中介与雇主职责；岗位地点；职责动词；必要资质与性格要求；临时合同与后续可能；工作时间和设施。',
options:`直接雇佣所有申请人的公司|为雇员发工资的财务部门|代表员工协商工资的组织
申请者填写的个人简历|某项临时分配的任务|面试时进行的能力测试
过去工作的总年数|对某份工作的个人兴趣|经理给予的口头推荐
每小时临时补贴|扣除全部支出后的收入|一次面试的报销金额
尚未获批准的职位描述|申请人与中介的通话记录|雇员个人填写的工作计划
没有规定工时的|任何时候都可无条件结束的|试用结束后必定长期留任的
入职后第一次培训|确认开始上班时间的电话|中介核实地址的登记
应聘者自己的工作声明|确认员工已开始上班的通知|招聘中介撰写的岗位广告`,
grammar:[['A longer role may follow, but it is ___ guaranteed.（not / yet to）','not','可能续聘不等于承诺续聘。','Further work is possible, though it is ___ part of the present offer.'],['Applicants must be organised ___ able to stay calm.（as well as / rather than）','as well as','并列要求，两项都需要。','The role requires accuracy ___ a patient manner.']],
locators:`{The agency's} current [vacancy|1] is for a ___ assistant.~The [post being advertised|1] supports {the bookings} team {rather than} {the agency's} own reception.~vacancy 对应 post being advertised，注意雇主与中介区别。
{The employee's} [workplace|1] is in a ___ complex.~You would be [based|1] at the arts complex, not in {our agency} office.~workplace 与 be based 的地点对应。
The [street name|1] in the workplace address is ___ .~For {the office} location, the [road is called|1] Hazel, H-A-Z-E-L.~street name 对应 road is called，关注名称拼写。
{A daily duty} involves [amending|1] existing ___ .~{Each morning} you [make changes to|1] reservations when customers' plans change.~amending 对应 make changes to，不是建立全新预订。
{The employee} must [maintain|1] the internal ___ .~Part of {the job} is to [keep up to date|1] {the records} on {the shared system}.~maintain 在记录语境中对应 keep up to date。
An [essential|1] qualification is ___ .~{The stated certificate} is [required|1], even when candidates already have relevant experience.~essential 对应 required，不是经验可替代的优选条件。
A [suitable|1] approach should remain [patient|2] while dealing with a growing ___, {rather than} treating speed as the only priority when visitors require an explanation.~Being quick is helpful, but the [appropriate|1] approach is to stay [calm with people|2] under pressure; callers may need an explanation even while you are dealing with {a growing queue}.~suitable 对应 appropriate；patient 对应 calm with people，速度不是唯一要求。
The [initial|1] contract lasts ___, but any [extension|2] depends on later demand {rather than} being guaranteed when the successful applicant accepts the role.~There may be more work afterwards, but the [first|1] appointment is short-term; [continuing the contract|2] will depend on bookings, so applicants should not treat {another period} as certain.~initial 与 first；extension 与 continuing the contract，可能续约不等于保证。
The [regular|1] working day {ends at} ___, while [overtime|2] must be agreed separately and is not included in {the hours} stated in the advertisement.~Four twenty is {the finish} for your [normal|1] hours; if [additional work|2] is needed after that, {the manager} will discuss it beforehand instead of treating it as part of {every shift}.~regular 对应 normal；overtime 对应 additional work，正常下班时间与加班区分。
The [onsite|1] facility available to [employees|2] is ___, although visitors arriving by bicycle must use {the public stands} outside the arts complex.~There are public stands near {the entrance}, but [staff|2] have access to {a secure store} [within the building|1]; visitors cannot use that space even when {the public stands} are full.~onsite 对应 within the building；employees 对应 staff，公众与员工设施不同。`,
paragraphs:[P('An agency call',`The adviser is [acting on behalf of=>representing=>代表雇主而非最终录用者] a small employer. The applicant should [take down=>write a record of=>记录而非拆除] the address. The role includes [dealing with=>handling=>处理具体事务] enquiries. Some duties [overlap with=>partly coincide with=>部分重合，不是完全相同] previous experience. A certificate is [a prerequisite=>a requirement that must be met first=>先决条件]. Interest alone will not [make up for=>compensate for=>不能弥补缺少硬条件] its absence.`,['an optional advantage','completely duplicate','deciding for the employer']),P('Checking conditions',`The offer is [for the time being=>for the present period=>当前安排，不承诺以后]. A possible extension [has yet to be agreed=>has not been confirmed=>尚未确认]. Pay is [set out=>specified clearly=>明确列出] in the written terms. Travel is [the employee's responsibility=>something the worker must arrange=>自行安排交通]. The applicant should [clarify=>make certain of the meaning of=>澄清而非自行推断] the starting time. Any difference should be [raised beforehand=>discussed in advance=>提前提出，不是上岗后再说].`,['already guaranteed','provided by the employer','left until after starting'])],
signals:[{title:'The post and its requirements',focus:'地点归属、职责、必要条件。',text:`I am calling from the agency about a temporary post with a local events company.
Our own office is near the station, where you attended your registration meeting.
The job itself is based at the arts centre, so that is the address you should use when planning the journey.~job itself 明确工作地点，排除中介登记地点。
You would speak to customers and help the small administrative team.
An important part of the work is rearranging existing reservations, rather than simply entering new requests.~职责细化，rather than 区分重排与新建。
Your previous experience sounds relevant to those responsibilities.
However, the stated certificate is compulsory, even for applicants who have already done similar work.~however 与 even for 强调必要资格不被经验替代。
We can discuss the remaining practical details once you confirm that requirement.`},{title:'Present offer and future possibility',focus:'合同边界、工作时间、下一步。',text:`The company sometimes needs additional support during its busier seasons.
Several previous temporary employees have returned for later projects.
That history does not guarantee an extension for this appointment, which has a fixed end date.~过去先例不等于当前续聘承诺。
The written summary also gives the ordinary weekly timetable.
Please treat the stated finish as the end of the normal shift, not as an agreement to remain available indefinitely.~说明基本工时范围，否定无限延时。
Any additional hours would need to be discussed separately with the supervisor.
Before we arrange the interview, check that the early start is compatible with your journey from home.~before 指定面试安排前应核实的条件。
If it is not workable, tell us now so that we can consider a different vacancy.`}]
});
R(4,2,{
coverage:'建筑原用途与现用途；收费范围；寄存建议；不同区域开放、监督、活动与展品状态。',
options:`对旧建筑进行完全重建|只记录现代农业的资料|给物品规定当前市场价格
为了新用途完全改造结构|只清除旧物表面的灰尘|复制一件外观相同的新物
单件手工操作的器具|所有可移动的历史物品|给机器提供能源的燃料
参观者自行阅读说明|已经拍摄完成的宣传片|让所有人随时操作原件
不向公众开放的库房|为学校提供住宿的房间|供人办理门票的入口
只在展柜中保存的动物标本|生活在农场周围的野生动物|用作展示的饲料作物
只在周末开放的|没有确定结束日期的|更换展品后永久保留的
只能观看但不能操作的|无需任何看护即可接触的|由游客决定展品内容的`,
grammar:[['The display is open, ___ a parent stays with each child.（provided that / even though）','provided that','开放条件与无条件开放不同。','Visitors may try the tool ___ a staff member supervises them.'],['The building ___ used as workshops before becoming a museum.（was / has）','was','历史用途用过去被动，不能混为当前用途。','The upper floor ___ converted into offices before the collection arrived.']],
locators:`What was {the building's} [original|1] purpose?~[Before becoming a museum|1], {the old mill} was used to process grain.~original 通过改作博物馆之前的用途表达。
How does {the university} use the [upper rooms|1] now?~{The rooms} [upstairs|1] provide offices for {staff administration} {rather than} exhibition space.~upper rooms 对应 upstairs，不是地下展区。
What is included in the [admission charge|1]?~Your [entrance payment|1] covers temporary displays, though {some workshops} cost extra.~admission charge 对应 entrance payment，额外工作坊不在包含范围。
What must visitors leave in the [cloakroom|1]?~Please deposit bulky belongings in the [storage area|1] before entering {the galleries}.~cloakroom 在此对应 storage area。
What is new in the [orchard|1] display {this month}?~{Several objects} have just been added to the [fruit-growing|1] section.~orchard 与 fruit-growing 关联，更新发生在本月。
Why is the [traditional kitchen|1] closed today?~The [old cooking room|1] cannot be entered while repairs are underway.~traditional kitchen 对应 old cooking room。
What can [school groups|1] do in the gallery of [implements|2], even though visitors arriving individually may prefer to explore {the display} without a worksheet?~Individual visitors can simply look around, but [visiting classes|1] in the [tools|2] room are offered {a short challenge} sheet that encourages them to examine how {the objects} were used.~school groups 对应 visiting classes；implements 对应 tools，工作纸面向团体并非所有人必须做。
What supervision is required for [children|1] in the [animal enclosure|2], {rather than} in the {indoor display} where school staff may organise {their own small groups}?~Arrangements inside the museum can vary, but at the [livestock area|2] adults must remain with [young visitors|1] throughout the visit; the fence does not remove the need for supervision.~children 对应 young visitors；animal enclosure 对应 livestock area，地点条件决定看护要求。
What will a [specialist|1] provide in the [textile|2] section {after lunch}, although {the machines} themselves will remain stationary throughout the afternoon?~{The machines} will not be running, but an [expert|1] will be beside the [weaving|2] display to answer questions and explain details that are difficult to show in the {printed labels}.~specialist 对应 expert；textile 由 weaving 具体化，答疑不是机器演示。
What rule concerns [movement|1] through the [vehicle|2] hall, where the {narrow passage} makes it difficult for groups to pass one another safely?~In {the room} containing the old [wagons|2], follow {the arrows} when [walking around|1]; doubling back creates {a bottleneck}, even if there is one object you would like to see again.~movement 对应 walking around；vehicle 由 wagons 具体化，规则针对通行方向。`,
paragraphs:[P('A building with several lives',`The museum [occupies=>is housed in=>现占用空间，不是所有权] an older structure. It was [formerly=>previously=>明确过去用途] a commercial workshop. One wing [remains in use=>continues to serve a purpose=>仍在使用而非原样封存] by another institution. The entrance payment [covers=>includes the cost of=>收费范围] the main exhibition. Donations are [at the visitor's discretion=>optional for each person=>自愿而非强制]. Large belongings should be [left in safekeeping=>stored securely=>暂存而不是捐给馆方].`,['compulsory','owned by','permanently abandoned']),P('Different rooms, different rules',`A seasonal display is [newly installed=>recently put in place=>近期新增]. A neighbouring room is [out of bounds=>not open for entry=>不能进入，不是收费更高] during repairs. The family challenge is [self-guided=>completed without a leader=>自行进行，不等于无人需看护]. At the workshop, children need [close supervision=>careful oversight by an adult=>要求成人监管]. A demonstration runs [at set times=>according to a fixed schedule=>固定时间，不是随到随看]. In the narrow gallery visitors must [keep moving in one direction=>follow a one-way route=>路线限制，不是禁止停留看展的泛指].`,['available continuously','open for an extra fee','free to reverse direction'])],
signals:[{title:'History and admission',focus:'先前用途、目前分区、收费范围。',text:`Welcome to the agricultural collection in this restored riverside building.
The outside still shows several features from its earlier working life.
Before the collection arrived, the building was used for processing grain, rather than as a family residence.~before 与 rather than 明确原用途并排除混淆项。
Some rooms on the upper floor now serve the neighbouring college.
Those rooms are used by administrative staff and do not form part of today's visitor route.~转到当前用途，限定游客可进入区域。
Your ticket gives access to the collection and the temporary exhibition.
The only additional charge is for the optional craft workshop, which you can book at the desk.~only 限定额外收费对象，不能扩展到全部展览。
The guide at reception can help if you are unsure which activities are included.`},{title:'Room-by-room notices',focus:'临时状态、监管条件、区域规则。',text:`I will finish with a few notices about the different parts of the museum.
The fruit-growing room has several new objects beside its permanent display.
The kitchen room, however, is closed today while a damaged floor is repaired.~however 切换区域及状态，强调今天临时关闭。
You can still see photographs of that room near the entrance.
In the animal enclosure, children may take part only while an accompanying adult remains with them.~only while 指定参与活动的监管条件。
There is also a short presentation in the textile workshop after lunch.
Finally, the vehicle gallery has a one-way route, so follow the arrows rather than returning through the doorway you entered.~Finally 引入另一条规则，so 说明具体行动要求。
Please ask a member of staff if any of those arrangements are unclear.`}]
});
R(4,3,{
coverage:'从行为识别学习技能；区分儿童表现；帮助与代做；教师备课条件；教学用途。',
options:`剪下纸片再组合的活动|依靠绘画完成图样的任务|用胶把成品固定的制作
完成步骤的难易程度|进行活动所用的总时间|成品摆放的位置关系
手部动作的精细速度|对口头说明的记忆能力|与同伴配合的熟练程度
同时完成多个步骤的速度|只靠听觉判断顺序|对成品外观作评价
一次就完成所有步骤|比别人完成得更快|等待老师提供完整答案
由老师对全组作统一讲解|由同伴代为完成任务|依靠个人反复独立尝试
完成任务之后给出的评价|对成品整体外观的说明|孩子自行决定的游戏规则
图形尺寸逐步增大的规律|两个形状之间的位置距离|完成作品所用材料的数量`,
grammar:[['The child needed a hint, ___ the teacher to finish the model.（not / so）','not','需要提示不等于需要代做。','Peer support should offer guidance, ___ replace the independent attempt.'],['The task was simplified ___ pupils could still explain each step.（so that / unless）','so that','调整难度是为了保留理解与解释，不是降低期待。','The teacher slowed the demonstration ___ everyone could follow the sequence.']],
locators:`Which TWO skills appear when pupils [collaborate|1] on {the model}?~They [work together|1] to check instructions and correct {a fold} that does not match.~collaborate 对应 work together，不是教师单独示范。
Which TWO benefits arise from [explaining|1] {a fold}?~[Describing|1] {the action} to {a partner} helps organise {the sequence} and reveal missing information.~explaining 对应 describing，重点是表达过程。
What shows Eli's [persistence|1] when {the fold} is difficult?~He [keeps trying|1] {the awkward corner} without asking {the adult} to finish it.~persistence 对应 keeps trying，不等于完全不需指导。
What suggests Rosa's [satisfaction|1] with the completed model?~She [looks pleased|1], holding up her result before showing {the group}.~satisfaction 对应 looks pleased，举起动作是情绪证据的一部分。
What suggests Theo's [dependence on guidance|1]?~He [keeps asking what to do next|1] and looks towards {the teacher} between folds.~dependence on guidance 由反复询问下一步体现。
What indicates Mina is [relaxed|1] during {the task}?~Her shoulders drop and she becomes [calmer|1] as she folds.~relaxed 对应 calmer，身体表现支持判断。
What suggests Jude has [misunderstood|1] the [sequence|2], even though he can copy {individual folds} accurately when {the teacher} demonstrates them separately?~He can reproduce {each fold} on its own, but has [got the wrong idea about|1] the [order|2]: he copies a {later step} first and then cannot make {the edges} meet.~misunderstood 对应 got the wrong idea about；sequence 对应 order，动作能力与顺序理解分开。
What should {the teacher} [check|1] [beforehand|2], {rather than} waiting until {the class} has begun to discover that a {later step} is too complicated?~The written instructions may look simple, but [in advance|2] of {the lesson} {the teacher} should [test|1] {the complete model} personally, including the folds that are not obvious from {the diagrams}.~check 对应 test；beforehand 对应 in advance，准备阶段要完成全模型。
How should [guidance|1] be [adapted|2] for different learners, without changing {the model} into an unrelated task or assuming that everybody needs {the same support}?~The end product can stay the same, but the [help provided|1] should be [adjusted|2]: {some pupils} need {a demonstration} of {each stage}, whereas others can continue after a brief prompt.~guidance 对应 help provided；adapted 对应 adjusted，调整的是支持程度。
Why might [paper folding|1] support [mathematics|2], beyond giving pupils an enjoyable activity to complete after they have finished the rest of {their work}?~[Origami|1] can turn a flat sheet into {a physical model}, allowing pupils to investigate [geometrical relationships|2] directly instead of treating {the activity} only as {a reward} at the end.~paper folding 对应 origami；mathematics 由 geometrical relationships 具体化。`,
paragraphs:[P('Watching the process',`One learner [worked it out=>found the solution independently=>独立解决而非被直接告知]. Another was [at a loss=>unsure how to proceed=>不知道下一步，不等于不愿参与]. A quiet pupil [grew absorbed in=>became deeply engaged with=>投入活动]. The observer should not [equate speed with=>treat quick completion as the same as=>不能把速度等同理解] understanding. A finished model [on its own=>without other evidence=>单看成品证据不足] reveals little about support. The review therefore [draws on=>uses as evidence=>利用证据而非照搬] notes of what children actually did.`,['was unwilling to join','was given the solution','proves full understanding']),P('Planning a follow-up',`The teacher will [run through=>practise the complete sequence=>完整预演] the model first. Instructions should be [broken into stages=>divided into manageable steps=>分步处理]. A diagram can [back up=>support=>辅助而非替代所有语言] an explanation. Pupils should have [room to experiment=>an opportunity to try approaches=>允许尝试而非只照做]. Assistance may be [scaled back=>gradually reduced=>逐步减少] as confidence grows. Reflection helps children [make sense of=>understand the significance of=>理解过程中的选择] their corrections.`,['remove every instruction','increased indefinitely','replace completely'])],
signals:[{title:'What the children show',focus:'行为证据、人物切换、推断边界。',text:`I watched the video again and made notes about how the children approached the folding task.
Their completed models looked similar, but the process was quite different.
Eli's repeated attempts show independence, because he checked his earlier folds rather than asking the adult to finish them.~从具体行为推断能力，不把成品相似等同过程相同。
Rosa was particularly eager to hold up her model when it was complete.
By contrast, Theo kept looking for the teacher and asking which step came next.~By contrast 切换人物和表现，避免把上一人的评价移过来。
That distinction would disappear if we only photographed the final models.
We should therefore base the comparison on observed behaviour, not assume that the fastest child understood the most.~therefore 总结评价依据并排除速度推断。
The notes will help us plan the amount of support each learner may need.`},{title:'Preparing the lesson',focus:'课前条件、支持方式、学科应用。',text:`For the next lesson, I have found a model that uses fewer folds than the one in the video.
The picture looks simple, although the middle stage may still be difficult to explain.
Before presenting it to the class, we need to complete it ourselves and identify where an instruction could be misunderstood.~before 明确教师试做的时间与目的。
We can then decide which stages need a drawing as well as spoken guidance.
The support should help pupils continue for themselves, rather than turn the adult into the person making the model.~rather than 排除代做，限定帮助的目标。
It may also connect well with our work on shapes next week.
In particular, folding gives children a physical way to examine how edges and angles relate to each other.~In particular 引入具体学科用途。
We should allow time for them to describe what they noticed, not just display a finished object.`}]
});
R(4,4,{
coverage:'作家生平先后；离居原因；创作收入与房屋购置；物品改造、房间功能、访客与后世产权。',
options:`为寻找素材主动度假|迁到另一地区长期任职|短期离开家乡进行巡演
只供工作而不居住的房间|接受公众参观的任何建筑|作者在小说中描述的场所
出版后公开出售的书籍|他人记录作者言论的笔记|为电影拍摄编写的脚本
作者对原稿作的一般校对|把作品翻译成另一种语言|把手稿保存成数字副本
只具有昂贵市场价值的|用于支撑结构的|原主人亲自制作的
制造物品的材料来源|物品被保存的完整程度|作品在市场上的受欢迎程度
物品最初的实用功能|明确记录的历史事件|作品表面的装饰图案
完成创作所获的收入|作者已经发表的主题|读者对作品的评价`,
grammar:[['He bought the house after the poems ___ published.（were / have）','were','先出版后购房，过去被动表示出版事件。','The residence was acquired once the collected essays ___ sold.'],['Objects were reused ___ being purchased new.（instead of / as soon as）','instead of','改用旧物与购买新物对照。','The room incorporated old panels ___ using newly carved replacements.']],
locators:`An [adaptation|1] allowed {the novel} to be performed before an ___ .~{The story} was [reworked|1] so that it could be performed before {an audience}.~adaptation 对应 reworked 的改编关系。
{The writer's} public speeches concerned ___ and [education|1].~When speaking about society, she discussed unfair conditions and [access to learning|1].~education 对应 access to learning，主题词与具体表达对应。
Criticism of the [government|1] made it unsafe to ___ .~She could not safely remain after challenging the [ruling authorities|1].~government 对应 ruling authorities。
The house was purchased using [income|1] from ___ .~[Earnings|1] from a {collected edition} enabled her to acquire {the residence}.~income 与 earnings，不是借款来源。
Items [collected|1] {over time} are displayed on the ___ level.~On the lowest level are objects [brought together|1] at {different stages} of her life.~collected 对应 brought together，时间跨度不是摆放楼层。
Old timber was [transformed|1] into ___ for {the walls}.~Previously used wooden pieces were [reshaped|1] as {decorative panels}.~transformed 在此对应 reshaped，不是原样保留。
The [first-floor|1] rooms reveal an [influence|2] from ___, whereas the {entrance rooms} retain features associated with {the building's} earlier occupants.~The {entrance rooms} look more traditional; in {the rooms} [one level up|1], however, several motifs show the [impact|2] of a different artistic tradition that interested {the writer} later in life.~first-floor 对应 one level up；influence 对应 impact，不把入口风格套到上层。
The [workspace|1] was chosen partly for its [outlook|2] over ___, despite the inconvenience of carrying books and papers to the top of the house.~Carrying materials upstairs was awkward, but {the writer} preferred the [study|1] at the top because its [view|2] across {open fields} gave her a quiet setting away from visitors below.~workspace 对应 study；outlook 对应 view，楼梯不便是让步信息。
Visitors to {the residence} included [literary colleagues|1] and families [requiring|2] ___, {rather than} only people who came to discuss {the writer's} published work.~{Some guests} were [fellow writers|1] and did discuss books, but others were families [needing|2] practical help; {the household's} activities therefore extended beyond {the exchange} of literary ideas.~literary colleagues 对应 fellow writers；requiring 对应 needing，来访人群有不同目的。
The later [transfer|1] of {the property} was arranged [posthumously|2] by ___, {rather than} being completed by {the writer} during {the final years} of her life.~{The writer} discussed {the future} of the house, but the [handover|1] to a {public institution} took place [after her death|2], when a {family representative} completed the necessary arrangements.~transfer 对应 handover；posthumously 对应 after her death，讨论与实际移交时间分开。`,
paragraphs:[P('Work away from home',`A fictional novelist [spoke out against=>publicly opposed=>公开反对而非私下不喜欢] a policy. Living abroad was [not a matter of choice=>not entirely voluntary=>并非自由选择]. She remained [in touch with=>in contact with=>保持联系] readers at home. A new publication [brought in=>generated income=>带来收入] enough to secure a residence. The house [served a dual purpose=>had two main functions=>双重功能] as home and workplace. Its appearance [reflected=>expressed something about=>有所反映，不是完整证明] the owner's interests.`,['a purely voluntary holiday','cost money','had only one use']),P('Rooms and surviving evidence',`Some decoration was [made out of=>created from=>材料来源] reused furniture. The work showed [attention to detail=>care over small features=>制作精细]. A study [looked out over=>had a view across=>房间视野，不是进入某地] fields beyond the house. Visitors were [drawn from=>included people belonging to=>来自多个群体] different walks of life. The property later [passed into public hands=>became publicly owned=>产权变化]. Current displays [distinguish fact from interpretation=>separate documented information from proposed meaning=>史实与阐释分开].`,['remained privately owned','discarded without use','proved every interpretation correct'])],
signals:[{title:'The move and the house',focus:'离居动机、收入来源、房屋用途。',text:`This lecture considers a fictional writer whose later working life was spent abroad.
Several modern accounts describe the move as a chance to enjoy a quieter landscape.
That description overlooks the political disagreement which made remaining at home unsafe for her.~指出原解释遗漏真正离居原因。
She continued to publish and to correspond with people in her original community.
It was income from a collected edition, rather than money inherited from relatives, that enabled the house purchase.~强调资金来源，排除另一个可能来源。
The building then became an important setting for both work and social contact.
The upper room was primarily a writing space, although other parts of the house were regularly used to receive guests.~功能及范围限定，区分不同房间。
We should therefore avoid describing the whole residence as a secluded studio.`},{title:'What the interior can tell us',focus:'物品旧新用途、解释限定、后世产权。',text:`The interior includes carved panels, textiles and objects acquired at different times.
Not all of them were expensive or newly made when they entered the house.
Several decorative features were created by reworking timber from older furniture.~从成品外观转向材料来源及改造过程。
Those choices have encouraged different readings of the owner's artistic interests.
However, a symbolic explanation should not be presented as fact unless it is supported by contemporary evidence.~however 与 unless 限定解释成为史实的条件。
Later conservation work has also changed how some rooms appear today.
The final change we need to note is the transfer from family ownership to a public institution after the writer's death.~final change 标出时间后期的产权转移。
That transition helped establish the building's present role as a place of study and public access.`}]
});
})();
