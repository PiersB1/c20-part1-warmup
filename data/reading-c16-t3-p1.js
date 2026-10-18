RRReadPack({id:'c16-r-t3-p1',location:{book:16,test:3,part:1},title:'古罗马造船与航行：结构、用途和定向',focus:'技术传承方向、外壳与骨架的先后；不同船型和部件作用；观测条件与导航方法；事实判断、一词摘要。',
words:`
estimation|估算；凭经验判断数值|Estimation gives an approximate judgement rather than an exact measurement.|估算提供大致判断，不是精确测量。|The builder relied on ___ alongside experience.|建造者把估算与经验结合。
inherited technique|传承下来的技法|An inherited technique is passed from earlier workers or generations.|传承技法来自先前工匠或世代。|The method was an ___, not necessarily a new invention.|该方法是传承技法，不一定新发明。
rigging|帆索具；支撑和操纵帆的绳索|Rigging supports and controls parts of a sailing vessel.|帆索具支撑操纵帆船相关部分。|The drawing showed ___ rather than the cargo itself.|图画显示帆索具，不是货物。
hull|船体外壳|The hull is the main outer body of a vessel.|船壳是船主要外部主体。|The sequence began with the ___ before other parts were added.|顺序先造船壳再加其他部件。
plank|木板；铺板|A plank is a long flat piece of timber.|木板是长而平的木材。|The worker fitted one ___ beside another.|工匠把一块木板安在另一块旁。
mortise and tenon|榫卯连接；凸榫插入凹槽的拼接|Mortise and tenon joins a projecting piece to a matching opening.|榫卯把突出部分插入相配凹口。|The model used ___ rather than stitching to join the parts.|模型用榫卯而非缝合接部件。
frame|骨架；内部支撑结构|A frame supports the shape of a structure.|框架支撑结构形状。|The later method put the ___ in place before the outer covering.|后期方法先安骨架再覆盖外壳。
systematic|有系统的；按步骤组织的|A systematic method follows an organised procedure.|系统方法遵循有组织步骤。|The review called the revised sequence more ___.|评论称修订顺序更有系统。
merchant ship|商船；运货船|A merchant ship carries cargo for trade.|商船运输贸易货物。|The comparison distinguished a ___ from a vessel designed for battle.|比较区分商船与战斗船。
warship|军舰；战船|A warship is designed for naval military use.|军舰设计用于海上军事用途。|The display showed a ___ beside a trading vessel.|展示把战船与贸易船并列。
ballast|压舱物；增加稳定性的额外重量|Ballast is weight carried to improve a vessel’s stability.|压舱物增加重量以改善船稳定性。|The explanation considered ___ rather than count all added weight as cargo.|解释考虑压舱物，不把每份增加重量都当货物。
battering ram|撞角；船首用于撞击的装置|A naval battering ram is a projecting device used to strike another vessel.|舰船撞角是向外突出、用来撞击别船的装置。|The model identified a ___ rather than a steering device.|模型识别撞角，不是转向器。
oar|船桨|An oar is used to move a boat by pushing against water.|船桨通过推水使船移动。|The rower moved an ___ in time with the others.|桨手与其他人同步划桨。
stern|船尾|The stern is the rear of a vessel.|船尾是船后部。|The diagram placed the device near the ___.|示意图把装置放近船尾。
rudder|舵；控制航向的装置|A rudder helps change the direction of a vessel.|舵帮助改变船的方向。|The crew adjusted a ___ rather than add cargo.|船员调舵，不是加货。
tiller|舵柄；操纵船舵的杆|A tiller is a handle or lever used to control a rudder.|舵柄是操纵舵的杆或把手。|The operator moved the ___ to change direction.|操作员移动舵柄改变方向。
bow|船首|The bow is the front of a vessel.|船首是船前部。|The drawing distinguished the ___ from the rear.|图画区分船首与后部。
mast|桅杆|A mast supports sails above a vessel.|桅杆在船上支撑帆。|The crew checked the ___ before raising the sail.|船员升帆前检查桅杆。
towboat|拖船|A towboat pulls or pushes another vessel.|拖船拉或推另一艘船。|A smaller ___ helped the large vessel approach its berth.|小拖船帮助大船接近泊位。
quay|码头；靠泊装卸的平台|A quay is a platform beside water where vessels load and unload.|码头是水边供船装卸的岸边平台。|The cargo was taken off beside the ___.|货物在码头旁卸下。
navigation|航行中的定位与定向|Navigation determines position and direction during travel.|导航判断旅途中位置与方向。|The account described ___ using observations rather than a modern instrument.|叙述用观察而非现代仪器航行定向。
landmark|可辨认的地标|A landmark is a recognisable feature used to judge location.|地标是用来判断位置的可辨特征。|The crew noted a ___ along the visible coast.|船员记下可见海岸上一处地标。
swell|涌浪；较长的海浪起伏|Swell is a pattern of rolling waves on the sea.|涌浪是海面连续起伏的波浪形态。|The sailors considered ___ as one clue to direction.|水手把涌浪作为方向线索之一。
visibility|能见度；看得清远处的程度|Visibility describes how clearly distant things can be seen.|能见度是远处物体能看多清楚。|Poor ___ changed which clues were available.|能见度差改变可用线索。
`.trim().split('\n').map(r=>r.split('|')),
omitted:['plank','frame','oar','bow','mast'],
contexts:[{id:'construction',title:'A sequence changes the way a vessel is built',words:['estimation','inherited technique','rigging','hull','plank','mortise and tenon','frame','systematic','merchant ship','warship','ballast','battering ram'],paragraphs:[
'A workshop compared {{estimation}} with a measured plan. An {{inherited technique}} could still be skilful even when it was not described through modern calculations. The group examined the {{hull}}, the frame and the {{rigging}} as different parts rather than names for one whole object.',
'One plank joined another through {{mortise and tenon}}. Changing whether the outer shell or the supporting structure came first could make the procedure more {{systematic}}. The class recorded the order before discussing how quickly the work might proceed.',
'A {{merchant ship}} and a {{warship}} had different priorities. The group considered {{ballast}}, cargo and a {{battering ram}} without assigning every feature to both types. A drawing of one vessel did not establish a universal rule for all vessels, so the purpose and period remained visible beside each structural description.'
]},{id:'travel',title:'Finding a route with different clues',words:['oar','stern','rudder','tiller','bow','mast','towboat','quay','navigation','landmark','swell','visibility'],paragraphs:[
'A model identified the bow and {{stern}}, the mast and an oar. A {{tiller}} controlled a {{rudder}}, while a {{towboat}} could help a larger vessel approach the {{quay}}. Steering, propulsion and assistance near a landing place were related but distinct functions.',
'The lesson then considered {{navigation}}. In good {{visibility}}, a crew could recognise a {{landmark}} and compare its position with the route. In poor conditions, some of those clues disappeared. The crew might then consider {{swell}} alongside other observations.',
'The class did not assume a useful clue was available at every moment or that every method had the same accuracy. It also kept the source of the technique separate from the people who later used it. A community could learn a method from another group and then adapt it, rather than every useful practice having to originate wherever it was eventually recorded.'
]}],
vocab:[
['The method relied partly on estimation.\nestimation 是？','凭线索或经验作近似判断','每项都精确到完全无误差','任何情况下都没有经验依据','只把结果换一个名称','估算不是完全无依据也非精确。'],
['The practice was an inherited technique.\n这意味着？','技法从先前工匠或世代传下','每个使用者都独立首次发明','方法必定永远毫无变化','它从来没有任何实际用途','传承可伴改进。'],
['The drawing shows rigging.\nrigging 是？','支撑操纵帆等部分的索具','船里装载的全部货物','只指船头撞角','所有水下压舱重量','部件功能不同。'],
['The hull was built first.\nhull 指？','船主要外壳主体','支撑帆的高杆','仅操纵舵的把手','岸边装卸平台','船壳与其他部件辨认。'],
['The connection used mortise and tenon.\n这是什么？','凸榫与凹口相配的拼接','只把板件用线缝起来','把所有木板烧成一块','用海浪推动船的技术','连接方式非缝合。'],
['The frame came before the outer shell.\nframe 是？','支撑整体形状的骨架','船的任何一件货品','仅用于导航的海岸特征','只指最后刷上的颜色','结构支撑与外饰不同。'],
['The procedure became more systematic.\nsystematic 表示？','按组织步骤更有系统','完全不需任何经验','每次都不可能出现差错','只是船比原来更大','系统组织不保零错。'],
['The vessel was a merchant ship.\nmerchant ship 是？','以贸易运货为目的的船','只能用于军队战斗的船','只帮其他船靠岸的小拖船','所有有一根桅杆的船','用途识别非单部件推断。'],
['The crew considered ballast.\nballast 是？','为稳定船而携带的重量','每种额外重量都一定是售卖货物','专门用来确定北方的仪器','船员唱的全部音乐','压舱作用非货物类别。'],
['The device was a battering ram.\nbattering ram 在此是？','船首向外突出的撞击装置','操纵船舵的细杆','支撑帆的长柱','岸边拖船的发动机','撞击、转向、支帆功能不同。'],
['The tiller controlled the rudder.\ntiller 是？','操纵舵的杆或把手','水边装卸平台','船上所有帆索的总称','用来储存贸易货物的箱子','控制关系tiller→rudder。'],
['The cargo was unloaded at a quay.\nquay 是？','水边靠泊装卸的平台','船尾下方的全部水域','船中央一根桅杆','任何海上的可见星体','位置设施语境。'],
['A towboat assisted the vessel.\ntowboat 是？','拉推另一艘船的拖船','一定载最多货物的船','只指用来观星的工具','每位划桨者的职位','辅助功能不同。'],
['The crew used a landmark.\nlandmark 是？','可辨认并帮助定位的地面特征','只在船内才能看到的每个物品','所有海浪完全相同的名称','航行实际经过的总距离','地标线索非距离本身。'],
['Poor visibility affected navigation.\nvisibility 是？','远处物体可看清的程度','海面所有水流速度','全部船只运价总和','地标本身的所有年代','条件影响线索可用性。'],
['Swell supplied one directional clue.\nswell 是？','海面持续滚动的涌浪形态','只指甲板上所有绳索','每种海岸建筑的高度','已经精确定位的全部坐标','海况线索非完整坐标。']
],
rewrites:[
['A group learned shipbuilding from people it later ruled.','Use of a technique does not establish that the users first invented it.','The direction of transmission was necessarily the reverse.','A borrowed method can never be adapted.','Every later user must have created the technique independently.','传承主客方向。'],
['The newer sequence built the supporting structure before the outer shell.','Changing the order of construction distinguished the methods.','Both sequences put every part in the same order.','The shell and the frame are the same component.','A changed sequence means no old knowledge was used.','部件先后不同。'],
['Different functions can require different hull characteristics.','A cargo priority need not produce the same design as a speed priority.','Every vessel has identical requirements.','A wider hull proves a ship cannot carry cargo.','Any speed advantage settles every design choice.','目的影响结构，非一优全优。'],
['An assisting vessel can bring a larger ship towards a landing place.','Towing near arrival is different from the main vessel’s usual propulsion.','Every large ship is pulled throughout every voyage.','A towboat is the same as a rudder.','Using help proves no other propulsion exists.','靠港辅助非全程牵引。'],
['Coastal landmarks are useful when they can be seen.','The method’s availability depends on observation conditions.','A landmark supplies the same information in all visibility.','Poor weather proves the landmark has disappeared permanently.','Every voyage uses identical clues at every moment.','可用条件不等实物消失。'],
['Different natural clues need not provide equal accuracy.','Using more than one method does not make them interchangeable in precision.','Any directional estimate is exact.','An imperfect clue can never have any use.','Different clues prove sailors had no experience.','精度有别但有参考。']
],
match:{title:'Structure and movement',text:'A {{0}} was supported by a {{1}}. Near the {{2}}, a {{3}} could assist. During travel, {{4}} could use a visible {{5}} rather than a modern instrument.',pairs:[['hull','outer body of the vessel','船壳。'],['frame','supporting skeleton','骨架。'],['quay','waterside loading platform','码头。'],['towboat','vessel that pulls or pushes another','拖船。'],['navigation','determining position and direction','定向定位。'],['landmark','recognisable feature used for location','地标。']],extras:['the same thing as every piece of cargo','proof that all ships had one design','an exact clue available in every condition']},
syntax:[
  {
    "kind": "backbone",
    "tokens": "The order|in which a supporting frame and an outer hull were assembled|changed|as|builders|adopted|a different method.",
    "subject": "The order",
    "predicate": "changed",
    "skeleton": "The order changed.",
    "translation": "采用新方法时，骨架和船壳组装的先后改变了。",
    "why": "changed主句，were assembled定语从句，adopted时间。"
  },
  {
    "kind": "backbone",
    "tokens": "Without a visible coast or island,|a method|relying on familiar landmarks|could not supply|the same information|that|it|provided|in clear conditions.",
    "subject": "a method",
    "predicate": "could not supply",
    "skeleton": "The method could not supply the same information.",
    "translation": "看不到海岸岛屿时，依熟悉地标方法不能提供晴朗时同样信息。",
    "why": "could not supply主句，relying修饰method。"
  },
  {
    "kind": "reference",
    "focus": "it",
    "tokens": "The model showed|a steering handle linked to a movable surface at the rear|beside a mast, an oar and a piece of ballast.|The mast supported the sail, while the oar represented direct propulsion through the water.|The ballast contributed weight rather than act as a control lever.|When the demonstrator moved the handle,|it|changed the angle of the steering surface through the connection, allowing visitors to distinguish an input to direction from a structure used to hold the sail or improve the vessel’s stability during travel.",
    "antecedent": "a steering handle linked to a movable surface at the rear",
    "translation": "舵柄、桅杆、桨、压舱物并列。移动后经连接改变舵面角的是舵柄，不是支帆或加重。",
    "why": "controllever/inputdirection对应handle。"
  },
  {
    "kind": "reference",
    "focus": "the latter",
    "tokens": "The guide distinguished|a construction method that began with the outside shell|from|a construction method that began with the supporting frame.|Both could produce a completed vessel, and evidence from remains helped researchers identify differences in the work sequence.|Visitors sometimes treated the same finished purpose as proof that the methods were identical.|The guide explained that|the latter|reversed which main element was established first, so a comparison needed attention to assembly order rather than only the appearance of a ship once all its parts had been put together.",
    "antecedent": "a construction method that began with the supporting frame.",
    "translation": "壳先与架先不同。后者换先建立主件，不能成品都船就当方法相同。",
    "why": "latter架先法。"
  },
  {
    "kind": "logic",
    "text": "The account says the builders learned from another community.",
    "q": "能否改成另一群体向他们学习？",
    "options": [
      "不能，知识传递方向被反过来了。",
      "可以，使用同一技术就方向随意。",
      "说明两群体完全没有接触。",
      "证明每个细节都永久不变。"
    ],
    "answer": "不能，知识传递方向被反过来了。",
    "translation": "学习来源主客不可换。",
    "why": "transmission direction。"
  },
  {
    "kind": "logic",
    "text": "The vessel used sails and rowers, not just one source of movement.",
    "q": "可以怎样概括？",
    "options": [
      "两种动力可在同一船上并存。",
      "只有风力完全没有人力。",
      "只有人力完全没有帆。",
      "同有两动力就每时同时全用。"
    ],
    "answer": "两种动力可在同一船上并存。",
    "translation": "双动力存在不保每刻全开。",
    "why": "并存与逐时使用不同。"
  }
],
evidence:{title:'A workshop compares two boat models',paragraphs:[
['A maritime workshop displayed two original models to show how construction and use could shape a vessel.','The review aimed|to distinguish assembly order from the completed appearance,|rather than assume that two finished boats must have been built in the same way.','It used removable parts so visitors could inspect the relation between shell and support.'],
['In one demonstration, the outside was established before the inner structure.','In the other, the main support came first and the covering was added later.','The workshop recorded|which element was assembled first|as the key difference before comparing other effects of the procedure.'],
['Another section compared carrying capacity with the ability to move in a restricted area.','The guide warned against assigning every feature of one model to all vessels regardless of purpose.','The label connected|design characteristics with intended use|rather than judge a cargo model only by the priorities of a different type.'],
['The navigation display began with a recognisable feature along a visible shore.','When the view was obscured, that clue could no longer provide the same information even though the shore itself remained.','The guide distinguished|a clue’s existence from its availability to observers|before introducing other possible ways of estimating direction.'],
['A final model showed a small vessel helping a larger one approach a landing place.','The review treated this as local assistance rather than evidence that the larger ship was pulled throughout its journey.','Visitors were asked to retain|the stage of travel described by each example|so that a valid observation near arrival would not become an unsupported claim about every earlier part of the voyage.']
],questions:[
['What distinction guided the models?',0,1,'','组装先后与成品外形。'],['What sequence did the second model use?',1,1,'','架先，覆壳后。'],['What procedural feature was recorded?',1,2,'which element was assembled first','哪个先装。'],['What relationship guided comparison of ship types?',2,2,'design characteristics with intended use','设计与用途。'],['What changed when the shore was hidden?',3,2,'a clue’s existence from its availability to observers','地标存在但观察不可用。'],['What scope applied to the assisting vessel?',4,2,'the stage of travel described by each example','只靠港阶段非全航程。']
]},
specials:[
{kind:'judgement',rows:[
['The builders learned the technique from another community and later changed parts of the procedure.','The users of the revised method were not necessarily its original inventors.','TRUE','借学后改。','技法从别群体学再改。'],
['The new sequence began with the support before adding the outer shell.','The new method still began with the outside covering.','FALSE','先架后壳。','次序相反。'],
['The exhibit compared cargo vessels with vessels designed for a different use.','All builders received exactly the same payment for both types.','NOT GIVEN','无工钱。','比较用途船型。'],
['A smaller vessel helped the large one near the landing place; the account did not describe towing during the whole voyage.','The example concerned assistance at a particular stage.','TRUE','限定靠泊。','近码头辅助。'],
['Landmarks were useful in clear visibility but unavailable as visual clues when the shore could not be seen.','The same visual landmark information was available regardless of weather.','FALSE','看不到就不可用。','条件限制。'],
['The model identified a mast, a steering device and several structural parts.','Every model part was made from material recovered from an ancient wreck.','NOT GIVEN','无模型原料来源。','模型标部件。']
]},
{kind:'notes',title:'一词摘要填空',passage:{title:'Preparing an assembly demonstration',paragraphs:[
'The workshop placed components on a rack in the order they would be used. A peg marked the first connection, and a template helped keep repeated pieces comparable. The demonstrator checked the alignment with a guide before attaching another part.',
'A diagram recorded the sequence rather than only the finished appearance. Each altered connection carried a tag linked to a note, and the team kept a spare model for comparison. This allowed visitors to see a change without mistaking it for a claim that every vessel followed the same method.'
]},rows:[['Components waited on a ___.','rack','陈列架。'],['The first connection was marked by a ___.','peg','定位钉。'],['Repeated pieces followed a ___.','template','模板。'],['Assembly order appeared in a ___.','diagram','步骤图。'],['An altered connection carried a ___.','tag','标签。'],['A spare ___ supported comparison.','model','备用模型。']]}
]});
