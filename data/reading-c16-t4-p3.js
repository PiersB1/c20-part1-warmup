RRReadPack({id:'c16-r-t4-p3',location:{book:16,test:4,part:3},title:'对人工智能的态度：信任、偏见与参与',focus:'预测表现与接受度；同意或冲突的双向困境；媒体显著性、态度两极化；经验、透明与有限控制；标题、选择、作者观点。',
words:`
forecast|预测；对未来结果的判断|A forecast estimates what is likely to happen later.|预测估计以后可能发生什么。|A good ___ did not automatically make users comfortable with the system.|预测好不自动让用户安心接受系统。
reluctance|不情愿；不愿接受的态度|Reluctance is hesitation or unwillingness to act.|不情愿是犹豫或不愿行动。|The study examined ___ to follow automated advice.|研究考察不愿采纳自动建议的态度。
expertise|专业知识和熟练经验|Expertise can guide a judgement built on training and experience.|专业知识可指导基于训练经验的判断。|Users trusted human ___ even when comparing it with a system.|使用者信任人的专长，即使与系统比较。
coincide with|与……一致；相吻合|Advice that coincides with an opinion agrees with it.|与意见相合的建议和该意见一致。|The recommendation could ___ the user’s own view.|建议可能与使用者观点一致。
contradict|与……冲突；反驳|To contradict an opinion is to give an incompatible account.|与意见矛盾是给出不相容说法。|The system might ___ an expert’s initial judgement.|系统可能与专家初判冲突。
competent|胜任的；有能力完成任务的|A competent system can perform the relevant task adequately.|胜任系统能充分完成相关任务。|A disagreement did not by itself show the system was not ___.|意见不同本身不证明系统不胜任。
plausible|有道理而可能成立的|A plausible recommendation has a reasonable possible basis.|合理建议有可能站得住脚的依据。|The adviser wanted to explain why the recommendation was ___.|顾问想解释建议为何可能合理。
outlandish|看起来离谱的；异乎寻常的|An outlandish suggestion seems very strange or difficult to accept.|离奇建议看起来很奇怪或难接受。|Users called the result ___ before seeing its explanation.|用户看解释前称结果离谱。
suspicion|怀疑；不信任|Suspicion is a feeling that something may be wrong or unreliable.|疑心是觉得某物可能不对或不可靠。|A hidden process could increase ___.|隐藏过程可能增加怀疑。
reliability|可靠性；持续值得依赖的表现|Reliability concerns whether performance can be depended on over time.|可靠性关注长期表现是否值得依赖。|The trial examined ___ rather than one attractive example.|试验考察可靠性，不只一个好看例子。
psychological safety|依赖他人或系统时的心理安全感|Psychological safety here means feeling secure enough to rely on a judgement.|此处心理安全感是觉得可安心依赖判断。|Familiar explanations could support ___ without proving every output correct.|熟悉解释可增安心感，不证明所有输出对。
unfamiliar|不熟悉的|An unfamiliar process is one a person does not yet know well.|不熟悉过程是尚未充分了解的过程。|The system seemed ___ despite a strong performance claim.|尽管性能宣传强，系统仍显陌生。
losing control|失去掌控感或控制权|Losing control means having less ability to direct what happens.|失去控制是更难左右发生什么。|The concern involved ___ over decisions.|顾虑涉及决策掌控减弱。
disproportionate|不成比例的；明显过多或过少的|Disproportionate attention gives one kind of event more weight than its share warrants.|不成比例关注给某类事件超出其占比的分量。|The review considered ___ coverage of failures.|评论考察对失败不成比例的报道。
foolproof|几乎不会因操作失误而失灵的；万无一失的|Calling a system foolproof makes a strong claim about its resistance to error.|说系统万无一失，对抗错误能力是很强的主张。|The writer did not describe the system as ___.|作者没说系统万无一失。
polarise|使观点两极分化|To polarise opinions is to move people towards more opposed positions.|两极分化让人趋向更对立立场。|The same material could ___ responses rather than make everyone more negative.|同一材料可能使意见两极化，不是让每个人都更负面。
confirmation bias|确认偏误；偏找支持已有看法的证据|Confirmation bias favours information that supports an existing belief.|确认偏误偏重支持既有信念的信息。|The analysis considered ___ in how people read the example.|分析考虑人们看例子时的确认偏误。
entrenched attitude|根深蒂固的态度|An entrenched attitude is established firmly and hard to change.|固化态度牢固存在、难以改变。|One demonstration might not reverse an ___.|一次演示未必逆转根深蒂固态度。
transparency report|透明度报告；公开说明系统相关做法的报告|A transparency report makes selected practices or requests open to examination.|透明度报告公开某些做法或请求供查验。|The proposal included a ___ rather than only a claim of trustworthiness.|提案含公开说明报告，不只有可信自称。
surveillance|监视；对活动的持续观察|Surveillance monitors activities or people over time.|监视持续观察活动或人。|The report discussed requests involving ___.|报告讨论涉及监视的请求。
disclosure|公开披露；公布原来未公开的信息|Disclosure makes information known to others.|披露把信息公开告知别人。|The policy required ___ of relevant requests.|政策要求披露有关请求。
user control|用户可参与调整或决定的权力|User control gives people some influence over how a system is used.|用户控制让人对系统使用有一定影响。|The study examined a limited degree of ___.|研究考察有限用户控制。
modify|修改；调整部分内容|To modify a system is to change some part of it.|修改系统是改变其中一部分。|Participants could ___ a setting without redesigning the whole model.|参与者可调一个设置，不必重建整个模型。
implementation|实施；实际部署和使用方式|Implementation concerns how an idea or system is put into use.|实施关心想法或系统如何实际用起来。|Users had some responsibility for ___.|用户对实际使用方式有部分责任。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['forecast','competent','unfamiliar','suspicion','modify'],
contexts:[{id:'judgement',title:'When advice agrees, and when it does not',words:['forecast','reluctance','expertise','coincide with','contradict','competent','plausible','outlandish','suspicion','reliability','psychological safety','unfamiliar'],paragraphs:[
'A system made a useful forecast, yet some users showed {{reluctance}} to follow it. They trusted familiar human {{expertise}}. The automated process remained unfamiliar, and not knowing its basis could create suspicion even when a performance comparison looked encouraging.',
'A recommendation could {{coincide with}} a user’s opinion or {{contradict}} it. In the first case, the user might see no added value; in the second, the result might seem {{outlandish}}. Neither reaction by itself established whether the system was competent or the recommendation {{plausible}}.',
'The review separated {{reliability}} from one impressive success and {{psychological safety}} from proof of correctness. An explanation could help someone understand a result without requiring agreement with every output. The group wanted evidence and a way to question decisions, rather than turn either familiarity or strangeness into an automatic judgement about quality.'
]},{id:'attitudes',title:'Participation and openness',words:['losing control','disproportionate','foolproof','polarise','confirmation bias','entrenched attitude','transparency report','surveillance','disclosure','user control','modify','implementation'],paragraphs:[
'A study examined feelings of {{losing control}}. Failure stories received {{disproportionate}} attention, while successful routine use was less visible. This did not make the system {{foolproof}} or prove the stories false; it raised a question about the impression left by uneven coverage.',
'The same example could {{polarise}} a group. Through {{confirmation bias}}, people might use it to strengthen an {{entrenched attitude}} rather than all move towards the same conclusion. The group therefore distinguished more extreme positions from a uniform increase in dislike.',
'A proposal for a {{transparency report}} included {{disclosure}} of relevant {{surveillance}} requests. Another trial offered limited {{user control}}: people could modify one setting and share responsibility for {{implementation}}. Such changes might support acceptance, but the report still needed to examine what happened rather than assume that satisfaction and objective accuracy were the same result.'
]}],
vocab:[
['Users showed reluctance despite a good forecast.\nreluctance 是？','犹豫或不愿采纳的态度','已经证明预测一定错误','每个人都高兴接受的结果','系统完全没有任何输出','接受态度与性能分开。'],
['The advice coincided with the expert’s view.\ncoincided with 在这里是？','内容与观点相吻合','只在同一小时发生','必定由专家亲手写成','已经和观点完全相反','此处内容一致，非时间专义。'],
['The system contradicted the initial opinion.\ncontradicted 表示？','给出不相容说法','逐字完全重复意见','必定被证明自己错','自动取消使用者的权利','冲突本身不定谁真。'],
['The system was judged competent.\ncompetent 表示？','有能力充分完成相关任务','所有任务都永不犯错','每个用户都必须喜欢','只因为名字熟悉就准确','能力范围有界，不等万无一失。'],
['The explanation made the result plausible.\nplausible 表示？','有合理可能成立的依据','每项细节已经最终无争议','只是所有用户最先喜欢的','一定完全相反于任何证据','合理可能非最终证实。'],
['Users called the recommendation outlandish.\noutlandish 表示？','看起来离奇难接受','已经用实验确认绝对错误','与每人意见都完全一致','只在国外制造的','观感奇怪不直接证伪。'],
['The study examined reliability.\nreliability 是？','表现能否持续值得依赖','只看一次受欢迎程度','只看展示画面漂亮与否','用户完全掌控每行代码的程度','稳定性能与偏好控制不同。'],
['The process supported psychological safety.\n此处指？','人觉得可以安心依赖的感受','已经证明每项输出永远正确','所有用户都无须理解任何内容','每个复杂问题都被解决','感受与客观准确率分开。'],
['Failures received disproportionate coverage.\ndisproportionate 表示？','相对其占比或重要性明显不成比例','每条报道已被证明造假','只说明报道在晚上出现','每种事件获得完全相同分量','份量偏差不等事实失真。'],
['No system is described as foolproof.\nfoolproof 表示？','声称几乎不会因错误操作等失灵','只表示第一次演示成功','所有用户都已经理解原理','尚未开始任何测试','强保证不能凭单例。'],
['The material polarised opinions.\npolarised 表示？','让立场趋向更对立两极','使每个人都同样更讨厌','让所有人达到相同中立立场','证明所有观点都已消失','分化方向不一。'],
['Responses showed confirmation bias.\nconfirmation bias 是？','偏重支持自己已有看法的信息','公平地把反证和支持一并权衡','所有人都已经改变观点','仅按仪器数据不作任何判断','选择性证据使用。'],
['The attitude was entrenched.\nentrenched attitude 是？','牢固难改的看法','刚刚听到且未形成的念头','已经确定唯一正确的结论','所有人完全相同的偏好','固化程度不定真伪。'],
['A transparency report was proposed.\ntransparency report 是？','公开系统相关做法供人检查的报告','保证用户自动同意的命令','只有销售广告而无可查资料','只因纸张透明就算的文件','公开可查与自夸不同。'],
['The study allowed limited user control.\nuser control 指？','使用者对部分使用方式有影响','每人必须重写整个算法','已经保证每项客观性能提高','完全没有任何参与权','有限参与不等全重建或保性能。'],
['Participants could modify one setting.\nmodify 表示？','改变一部分设置','必须把整个系统全部重造','只看着而不能改任何东西','证明使用者已掌握每个内部细节','部分调整不要求全知。']
],
rewrites:[
['Good forecasts do not automatically produce trust.','Objective performance and willingness to rely on advice are separate questions.','Any accurate forecast guarantees universal acceptance.','Distrust proves every forecast is wrong.','Performance and attitude are the same measure.','性能与信赖不同。'],
['Agreement can seem redundant, while disagreement can seem incompetent.','Two different reactions can leave the system’s value unrecognised.','Every agreement proves the system adds unique information.','Any disagreement proves the system lacks ability.','The two reactions establish which judgement is correct.','两向困境是反应模式非真值判决。'],
['Uneven attention to failure can shape impressions without all stories being false.','Salience and factual accuracy should not be conflated.','Disproportionate coverage means every report was invented.','All events receive equal public notice.','Any true story gives a complete picture of overall reliability.','显著性与真假分开。'],
['The same material can strengthen existing views in opposing directions.','Polarisation need not mean everyone becomes more negative.','Every participant must change towards the same position.','A positive portrayal guarantees all sceptics become optimistic.','Stronger disagreement means no previous attitudes existed.','极化非单向。'],
['Some influence over implementation may improve acceptance.','Limited participation can affect willingness to use a system without requiring full technical understanding.','Every user must understand all internal workings first.','Any control guarantees every output is objectively more accurate.','Participation has already been proved identical in all settings.','接受度与准确度、全理解分别看。'],
['A transparency proposal offers more basis for scrutiny rather than a demand for blind trust.','Explaining purposes and practices can help users evaluate decisions.','Publishing a report makes every criticism impossible.','Transparency means hiding all requests.','A report is automatically proof of universal competence.','公开便于评估非自动保真。']
],
match:{title:'Understanding a response to automated advice',text:'{{0}} persisted despite useful predictions. A recommendation could {{1}} an opinion or {{2}} it. Repeated failure stories could have {{3}} visibility. {{4}} might then strengthen an {{5}}.',pairs:[['Reluctance','unwillingness to rely on advice','不情愿。'],['coincide with','agree with','相吻合。'],['contradict','conflict with','冲突。'],['disproportionate','unequal to the share or weight warranted','不成比例。'],['confirmation bias','favouring information that supports an existing belief','确认偏误。'],['entrenched attitude','firmly established view','固化态度。']],extras:['proof that every report is false','a guarantee of one common direction of opinion','the same result as fully understanding every algorithm']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "The confidence|that users place in a recommendation|does not depend|only on|how accurately|the system|has performed.",
    "subject": "The confidence",
    "predicate": "does not depend",
    "skeleton": "User confidence does not depend only on accuracy.",
    "translation": "用户对建议的信心不只取决于系统过去多准确。",
    "why": "does not depend主句，place和has performed在从句。"
  },
  {
    "kind": "backbone",
    "tokens": "Allowing people to adjust a limited part of the procedure|may increase|acceptance|without|requiring|a complete understanding of its internal design.",
    "subject": "Allowing people to adjust a limited part of the procedure",
    "predicate": "may increase",
    "skeleton": "Allowing limited adjustment may increase acceptance.",
    "translation": "允许用户调整有限流程部分，可能增接受度，不要求全懂内部设计。",
    "why": "Allowing动名词主语，may increase主句。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The team compared|a report explaining the purposes and limits of a ranking procedure|with a polished display, a short success story and a page of aggregate scores.|The display made the interface attractive, while the story supplied one example and the scores described measured performance.|None alone revealed the same account of why the procedure was used.|By making that purpose and the boundaries open to inspection,|it|gave users more basis to question the system rather than ask them to accept every recommendation merely because the screen looked convincing or one past example had worked well.",
    "antecedent": "a report explaining the purposes and limits of a ranking procedure",
    "translation": "用途边界报告、漂亮界面、成功故事、总体分表中，公开为何用及边界的是报告，帮助质疑非凭外观盲信。",
    "why": "purposeboundariesinspection对应report。"
  },
  {
    "kind": "reference",
    "focus": "the latter",
    "tokens": "The reviewer distinguished|an improvement in how satisfied people felt with a decision process|from|an improvement in the objective accuracy of its results.|A trial allowing a small adjustment reported a change in acceptance, and the team welcomed that observation.|Some readers treated any higher satisfaction as if it automatically established a better forecast.|The reviewer explained that|the latter|needed its own measurement, so a result about willingness to use the system should retain that meaning rather than become a different claim about how often the output matched what actually happened.",
    "antecedent": "an improvement in the objective accuracy of its results.",
    "translation": "满意提升与准确率提升不同。后者需独立测，接受度变化不自动更准。",
    "why": "latter客观准确率。"
  },
  {
    "kind": "logic",
    "text": "After the same presentation, enthusiasts became more positive and sceptics became more guarded.",
    "q": "总体发生什么？",
    "options": [
      "已有立场两极分化，不是每人都同向。",
      "全部人都更消极。",
      "全部人都趋向相同中立。",
      "先前所有态度都不存在。"
    ],
    "answer": "已有立场两极分化，不是每人都同向。",
    "translation": "同材料强化不同原立场。",
    "why": "polarise非统一变坏。"
  },
  {
    "kind": "logic",
    "text": "The author says failures attract more attention than routine successes, not that all failure accounts are inaccurate.",
    "q": "该保留哪项？",
    "options": [
      "报道份量不均与报道真假是两回事。",
      "多报失败就证明全是假。",
      "真实一例就证明总体可靠性。",
      "只要成功不显眼就未曾发生。"
    ],
    "answer": "报道份量不均与报道真假是两回事。",
    "translation": "显著度不等准确性。",
    "why": "两个评价维度。"
  }
],
evidence:{title:'A venue tests an automated recommendation system',paragraphs:[
['A venue asked staff to consider an automated system that recommended how incoming requests should be arranged.','The review aimed|to compare performance with willingness to rely on it,|rather than assume a favourable score answered every question about trust.','It recorded users’ reasons as well as how often the recommendations fitted the stated target.'],
['When advice agreed with staff, some saw little added value.','When it disagreed, some doubted the system’s competence before examining its reasons.','The review distinguished|a reaction to disagreement from evidence of error|so that neither agreement nor conflict would automatically settle which judgement was better supported.'],
['A striking failure received repeated attention while ordinary successful cases rarely became stories.','The team did not conclude that every failure report was false.','It examined|the balance of attention given to different outcomes|as a possible influence on impressions of overall reliability.'],
['After a shared presentation, supporters became more enthusiastic and sceptics more guarded.','The same material had strengthened different existing positions rather than move everyone in one direction.','The review identified|polarisation rather than a uniform negative shift|when describing the change in attitudes.'],
['A later trial let users adjust one limited setting and see an explanation of the procedure’s purpose.','Participants reported greater acceptance, which the team kept separate from a claim of improved accuracy.','The next evaluation would measure|both user response and objective performance|before deciding which part of the new arrangement explained each result, instead of convert one kind of benefit into evidence of every other one.']
],questions:[
['Which two outcomes did the review compare?',0,1,'','性能与愿依赖。'],['What happened when advice agreed?',1,0,'','部分觉得无增值。'],['What distinction applied to a conflicting recommendation?',1,2,'a reaction to disagreement from evidence of error','反应不等错误证据。'],['What media-like factor did the team examine?',2,2,'the balance of attention given to different outcomes','不同结果注意比。'],['How were the changing attitudes described?',3,2,'polarisation rather than a uniform negative shift','极化而非全负。'],['What would the next evaluation measure?',4,2,'both user response and objective performance','接受与性能独测。']
]},
specials:[
{kind:'matching',title:'段落标题匹配',instruction:'选择概括整段主旨的标题；有多余选项。',passage:{title:'Understanding trust in a recommendation system',paragraphs:[
{label:'A',text:'The system’s test performance looked promising, but the venue still found hesitation among users. A good forecast and a willingness to follow it were not automatically the same result. The review therefore began by identifying a gap between capability and acceptance.'},
{label:'B',text:'Advice matching staff opinion could seem unnecessary, while different advice could seem incompetent. Without an understandable reason, users could reject value in either case. This created a difficult path for recommendations, not a direct proof about which side was right.'},
{label:'C',text:'Familiar human decisions could feel safer than an unfamiliar procedure whose basis was hard to inspect. Repeated failure stories also drew attention away from routine success. These influences helped explain reactions without requiring every story to be false.'},
{label:'D',text:'A shared presentation strengthened prior views in opposing directions. Supporters became more enthusiastic and sceptics more guarded. The review treated this as a use of evidence shaped by existing beliefs rather than a single uniform decline in opinion.'},
{label:'E',text:'A proposal made the purpose, limits and selected practices open to examination. The aim was to give users grounds for understanding and questioning decisions. It did not ask them to accept every result simply because a report had been published.'},
{label:'F',text:'Another trial gave users limited influence over one setting. Acceptance rose, although objective accuracy still needed separate assessment. Participation could matter without requiring everyone to understand or redesign the entire internal system.'}
]},choices:[{id:'i',label:'A gap between performance and acceptance'},{id:'ii',label:'Resistance whether advice agrees or conflicts'},{id:'iii',label:'Familiarity and selective visibility shaping reactions'},{id:'iv',label:'Existing views strengthen in opposing directions'},{id:'v',label:'Opening purposes and practices to examination'},{id:'vi',label:'Limited participation as a route to greater acceptance'},{id:'vii',label:'Proof that all failures were invented'},{id:'viii',label:'A guarantee that satisfaction measures accuracy'}],rows:[['Paragraph A','i','全段性能接受差。'],['Paragraph B','ii','同与异均可能不接受。'],['Paragraph C','iii','陌生及失败显著。'],['Paragraph D','iv','两极分化。'],['Paragraph E','v','透明可查。'],['Paragraph F','vi','参与改善接受。']]},
{kind:'quiz',title:'观点选择',rows:[
['The system performs well but users hesitate. What does the opening highlight?','A problem of acceptance that performance alone has not resolved.','A complete solution requiring no further work.','Proof that every forecast was wrong.','The claim that users have no existing opinions.','指出问题，不是已经给完解决法。'],
['Users find an unexplained process unsettling. Which issue is most relevant?','Difficulty understanding the basis and feeling less control.','Proof that every unfamiliar process is inaccurate.','A guarantee that human experts never err.','The fact that all users have studied the complete algorithm.','理解控制感与真值分别看。'],
['Failure stories receive greater attention than routine successes. What is claimed?','The public impression may be shaped by uneven visibility.','Every failure account is necessarily fabricated.','All successes are equally prominent.','The total failure rate is established solely by the number of headlines.','报道分量非真假或可靠率直接统计。']
]},
{kind:'judgement',title:'作者观点判断',labels:['YES','NO','NOT GIVEN'],rows:[
['I regard useful performance as important, but not a guarantee that people will immediately trust the advice.','The author separates capability from automatic acceptance.','YES','明确非保信任。','性能重要但接受非自动。'],
['The same presentation made supporters more positive and sceptics more guarded; I would not call this a uniform movement towards dislike.','The author says all participants became more negative.','NO','明确双向极化。','支持更正怀疑更慎。'],
['The essay discusses the influence of media examples and the way prior beliefs shape their interpretation.','The author predicts all future entertainment will portray AI more positively.','NOT GIVEN','未给娱乐未来方向。','讨论媒体与既有看法。'],
['Giving users some influence over use can improve acceptance without demanding that they understand every internal step.','The author sees possible value in limited user participation.','YES','明确有限参与可有用。','不需全懂内部。'],
['I would measure objective accuracy separately from reported satisfaction rather than treat one as the other.','The author thinks satisfaction alone proves improved accuracy.','NO','明确分开测。','满意非准确。'],
['The review supports examining explanations and experience when evaluating reluctance to use a system.','The author believes every reluctant user has never used any digital technology.','NOT GIVEN','无所有人的使用史。','考察解释经验不排每人履历。']
]}
]});
