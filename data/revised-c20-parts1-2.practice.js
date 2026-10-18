(() => {
const P=RRParagraph,R=(t,p,e)=>RRReviseTopic(`c20-t${t}-p${p}`,e);
R(1,1,{
coverage:'餐厅逐项比较；推荐理由与地理便利分开；代词指代菜单类别；午晚餐价格；每人计价、订金与可选额外项目。',
quizContexts:`The adviser would ___ the small bistro for a relaxed reunion.
Soft lighting and quiet conversation create a calm ___.
The restaurant's ___ is the dish most visitors come to try.
The menu has a broad ___ of smaller plates.
A ___ must be paid before the group reservation is held.
The ___ offers a fixed number of courses for one price.
The bill is calculated at a stated amount ___.
The generous ___ was large enough to share.`,
options:`正式保证每人都会满意|替顾客直接完成预订|只说明餐厅的地理位置
餐厅服务员的个人性格|菜品摆盘的颜色组合|餐厅能容纳的总人数
菜单上价格最高的菜|每位顾客必须购买的套餐|当天剩余的最后一道菜
一份菜所包含的食材|当天实际售出的份数|用餐者已经选好的菜
餐后按表现给的小费|已包含所有消费的全款|临时预订后必定退回的罚金
按食用量随意付费的自助餐|每道菜都单独计价的菜单|只提供给团体的整桌菜
每张餐桌|每个家庭|每个套餐中的一道菜
整桌所有菜品的总量|菜谱规定的全部原料|价格中包含的菜品种类`,
multi:[['imported','brought from suppliers in another country'],['unavailable','not obtainable at all rather than restricted in range']],
grammar:[['Lunch is cheaper, ___ the evening menu includes more courses.（whereas / unless）','whereas','区分两时段的价格和包含项目。','The terrace is quiet at noon, ___ the dining room is busier after work.'],['The deposit is refundable ___ notice is given in time.（provided that / even though）','provided that','退款受提前通知条件限制。','A reserved table can be changed ___ the restaurant has enough space.']],
words:[['a good choice of','有较多种类可选'],['within a short distance','在不远处']],
locators:`The [principal|1] reason for recommending the {station café} is its ___ .~It is convenient, but I [mainly|1] recommend it for the {relaxed service}.~principal 对应 mainly，方便只是附带信息。
At the {smaller restaurant}, guests [awaiting|1] {a table} can use the ___ .~{The courtyard} shelters people [waiting for|1] {their table}, even if it rains.~awaiting 对应 waiting for，而非已经入座。
The [sharing plates|1] at Willow Kitchen mainly feature ___ .~The [dishes for several diners|1] mostly contain seasonal vegetables {rather than} meat.~sharing plates 对应 dishes for several diners。
{The choice} of [dairy-free|1] dishes is ___ .~Food [without milk products|1] is available, but the {evening menu} has only a few options.~dairy-free 对应 without milk products，不涉及整份菜单数量。
The [recently opened|1] {riverside restaurant} is called ___ .~The [new|1] place by {the water} is Brindle, spelt B-R-I-N-D-L-E.~recently opened 对应 new，店名为待听信息。
The dining area is [above|1] the ___ .~Guests eat upstairs, [directly over|1] the bookshop, not in the gallery next door.~above 对应 directly over，旁边画廊为干扰。
The [positive reviews|1] of the {new café} came from ___, although the {local newspaper} has not [assessed|2] {the restaurant} since it opened.~The newspaper has yet to [review|2] it, but {local food bloggers} have already posted [favourable comments|1]; their praise concerns {the service} as much as {the food}, {rather than} {the location} alone.~positive reviews 对应 favourable comments；assessed 对应 review，肯定评价与尚未评价的来源不同。
Ingredients [sourced locally|1] travel less than ___ to {the kitchen}, {rather than} arriving from a [distant|2] supplier offering a wider range of seasonal produce.~The wider selection comes from much [farther away|2], but produce [bought nearby|1] reaches {the kitchen} over {a short route}; the owner prefers {that option} even though {some ingredients} are then unavailable.~sourced locally 对应 bought nearby；distant 对应 farther away，供应范围与运输距离区分。
The lunch price on [weekdays|1] is £___ [per diner|2], while the {evening menu} includes more courses and is charged at a higher rate.~Supper costs more because it includes {another course}; at midday [from Monday to Friday|1], {the price} is twenty-six pounds [a person|2], with the {same amount} charged for each member of {the group}.~weekdays 对应 Monday to Friday；per diner 对应 a person，晚餐价格是干扰。
The [portion|1] at {the second restaurant} is [expected|2] to be ___, although {the adviser} has read the menu {rather than} eaten there personally.~I have only read the menu for the other place, so I [anticipate|2] a generous [serving|1]; that is an impression from the description, not something I can confirm from having tried {the food}.~portion 对应 serving；expected 对应 anticipate，预测不等于亲身确认。`,
paragraphs:[P('Choosing where to eat',`A caller wants a place for a small reunion. One café is [handy for=>conveniently located near=>位置便利，不等于最佳推荐理由] the station, but the adviser [speaks highly of=>recommends enthusiastically=>明确的推荐态度] its quiet service. Another place has [plenty to choose from=>a wide range of options=>种类多，不是份量大]. The caller asks about [catering for=>meeting the needs of=>满足某类用餐需要] guests with different preferences. A small menu may still [fit the bill=>meet the requirements=>符合所需，不是支付账单]. The final choice [comes down to=>depends ultimately on=>最终决定因素] the group's priorities.`,['a large amount per plate','pay the invoice','guarantee a perfect experience']),P('Reading the price carefully',`A written offer quotes a price [a person=>per diner=>按人数，不是按桌]. Soft drinks are [included in the charge=>covered by the stated price=>属于所列价格范围]. Tea is [an optional extra=>an additional item available at further cost=>可选另付项目]. A small payment will [hold the booking=>secure the reservation=>保留预订，不是付清餐费]. Changes must be requested [ahead of time=>before the planned visit=>提前提出]. The offer is [subject to conditions=>dependent on stated requirements=>有条件适用，不是自动保证].`,['the complete bill','compulsory for every diner','after the meal'])],
signals:[{title:'Reasons for a recommendation',focus:'真正的推荐理由、菜单范围、推测与确认。',context:[3,'The caller has already checked that everyone can reach either place without needing to drive.'],text:`I have two cafés in mind for your gathering, and both are reasonably close to the station.
They have rather different styles, so it depends on the experience you want.
The first is worth considering mainly for its unhurried service, rather than simply because it is easy to reach.~mainly 与 rather than 明确推荐依据，排除地理便利。
The second offers several small plates that groups can share.
Its late menu is restricted, though, so the wide choice advertised at lunchtime does not apply near closing.~though 修正把午间选择范围套到晚间的推断。
I have only looked at the second place's menu rather than eaten there myself.
My comment about the size of its servings is therefore an expectation, not something I can confirm from experience.~therefore 与 not 区分推测和亲身确认。
You could ask for a sample menu before deciding which option suits everyone.`},{title:'One price, several conditions',focus:'计价单位、包含范围、预订变更条件。',context:[1,'The restaurant has sent a short written offer so that the group can check the details together.'],text:`The group offer appears straightforward when you first look at the headline amount.
It is worth reading the smaller details before you agree to it.
The amount is charged for every diner, not once for the whole table.~明确 per head 的计价对象，不能当整桌总价。
A soft drink is supplied with the meal and the choice is listed underneath.
Hot drinks are outside the package, so anyone ordering one will pay separately.~outside 与 separately 限定套餐包含范围。
The organiser also asks for a small payment to keep the table available.
You may change the numbers without losing that payment only if you give the required advance notice.~only if 规定订金处理的条件，不是无条件退还。
Please keep the confirmation message in case the final number changes.`}]
});
R(1,2,{
coverage:'艺术形式的比较；痕迹与用途的证据；加入动机和个人偏好分开；初学背景；设备功能、替代方式与工具提供范围。',
quizContexts:`The fired vessel is ___ enough to survive ordinary storage.
A pressed ___ remains visible on the vessel's surface.
The researcher asks what ___ the container originally served.
The maker values the ___ needed to shape the material carefully.
The course welcomes a ___ who has not worked with clay before.
Participants should ___ loose accessories before the practical session.
The ___ is the heated chamber used to fire the clay.
The ___ changes a dried piece into a permanently harder object.`,
options:`在地下永不损坏的|完全不会断裂的|受到损坏后必定能复原的
物件整体的外部形状|陶器来自何地的证明|画在展板上的示意图
物件目前的市场价值|物件制作材料的来源|物件出土时的保存状态
握持工具所需的体力|把流程背下来的记忆|把作品展示给人的信心
仅缺少这间工坊经验的专家|负责培训新学员的助教|已经完成多个作品的人
临时遮住而不取下|只确认物品是否牢固|把物件固定在原处
只供陶器自然晾干的架子|用来储存未烧材料的柜子|给成品表面上色的工具
把湿材料放着自然风干|用手把材料塑造成形|在完成品上涂装饰颜色`,
multi:[['purchased','bought by the participant rather than supplied for use'],['beneficial','helpful without being necessary']],
grammar:[['The marks suggest a use, ___ they do not establish it beyond doubt.（but / so）','but','有证据支持不等于无疑证明。','The surface supports one interpretation, ___ further evidence is needed.'],['The materials are provided; learners ___ buy their own.（need not / must not）','need not','无需购买与禁止购买不同。','Visitors ___ bring specialist tools because the workshop lends them.']],
locators:`What distinguishes the [fired|1] sample from untreated clay?~[After heating|1], {this piece} keeps {its shape} when damp, unlike the {untreated material}.~fired 在陶艺语境中对应 after heating。
What evidence suggests {the vessel's} [function|1]?~Wear around {the opening} offers a clue to its [use|1], {rather than} its place of manufacture.~function 与 use，不是产地证据。
Why do learners want to make something [durable|1]?~Several hope {their work} will [last|1] long enough to be kept by later family members.~durable 对应 last，动机是长期保存。
What does {the tutor} [value|1] most about {the activity}?~For me, the part I [appreciate|1] most is forgetting {ordinary worries} while making something.~value 与 appreciate，个人偏好不等于所有人的收益。
What experience is expected of [participants|1]?~Most [people taking part|1] will be trying this kind of making for {the first time}.~participants 对应 people taking part，不是专家群体。
What should learners do [beforehand|1] with loose {personal items}?~Put them somewhere safe [ahead of|1] the {practical work} with wet material.~beforehand 对应 ahead of 的提前关系。
Which TWO [functions|1] of the heating chamber are [described|2], {rather than} details about where {the equipment} was made or how much it originally cost?~{Its price} and manufacturer are listed elsewhere; the [roles|1] [outlined|2] here are removing remaining moisture and making {the material} permanently firmer, both of which affect the finished piece.~functions 对应 roles；described 对应 outlined，设备来历不是作用。
Which TWO [alternatives|1] are available for [small-scale|2] firing, if learners cannot use {this workshop} after {the course} and do not plan to buy {their own equipment}?~You need not purchase equipment for a [modest amount of|2] work; the guide lists two other [options|1], {a shared community} chamber and an authorised specialist service that accepts learners' pieces.~alternatives 对应 options；small-scale 对应 modest amount of，替代途径不等于购买设备。
Which TWO points distinguish [essential|1] tools from items that can be [borrowed|2], {rather than} assuming {every piece} of equipment must be bought {before joining} {the course}?~You do not have to buy everything: {some basic items} are [indispensable|1], but other tools are [available on loan|2], and {the tutor} will explain which ones you need for {the first project}.~essential 对应 indispensable；borrowed 对应 available on loan，必要不等于必须自购。
Which TWO [restrictions|1] apply to [shared equipment|2], particularly when {another class} will use {the same workshop} immediately after {the current group} has finished {its practical session}?~Because [communal tools|2] are used by {the next class}, there are two [rules|1]: ask {the tutor} before starting, and leave every item ready for {the following group} {rather than} taking it away.~restrictions 对应 rules；shared equipment 对应 communal tools，课前许可与课后归置分开。`,
paragraphs:[P('Different reasons for taking part',`A learner wants to create [something to keep=>an object intended to be retained=>保留的意图，不只是练习后丢弃]. Her friend is [drawn to=>attracted by=>被某特征吸引] the focused work. The tutor warns against [judging by appearance alone=>using looks as the only basis=>不能只凭外观判断]. A surface mark can [offer a clue=>provide an indication=>提供线索而非必然证明]. The maker's intention may remain [open to question=>uncertain=>仍有疑问]. The class explores [how an object was put to use=>the purpose it served=>用途而非材料产地].`,['proof beyond doubt','where its clay originated','certainly incorrect']),P('Making and borrowing',`The tutor asks everyone to [clear the working area=>remove obstacles from the workspace=>整理工作空间]. Loose items are [put away=>stored safely=>收好而非扔掉]. One tool is [indispensable=>essential=>不可缺少]. Other tools are [available on loan=>supplied for temporary use=>借用，不获得所有权]. A finishing session is [left to personal choice=>optional=>可自行决定]. Shared equipment must be [returned in good order=>given back in a usable condition=>归还并保持可用].`,['given away permanently','required of all visitors','replaced with a purchase'])],
signals:[{title:'What the maker values',focus:'比较依据、证据用途、个人观点。',context:[5,'The tutor shows two pieces from the teaching collection while visitors finish looking at the sample table.'],text:`People come to a making workshop with different interests and expectations.
Some are curious about the history, while others simply want to try a new activity.
The comparison here concerns what happens to the material after treatment, not how many people practise the craft.~here 与 not 指明比较维度，排除人数解释。
Surviving objects can also tell researchers something about everyday behaviour.
Marks caused by repeated handling may suggest a use, although they do not necessarily identify where the material came from.~although 区分用途证据与来源证据。
The activity can also offer a break from everyday routines.
What I personally value is the concentration that draws my attention away from ordinary concerns.~personally 锁定讲者自身最看重之处。
Other people may find different benefits, and those are equally valid reasons to take part.`},{title:'What is explained and supplied',focus:'功能与历史分开、借用与购买、非必选活动。',context:[1,'The handout lists equipment and usage arrangements.'],text:`Before we begin, I will explain the equipment and what the workshop supplies.
You can ask for clarification whenever a term is unfamiliar.
The heating chamber's role is to change the material through controlled treatment; its history is not part of today's demonstration.~说明本次解释范围是功能，不是历史。
Some later stages are carried out by the specialist team after visitors have left.
The hand tools on the bench are lent for this session, so there is no need to purchase a matching set now.~lent 与 no need 区分现场借用和购买。
Please keep the shared items available when another person needs them.
The decorative activity afterwards is optional, even though the initial safety demonstration is required.~optional 与 required 区分两个环节的义务。
The tutor will explain how to label any unfinished work before the group leaves.`}]
});
R(2,1,{
coverage:'照护任务与时长；帮助和接管区分；日常困难及原因；费用与报销范围；具体支持不等于自动获批。',
words:[['involve','涉及、需要承担'],['a lack of','缺少'],['cope with','应对'],['on behalf of','代表某人；替某人办理']],
quizContexts:`The family ___ regularly supports a relative at home.
The ___ explores what the household needs before a plan is suggested.
A short period of ___ temporarily releases the usual helper from duties.
The adviser asks about the normal morning ___.
Reduced ___ makes moving between rooms more difficult.
The service offers ___ with specific tasks rather than taking over everything.
The council may ___ an agreed travel expense after payment.
The original ___ provides written proof that the fare was paid.`,
options:`只在机构提供医疗的专业人员|只支付家庭费用的人|偶尔来访而不承担任务的亲友
确认申请成功的最终许可|考察照护者技能的考试|服务结束后的满意度评比
永久替代家庭成员的安排|增加照护者原有任务|只向家属寄送介绍材料
一次临时发生的意外|未来希望改变的生活方式|仅在假期采用的行程
搬迁到另一处住所的能力|对活动产生兴趣的程度|每周外出活动的次数
由别人完全接管所有决定|自动认定符合全部申请条件|只给照护者发一笔固定工资
在费用发生前先付全部款项|无条件免除以后所有支出|只承诺协助填写申请表
尚未付款的费用账单|按估算列出的支出计划|服务申请已通过的通知`,
multi:[['approved','formally accepted rather than merely meeting application conditions'],['fully dependent','needing another person to take over each task']],
grammar:[['She manages some tasks herself, ___ others require support.（while / because）','while','区分能自理和需协助的任务，不概括为全部依赖。','The morning routine is manageable, ___ the evening duties are more demanding.'],['Travel costs can be repaid only ___ they were agreed beforehand.（if / despite）','if','报销有预先认可条件，不包括所有支出。','The arrangement can continue ___ the review confirms the same need.']],
locators:`[Temporary cover|1] gives the usual carer time for ___ .~[Short-term replacement help|1] lets the {regular carer} attend {an evening class}.~temporary cover指有人临时接手照护，让平时照顾家人的人腾出时间，不是永久替换原有安排。
The [assessment|1] asks how long ordinary ___ tasks take.~During the [needs review|1], {the adviser} asks how long ordinary support tasks take.~assessment 对应 needs review，评估内容为照护时间。
One task involves [assisting|1] {the relative} with ___ .~She needs somebody [helping|1] her when getting ready to leave the bedroom.~assisting 与 helping，具体任务另听。
The carer [handles|1] correspondence for her aunt each ___ .~She [deals with|1] {the regular letters} for her aunt each weekend.~handles 对应 deals with；代办对象是姨妈的来信，频率另听。
Poor [alertness|1] follows repeated ___ at night.~After repeated interruptions, she finds it difficult to [stay awake and attentive|1] in {the morning}.~alertness 对应 stay awake and attentive 的状态。
The greatest [strain|1] occurs when moving items through narrow ___ .~The heaviest items create the most [physical effort|1] when passing through {narrow doors}.~strain 对应 physical effort，困难来自搬运条件。
A [practical aid|1] could reduce the [risk|2] of ___, {rather than} relying on the carer to provide physical support {every time} {the relative} moves.~The carer cannot always stand beside her, so an appropriate [support rail|1] could reduce the [chance|2] of {an unsafe movement}, making {the task} easier without removing the need for {an individual assessment}.~practical aid 由 support rail 具体化；risk 对应 chance，辅助设备不等于无需评估。
[Approved|1] {transport costs} require [proof of payment|2] for ___, {rather than} {a list} of all journeys made by any member of {the household} during the week.~Keep the receipt as [evidence of the fare paid|2] for journeys [accepted by the scheme|1]; ordinary {household travel} is not included simply because somebody wrote it on the same {weekly list}.~approved 对应 accepted by scheme；proof of payment 对应 evidence of fare paid，范围限定保留。
Some [vehicle expenses|1] are assessed [separately|2] from ___, although {the adviser} also asks about ordinary household bills when discussing {the family's} {general circumstances}.~{The adviser} needs {a general picture}, but [costs of running the car|1] for accepted duties are considered [apart|2] from {normal household bills}; that does not make every expense in {the home} eligible.~vehicle expenses 对应 costs of running car；separately 对应 apart，评估内容不等于全部可报。
The [arrangements|1] may be [reconsidered|2] if ___ changes, {rather than} requiring {the family} to keep exactly the same {support plan} regardless of new circumstances.~{The plan} is not fixed forever; if the {family's situation} changes, we can [review|2] the [support in place|1] and discuss whether the existing pattern still meets {the needs} identified at {the assessment}.~arrangements 对应 support in place；reconsidered 对应 review，变化可触发重议。`,
paragraphs:[P('Describing the work',`The adviser asks what caring [involves=>requires in practice=>说明实际任务而非只问身份]. A relative can [manage on her own=>act without help=>能独立完成某些任务]. Other tasks [take their toll=>create an accumulating strain=>长期带来负担]. Night duties may [leave little opportunity for rest=>reduce the chance to recover=>休息机会受限]. The carer should [spell out=>explain clearly=>清楚说明困难，不是逐字母拼写] what has become difficult. Help should [fit around=>be compatible with=>兼顾日常生活而非完全替换] the household's routine.`,['take over every decision','have no effect over time','state only a name']),P('A plan with conditions',`A support plan may [free up time=>allow time for other responsibilities=>腾出时间，不等于永久卸责]. Practical equipment can [make a task less demanding=>reduce the effort required=>减轻特定任务负担]. Some costs are [met by the scheme=>paid under the support arrangement=>由计划承担的范围]. Others remain [the household's responsibility=>expenses the family must cover=>仍由家人负担]. Payment requires [evidence of spending=>proof that a cost was incurred=>实际支出凭据]. Changes in need [trigger a fresh review=>lead to another assessment=>条件变化触发评估].`,['an automatic cash award','proof of future estimates only','prevent any later reassessment'])],
signals:[{title:'Understanding the actual duties',focus:'评估的对象、日夜差异、协助范围。',context:[3,'The adviser has a short form but leaves space for the caller to explain duties in her own words.'],text:`The first discussion is intended to understand what support your household needs.
It is not a test of whether you have been doing everything perfectly.
Please describe both the tasks and the time they take, rather than listing only the names of the people involved.~rather than 明确评估所需信息，不只登记人物。
Some parts of the day may still be manageable without assistance.
The difficulty at night may be different, particularly if repeated interruptions leave the usual carer unable to rest.~切换时间段，区分照护任务与对照护者的影响。
The plan can respond to particular tasks without replacing every family arrangement.
Needing help with one demanding activity does not mean the person has lost independence in all areas.~does not 限定由局部需要推断整体依赖的范围。
Those distinctions will help the adviser suggest practical support instead of making assumptions.`},{title:'What support can cover',focus:'支持目的、支出范围、重新评估条件。',context:[1,'We will send confirmation.'],text:`Several forms of support may be considered once the household's needs are understood.
They can be combined in different ways depending on the circumstances.
Temporary cover is intended to give the regular carer time for other responsibilities, not to remove that person's role permanently.~明确暂代支持的目的和期限。
Transport can be another difficulty when regular appointments are involved.
Only costs agreed under the plan can be considered for repayment, so retain evidence of the payments you actually make.~Only 限定报销范围，actually 要求真实支出。
The adviser will explain which ordinary household expenses remain outside the scheme.
If the duties or the person's abilities change, request another assessment rather than assuming the original plan still fits.~If 规定重新评估的触发条件。
The aim is an arrangement that continues to reflect the family's actual needs.`}]
});
R(2,2,{
coverage:'活动名称与志愿者实际职责匹配；并非售票而是引导等排除关系；人员需求比较；最重要能力；培训和上岗日期；下一次活动。',
quizContexts:`The leaflet is ___ intended to make a service better known.
Volunteers ___ between groups so that arrangements are coordinated.
The questionnaire collects ___ about what visitors experienced.
Helpers ___ people to their seats rather than sell them tickets.
The website will ___ the new service to local residents.
The scheme encourages ___ between organisations working in the same area.
Listening and explaining clearly are ___ skills.
A ___ volunteer can adapt when an assigned task changes.`,
options:`服务对象完成申请后的批准|只向职员发送的内部记录|对活动收入进行的财务审计
代表所有人独立作最终决定|只把资料存档而不联系他人|向公众出售指定商品
管理人员制定的最终规则|只记录门票销售数量的数据|未来活动尚未实施的计划
核验门票后安排退款|亲自介绍舞台上的演出者|负责清扫观众离场的通道
正式保证每个人都会使用|通过考核批准某人参加|把已有服务永久转移地点
由一个机构单独掌控所有工作|把互相帮助改成收费交易|按机构规模进行优劣排名
处理电子系统故障方面的|只与正式学历证书有关的|计算活动收入方面的
随时无条件可到场的|只接受固定单一职责的|无需任何培训就能胜任的`,
multi:[['assessment','an evaluation rather than an introductory briefing'],['enthusiasm','interest and eagerness rather than sustained responsibility']],
grammar:[['The briefing takes place first; volunteers start work the ___ week.（following / previous）','following','培训和上岗不是同一时间，following 表示其后。','The orientation is on Friday, and the first shift is the ___ week.'],['Interest helps, but dealing well with people is ___ important.（more / most of）','more','比较重要性，不能把有帮助的兴趣当首要要求。','For this role, communication is ___ important than specialist knowledge.']],
locators:`What is {the volunteer's} role during the [street rounds|1]?~On the [town-centre walk|1], helpers show visitors where to obtain {local advice}.~street rounds 对应 town-centre walk，角色内容另听。
What is {the volunteer's} duty at the [concert|1]?~For the [music session|1], help people find the correct row {rather than} collect money.~concert 对应 music session，指引与收费区分。
What is the main [contribution|1] to {the neighbourhood} network?~The most useful [input|1] is putting groups in contact so they can share resources.~contribution 对应 input，重点为促成联系。
What does helping with the [bulletin|1] involve?~For the [printed update|1], ask organisations to supply {short notices}.~bulletin 对应 printed update，职责是收集内容。
What task is assigned at the [community meal|1]?~During the [shared lunch|1], introduce {the people} giving the short talks.~community meal 对应 shared lunch，活动与职责分开。
What is expected concerning participants' [feedback|1]?~The {online team} collects [comments|1] about events that have already finished.~feedback 对应 comments，对象是已结束活动。
Which event requires the [largest|1] number of [volunteers|2], despite selling fewer tickets than the evening concert and taking place over a {shorter period}?~{Ticket sales} do not show staffing needs: the outdoor reading day needs [more|1] [helpers|2] than any other event, even though the evening concert attracts {a larger} {paying audience} and lasts longer.~largest 对应 more 的最高比较关系；volunteers 对应 helpers，人数需求不能从票数推断。
Which ability has [priority|1] when helping [unfamiliar people|2], {rather than} detailed knowledge of every local organisation that {the volunteer} might be asked about?~You can look up specialist details when necessary; with [strangers|2], the [most important|1] skill is making them feel comfortable enough to explain what they need, so that you can direct them appropriately.~priority 对应 most important；unfamiliar people 对应 strangers，熟悉知识不等于首要能力。
When do [new recruits|1] start their [actual duties|2], {rather than} attending the introductory meeting that explains how {the programme} will be organised during the coming month?~The introduction is {on Tuesday}, but [people joining the team|1] will not begin [working on assigned tasks|2] until the {following week}; {the meeting} itself is preparation {rather than} the {first shift}.~new recruits 对应 people joining team；actual duties 对应 working on assigned tasks，培训与正式工作分开。
What is the [next|1] social gathering for volunteers, {rather than} the [later|2] {indoor event} that is still being planned for the end of {the season}?~{The supper} indoors will take place [further ahead|2], once the venue is confirmed; our [upcoming|1] get-together is {a shared picnic}, and that is the one we are arranging transport for now.~next 对应 upcoming；later 对应 further ahead，安排中的先后活动不同。`,
paragraphs:[P('Finding the right responsibility',`A coordinator asks helpers to [act as a link=>connect people or groups=>联络桥梁，不是代替全部机构]. They should [pass on information=>give details to another person=>传递信息]. At one event they [show people to their places=>guide attendees to seats=>引导入座，不是售票]. Another task is to [gather reactions=>collect people's responses=>收集反馈]. The scheme needs people who [get on with=>relate well to=>此处为与人相处] unfamiliar visitors. Roles are [matched to=>assigned according to=>按能力和需要匹配] what each person can offer.`,['collect payments','manage every group alone','only count tickets']),P('Dates and priorities',`A new helper is [keen to join=>eager to participate=>有热情不等于已获录用]. The coordinator [makes a distinction between=>separates=>区分两个阶段] orientation and work. The first duty is [a week later=>in the following week=>在其后一周]. A team may need [extra hands=>additional helpers=>人数需求，不是单指手工技能]. Knowledge is useful but communication [comes first=>has priority=>优先考虑]. A social event is [coming up=>due to happen soon=>下一次即将举行].`,['already completed','in the previous week','less important'])],
signals:[{title:'An activity is not a duty',focus:'活动与具体工作、排除相近职责、人员需求比较。',context:[1,'The coordinator has printed a separate sheet for each event, naming the contact at the top.'],text:`The programme lists several places where volunteers will be helping over the next month.
The event name alone does not tell you exactly what the job involves.
At the concert, your task is to guide people to their seats, not to sell or check their tickets.~明确活动内职责，排除相近但不同的售票验票任务。
The organisers have already assigned the entrance desk to experienced staff.
For the online project, we need comments about completed events rather than material advertising the next one.~For 切换任务，rather than 区分反馈和宣传。
The outdoor reading day has a different staffing arrangement again.
It needs the largest team despite having fewer ticketed places than the concert.~despite 提醒人员需求与票量不是同一指标。
Please use the duty sheet when deciding which role fits your availability.`},{title:'Joining and starting',focus:'首要能力、培训上岗先后、下一次聚会。',context:[5,'The welcome note includes a contact number in case the confirmed arrangements become difficult.'],text:`We welcome applicants with many interests and different previous experiences.
You do not need to be an expert on the subject of every event.
The priority is being able to deal comfortably with unfamiliar people; personal interest alone is not enough.~priority 指出主要要求，排除以兴趣替代沟通能力。
New helpers first attend an introduction to the organisation and its procedures.
The first working duties begin in the following week, not on the day of that briefing.~following 与 not 规定两个阶段的先后。
The scheme also provides chances to meet people outside a working shift.
The next gathering is a picnic; the indoor supper appears later in the programme.~next 锁定最近活动，排除随后安排。
You can confirm attendance once you have received the details for that gathering.`}]
});
R(3,1,{
coverage:'家具公司逐行比较；每房每月计价；赠送与收费范围；必需自备保险；最低合同期限；最新信息渠道和换货时限。',
quizContexts:`The ___ lets the family use furniture without buying it.
The written ___ sets a price for the listed items and delivery.
The ___ is payable repeatedly rather than only at the start.
The ___ collection has a modern appearance.
The package is ___ of the items explicitly listed beside the price.
Routine ___ keeps the furniture usable during the hire period.
The ___ covers specified risks under a policy.
The ___ defines how long the customer must hire the items.`,
options:`分期购买后取得所有权|只付一次运输费的安排|购买后的免费保修期限
没有确定范围的口头猜价|顾客已经付清费用的凭证|保险事故后的赔偿决定
每件家具仅付一次的总价|租期结束才能确定的罚款|只在货物送达时支付的押金
来自较早历史时期的|专门为了古迹展示设计的|只指刚刚清洁过的
自动覆盖所有可能费用的|只供会员看到但不能购买的|不需要列清服务范围的
仅在物品彻底报废后替换|把旧款式统一换成新款|只负责把家具运回仓库
不附条件承担所有损失|合同结束必须退还的押金|租用价格中的所有日常保养
某件家具具体的外观描述|公司最新价格的宣传页面|用户临时提出的咨询记录`,
multi:[['return','send an item back without necessarily obtaining a replacement'],['previous','belonging to an earlier version rather than current']],
grammar:[['The price is per room ___ month.（per / until）','per','两个计价单位都要保留，不能误听成整套全租期。','The fee is calculated per item ___ month.'],['An exchange is possible ___ it is requested within the stated period.（provided that / even though）','provided that','允许换货有时限条件。','A replacement can be arranged ___ the conditions in the contract are met.']],
locators:`{The price} range at Cedar Hire is £___ per room [monthly|1].~Rooms cost from ninety-two to one hundred and sixty-eight [each month|1].~monthly 对应 each month，价格上下限另听。
The [contemporary|1] collection differs from the ___ older stock.~That supplier's range looks distinctly [modern|1], unlike the {traditional appearance} of {its older stock}.~contemporary 对应 modern，旧库存是干扰。
The {home-office set} includes a [complimentary|1] desk ___ .~With the {home-office set}, {a desk} organiser is supplied [at no extra cost|1].~complimentary 对应 at no extra cost，并非所有订单都有。
The next [supplier|1] is called ___ and Finch.~The second [rental company|1] is Rowan and Finch; Rowan is spelt R-O-W-A-N.~supplier 对应 rental company，名称拼写另听。
The [additional|1] monthly percentage covers ___ .~The [extra|1] charge is for routine cleaning; damage is assessed separately.~additional 与 extra，收费覆盖清洁而非维修。
{The budget} company rents [appliances|1] alongside tables and ___ .~{The budget} company can supply [domestic electrical equipment|1] alongside tables and chairs.~appliances 对应 domestic electrical equipment，不只限于家具。
The [budget|1] option requires customers to arrange their own ___ [before|2] delivery, {rather than} assuming that cover is automatically included in the {furniture rental} price.~The premium package includes cover, but for the [lower-priced|1] option you must have your own insurance in place [prior to|2] {the goods} arriving; it cannot simply be arranged afterwards.~budget 对应 lower-priced；before 对应 prior to，不同套餐保障不同。
The [minimum|1] hire period is ___, whereas the [trial|2] advertised in the leaflet only demonstrates the furniture and does not replace that contractual requirement.~The [demonstration|2] lasts a week, but the {actual agreement} requires [at least|1] nine months; trying the furniture briefly does not allow customers to treat the rental as a weekly arrangement.~minimum 对应 at least；trial 对应 demonstration，演示不改变最低租期。
For the most [up-to-date|1] prices, customers should [consult|2] ___, {rather than} relying on the {printed leaflet} that was distributed before {the latest change} in rates.~{The figures} in the leaflet may be old, so [check|2] the customer portal for [current|1] prices; it is revised whenever rates change, while {printed copies} cannot be updated after distribution.~up-to-date 对应 current；consult 对应 check，纸质旧资料与动态渠道不同。
An item [replacement|1] can be requested within ___ [after receipt|2], {rather than} during the {same period} before {the goods} have actually reached the customer's home.~Before delivery you can amend {the order}, but [following arrival|2] you have four working days to request a [swap|1] of one supplied piece; those are {different stages} with separate arrangements.~replacement 对应 swap；after receipt 对应 following arrival，改订单与收货后换件区分。`,
paragraphs:[P('Comparing the quotations',`The caller checks that the figures are [on the same basis=>using equivalent charging units=>统一单位后才能比较]. One offer [works out at=>amounts to=>计算后得到的金额] a monthly total. Another price is [exclusive of=>not including=>不含某项目] delivery. The package includes a [free-of-charge addition=>complimentary item=>赠品而非必须另购]. The adviser warns against [assuming everything is covered=>treating the package as unlimited=>不能从含部分项目扩大为全包]. A written quote should [set out=>specify clearly=>清楚列明] each service.`,['including without restriction','a compulsory extra purchase','paid once for the full period']),P('Checking terms before agreeing',`The customer must [take out cover=>arrange insurance=>购买风险保障，不是加购家具]. The contract has [a minimum term=>a shortest permitted duration=>最低期限]. An exchange means [swapping one item for another=>receiving a replacement=>换货，不一定是退款]. The request must be [within the permitted window=>before the stated deadline=>在时限内]. Printed figures may [have been superseded=>be replaced by newer information=>旧资料已被更新]. The latest list [reflects current rates=>shows the charges now in force=>当前有效价格].`,['a refund without replacement','after any length of time','valid indefinitely'])],
signals:[{title:'Comparing like with like',focus:'计价单位、额外费用、赠品适用范围。',context:[3,'The adviser has placed the two written offers side by side so that the caller can compare the same room.'],text:`Two furniture suppliers have sent offers for the temporary home office.
Their headline prices look similar at first glance.
The first price is per room for each month, not a single payment covering the whole hire period.~明确房间和月份两个计价单位。
The second offer lists several services underneath the main figure.
Its additional charge pays for routine cleaning; accidental damage is assessed under a different arrangement.~分开清洁费用与损坏处理，不扩大收费范围。
There is also a small item offered with one of the packages.
That complimentary item applies to the office set only, rather than every order the company receives.~only 限定赠品适用套餐。
Check the written list before deciding that the cheaper headline amount is the cheaper overall offer.`},{title:'When the agreement takes effect',focus:'自备保障、最低租期、换货条件。',context:[1,'The caller expects to move again later and wants to understand the obligations before choosing a supplier.'],text:`Before confirming the rental, the adviser asks the caller to read the practical conditions.
Delivery can be arranged after the agreement has been checked.
For the budget option, the customer must arrange the required insurance rather than assume it is supplied automatically.~must 与 rather than 明确保障由谁安排。
A short viewing appointment is available for checking the furniture.
That viewing period does not reduce the minimum length of the rental contract.~否定把试看时间当作最低租期的理解。
The supplier also allows a limited opportunity to request a different item.
An exchange must be requested within the stated period after receipt, not whenever the customer changes preference.~within 与 not 限定换货期限。
The updated customer portal gives the current charges if the printed brochure differs.`}]
});
R(3,2,{
coverage:'项目发起人与资金支持者；意外发现和主动搜寻；证据与推测；已找到与希望找到；后续计划；现有地图题与路线全部保留。',
words:[['opposite','在……对面'],['on your left','在左侧'],['go past','经过并越过'],['keep to','沿着指定路径行走']],
quizContexts:`The neighbourhood ___ began as a proposal to study local history.
The ___ carefully investigates layers below the ground.
The team may ___ an object without yet knowing its age.
The surviving ___ include parts of structures rather than complete buildings.
The ___ supports a possible interpretation but does not prove every detail.
A ___ was a place where people lived and worked.
The preliminary ___ records features across the site before digging.
The team aims to ___ fragile material instead of removing it immediately.`,
options:`事后总结全部发现的报告|只为项目捐资的机构|游客随意提出的一次问题
只在地表拍摄照片的记录|把新建筑按图施工的过程|给已经出土的物件估价
确定物体唯一的制作年代|证明物体原本的全部用途|把物件完整搬进博物馆
专家对未来发现的预测|为游客另造的完整复制品|只指刚刚挖出的单一物件
无需支持的个人印象|已经确认的最终结论|任何可供出售的旧物
仅用于临时放牧的围栏|只有一条道路经过的区域|自然形成的河流汇合处
仅对游客征求满意度|把材料按价值重新分类|正式开始全面挖掘的阶段
把旧物修成全新外观|为加快工作随意移动|只拍完照片后丢弃原物`,
multi:[['bend','a change in direction along one path rather than an intersection'],['beyond','farther past a reference point rather than immediately next to it']],
grammar:[['The finds suggest a settlement, ___ its full extent is uncertain.（but / so）','but','支持聚居地判断不等于确定全部范围。','The structure is visible, ___ its original function remains unresolved.'],['The display will open ___ the recording work is complete.（once / despite）','once','展示开放以记录完成为前提。','Visitors can examine the material ___ the protective treatment has finished.']],
locators:`Who [initiated|1] {the community} investigation?~{A residents'} group [started|1] {the local research} idea; a business supplied funds later.~initiated 对应 started，发起者与资助者不同。
How was the first object [discovered|1]?~A worker [came across|1] a shaped fragment during ordinary drainage work.~discovered 对应 came across，意外发现不是专门搜索。
What evidence suggests former [dwellings|1] on the site?~Repeated traces of hearths point towards [homes|1] here, though the boundaries remain uncertain.~dwellings 对应 homes，证据不足以确定所有边界。
What are {the team} still [seeking|1] among small finds?~We already have tools, but are [looking for|1] fragments of decorated glass.~seeking 对应 looking for，已得工具不是仍寻物。
What was found [across the stream|1] from the excavation?~[On the opposite bank|1], marks suggest a working enclosure {rather than} another dwelling.~across the stream 对应 opposite bank，方位词不等于用途。
What is planned [after|1] {this season's} fieldwork?~[Once|1] the outdoor investigation ends, we intend to prepare a local exhibition.~after 对应 once 的完成后关系。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。
Map retained~Map retained~地图题保留。`,
paragraphs:[P('Who did what?',`A small group [put forward=>proposed=>提出倡议而非直接批准] the investigation. A business later [contributed funds=>provided financial support=>资金支持不是最初发起]. A fragment [came to light=>was discovered=>原本隐藏的物件被发现] during ordinary maintenance. The team [followed up=>investigated further=>继续追查线索] that clue. Repeated traces [pointed towards=>suggested=>提供支持，不是完全证明] occupation. The interpretation remains [provisional=>open to revision=>暂定，可能被新证据修正].`,['the final approval','proved every detail','already rejected']),P('What happens after discovery?',`Objects must be [recorded in place=>documented before being moved=>先记录原位置]. Some should [remain undisturbed=>be left without interference=>避免扰动，不是无人研究]. The team distinguishes [what is known=>established information=>已知事实] from possible explanations. Further work may [fill in the picture=>provide missing information=>补充而非推翻所有认识]. A display is [in preparation=>being planned or organised=>筹备中，不等于已开放]. Its opening [depends on completion of=>requires the finishing of=>以完成前项工作为条件] conservation.`,['already open to everyone','move before any record','abandon the whole interpretation'])],
signals:[{title:'Following an unexpected clue',focus:'发起与资助、发现方式、证据强度。',context:[5,'The field notebook keeps observations on one page and proposed interpretations on the facing page.'],text:`The community investigation has brought together residents, specialists and several local supporters.
Those groups became involved at different stages.
The original proposal came from residents; the business that later paid for equipment did not initiate the project.~分清倡议提出者与后来的资助者。
The first fragment was noticed during ordinary work rather than a planned archaeological search.
Its discovery led to a wider survey, but one object alone could not establish the existence of a settlement.~but 限定单件发现的证据能力。
Repeated traces from different parts of the site gave the team a stronger basis for interpretation.
Even now, the evidence suggests occupation without proving the exact purpose of every structure.~Even now 保留未知范围，区分支持和证明。
The next stage will record those uncertainties as carefully as the objects already identified.`}]
});
R(4,1,{
coverage:'家庭出游逐项建议；估计价格与计价单位；交通工具与出发点；最佳参观日的原因；未来展览、餐饮截止、折扣上限和免费观景。',
quizContexts:`The family needs ___ for the nights they will spend in the town.
The ___ figure is an estimate rather than a confirmed quotation.
A ___ includes a person explaining the sights along the route.
Check the ___ point before waiting for the vehicle.
The museum is preparing an ___ on a particular subject.
Light ___ are available during the break, rather than a full dinner.
The ___ reduces the normal ticket price under the stated conditions.
An ___ secures the visit before the family arrives.`,
options:`白天参加活动的行程安排|往返目的地的全部交通|只供游客临时休息的座位
任何时候都不能调整的|所有家庭统一适用的|已经付款后不再变动的
游客仅凭地图独自进行的参观|只播放宣传片的室内活动|必须在网上完成的虚拟访问
购买门票后领取收据的位置|旅行结束后的集合地点|游客最终返回住处的时间
普通开放时的整幢建筑|只供工作人员查阅的档案|游客参加的户外比赛
包含所有菜品的正式晚宴|自行携带但不能食用的食品|只有购买全餐才能用的折扣
付款以后所有费用的全额退还|票价必须额外加入的服务费|商家向所有游客发的固定现金
到现场后才提出的候补申请|所有活动都不限次进入的通票|离开后才能申请的退款`,
multi:[['elevated','in a high position without necessarily offering a wide view'],['discounted','reduced in price rather than supplied free']],
grammar:[['Save ___ thirty-five percent; not every ticket receives the maximum.（up to / at least）','up to','up to 是最高值而非最低保证。','The offer cuts the ticket price by ___ twenty-three percent.'],['The exhibition opens next month, so it is ___ available this week.（not yet / no longer）','not yet','尚未开放与曾经开放后关闭不同。','The gallery is ___ ready to receive visitors this weekend.']],
words:[['up to','最高可达'],['per night','每晚'],['not yet open','尚未开放']],
locators:`The recommended [accommodation|1] is ___ Guesthouse.~For somewhere [to stay overnight|1], try Linton Guesthouse, spelt L-I-N-T-O-N.~accommodation 对应 stay overnight，名称另听。
The [approximate|1] family-room rate is £___ per night.~Allow [roughly|1] one hundred and eight pounds each night for {the family} in one room.~approximate 对应 roughly，价格为估算。
The guided visit [departs|1] from the ___ .~{The walk} with a local guide [sets off|1] from {the market} arch {rather than} the ticket office.~departs 对应 sets off，出发地不是售票点。
The [hillside|1] garden is reached by ___ .~To visit {the garden} [above the town|1], take the small railway instead of {the bus}.~hillside 对应 above town 所在高处，交通方式另听。
During term time, the museum is [least crowded|1] on ___ .~When schools are teaching, Thursday is usually the [quietest|1] day for visitors.~least crowded 对应 quietest，条件为学期内。
The [forthcoming|1] exhibition concerns ___ .~{The show} [due to open soon|1] examines sound and hearing; permanent displays are unchanged.~forthcoming 对应 due to open soon，常设展为干扰。
The [food stalls|1] are particularly suitable for ___ at [midday|2], {rather than} for the full evening meal {the family} intends to eat near its accommodation.~{The family} can dine near the guesthouse later, but around [lunchtime|2] the [market stands|1] offer freshly prepared snacks, which are easier to fit between {the morning walk} and the afternoon visit.~food stalls 对应 market stands；midday 对应 lunchtime，午间与晚餐建议不同。
{The family} must [order|1] lunch before ___, although the [seating area|2] remains available after the stalls stop accepting requests for food and drinks.~You may use the [tables|2] a little longer, but [place the request for food|1] before one forty-five; staying seated later does not mean the stalls will continue preparing meals for new customers.~order 对应 place request for food；seating area 对应 tables，截止动作不是离座。
The [maximum|1] online saving is ___ percent for some [advance|2] purchases, {rather than} a guaranteed reduction available to every visitor buying a ticket on {the day}.~Some tickets bought [ahead of time|2] receive [as much as|1] thirty-five percent off, but smaller reductions also occur; buying online does not guarantee that {every date} has the largest advertised saving.~maximum 对应 as much as；advance 对应 ahead of time，折扣上限与普遍优惠区分。
The [free|1] viewpoint gives {a view} of ___ [from above|2], {rather than} the street-level view available along {the path} beside {the water} near {the market}.~{The path} stays {at water level}, but the terrace has [no admission charge|1] and lets visitors [look down|2] over the winding waterway; reaching it takes longer than simply walking past {the market}.~free 对应 no admission charge；from above 对应 look down，视角区别于沿河平视。`,
paragraphs:[P('Fitting the visit together',`The adviser recommends somewhere [within easy reach=>convenient to get to=>可方便到达，不是必须很近]. The quoted figure is [a rough guide=>an approximate indication=>大致参考而非锁定价格]. A walking tour [sets off=>begins its journey=>出发动作] near the square. One museum day is [less busy=>quieter in visitor numbers=>人少不等于少开放项目]. A new display is [due to open=>scheduled to become available=>预定未来开放]. The current programme [remains in place=>continues unchanged=>保留原安排].`,['already open','a fixed guaranteed amount','has been cancelled']),P('Timing and savings',`Lunch should be [ordered in good time=>requested before the relevant deadline=>订单动作有截止要求]. The terrace can be used [afterwards=>later than that activity=>随后，不是同时]. The ticket offer gives [a reduction of as much as=>a maximum saving of=>最高优惠幅度]. Some bookings receive [a smaller saving=>less than the advertised maximum=>不是人人达到上限]. An activity described as [free of charge=>requiring no admission payment=>免入场费，不推成所有服务免费] may still require planning. The family should [check availability=>confirm that places remain=>核实余位，而非假设可直接入场].`,['a guaranteed minimum saving','every service included','before ordering'])],
signals:[{title:'Choosing the right day',focus:'估计价格、交通对象、未来展览。',context:[1,'The relatives will stay for several nights, and the adviser is comparing plans that suit a child as well as adults.'],text:`There are several ways to organise the family visit without filling every hour.
I would begin by checking accommodation and choosing one main outing each day.
The amount quoted for the room is only an estimate, and it applies to one night rather than the whole stay.~only an estimate 与 one night 限定价格精确度和计价单位。
A guided walk could introduce the town before the family makes a longer trip.
For the hillside garden, use the small railway; the town bus mentioned earlier serves a different destination.~目的地切换，不能把前一条交通信息带入。
The museum also has several permanent areas that are already open.
The new sound exhibition is scheduled for next month, so it should not be treated as available during this week's visit.~scheduled 与 so 区分未来安排和本次可参加项目。
The reception team can suggest an alternative if that subject is especially important to the children.`},{title:'Deadlines and headline offers',focus:'截止动作、折扣上限、免费活动范围。',context:[5,'The adviser suggests saving the confirmation message so the family can check the conditions again later.'],text:`The market is a convenient place to pause between the morning and afternoon activities.
There are tables near the prepared-food stalls.
Order before the stated closing time; being seated nearby does not keep the kitchen open for a later request.~截止要求针对点单动作，排除提前坐下即可的推断。
The family can then consider whether to book an evening performance.
The advertised saving is a maximum, not a promise that every seat will be reduced by the same percentage.~maximum 与 not 说明最高折扣而非统一保证。
Several outdoor places remain possible when the family does not want another ticketed activity.
The viewpoint has no admission charge, although that does not make transport or refreshments there free.~although 限定免费的范围，不扩大到交通餐饮。
Checking those details in advance will help keep the plan within the family's budget.`}]
});
R(4,2,{
coverage:'儿童活动条件与陪同；新推出、已存在、未来考虑的服务区分；年份匹配中的同年、随后、截至此前和计划对比实际启用。',
quizContexts:`Young visitors must remain ___ by an adult in restricted areas.
The café sells light ___ such as drinks and snacks.
Museum ___ gives permission to enter that section of the venue.
The recorded ___ explains the sights as visitors move around.
The ___ improved an existing stand rather than replacing the whole structure.
The ___ is the largest number the stand can safely hold.
The club will ___ the shop from the gate to the visitor centre.
The ceremony will ___ the new entrance once all checks are finished.`,
options:`只与其他儿童待在一起的|已独自完成登记的|只在进门时有成人出现的
一整场正式宴会|只能自带的饮用水|包含所有餐饮的通票
对所有讲解的完整解释|预订未来参观的申请|退出活动后的退款
参观者对活动写的评价|没有声音的文字价格表|只向工作人员发布的命令
原建筑全部拆除后重建|只改变参观的开放时间|永久停止使用该设施
当天已经售出的门票数|过去累计来访的人数|每小时工作人员的数量
原地翻修而不改变位置|永久关闭且不再提供|暂时降低商品价格
首次提出但尚未批准|只在施工前测量面积|撤去原有设施停止开放`,
multi:[['currently','under the arrangement operating now'],['previously','at an earlier stage rather than afterwards']],
grammar:[['The screen was installed in 1971; by then the roof ___ been finished.（had already / has yet）','had already','by then 指截至过去那个时点，较早工程已完成。','When the new entrance opened, the seating work ___ been completed.'],['The service did not begin ___ staff training was complete.（until / during）','until','计划日期不等于实际启用，以完成条件为界。','The audio guide was not available ___ the final recording had been approved.']],
words:[['in the same year','在同一年'],['two years later','两年之后'],['under consideration','仍在考虑中']],
locators:`Which TWO conditions apply to [young visitors|1]?~[Children|1] need {an adult} throughout and must leave the {staff corridor} clear.~young visitors 对应 children，持续陪同不是仅入口陪同。
Which TWO activities can families join [today|1]?~The [current day's|1] programme includes {a skills} challenge and questions with a coach.~today 对应 current day，未来方案不是今天项目。
Which TWO tour features were [introduced recently|1]?~The {recorded guide} and {small-group visit} have [just started|1], unlike the long-standing display.~introduced recently 对应 just started，常设内容为干扰。
Which TWO services are still [under discussion|1]?~Signed commentary and {a later route} are [being considered|1], but neither is confirmed.~under discussion 对应 being considered，未定方案与已启用不同。
What [development|1] took place in 1867?~In eighteen sixty-seven, a new covered {viewing area} was the major [addition|1].~development 在场馆历史中由 addition 具体化，年份另识别。
What happened in 1896 concerning the [admission fee|1]?~A fixed [entry charge|1] began in eighteen ninety-six, after {earlier discussion} about tickets.~admission fee 对应 entry charge，讨论年份不是实施年份。
Which change to the [western stand|1] was [completed|2] in 1921, {rather than} in the earlier year when {the club} first approved spending money on {the work}?~Approval came two years earlier, but [rebuilding was finished|2] in nineteen twenty-one on the [west seating area|1]; visitors should distinguish the decision from the year the {new structure} was actually ready.~western stand 对应 west seating area；completed 对应 rebuilding finished，决策与竣工时间区分。
What [relocation|1] took place in 1953, when {the club} shop moved [indoors|2] {rather than} continuing to operate beside the {entrance gate} used by visiting supporters?~{The gate} had been its {old location}; in nineteen fifty-three {the shop's} [move|1] [inside the building|2] gave staff a permanent space, so that is {the event} to link with the year.~relocation 对应 move；indoors 对应 inside building，旧位置属于更早时期。
What began [operating|1] in 1971, after the roof work was [already complete|2], {rather than} marking the year in which that earlier construction project had finished?~The roof had been [finished by then|2]; {the event} in nineteen seventy-one was the {display screen} coming [into use|1], so do not attach both developments to {the same date} on the timeline.~operating 对应 into use；already complete 对应 finished by then，屋顶先于屏幕启用。
What [self-guided|1] service became available in 2007, following [access improvements|2] {rather than} at {the same time} as {the first discussion} of changing the visitor route?~{The route} was discussed earlier, and ramps had since improved [ease of entry|2]; in two thousand and seven visitors could finally follow a tour [without a guide|1], which is {the actual launch} date.~self-guided 对应 without a guide；access improvements 对应 ease of entry 改善，讨论与推出不同。`,
paragraphs:[P('What visitors can use now',`Young visitors may [take part=>participate=>参加活动，不等于独立行动] in a short challenge. Adults must [stay with=>remain alongside=>持续陪同] their group. A recorded guide lets people move [at their own pace=>at a speed they choose=>自选进度，不代表可进入所有区域]. A new service has [only just started=>recently become available=>最近推出]. Another proposal is [being looked at=>under consideration=>仍在考虑，非已承诺]. The guide separates [today's arrangements=>what applies during this visit=>本次安排] from future possibilities.`,['already guaranteed for next month','access to every room','stopped operating']),P('Following a timeline',`A viewing area [came into use=>began operating=>实际使用时点]. The fee was [introduced later=>started at a subsequent stage=>随后才实施]. A plan had been [approved beforehand=>accepted before the event=>批准早于执行]. The shop [changed location=>was relocated=>迁址而非停业]. At the screen's launch, the roof was [already in place=>completed by that point=>截至那个时点已完成]. The last route opened [once access work was finished=>after the necessary construction ended=>先完成工程再开放].`,['only proposed at that point','permanently closed','before construction ended'])],
signals:[{title:'What is available on this visit',focus:'陪同条件、近期启用、尚未确定的方案。',context:[3,'Staff at reception have a printed programme and can point out areas outside the current route.'],text:`Welcome to Northbank Ground and to this afternoon's visitor programme.
There are several activities for families as well as the ordinary tour.
Children must stay with their accompanying adult throughout the visit, even in the more open parts of the ground.~throughout 与 even 限定陪同条件不只在入口适用。
The main tour has been running for several seasons.
The recorded guide is a recent addition, so visitors can now choose to listen while moving at their own pace.~recent addition 区分新服务与既有导览。
We are also collecting suggestions about how future visits might be organised.
Signed commentary is still under consideration and should not be treated as a service already available today.~still under consideration 明确设想并未启用。
Please ask the reception team if you need help choosing among the confirmed activities.`},{title:'Plans, completion and opening',focus:'计划与执行年份、过去完成关系、延迟启用条件。',context:[1,'The timeline separates proposals from completed work.'],text:`The history panel records several changes to the ground over a long period.
Some dates refer to decisions, while others refer to the start of a public service.
For the western stand, the important date is when the rebuilding finished, not when the plan was first approved.~区分计划批准与实际工程完成两个时点。
The shop was subsequently moved indoors as visitor numbers grew.
By the time the display screen began operating, the roof work had already been completed.~by the time 与 had already 明确屋顶早于屏幕启用。
The self-guided route followed a separate programme of access improvements.
It did not open until the necessary work had passed its final check, despite an earlier proposed starting date.~not until 与 despite 区分原计划日期和实际开放条件。
Read each event description before matching it to a year rather than choosing the first number you hear.`}]
});
})();
