RRReadPack({id:'c18-r-t2-p2',location:{book:18,test:2,part:2},title:'人工智能的目标、道德与自主权',focus:'专门能力与通用能力；目标措辞和真实意图；效率、权力与公平的取舍；选择题、作者观点、词库摘要。',
words:`
specialised|专门化的；针对特定任务的|A specialised system is designed for a particular kind of work.|专门系统针对某一类工作设计。|Success on a ___ task does not establish ability at every task.|在专门任务上的成功不证明能做所有任务。
restriction|限制|A restriction limits what is allowed or possible.|限制约束允许或可能做到的事。|The writer asked whether the current ___ would remain.|作者问现有限制是否会继续存在。
artificial general intelligence|人工通用智能；能处理广泛任务的智能|Artificial general intelligence would perform a broad range of intellectual tasks.|人工通用智能能完成广泛的智力任务。|The discussion distinguished ___ from a system good at one game.|讨论区分通用智能与只擅长一种游戏的系统。
physical constraint|物理条件的限制|A physical constraint arises from the material limits of a system.|物理限制来自系统的物质条件。|Processing speed can be affected by a ___.|处理速度可能受物理条件限制。
coexistence|共存；共同存在|Coexistence means living or operating alongside one another.|共存就是彼此一起生活或运行。|The essay asked what safe ___ with powerful machines would require.|文章问与强大机器安全共存需要什么。
specify|明确说明；具体规定|To specify a goal is to state clearly what it is.|明确目标就是清楚说出它是什么。|The designer had to ___ the goal rather than assume it was obvious.|设计者必须明确目标，而非认定显而易见。
aligned with|与……一致的|A goal aligned with a value is directed towards that value.|与价值一致的目标朝向该价值。|The rule needed to be ___ the users’ actual priorities.|规则需要与使用者真正优先事项一致。
amplify|放大；增强|To amplify an effect is to make it stronger.|放大效应就是让它更强。|An automated system could ___ an existing error.|自动系统可能放大已有错误。
fallible|会犯错的|A fallible person or system can make mistakes.|会犯错的人或系统可能出错。|A ___ designer should not be assumed to write perfect instructions.|不应假定会犯错的设计者能写出完美指令。
ethical|道德上的；符合道德的|An ethical question concerns what is right or fair.|道德问题关心什么正确或公平。|The review raised an ___ question as well as a technical one.|评论除技术问题外也提出道德问题。
cognitive|认知方面的|Cognitive abilities concern thinking, understanding and learning.|认知能力涉及思考、理解和学习。|A ___ advantage does not automatically settle a moral question.|认知优势不自动解决道德问题。
moral high ground|更符合道德的立场|The moral high ground is a position regarded as ethically better.|道德高地是被认为更符合道德的立场。|The article asked who could define the ___.|文章问谁能界定更符合道德的立场。
utopian|理想化的；乌托邦式的|A utopian picture imagines an ideal situation.|理想化图景想象一种完美状况。|The writer questioned a ___ account that ignored conflict.|作者质疑无视冲突的理想化叙述。
clarity|清晰；明确程度|Clarity makes an idea or instruction easy to understand.|清晰使想法或指令容易理解。|The problem concerned the ___ of the objective.|问题涉及目标的明确程度。
tribal|偏向自己群体的|A tribal attitude strongly favours one’s own group.|群体本位态度强烈偏向自己所属群体。|A ___ preference could conflict with equal treatment of strangers.|偏向自己群体可能与平等对待陌生人冲突。
conflicted|内心矛盾的；立场不一致的|A conflicted person feels pulled towards opposing choices.|矛盾的人受到相反选择的拉扯。|The committee remained ___ about the ideal it wanted to promote.|委员会对要推崇的理想仍有矛盾。
autonomy|自主权；自己作决定的自由|Autonomy means being able to make one’s own decisions.|自主权指能够自己作决定。|Greater efficiency could come with less ___ for the people previously deciding.|效率提高的同时，原决策者自主权可能减少。
discriminate in favour of|偏袒；优待某一方|To discriminate in favour of a group is to treat it more favourably than others.|偏袒某群体就是比对别人更优待它。|The rules should not ___ people simply because they belong to the local group.|规则不应只因本地身份而偏袒人。
gatekeeper|把关者；控制准入的人或系统|A gatekeeper controls access to a service or opportunity.|把关者控制进入某服务或机会的资格。|The system became a ___ rather than just a source of advice.|系统成了把关者，不只是建议来源。
lapse|失误；偏离规范的行为|A lapse is a failure to maintain an expected standard.|失误是没有保持预期标准。|The policy tried to prevent a ___ without controlling every private choice.|政策试图防止失误，不控制所有私人选择。
deprive|剥夺；使失去|To deprive someone of something is to take it away from them.|剥夺就是使某人失去某物。|The change could ___ staff of authority they had previously held.|改变可能剥夺员工原有权力。
taxpayer|纳税人|A taxpayer pays tax that helps fund public services.|纳税人交税以支持公共服务。|The review considered the interests of the ___ as well as service users.|评论同时考虑纳税人与服务使用者的利益。
self-interest|个人私利；自身利益|Self-interest concerns what benefits oneself.|自身利益关注什么对自己有好处。|Agreement might require people to put aside some ___.|达成一致可能要求人们暂放部分私利。
moral authority|作出道德判断和约束的权威|Moral authority is recognised standing to judge what ought to be done.|道德权威是被认可作出应当怎样做的判断的地位。|High intelligence alone does not automatically confer ___.|高智力本身不自动赋予道德权威。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['restriction','clarity','autonomy','taxpayer','self-interest'],
contexts:[{id:'objectives',title:'What should the system try to do?',words:['specialised','restriction','artificial general intelligence','physical constraint','coexistence','specify','aligned with','amplify','fallible','cognitive','clarity','self-interest'],paragraphs:[
'A discussion group compared a {{specialised}} tool with {{artificial general intelligence}}. The first did one kind of task well. That did not settle whether its restriction would disappear or whether it could handle every other task. A {{physical constraint}} could also affect what any system could achieve.',
'The group then considered safe {{coexistence}}. A designer needed to {{specify}} an objective with clarity and check that it was {{aligned with}} what users actually wanted. An instruction could sound simple while leaving out an important condition.',
'Because designers were {{fallible}}, a powerful tool might {{amplify}} an error instead of correct it. Greater {{cognitive}} ability was useful, but did not guarantee a good objective. Participants agreed that the discussion could not be settled by each person defending only self-interest; they needed to consider whose needs the proposed rule would serve and what it might overlook.'
]},{id:'choices',title:'Advice, authority and personal choice',words:['ethical','moral high ground','utopian','tribal','conflicted','autonomy','discriminate in favour of','gatekeeper','lapse','deprive','taxpayer','moral authority'],paragraphs:[
'A town considered using a system to advise on access to a shared service. The review raised an {{ethical}} question: who would define the {{moral high ground}} when people disagreed? A {{utopian}} description promised better outcomes for everyone, but some members remained {{conflicted}} about the trade-offs.',
'A {{tribal}} preference might lead staff to {{discriminate in favour of}} people they knew. Preventing that could be fairer. Yet turning advice into a binding rule would make the system a {{gatekeeper}}, not just a helper. It could {{deprive}} staff of some existing authority.',
'The taxpayer and service users both had interests to consider. Preventing a serious {{lapse}} could justify a restriction, but autonomy still mattered. The group asked how {{moral authority}} should be granted and challenged. It wanted a way to question decisions, rather than assume that a more efficient procedure was automatically right in every case.'
]}],
vocab:[
['The system excelled at a specialised task.\nspecialised 表示？','针对特定任务的','已能同样处理全部任务的','已经超出所有物理限制的','不需要任何目标的','专门能力不能直接扩成通用能力。'],
['The writer asks whether a restriction is temporary.\nrestriction 是？','能力或行动受到的限制','已经实现的所有成果','必然永久存在的约束','特指机器的外壳','限制本身不说明持续时长。'],
['A physical constraint limits processing.\nphysical constraint 是？','物质条件带来的限制','唯一的道德判断标准','每人相同的个人偏好','已经写好的目标清单','物理约束与伦理目标不同。'],
['The objective must be specified.\nspecified 表示？','被清楚具体说明','被默认无需表达','被所有人自动同意','被保证已经达成','明确目标不等于一致或完成。'],
['The goal should be aligned with users’ values.\naligned with 表示？','与其价值取向一致','只是在措辞上提到用户','已经不受任何规则限制','只追求系统速度更快','目标方向一致，而不只提及。'],
['The system could amplify a mistake.\namplify 表示？','把错误的影响放大','自动证明错误不存在','只记录错误却不影响它','保证今后不会犯错','放大方向不同于消除。'],
['The designers are fallible.\nfallible 表示？','可能犯错的','已经犯了所有可能错误的','永远不可能改正的','完全不能制定任何规则的','可错不等于全错或无能力。'],
['Cognitive ability is not moral authority.\ncognitive 表示？','思考理解和学习方面的','必然符合道德的','正式拥有准入权的','只涉及设备外观的','认知能力与道德正当性不同。'],
['The account was criticised as utopian.\nutopian 表示？','把状况描述得过于理想化的','已经逐项证实的现实记录','只说明计算速度较慢的','完全不含任何愿景的','理想化不等于已检验事实。'],
['The group remained conflicted.\nconflicted 表示？','在相反考虑之间感到矛盾','已经一致接受全部条件','完全没有任何价值观','已经停止一切讨论','内心或立场拉扯，不是无观点。'],
['The policy could limit autonomy.\nautonomy 是？','自己作决定的自由','使别人必须服从自己的全部权力','所有服务的预算总额','保证不会犯错的能力','自主不等于支配他人。'],
['The rule should not discriminate in favour of one group.\ndiscriminate in favour of 表示？','比对其他人更优待该群体','在相同条件下平等对待各方','完全不识别任何差别','必定伤害被优待群体','偏袒有比较方向。'],
['The system acted as a gatekeeper.\ngatekeeper 是？','控制能否获得服务的把关者','只提供可自由忽略建议的人','所有实际使用服务的人','只统计历史数据的档案员','准入权不同于建议角色。'],
['The change may deprive staff of authority.\ndeprive 表示？','使员工失去已有权力','给员工更多同类权力','证明员工从未有过权力','只询问员工是否满意','剥夺的是原有东西。'],
['The review discussed a possible lapse.\nlapse 是？','偏离预期规范的失误','已经达成的永久共识','只指设备运算极限','每种个人选择都必有的名称','具体失误不等同所有选择。'],
['The proposal would confer moral authority.\nmoral authority 是？','被认可作出应当怎样做的判断的地位','单纯运算速度优势','所有人已完全相同的愿望','仅仅收到一份数据报告','权威与计算能力分开。']
],
rewrites:[
['Success at one task does not by itself demonstrate general ability.','A narrow achievement is insufficient evidence of competence across tasks.','A narrow achievement proves no useful ability at all.','Any task-specific success establishes universal competence.','General ability means doing only one task.','能力范围不外推，也不抹掉专门成果。'],
['Literal compliance can miss what a person actually intended.','Following the wording may fail to preserve the underlying purpose.','Exact wording always expresses every unstated condition.','A missed purpose proves the system ignored all instructions.','Purpose and literal wording cannot differ.','照字面执行与符合真实意图可分离。'],
['A system could improve allocation while reducing staff discretion.','Greater efficiency can coexist with less freedom for current decision-makers.','Improved efficiency guarantees everyone more authority.','Reduced discretion proves allocation has become less efficient.','Efficiency and authority are the same measure.','不同维度可一升一降。'],
['Human disagreement makes a shared objective harder to define.','Conflicting values complicate the specification of a common goal.','Disagreement means no human has any values.','A common goal is already clear whenever people disagree.','Only computing speed determines the goal.','目标分歧难度，不是不存在价值。'],
['Restricting harmful choices may be justified without making every restriction acceptable.','Some limits can be defensible while others still require scrutiny.','Every limit is automatically fair.','No limitation can ever be justified.','Justifying one rule establishes all future rules.','部分限制合理不推出全体合理。'],
['More intelligence does not automatically establish the right to decide for others.','Superior cognitive performance alone need not confer legitimate authority.','Anyone less intelligent must lack all rights.','Authority is identical to speed of calculation.','A capable system can never offer useful advice.','能力和权力正当性不同。']
],
match:{title:'From a target to a decision',text:'The team had to {{0}} a goal {{1}} its actual values. A {{2}} designer might leave out a condition and let the system {{3}} a bias. Giving it {{4}} could then affect human {{5}}.',pairs:[['specify','state clearly','明确说明。'],['aligned with','consistent with','与之相符。'],['fallible','capable of making mistakes','可错。'],['amplify','make stronger','放大。'],['moral authority','standing to decide what ought to be done','道德判断权威。'],['autonomy','freedom to make personal decisions','自主权。']],extras:['a guarantee that every value is agreed','only a faster calculation','the removal of every possible disagreement']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "Not every instruction|that a system follows literally|captures|what|the person giving it|meant.",
    "subject": "Not every instruction",
    "predicate": "captures",
    "skeleton": "Not every instruction captures what the person meant.",
    "translation": "并非每条被系统照字面执行的指令都表达了下指令者真正的意思。",
    "why": "Not every限定主语，captures主句，follows/meant分别从句。"
  },
  {
    "kind": "backbone",
    "tokens": "The authority|granted to a system that controls access to a service|should be examined|alongside|its accuracy and speed.",
    "subject": "The authority",
    "predicate": "should be examined",
    "skeleton": "The authority should be examined.",
    "translation": "给控制服务准入系统的权力，应和准确度速度一起受审视。",
    "why": "granted短语修饰authority，should be examined主句。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The panel reviewed|a rule requiring an explanation whenever access was refused|alongside a faster sorting procedure and a new public information page.|The procedure shortened the queue, while the page helped people understand how to apply.|Some members supported all three changes, but others asked which would let an unsuccessful applicant question the result.|They agreed that|it|provided a basis for asking whether the stated reason matched the facts of an individual case, even if receiving an explanation did not by itself guarantee a different outcome.",
    "antecedent": "a rule requiring an explanation whenever access was refused",
    "translation": "委员会评解释拒绝理由的规则、加快排序流程和公共说明页。能让申请者按具体理由质疑决定的是解释规则，非排队速度或页面。",
    "why": "stated reason追溯explanation rule。"
  },
  {
    "kind": "reference",
    "focus": "the latter",
    "tokens": "A reviewer distinguished|the system’s ability to rank applications quickly|from|its authority to decide which priorities should govern the ranking.|A demonstration supplied evidence about speed and consistency, while a separate meeting discussed fairness and who should be able to challenge the rules.|Some observers praised the demonstration as if it had answered both questions.|The reviewer warned that|the latter|could not be established by a performance test alone, because choosing what ought to matter involved a judgement beyond showing how efficiently a given target could be pursued.",
    "antecedent": "its authority to decide which priorities should govern the ranking.",
    "translation": "排序能力和决定优先标准的权力不同。性能演示能测速度一致性，不能单独确立后者权力。",
    "why": "latter为后一项authority，不是算法效率。"
  },
  {
    "kind": "logic",
    "text": "A machine can meet a stated target while producing an outcome its designer did not want.",
    "q": "问题可能出在哪里？",
    "options": [
      "目标表述遗漏了真实意图中的条件。",
      "机器必定完全没有执行目标。",
      "任何目标都不可能被执行。",
      "设计者每次都希望产生坏结果。"
    ],
    "answer": "目标表述遗漏了真实意图中的条件。",
    "translation": "机器可达成明示目标，却产生设计者不想要的结果。",
    "why": "表述与真实意图可能有差。"
  },
  {
    "kind": "logic",
    "text": "The author questions whether a desirable destination can be specified clearly, not merely whether the system can travel quickly towards it.",
    "q": "疑问重点是什么？",
    "options": [
      "该追求什么能否明确，而不只有执行速度。",
      "只需要加快运算即可解决一切。",
      "目标已经人人一致无需讨论。",
      "所有执行能力都没有任何作用。"
    ],
    "answer": "该追求什么能否明确，而不只有执行速度。",
    "translation": "作者质疑理想目的能否明确，不仅是朝它前进够不够快。",
    "why": "目标指定问题区别于能力。"
  }
],
evidence:{title:'An automated booking proposal',paragraphs:[
['A community venue considered a system for allocating rooms to local groups when more requests arrived than spaces were available.','The review asked|what the system should optimise,|not just how quickly it could process the requests.','A faster ranking would be useful only if the ranking reflected an acceptable set of priorities.'],
['One demonstration sorted applications consistently according to the rule it was given.','The reviewer noted that this did not decide whether the rule itself was fair.','The panel separated|evidence about performance|from the authority to choose whose needs should take precedence.'],
['A simple target rewarded bookings with the highest attendance estimates.','This could disadvantage smaller groups even when their need for a room was substantial.','The revised discussion considered|needs omitted by the first target|rather than describe perfect execution as proof of a perfect objective.'],
['Staff currently adjusted some decisions after hearing explanations from applicants.','Making every result binding would reduce that freedom even if routine processing became more efficient.','The proposal therefore included|a route for questioning an individual decision|instead of assuming that a consistent procedure could never need review.'],
['Members disagreed about how much preference local groups should receive over visitors.','The final report treated this as a question about values that the speed test could not settle.','It asked the venue to|publish the priorities and invite scrutiny|before expanding the system, so that the purpose would be open to discussion rather than hidden inside an apparently neutral ranking.']
],questions:[
['What main question went beyond processing speed?',0,1,'','要优化什么目标。'],['What could the demonstration not establish?',1,1,'','规则本身公平性。'],['What kind of evidence was distinguished from decision authority?',1,2,'evidence about performance','表现证据不赋权。'],['What prompted a revision to the target?',2,2,'needs omitted by the first target','首目标遗漏小组需要。'],['What safeguard accompanied the binding procedure?',3,2,'a route for questioning an individual decision','个案质疑渠道。'],['What was required before expanding the system?',4,2,'publish the priorities and invite scrutiny','公开优先标准受审查。']
]},
specials:[
{kind:'quiz',title:'观点与论证选择',rows:[
['A writer describes a tool that scores perfectly on a narrow task before asking about broader competence. What distinction is being made?','Specialised performance and general capability.','The tool’s complete failure and its later repair.','The cost of hardware and the price of tickets.','Past ability and a guarantee of identical future accuracy.','窄任务成功不等于通用能力。'],
['A system allocates every room to the largest group because its instruction is to maximise attendance. Why might this example matter?','The stated metric can omit a consideration that users intended to preserve.','The system necessarily refused to follow its metric.','No metric can ever be measured.','Large groups can never have a legitimate need.','字面目标遗漏意图条件，不是大组永不合理。'],
['An essay asks who should define fairness before discussing faster processing. What is the writer emphasising?','The choice of objectives precedes a judgement about efficient pursuit of them.','Speed has no possible practical value.','Fairness is already identical for every observer.','Every slow system has more legitimate authority.','先目标后执行，非否定所有速度价值。'],
['The reviewer accepts some restrictions on harmful conduct but questions automatic control of every choice. Which summary is closest?','Justified limits do not settle the legitimacy of unrestricted control.','Any limit proves all control acceptable.','The reviewer thinks no rule may ever limit conduct.','The reviewer says restrictions and personal choices are identical.','部分正当限制不支持无限权力。']
]},
{kind:'judgement',title:'作者观点判断',labels:['YES','NO','NOT GIVEN'],rows:[
['I regard clarity about the objective as essential; faster pursuit of an unclear target can make the problem larger.','The author thinks speed cannot substitute for a well-defined goal.','YES','明确目标清晰重要，速度不能代替。','目标不清加速可放大问题。'],
['I reject the suggestion that excellent performance on a prescribed task automatically grants the right to determine everyone else’s priorities.','The author thinks high task performance automatically confers decision authority.','NO','明确reject。','作者反对任务表现自动赋予定他人目标的权力。'],
['The writer considers how an automated ranking might affect staff discretion and applicants’ access to rooms.','The writer prefers systems designed by universities to those designed by private companies.','NOT GIVEN','没有开发机构偏好比较。','讨论自主裁量与准入影响。'],
['In my view, an explanation and a route to challenge a decision matter even when the routine process is highly consistent.','The author sees value in review procedures alongside consistency.','YES','解释与申诉仍重要。','一致性不取消质疑渠道。'],
['A restriction may be justified by a serious harm, but I do not accept that this makes every proposed restriction acceptable.','The author approves every limit once one harmful choice has been identified.','NO','明确不接受every。','部分有害选择可限，不等于限制都正当。'],
['The essay describes disagreements about priorities and suggests that they should be made public for discussion.','The author believes every disagreement can be resolved within one meeting.','NOT GIVEN','没有所有分歧所需时长。','建议公开讨论优先项。']
]},
{kind:'bank',title:'词库摘要填空',name:'When a ranking becomes binding',passage:{title:'Testing a venue allocation system',paragraphs:[
'A venue tested a procedure that ranked requests according to a published set of priorities. The test showed a shorter processing time and a consistent application of the stated rule. It did not establish that the choice of priorities was fair; that question remained with the committee and the groups affected.',
'The committee proposed a right to challenge a refusal and required an explanation for each decision. Staff would lose some freedom to make informal exceptions if the ranking became binding. The report welcomed efficient processing while insisting that the purpose, the limits on authority and the review procedure should remain open to scrutiny.'
]},text:'The demonstration supplied evidence of {{0}}, not proof of {{1}}. Making the result binding could reduce {{2}}. The report therefore supported {{3}} and a right to challenge, with the governing priorities open to {{4}}.',pairs:[['1','consistent rule application','测试证明按给定规则一致执行。'],['2','fairly chosen priorities','公平目标仍需讨论。'],['3','informal staff discretion','约束结果削减非正式裁量。'],['4','reasons for individual decisions','逐次解释。'],['5','public scrutiny','优先项公开接受审查。']],extras:['automatic agreement among all groups','a guarantee of perfect individual outcomes','the elimination of every review procedure']}
]});
