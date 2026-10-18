RRReadPack({id:'c19-r-t1-p3',location:{book:19,test:1,part:3},title:'错误信息、判断与纠正',focus:'最初接受与后续核验；预先阻止和事后纠正；可能影响不等于必然；选择、选词摘要及作者观点。',
words:`
misinformation|错误信息；不准确信息|Misinformation can be shared without an intention to deceive.|错误信息可以在无意欺骗时被传播。|The group checked for ___ rather than assume every message was reliable.|小组核查错误信息，不假设每条消息可靠。
inadvertently|无意地；不小心地|She inadvertently copied the wrong date.|她无意抄错了日期。|A helpful person may ___ pass on an inaccurate message.|热心人可能无意转发不准确信息。
strategic|为实现某个目标而安排的|A strategic choice is made to advance a wider aim.|策略性选择旨在推进更大的目标。|The writer asks whether the message served a ___ purpose.|作者追问信息是否服务某种策略目的。
interpersonal bonds|人与人之间的联系|Interpersonal bonds can grow through regular conversation.|人际联系可以通过经常交谈发展。|The project studies ___ rather than the speed of the devices.|项目研究人际联系，而非设备速度。
loom|逐渐显得突出或令人担忧|A risk may loom larger as more people become exposed.|接触者增多时，风险可能显得更突出。|The question began to ___ larger in the discussion.|这个问题在讨论中变得越来越突出。
facilitate|使更容易；促进|A clear index can facilitate finding a source.|清楚索引能让找来源更容易。|The shared folder will ___ access to the original record.|共享文件夹会方便获取原始记录。
unduly|过分地；不当地|A vivid example may unduly influence a judgement.|生动例子可能过度影响判断。|The reviewers tried not to be ___ affected by the headline.|审查者努力不被标题过度影响。
misperception|错误看法；误解|A misperception is a belief that does not match the facts.|误解是不符合事实的看法。|The correction addressed a ___ about when the event happened.|更正针对事件发生时间的误解。
detrimental|有害的；不利的|A detrimental change has an unwelcome effect.|不利变化产生不受欢迎的影响。|The report examines whether the error had a ___ consequence.|报告考察错误是否产生不利后果。
downstream|随后间接产生的|A downstream effect happens later in a connected process.|后续影响在相连过程中稍后发生。|The team considered ___ effects, not only the first response.|团队既考虑后续间接影响，也考虑首次反应。
warrant|值得；足以成为理由|A surprising result may warrant closer checking.|出乎意料结果可能值得仔细核查。|One unusual case can ___ attention without proving a general trend.|一个特殊案例可值得关注，但不能证明总体趋势。
initially|最初；起初|Initially, the group accepted the date on the poster.|起初，小组接受海报上的日期。|The claim sounded plausible ___, before the source was checked.|来源核查前，声称最初听来似乎合理。
counter|反驳；抵消|A clear correction can counter a false statement.|清楚更正可以反驳错误陈述。|The response aims to ___ the mistaken impression.|回应旨在纠正错误印象。
garner|获得；引起|The unusual proposal garnered attention.|不寻常提案引起了关注。|The study may ___ interest even before its results are complete.|研究在结果未完成前也可能引起兴趣。
dilemma|两难问题|A dilemma presents competing choices that are difficult to resolve.|两难问题包含难以解决的相互冲突选择。|The editor faced a ___ between speed and further checking.|编辑在速度与进一步核查之间面临两难。
by default|在未另作判断时自动地|A setting used by default operates unless someone changes it.|默认设置在没有人修改时运行。|The account was included ___ rather than after a separate review.|这项叙述被默认纳入，而非另经审查。
subsequently|随后；在那之后|The label was subsequently corrected.|标签后来被更正。|The first judgement was ___ reconsidered.|最初判断随后被重新考虑。
verify|核实|To verify a statement is to check whether it is accurate.|核实陈述是检查其是否准确。|Please ___ the figure against the original table.|请对照原表核实数字。
skepticism|怀疑；不轻信|Skepticism can involve asking what evidence supports a claim.|怀疑态度可以表现为追问声称的证据。|The exercise practises ___ without rejecting every message automatically.|练习培养不轻信，而非自动拒绝每条信息。
encode|把信息记入或编码|To encode information is to put it into a form a system can store.|编码信息是把信息转成系统能保存的形式。|The model describes how people ___ a new statement.|模型描述人如何把新陈述记入。
preemptive|事先阻止的；预防性的|A preemptive check happens before publication.|预防性检查在发布前进行。|The proposal includes a ___ review rather than only later corrections.|提案包括发布前审查，而非仅事后更正。
post hoc|事后进行的|A post hoc review examines something after it has happened.|事后审查在事情发生后进行。|The team compared ___ detection with checks made beforehand.|团队比较事后发现与事先检查。
compelling|有说服力的；吸引人的|A compelling message can feel persuasive without being accurate.|有说服力的信息可以令人信服，却未必准确。|The story was ___, but the editor still checked the evidence.|故事很有说服力，但编辑仍核查证据。
panacea|能解决一切问题的办法；万能药|A panacea would solve every problem of a given kind.|万能办法能解决某类全部问题。|The author warns that one tool is not a ___.|作者警告一项工具不是万能药。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['initially','subsequently','strategic','verify','compelling'],
contexts:[
{id:'message',title:'A date shared too quickly',words:['misinformation','inadvertently','strategic','interpersonal bonds','loom','facilitate','unduly','misperception','detrimental','downstream','initially','compelling'],paragraphs:[
 'A club member initially copied an old date into a new invitation. The message was {{misinformation}}, but it had been shared {{inadvertently}}, not as a strategic attempt to deceive. A compelling personal note made it easy to trust. Strong {{interpersonal bonds}} did not guarantee an accurate calendar.',
 'A simple shared folder could {{facilitate}} checking, yet the invitation had already spread. Concern began to {{loom}} larger when several groups used the date. The committee tried not to be {{unduly}} influenced by how confident the wording sounded. It needed to correct the {{misperception}}, not argue about who was the nicest person.',
 'The wrong date had a {{detrimental}} effect on planning. Possible {{downstream}} problems included people booking travel before the correction reached them. The case showed why an innocent beginning could still have consequences worth addressing.'
]},
{id:'review',title:'Before and after a notice is published',words:['warrant','counter','garner','dilemma','by default','subsequently','verify','skepticism','encode','preemptive','post hoc','panacea'],paragraphs:[
 'A library team faced a {{dilemma}}: publish quickly or wait for another check. An unusual claim could {{garner}} attention, but attention was not proof. The team decided that unclear information would {{warrant}} a closer look rather than be accepted {{by default}}.',
 'A workshop used a simple memory model to ask how readers {{encode}} a statement. It practised {{skepticism}} by asking for a source, not by declaring everything false. Staff would verify a notice before publication when possible, then subsequently review any new evidence.',
 'The policy combined a {{preemptive}} check with {{post hoc}} detection. A clear correction could {{counter}} an error after publication, but no single method was a {{panacea}}. The team wanted repeated, practical checks rather than a promise that one rule could prevent every mistake.'
]}],
vocab:[
 ['The message was misinformation even though its sender meant to help.\nmisinformation 是？','不准确的信息','必定有意欺骗的信息','任何令人不快的真话','只能在线发布的内容','错误信息不必然出于恶意。'],
 ['The date was inadvertently changed during copying.\ninadvertently 是？','无意地','有计划地','经过正式核实后','按要求必须如此地','无意与故意或核实不同。'],
 ['A familiar source may unduly influence the reader.\nunduly 是？','过分或不当地','完全没有影响地','以适当且充分证据为基础地','只影响打印格式地','强调超出合理程度。'],
 ['The correction targeted a misperception about the place.\nmisperception 是？','对事实的错误看法','对全部信息的刻意隐瞒','尚未读过的材料','仅指视觉故障','认知误解，不限视觉。'],
 ['The error had detrimental effects on planning.\ndetrimental 是？','不利的','尚无任何影响的','只增加收入的','确保每人相同地受益的','有害不说明每个对象同样。'],
 ['The report considered downstream consequences.\ndownstream 是？','后来沿过程产生的','只发生在河下游的','必定在最早阶段的','与原事件完全无关的','这里是后续连锁比喻。'],
 ['The observation warrants further study.\nwarrants 是？','值得或有理由进行','已经替代全部研究','证明没有必要','禁止别人再做','值得研究不等于结论已证。'],
 ['The campaign aimed to counter a false impression.\ncounter 是？','纠正或反驳','增加其传播','默认接受','只计算出现次数','counter针对错误而应对。'],
 ['The issue garnered attention from several groups.\ngarnered 是？','获得引起了','已经准确衡量了','完全排除了','永久失去了','引起关注不说明已验证。'],
 ['The two options created a dilemma.\ndilemma 是？','难以取舍的问题','只有一个显然选择的安排','已解决的数学结论','完全没有任何选项','需要处理冲突选择。'],
 ['The system included new entries by default.\nby default 是？','未另行选择时自动地','每条都经独立核实后','只在被证明错误后','从未纳入地','默认接纳和核实接纳不同。'],
 ['The statement was subsequently revised.\nsubsequently 是？','在那之后','在首次提出前','从未发生过','与原状态完全同时','后续不说明修正已消除全部影响。'],
 ['Reviewers verified the quote against the original letter.\nverified 是？','对照核实','仅因反复出现就相信','只看标题猜测','提前保证所有后果','核实有具体原始依据。'],
 ['Skepticism required checking rather than rejecting everything.\nskepticism 是？','不轻信、要求证据的态度','无条件拒绝一切','无条件接受一切','只关心文字是否好看','怀疑态度不等于全盘拒绝。'],
 ['The notice passed a preemptive check.\npreemptive 是？','发布前预先进行的','只能在损害发生后做的','完全不需信息的','保证未来再无错误的','时点在前，非万能保证。'],
 ['The author rejects a one-time panacea.\npanacea 是？','号称解决一切的万能办法','需要持续检验的有限措施','仅说明一个具体日期','每个小错误的正式名称','批评万能药式思路，不是否定所有措施。']
],
rewrites:[
 ['False information can be shared without deceptive intent.','An inaccurate message need not have been passed on deliberately to mislead.','Every inaccurate message was designed to deceive.','Good intentions guarantee accuracy.','Only deliberate messages can spread.','信息真伪与意图分开。'],
 ['The first reaction may differ from a later judgement.','An initial response can be reconsidered subsequently.','The first and last judgement must always match.','Later checking is impossible.','An initial response proves permanent belief.','先后阶段可以不同。'],
 ['A correction may not remove every earlier effect.','Some consequences can persist after the error has been addressed.','Corrections are therefore always useless.','Every consequence disappears instantly.','The original error must have been intentional.','未消尽不等于无用或必然恶意。'],
 ['The programme detected problems after publication rather than blocking them beforehand.','Its role was post hoc identification, not preemptive prevention.','Every problem was prevented before release.','Nothing was ever checked.','Detection proved there had been no publication.','事前阻止与事后发现不同。'],
 ['A persuasive explanation still needs a reliable evidential basis.','Being compelling does not substitute for support from evidence.','Strong wording guarantees truth.','Evidence matters only for uninteresting messages.','No accurate message can be persuasive.','说服力不是事实充分性。'],
 ['The author recommends coordinated effort over time rather than one final cure.','The response requires sustained combined work, not a single universal remedy.','One action was guaranteed to settle everything.','Long-term work was ruled out as unnecessary.','Coordination means nobody checks their own work.','持续合作不等于一次万能措施。']
],
match:{title:'A notice reviewed in stages',text:'An editor tried to {{0}} the source before publication. A confusing date would {{1}} attention. Readers might accept it {{2}} if they assumed the notice was accurate. A {{3}} check could catch an error first; a {{4}} review could detect it later. Neither was presented as a {{5}}.',pairs:[['verify','check for accuracy','核实。'],['warrant','justify further attention','值得注意。'],['by default','without a separate decision','默认。'],['preemptive','before-the-event','事先。'],['post hoc','after-the-event','事后。'],['panacea','universal cure','万能办法。']],extras:['proof based only on popularity','a guarantee that no error exists','a deliberate intention to deceive']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "Finding|the same claim|on several pages|does not turn|those copies|into|independent evidence,|if|they|all derive|from one mistaken source.",
    "subject": "Finding",
    "predicate": "does not turn",
    "skeleton": "Finding the same claim on several pages does not turn copies into independent evidence.",
    "translation": "若多页都源自同一错源，多处看到相同声称并不使副本成为独立证据。",
    "why": "动名词Finding作主语核心，does not turn保留否定。"
  },
  {
    "kind": "backbone",
    "tokens": "The correction|was published|with|a link|that|allowed|readers|to check|the original record|instead of relying|on|another unsupported assurance.",
    "subject": "The correction",
    "predicate": "was published",
    "skeleton": "The correction was published with a link.",
    "translation": "更正附链接发布，让读者核查原记录，而不是依赖另一个无依据保证。",
    "why": "主句correction was published，allowed属于link定语从句。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The library added|a source-checking link|beneath the online notice.|A new banner made|the page title|more prominent, and|a comment box|allowed readers to ask questions at the bottom.|Staff also changed the colour of the navigation menu to match the rest of the site.|Although the banner attracted attention and the comment box supported discussion,|it|took readers directly to the original timetable so that they could compare the announced date with the underlying record before making plans.",
    "antecedent": "a source-checking link",
    "translation": "图书馆在通知下加来源链接，横幅突出标题，评论框供提问，菜单换色。能直接带到原始时刻表核对日期的是来源链接。",
    "why": "took readers directly to original timetable是link功能。"
  },
  {
    "kind": "reference",
    "focus": "them",
    "tokens": "The editor corrected the newsletter page, then identified|the organisers who had circulated the first announcement.|Several readers had already changed their plans, and a volunteer offered to help update the noticeboard at the hall.|The editor kept a list of those practical consequences but knew that a website change would not necessarily reach everyone.|She contacted|the original intermediaries|directly and asked|them|to pass the correction through the same groups they had used before, so that the new information could follow the route taken by the inaccurate date.",
    "antecedent": "the organisers who had circulated the first announcement.",
    "translation": "编辑更正网页，再识别首次转发通知的组织者。读者已改计划，志愿者愿更告示板。编辑直接联系原中间传播者，请them沿原群组转发更正。",
    "why": "original intermediaries同指首次传播的组织者；动作pass through same groups对应这群人。",
    "accept": [
      "the original intermediaries"
    ]
  },
  {
    "kind": "logic",
    "text": "The writer’s concern that misinformation can influence behaviour is not a claim that every reader always acts on every false message.",
    "q": "原句限制了什么？",
    "options": [
      "可能影响不等于每位读者必定照每条假消息行动。",
      "每位读者总会照假消息做。",
      "错误信息从无任何影响。",
      "只有恶意信息才可能影响。"
    ],
    "answer": "可能影响不等于每位读者必定照每条假消息行动。",
    "translation": "担心错误信息影响行为，不等于断言所有读者总按每条假消息行动。",
    "why": "can不能扩成always every。"
  },
  {
    "kind": "logic",
    "text": "A successful correction is useful even if some downstream consequences remain.",
    "q": "作者如何看待不完全纠正？",
    "options": [
      "仍可能有价值，不能因残余影响就判无用。",
      "只要还有影响就完全无用。",
      "任何纠正都不需要资源。",
      "剩余影响证明纠正从未发布。"
    ],
    "answer": "仍可能有价值，不能因残余影响就判无用。",
    "translation": "成功纠正即使仍有后续影响，也有用。",
    "why": "效果有限与价值为零不同。"
  }
],
evidence:{
  "title": "Correcting an inaccurate community notice",
  "paragraphs": [
    [
      "A community newsletter printed an old opening date for a repaired hall.",
      "The editor reviewed the case|to improve source checking,|not to claim that the volunteer who supplied it had intended to deceive.",
      "The date had been copied from|an earlier planning document,|whose provisional status had been lost when the information was placed in a public announcement."
    ],
    [
      "The error was repeated on two local pages before a reader questioned it.",
      "The editor compared the notice with the signed completion record and confirmed the mistake.",
      "Repeated appearance had not provided independent confirmation because the pages shared the same original source."
    ],
    [
      "A correction was placed at the top of each affected page.",
      "It included|a link to the current record|so that readers could check the replacement date.",
      "The old wording was not silently removed without telling people what had changed."
    ],
    [
      "Some residents had already booked travel using the first announcement.",
      "The editor contacted organisers|who had shared the earlier version,|rather than assuming that a new website post would automatically reach everyone.",
      "The review distinguished correcting the text from undoing all practical consequences."
    ],
    [
      "The next issue required a named source for each date.",
      "Staff also kept|a log of subsequent changes|to make later corrections traceable.",
      "The report treated these as repeated checks, not a one-time guarantee that every future notice would be accurate."
    ]
  ],
  "questions": [
    [
      "What was the purpose of reviewing the mistake?",
      0,
      1,
      "",
      "改善核查，不归咎志愿者必有欺骗意图。"
    ],
    [
      "Why was repetition on several pages not independent confirmation?",
      1,
      2,
      "",
      "各页共享同一错误源。"
    ],
    [
      "What source supplied the inaccurate date?",
      0,
      2,
      "an earlier planning document,",
      "旧规划文档是错误日期来源，临时性质在复制中丢失。"
    ],
    [
      "What let readers inspect the replacement date themselves?",
      2,
      1,
      "a link to the current record",
      "原记录链接便于独立核对。"
    ],
    [
      "Which intermediaries were contacted to broaden correction reach?",
      3,
      1,
      "who had shared the earlier version,",
      "联系转发者，不假设新帖自动触达。"
    ],
    [
      "What made later amendments traceable?",
      4,
      1,
      "a log of subsequent changes",
      "保存后续改动日志。"
    ]
  ]
},
specials:[
 {kind:'quiz',title:'理解论证与限定',rows:[
 ['A text distinguishes deliberate deception from inaccurate sharing. What does it avoid assuming?','所有错误信息都由恶意产生。','错误信息可以被分享。','信息有时需要核查。','善意的人也可能犯错。','区分意图与准确性。'],
 ['An editor says repetition is not independent confirmation when copies share a source. What matters?','来源是否独立，而不仅是出现次数。','文本字体是否一样。','每页浏览量是否最高。','有几种宣传颜色。','共同错误源可导致多处重复。'],
 ['A correction is described as useful but incomplete. Which reading fits?','能减少问题，但未必消除全部后果。','完全没有价值。','保证每个人都立即改变行为。','证明错误从未存在。','有限有效与无效不能混同。'],
 ['Why might a writer reject a panacea?','问题需要持续组合措施，而非一次万能解法。','所有方案都必须停止。','只要新技术就不需人。','过去从未有错误信息。','反对万能药式保证，不是否认措施。']
 ]},
 {kind:'bank',title:'选词摘要',name:'How the newsletter changed its checks',passage:{title:'A correction policy',paragraphs:['The newsletter first identified the original document behind an inaccurate date. It then corrected the announcement visibly and linked to the current record. This let readers compare the revised information with its source rather than rely on a confident statement alone.', 'Because some people had already acted, the editor asked those who had circulated the first version to pass on the correction too. The next issue required a source for each event date and kept a record of later amendments. The aim was continuing verification, not a promise that mistakes would become impossible.']},text:'The editor located {{0}} before correcting the notice. The change was made {{1}} and connected to {{2}}. People who had distributed the old version helped with {{3}}. Future dates needed {{4}}, while amendments went into a record. The policy emphasised {{5}} rather than a permanent guarantee.',pairs:[['1','the original document','先找源文档。'],['2','visibly','更正显眼而非偷偷删改。'],['3','the current record','链接当前记录。'],['4','sharing the correction','转发链传播更正。'],['5','a source reference','未来日期需来源。'],['6','continuing verification','持续核验，不是万能保证。']],extras:['a promise of perfect accuracy','the most popular headline','automatic acceptance without checking']},
 {kind:'judgement',title:'作者观点判断',labels:['YES','NO','NOT GIVEN'],rows:[
 ['I would not infer deceptive intent from an inaccurate date alone. An honest copying mistake can still require an urgent correction.','The writer thinks an error can need correction without proving an intention to deceive.','YES','honest mistake still require correction直接支持。','单一错日期不证明故意，诚实抄错仍可能需急更正。'],
 ['A clear explanation helps, but persuasive language is not an alternative to evidence. I would still ask where the information came from.','The writer treats persuasive wording as sufficient proof.','NO','not alternative to evidence与sufficient proof冲突。','清楚措辞有帮助，但不能代替证据，仍需问来源。'],
 ['The article describes two printed notices and several online copies. Its final section discusses how corrections can reach people who shared the original.','The writer thinks printing notices is cheaper than publishing them online.','NOT GIVEN','媒介描述没有费用评价。','文中有纸质和网上副本，末段讨论更正触达。'],
 ['A correction can change the record while leaving some earlier actions difficult to reverse. That is a reason for broader follow-up, not for abandoning correction.','The writer believes a correction is pointless unless it reverses every earlier consequence.','NO','明确不是放弃理由。','改记录不能轻易逆转某些行动，因此需要跟进而非放弃纠正。'],
 ['Pre-publication checks and later monitoring answer different needs. I favour using both rather than expecting either one to do everything.','The writer supports combining checks before and after publication.','YES','favour both明确支持组合。','事前检查与事后监测服务不同需要，作者支持合用。'],
 ['The review recommends keeping a dated log of revisions and a named contact for questions. It does not assign responsibility solely to the person who first copied a date.','The writer believes revision logs should be held for exactly one calendar year.','NOT GIVEN','有日期日志不说明保存一年观点。','建议有日期改动日志和联系人，不把责任全归首次抄写者。']
 ]}
]});
