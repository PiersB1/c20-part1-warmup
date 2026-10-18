RRReadPack({id:'c21-r-t2-p3',location:{book:21,test:2,part:3},title:'人工智能的能力、限制与使用判断',focus:'作者态度与让步；技术可行性不等于应用正当性；意图与结果；选择、选词摘要、作者观点判断。',
words:`
sensationalist|夸大其词、制造轰动的|A sensationalist headline makes an ordinary event sound dramatic.|耸动标题把普通事件说得很戏剧化。|The article was ___, stressing danger without showing its evidence.|文章夸大其词，强调危险却不展示证据。
innovation|创新；新方法|An innovation can change how a familiar task is done.|创新能改变熟悉任务的完成方式。|The small design ___ reduced the number of steps needed.|这个小设计创新减少了所需步骤。
infiltrate|逐渐渗入|A new habit can infiltrate everyday routines without much notice.|新习惯可能不知不觉渗入日常生活。|The writer asks how commercial messages ___ private conversations.|作者追问商业信息如何渗入私人交谈。
mindset|思维方式|A mindset shapes how someone approaches a problem.|思维方式影响人如何处理问题。|A fixed ___ can make it hard to consider another explanation.|固定的思维方式可能使人难以考虑别的解释。
algorithm|算法；按步骤处理问题的方法|An algorithm follows rules to turn input into an output.|算法按规则把输入转为输出。|The ___ ranks applications using the information it receives.|算法利用接收的信息给申请排序。
jeopardise|危及|A rushed decision can jeopardise a careful project.|仓促决定可能危及认真筹划的项目。|Poor testing may ___ the reliability of the service.|测试不足可能危及服务的可靠性。
disregard|忽视；不予考虑|Do not disregard a warning simply because the device usually works.|不要因为设备通常正常就忽视警告。|The model may ___ important details that were left out of its data.|模型可能忽视数据中遗漏的重要细节。
unrealistic|不切实际的|An unrealistic promise cannot be met under actual conditions.|不切实际的承诺无法在真实条件下兑现。|It is ___ to expect a new tool to solve every problem immediately.|期待新工具立刻解决所有问题并不切实际。
policymaker|政策制定者|A policymaker helps decide rules for a public service.|政策制定者参与决定公共服务规则。|The ___ asked what evidence supported the proposed change.|政策制定者询问有什么证据支持拟议改变。
pledge|承诺|The group made a pledge to publish its results.|小组承诺公布结果。|A public ___ should be followed by a clear plan.|公开承诺之后应有明确计划。
deploy|部署；投入实际使用|The centre will deploy the new system after testing.|中心将在测试后把新系统投入使用。|A useful model in a lab may be difficult to ___ across many offices.|实验室里有用的模型可能很难部署到许多办公室。
infrastructure|基础设施|Data infrastructure includes systems for storing and sharing records.|数据基础设施包括存储和共享记录的系统。|The project needs better ___ before it can connect separate databases.|项目连接独立数据库前，需要更好的基础设施。
bureaucracy|繁琐的行政程序|Bureaucracy can delay access through many forms and approvals.|繁琐的行政程序可能因表格和审批过多而拖延访问。|The team spent weeks dealing with ___ before receiving permission.|团队花了几周处理繁琐行政程序，才获得许可。
reap the benefits|获得好处|Small firms can reap the benefits of shared equipment.|小企业可以从共享设备中获益。|Staff need training to ___ of the new software.|员工需要培训，才能获得新软件带来的好处。
susceptible to|易受……影响的|A weak lock is susceptible to damage.|不牢固的锁容易损坏。|The model is ___ errors when inputs are incomplete.|输入不完整时，模型容易出错。
malicious|恶意的|A malicious message is intended to cause harm.|恶意信息意在造成伤害。|The review considered ___ attempts to change the result.|审查考虑了恶意改变结果的尝试。
overlook|忽略；没有注意到|It is easy to overlook a small condition in a long agreement.|长协议里的小条件容易被忽略。|Do not ___ the costs of maintaining the tool.|不要忽略维护工具的成本。
ethical|符合伦理、负责任的|An ethical choice considers how people may be affected.|负责任的选择会考虑人们可能受到什么影响。|The team asked whether the proposed use was ___.|团队询问拟议用途是否符合伦理。
capability|实际能力|A capability is something a system can actually do.|实际能力是系统真正能做的事情。|The demonstration showed one ___, not unlimited intelligence.|演示显示了一项能力，而不是无限智能。
fantasy|脱离现实的想象|Fantasy is different from a claim supported by evidence.|幻想不同于有证据支持的说法。|The proposal mixed practical ideas with ___.|提案把实际想法与脱离现实的想象混在一起。
domain|领域|A tool designed for one domain may fail in another.|为一个领域设计的工具可能在另一个领域失效。|Performance in a narrow ___ does not prove usefulness everywhere.|狭窄领域的表现不能证明处处有用。
amplify|放大；加剧|Repeating an error can amplify its effects.|重复错误会放大其影响。|The system may ___ an existing unfair pattern.|系统可能加剧已有的不公平模式。
structural discrimination|制度或结构造成的歧视|Structural discrimination can arise from how a system is organised.|结构性歧视可能源于系统的组织方式。|Removing a name alone may not eliminate ___.|仅去掉姓名可能无法消除结构性歧视。
automate|使自动化|We can automate a repeated calculation.|我们可以让重复计算自动完成。|The team chose not to ___ the final decision.|团队选择不让最终决定自动完成。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['innovation','policymaker','pledge','fantasy','domain'],
contexts:[
{id:'proposal',title:'Before the new service opens',words:['sensationalist','innovation','infiltrate','mindset','unrealistic','policymaker','pledge','deploy','infrastructure','bureaucracy','capability','fantasy'],paragraphs:[
 'A town office considered a new booking tool. One {{sensationalist}} article called it the end of all waiting. The policymaker leading the project made a smaller pledge: test whether it could help people find an appointment. She wanted to separate a demonstrated {{capability}} from fantasy.',
 'The tool was a useful innovation, but it would be {{unrealistic}} to expect it to repair every problem. The office needed {{infrastructure}} that could connect its records. Some delay came from {{bureaucracy}}, with several approvals required before information could be shared. A clever screen could not remove those arrangements by itself.',
 'The team also noticed a new {{mindset}} beginning to {{infiltrate}} its discussions: if a task was difficult, somebody immediately suggested software. Before deciding to {{deploy}} anything, staff asked what the actual problem was. Sometimes a clearer letter or a simpler rule might help more than a new system.'
]},
{id:'test',title:'Useful does not mean suitable everywhere',words:['algorithm','jeopardise','disregard','reap the benefits','susceptible to','malicious','overlook','ethical','domain','amplify','structural discrimination','automate'],paragraphs:[
 'The test {{algorithm}} sorted requests using the records it received. The team found that incomplete entries could {{jeopardise}} the result. It was {{susceptible to}} mistakes when a form was missing. The reviewers also considered {{malicious}} attempts to enter false information, rather than assuming that every user would behave as expected.',
 'Staff must not {{disregard}} these limits or {{overlook}} the people whose records were less complete. A pattern that looked neutral could {{amplify}} earlier inequalities. The team discussed {{structural discrimination}}, meaning unfairness produced by the way the system was organised, not only by an openly hostile decision.',
 'The tool worked in one narrow domain. Whether it was {{ethical}} to use it for another task required a separate judgement. Staff decided to {{automate}} simple reminders but keep difficult decisions with trained people. Users could then {{reap the benefits}} of quicker messages without being told that software was ready to make every choice for them.'
]}],
vocab:[
 ['The headline was sensationalist, presenting a limited trial as a revolution.\nsensationalist 是？','夸大制造轰动的','专门面向技术人员的','逐项列出证据的','只报告负面结果的','把有限试验夸成革命，不等于只谈负面。'],
 ['A solution-first mindset led the team to buy software before defining its problem.\nmindset 是？','思考问题的方式','已验证的技术指标','一次完整实验','全部工作人员的技能','这里批评先选方案的思维习惯。'],
 ['The promise was unrealistic given the incomplete records.\nunrealistic 是？','按现有条件难以实现的','只是尚未正式宣布的','仅需更换名称的','一定出于恶意的','条件不支持实现，不代表恶意。'],
 ['A public pledge preceded the detailed budget.\npledge 是？','作出的承诺','已经完成的部署','获得的独立验证','被取消的政策','承诺先于预算，不等于完成。'],
 ['The system was deployed in two offices after a test in one room.\ndeployed 是？','投入实际使用','仅制作了展示图','被永久封存','完成了理论推导','从测试走向真实办公使用。'],
 ['The project lacked infrastructure for sharing records securely.\ninfrastructure 是？','支持运行的基础系统','所有旧记录的内容','一组未来愿望','对外宣传的口号','关注存储共享基础，不是资料内容本身。'],
 ['Bureaucracy delayed access despite the files being digital.\nbureaucracy 是？','繁琐的行政手续','文件完全不存在','计算速度太慢','软件自行拒绝所有请求','数字化不等于省去审批手续。'],
 ['Training was needed to reap the benefits of the tool.\nreap the benefits 是？','真正获得好处','保证毫无成本','预先承诺效果','只描述理论可能','培训是获益条件，不是零成本保证。'],
 ['The model was susceptible to errors when labels were wrong.\nsusceptible to 是？','容易受……影响','完全能够防止','已经证明无关','只在首次使用时接触','易出错不等于必定每次错误。'],
 ['The review considered malicious input rather than ordinary typing mistakes alone.\nmalicious 是？','故意意在造成损害的','无意且轻微的','尚未被识别的','所有新用户提交的','区别在意图，不是新旧或是否识别。'],
 ['The proposal overlooked the cost of updating old records.\noverlooked 是？','没有考虑到','已经准确计算','决定全额补贴','故意增加','忽略不一定故意，更不是增加成本。'],
 ['An ethical review asked who could be disadvantaged by the ranking.\nethical 是？','考虑是否公正、负责任的','只测试运行速度的','只证明技术可行的','确保完全盈利的','伦理评价涉及影响及公平，不只可行或利润。'],
 ['Success at one narrow task did not establish a general capability.\ncapability 是？','实际能完成的能力','对未来的任何期望','向公众作出的承诺','输入数据的数量','能力是能做什么，不是许诺什么。'],
 ['The tool performed well in one domain but not another.\ndomain 是？','应用领域','单个文件大小','所有使用者的身份','运行中的错误类型','跨领域表现可能不同。'],
 ['The new ranking amplified a bias already present in the data.\namplified 是？','加剧了','首次创造了全部','准确纠正了','完全隐藏了','已有偏差被放大，不必是新产生。'],
 ['The office automated reminders but kept decisions with staff.\nautomated 是？','改为由系统自动完成','不再发送任何','只提前了时间','让每个人自行决定','自动的是提醒，不是最终决定。']
],
rewrites:[
 ['A system that can be automated need not be automated.','Technical feasibility does not by itself justify automatic operation.','Every feasible automatic system should be deployed.','No task can be completed automatically.','Automatic operation is justified only by faster speed.','can是能力，need not排除应当自动化的必然性。'],
 ['Adding a model does not automatically make a service fairer.','A model’s presence alone is no guarantee of greater fairness.','A model necessarily makes every service unfair.','Services without models are always fair.','Fairness can be measured only by adding a model.','不保证更公平不等于必定更不公平。'],
 ['The promise went beyond what the trial had demonstrated.','The claimed outcome exceeded the evidence from the trial.','The trial established every part of the promise.','The promise was more cautious than the finding.','The trial showed that nothing could work.','承诺超出证据，不能变成证据完全无用。'],
 ['Benefits depended partly on staff being able to use the records.','Usable access to records was one condition for gaining benefits.','The records guaranteed benefits without any staff work.','Staff had no need to access records.','Access was required only after benefits had been obtained.','partly强调部分条件，不是单一充分条件。'],
 ['The tool intensified an existing disadvantage.','A disadvantage already present became greater through use of the tool.','The tool removed every previous disadvantage.','No disadvantage existed before the tool.','The disadvantage came only from future plans.','intensify existing区分已有与首次产生。'],
 ['The author supports specific applications while resisting universal claims.','The writer accepts some uses but rejects the idea of a solution for everything.','The writer rejects every possible use.','The writer believes all problems have the same technical answer.','The writer is neutral about every claim.','支持局部用途与反对万能说可同时成立。']
],
match:{title:'Reading a proposal critically',text:'The proposal made a public {{0}}, but had not yet shown how to {{1}} the system in ordinary offices. A narrow {{2}} had been tested; success there did not imply a general {{3}}. Reviewers asked whether the plan might {{4}} an existing problem. They also warned that missing records could {{5}} a reliable result.',pairs:[['pledge','promise','承诺不是已完成。'],['deploy','put into practical use','实际使用与展示不同。'],['domain','field of application','限定应用领域。'],['capability','ability','实际能力。'],['amplify','make more severe','加剧已存在的问题。'],['jeopardise','put at risk','危及不是已经毁掉。']],extras:['prove impossible','make a final decision','remove every disadvantage']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "The small pilot|revealed|missing records|that|a polished demonstration|had concealed,|although|the booking tool|still performed|one routine task|more quickly|than staff|had expected.",
    "subject": "The small pilot",
    "predicate": "revealed",
    "skeleton": "The small pilot revealed missing records.",
    "translation": "小试点揭露了精美演示掩盖的缺记录问题，尽管工具仍比员工预想更快完成一项常规任务。",
    "why": "主句pilot revealed；had concealed修饰records，performed在让步从句。"
  },
  {
    "kind": "backbone",
    "tokens": "Using|a ranking model|in a new setting|requires|a fresh judgement|about|the people|who|may be affected,|not merely|a repetition|of the earlier speed test.",
    "subject": "Using",
    "predicate": "requires",
    "skeleton": "Using a ranking model in a new setting requires a fresh judgement.",
    "translation": "在新场景使用排序模型，需要重新判断受影响的人群，而不只是重复先前速度测试。",
    "why": "动名词Using作主语核心，requires为主句；who从句修饰people。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The office tested|a data-checking routine|before sending requests to the ranking model.|A new dashboard displayed the scores, and|a messaging service|sent applicants a receipt when a form arrived.|Staff also added|a larger screen|so that several reviewers could inspect the same results together.|Although the dashboard made the scores visible and the receipt confirmed delivery,|it|flagged missing fields before an incomplete record could be treated as a complete application, allowing staff to ask for the information rather than silently rank it lower.",
    "antecedent": "a data-checking routine",
    "translation": "办公室先用数据检查程序，再把申请送排序模型；仪表板展示分数，消息服务发回执，大屏幕便于共看。能在不完整记录进入排序前标出缺项的是数据检查程序。",
    "why": "flagged missing fields指数据检查功能，不是显示分数或发送回执。"
  },
  {
    "kind": "reference",
    "focus": "they",
    "tokens": "The pilot involved applicants, data specialists and|the staff responsible for eligibility appeals.|Applicants could correct factual errors in their own forms, while specialists checked whether the software produced the same output from the same input.|An independent review panel later commented on the overall fairness of the process.|The final decision, however, remained within the ordinary administrative procedure.|If an applicant challenged a result and supplied new evidence,|they|could reconsider the eligibility judgement and issue a revised decision, rather than merely change a number on the model’s display.",
    "antecedent": "the staff responsible for eligibility appeals.",
    "translation": "参与者包括申请人、技术员、资格申诉人员，另有评审组。能在新证据下重审资格并发修订决定的是负责申诉的工作人员。",
    "why": "权限线索reconsider eligibility和issue revised decision指向申诉人员，不是仅能改自己资料的申请人。"
  },
  {
    "kind": "logic",
    "text": "The writer acknowledges the promise of the technology but disputes the claim that more data alone will settle every public problem.",
    "q": "哪项符合作者立场？",
    "options": [
      "认可技术潜力，但反对只要更多数据就能解决一切。",
      "否认技术有任何潜力。",
      "认为数据量足够就不必讨论其他条件。",
      "认为所有公共问题均已被解决。"
    ],
    "answer": "认可技术潜力，但反对只要更多数据就能解决一切。",
    "translation": "作者承认技术潜力，但反对更多数据本身就能解决每个公共问题的说法。",
    "why": "acknowledges与disputes针对不同命题。"
  },
  {
    "kind": "logic",
    "text": "A test may reveal that a tool is unsafe in one setting without establishing that it has no useful role anywhere.",
    "q": "一次特定场景失败能说明什么？",
    "options": [
      "该场景存在问题，但不足以否定所有可能用途。",
      "所有用途都已被否定。",
      "所有其他场景必定安全。",
      "没有任何必要再看测试条件。"
    ],
    "answer": "该场景存在问题，但不足以否定所有可能用途。",
    "translation": "测试可揭示某场景不安全，但不足以证明工具在任何地方都无用。",
    "why": "限制否定范围，也不能反推其他场景安全。"
  }
],
evidence:{
  "title": "A library tests an automatic booking assistant",
  "paragraphs": [
    [
      "A library piloted an assistant that suggested available study rooms from a user’s request.",
      "The aim was|to reduce repeated questions at the desk,|not to decide which readers deserved access.",
      "Staff kept|the usual booking route|open throughout the trial."
    ],
    [
      "The first version struggled with requests missing a date.",
      "Instead of treating them as invalid, the revised system asked the reader to add the missing detail.",
      "This change reduced rejected requests without changing the underlying rules for room use."
    ],
    [
      "The team tested the assistant on ordinary messages and on deliberately confusing inputs.",
      "These included|requests containing contradictory dates,|which a simple demonstration had not explored.",
      "A fluent reply was not counted as success if it proposed a room at the wrong time."
    ],
    [
      "The comparison used the same set of requests for staff and the assistant.",
      "Reviewers checked accuracy before looking at response speed.",
      "They logged each error|with the original request,|so that somebody else could reproduce the failure rather than rely on a general description."
    ],
    [
      "The assistant sent reminders, but staff retained authority over disputed bookings.",
      "The report supported continued use|only with that division of responsibility,|rather than recommending automatic control of every library service.",
      "It asked for a further review after the start of the new term, when demand and the range of messages might change."
    ]
  ],
  "questions": [
    [
      "What specific workload was the assistant intended to reduce?",
      0,
      1,
      "",
      "减少柜台重复问答，不是决定读者是否配得使用。"
    ],
    [
      "How did the revision handle an incomplete request?",
      1,
      1,
      "",
      "向读者询问缺项，非自动拒绝。"
    ],
    [
      "What remained available alongside the new assistant?",
      0,
      2,
      "the usual booking route",
      "原预约渠道在试验期间保留，不是只剩自动助手。"
    ],
    [
      "Which test input went beyond a simple demonstration?",
      2,
      1,
      "requests containing contradictory dates,",
      "矛盾日期是刻意增加的测试。"
    ],
    [
      "What accompanied error logs to make failures reproducible?",
      3,
      2,
      "with the original request,",
      "原始请求让别人重现失败。"
    ],
    [
      "What condition qualified the report’s support for continued use?",
      4,
      1,
      "only with that division of responsibility,",
      "继续使用附带系统与人员的权限分工。"
    ]
  ]
},
specials:[
 {kind:'quiz',title:'理解作者论证',rows:[
 ['A writer calls a tool “promising within a clearly defined task”. What is the emphasis?','用途有潜力，但范围必须明确。','任何任务都可以立刻自动化。','已有结果毫无价值。','只要宣传充分就不必测试。','within限定适用范围。'],
 ['A review contrasts a fast answer with a correct answer. What assumption does it question?','速度足以代表质量。','正确性可以被检验。','系统会输出信息。','用户可能提出不同问题。','对比旨在否定快就足够好。'],
 ['A paragraph describes failures caused by incomplete records. Why include it?','说明实际部署受数据条件限制。','证明任何数字记录都不真实。','主张所有文件必须回到纸质。','把责任全部归于提问者。','指出数据条件，不是全盘否定数字化。'],
 ['The ending says a feasible use still requires a separate judgement about whether to adopt it. What is distinguished?','技术上能做与实际是否应做。','所有旧工具与所有新工具。','简单任务与从未存在的任务。','数据数量与文件名称。','can与should须分别判断。']
 ]},
 {kind:'bank',title:'选词摘要',name:'Introducing a service carefully',passage:{title:'A centre’s appointment project',paragraphs:['The centre began by writing down the specific delay it wanted to reduce. Staff then examined whether the existing records were complete enough for the proposed tool. They did not buy a system first and search for a problem later.', 'A small pilot used real but anonymised requests. Staff checked the truth of the suggested appointment before measuring how quickly it was produced. Users could still speak to a person if the request was unusual. The final agreement permitted the system to send simple confirmations but gave staff the last word on eligibility.', 'The review proposed continued checks after launch. A good result during a quiet trial might not represent demand at the busiest time of year. The centre therefore made later expansion conditional on evidence from ordinary use.']},text:'The project first defined {{0}}, then checked {{1}}. In the pilot, {{2}} was assessed before speed. A {{3}} remained available for unusual requests. Final responsibility for eligibility stayed with {{4}}. Any wider use would depend on {{5}}, rather than on a successful demonstration alone.',pairs:[['1','the practical problem','先确定实际问题。'],['2','record completeness','检查现有记录完整度。'],['3','answer accuracy','先正确性后速度。'],['4','human contact route','异常请求仍可找人。'],['5','trained staff','资格决定由工作人员负责。'],['6','evidence from normal operation','扩展依据正常运行证据。']],extras:['advertising impact','automatic eligibility decisions','the quickest reply alone']},
 {kind:'judgement',labels:['YES','NO','NOT GIVEN'],title:'作者观点判断',rows:[
 ['I support testing a small, clearly specified use before expanding it. The successful handling of one task does not establish that the same tool can manage every related decision.','The writer favours testing a limited use before wider adoption.','YES','support testing before expanding直接支持。','作者支持先测试明确的小用途，不把单项成功推广为所有决策能力。'],
 ['A fluent answer can be inaccurate. I would not use the smoothness of its wording as a substitute for checking the facts.','The writer thinks fluent wording guarantees accurate content.','NO','fluent can be inaccurate与guarantees矛盾。','流畅回答可能不准确，不能用措辞顺滑代替事实核查。'],
 ['The proposal provides a timetable for purchase and installation, followed by training for the staff who will use it. The maintenance arrangements are described in a separate document.','The writer believes the installation budget is higher than necessary.','NOT GIVEN','未评价预算是否过高。','提案安排购买安装和培训，维护另有文件。'],
 ['An apparently neutral rule may preserve a disadvantage embedded in earlier records. Removing direct references to a person’s identity is not, by itself, a full solution.','The writer believes deleting identity references alone removes every form of unfairness.','NO','not…a full solution否定完全消除。','看似中立规则可能延续历史记录的不利，仅去身份不是完整方案。'],
 ['A responsible decision should consider those who may lose access as well as those who receive faster replies. Efficiency is a relevant question, but it is not the only one.','The writer thinks effects on disadvantaged users should be part of the evaluation.','YES','consider those who may lose access直接支持。','负责任决策兼顾失去访问机会者与更快收到回复者，效率不是唯一问题。'],
 ['The article compares a public booking system with a private delivery service. It uses these examples to distinguish a narrow technical success from a general claim about intelligence.','The writer thinks public systems always cost more to maintain than private services.','NOT GIVEN','比较目的不是维护成本，未给always成本判断。','作者比较公共预约与私人配送，以区分局部技术成功和一般智能说法。']
 ]}
]});
