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
locators:`The [date] of the [most recent journey] was ___ .~My [last trip] was on Monday; sorry, [I mean Tuesday], after the holiday.~most recent 对应 last；修正语后才是最终日期。
The [main purpose] of [today's visit] was ___ .~I bought groceries too, but [this morning] I came [primarily] for a repair appointment.~主因由 primarily 引出，附带购物不等于主要目的。
The [cost] of [leaving the car] was considered ___ .~The fuel was affordable; it was the [parking charge] that seemed [unreasonable].~leaving the car 对应 parking；把燃油与停车费用分开。
The [boarding point] was on ___ [Road].~I [got on] at Alder [Road], not at the terminus near the library.~boarding 对应 got on；道路信息不能与终点混淆。
The [complaint] about the [morning service] concerned ___ .~The seats were fine, but the [early bus] [failed to arrive when expected].~投诉在 but 后；morning 对应 early。
The [lowest frequency] is reported for [buses] in the ___ .~There are plenty at lunchtime; [after sunset], buses [come only occasionally].~lowest frequency 对应 come only occasionally，不能选先出现的时段。
The [respondent's] [usual car journey] is to ___ .~[My sister] drives to college; [I generally drive] to the swimming centre.~先辨认人物，usual 对应 generally。
The [objection] to [cycling downtown] is ___ .~[Riding in the centre] [puts me off] because the junctions feel unsafe.~objection 对应 puts me off；圈定市中心骑行的原因。
The [reason for not owning] a [bicycle] is a lack of ___ .~I'd [buy one], but [there is nowhere] [to lock it securely] at my building.~reason for not owning 对应购买意愿被缺少条件限制。
An [improvement] for [passengers changing buses] would be ___ .~For [people making a connection], a covered waiting area would [make things easier].~换乘乘客对应 making a connection，改善对应 make things easier。`,
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
locators:`Why does the speaker [apologise] about the [meeting room]?~[Sorry] that the [chairs leave very little space between neighbours]; we found enough seats for everybody.~道歉原因是拥挤，不是座位不足；meeting room 对应 chairs 的具体问题。
What is said about [age] and [suitability]?~[Being older or younger] matters less than [whether you can be depended on].~age 用年龄比较改写；suitability 的判断依据是可靠性。
How is [training] organised [after joining]?~The [learning sessions carry on] [throughout your time with us], not just during induction.~training 对应 learning sessions；after joining 对应 throughout。
Which TWO considerations concern [time] and [commitment]?~Think about [the hours you can genuinely spare] and [whether you will keep helping over several months].~用可腾出的小时和持续帮助分别定位两项。
Which TWO qualities support [regular attendance] at [weekend sessions]?~For [Saturday helpers], we value [keeping agreed appointments] and telling us early when plans change.~固定到场对应守约；weekend 对应 Saturday。
What advantage is useful for [raising funds] through [new events]?~For [collecting donations], we need people who [can dream up something different].~funds 对应 donations，new events 对应新点子。
What helps with [outdoor collection] over [long routes]?~People [clearing litter] benefit from [being able to keep walking for hours].~户外收集与捡垃圾对应；长路线要求由持续步行表达。
What knowledge helps with the [children's] [healthy-living group]?~For the [youngsters' sessions], understanding [what makes a balanced meal] is more useful than having children yourself.~健康生活中的饮食知识才是所需优势，排除育儿身份。
What experience helps with the [storytelling group's] [performances]?~At [the children's story sessions], anyone who [has appeared in a play] could help with rehearsals.~演出经验通过 appeared in a play 改写。
What ability matters when [learning] the [emergency routine]?~When you [first practise the safety procedure], you must [retain each step accurately].~learning 对应 first practise；retain steps 表达记忆要求。`,
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
locators:`What [prevented] the student from [following the opening demonstration]?~A [pillar blocked her view] when the speaker [showed the first design].~区分看不见与听不清；opening 对应 first。
What [surprised both students] about [career options]?~[Neither of us expected] [such a range of jobs] outside clothing design.~双方惊讶由 neither of us 表达，选项范围对应 range。
What is their [shared criticism] of the [speaker's comments]?~[We both felt] that [the remarks about beginners were unnecessarily dismissive].~先定位一致态度，再确定批评的是对初学者的评价。
Which aspect of the [school's advice] do they [question]?~They liked the timing of [the careers sessions], but [wanted advisers with current industry experience].~区分建议的时间与提供者背景；question 对应 wanted 的缺憾。
What do the students [disagree about] when [choosing a specialism]?~[I want to decide immediately], but you would [wait until we have tried several departments].~分歧落在选择时间，不是专业类别。
How does [Noah] regard [unpaid placements]?~[He expects to work without a salary at first], although his partner [considers that unfair].~人物归属优先；不能把搭档较强烈的态度算给 Noah。
Which TWO errors concern [first-job expectations] and [professional conduct]?~She [assumed promotion would be immediate] and [made her irritation obvious to colleagues].~分别定位期望与外显行为，不是泛泛职业知识。
Which TWO lessons relate to [clients] and [feedback]?~[Listening before defending a proposal] helped her, as did [asking customers which changes mattered most].~回应反馈与了解客户需求分别对应两项。
Which TWO kinds of [shop-floor information] could improve [future designs]?~Reports of [features customers could not find] and [details repeatedly criticised after purchase] would shape the next collection.~从购物反馈定位设计需求，不是仅识别 retail。
Which TWO benefits do [both speakers accept] about [short placements]?~[We agree] that a brief placement [reveals workplace routines] and helps you test assumptions about the job.~先定位双方同意，再关注短期实习的收益。`,
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
locators:`An [increase beyond available resources] caused greater [competition for] ___ .~The reserve [could no longer support so many animals], which [intensified the struggle for] grazing space.~过量用不能维持这么多动物表达，competition 对应 struggle。
The [selected animals] had to remain with their [social] ___ .~[Those chosen for transfer] stayed with [companions they normally lived with].~selected 对应 chosen；社会群体由日常共同生活表达。
A [preliminary check] established whether the [destination] had enough ___ .~[Before approval], staff assessed [the receiving reserve's] year-round water supply.~时间与地点同时定位；目的地不能和原保护区混淆。
The [handling operation] was shortened to [reduce] ___ .~Keeping the [period of restraint brief] helped [limit] unnecessary disturbance.~短操作时长与减少干扰构成目的关系。
The [animal's position] was adjusted to [protect] its ___ .~Workers [changed how the animal was lying] [to avoid pressure] on a vulnerable area.~体位调整与避免压力对应，不能只找器官词。
During [recovery], the team [continuously checked] ___ .~[While the medicine wore off], a specialist [kept watching] changes in the animal's response.~recovery 对应药效消退阶段；continually 对应 kept watching。
The [transport straps] were checked [before] ___ .~[Only after] [inspecting the securing equipment] did staff begin lifting.~注意 only after 的倒装，检查先于吊装。
The [group's movements] were followed using [a device attached to] ___ .~A collar fitted to a familiar leader let staff [locate the herd] [after release].~装置与被追踪群体对应，区分装置佩戴者和追踪范围。
One [benefit for local people] was an [increase in] ___ .~The project [created] [new ways for nearby residents] [to earn a living].~社区效益通过居民获得生计表达。
The [long-term assessment] compared survival with [changes in] ___ .~[Several seasons later], researchers looked beyond survival to [the condition of the receiving habitat].~长期对应多个季节以后；评估不仅是成活率。`,
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
locators:`The [vacancy] at the [riverside branch] is for a ___ .~At [the restaurant beside the river], we are [looking for] a kitchen assistant.~地点与职位需求共同定位。
The [early shift] begins at ___ on [weekdays].~From [Monday to Friday], the [morning team] starts at seven forty.~weekdays 对应 Monday to Friday，early shift 对应 morning team。
[Previous experience] in [food preparation] is ___ .~[Having worked in a kitchen] would help, but [we also consider beginners].~经验有用不代表必需，由接受新手排除强要求。
The [reference] must come from a [former] ___ .~Ask [someone who supervised you previously] to [comment on your work].~推荐来源通过监督者描述表达。
The [employer provides] ___ for the [first shift].~For [your initial working day], [we supply] a shirt, but you bring suitable shoes.~主语和提供范围共同定位，不把自备用品算为提供。
The [basic pay] does not include ___ received from [customers].~Your [hourly wage] is fixed; [guests' extra payments] are shared afterwards.~基本工资与额外收入分开。
During the [initial assessment period], [progress is reviewed] after ___ .~[While you are on probation], the manager [checks how you are getting on] at the end of each fortnight.~试用期与评估动作对应。
The [latest finish] may affect the applicant's ___ [home].~If you leave at [closing time], check that you can still [get back] using public transport.~最晚下班与返程交通对应。
An [interview] is arranged [after] the ___ is checked.~[Once we have reviewed your form], we will [invite you to meet the manager].~面谈用会见经理改写，先后关系由 once 表达。
The [central branch] requires [weekend availability] on ___ .~For [the town-centre restaurant], you must [be free to work] on Sunday mornings.~分店和可工作时间同时定位。`,
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
locators:`Which TWO factors [determined] the [choice of site]?~[The decision about where to build] depended on [short journeys to jobs] and access to everyday services.~选址决定与真正决定因素对应，不是所有便利条件。
Which TWO [facilities] were considered [essential before construction]?~[Before work could begin], we needed [reliable drainage] and a safe link to the existing road.~用施工前提定位必要设施。
Which TWO aspects of the [design] received [positive feedback]?~[Residents welcomed] the [variety of shared outdoor spaces] and the way the buildings fit the hillside.~positive feedback 对应 welcomed，关注设计评价。
Which TWO [improvements] remain [under consideration]?~[We have not decided] whether to [add more covered cycle stands] or extend the pedestrian link.~待考虑对应尚未决定，不能当作已批准。
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
locators:`What [changed] the students' [initial view of the eruption]?~[They had expected a local event], but the records [revealed effects much farther away].~初始预期与阅读后的改变构成定位关系。
Why do they [prefer] the [eyewitness diary]?~The [account written by someone present] gives [day-by-day observations], unlike a later summary.~资料来源与选择理由共同定位。
Which [geographical claim] do they [correct]?~[It was not confined to the coast]; the [inland reports describe the same unusual conditions].~否定更正原范围，并引出内陆证据。
What [limitation] affects the [mortality estimate]?~The [recorded deaths] are [not separated reliably by cause].~数量估计的局限由原因未分类表达。
Which TWO [observations] support [a widespread atmospheric effect]?~Accounts of [similar skies in distant regions] and [changes recorded at the same time] strengthen that interpretation.~两类证据对应范围与同时性。
Which TWO [explanations] remain [unconfirmed]?~[We cannot yet establish] whether [changes in trade] or the loss of local crops explain the shortage.~限定证据强度，未证实不代表已否定。
What [effect] is linked to the [northern settlement]?~In [the community farther north], records describe [boats unable to leave the harbour].~地区与具体影响匹配，不能套用其他地区结果。
What [consequence] is reported for [farming communities]?~[In the agricultural districts], the main account concerns [a delay in the growing season].~地点改写为农业地区，影响是季节延迟。
What [problem] arose in the [southern towns]?~[Farther south], officials reported [unexpected demand for public assistance].~方向区分地区，problem 用求助需求表达。
What [interpretation] do the students [both accept]?~[We agree] that the evidence [supports several interacting pressures], rather than a single universal cause.~双方一致与多因素解释共同定位。`,
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
locators:`Early [men's garments] had pockets [sewn into] the ___ .~In [male clothing of that period], storage spaces were [stitched inside an inner layer].~性别与时期共同限定，sewn 对应 stitched。
For [professional wearers], [larger pockets] held ___ .~[People carrying out specialised work] needed [room for the tools of their occupation].~职业穿着者对应 specialised work，用途是职业工具。
[Women's] [separate pockets] were secured with ___ .~[The detachable versions] [worn by women] were fastened around the waist.~separate 对应 detachable，关注女性服装中的独立配件。
An [opening in the outer garment] allowed [access to] ___ .~[A gap in the skirt] let the wearer [reach the pouch beneath it].~外层开口与内层储物区的空间关系。
The [change in silhouette] reduced the [space for] ___ .~As dresses became [narrower in outline], [bulky containers were harder to conceal].~轮廓变窄与难藏大物构成因果。
[Decorative pockets] differed from [practical ones] in ___ .~[Ornamental examples] emphasised appearance, while [working versions] favoured capacity.~装饰与功能款的对照，而非只识别 pocket。
Some [valuable items] were kept in [hidden] ___ .~[Objects worth protecting] were placed in [compartments out of sight].~valuable 对应 worth protecting，hidden 对应 out of sight。
The [new accessory] could be carried [outside] the ___ .~A [separate bag] allowed belongings to remain [visible beside the outfit].~外置配件与内藏结构对照。
Changes in [women's work] created [demand for] ___ .~When [more women performed practical tasks], they [needed easier storage] while moving.~职业活动变化与储物需求的关系。
The [lecturer's final point] concerns [function rather than] ___ .~[To conclude], useful storage should not be judged [by appearance alone].~总结立场与功能、外观的对比。`,
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
locators:`The [street name] in the [home address] is ___ .~For [where you live], [the road is called] Birch, spelt B-I-R-C-H.~地址类别与拼写信息共同定位。
The applicant [heard about the club] through a ___ [at work].~A [colleague] [first told me about the group], not the notice in the shop.~消息来源明确排除店内告示。
The [main reason for joining] is to ___ [through feedback].~[What I hope to gain] is [a better understanding of my mistakes] from other members' comments.~加入目的由希望获得什么表达。
The [annual membership] does not include [the cost of] ___ .~[Your yearly fee] covers meetings, but [you pay separately for] coach outings.~会费范围与另付项目分离。
For the [architecture competition], the [scene must contain] ___ .~In [the buildings round], [we need to see] part of a doorway, not just a distant skyline.~比赛名称与必须元素对应。
Feedback on the [indoor picture] concerned its ___ [rather than colour].~The [room photograph] had pleasing tones, but [the arrangement of objects was unbalanced].~正面色彩评价不是缺点；缺点在 but 后。
The [landscape entry] needed [more visible] ___ .~In [your countryside image], the foreground [did not show enough detail].~前景细节不足用否定表达。
The judge criticised the [night photograph's] ___ [level].~The [after-dark shot] was sharp, but [too little light reached the sensor].~夜景与曝光量对应，排除清晰度。
The [submission deadline] refers to [receipt of] ___ .~[We must have your file] by the [closing date], not just a note saying it has been sent.~截止要求是收到而非发出。
The [next competition's title] will be announced at the ___ [meeting].~At [our following gathering], we will [reveal the name of the new round].~next 对应 following，标题发布对应 reveal name。`,
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
locators:`Which TWO [warnings] concern [collecting specimens]?~[Do not take unidentified examples home], and [avoid areas where access has been restricted].~两项禁令由 do not 与 avoid 表达。
Which TWO [assumptions] about [appearance] are rejected?~[Colour alone is unreliable], and [an attractive shape does not establish safety].~否定的是推断方法，不是某种具体颜色。
Which TWO [rules] concern [group conduct]?~[Stay within sight of the leader] and [leave unfamiliar specimens where they are].~活动行为与鉴别食用两类信息分开。
Which TWO [conditions] affect [safe observation]?~The walk depends on [adequate daylight] and [permission to enter the woodland].~条件用日照与入林许可表达。
What [support] is recommended for [novices]?~[People new to the subject] should [learn alongside an experienced group].~novices 对应新手，support 对应共同观察。
Why is [collecting] restricted in [this reserve]?~[Removing specimens] is limited here [to protect material needed for future growth].~采集限制与生态目的对应。
What [change] has affected [local habitats]?~[The places where these organisms grow] have [become fragmented by new building work].~habitat 间接表达为生长地点，变化为栖息地分割。
What does the guide say about [information from an app] and [certainty]?~[A digital suggestion] is [not a final identification], even when the photograph looks convincing.~数字建议不等于最终辨识。
What [storage advice] concerns [collected research samples]?~[Labelled study material] must [remain separate from food] until the specialist checks it.~科研样本与食物隔离，避免误当食用建议。
What should a learner do [when uncertain] about a [specimen]?~If you [cannot establish what the example is], [leave it undisturbed] and ask the leader.~不确定时采取的行为，而不是猜测结果。`,
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
locators:`Which TWO attitudes do the students express about [earlier workers] who [opposed machinery]?~[They understand the fear of lost income], but question [whether the resistance could stop the change].~态度包含理解动机与质疑效果。
Which TWO [claims about the past] do [both students question]?~[We doubt] that [every displaced worker found a better job], or that change happened equally quickly everywhere.~共同怀疑的是历史概括的范围。
Which TWO [predictions] about [working time] are uncertain?~The students [are not convinced] that technology will [shorten every working week] or make retirement uniformly later.~怀疑范围不等于否定所有技术变化。
Which TWO [benefits] depend on [employers' decisions]?~[Better training] and [a fairer sharing of gains] require choices about how the system is introduced.~收益依赖实施方式而非技术自动带来。
What is said about [bookkeeping roles] and [routine tasks]?~[Processing standard entries] may be automated, while [advising on unusual cases] still needs judgement.~同职业内不同任务的对比。
What is said about [personal services] and [customer demand]?~For [hands-on individual care], [people's expectations are increasing], not disappearing.~行业类型通过具体服务表达。
What comment concerns [office support work] and [staff numbers]?~In [administrative teams], the total workforce [has already become smaller].~已经发生的人数变化，不能当作未来预测。
What is said about [farming] and [output per worker]?~In [agriculture], fewer people can [produce more in the same time].~区分从业人数与生产效率。
What is predicted for [care-related occupations] and [future need]?~[An ageing population] is expected to [increase demand for personal assistance].~职业需求的间接因果表达。
What do the speakers say about [bank services] and [changing duties]?~[Branch employees] now spend less time on routine processing and [more on complex enquiries].~岗位职责变化不是职业整体消失。`,
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
locators:`The [proposed management system] resembles ___ used in [aviation].~[The planned orbital service] is compared with [the coordination of aircraft movements].~比喻对应运行管理，不是航天器外形。
The [current system] lacks [agreed] ___ .~[At present], operators do not all [follow the same reporting rules].~现状由 at present 定位，缺少的是共同规范。
The [fall in launch costs] has led to [more] ___ .~As [sending equipment up became cheaper], [more organisations placed objects in orbit].~费用下降与参与者数量上升的因果。
Information useful for [identification] is not always ___ [by operators].~[Companies controlling the satellites] may [choose not to disclose identifying details].~主体对应运营商，否定信息公开。
[Very small fragments] are difficult to ___ using [existing sensors].~[Current observing equipment] struggles to [pick out tiny pieces].~设备与识别能力对应。
Some [commercial data] is withheld to protect ___ [advantages].~[Businesses keep certain details private] because competitors could [gain useful knowledge].~不共享的商业原因，不是没有数据。
An [object's changing path] requires repeated [updates to] ___ .~To [revise a predicted trajectory], observers need [fresh measurements rather than one old position].~轨迹变化要求更新观测。
To [avoid a collision], separate operators must [agree on] ___ .~[Preventing an impact] requires [coordinated changes of course].~目的对应避碰，动作对应协同机动。
The [end-of-service plan] should explain how equipment is ___ [safely].~An operator needs a procedure for [retiring an inactive satellite] [without creating new hazards].~退役与安全处理的条件。
[International rules] require a way to check ___ [in practice].~[Shared standards across countries] need [evidence that operators actually follow them].~规则制定与实际遵守分开。`,
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
locators:`The [agency's current vacancy] is for a ___ [assistant].~[The post we are advertising now] is [an assistant supporting the bookings team].~当前招聘岗位与具体职责关联，不是中介员工本人的职位。
The [workplace] is part of a ___ [complex].~[You would be based] in the offices at [the arts complex], not at our agency.~区分工作地点和中介地址。
The [street] in the [workplace address] is ___ .~For [the office location], the [road name] is Hazel, H-A-Z-E-L.~地址归属与拼写同时定位。
One [daily duty] involves [changing existing] ___ .~[Each morning], you [rearrange reservations] when customers' plans change.~职责动作不是单纯创建，还包括重新安排。
The employee must [keep] the internal ___ [up to date].~Part of the job is [maintaining] [accurate current records] on the shared system.~更新职责通过 current records 表达。
The [essential qualification] is ___ rather than [experience alone].~[We cannot consider an application without] [the stated certificate], even from experienced candidates.~必要条件由 without 否定范围表达。
A [suitable manner] should be calm and ___ [with callers].~When [speaking to visitors], you need to [remain patient under pressure].~人物表现与服务对象共同定位。
The [initial contract] lasts ___ with [no promise of extension].~[The first appointment is short-term]; [further work depends on later demand].~当前合同与后续可能分开。
The [normal working day] ends at ___ [excluding overtime].~For [your regular hours], the [finish is four twenty]; extra work needs separate agreement.~基本工时与加班分开。
The [onsite facility] available to [staff] is ___ .~[Employees] can use [a secure cycle store at the building].~staff 对应 employees，onsite 对应 at the building。`,
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
locators:`What was the [building's] [original purpose]?~[Before it housed the collection], this [former mill] processed grain.~先前用途与现展馆用途区分。
How does the [university] use the [upper rooms] now?~[Today], the rooms [upstairs provide space for staff administration].~机构用途与当前时间限定。
What is said about [admission] to [special displays]?~[Your entrance payment] [also covers temporary exhibitions], although some workshops cost extra.~收费范围区分展览与活动。
What should [visitors] leave in the [storage area]?~For [people entering the galleries], please [deposit bulky belongings in the cloakroom].~寄存对象由 bulky belongings 表达。
What applies to the [orchard display] [this month]?~In [the fruit-growing section], [several objects have just been added].~区域与新增状态对应。
What applies to the [traditional kitchen] [today]?~[The old cooking room] [cannot be entered while repairs are underway].~临时关闭而非永久停展。
What can [school groups] do in the [tool gallery]?~In [the implements room], [visiting classes can complete a short challenge sheet].~活动对象和区域共同限定。
What is required in the [animal area] for [children]?~At [the livestock enclosure], [adults must remain with young visitors].~成人陪伴表达监管要求。
What is available at the [weaving display] [this afternoon]?~In [the textile section], [a specialist will answer questions] after lunch.~区域、时间、专家在场三者对应。
What rule applies to [movement] in the [wagon room]?~In [the vehicle hall], [follow the arrows without doubling back].~路线规则由单向行动表达，不是地图位置题。`,
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
locators:`Which TWO [learning skills] are evident in the [group activity]?~The pupils [checked instructions together] and [adjusted a fold after spotting a mismatch].~从行为推断合作与纠错，不只找技能名称。
Which TWO [benefits] arise from [explaining a fold]?~[Describing the action to a partner] helps children [organise the sequence] and notice missing information.~解释动作与步骤理解对应。
What is said about [Eli's] [response to difficulty]?~[He tried the difficult corner again] [without asking the adult to do it].~人物与独立坚持行为对应。
What is said about [Rosa] when [the model was finished]?~[She held up her result] and [smiled before showing the group].~从可观察行为识别满意，不凭成品速度推断。
What is said about [Theo's] [need for help]?~[He repeatedly looked towards the teacher] and [asked which fold should come next].~求助表现，不是老师代做。
What is said about [Mina's] [attitude during the task]?~[Her shoulders relaxed] and [she stopped fidgeting as she folded].~通过身体变化定位平静效果。
What is said about [Jude's] [understanding of the sequence]?~[He copied a later fold first] and then [looked puzzled when the edges did not meet].~顺序错误与困惑行为共同定位。
What should the [teacher check] [before the lesson]?~[Try the complete model yourself] [before introducing it to the class].~备课要完整试做，不是只看图片。
How should the [task] be [adapted for different learners]?~[Change the amount of guidance] rather than [giving everyone the same level of support].~按需要调整帮助量，不是统一简化。
Why might [paper folding] help [mathematics learning]?~[Turning a flat sheet into a model] gives pupils [a physical way to explore relationships between shapes].~活动到学科用途的间接表达。`,
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
locators:`The [novel's later versions] include an ___ for [the stage].~[The story was reworked] [to be performed before an audience].~改编媒介通过演出用途表达。
The writer's [public speeches] addressed issues such as ___ and [education].~When [speaking openly about society], she discussed [access to learning] and unfair working conditions.~公共议题与学习机会的改写。
The [reason for leaving home] was disagreement with the ___ [in power].~She [could not safely remain] after [criticising the governing authorities].~不是普通旅行，离开与政治冲突构成因果。
The [house purchase] was financed by [income from] ___ .~[Earnings from a collected edition] [enabled her to acquire the residence].~收入来源与购置资金对应。
The [ground-floor display] includes ___ [collected over time].~On [the lowest level], visitors see [objects brought together during several periods].~楼层限定与收藏过程对应。
Old [wooden objects] were transformed into ___ for [the walls].~[Previously used timber pieces] were [reshaped as decorative panels].~材料旧用途与新装饰用途分开。
The [first-floor rooms] show an influence from ___ [design].~The [rooms one level up] use [motifs borrowed from another artistic tradition].~楼层与风格来源共同定位。
The [writing room] was chosen partly for its ___ [outlook].~At [the top-floor workspace], [the view across open fields] offered a quiet setting.~功能与视野关系，不是整幢房屋的全部用途。
[Guests at the house] included people in ___ as well as [fellow writers].~[Visitors to the residence] included [colleagues and families needing practical help].~客人两类并列，不能只保留作家。
The [later transfer of ownership] was arranged by the writer's ___ [after her death].~[Following her death], [a family representative gave the property] to a public institution.~时间、产权动作与经办人对应。`,
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
