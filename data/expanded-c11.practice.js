(() => {
const add=config=>RRCompactTopic({book:11,...config});
add({test:1,part:1,title:'社区礼堂租用咨询',englishTitle:'Hiring a community hall',formats:[['笔记填空',10]],intros:['A caller arranges an event at a fictional community hall and checks which costs and facilities are included.','The caretaker explains what must happen before, during and after the event so the booking conditions are clear.'],distractors:[['a payment covering every optional facility','permission to ignore the maximum capacity','an automatic refund under every circumstance'],['leaving all equipment in its last used position','a licence supplied for every event without an application','a rule that cleaning is always optional']],units:`
capacity|场地容纳人数|the maximum number a space can hold|The room's ___ is checked before invitations are sent.
deposit|押金|money held as security for an arrangement|The ___ is separate from the ordinary hire charge.
refundable|可退还的|eligible to be paid back under stated conditions|The booking describes the security payment as ___ only if the conditions are met.
catering|餐饮供应|providing food and drinks for an event|Use of the kitchen does not automatically include a ___ service.
licence|活动许可|official permission for a specified activity|The caller checks whether a ___ is needed for the planned event.
caretaker|场地管理员|the person responsible for looking after a building|The ___ arranges access but does not remain for the whole event.
access|进入场地|the ability to enter and use a place|Early ___ needs agreement rather than an assumption based on the event time.
equipment|设备用品|items needed to carry out an activity|The included ___ is listed separately from items that must be hired elsewhere.
volume|音量|the level of sound produced|The agreement places a limit on ___ during the evening event.
clearance|清场整理|removing items and leaving a space ready for use|The organiser allows time for ___ after the guests leave.
stack|叠放|putting items in an ordered pile|Users should ___ the approved chairs as demonstrated by the caretaker.
cancellation|取消预订|ending a booking before it takes place|The ___ conditions depend on when notice is received.
`});
add({test:1,part:2,title:'传统农场参观导览',englishTitle:'Visiting a heritage farm',formats:[['笔记填空',4],['地图标注',6]],mapBeforeIndex:4,...RRMakeRoute('农场访客路线',['Entrance','Barn junction','Orchard','Farmyard','Workshop','Picnic lawn','Animal shelter','Kitchen garden','Tea room'],2),intros:['A guide introduces a fictional working farm and explains how visitors can enjoy the site while respecting its everyday activities.','The original plan is north-up. Each feature is located using the main yard and clearly named junctions.'],distractors:[['permission to enter every working area','a rule that all animals can be handled freely','the same safety instruction for every task'],['a path behind every building','the location outside the upper boundary','an area with no connection to the farmyard']],units:`
working farm|仍在生产运营的农场|a farm where agricultural work continues|A ___ combines visitor activities with tasks that cannot be interrupted.
supervision|看护监管|oversight by a responsible person|Children need ___ even in parts of the site open to visitors.
livestock|牲畜|animals kept on a farm|The ___ must not be disturbed during routine care.
restricted|限制进入的|not freely open to everyone|A ___ area is marked before visitors reach the gate.
orchard|果园|an area where fruit trees grow|The ___ is in the [north-west corner], above the barn junction.
kitchen garden|菜园|an area growing vegetables and herbs|The ___ lies [north of the farmyard], between the two upper corners.
tea room|茶室|a place offering drinks and refreshments|The ___ is in the [north-east corner], above the animal shelter.
animal shelter|动物棚舍|a covered place housing animals|The ___ lies [east of the farmyard] and above the picnic lawn.
workshop|工具作业间|a room used for practical work|The ___ is [south of the farmyard], to the right of the entrance.
picnic lawn|野餐草坪|an outdoor grassy eating area|The ___ is in the [south-east corner], below the animal shelter.
demonstration|操作演示|a practical showing of how something is done|The ___ takes place only when the worker says the area is ready.
heritage|历史传承|features retained from earlier ways of life|The tour connects ___ with the activities still carried out on the farm.
`});
add({test:1,part:3,title:'物理学习与性别研究',englishTitle:'Evaluating an education study',formats:[['单选题干',10]],intros:['Two students review a fictional study of confidence and performance in a science course, paying attention to how the comparison was designed.','They then discuss whether the results support a broad explanation or only a narrower claim about this group and task.'],distractors:[['a study proving ability is fixed from birth','a result independent of the course context','a comparison without any measured outcome'],['proof that every student reacted identically','a conclusion applying automatically to every subject','the belief that one exercise removes all inequality']],units:`
stereotype|刻板印象|a simplified belief about a group|The discussion asks how a ___ may affect expectations without defining individual ability.
intervention|干预措施|an action intended to change a situation|The short ___ is compared with an ordinary writing task.
participant|研究参与者|a person taking part in a study|Each ___ receives the same practical instructions before the activity.
control group|对照组|a comparison group without the tested intervention|The ___ helps the researchers judge whether the change may matter.
achievement|学习表现|performance demonstrated through completed work|The measure of ___ is described separately from the students' self-reports.
self-affirmation|自我肯定|reflecting on personally important values|The ___ activity is not presented as a test of subject knowledge.
bias|系统性偏差|a tendency that can distort judgement or measurement|The report checks for ___ before interpreting a difference between groups.
significant|具有统计或实际意义的|large enough to warrant careful interpretation|A ___ result still needs its size and context explained.
replication|重复验证|repeating a study to check the result|The students recommend ___ before treating the finding as universal.
generalise|推广结论|extending a finding beyond the original sample|The limited sample makes it difficult to ___ to all learners.
confidence|学习信心|belief in one's ability to succeed|The researchers measure ___ without assuming it is identical to demonstrated skill.
baseline|初始基准|a measure taken before the tested change|The ___ comparison helps identify differences that existed before the activity.
`});
add({test:1,part:4,title:'海洋生物多样性',englishTitle:'Mapping marine biodiversity',formats:[['笔记填空',10]],intros:['This original lecture examines how marine researchers identify areas of ecological importance when observations are unevenly distributed.','The second stage connects biological records with conservation decisions while recognising gaps in the available evidence.'],distractors:[['a count based only on the largest visible animal','the assumption that every warm area is identical','a complete map requiring no further observations'],['a guarantee that protection has no trade-offs','the belief that boundaries stop every animal moving','one rule based solely on the oldest record']],units:`
biodiversity|生物多样性|the variety of living organisms|The survey records ___ rather than only the number of individuals seen.
hotspot|物种丰富的重要区域|an area with a notable concentration of species|A proposed ___ is checked against the amount of observation effort.
predator|捕食性动物|an animal feeding on other animals|A large ___ can use several habitats over the course of its life.
current|海流|a continuing movement of seawater|Where one ___ meets another, conditions may concentrate food.
distribution|物种分布|the places where a species occurs|The ___ record includes uncertainty when observations are sparse.
census|系统普查|an organised attempt to record a population|The ___ combines records from several methods instead of a single expedition.
endangered|面临灭绝风险的|at serious risk of disappearing|An ___ species needs assessment of threats as well as a simple count.
reserve|保护区|an area managed for protection|A marine ___ must be considered in relation to the movements of its wildlife.
migration|迁徙|regular movement between places|The ___ route may extend beyond the boundaries of one protected area.
quota|限额|a stated maximum amount permitted|A fishing ___ is one management measure rather than a complete conservation plan.
ecosystem|生态系统|organisms and surroundings interacting together|The ___ approach considers relationships among species rather than separate lists alone.
sampling|抽样调查|examining selected examples to learn about a wider system|Uneven ___ can make one location appear richer simply because it has been studied more.
`});
add({test:2,part:1,title:'青年议会报名咨询',englishTitle:'Joining a youth council',formats:[['笔记填空',10]],intros:['A fictional applicant asks how to take part in a local youth council and what information the coordinator needs.','The conversation then covers interests, responsibilities and a preliminary meeting without treating the enquiry as an election result.'],distractors:[['automatic selection after one phone call','a council open only to full-time employees','a requirement to have held public office already'],['the same responsibility for every member','a meeting that guarantees election','a request to disclose unrelated personal details']],units:`
council|议事代表组织|a group discussing and deciding local matters|The youth ___ raises concerns but does not manage every public service directly.
representative|代表|a person speaking on behalf of others|A ___ should listen to different views rather than only personal preferences.
eligibility|申请资格|the conditions for being considered|The caller checks ___ before completing the longer application.
occupation|目前职业或活动身份|a person's work or main activity|The form records ___ separately from the subject being studied.
residential|居住方面的|relating to where someone lives|The ___ details establish which local area the applicant belongs to.
voluntary|自愿参与的|undertaken by choice rather than compulsion|The role is ___ but still involves agreed responsibilities.
interest|关注方向|a subject attracting someone's attention|The coordinator asks which ___ the applicant would like to develop through the council.
disadvantaged|处境不利的|facing barriers to opportunities and resources|The proposed work with ___ young people needs careful consultation.
appointment|预约会面|an agreed meeting at a particular time|An ___ is made to explain the process before nominations close.
nomination|候选提名|putting a person forward for selection|The enquiry is distinct from a formal ___.
committee|委员会|a smaller group with a defined responsibility|A ___ may examine a proposal before it goes to the full council.
participation|参与|taking an active part in an activity|The organiser explains how regular ___ differs from attending one event.
`});
add({test:2,part:2,title:'剧院新员工与楼层导览',englishTitle:'A theatre staff induction',formats:[['多选题干',6],['平面图标注',4]],mapBeforeIndex:6,...RRMakeRoute('剧院一层路线',['Entrance','West lobby','Box office','Main foyer','Wardrobe','Rehearsal room','East lobby','Workshop','Refreshment room'],1),intros:['A fictional theatre welcomes new staff and separates completed refurbishment from work still planned for the future.','The original ground-floor plan is north-up. Staff use the main foyer as a reference when finding rooms.'],distractors:[['work that has not yet begun described as completed','a rule that all areas are public','facilities assumed to be open continuously'],['a room outside the indicated floor','the same place as the west lobby','a route that crosses a wall']],units:`
refurbishment|翻新改造|work improving an existing building|The ___ has been staged so some activities can continue.
auditorium|观众厅|the main room where an audience sits|The ___ has different access rules during a rehearsal.
facility|配套设施|a place or service provided for use|A public ___ is distinguished from staff-only equipment.
workshop session|实践培训课|a session for learning through practical activity|Each ___ must be booked rather than joined without notice.
front of house|前厅接待工作|work dealing with visitors before and around a performance|The ___ team checks visitor questions rather than stage machinery.
backstage|后台区域|the part of a theatre away from the audience|Access to ___ is limited even when the foyer is open.
box office|售票处|the place selling or issuing tickets|The ___ is in the [north-west corner], above the west lobby.
refreshment room|茶点休息室|a room for drinks and light food|The ___ is in the [north-east corner], beyond the east lobby.
wardrobe|服装间|a room holding costumes|The ___ is [south of the main foyer], to the right of the entrance.
rehearsal room|排练室|a space used to practise a performance|The ___ is in the [south-east corner], below the east lobby.
maintenance|设备维护|keeping facilities in working order|A ___ problem should be reported rather than repaired without permission.
orientation|熟悉环境的介绍|an introduction helping people find their way|The ___ includes emergency arrangements as well as room locations.
`});
add({test:2,part:3,title:'海岸生物野外调查报告',englishTitle:'Writing up a field study',formats:[['单选题干',6],['多选题干',4]],intros:['Two students prepare an original report on a coastal field exercise and decide how much of the method needs explaining.','Their evaluation separates environmental variation from mistakes introduced by how observations were collected.'],distractors:[['a method changed randomly for every observation','a conclusion based only on the most attractive specimen','a report with no account of its aims'],['proof that every difference is a measurement error','removing all unusual observations without explanation','a claim that the sample includes every organism']],units:`
aim|研究目标|the purpose a study seeks to achieve|The ___ should describe the question rather than predict the result.
transect|样带|a line along which observations are collected|The ___ crosses the same types of surface in each comparison.
quadrat|样方|a frame marking a defined sampling area|Each ___ is placed using a stated rule rather than where organisms look most abundant.
abundance|丰度|the quantity of organisms present|The report distinguishes ___ from the number of different species.
exposure|环境暴露程度|the extent of contact with a condition|The comparison includes ___ to drying as well as waves.
methodology|研究方法体系|the approach used to collect and interpret evidence|The ___ section explains how locations were selected.
splash zone|浪花飞溅带|the shore area reached by sea spray|Organisms in the ___ experience conditions unlike those continually underwater.
desiccation|脱水干燥|the loss of water from an organism or material|The discussion of ___ considers how long each area remains uncovered.
sampling error|抽样误差|differences arising from which examples are selected|Possible ___ is considered before explaining every pattern biologically.
limitation|研究局限|a factor restricting what can be concluded|One ___ is the short period available for repeated observation.
classification|分类鉴定|assigning an observation to a defined category|Uncertain ___ is recorded rather than hidden by a confident label.
evaluation|评估反思|an assessment of the strengths and weaknesses of work|The ___ suggests an improvement that could be applied in a repeat study.
`});
add({test:2,part:4,title:'音乐厅公共建筑设计',englishTitle:'Designing a concert building',formats:[['笔记填空',10]],intros:['This fictional design lecture follows a concert building from the demands of its setting to decisions about its internal spaces.','The evaluation distinguishes the visual idea of the building from how well it functions for performers and audiences.'],distractors:[['a building judged only by its colour','a design independent of its surroundings','a promise that exterior shape determines perfect sound'],['the same sound treatment in every room','a structure requiring no maintenance','an evaluation considering only opening-day publicity']],units:`
context|建筑所处背景|the surrounding circumstances influencing a design|The site ___ includes existing routes as well as neighbouring structures.
concept|设计理念|the central idea guiding a proposal|The ___ is explained separately from the practical means of construction.
facade|建筑外立面|the outward face of a building|The ___ changes how the building is perceived from the public approach.
auditorium|观众演出厅|a room designed for an audience and performance|The ___ layout must consider sight lines as well as seating numbers.
acoustics|声学效果|the way sound behaves in a space|Adjustable elements allow the ___ to respond to different performances.
vibration|振动|repeated physical movement|The design limits ___ transmitted from surrounding activity.
insulation|隔离防传导|material or construction reducing unwanted transfer|The ___ system is discussed in relation to the kind of disturbance involved.
panel|墙面或顶面板件|a flat section forming part of a surface|A movable ___ changes the room without requiring a new structure.
curvature|弯曲形态|the degree or form of a curved surface|The ___ is assessed for its functional effect rather than appearance alone.
pedestrian access|步行到达方式|a route intended for people on foot|The plan for ___ connects the building to existing public routes.
symbolic|具有象征意味的|representing an idea beyond physical function|A ___ feature may be interpreted differently by different users.
evaluation|使用效果评价|judging how well something meets its purposes|The ___ includes ordinary use rather than only the design drawings.
`});
add({test:3,part:1,title:'免费活动与自然保护区咨询',englishTitle:'Free local activities',formats:[['单选题干',6],['句子填空',4]],intros:['A visitor asks a fictional tourist office about activities that do not require an admission payment.','The adviser then explains opportunities at a nature reserve, separating free entry from the conditions for specific activities.'],distractors:[['every activity needing no booking','a guarantee that transport is included','the same start time at every venue'],['permission to collect anything without guidance','an event available only to competitors','a reserve with no seasonal differences']],units:`
admission|入场资格或费用|entry to an event or place|Free ___ does not automatically include optional materials.
venue|活动场地|the place where an event takes place|The ___ has changed even though the advertised start time is the same.
exhibition|展览|an organised display of material|The ___ includes a guided introduction rather than a lesson for every visitor.
lunchtime|午间时段|the period around the middle-day meal|A ___ performance may fit visitors who cannot stay for evening events.
departure point|出发地点|the place where an activity begins|The ___ is checked separately from where the event finishes.
regional|地区范围的|relating to a particular area|A ___ award is not described as a national championship.
reserve|自然保护区|an area managed for wildlife protection|The ___ offers guided observation without promising a particular sighting.
rare|少见的|not commonly encountered|A ___ visitor may be present only under suitable seasonal conditions.
foraging|采集野生食材|searching for naturally occurring food|The ___ activity takes place only with the approved guide.
designated|专门划定的|officially assigned for a particular use|Only the ___ area is open for the stated water activity.
booking|预约登记|arranging a place in advance|The office recommends ___ for activities with limited places.
availability|开放或供应情况|whether something can be used at the required time|The adviser checks ___ rather than relying on last season's programme.
`});
add({test:3,part:2,title:'城镇变化与公共设施规划',englishTitle:'A town planning meeting',formats:[['单选题干',5],['计划匹配',5]],intros:['A fictional public meeting reviews changes in a town and distinguishes observed trends from proposed explanations.','The speaker then outlines different plans for public facilities rather than applying the same solution to every building.'],distractors:[['a change attributed to one cause without evidence','a plan already completed before consultation','every public facility being demolished'],['all services moving to the same building','no change permitted under any circumstances','a proposal that includes no maintenance costs']],units:`
decline|下降减少|a reduction over time|A ___ in use is described separately from the reason suggested for it.
commuter|通勤者|a person travelling regularly to work|The ___ survey includes people who leave the town each morning.
employment|就业|paid work and opportunities for it|Changes in ___ affect the town in ways not captured by population alone.
redevelopment|重新开发改造|a new use or design for an existing site|The ___ proposal keeps some structures while changing how the site functions.
consultation|意见征询|seeking views from affected people|The ___ is intended to inform decisions rather than announce a finished outcome.
relocate|迁移地点|moving an activity to another place|The plan may ___ one service without closing it permanently.
renovation|修缮翻新|improving an existing building|The proposed ___ differs from replacing the entire structure.
extension|扩建部分|an addition increasing available space|An ___ is considered where the existing rooms remain useful.
demolition|拆除|the deliberate removal of a structure|The discussion of ___ concerns only the building described as unsafe.
conversion|改变用途的改建|changing a building for a different use|The ___ would preserve the exterior while altering the internal arrangement.
provision|服务供给|making a facility or service available|The council compares future ___ with current demand.
priority|优先事项|something given attention before other matters|The stated ___ is explained in relation to the available budget.
`});
add({test:3,part:3,title:'故事插图与小组报告',englishTitle:'Revising story illustrations',formats:[['表格填空',6],['人物任务匹配',4]],intros:['Two students review original illustrations for a shared story project and decide what needs changing before submission.','They then allocate report sections according to the work already completed rather than assuming that both will write everything.'],distractors:[['changing every picture without reference to the story','a report written before any discussion','judging the project only by the number of colours'],['giving every section to the same person without agreement','a task list that omits the evaluation','an illustration replacing all written explanation']],units:`
illustration|故事插图|an image used to accompany a text|Each ___ should communicate something the written passage alone does not show.
foreground|画面前景|the part appearing nearest to the viewer|The ___ is simplified so it does not distract from the main figure.
perspective|透视关系|the way depth and position are represented|The revision to ___ makes the path appear to continue behind the building.
proportion|比例关系|the size of one part compared with another|The artist checks ___ before adding more decorative detail.
expression|人物神态|the visible communication of a feeling|A change in ___ should match the event described in the story.
contrast|明暗或形色对比|a noticeable difference between visual elements|Stronger ___ helps the important object stand out without enlarging it.
introduction|报告引言|the opening section explaining purpose and context|The ___ will outline the shared aim rather than describe every drawing.
method|工作方法|the procedure used to complete a task|The ___ section explains how feedback led to revisions.
evaluation|效果评价|an assessment of what worked and what did not|The ___ should identify a limitation as well as successful features.
allocation|任务分配|the assignment of work to particular people|The final ___ is confirmed before either student begins drafting.
caption|图注|a short explanation accompanying an image|A clear ___ identifies the relevant scene without retelling the whole story.
revision|修改完善|a change made after reviewing earlier work|Each ___ has a reason connected to the intended reader.
`});
add({test:3,part:4,title:'商业中的民族志研究',englishTitle:'Ethnographic research in business',formats:[['笔记填空',10]],intros:['This original case examines how researchers learn about ordinary product use by watching and listening in everyday settings.','The discussion then considers how observations are interpreted without turning a small number of accounts into universal rules.'],distractors:[['a method beginning with a compulsory answer','a survey limited to sales totals','observing only staged advertising demonstrations'],['drawing conclusions without reviewing notes','assuming every participant has the same experience','an interview where the participant cannot explain anything']],units:`
ethnography|民族志式情境研究|studying practices in their social context|The ___ project examines how a product fits into ordinary routines.
observation|直接观察|watching activity systematically|The ___ includes what people do as well as what they say they usually do.
participant|研究参与者|a person involved in the study|A ___ can explain why an apparently inefficient action is useful in context.
context|使用情境|the circumstances surrounding an action|The same product may be used differently when the ___ changes.
routine|日常惯常行为|a repeated pattern of ordinary activity|The study follows a ___ rather than asking for a special performance.
insight|深入理解|an understanding gained from examining evidence|One ___ concerns a need that was not mentioned in the original design brief.
consent|知情同意|agreement to take part with an understanding of the activity|The researcher seeks ___ before collecting detailed observations.
rapport|融洽信任关系|a comfortable working relationship|Building ___ does not mean promising to agree with every interpretation.
interview|访谈|a guided conversation used to gather information|The ___ allows participants to raise issues the researcher did not anticipate.
analysis|资料分析|examining information to identify meaning or patterns|The ___ compares accounts rather than selecting the most memorable quotation alone.
pattern|反复出现的规律|a recurring relationship in the material|A ___ is checked against observations that appear to contradict it.
interpretation|情境解读|an explanation of what observations may mean|The final ___ states which claims the material cannot establish.
`});
add({test:4,part:1,title:'艺术节票务与活动咨询',englishTitle:'Enquiring about a local festival',formats:[['表格填空',7],['适用人群匹配',3]],intros:['A fictional box office adviser compares festival events by venue, cost and practical arrangements.','The conversation then considers who may enjoy each performance without assuming that one age label describes every audience member.'],distractors:[['all events requiring identical tickets','a price automatically covering transport and food','a venue that never needs a capacity limit'],['a rule that every show is suitable for everyone','a recommendation based only on ticket price','the assumption that a free event needs no planning']],units:`
venue|演出场地|the place hosting an event|The ___ for the evening performance differs from the afternoon workshop.
admission|入场费用|the charge for entry|The listed ___ covers the performance but not an optional programme booklet.
concession|优惠票价|a reduced charge for an eligible group|A ___ is available only with the stated evidence.
performer|表演者|a person presenting an artistic performance|The featured ___ appears in the second part rather than at the start.
advance booking|提前预订|arranging a place before the event|The adviser recommends ___ because the room has limited space.
prize|奖品|something awarded to a successful entrant|The ___ is described separately from the cost of entering.
interval|中场休息|a break between parts of a performance|Refreshments are available during the ___ rather than throughout the show.
family-friendly|适合家庭共同参与的|suitable for a mixed-age family group|A ___ performance may still require younger visitors to be accompanied.
mature audience|较成熟的观众|viewers able to handle more complex or adult material|The recommendation for a ___ concerns content rather than a strict statement about enjoyment.
age guidance|年龄建议|information suggesting a suitable age range|The ___ helps families decide but does not describe the whole production.
accessibility|无障碍便利|how readily different visitors can use a venue|The box office checks ___ when the caller explains a particular need.
cancellation|活动取消|an event not taking place as arranged|The adviser explains the contact procedure for a possible ___ without predicting one.
`});
add({test:4,part:2,title:'博物馆馆藏与展厅位置',englishTitle:'Collections in a museum',formats:[['馆藏信息匹配',6],['平面图标注',4]],mapBeforeIndex:6,...RRMakeRoute('博物馆地下层路线',['Entrance','West lobby','Archive room','Central gallery','Textile room','Study room','East lobby','Print room','Ceramics room'],0),intros:['A fictional museum introduces collections acquired in different ways and explains why some objects are shown only occasionally.','The original basement plan is north-up. The guide uses the central gallery and the two lobbies to locate rooms.'],distractors:[['every object acquired from the same donor','a guarantee that all stored objects are always displayed','the assumption that age alone determines value'],['a room on a different floor','the exterior of an unrelated building','a route requiring visitors to cross a wall']],units:`
collection|馆藏集合|a group of related objects held by a museum|The ___ combines everyday objects with material made for display.
donation|捐赠|an item or group given without payment|A ___ may arrive with information about its earlier ownership.
acquisition|新增收藏|something obtained for a collection|The recent ___ is documented before it is placed on public display.
loan|借展物品|material lent for a limited period|A ___ remains the property of its original owner.
porcelain|瓷器|a hard fine ceramic material|The ___ display is arranged to show use as well as decoration.
conservation|文物保护|work preventing deterioration of objects|Some items are removed temporarily for ___.
archive room|档案室|a room storing documentary records|The ___ is in the [north-west corner], above the west lobby.
ceramics room|陶瓷展室|a room displaying pottery and related objects|The ___ occupies the [north-east corner], beyond the east lobby.
textile room|纺织品展室|a room displaying fabrics and clothing|The ___ is [south of the central gallery], to the right of the entrance.
study room|研究阅览室|a room used for close examination and research|The ___ is in the [south-east corner], below the east lobby.
provenance|物品来源流传记录|the history of ownership or origin|The researcher checks ___ before interpreting an undated object.
catalogue|馆藏目录|a structured record of collected items|The ___ distinguishes a stored item from one currently on display.
`});
add({test:4,part:3,title:'音乐家演出服装心理研究',englishTitle:'A study of performance clothing',formats:[['多选题干',6],['单选题干',4]],intros:['A student discusses a fictional psychology project about musicians and the clothes they choose for different performances.','The supervision then reviews the interview method and distinguishes the original aims from questions added after data collection.'],distractors:[['a study where every participant has the same preference','proof that clothing alone determines musical skill','a result inferred only from publicity photographs'],['an interview method with no limitations','a claim that every initial aim was completed','a conclusion applying to all performers without qualification']],units:`
subject|研究对象|a person taking part in an investigation|Each ___ meets the stated criteria rather than simply being available to interview.
criterion|选取标准|a condition used to decide suitability|The selection ___ is explained before the sample is described.
attire|演出着装|clothing worn for an occasion|The interview asks about ___ in relation to a particular performance setting.
perception|主观感知|the way something is noticed or understood|The study separates a performer's ___ from an audience measurement.
confidence|表演信心|belief in the ability to perform effectively|Reported ___ is compared across situations rather than treated as a fixed personality score.
identity|身份认同|the sense of who someone is or represents|The discussion of ___ includes professional expectations as well as personal preference.
telephone interview|电话访谈|a research conversation conducted by phone|A ___ makes participation easier for some musicians but limits visual observation.
rapport|访谈信任关系|a comfortable relationship supporting conversation|The student describes how ___ was established before sensitive questions.
objective|研究目标|an intended purpose of an investigation|One original ___ was narrowed when the available material proved limited.
retrospective|回顾性的|based on looking back at earlier experience|A ___ account may be affected by how an event is remembered.
coding|资料编码|organising responses into analytic categories|The ___ process is checked against examples that do not fit the first categories.
validity|研究效度|how well a method supports the intended conclusion|The supervisor asks about ___ rather than only the number of interviews.
`});
add({test:4,part:4,title:'土壤碳储存与再生农业',englishTitle:'Soil and carbon storage',formats:[['笔记填空',10]],intros:['This original agricultural study considers how soil management affects the movement and retention of carbon.','The second part compares practical changes with the evidence needed to show that benefits persist over time.'],distractors:[['a claim that all carbon remains underground forever','the removal of all farming from every site','a result determined only by the colour of soil'],['counting a single reading as a permanent effect','a method needing no comparison plot','proof that every soil responds in the same way']],units:`
sequestration|碳封存|capturing and retaining carbon in a system|The study of ___ includes how long added carbon remains stored.
erosion|侵蚀流失|the removal of soil or rock by natural forces|Reducing ___ can help retain material that would otherwise leave the field.
fertility|土壤肥力|the ability of soil to support plant growth|The trial measures ___ separately from the quantity of carbon stored.
microbe|微生物|a very small organism|A soil ___ can influence how plant material is broken down.
organic matter|有机质|material derived from living organisms|The amount of ___ is checked using a consistent sampling method.
regenerative|促进生态恢复的|intended to rebuild ecosystem functions|A ___ practice is evaluated through results rather than its label alone.
compost|堆肥|decomposed organic material used to improve soil|The ___ treatment is compared with an untreated plot.
cover crop|覆盖作物|a crop grown partly to protect the ground|A ___ keeps the surface occupied outside the main harvest period.
rotation|轮作|growing different crops in a planned sequence|The ___ system is designed for local conditions rather than copied unchanged.
incentive|激励措施|a benefit intended to encourage an action|A proposed ___ depends on verified improvement rather than an unsupported claim.
baseline|初始比较基准|a measure taken before an intervention|The ___ sample makes later readings more meaningful.
verification|核实验证|checking whether a claim is supported|Long-term ___ is included when the programme reports stored carbon.
`});
})();
