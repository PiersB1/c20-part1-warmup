const c09t2p2Plan={width:520,height:445,nodes:[{id:'a',x:90,y:80,label:'Willow bench'},{id:'b',x:260,y:80,label:'Reed display'},{id:'c',x:430,y:80,label:'Tea kiosk'},{id:'d',x:90,y:225,label:'Lookout'},{id:'e',x:260,y:225,label:'Junction'},{id:'f',x:430,y:225,label:'Tool store'},{id:'g',x:90,y:370,label:'South gate'},{id:'h',x:260,y:370,label:'Visitor entrance'},{id:'i',x:430,y:370,label:'Meadow'}],edges:[['a','b'],['b','c'],['d','e'],['e','f'],['g','h'],['h','i'],['a','d'],['d','g'],['b','e'],['e','h'],['c','f'],['f','i']]};
RRListenPack({book:9,test:2,part:2,title:'自然公园活动与园内路线',focus:'开放限制、活动实际内容、提前预约和服装要求；表格填空、单选、地图标注及原创路线。',formats:[['表格填空',3],['单选题干',3],['地图标注',4]],mapBeforeIndex:6,map:RRListenMap(c09t2p2Plan,'Park paths'),
routes:[{title:'From the entrance to the tea kiosk',map:c09t2p2Plan,start:'h',goal:'c',expectedPath:['h','e','d','a','b','c'],buttonLabels:{north:'Head north',south:'Go south',west:'Move westwards',east:'Go east'},transcript:[
'We will begin at the visitor entrance, shown at the bottom centre of the plan, and finish at the tea kiosk.',
'Keep the north arrow at the top of your map as you follow the paths between the marked points.',
'First head north to the central junction, passing neither of the places along the bottom path.',
'At that junction, take the path west to the lookout, where visitors can pause and watch quietly.',
'From the lookout, go north again until you reach the willow bench on the upper path.',
'Now turn east and continue to the reed display, stopping at that marked point before moving again.',
'Finally, carry on east to the tea kiosk; do not take the southbound path beside the display.',
'That is our finishing point, where refreshments are available after the walk.'
],explanation:'入口向北到Junction，向西到Lookout，向北到Willow bench，向东经过Reed display，再向东到Tea kiosk。',vocabulary:[['head north','向北走'],['westwards','向西'],['carry on east','继续向东']]}],
words:`
accessible|可以进入或到达的|An accessible place can be reached or entered.|可进入的地方能让人到达或进入。|The path is ___ throughout the year unless repairs are needed.|除非需要维修，这条路全年都可通行。
daylight hours|白天有日光的时段|Daylight hours are the hours when natural light is available.|日照时段是有自然光的那些时间。|Visitors may enter only during ___.|访客只能在白天有日光时进入。
replica|仿制品；复制建筑|A replica is a copy made to look like an original object or building.|仿制品模仿原物或建筑的样子制作。|The children explored a ___ of an old house.|孩子们参观了一座老房子的仿建建筑。
herb|草本香料或药用植物|A herb is a plant used in food, medicine or a similar purpose.|香草或药草可用于食物、药物等用途。|The guide explained how each ___ was used.|导览员解释每种香草的用途。
dye|染色；染料|To dye cloth is to change its colour using a colouring substance.|给布染色，就是用染料改变它的颜色。|They used plants to ___ small pieces of cloth.|他们用植物给小块布染色。
ranger|公园管理员；护林员|A ranger helps look after a park or natural area.|管理员帮助照管公园或自然区域。|Ask the ___ which path is safe after rain.|问公园管理员下雨后哪条路安全。
working party|共同干活的小组|A working party brings people together to do a practical task.|劳动小组把人组织起来共同完成实际工作。|The ___ repaired a short section of fence.|劳动小组修了一小段围栏。
in advance|提前|Booking in advance means arranging a place before the event.|提前预约，就是在活动发生之前安排名额。|Please tell us ___ if you cannot attend.|如果不能参加，请提前告诉我们。
suitable clothing|合适的衣服|Suitable clothing fits the conditions of an activity.|合适的衣物符合活动环境的需要。|Wear ___ for muddy ground rather than new shoes.|穿适合泥地的衣物，不要穿新鞋。
bird hide|隐蔽观鸟亭|A bird hide lets people watch birds without being easily seen.|观鸟亭让人能隐蔽地观察鸟。|Stay quiet inside the ___ so the birds are not disturbed.|在观鸟亭里保持安静，避免惊扰鸟。
junction|交叉路口；岔路口|A junction is a point where paths or roads meet.|交叉路口是道路相交的地方。|Turn at the ___ rather than at the bench.|在交叉路口转弯，不是在长椅处转。
adjacent to|紧挨着……|Adjacent to means directly next to something.|adjacent to表示紧挨着某物。|The store is ___ the main meeting room.|储物间紧挨着主要会议室。
opposite|在……对面|Opposite describes a position facing something across a space.|opposite表示隔着一段空间正对着某物。|The gate is ___ the information desk.|门在咨询台对面。
westwards|向西|Westwards means towards the west.|westwards表示朝西的方向。|Walk ___ until you reach the next crossing.|向西走到下一个路口。
beyond|在……更远处；越过|A place beyond something is farther along after it.|在某物更远处的地方，沿路走要先经过该物。|The quiet area is ___ the bridge.|安静区在过桥后的更远处。
refreshments|点心和饮料|Refreshments are light food and drinks.|refreshments是少量点心和饮料。|There will be ___ after the outdoor activity.|户外活动后会有点心和饮料。
`,
groups:[['accessible','daylight hours','replica','herb','dye'],['ranger','working party','in advance','suitable clothing','bird hide'],['junction','adjacent to','opposite','westwards','beyond','refreshments']],omitted:['herb','in advance','opposite','refreshments'],
contexts:[{id:'activities',title:'A practical afternoon',words:['accessible','daylight hours','replica','herb','dye','ranger','working party','suitable clothing'],paragraphs:[
'A {{ranger}} welcomed a small {{working party}} who had come to help in the park. She checked that everyone had {{suitable clothing}} before taking them along the muddy path. Most of the site was {{accessible}}, but one wet area had been closed to protect both people and plants.',
'Near a {{replica}} of an old workshop, another group was learning to {{dye}} cloth with plants. Each herb had a label, and the teacher explained that different plants could produce different colours. Both groups would finish during {{daylight hours}}, before the park became dark.'
]},{id:'walk',title:'Following the plan',words:['in advance','bird hide','junction','adjacent to','opposite','westwards','beyond','refreshments'],paragraphs:[
'The guide sent the meeting point in advance. At the first {{junction}}, the walkers checked the north arrow before heading {{westwards}}. They passed a tool store {{adjacent to}} the path, then reached a {{bird hide}} where they could stop quietly without disturbing the birds.',
'A seat stood opposite the shelter. The group continued {{beyond}} it towards a small information display. They checked the plan again before choosing the final path. Refreshments would be available at the end, but there was no need to hurry past the places they had come to see.'
]}],
vocab:[
['The main path is accessible, but the wet field is closed today.\naccessible 表示？','允许并能够进入或到达','保证全年没有任何限制','距离入口一定最近','必须由管理员开车带入','可到达不等于没有任何时间或天气限制。'],
['The trail is open during daylight hours, not for a fixed number of hours after arrival.\n指？','有自然日光的白天时段','每位游客购票后的一段时间','每天完全相同的钟点范围','只有阳光直射没有云的时段','白昼长度可随季节变化，不要求晴天。'],
['The building is a replica, though it demonstrates older construction methods.\nreplica 是？','仿照原建筑制作的复制建筑','未经修复的原始古建筑','只展示未来外观的设计图','从旧建筑搬来的一块原物','复制建筑可真实演示技术，但不是原建筑本体。'],
['This herb is used in cooking; the label also describes an older medicinal use.\nherb 指？','用于调味或药用等的草本植物','只能用于装饰的人工植物','任何长在水下的高大树木','固定指一种单独的现代药片','植物本身与其具体用途分开。'],
['The activity uses plant liquid to dye cloth, rather than paint a picture on it.\ndye 表示？','用染料改变布的颜色','用画笔在布上画图案','只把布在清水中洗净','把布裁成相同大小','染色与绘画、清洗、裁剪不同。'],
['A ranger checks the path before the group enters.\nranger 指？','照管公园或自然区域的人员','只在店内收款的销售员','临时加入活动的所有游客','必须来自大学的研究教授','职能是照管和管理自然区域。'],
['The working party will clear the path, with breaks whenever needed.\nworking party 是？','一起完成实际劳动的小组','下班后专门举行的庆祝晚会','不参加劳动只旁观的观众','固定只研究政策不动手的委员会','语境中的party是工作队伍，不是宴会。'],
['The small-group activity must be arranged in advance.\n这里表示？','在活动开始之前安排好','到场后随时加入即可','必须等活动结束后登记','只接受当天最后一刻申请','提前与到场再安排不同。']
],
multi:[{q:'选择两项都表示“紧挨着”。',options:['adjacent to','directly next to','on the far side of the whole park','facing it across the central field'],answers:[0,1],why:'紧挨不同于远端和隔空正对。'},{q:'选择两项都表示“沿路越过某处之后更远的位置”。',options:['beyond it','farther on after passing it','before reaching it','at exactly the same point'],answers:[0,1],why:'beyond的位置在经过参照物之后。'}],
grammar:[['You may join for a short time; you do not have ___ stay all day.','to','do not have to是不必，不是禁止。','You do not have ___ remain until closing if you can help for only part of the afternoon.'],['The shelter is on the west side ___ the path.','of','side of说明某条路的哪一侧，先确认参照物。','The lookout is on the quieter side ___ the junction, away from the store.']],
dictation:[['The riverside route remains ___ unless flooding makes the ground unsafe.','accessible','accessible：可进入或到达的。'],['The outdoor exhibit can be visited during ___ only.','daylight hours','daylight hours：白天日照时段。'],['This is a ___ built for demonstrations, rather than a surviving ancient building.','replica','replica：仿建物。'],['The guide will explain which ___ was used to flavour the simple meal.','herb','herb：香草或药草。'],['Visitors can ___ a piece of cloth and compare the colours produced.','dye','dye：染色。'],['A ___ will check the equipment before handing it to volunteers.','ranger','ranger：公园管理员。'],['The ___ will split into small groups, so you can choose a task that suits you.','working party','working party：劳动小组。'],['Wear ___ that you will not mind getting wet or muddy.','suitable clothing','suitable clothing：适合活动环境的衣物。'],['At the next ___, continue towards the display rather than following the fence.','junction','junction：交叉或岔路口。'],['The store is ___ the meeting area, so the tools do not have to be carried far.','adjacent to','adjacent to：紧挨着。']],
locators:`
The site [open to visitors|1] after dark is ___.~The riverside path remains [accessible|1] after daylight has gone, while the smaller teaching garden closes before then and should not be entered in the evening.~open to visitors对应accessible，开放条件不同。
The [copy of an older building|1] can be seen at ___.~The [replica|1] is at Meadow Centre beside the demonstration space; the original workshop was elsewhere and no longer survives.~copy of an older building对应replica，原址与复制地点分开。
The activity taking place during the [daytime|1] ends at ___.~We use the available [daylight hours|1] for outdoor work; this week the final session ends at four in the afternoon, with earlier finishes later in the season.~daytime对应daylight hours，结束时间随日照变动。
What will participants actually [colour|1] during the plant workshop?~You will [dye|1] a piece of fabric; the illustrated talk will also mention food and medicine, but neither is the practical task.~colour对应dye，听讲涉及的用途不是动手内容。
Why is [prior booking|1] needed for the evening walk?~Please arrange your place [in advance|1] because we must keep the group small enough for everyone to hear the guide.~prior booking对应in advance，预约因名额和组织需要。
What kind of [clothes|1] should volunteers bring?~[Suitable clothing|1] matters more than staying for the full day; choose items you will not mind marking during the practical work.~clothes对应suitable clothing，服装要求和参加时长分开。
On the plan, which [observation point|1] lies [west of|2] the central junction, after visitors turn away from the store on the opposite side?~The [lookout|1] is reached by taking the [left-hand|2] path from the centre with north at the top of your map; the tool store is reached by turning the other way.~observation point对应lookout；west of对应地图朝北时left-hand，先固定地图朝向。
Which place is [immediately next to|1] the willow bench on its [eastern|2] side, before the path continues towards the kiosk at the far end?~The reed display is [adjacent to|1] the bench along the [right-hand|2] section of the upper path on this north-up plan; the kiosk is one marked point farther on.~immediately next to对应adjacent to；eastern对应right-hand，不能越过相邻节点。
Which location is [farther along|1] the upper path [after passing|2] the reed display, if a visitor keeps moving east rather than turning towards the lower junction?~The tea kiosk stands [beyond|1] the display: [once you have gone past|2] that first stop, continue to the next marked point without taking the southbound path.~farther along对应beyond；after passing对应once you have gone past，抓经过与继续。
What stands [across from|1] the lookout on the other side of the central junction, and which building must walkers [avoid entering|2] during their visit?~The tool store is [opposite|1] the lookout across the middle of the plan; it is used by staff, so visitors should [stay out of|2] it even if its door is open.~across from对应opposite；avoid entering对应stay out of，位置与准入规则分别配对。
`,
paragraphs:[{title:'A visit is not an all-day commitment',text:'The park invited people to [lend a hand=>help out=>出力帮忙。] with simple practical work. Volunteers could [choose=>select=>从不同任务中挑选。] a task and [switch=>change over=>需要时更换任务。] later. Joining for a short period was [acceptable=>permitted=>允许短时参加。], so there was no need to commit to the whole day. The ranger did ask everyone to wear clothing that could [withstand=>cope with=>能承受活动环境。] muddy work, and explained that sharp tools would remain [under supervision=>with someone overseeing their use=>工具使用有人监管。].',extras:['attendance for the whole day is compulsory','work without anyone checking','continue with one task without changing']},{title:'Using the plan carefully',text:'The guide asked walkers to [orient=>line up correctly=>按北箭头确认地图朝向。] the plan before moving. A path to the [west=>left on this north-up plan=>地图北向上时西在左。] led to a quiet observation point. A store stood [on the other side=>opposite=>位于相对的另一侧。] of the central junction. The group would pass a display before reaching the [refreshment point=>place for a light snack or drink=>提供点心饮料处。]. The route did not use the [direct=>shortest straightforward=>直接的路线。] path from the entrance, because the guide wanted everyone to see the [intermediate stops=>places along the way=>途中的停靠点。].',extras:['left regardless of map orientation','a location visited only after the finish','skip every stop and use the shortest path']}],
signals:[{title:'The practical details behind the activities',focus:'从多种活动描述中听出真正要做的事、报名条件和参加时长。',text:`
The park has several activities this week, and the descriptions mention a mixture of things you can do and things you will simply hear about.
In the plant session, the practical work is colouring cloth; the talk also describes cooking, but you will not prepare a meal.~区分实际操作与讲解中提到的其他用途。
People who prefer a walk can join a guide to look for evening wildlife, provided the weather is suitable.
For that walk, reserve a place beforehand, since keeping the group small is part of the plan.~明确该活动预约要求及原因。
The volunteer afternoon is different, with several tasks available around the site and a ranger checking equipment.
You are welcome for only part of it, so do not rule it out just because you cannot stay all day.~排除全日参加的错误要求。
Choose clothes for practical outdoor work, and ask before using any unfamiliar tools.
`}]
});
