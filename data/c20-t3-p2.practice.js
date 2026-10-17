(() => {const Q=RRQuiz.choice,C=RRQuiz.cloze;
const map={caption:'练习用遗址平面图 · 只标记题干与录音中的地点、方向词，不填字母',svg:`<svg viewBox="0 0 640 340" role="img" aria-label="练习遗址图。北向上，入口在左下方。主路横向穿过中部，中央有南北分叉。A在西北、B在东北、C在西南、D在北部中央、E在东南、F在南部中央。"><rect x="20" y="20" width="600" height="300" rx="10" fill="#f2f4e9" stroke="#bdc9b9"/><path d="M55 295V170H585M310 65V280" fill="none" stroke="#d6c6a1" stroke-width="17"/><path d="M55 295V170H585M310 65V280" fill="none" stroke="#fffdf4" stroke-width="9"/><g fill="#e4ece0" stroke="#95aa92" stroke-width="2"><rect x="80" y="55" width="90" height="65" rx="5"/><rect x="460" y="55" width="95" height="65" rx="5"/><rect x="80" y="215" width="90" height="65" rx="5"/><circle cx="310" cy="90" r="27"/><rect x="460" y="215" width="95" height="65" rx="5"/><rect x="265" y="220" width="90" height="60" rx="5"/></g><g fill="#34553c" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle"><text x="125" y="95">A</text><text x="508" y="95">B</text><text x="125" y="255">C</text><text x="310" y="98">D</text><text x="508" y="255">E</text><text x="310" y="258">F</text></g><g fill="#59685d" font-family="sans-serif" font-size="12"><text x="28" y="313">Entrance</text><text x="370" y="156">Main path</text><text x="55" y="40">N ↑</text></g></svg>`};
RRAddTopic({test:3,part:2,title:'考古遗址导览',map,sourceRefs:['https://www.ieltsvault.com/resources/listening/tests/cambridge-ielts-20-listening-test-3'],
coreWords:[['excavation','考古发掘'],['uncover','发掘出、发现'],['remains','遗迹'],['evidence','证据'],['layer','地层'],['site','遗址、现场'],['survey','勘察'],['preserve','保护、保存'],['identify','识别'],['previously','此前'],['junction','交叉路口'],['opposite','在……对面'],['beyond','在……更远处'],['adjacent to','紧邻'],['north-east','东北方'],['keep to','沿着、不离开'],['northwards','向北'],['southbound','向南行进'],['westwards','向西'],['eastbound','向东行进'],['straight on','继续直走'],['the top of the plan','地图上方（北向上时）']],
quiz:[
Q('The excavation has uncovered a wall. 最准确的意思是？',['新建了一面墙','发掘过程使一面旧墙显露出来','确认墙一定来自某个年代','把墙完整搬到室内'],1,'uncover 强调显露，不自动说明年代或搬运。'),
Q('The remains have been identified, but not fully investigated. 哪项成立？',['已经彻底研究完毕','已识别遗迹，但研究未完成','遗迹还未被找到','已经证明所有最初猜测都正确'],1,'identified 与 fully investigated 是不同阶段。'),
Q('The evidence suggests a workshop, rather than proving it. 语气如何？',['已无疑证明用途','有线索支持，但并非确定结论','已排除工坊用途','只是在给游客指路'],1,'suggests 的确信程度弱于 proves。'),
Q('A layer lies beneath the current surface. beneath 表示？',['在上方','在下方','紧贴右侧','围绕四周'],1,'beneath 是垂直位置的下方。'),
Q('The shelter is adjacent to the path. 位置是？',['位于路的尽头之外','紧邻道路','与道路隔着整个广场','在道路正上方'],1,'adjacent to 指挨着，不等于 beyond。'),
Q('Go beyond the junction before turning. 正确的顺序是？',['到路口前就转弯','先越过路口再转弯','在路口停下不再前进','掉头回到入口'],1,'beyond 的参照物是路口，顺序不能反。'),
Q('哪些表达都含“尚未完成”的意思？选两项。',['still being examined','not yet fully recorded','already completed','no further work remains'],[0,1],'still being 与 not yet 都能提示工作未结束。'),
Q('Keep to the marked paths, even near the visitor area. 哪两点有依据？',['访客区附近也要守路径限制','可以走入所有空地','应沿标记路径行走','只有发掘区才有路径规则'],[0,2],'even 强调访客区也不例外。'),
Q('The project was founded recently, but the object was found earlier. 两词分别表示？',['发现项目；建立物件','建立项目；发现物件','修复项目；购买物件','资助项目；展示物件'],1,'founded 是建立；found 是 find 的过去式。'),
Q('The plan shows the north-east corner. 指的是图的哪一区？',['左下方','右上方（北向上时）','正中间','左上方'],1,'北向上时东在右，东北是右上方。'),
C('选词填空：The store is on your left ___ you cross the central path.（after / despite）','after','after 说明先越过道路，再看左侧。'),
C('选词填空：The objects have ___ recorded, so the team can move on.（already / yet）','already','肯定完成式中 already 表示已经；yet 通常见于否定或疑问。')],
dictation:[
['The ___ will continue beside the old boundary.','excavation','excavation 指发掘工作。'],
['The team found a thin ___ of darker earth.','layer','layer 是一层。'],
['These ___ will stay where they were discovered.','remains','remains 作遗迹通常为复数形式。'],
['The first ___ took place before digging began.','survey','survey 在这里是现场勘察。'],
['There is not enough ___ to date the structure.','evidence','evidence 是不可数名词。'],
['The path continues ___ the main junction.','beyond','beyond 表示越过参照点再往前。'],
['The equipment store is ___ the garden.','opposite','opposite 表示对面。'],
['The shelter stands ___ the boundary fence.','adjacent to','adjacent to 是紧邻。'],
['Please ___ the paths throughout the visit.','keep to','keep to 是沿着指定路线。'],
['The roofed area lies to the ___ of the crossroads.','north-east','north-east 中两部分都要听清。',['northeast','north east']],
['The object ___ been fully examined.','has not yet','has not yet 表示至今尚未。',["hasn't yet"]],
['Turn left only ___ passed the entrance.','after you have','after you have 的助动词常弱读。',["after you've"]]],
locators:[
['Why was the|[community excavation]|[extended]|into another season?','The|[local digging project]|was|[allowed to continue]|because|additional volunteers|joined|the recording team.','community excavation 对应 local digging project；extended 对应 allowed to continue。','单选题干'],
['What|[first indicated]|the presence of|[a buried structure]?','A shape|in|[an aerial photograph]|[initially suggested]|that|something had been built|under the field.','first indicated 对应 initially suggested；buried structure 的线索来自影像而非最终发掘结果。','单选题干'],
['Why is|[one section]|[closed to visitors]|this morning?','[The western trench]|is|[not open to the public]|while|the team|checks the unstable edge.','one section 指定 west trench；closed 对应 not open，原因在 while 后。','单选题干'],
['What|[unexpected discovery]|was made|[near the entrance]?','[Beside the way in,]|we found|[a patterned stone]|that|nobody had anticipated|during the survey.','near the entrance 对应 beside way in；unexpected 由 nobody anticipated 表达。','单选题干'],
['What do researchers|[still need to establish]|about|[the small building]?','The team|[has not yet worked out]|how|[the little structure]|was used,|although|its outline is clear.','still need establish 对应 has not yet worked out；题目问未解决之处。','单选题干'],
['What will the team|[do next]|[once recording is complete]?','[After everything has been documented,]|we will|[prepare an illustrated report]|before considering|a public display.','once recording complete 对应 documented；do next 要抓最近的下一步而非更远计划。','单选题干'],
['On this plan,|where is the|[storage hut]|in relation to|the main route?','The|[equipment store]|is|[below the main path]|and|[west of the crossroads,]|not at|the entrance itself.','storage hut 对应 equipment store；两条方位同时限定为图中 C，不要只看入口附近。','地图标注'],
['Which area|on the plan|contains|the|[old well]?','The|[disused water shaft]|lies|[directly north of the junction,]|between|the two upper plots.','old well 对应 disused water shaft；directly north 排除东北或西北，对应 D。','地图标注'],
['Where is|the|[covered working area]|on this site plan?','The|[roofed work zone]|is in the|[north-east corner,]|beyond|the central branch|of the path.','covered 对应 roofed；north-east 指向图的右上方 B。','地图标注'],
['Which area|on the plan|shows|the|[garden]?','The|[planted area]|is|[east of the junction]|and|[south of the main path,]|rather than|beside the northern plots.','garden 对应 planted area；东且南同时成立，对应 E。','地图标注']],
paragraphs:[
{title:'Recording a discovery',text:'The first [survey] was carried out before the [excavation] began. Researchers hoped to [uncover] the outline of a building. A dark [layer] contained objects that might provide [evidence] about its use. The team decided to [preserve] the most delicate pieces in place while recording their positions. They avoided drawing conclusions from a single object.',pairs:[['survey','an initial examination of the site','survey 是现场初步勘察。'],['excavation','digging to investigate buried remains','excavation 是为了考古而发掘。'],['uncover','reveal','uncover 可以对应 reveal。'],['layer','a distinct level of material','layer 指不同层位。'],['evidence','information supporting a conclusion','evidence 是支持判断的信息。'],['preserve','protect from deterioration','preserve 强调防止破坏与劣化。']],distractors:['prove every assumption','remove without recording','a newly constructed building']},
{title:'Following the site plan',text:'Visitors must [keep to] the marked paths. After reaching the [junction], continue [beyond] the small sign. A shelter is [adjacent to] the fence, and a second structure stands [opposite] the planted area. The route finally enters the [north-east] section of the site. Use both the direction and the nearby landmark before deciding which area is being described.',pairs:[['keep to','stay on','keep to 表示不离开指定路线。'],['junction','the place where paths meet','junction 是交汇处。'],['beyond','further on than','beyond 是越过参照点之后。'],['adjacent to','immediately beside','adjacent to 表示紧挨着。'],['opposite','facing across from','opposite 是隔着某处相对。'],['north-east','the upper-right direction on this plan','本图北向上，东北是右上方。']],distractors:['before reaching','on the same side as','the lower-left direction']}],
routes:[{
  title:'遗址访客步道',
  map:{width:640,height:410,nodes:[
    {id:'gate',x:100,y:320,label:'Entrance'},
    {id:'west',x:100,y:210,label:'West junction'},
    {id:'tent',x:100,y:90,label:'Research tent'},
    {id:'centre',x:300,y:210,label:'Noticeboard'},
    {id:'store',x:300,y:320,label:'Storage shed'},
    {id:'garden',x:500,y:320,label:'Herb garden'},
    {id:'east',x:500,y:210,label:'East junction'},
    {id:'upper',x:300,y:90,label:'Tool store'},
    {id:'shelter',x:500,y:90,label:'Visitor shelter'}
  ],edges:[['gate','west'],['west','tent'],['gate','store'],['west','centre'],['tent','upper'],['centre','upper'],['centre','store'],['store','garden'],['centre','east'],['upper','shelter'],['garden','east'],['east','shelter']]},
  start:'gate',goal:'shelter',expectedPath:['gate','west','centre','store','garden','east','shelter'],
  buttonLabels:{north:'Northwards',south:'Southbound',west:'Westwards',east:'Eastbound'},
  transcript:[
    'You are at the entrance in the lower left corner of the visitor plan, with north at the top.',
    'First, head northwards to the first junction, stopping before the research tent.',
    'From that junction, take the eastbound path towards the noticeboard in the centre.',
    'Do not continue up to the tool store; instead, go down the plan to the storage shed.',
    'Once there, make your way east to the herb garden at the next corner.',
    'Now head towards the top of the plan, pass the eastern junction, and carry straight on to the visitor shelter.',
    'That is where this part of the visit ends.'
  ],
  explanation:'先向北到西侧路口，再向东到 Noticeboard；instead 排除北侧 Tool store，改为向南到 Storage shed。接着向东到 Herb garden，最后连续向北两段，经过 East junction，到 Visitor shelter。',
  vocabulary:[['head northwards','向北行进'],['take the eastbound path','沿向东的步道'],['go down the plan','向地图下方走'],['make your way east','往东走'],['towards the top of the plan','朝地图上方走'],['carry straight on','沿当前方向继续直走']]
}],
signals:[
{title:'An update from the site team',focus:'留意延长项目的原因、未解决问题和下一步计划。',transcript:['Welcome to the community excavation and thank you for joining this short introduction.','The recording team has set up a small desk beside the visitor entrance.','What allowed us to continue was the arrival of extra volunteers to help catalogue the objects.','We now have enough people to record finds from the different sections each afternoon.','However, we still do not know exactly how the smallest building was used.','The outline is clear and the photographs show its position beside the boundary.','Once the recording is finished, our next task will be producing an illustrated report.','The team will discuss public events separately after reviewing all the information collected this season.'],cues:[{sentence:2,signal:'What allowed us to continue',why:'引出项目延续的原因，而非最初创办者。'},{sentence:4,signal:'However',why:'转折指出尚未确定的用途。'},{sentence:6,signal:'Once the recording is finished',why:'时间条件引出记录完成后的下一步。'}]}]
});})();
