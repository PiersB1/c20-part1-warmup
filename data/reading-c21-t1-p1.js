(() => {
  const T=RRReadTokens;
  const quiz=(q,options,answer,why,index)=>{
    const shift=(index*3+1)%options.length;
    return {q,options:options.slice(shift).concat(options.slice(0,shift)),answer,why};
  };
  const vocab=[
    ['The archive has amassed a substantial collection of exhibition posters without buying a complete collection from any single owner.\n这里 amassed 的意思是？',['逐步积累了','一次性继承了','完整记录了','公开展出了'],'逐步积累了','amass 强调逐步积累大量事物，不限定获得方式，也不等于编目或展出。'],
    ['The trust inherited a group of ceramic panels under the maker’s will, rather than negotiating a purchase with the family.\n这里 inherited 的意思是？',['依遗嘱继承了','受委托临时保管了','经谈判收购了','经鉴定确认了'],'依遗嘱继承了','inherit 在这里指原所有者去世后依遗嘱承接所有权，不是借展或购买。'],
    ['The foundation’s philanthropic programme pays for free conservation advice for small community museums.\n这里 philanthropic 最接近？',['以帮助他人、做公益为目的的','以推广基金会品牌为首要目的的','只为提高藏品价值服务的','专门评估资助回报率的'],'以帮助他人、做公益为目的的','philanthropic 指帮助他人、做慈善；项目可能得到宣传，但这不等于宣传就是它的主要目的。'],
    ['The introductory course is geared towards helping volunteers recognise damage, rather than training them to carry out repairs.\n这里 geared towards 的意思是？',['围绕某项目标设计','只允许某类人参加','已被证明能够保证','在完成某项目标后结束'],'围绕某项目标设计','geared towards 说明设计方向；不保证学习结果，也不是报名资格。'],
    ['After several unsuccessful bids, the committee secured a rare exhibition screen from a private seller.\n这里 secured 的意思是？',['成功取得了','确认了真伪','妥善固定了','获得了临时查看许可'],'成功取得了','secure 在竞购语境中是成功获得；不能只套用“固定、使安全”的词义。'],
    ['A permanent climate-control system remained beyond the society’s means, even though members recognised its value.\n这里 beyond the society’s means 表示？',['超出了协会的财力','超出了协会的管理权限','不符合协会的收藏方向','没有达到协会的技术要求'],'超出了协会的财力','means 在这里指财力、经济资源；认识到价值不代表支付得起。'],
    ['The catalogue places the vase beside contemporary household objects made during the same decade.\n这里 contemporary 指？',['与该花瓶处于同一时期的','在今天仍有实际用途的','运用了最新技术制作的','后来模仿该花瓶风格的'],'与该花瓶处于同一时期的','contemporary 可表示同时代的；这里不是“今天的、最新的”。'],
    ['The librarian championed public access to the drawings while accepting that fragile sheets could not be handled freely.\n这里 championed 的意思是？',['积极倡导','独自实现了','无条件批准了','首次提出并证明了'],'积极倡导','champion 作动词表示积极支持、倡导；不意味着独自实现，也不取消后面的限制。'],
    ['Small donations supplied the bulk of the restoration budget; a single commercial sponsor contributed the remainder.\n这里 the bulk of 表示？',['……的大部分','……的全部','……中最大的一笔单项款','……的固定最低额度'],'……的大部分','bulk 指总体中的主要部分，不等于全部或最大一笔单独捐款。'],
    ['The emergency fund had a humanitarian purpose: it helped displaced craft workers obtain temporary accommodation.\n这里 humanitarian 的重点是？',['减轻人的困境与苦难','保存具有历史价值的工艺','补偿工坊的全部经营损失','促进手工制品进入市场'],'减轻人的困境与苦难','humanitarian 的对象是人的福祉。工匠身份并不把目的变成工艺保护或商业推广。'],
    ['The north and south rooms were allocated to textiles and ceramics respectively.\n正确的对应关系是？',['北室—纺织品；南室—陶瓷','北室—陶瓷；南室—纺织品','两室都同时展出这两类物品','两类物品按面积大小分配，位置未说明'],'北室—纺织品；南室—陶瓷','respectively 让前后两组按原次序逐项对应，不能倒置。'],
    ['The club’s legacy was a lasting habit of public discussion, not merely the objects it left in storage.\n这里 legacy 指？',['留给后人的影响','尚未处理的库存','必须履行的捐赠条件','物品目前的估价'],'留给后人的影响','legacy 可以指文化与社会影响，不限于实物遗产或金钱。'],
    ['Despite working far from established centres, the maker became an unlikely pioneer of a technique later adopted by much larger studios.\n这里 unlikely pioneer 最准确地表示？',['出人意料地开拓新技法的人','被广泛预期会率先采用技法的人','尚无法确认是否曾领先的人','提出新技法却没有实施的人'],'出人意料地开拓新技法的人','unlikely修饰pioneer，强调成为开拓者出人意料，不是否定其先驱地位。'],
    ['The catalogue contrasts the designer’s formal training with an upbringing in a household where damaged possessions were routinely repaired.\n这里 upbringing 指？',['家庭成长环境中的教养','从事职业之前的正式训练','成年之后形成的专业资格','对旧物修复方法的独立研究'],'家庭成长环境中的教养','upbringing与formal training在此形成对照，不能把家庭成长过程当成正式职业培训。'],
    ['The archive’s isolation became a problem when the only road was closed, although its remote location had previously attracted researchers seeking quiet.\n这里 isolation 指？',['地理位置偏远、与外界联系不便','因管理规则而拒绝公众进入','藏品与其他材料的分类存放','研究者主动避开所有社交活动'],'地理位置偏远、与外界联系不便','isolation由偏远位置和唯一道路中断体现，不是机构主动拒绝来访者。'],
    ['Numerous objects were offered for the display, although only a small proportion could fit in the available cases.\n这里 numerous 能说明什么？',['被提供的物品数量很多','被提供的物品都能展出','被接收的物品占全部物品的大多数','物品数量恰好等于展柜的容量'],'被提供的物品数量很多','numerous说明提供数量多；后面的限制说明不能据此推出全部或大多数都能展出。']
  ].map((v,i)=>quiz(...v,i));
  const rewrites=[
    ['The curator travelled extensively before preparing the display.\n选择意思一致的改写。',['The curator visited many places before arranging the display.','The curator spent the entire preparation period travelling.','The curator visited every place represented in the display.','The curator began travelling only after the display was ready.'],'The curator visited many places before arranging the display.','extensively 表示范围广；不保证去了每一个地方，也不说明花了整个筹备期。'],
    ['The gallery acquired the model but borrowed the tools shown beside it.\n选择意思一致的改写。',['The gallery obtained ownership of the model, while the tools remained on loan.','Both the model and the tools became the gallery’s property.','The model was inspected before the tools could be borrowed.','The gallery agreed to buy the tools after borrowing the model.'],'The gallery obtained ownership of the model, while the tools remained on loan.','acquire 在这里是获得所有权；borrow 不改变所有权，两个对象不能交换。'],
    ['The donors did not feel obliged to accept the dealer’s proposed arrangement.\n选择意思一致的改写。',['The donors felt free to reject the arrangement suggested by the dealer.','The donors were forbidden to accept the dealer’s arrangement.','The donors rejected every arrangement proposed by a dealer.','The dealer was obliged to accept the donors’ arrangement.'],'The donors felt free to reject the arrangement suggested by the dealer.','not feel obliged 是没有必须接受的压力，不等于禁止接受，也未说明最终拒绝。'],
    ['Several volunteers had a hand in designing the catalogue.\n选择意思一致的改写。',['Several volunteers contributed to the catalogue’s design.','Several volunteers alone determined every feature of the catalogue.','Several volunteers copied the catalogue’s design by hand.','Several volunteers gave advice after the design was completed.'],'Several volunteers contributed to the catalogue’s design.','have a hand in 指参与、发挥作用；不等于独自决定，也不是用手抄写。'],
    ['The printing workshop resumed production on a relatively small scale.\n选择意思一致的改写。',['The workshop began producing again, but its output was comparatively limited.','The workshop continued producing without any interruption.','The workshop produced items that were physically smaller than before.','The workshop became less important because production stopped.'],'The workshop began producing again, but its output was comparatively limited.','resumed 是恢复；small scale 指生产规模，不是产品尺寸或历史价值。'],
    ['The revised fund was devoted almost exclusively to repairing objects already in the collection.\n选择意思一致的改写。',['Nearly all of the fund supported repairs to objects already held.','Every part of the fund had to be used for repairs without exception.','The fund mainly bought replacements for objects that were damaged.','Only objects acquired after the revision qualified for repair funding.'],'Nearly all of the fund supported repairs to objects already held.','almost exclusively 接近全部但保留例外；repair 不等于购置替代品，already in the collection限制物品范围。']
  ].map((v,i)=>quiz(...v,i+16));
  const pairs=[
    ['pursue','follow','pursue an interest 是继续从事、投入某种兴趣，不是占有某物。'],
    ['coincide with','occur at the same time as','coincide with 只说明同期发生，不自动说明因果。'],
    ['consideration','careful thought','for consideration 是供认真考虑，不代表已接受。'],
    ['vibrant','lively','vibrant 在活动氛围中指充满活力，不是仅指色彩鲜艳。'],
    ['upheaval','major disruption','upheaval 是较大动荡与扰乱，不是日常的小调整。'],
    ['trusted circle','a small group relied upon','trusted circle 指一小群信得过的人，不是开放给所有人的组织。']
  ];
  const matchingText=[
    'Members could ',{n:0},' an interest in local design without committing themselves to a purchase. A monthly discussion sometimes happened to ',{n:1},' a visiting maker’s demonstration, but the events were organised independently. Unusual proposals were left for ',{n:2},' until the next meeting. The organisers wanted a ',{n:3},' exchange of views rather than a series of formal speeches. Even during the ',{n:4},' caused by the loss of their usual venue, a ',{n:5},' of volunteers kept the programme running and arranged temporary meeting places.'
  ];
  const matching={id:'c21-r-t1-p1-match',title:'A design society',segments:matchingText.map(x=>typeof x==='string'?x:{id:`r-match-s${x.n+1}`,text:pairs[x.n][0],answer:`r-match-a${x.n+1}`,explanation:pairs[x.n][2]}),choices:[
    ...pairs.map((p,i)=>({id:`r-match-a${i+1}`,text:p[1]})),
    {id:'r-match-x1',text:'be caused by'},{id:'r-match-x2',text:'formal acceptance'},{id:'r-match-x3',text:'a group open to everyone'}
  ]};
  matching.choices=[6,2,5,0,7,3,8,1,4].map(i=>matching.choices[i]);
  const sentences=[
    {id:'r-syntax-1',kind:'backbone',tokens:T('Although|the trustees|had received|several generous offers,|the curator|who|checked|the condition reports|recommended|a smaller travelling display|because|some of the proposed loans|would require|more treatment|than|the host institution|could provide.'),subject:'the curator',predicate:'recommended',skeleton:'The curator recommended a smaller travelling display.',translation:'尽管理事们收到了几份慷慨的提议，那位核查状况报告的策展人仍建议安排规模更小的巡展，因为部分拟借展物品所需的处理超过了接展机构的能力。',why:'who checked…修饰策展人；because…解释推荐理由。主句的判断动作是recommended，不是checked。'},
    {id:'r-syntax-2',kind:'backbone',tokens:T('The assumption|that|a remote venue|would attract|only local visitors|was challenged|by|the results of a survey|which|a group of volunteers|had conducted|after|the first exhibition|ended|and|before|the second programme|was announced.'),subject:'The assumption',predicate:'was challenged',skeleton:'The assumption was challenged by the results of a survey.',translation:'志愿者们在首场展览结束后、第二轮项目公布前开展了一项调查，其结果对“偏远场所只能吸引本地参观者”这一假设提出了质疑。',why:'主语是The assumption；was challenged构成主句的被动谓语。that说明假设的内容，which修饰调查。'},
    {id:'r-syntax-3',kind:'reference',focus:'it',tokens:T('The archive had introduced|a new scanning process|to make faint lettering readable without repeatedly unfolding fragile sheets.|A technician then prepared|a printed catalogue|for the volunteers and placed|the original material|in|a lockable cabinet|near the workbench.|Although neither the catalogue nor the cabinet changed the quality of a digital image,|it|produced clearer reproductions than the earlier method,|allowing the team to compare small details that had previously been difficult to distinguish.'),antecedent:'a new scanning process',translation:'档案馆引入了新的扫描流程，不必反复展开脆弱纸张便能看清模糊字迹。技术员随后为志愿者准备了纸质目录，并把原件放进工作台附近可上锁的柜子。目录和柜子都不会改变数字图像的质量，而该扫描流程生成的复制图像比旧方法更清晰，使团队能比较此前难以辨认的小细节。',why:'it回指较远处的a new scanning process。能生成更清晰图像的是流程；目录、原件和柜子虽都是单数名词，却不符合这一动作。'},
    {id:'r-syntax-4',kind:'reference',focus:'this decision',tokens:T('When the transport estimate increased,|the exhibition committee proposed|postponing the opening until autumn,|while the conservation team suggested|limiting the loans to objects already cleared for travel.|The board rejected the delay|but approved|the restriction on which objects could be borrowed.|Its secretary subsequently announced|a change to the invitation design,|which had no bearing on the selection of exhibits.|In a later report, the manager explained that|this decision|had reduced the range of objects available for the first display,|although the opening could still go ahead on the original date.'),antecedent:'the restriction on which objects could be borrowed.',accept:['limiting the loans to objects already cleared for travel.'],translation:'运输估价上涨后，展览委员会建议延至秋季开放，保护团队则建议只借展已获准运输的物品。董事会否决延期，但批准了对可借物品的限制。秘书后来宣布更改邀请函设计，这与展品选择无关。经理在报告中解释，这项决定缩小了首场展览可用物品的范围，但展览仍能按原定日期开幕。',why:'this decision指已获批准的借展限制，不是被否决的延期建议，也不是后来宣布的邀请函改版。要根据“缩小可用展品范围”确认指代；前文具体描述这项限制的表达也可接受。'},
    {id:'r-syntax-5',kind:'logic',text:'Although the donor financed the preparation of the travelling cases, the agreement required each host to meet the transport costs unless a separate grant had been approved in advance.',q:'根据这句话，哪项理解正确？',options:['捐赠者承担展箱准备费用；接展方通常承担运输费，但事先获批的专项资助可能改变这一安排。','捐赠者承担展箱准备费用；接展方只需提出专项资助申请，就可免除运输费用。','捐赠者承担展箱准备费用；接展方仅在专项资助获批后，才需要支付运输费用。','捐赠者承担展箱与运输费用；只有接展方获得专项资助时，才由接展方承担运输费。'],answer:'捐赠者承担展箱准备费用；接展方通常承担运输费，但事先获批的专项资助可能改变这一安排。',translation:'尽管捐赠者资助了巡展箱的准备，协议仍要求各接展方支付运输费，除非另有专项资助事先获得批准。',why:'展箱准备与运输是不同费用；unless引出例外，approved in advance不是仅提出申请。'},
    {id:'r-syntax-6',kind:'logic',text:'The change in display policy roughly coincided with a rise in public subscriptions, yet the surviving records do not establish whether the additional income prompted the change or followed it.',q:'作者能够确定什么？',options:['展示政策的变化与公众认捐增加大致同期发生，但因果方向不能确定。','新增收入促使机构改变展示政策。','政策改变以后，公众才开始认捐。','既然不能确定因果，就可以认定两件事没有任何关系。'],answer:'展示政策的变化与公众认捐增加大致同期发生，但因果方向不能确定。',translation:'展示政策的改变与公众认捐增加大致同期发生，但现存记录无法确定新增收入是促成变化的原因，还是变化之后的结果。',why:'coincided说明时间接近；do not establish限制结论。不能把同期发生升级成因果，也不能据此断言毫无关系。'}
  ];
  sentences.filter(item=>item.kind==='logic').forEach((item,i)=>{const n=i+2;item.options=item.options.slice(n).concat(item.options.slice(0,n));});
  const evidencePassage={title:'Making a small collection usable',paragraphs:[
    {label:'A',sentences:[
      {id:'e-a1',tokens:T('A municipal design archive|received|a set of carved printing blocks|from a cooperative that had ceased trading.')},
      {id:'e-a2',tokens:T('The trustees|initially|planned|to show only the finished prints,|but|the curator|argued|that|the worn blocks|also revealed|how makers corrected mistakes during production.')},
      {id:'e-a3',tokens:T('The resulting display|therefore|included|both the images|and|the tools used to produce them,|without suggesting that every tool had belonged to the same workshop.')}
    ]},
    {label:'B',sentences:[
      {id:'e-b1',tokens:T('Before|accepting additional material,|the archive|asked|each owner|for|a brief account of where the object had been kept.')},
      {id:'e-b2',tokens:T('This request|was not intended|to estimate market value;|its purpose|was|to identify earlier storage conditions that might affect safe handling.')},
      {id:'e-b3',tokens:T('A|low purchase price|did not remove|the need|for this check,|and|objects offered free of charge|went through|the same procedure.')}
    ]},
    {label:'C',sentences:[
      {id:'e-c1',tokens:T('A nearby college|offered|access to|a scanning studio|during the summer,|although|the equipment|would remain|on the college premises.')},
      {id:'e-c2',tokens:T('Volunteers|were allowed|to|prepare the objects for scanning,|but|only|college technicians|could operate the equipment.')},
      {id:'e-c3',tokens:T('The agreement|covered|the production of digital images,|not|the preparation of replacement objects,|so|damaged originals|were not automatically reproduced in physical form.')}
    ]},
    {label:'D',sentences:[
      {id:'e-d1',tokens:T('At first,|the online catalogue|showed|a general description of each group|rather than an entry for every individual object.')},
      {id:'e-d2',tokens:T('Individual entries|were added|only after|the location code and ownership details|had been verified,|even when|an image|was already available.')},
      {id:'e-d3',tokens:T('Researchers|could consult|unpublished descriptions|by appointment,|but|an appointment|did not entitle|them|to handle fragile items without supervision.')}
    ]},
    {label:'E',sentences:[
      {id:'e-e1',tokens:T('The archive|later introduced|an evening access trial|for people unable to attend during ordinary working hours.')},
      {id:'e-e2',tokens:T('Rather than extending every service,|staff|opened|the study room and the catalogue terminals,|while|the scanning studio|continued|to follow the college timetable.')},
      {id:'e-e3',tokens:T('The trial|was reviewed|using|written comments from participants,|not|the number of pages viewed online,|because|the trustees|wanted to understand|what visitors could actually achieve during a session.')}
    ]}
  ]};
  const evidence=[
    {id:'r-evidence-1',q:'Why were production tools included alongside finished prints?',sentence:'e-a2',why:'A2说明策展人认为磨损的版块能展示制作者如何修改错误；A3只说明最终展出范围。'},
    {id:'r-evidence-2',q:'Why did the archive request details about an object’s previous storage?',sentence:'e-b2',why:'B2直接说明要求的目的：判断可能影响安全操作的旧储存条件，不是市场估值。'},
    {id:'r-evidence-3',q:'Which group had permission to run the scanning equipment?',sentence:'e-c2',phrase:'college technicians',why:'run the equipment对应operate the equipment；only将操作许可限定给college technicians，志愿者只能做准备。'},
    {id:'r-evidence-4',q:'What information needed to be checked before an individual catalogue record could be published?',sentence:'e-d2',phrase:'the location code and ownership details',why:'checked对应verified；已有图像不代表位置代码和所有权已核实。'},
    {id:'r-evidence-5',q:'How could researchers obtain access to descriptions that were not yet public?',sentence:'e-d3',phrase:'by appointment,',why:'not yet public对应unpublished；所问是获取途径，对应by appointment，不是无监督接触实物。'},
    {id:'r-evidence-6',q:'Which source of feedback was used to evaluate the evening trial?',sentence:'e-e3',phrase:'written comments from participants,',why:'evaluate对应reviewed；反馈来源是参与者书面意见，网页浏览量被明确排除。'}
  ];
  const judgements=[
    {id:'r-tf-1',text:'A charitable trust offered a restricted grant for stabilising fragile textiles. The museum could choose the contractor, but it could not use the grant to acquire additional pieces, even if the same contractor offered them at a reduced price.',q:'The grant allowed the museum to select who would carry out the conservation work.',answer:'TRUE',why:'could choose the contractor直接支持该陈述。可选择承包者与不可购买新藏品是两个不同范围。',translation:'慈善信托提供了限定用途的资助，用于加固脆弱纺织品。博物馆可选择承包者，但不能用这笔钱添购藏品，即使承包者提供折扣。'},
    {id:'r-tf-2',text:'The society’s digital directory contains short accounts of each exhibition and can be searched by the name of a maker. Access is free, and descriptions are available in two languages. Where permission has been obtained, an entry also includes a photograph. Earlier printed editions can still be consulted at the reception desk.',q:'The digital directory is updated once a month.',answer:'NOT GIVEN',why:'文字介绍检索、费用、语言和图片，未提供更新频率。能在线查看不等于按月更新。',translation:'协会的数字目录介绍各场展览，可按制作者姓名检索。访问免费，说明有两种语言。获得许可的条目还附有照片。较早的纸质版本仍可在接待处查阅。'},
    {id:'r-tf-3',text:'Most objects in the touring selection had explanatory labels, but the unmarked samples were deliberately left without them. Visitors were invited to examine those samples before reading a separate guide that identified the materials.',q:'Every object in the touring selection had an explanatory label attached.',answer:'FALSE',why:'most不是every；unmarked samples被明确说明没有标签，存在反例，而非仅仅未说明。',translation:'巡展中大多数物品有说明标签，但无标记样本被有意留作无标签状态。访客先观察这些样本，再阅读另一本说明材料。'},
    {id:'r-tf-4',text:'The conservation team finished inspecting the frames before the transport company confirmed a collection date. Packing began after that confirmation, since the team needed to know how long the objects would remain in their cases.',q:'The frames were first inspected after the collection date had been confirmed.',answer:'FALSE',why:'原文先完成检查，再确认取件日期；题干把先后顺序颠倒。包装开始时间不能替代检查时间。',translation:'保护团队先完成框架检查，运输公司才确认取件日期。包装在日期确认之后开始，因为团队需要知道物品会在箱中停留多久。'},
    {id:'r-tf-5',text:'Two specialists examined the proposed donation and agreed that it would broaden the collection. Their joint report assessed its relevance and condition, recommending a protective case before the object went on display. Both signed the report after visiting the donor’s store on the same afternoon.',q:'Both specialists charged the donor the same fee for their assessments.',answer:'NOT GIVEN',why:'共同检查、共同签字和同日下午到访，都不能证明收费相同；原文没有费用比较。',translation:'两位专家检查拟捐赠物，同意它能丰富馆藏。联合报告评估相关性与状况，建议展出前准备保护箱。两人在同一下午到访捐赠者的库房后都签署了报告。'},
    {id:'r-tf-6',text:'The institution had enough funds to buy the cabinet, but its committee postponed the purchase until a suitable location had been agreed. Members were concerned about access for wheelchair users, rather than about the cabinet’s advertised price.',q:'The committee’s delay was related to accessibility rather than a shortage of money.',answer:'TRUE',why:'enough funds排除资金不足；延后是要确定满足轮椅使用者通行需要的位置。',translation:'机构有足够资金购买展柜，但委员会等到合适位置确定后才购买。成员关心轮椅使用者能否通行，而非广告价格。'}
  ];
  const notesPassage={title:'Preparing a community craft exhibition',paragraphs:[
    'A local craft association converted a disused workshop into a temporary exhibition space. The adjoining office remained in daily use, so the organisers chose the larger production room for the display. The exhibition concentrated on portraits rather than landscapes; it considered how makers represented members of the community, not how accurately they reproduced a view.',
    'Before the opening, volunteers assembled a catalogue containing descriptions of the selected works. The wall labels were shorter and did not replace this publication. An insurance inventory was prepared separately for administrative purposes. Neither document gave visitors permission to enter the storage area, which remained accessible only to designated staff.',
    'A conservator asked the association to monitor humidity during the exhibition. A simple instrument recorded the moisture level in the air so that staff could respond to changes before the paper surfaces were affected. The association did not install a permanent ventilation system for this short event.',
    'To make the entrance usable by visitors with limited mobility, a portable ramp was fitted over the single step. Volunteers kept the doorway clear rather than expecting visitors to use the service entrance. The costs of opening were covered by subscriptions from association members. Sales of refreshments supported later activities and were not included in that initial budget.'
  ]};
  const notes=[
    {id:'r-note-1',q:'Venue: a former ___, with the adjoining office still in use.',answer:'workshop',why:'converted a disused workshop对应a former…；office不是改成展厅的场所。'},
    {id:'r-note-2',q:'Main subject: ___ showing members of the local community.',answer:'portraits',why:'concentrated on portraits对应主要题材；landscapes被rather than排除，保留复数。'},
    {id:'r-note-3',q:'Publication: a ___ with descriptions longer than the wall labels.',answer:'catalogue',why:'publication指catalogue；labels较短，insurance inventory另有行政用途。'},
    {id:'r-note-4',q:'Restricted area: ___, entered only by designated staff.',answer:'storage',why:'原文the storage area；题干已给area，空格只填storage。'},
    {id:'r-note-5',q:'Environmental check: ___, measured as moisture in the air.',answer:'humidity',why:'humidity由moisture level in the air改写；ventilation是未安装的设施。'},
    {id:'r-note-6',q:'Entrance adaptation: a portable ___ over the step.',answer:'ramp',why:'ramp跨过台阶改善入口通行；不是要求访客改走服务入口。'},
    {id:'r-note-7',q:'Opening costs: paid for through members’ ___, excluding later refreshment sales.',answer:'subscriptions',why:'covered by subscriptions对应paid for through；饮品销售用于后续活动，不属于开幕预算。'}
  ];
  RRAddReadingTopic({
    id:'c21-r-t1-p1',location:{book:21,test:1,part:1},title:'艺术收藏与公共文化',
    focus:'艺术收藏语境中的核心词汇与改写；让步、限制、指代和观点归属；单词笔记填空；TRUE/FALSE/NOT GIVEN的证据边界。原创情境与事实顺序独立于真题。',
    coreWords:[['amass','逐渐积累大量藏品'],['inherit','继承遗产或藏品'],['inheritance','继承所得的财产'],['upbringing','家庭教养；成长环境'],['philanthropic','慈善的；为他人做好事的'],['pursuit','爱好；投入从事的活动'],['geared towards','为……设计的；面向……的'],['extensively','广泛地；在较大范围内'],['coincide with','与……同时发生'],['secure','成功取得'],['beyond one’s means','买不起；超出某人的经济能力'],['relatively','相对地；比较而言'],['contemporary','同时代的；当代的'],['champion','积极倡导或支持'],['have a hand in','参与；对……发挥作用'],['the bulk of','……的大部分'],['finance','为……提供资金'],['humanitarian','人道主义的（帮助受苦、受难的人）'],['vibrant','充满活力的'],['numerous','数量很多的'],['acquire','取得；获得所有权'],['unlikely','出人意料的；不太可能的'],['pioneer','先驱；开拓者'],['isolation','与外界隔绝；缺少联系'],['feel obliged to','觉得有义务或不得不做'],['trusted circle','一小群信得过的人'],['for consideration','供考虑；交给有关人员讨论决定'],['exclusively','仅仅；专门地'],['upheaval','较大的动荡或扰乱'],['respectively','分别地（前后按同一顺序对应）'],['legacy','留给后人的文化影响'],['institution','机构'],['conservation','藏品保护与维护'],['ownership','所有权'],['on loan','借展中的；借用中的（仍归原主人所有）'],['subscription','会费；会员缴纳的款项']],
    practices:[
      [
        {id:'reading-vocabulary',type:'quiz',unit:'题',title:'语境词义',instruction:'结合英文语境选择最准确的含义。',items:vocab},
        {id:'reading-rewrites',type:'quiz',unit:'题',title:'同义改写',instruction:'选择信息范围和逻辑关系都一致的表达。',items:rewrites},
        {id:'reading-matching',type:'paraphrase',title:'词组匹配',instruction:'拖动表达到对应位置；也可先点选项再点空格。已填选项可以拖回词库，或点击退回。',items:[matching]},
        {id:'reading-sentences',type:'reading-sentence',unit:'题',title:'长句理解',instruction:'前两题找主句的主语与谓语，中间两题找指代，最后两题判断句意。整套核对后显示翻译与解析。',items:sentences}
      ],
      [
        {id:'reading-evidence',type:'reading-evidence',unit:'题',title:'定位与证据',instruction:'切换题号后在短文中选择一个证据句。第3–6题还需点击句内的一处定位表达。',passage:evidencePassage,items:evidence},
        {id:'reading-judgements',type:'reading-judgement',unit:'题',title:'信息一致性判断',instruction:'仅根据每题提供的文字选择TRUE、FALSE或NOT GIVEN，不用常识补全缺失信息。',items:judgements},
        {id:'reading-notes',type:'reading-notes',unit:'题',title:'笔记填空',instruction:'每空从下文提取一个单词。Choose ONE WORD ONLY from the passage for each answer.',passage:notesPassage,items:notes}
      ]
    ]
  });
})();
