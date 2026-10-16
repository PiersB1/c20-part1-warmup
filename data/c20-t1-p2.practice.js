(() => {
const Q=RRQuiz.choice,C=RRQuiz.cloze;
RRAddTopic({test:1,part:2,title:'陶艺工坊',sourceRefs:['https://thesol.edu.vn/datafiles/35996/upload/files/Tai-lieu-ielts/Cam-ielts-20-demo_thesolielts.pdf'],
coreWords:[['pottery','陶艺'],['clay','黏土'],['workshop','实践工坊'],['kiln','陶窑'],['rim','器皿边缘'],['surface','表面'],['handle','拿取、操作'],['demonstration','示范'],['fragile','易碎的'],['equipment','设备'],['optional','可选择的'],['compulsory','必须的'],['set aside','留置一旁'],['provided','由工坊提供的'],['rather than','而不是'],['not until','直到……才']],
quiz:[
Q('导览说这次是 a practical workshop，最准确的是？',['主要讨论陶艺史','参与者会实际动手','只观看专业作品','只演示工具价格'],1,'practical 强调实际操作，不只是理论或观看。'),
Q('The bowls are fragile. 搬运时最需要注意什么？',['它们还未出售','它们容易破裂','它们太重无法移动','它们表面有颜色'],1,'fragile 指容易碎，不等于 heavy 或 unfinished。'),
Q('The demonstration is compulsory, but decorating is optional. 哪项正确？',['两项都必须参加','可以跳过示范，但必须装饰','示范必须参加，装饰可自行选择','两项都需另外付费'],2,'compulsory 和 optional 的范围相反；注意 but 后的区别。'),
Q('handle the clay carefully 中 handle 的意思是？',['给黏土装上把手','给黏土命名','小心拿取和操作黏土','检测黏土的价格'],2,'handle 在这里是动词“操作”，不是名词“把手”。'),
Q('The tools are provided, but you must return them. 可以推断什么？',['工具无需自带，但不能带走','工具需要先购买','工具归参与者永久所有','只提供工具清单'],0,'provided 只说明现场提供，后面的 return 限制了使用方式。'),
Q('Leave the rim untouched. 指的是不要碰哪里？',['容器底部','容器边沿','桌面中心','工具握柄'],1,'rim 是碗、杯等器皿的边缘。'),
Q('哪些表达表示“暂时放到一旁”？选两项。',['set it aside','leave it to one side','take it apart','throw it away'],[0,1],'放到一旁不等于拆开或扔掉。'),
Q('The fee covers materials, not the extra firing. 哪些说法正确？选两项。',['材料包含在费用里','所有后续处理都免费','额外烧制另计','只能使用自带材料'],[0,2],'covers materials 的范围不能扩展到额外烧制。'),
Q('a smooth surface 最接近哪种状态？',['有规则裂缝的内部','没有凹凸的表面','未经检查的材料','重量相等的两件作品'],1,'surface 是表面，smooth 描述平滑。'),
Q('The assistant will give a demonstration before you begin. 助教先做什么？',['替每个人完成作品','把操作过程展示出来','检查最终成品','分配作品售价'],1,'demonstration 是过程示范，而非代做。'),
C('选词填空：Use the wooden tool ___ the metal one.（rather than / even if）','rather than','rather than 比较两个选择，表示用前者而非后者。'),
C('选词填空：Do not move the tray ___ the tutor gives permission.（until / during）','until','not … until 表示直到得到许可才可以移动。')],
dictation:[
['This ___ is suitable for complete beginners.','workshop','workshop 指实际参与的工坊。'],
['Keep the ___ of the bowl away from your sleeve.','rim','rim 是器皿边缘。'],
['The small cups are still quite ___.','fragile','fragile 的重音在前，意思是易碎的。'],
['Watch the ___ before touching the material.','demonstration','demonstration 指操作示范。'],
['All the basic ___ is kept beside the sink.','equipment','equipment 是不可数名词，不加复数 s。'],
['Please ___ any pieces you are not using.','set aside','set aside = 留置一旁，注意连读。'],
['The afternoon decorating session is ___.','optional','optional 表示可选择参加。'],
['A wooden ___ is easier to hold with wet hands.','handle','这里 handle 是名词“握柄”。'],
['Use a damp sponge ___ a dry cloth.','rather than','rather than 引出不用的另一种选择。'],
['You ___ bring any specialist tools.','need not','need not 表示没有必要，不是禁止。', ["needn't"]],
['The tray must remain here ___ it is checked.','until','remain … until 表示状态一直持续到某个时点。'],
['The tutor ___ you the correct technique first.','will show','will show 的助动词容易被弱读。']],
locators:[
['What|[distinguishes]|the|[introductory session]|from|the later classes?','In|the|[first class]|we|[work only by hand,]|whereas|later sessions|use|additional equipment.','introductory session 对应 first class；distinguishes 要抓比较差别，whereas 后说明后续课程。','单选题干'],
['Why|must|[new participants]|[watch]|the demonstration first?','People|[trying pottery for the first time]|[observe the tutor]|before starting,|so they|understand|the order of the steps.','new participants 对应初次尝试的人；watch 对应 observe。原因在后面的 so 从句。','单选题干'],
['What|[problem]|can|[excess water]|cause|during shaping?','If|[too much liquid]|is added,|the clay|can|[become difficult to control]|on the table.','excess water 对应 too much liquid；problem 需要定位由此产生的后果。','单选题干'],
['Which|[aspect]|of the class|do|[returning learners]|value most?','Those|[who attend regularly]|say|[the individual advice]|is|what|keeps them coming back.','returning learners 指持续参加的人；value most 需要听回来的主要理由。','单选题干'],
['What|should|[participants]|do|[before changing workstations]?','[Everyone]|should|wipe the table|[before moving to another bench,]|even|if the next task|is similar.','participants 对应 everyone；changing workstations 对应 moving to another bench。','单选题干'],
['Why|are|[finished pieces]|[left at the workshop]?','[Completed objects]|[stay here]|because|the staff|need|to label them|before collection.','finished pieces 对应 completed objects；left 在这里是“留在”，不是“遗失”。','单选题干'],
['Which TWO|[items]|are|[included in the basic fee]?','The price|[already covers]|[a practice board and a storage box,]|while|the decorative stamps|cost extra.','included 对应 already covers；while 后的另收费项目不是包含项。','多选题干'],
['Which TWO|[actions]|does the tutor|[permit]|during the break?','Between tasks,|you are|[welcome to]|[take photographs or sketch a design,]|but|do not|move the labelled trays.','permit 对应 welcome to；后面的禁止事项与被允许事项要分开。','多选题干'],
['Which TWO|[features]|make|[the wooden tools]|suitable for younger learners?','The|[timber tools]|have|[rounded ends and lightweight handles,]|which|makes them|easier to manage.','wooden 对应 timber；features 要锁定两个工具特征，不是最后的概括。','多选题干'],
['Which TWO|[arrangements]|apply|[after the course ends]?','Once|[the final session is over,]|[collection appointments and reminder emails]|are organised|by|the office.','after the course ends 对应 final session is over；arrangements 是随后安排的事项。','多选题干']],
paragraphs:[
{title:'Before the session',text:'The studio runs an [introductory] course for adults. It is [hands-on], so learners spend most of the morning making objects. The tutor begins with a [demonstration] and then offers [individual guidance]. Basic tools are [supplied], while decorative stamps are [optional]. We put our bags near the door and checked which table had been assigned to us.',pairs:[['introductory','for people starting the subject','introductory 表示面向初学者的入门内容。'],['hands-on','involving practical activity','hands-on 指实际动手参与。'],['demonstration','an example showing how to do something','示范可以用一整段释义表达。'],['individual guidance','advice for each person separately','individual guidance 强调逐人的指导。'],['supplied','provided','supplied 和 provided 在提供工具时同义。'],['optional','not required for everyone','optional 不等于免费，而是并非人人必须。']],distractors:['reserved for experts','charged in advance','permanent storage']},
{title:'Handling a new piece',text:'A newly made bowl can be [fragile]. Keep its [rim] clear of the bench and check that the outer [surface] is even. The tutor asked us to [set aside] unused clay, [rather than] leave it near the water. We must wait [until permission is given] before taking a labelled tray to another table. The assistant keeps a record of every piece.',pairs:[['fragile','easily broken','fragile 指易碎，不是轻。'],['rim','the edge around an opening','rim 可以解释为开口周围的边。'],['surface','the outside layer','surface 是外表层。'],['set aside','put to one side','set aside 是暂时放到一旁。'],['rather than','instead of','两者都引出被排除的选择。'],['until permission is given','until someone says we may proceed','被动语态可换成有人允许的主动表达。']],distractors:['for the same price','repeat without changes','the centre of an object']}],
signals:[
{title:'Joining the morning workshop',focus:'留意设备借用、示范顺序和取件安排。',transcript:['Our morning group meets in the smaller studio behind the reception desk.','There are stools around the long bench and a shelf where you can leave your bags.','The important point is that borrowed tools must stay in this room throughout the session.','Your tutor will introduce everyone and show a few examples of previous work.','Actually, you should watch the whole demonstration before opening your packet of clay.','There is a short interval when you can get a drink from the corridor.','As for collection, the office will contact you separately when your labelled work is ready.','Please write your preferred contact details clearly on the card by your seat.'],cues:[{sentence:2,signal:'The important point',why:'提醒借用设备的限制，后面是具体规则。'},{sentence:4,signal:'Actually',why:'修正操作顺序，强调先完整观看示范。'},{sentence:6,signal:'As for collection',why:'明确转入取件安排，后面接通知方式。'}]},
{title:'Preparing for the next session',focus:'留意课程变动、清理责任和预约要求。',transcript:['Next week we will use the studio at the far end of the same corridor.','It has a larger drying shelf and a separate corner for making simple designs.','One change to note is that the afternoon group will now begin with a drawing exercise.','You can look through the folder of sample patterns while the materials are being distributed.','However, each person is responsible for wiping their own table before leaving.','The assistant will check the labels and carry the trays into the storage room.','If you want an additional session, make a reservation before the current course finishes.','The booking form will be available on the reception desk beside the printed timetable.'],cues:[{sentence:2,signal:'One change to note',why:'信号引出本次变动，不要混同原课程安排。'},{sentence:4,signal:'However',why:'从服务安排转到个人清理责任。'},{sentence:6,signal:'If you want',why:'条件句引出额外课程的预约要求。'}]}]
});})();
