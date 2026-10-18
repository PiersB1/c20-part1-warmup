RRReadPack({id:'c21-r-t2-p1',location:{book:21,test:2,part:1},title:'动物睡眠与梦境证据',focus:'行为与内在体验的区别；证据强度、物种范围；一词表格及TRUE/FALSE/NOT GIVEN。',
words:`
electrode|电极（记录电信号的小装置）|An electrode can record small electrical signals.|电极可以记录微小电信号。|The technician attached an ___ before starting the recording.|技术员开始记录前贴上一个电极。
twitch|轻微抽动|A sleeping dog's foot may twitch briefly.|睡着的狗脚部可能短暂抽动。|The observer saw one ear ___ and noted the time.|观察者看见一只耳朵轻微抽动，记下了时间。
paralysed|无法活动的；麻痹的|A paralysed muscle cannot move normally.|麻痹的肌肉不能正常活动。|The report distinguished a ___ limb from one that was simply resting.|报告区分了无法活动的肢体和仅在休息的肢体。
vivid|生动清晰的|A vivid memory can feel very clear.|生动的记忆能让人感到非常清晰。|She gave a ___ description full of colour and detail.|她给出了充满颜色和细节的生动描述。
maze|迷宫|A maze has many paths that can confuse a visitor.|迷宫有许多会让进入者困惑的路。|The animal learned a route through the ___.|动物学会了一条穿过迷宫的路线。
alternate|交替|The two lights alternate, with one on while the other is off.|两盏灯交替亮起，一盏亮时另一盏灭。|Periods of activity ___ with periods of rest.|活动时段与休息时段交替出现。
processing|处理信息|Processing a signal means working on the information it carries.|处理信号是对其中的信息作处理。|The model compares ___ of sound with responses to light.|模型比较声音信息处理与对光的反应。
visual|视觉的|Visual information reaches us through sight.|视觉信息通过视力传来。|The test uses ___ clues rather than spoken instructions.|测试使用视觉线索，不用口头指令。
vibrations|振动|Vibrations can pass through a surface when it is touched.|表面受到触碰时，振动可以沿表面传播。|The equipment detected ___ too small for us to feel.|设备检测到了我们感觉不到的微小振动。
dominant|占主导地位的|The dominant signal is stronger than the others.|主导信号比其他信号更强。|Smell was the ___ source of information in this task.|在这个任务中，气味是主要的信息来源。
navigate|辨路；确定方向并移动|We use landmarks to navigate through an unfamiliar town.|我们借助地标在陌生城镇辨路。|The animal can ___ without relying only on sight.|动物可以不只依赖视觉来辨路。
predator|捕食者|A predator hunts other animals for food.|捕食者猎取其他动物作为食物。|The small creature hid when a ___ came near.|捕食者靠近时，小动物躲了起来。
universal|普遍存在于所有对象的|A universal rule applies to every case.|普遍规则适用于每个案例。|A response found in one species is not necessarily ___.|一个物种有的反应不一定在所有物种中存在。
vulnerable|容易受伤害的|A young animal may be vulnerable without shelter.|幼小动物没有庇护时可能容易受伤。|The equipment was ___ to damage from water.|设备容易被水损坏。
integrate|整合；融入|We integrate the new notes into an existing record.|我们把新笔记整合进现有记录。|The team will ___ several sources instead of using only one.|团队将整合几个来源，不只使用一个。
outward|外在可观察的|An outward sign can be seen by another person.|外在迹象可以被别人看见。|The study recorded ___ behaviour rather than private feelings.|研究记录外在行为，而不是个人内在感受。
internal|内在的；内部的|Internal activity happens inside the body or system.|内部活动发生在身体或系统里面。|An external movement does not reveal every ___ process.|外部动作不能揭示每项内部过程。
interpret|解读|People can interpret the same movement in different ways.|人们可能以不同方式解读同一个动作。|Do not ___ a quiet sound as proof of fear without other evidence.|没有其他证据，不要把轻声解读为害怕的证明。
insight|对问题的新认识|The interview gave us insight into how the work was done.|访谈让我们对工作如何完成有了新认识。|The comparison may offer ___ into an unfamiliar behaviour.|比较可能让我们对陌生行为获得新认识。
apparently|看起来似乎；表面上|The apparently empty box still contained a tiny insect.|看似空的盒子里仍有一只小昆虫。|The animal was ___ asleep, but further checks were needed.|动物看似睡着了，但需要进一步核查。
brain imaging|脑部成像|Brain imaging produces pictures of activity or structure in the brain.|脑部成像产生大脑活动或结构的图像。|The team used ___ alongside notes about visible movement.|团队把脑部成像与可见动作记录结合使用。
replay|重现；再次播放|The recorder can replay the sound after the event.|记录仪可以在事件后再次播放声音。|The computer will ___ the earlier pattern for comparison.|计算机将重现先前模式，以便比较。
shed light on|帮助解释；使更清楚|A new clue may shed light on an old question.|新线索可能帮助解释旧问题。|The findings could ___ why the response differs between groups.|研究结果可能帮助解释为什么各组反应不同。
moderately|中等程度地；适度地|The task was moderately difficult, not extremely hard.|任务难度中等，不是极难。|The room was ___ warm rather than very hot.|房间温度适中偏暖，不是非常热。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['maze','visual','predator','internal','moderately'],
contexts:[
{id:'signals',title:'Watching without guessing',words:['electrode','twitch','paralysed','vivid','maze','alternate','processing','visual','vibrations','dominant','navigate','predator'],paragraphs:[
 'At a science club, we watched a recording rather than testing a real animal ourselves. A small {{electrode}} had recorded electrical signals. The screen showed active and quieter periods that seemed to {{alternate}}. We saw a foot {{twitch}}, but the tutor warned us not to describe the rest of the body as {{paralysed}} merely because it was still. Being still and being unable to move were different claims.',
 'The next recording showed an animal learning a maze. Visual markers helped it {{navigate}}, but they were not the only possible clues. Sounds and {{vibrations}} could also carry information. We asked which source was {{dominant}}, rather than assume sight mattered most because it mattered to us. The task involved {{processing}} different signals, not simply seeing a bright object.',
 'One pupil gave a {{vivid}} account of what the animal might have experienced. It was an interesting story, but we separated it from what we had actually observed. We could describe movement away from a predator in a film; we could not turn a movement during rest into proof of the same private experience.'
]},
{id:'claims',title:'How much does the evidence tell us?',words:['universal','vulnerable','integrate','outward','internal','interpret','insight','apparently','brain imaging','replay','shed light on','moderately'],paragraphs:[
 'Our reading group compared two imaginary studies. In the first, an observer recorded {{outward}} behaviour. The animal was {{apparently}} resting, but its eyes and limbs sometimes moved. One writer chose to {{interpret}} those movements as a dream. Another asked what evidence could separate that explanation from other causes.',
 'The second study used {{brain imaging}} as well. Its computer could {{replay}} patterns recorded earlier, letting the team compare different periods. The researchers tried to {{integrate}} these results with behaviour notes. The combination offered more {{insight}} than either source alone, but it did not make every internal experience directly visible.',
 'We ended with a moderately difficult question: could a result from one kind of animal be {{universal}}? Different species might be {{vulnerable}} to different conditions or use different senses. The study could {{shed light on}} a broader question without answering it for every living thing. That was a useful finding, not a reason to claim more than the evidence supported.'
]}],
vocab:[
 ['The ear twitched once, then remained still.\ntwitched 是？','轻微抽动了一下','持续有规律地摆动','失去了活动能力','主动朝声源转去','once和then remained still限定短暂动作，不推出有意转向。'],
 ['A paralysed limb was distinguished from a limb held still voluntarily.\nparalysed 是？','无法正常活动的','自主保持静止的','反应只是变慢的','活动频率降低的','对比voluntarily排除主动不动。'],
 ['Two states alternate throughout the observation period.\nalternate 是？','交替出现','一同持续出现','逐渐变得相同','一种永久取代另一种','交替不同于同时或永久取代。'],
 ['The image remained vivid in her memory after the details of the date had faded.\nvivid 是？','清晰生动的','已经核实的','精确到每个日期的','人人都共有的','主观清晰不证明客观准确。'],
 ['The visible movement may indicate activity but is not a universal sign.\nuniversal 是？','适用于所有对象的','很容易观察到的','首次被发现的','只发生在夜间的','not universal限制适用范围。'],
 ['The species is vulnerable to sudden temperature changes.\nvulnerable 是？','容易受伤害的','会主动躲避的','完全不能适应的','只能在固定温度存活的','容易受害不等于绝对不能适应或固定存活范围。'],
 ['The team integrated movement records with electrical signals.\nintegrated 是？','把不同信息整合起来','用一种记录替代另一种','把信息分开保密','只保留支持结论的记录','with表示结合，不是替换或挑选有利证据。'],
 ['Outward behaviour cannot tell the whole story of an animal’s experience.\noutward 是？','外在可观察的','明显有意做出的','由其他动物造成的','发生在户外的','外在与内在对比，不是outdoors。'],
 ['The observer interpreted the call as a warning, but admitted another explanation was possible.\ninterpreted 是？','作出了解读','已经证明了','完整模仿了','测出了频率','解释仍有备选，不能视作证明。'],
 ['The study offers insight into a response without settling its purpose.\ninsight 是？','帮助理解的新认识','无可争辩的最终答案','只能描述的原始数字','对未来事件的精确预测','offer insight不等于settle。'],
 ['The animal was apparently calm, although its heart rate had not been measured.\napparently 是？','从表面看似乎','根据完整检测确定','据法律要求必须','与平时完全一样地','外观平静不是内部状态已证实。'],
 ['The dominant cue was smell, although the animal could also see.\ndominant 是？','起主要作用的','唯一存在的','最先出现的','持续时间最长的','主要不等于唯一，后半句保留其他感觉。'],
 ['The animal navigated using landmarks rather than following another animal.\nnavigated 是？','辨认方向并移动','发出方向警报','记住所有路标名称','先于其他动物到达','using landmarks说明辨路方式。'],
 ['The machine replayed a pattern recorded earlier.\nreplayed 是？','再次重现','首次检测到','自行修正了','证明其含义','earlier说明已有记录，重现不证明解释。'],
 ['The comparison may shed light on why responses vary.\nshed light on 是？','帮助解释','彻底消除差异','保证预测准确','人为制造结果','may与帮助理解都保留证据限度。'],
 ['The device picked up vibrations rather than airborne calls.\nvibrations 是？','物体或表面的振动','只能被耳朵听见的声音','动物的有意呼叫','大脑内部的视觉图像','对比airborne calls，不能把振动一律理解成呼叫。']
],
rewrites:[
 ['The movement is consistent with dreaming but does not establish it.','Dreaming is one compatible explanation, without being proved.','The movement proves that dreaming occurred.','The movement rules out dreaming entirely.','Dreaming caused every movement observed.','consistent with是相容，不等于证实。'],
 ['Only some of the recorded periods showed the pattern.','The pattern occurred during a subset of the periods observed.','The pattern occurred in every recorded period.','No period contained the pattern.','All unrecorded periods must also have contained it.','some不扩大到所有，也不能推未记录时段。'],
 ['The dominant sense need not be the same across species.','Different species may rely most heavily on different senses.','Every species has exactly one sense.','The same sense dominates in all species.','Species without vision cannot receive information.','主要感觉可不同，不等于只能有一种感觉。'],
 ['Similar signals appeared during two activities, but their meaning remains uncertain.','The signal resemblance does not yet settle what the activities involve.','The two activities were proved to have identical experiences.','The signals differed completely.','Uncertainty proves that the resemblance was an error.','相似信号与相同体验是不同结论。'],
 ['The researchers sought evidence beyond a single observed animal.','They wanted observations that were not limited to one individual.','They rejected every earlier observation as false.','They concluded that one individual represented every species.','They stopped gathering evidence after the first animal.','beyond是扩大证据基础，不是否定已有材料。'],
 ['What can be seen from outside may not reveal what is experienced inside.','Observable behaviour need not fully disclose private experience.','Internal experience can always be seen directly.','Visible movements are never useful evidence.','No animal has any internal experience.','不完全揭示不等于证据无用，更不等于不存在体验。']
],
match:{title:'Describing an uncertain observation',text:'A careful observer separated {{0}} behaviour from private experience. A creature was {{1}} resting, though no direct measure had confirmed that state. The team treated the result as a possible {{2}}, not a final answer. They asked whether a response was {{3}} or limited to one group, and which cue was {{4}}. More evidence might {{5}} the explanation without making every experience directly accessible.',pairs:[['outward','externally observable','外在可观察，不代表有意识。'],['apparently','seemingly','表面似乎，保留核查空间。'],['insight','a better understanding','认识有所推进，不代表终结问题。'],['universal','present in every case','关注范围是否普遍。'],['dominant','most influential','主要而非唯一。'],['shed light on','help explain','帮助解释，程度弱于prove。']],extras:['proved beyond doubt','available only through sight','the only source of information']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "What the camera missed|became|clearer|when|the movement trace|was compared|with|the images,|which|showed|only changes|large enough|to be visible|from the fixed viewing point.",
    "subject": "What the camera missed",
    "predicate": "became",
    "skeleton": "What the camera missed became clearer.",
    "translation": "把动作轨迹与图像比较后，相机漏掉的变化更清楚了；图像只显示固定视点可见的较大变化。",
    "why": "what引导整个名词性从句作主语；became为主句谓语，was compared在when从句。"
  },
  {
    "kind": "backbone",
    "tokens": "Recording|an animal’s movements|does not give|an observer|direct access|to its private experience,|however carefully|each visible action|has been described.",
    "subject": "Recording",
    "predicate": "does not give",
    "skeleton": "Recording an animal’s movements does not give an observer direct access to its private experience.",
    "translation": "无论可见动作描述多细，记录动物动作都不让观察者直接进入它的内在体验。",
    "why": "Recording为主语核心；主句完整否定谓语does not give，has been described在让步部分。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "To compare responses to light and touch, the technician connected|a movement sensor|to the small platform beneath a model animal.|A camera filmed the screen, and|a lamp|illuminated the coloured markers used in the visual part of the test.|The computer stored signals from several devices in separate files.|Although the camera supplied images and the lamp made the markers visible,|it|registered tiny shakes of the platform even when nothing changed in the recorded picture, providing information the visual record alone could not supply.",
    "antecedent": "a movement sensor",
    "translation": "技术员把动作传感器接在模型动物下方的平台上，相机拍屏幕，灯照亮视觉测试标志。计算机分开保存设备信号。能记录图像未变时平台轻微振动的是动作传感器。",
    "why": "registered tiny shakes与sensor功能一致，不对应灯或相机。"
  },
  {
    "kind": "reference",
    "focus": "this possibility",
    "tokens": "The students first proposed that the moving platform had entered a rest-like state.|Another student suggested|that a change in temperature could have caused the small movements.|The tutor asked both groups to check the timing rather than choose the story they preferred.|A camera operator pointed out that the room had become warmer near the end, while the movement trace still contained quiet periods.|Before interpreting the signal as evidence of a private experience, the class agreed to examine|this possibility|by comparing otherwise similar recordings made under a stable temperature.",
    "antecedent": "that a change in temperature could have caused the small movements.",
    "translation": "学生提出平台似休息状态，另有人认为温度变化造成动作。全班同意先用稳定温度比较检验后者可能性，再解释内在体验。",
    "why": "温度控制检验的是温度导致动作的可能，不是直接检验私人体会。"
  },
  {
    "kind": "logic",
    "text": "The absence of one familiar sleep pattern does not by itself show that an animal never has any dream-like experience.",
    "q": "哪项符合原句？",
    "options": [
      "没发现某种熟悉模式，不能单凭这一点证明从不做梦。",
      "没有熟悉模式就证明没有任何体验。",
      "所有动物都有完全相同的模式。",
      "不熟悉的模式必定是做梦证据。"
    ],
    "answer": "没发现某种熟悉模式，不能单凭这一点证明从不做梦。",
    "translation": "缺少某种熟悉睡眠模式，本身不足以证明动物从没有类似梦的体验。",
    "why": "does not by itself否定证据充分性，不是在宣布另一种模式已确立。"
  },
  {
    "kind": "logic",
    "text": "The writer regards the explanation as plausible and worth testing, rather than as a fact already demonstrated.",
    "q": "作者把解释放在哪种证据层级？",
    "options": [
      "已证实的事实。",
      "可以考虑、值得检验的解释。",
      "完全不可能的假说。",
      "不允许再研究的问题。"
    ],
    "answer": "可以考虑、值得检验的解释。",
    "translation": "作者认为解释合理且值得测试，但尚非已经证实的事实。",
    "why": "plausible与demonstrated不同。"
  }
],
evidence:{
  "title": "Rest and response in a classroom model study",
  "paragraphs": [
    [
      "A college class studied recordings from a model system that switched between active and quiet phases.",
      "The exercise was designed|to practise distinguishing observation from interpretation,|not to diagnose sleep in a real animal.",
      "Students first described only changes that another observer could verify from the recording."
    ],
    [
      "One clip showed a small movement after the lights dimmed.",
      "The tutor warned that|a change in position|did not prove the system had formed an image or experienced a dream.",
      "Several students had initially used the word|frightened|despite having no measure of an internal feeling."
    ],
    [
      "The class then compared a movement trace with a visual recording.",
      "The trace included small changes that the camera missed, while the film showed objects outside the sensor’s range.",
      "The two sources were combined|because neither gave a complete account on its own,|rather than because one had been found entirely useless."
    ],
    [
      "To check scoring, a second group received clips without the original labels.",
      "The reviewers were not told which phase each clip came from, reducing the chance that a label would shape their judgement.",
      "They recorded doubtful cases|in a separate list,|rather than forcing every clip into a confident category."
    ],
    [
      "The groups agreed on many obvious movements but differed over some faint changes.",
      "The tutor kept|both independent ratings|so that disagreement remained visible in the final record.",
      "Further practice would use new clips, since remembering the old classifications would not demonstrate better observation."
    ]
  ],
  "questions": [
    [
      "What was the main educational purpose of the exercise?",
      0,
      1,
      "",
      "目标是区分观察与解释，不是诊断真实动物的睡眠。"
    ],
    [
      "Why were the two recording methods used together?",
      2,
      2,
      "",
      "各自不完整，所以结合，而不是一种完全无用。"
    ],
    [
      "Which visible event failed to prove a private experience?",
      1,
      1,
      "a change in position",
      "位置变化是观察到的事，体验是未证实解释。"
    ],
    [
      "Which emotional label had some students used without directly measuring the feeling?",
      1,
      2,
      "frightened",
      "frightened是学生未经内在感受测量就使用的情绪标签。"
    ],
    [
      "Where did uncertain cases go?",
      3,
      2,
      "in a separate list,",
      "独立列表保留不确定，不是强行分类。"
    ],
    [
      "What was preserved to make disagreement traceable?",
      4,
      1,
      "both independent ratings",
      "保留两份独立评分，不能只保留最终一致项。"
    ]
  ]
},
specials:[
 {kind:'table',title:'一词表格填空',maxWords:1,columns:['Stage','Method or item','Reason'],passage:{title:'Checking a recording system',paragraphs:['The class tested a recording system before examining any results. A metronome made regular clicks to check whether the sound and video matched in time. A mirror let the camera see a marker that would otherwise have been hidden behind a box. Neither object represented an animal or a model of a brain.', 'Each reviewer then used headphones to listen separately. Notes were entered in a notebook before being copied to a spreadsheet. The tutor kept the original pages, since copying could introduce mistakes. At the end, an unused battery was placed beside the equipment so that a later class could repeat the check without delay.']},rows:[
 ['___','metronome','用规律滴答声核对音画同步，不是随便选一种声源。',[],['Before scoring','___','Checks timing with regular clicks']],
 ['___','mirror','镜子让原本挡住的标志进入画面。',[],['Hidden marker','___','Makes it visible to the camera']],
 ['___','headphones','分别听录音使用headphones。',[],['Independent listening','___','Keeps reviewers from sharing one speaker']],
 ['___','notebook','纸面原始记录先写在notebook，后输入表格。',[],['Original notes','___','Kept before transfer to a spreadsheet']],
 ['___','battery','备用电池用于后续复查，不是本次评分依据。',[],['Later repetition','___','Left unused for the next class']]
 ]},
 {kind:'judgement',rows:[
 ['The movement trace was recorded continuously, while the camera was switched on only during the short test periods.','Both devices recorded for the entire observation period.','FALSE','camera只在测试时开启，与both continuously矛盾。','动作轨迹持续记录，相机仅在短测试时段开启。'],
 ['Two observers used the same scoring guide but assessed the clips independently before comparing their ratings.','The observers initially scored the clips without consulting each other.','TRUE','independently before comparing直接支持。','两人用同一指南，先独立评分再比较。'],
 ['The team stored the recordings on a local drive and gave copies to the course tutor. Each file carried a date and a short condition code.','The local drive held more data than the tutor’s own computer.','NOT GIVEN','描述保存位置和标签，没有容量比较。','录音保存在本地磁盘，给导师副本，文件标有日期和条件码。'],
 ['Some animals use more than one sense when finding a route. In this experiment, blocking the visual cue changed performance but did not stop successful navigation altogether.','Sight was the only source of useful information in the experiment.','FALSE','挡视觉后仍可成功，排除唯一有用信息。','一些动物用多种感觉辨路；阻断视觉影响表现但未完全阻止辨路。'],
 ['Only recordings with a clear start marker were included in the timing comparison. This prevented uncertainty about when the test began.','A clear start marker was a condition for inclusion in the timing comparison.','TRUE','only明确纳入条件。','只有开始标记清楚的记录纳入时间比较，以免起点不确定。'],
 ['The observation room had a dim lamp, a table and a screen showing the incoming signal. Reviewers took turns sitting at the table and added comments after each clip.','The reviewers preferred the room to their usual classroom.','NOT GIVEN','设施和操作不能推出偏好。','观察室有暗灯、桌子和显示信号的屏幕；评分者轮流记录意见。']
 ]}
]});
