(() => {
const P=RRParagraph,R=(t,p,e)=>RRReviseTopic(`c20-t${t}-p${p}`,e);
R(1,3,{
coverage:'孤独与独处概念；共同认可与一方反对；理论的实用性、证据充分性；例子的作用与归属感。',
options:`主动选择安静的个人时间|短暂没有参加社交活动|对陌生人讲话感到紧张
被迫长期缺少人际联系|与他人争执后被排斥|在人群中仍感到孤单
正式取得组织成员资格|必须参与所有集体活动|依靠他人安排全部生活
身体活动范围受限|每天通勤路线的长度|愿意接触陌生人的程度
一个因素已经造成另一个|同一组对象的随机差异|研究者提出的干预措施
经过大型试验反复证实的|以统一量表系统测得的|可以代表全部人口的
研究涉及的全部人口|负责分析资料的研究者|一项研究得出的最终结果
只因人数较多就可信的|每个个体完全相同的|只包含愿意支持假设的`,
grammar:[['They agree that the theory is interesting, ___ not that it solves the problem.（but / so）','but','同意趣味性，不等于认同实用性。','Both accept the explanation, ___ disagree about its practical value.'],['More evidence is needed before a cause ___ established.（can be / has）','can be','建立因果结论需要证据，不是有关联就能确定。','With stronger evidence, a causal account ___ accepted for this particular population.']],
locators:`Which TWO urban features contribute to [isolation|1]?~Limited shared space and frequent moves can leave people [cut off from others|1].~isolation 对应 cut off from others，不是单纯身处独立房间。
Which TWO explanations are not [adequate|1] on their own?~Neither {household size} nor {online activity} is [enough|1] to explain the whole pattern.~adequate 对应 enough，两句的否定都作用于充分性。
Which TWO claims have [convincing|1] evidence?~Several independent studies provide [strong|1] support for one association and {an age}-related pattern.~convincing 对应 strong，不是任何提及都算强证据。
Which TWO concerns could [distort|1] {the survey} findings?~A small {volunteer sample} and {leading questions} may [bias|1] {the results}.~distort 与 bias，样本和题问方式是两类风险。
Which TWO benefits concern a sense of [belonging|1]?~{The group} offers contact and a feeling of [being part of the neighbourhood|1].~belonging 对应 being part of neighbourhood。
Which TWO uses of personal examples are [appropriate|1]?~{A familiar experience} can introduce the topic; a {contrasting case} is also [suitable|1] for clarifying the definition.~appropriate 与 suitable，不把例子当普遍证据。
How useful is {the theory} for [practical action|1] [at present|2], even if it offers an interesting explanation of how the problem may originally have developed?~The account of its origins is interesting, but for [what to do|1] [now|2] it offers little guidance; explaining how a problem began does not necessarily suggest an effective response to it.~practical action 对应 what to do；at present 对应 now，起因解释与当下行动分开。
What do they say about [supporting evidence|1] for the {second theory}, given that {some findings} are encouraging but have not produced a [conclusive|2] result?~Some [results in its favour|1] are available, so the account is not unsupported, but none is [decisive|2]; the students want a stronger comparison before treating it as the most convincing explanation.~supporting evidence 对应 results in favour；conclusive 对应 decisive，未定论不等于没有支持。
Why is the [opening anecdote|1] suitable for the [student audience|2], {rather than} merely being included as an entertaining event from one speaker's {personal experience}?~{The story} is entertaining, but the [class|2] can recognise the situation in the [introductory story|1]; that makes {the issue} relatable before {the speakers} introduce research that requires a more precise definition.~opening anecdote 对应 introductory story；student audience 对应 class，叙事服务于受众理解。
How do [both students|1] view [voluntary solitude|2], while accepting that {an experience} they personally dislike might still be worthwhile for somebody with {different preferences}?~[Neither speaker|1] finds {a holiday} alone appealing, but they recognise that [choosing to be by oneself|2] may suit other people; their {personal preference} is not a claim that everybody needs {the same experience}.~both students 对应 neither speaker 所覆盖的双方；voluntary solitude 对应 choosing to be by oneself。`,
paragraphs:[P('Distinguishing experiences',`A participant can [be on their own=>be physically alone=>客观独处不必然孤独] without distress. Someone in a crowded place may [feel cut off=>experience a lack of meaningful connection=>主观缺少联系]. The students should [draw a distinction=>separate the concepts=>概念区分]. One interview [cannot stand for=>does not represent=>个例不能代表整体] the entire population. A familiar story [helps listeners relate=>makes the issue recognisable=>增强代入而非证明因果]. It is [a starting point=>an introduction rather than a conclusion=>引入问题而非研究结论].`,['proof of causation','the final conclusion','feel physically crowded']),P('Weighing agreement',`One explanation was [plausible=>reasonably believable=>有道理但未证实]. A partner [conceded the point=>accepted that particular argument=>只接受该项论点]. She still [had reservations=>retained doubts=>仍有保留]. Evidence was [consistent with=>compatible with=>相符不等于独占解释] the theory. Practical guidance was [thin on the ground=>scarce=>可用指引有限]. The pair [reached common ground=>found a position both accepted=>达成有限共识] about further research.`,['proved conclusively','rejected every part','provided abundant guidance'])],
signals:[{title:'Not the same experience',focus:'概念区分、共同认可、证据强度。',text:`I started by treating every period without company as the same experience.
That would make the topic simple, but it would also miss something important.
Choosing a quiet afternoon alone is different from wanting contact and being unable to find it.~直接区分主动独处与缺少期望联系两个概念。
Yes, we should make that distinction near the beginning of the presentation.
The explanation we both accept concerns opportunities for meaningful contact, rather than the number of people physically nearby.~both accept 与 rather than 限定共同观点。
Several interviews fit that explanation quite well.
Still, those examples do not prove a cause, because people volunteered and may not represent the wider group.~Still 限定从个例到因果及总体的推断。
We can use them to frame a question that a better-designed study would examine.`},{title:'A theory and a useful action',focus:'认可范围、实用性、引例目的。',text:`The second article offers an interesting account of how the problem may have developed.
I thought parts of it were convincing, particularly the discussion of changing social routines.
But finding an explanation interesting does not mean it tells us how to improve people's experience now.~But 区分解释吸引力与实践价值。
That is a fair point; we need to compare it with evidence about actual interventions.
The neighbourhood activity seems promising because participants describe feeling more connected, although a stronger evaluation is still needed.~理由与证据保留并存，promising 不是确认疗效。
We could introduce that section with a situation from our first week at college.
The purpose of the story would be to make the situation familiar to listeners, not to use our own experience as scientific proof.~purpose 指定叙述作用，排除以个人经历作证明。
Then the research question can follow naturally from the example.`}]
});
R(1,4,{
coverage:'河流过去与现在；生物意义上的状态；旧建筑改造；滨水设施目的；客运货运方案；未来技术与当前许可。',
options:`把废物从水中回收|仅把河水引到另一条河|测量水中废物的含量
河水季节性涨落|河道自然形成的泥沙|水流速度逐年降低
河流中央的最深水道|所有流入河流的支流|河流入海处的区域
用全新结构完全替代|只将外观装饰得美观|停止使用以免进一步损坏
某一个物种的总个体数|河水中污染物的总数量|河流沿岸的人口密度
从地下抽上来的水|沿河道向下游流动的水|从海洋倒灌进入河口的水
完全未开发的野生湿地|远离河岸的新建城区|只供货船装卸的码头
供乘客高速游览的小艇|只能在远洋航行的货船|固定不动用于展览的平台`,
grammar:[['The warehouse is being converted ___ studios.（into / by）','into','convert into 表示改成的用途。','An old loading shed is being turned ___ a community workshop.'],['The proposed delivery method is not ___ permitted.（yet / still to）','yet','未来设想与当前许可状态分开。','Automated river deliveries have not ___ received approval.']],
locators:`Earlier [industrial expansion|1] increased {the amount} of ___ entering {the river}.~As [more workshops opened|1] along {the banks}, {untreated material} increasingly reached {the water}.~industrial expansion 由更多工坊出现体现。
The description [biologically inactive|1] referred to a lack of ___ .~It meant [very little could live there|1], not that {the river} had stopped flowing.~biologically inactive 对应难有生物存活，不是水不流动。
Recent {wildlife sightings} [indicate|1] ___ {rather than} complete restoration.~Animals returning [suggest|1] improvement, but do not prove that every problem is solved.~indicate 对应 suggest，迹象不是修复完成证明。
[Former warehouses|1] now provide space for ___ .~[Disused storage buildings|1] are being adapted for studios and {shared workplaces}.~former warehouses 对应 disused storage buildings，过去与现在用途分开。
The [proposed|1] {public square} would allow residents to ___ .~The [planned|1] riverside space would give people room to gather and exercise.~proposed 与 planned，尚非已开放。
Work by [local artists|1] could be shown in ___ .~Projects made by [creative people from the neighbourhood|1] may be displayed in shared riverside venues.~local artists 对应本地创作者，展示地点另听。
The [temporary|1] road change excludes [ordinary vehicles|2] during ___, {rather than} creating a permanent ban on all forms of transport along the riverbank.~For the seasonal event, [normal traffic|2] is kept off {the road} [for a limited period|1]; access for {the usual vehicles} returns afterwards, so the arrangement is not a permanent pedestrian scheme.~temporary 对应 limited period；ordinary vehicles 对应 normal traffic，限时与永久区分。
The [commuter|1] transport proposal uses ___ to avoid [congested|2] streets, {rather than} adding another {road service} to the existing traffic at {peak times}.~{Another bus} would still face [crowded|2] roads, so {the proposed shuttle} is waterborne and carries [people travelling to work|1] along {the river}, providing {an alternative} during the busiest part of {the morning}.~commuter 对应 people travelling to work；congested 对应 crowded，水运区别于新增公路班车。
The [final stage|1] of freight delivery would use ___ on land, once goods have reached the [riverside hub|2] by {a different form} of transport.~The {river journey} {ends at} the [distribution point beside the water|2]; for the [last part|1] of {the journey}, small electric vehicles could take goods through {local streets} to shops and other nearby customers.~final stage 对应 last part；riverside hub 对应 distribution point beside water，运输分段不能混合。
The [automated|1] delivery proposal lacks [authorisation|2] under present ___, even though {the project} team is discussing it as {a possible future development} {rather than} rejecting it permanently.~{The team} is discussing [uncrewed|1] deliveries, but present rules do not provide [permission|2] for them; being interested in {the idea} is different from being allowed to operate it on {the river} now.~automated 在此由 uncrewed 具体化；authorisation 对应 permission，讨论与合法运营状态不同。`,
paragraphs:[P('A river changes',`The old river had [suffered from=>been harmed by=>受损的原因] untreated waste. Its condition [improved over time=>became better gradually=>逐步改善而非瞬间完成]. Returning wildlife [is a sign of=>provides an indication of=>迹象而非充分证明] recovery. Empty premises were [given a new lease of life=>brought back into useful service=>旧空间再利用]. New access [opened up=>made available=>向公众开放] parts of the bank. The project [falls short of=>does not yet achieve=>尚未完全达到] restoring every habitat.`,['proof of complete recovery','rebuilt from nothing','closed to all visitors']),P('Transport proposals',`A trial aims to [ease congestion=>reduce road crowding=>缓解而非完全消除拥堵]. Goods could [be transferred=>be moved between services=>运输方式之间转运] at a small hub. The final connection is [the last leg=>the concluding stage=>最后一段，不是整个行程]. A scheme is [under review=>still being assessed=>正在评估，未保证实施]. New technology may be [technically feasible=>possible in engineering terms=>技术可行不等于合法]. It must also [gain permission=>receive formal approval=>另需获批].`,['already authorised','the whole journey','remove all traffic permanently'])],
signals:[{title:'Restoration and reuse',focus:'历史原因、状态含义、改造用途。',text:`The waterfront project began with a review of the river's earlier industrial role.
Factories and workshops had used the banks as convenient places for loading and disposal.
The description of the old river as biologically inactive referred to its inability to support life, not to a lack of flowing water.~澄清术语的实际含义，排除字面误解。
Treatment work and changes in surrounding land use have since improved conditions.
Returning animals are encouraging evidence, although they do not show that every damaged habitat has recovered.~although 限定积极证据能支持的结论。
Several buildings beside the water were also standing empty.
Instead of demolishing them all, the project is adapting some for public workshops and shared working spaces.~Instead of 区分拆除与新用途改造。
Those uses are being assessed alongside access, safety and the needs of nearby residents.`},{title:'Moving people and goods',focus:'客货运区别、行程分段、许可限制。',text:`The planning team is considering whether the waterway could reduce pressure on local roads.
Different proposals address commuters and small deliveries.
For passengers, a shuttle would link existing stops rather than carry freight to warehouses.~For passengers 锁定用途，排除货运。
Deliveries would instead be brought to a riverside transfer point.
The final short connection would be made on land using smaller electric vehicles.~final short connection 指定行程末段。
An automated option has also appeared in the longer-term discussion.
That remains a future possibility because the current rules do not permit the uncrewed service being proposed.~because 引出当前不可实施的许可原因。
Technical trials alone would therefore not be enough to begin a permanent public service.`}]
});
R(2,3,{
coverage:'研究选题观点匹配；兴趣与相关性分开；统计数据的时效可靠性；城市问题归属；改造隐藏成本；计划落实程度。',
options:`只研究地形和气候的|只计算城市道路长度的|只描述建筑风格的
发表时间最接近现在的|只要来自官方就完全正确的|与预想结果一致的
结论被证实的可信程度|一个课题使用的样本数量|全部研究支出的金额
阅读起来很有趣的|研究者经常引用的|内容非常详细的
某地的平均收入值|人口总数持续下降|对公共项目缺乏兴趣
用全新建筑拆除全部旧区|只对历史建筑进行粉刷|把现有居民统一搬离城市
目前仍在使用的耕地|从未开发过的自然保护区|所有位于城市边缘的土地
仅指道路和桥梁的外观|一个城市全部住宅的市场价|居民参与公共活动的次数`,
grammar:[['The source is interesting but may not ___ relevant.（be / been）','be','有趣与切题是不同评价维度。','A detailed article need not ___ suitable for our question.'],['We know what was planned, not how much ___ completed.（has been / have）','has been','计划与已完成事实分开，完成被动。','The proposal states the target, but little ___ confirmed about delivery.']],
locators:`What is {their view} of [demographic|1] data as {a research} topic?~The [population|1] figures are easy to obtain but hard to compare across years.~demographic 对应 population，易获取不等于易比较。
How [relevant|1] is {the public}-health research to {the course}?~Studies of treatment access seem [closely connected|1] to {the subject}, even if {some details} are technical.~relevant 对应 closely connected，技术难度不表示离题。
What concern affects economic information from [older|1] surveys?~Figures from [earlier|1] research may no longer describe the current {employment situation}.~older 与 earlier，旧数据未必仍代表现在。
What problem concerns the cultural topic's [scope|1]?~Comparing {every local tradition} would make {the project's} [range|1] too broad.~scope 对应 range，范围过大不是主题无趣。
What is said about [deprivation|1] as {a research} issue?~[Lack of access to basic opportunities|1] offers a clear question but needs careful definition.~deprivation 对应基本机会匮乏，标记概念的必要释义。
What problem concerns [affordable|1] homes in Asha's city?~Finding somewhere [within an ordinary budget|1] is difficult, although the {visitor centre} is expanding.~affordable 对应 within ordinary budget，扩建游客中心不是住房问题的解决。
Which [recent|1] development do [both students|2] welcome, {rather than} the {proposed scheme} that would create a similar facility but has not yet received funding?~The unfunded scheme is still only a proposal, but [the two of them|2] are pleased that the {former depot} has [just|1] opened for public recreation, providing something people can use immediately.~recent 对应 just；both students 对应 two of them，已开放与未筹资项目区分。
What [financial risk|1] concerns [redeveloping|2] industrial land, even when {the location} appears convenient and the {first estimate} suggests that {the project} should be affordable?~A convenient location is attractive, but [converting the use of|2] an {old factory site} may involve hidden work; the [possibility of overspending|1] matters even when the {first budget} looks manageable.~financial risk 对应 possibility of overspending；redeveloping 对应 converting use of，初估不等于最终成本。
Why include the [low-carbon|1] district as an example of reducing [dependence|2] on external power, {rather than} claiming it has already achieved every environmental target?~It illustrates an attempt to use [less fossil fuel|1] and reduce [reliance|2] on energy brought in from elsewhere; {the design} is relevant even though we cannot claim that all its targets have been met.~low-carbon 对应 less fossil fuel 的减排方向；dependence 对应 reliance，目标与完成状态分开。
What is [uncertain|1] about {the new town's} [implementation|2], although the students understand {the scheme's} {stated objectives} and have seen drawings of the {proposed buildings}?~{The objectives} and drawings are clear, but the [progress in carrying it out|2] remains [unknown|1]; we cannot tell from those documents how much has actually been built on {the ground}.~uncertain 对应 unknown；implementation 对应 carrying it out，图纸不证明落地。`,
paragraphs:[P('Selecting a manageable question',`A source can be [engaging=>interesting to read=>有趣并不自动切题]. It must also [bear on=>be relevant to=>与问题有直接关系] the question. A broad topic should be [cut down to size=>reduced to a manageable scope=>控制范围]. Old figures may be [out of date=>no longer current=>时效不足，不代表当时错误]. A term needs [a working definition=>a clear meaning for use in this study=>研究中可操作的定义]. The pair want [evidence they can check=>verifiable information=>可核实，不只是容易找到].`,['automatically relevant','always false when collected','a final causal conclusion']),P('Comparing developments',`An abandoned site may [come with hidden costs=>involve expenses not apparent initially=>隐性成本]. A new facility can [be welcomed=>receive a positive response=>受欢迎而非正式批准] by residents. An energy scheme [aims to=>has the objective of=>目标不等于完成事实] reduce reliance on outside supplies. Progress may [lag behind=>advance more slowly than=>进度落后于] the plan. The students must [tell apart=>distinguish=>区分] intention and delivery. Their conclusion should [reflect uncertainty=>acknowledge what remains unknown=>保留未知范围].`,['has already achieved','be officially authorised','ignore missing information'])],
signals:[{title:'Opinions on sources',focus:'评价维度、可靠性、研究范围。',text:`We have several possible topics, but we cannot investigate all aspects of the district.
The cultural material is enjoyable and gives us many possible examples.
Enjoyable does not necessarily mean relevant to our question, so we should check what the course actually asks us to explain.~明确兴趣与相关性不同，不能只听正面评价。
Population statistics are easier to locate in published reports.
My concern there is whether figures from different years can be compared, not whether the subject is worth studying.~concern 锁定评价维度，排除主题价值。
We could avoid that difficulty by narrowing the period we examine.
Let us choose one clearly defined issue rather than describe the whole district without enough detail.~choose 标明最终缩小范围的决定。
That will also make the limitations easier to explain in our presentation.`},{title:'A plan is not a result',focus:'改造成本、举例目的、落实程度。',text:`The old depot offers an interesting comparison with the proposed low-carbon district.
Both projects claim to improve the way residents use local facilities.
Reusing the depot may involve costs that were not visible in the first estimate, especially if the ground needs treatment.~may 与 especially 引入隐藏费用原因。
The energy scheme has a different purpose and a much longer timetable.
We should use it as an example of an intended reduction in outside energy use, not as proof that independence has been achieved.~例子目的与既成事实分开。
The brochure describes its goals in considerable detail.
What remains unclear is how much of that proposal has actually been delivered, rather than what the planners hoped to do.~unclear 锁定完成程度，排除目标不明确。
We will need an update before presenting any building target as an established result.`}]
});
R(2,4,{
coverage:'食品潮流传播链；名人背书、营销手段和消费需求；案例中的渠道、强调卖点、资源代价与替代方案。',
options:`政府对食品安全作的许可|消费者购买后给出的评价|生产商承诺统一售价
一次偶然出现的品牌提及|产品销售后的价格结算|只向内部员工发出的通知
只指负责分销的中间商|只指提出新产品的人|任何看过广告但不购买的人
仓库中等待出售的存货|生产商能提供的最大产量|某产品当前标示的单价
产品被法律允许出售|产品运输距离较近|产品成分已经公开
食品最初的生产过程|消费者使用食品的方式|把原料加工为成品
保证每次口味相同的能力|按照价格给产品排序|预测商品未来销量的方法
商品价格超过预算的程度|顾客对某商品缺乏了解|仓库囤积的过量商品`,
grammar:[['Sales increased after promotion, but this ___ prove a lasting trend.（does not / has not to）','does not','短期销量变化不保证长期趋势。','A brief rise in demand ___ establish long-term popularity.'],['The alternative uses fewer resources ___ the original crop.（than / as）','than','比较资源消耗而非完全不用资源。','The substitute requires less water ___ the earlier option.']],
locators:`{The trend} [originated|1] with online pictures of ___ .~It [began|1] when people posted attractive pictures of meals for others to see.~originated 与 began，传播起点与后来购买不同。
{The brand} [ambassador|1] encouraged sales of ___ .~A well-known [promoter|1] helped increase purchases of the featured range.~ambassador 在品牌语境中对应 promoter，不是外交官。
Buyers watch online ___ to [forecast|1] demand.~{Purchasing teams} watch {online comments} to [predict|1] how much customers will want.~forecast 与 predict，监测手段与目的分开。
During {the orchard} campaign, ___ met the [producers|1].~For the {orchard promotion}, journalists toured {the region} to meet [growers|1].~producers 由 growers 具体化，受邀者与被访问者区别。
{The campaign} [emphasised|1] ___ {rather than} colour.~{The campaign} [stressed|1] convenience {rather than} {the food's} unusual colour.~emphasised 与 stressed，宣传重点不是外观。
{The drink} was [initially|1] promoted through ___ .~[At first|1], {the new beverage} was introduced through independent lunch venues {rather than} ordinary stores.~initially 对应 at first，渠道有先后。
The {environmental cost} of [cultivation|1] includes [water|2] use, even when ___ is seasonal {rather than} continuing at {the same level} {throughout the year} in {every market}.~Delivery uses energy too, but [growing|1] this crop requires substantial [irrigation|2]; that resource input remains important even when consumers only buy {the product} during a short fashionable season.~cultivation 对应 growing；water 通过 irrigation 这一用水方式定位，运输是另一成本。
A [locally grown|1] substitute reduces [reliance|2] on long-distance ___, {rather than} assuming that the imported ingredient is necessary simply because it has become fashionable with shoppers.~{The recipe} can use a substitute [cultivated nearby|1], which would lessen [dependence|2] on {long-distance supply}; popularity alone does not show that the imported ingredient is necessary or environmentally preferable.~locally grown 对应 cultivated nearby；reliance 对应 dependence，替代品满足用途。
Higher [consumer demand|1] puts [pressure|2] on land and ___ abroad, {rather than} all the environmental effects remaining visible in {the local shops} where {the product} is sold.~When [more buyers want the product|1], growers abroad may face greater [strain|2] on land and resources; {the effects} can extend far beyond {the shops} where {the trend} first becomes noticeable.~consumer demand 对应 more buyers want product；pressure 对应 strain，影响跨地区。
The [concluding|1] recommendation is to examine [evidence|2] about ___, {rather than} treating {a food's} popularity or attractive online appearance as proof that it is a responsible choice.~Attractive pictures cannot answer every question; the [final|1] advice is to look for [reliable information|2] on sourcing and resource use before deciding that a fashionable food is a better option.~concluding 对应 final；evidence 对应 reliable information，流行度不替代证据。`,
paragraphs:[P('How a trend spreads',`An image can [catch on=>become widely shared or adopted=>传播普及]. A promoter may [lend their name to=>publicly associate themselves with=>公开背书而非颁发许可] a brand. That attention can [drive up=>increase=>推高] demand. Retailers [keep an eye on=>monitor=>持续关注] online interest. A short campaign can [give sales a boost=>increase purchases temporarily=>短期刺激不保证持久]. Popularity alone does not [vouch for=>guarantee=>流行不为品质担保] the product's claims.`,['officially certify','guarantee permanent growth','reduce demand']),P('Looking behind the message',`A food may [come at a cost=>involve a drawback=>不只指售价，也指代价]. Production can [put a strain on=>place pressure on=>对资源造成压力] local supplies. A claim should be [looked into=>investigated=>核实而非直接接受]. A nearby substitute may [cut down on=>reduce=>减少但非完全消除] transport. The comparison must [weigh up=>consider the relative importance of=>权衡多个方面] benefits and drawbacks. An informed choice [takes more than=>requires more than=>需要超出单一指标] following a fashion.`,['eliminate every journey','accept without checking','ignore the drawbacks'])],
signals:[{title:'A promotion reaches shoppers',focus:'传播起点、背书与监管区分、渠道先后。',text:`The fictional product in this case first attracted attention through photographs shared by customers.
Its producer had not yet begun a large advertising campaign.
That early interest came from public sharing, rather than from a formal recommendation by a food authority.~区分自发传播与权威认可。
A familiar presenter later appeared in the company's promotional material.
The presenter was acting as an ambassador for the brand, not certifying its health claims.~明确名人背书的范围，不是医学或监管认证。
The company also chose a limited group of outlets for its first launch.
Only after introducing the drink through lunch venues did it seek shelf space in ordinary supermarkets.~Only after 指定推广渠道的先后顺序。
The sequence helped the company test demand before committing to much wider distribution.`},{title:'Checking the wider cost',focus:'营销卖点与实际代价、替代品、证据要求。',text:`Advertising for a fashionable crop often highlights how it fits a convenient modern lifestyle.
That message may be attractive without describing how the crop is produced.
The resource question concerns the water needed for cultivation, rather than the colour or shape used in the advertisement.~明确评价维度为生产资源，排除宣传外观。
Demand can also place pressure on places far from the final consumer.
A locally grown substitute may reduce transport, although that alone does not prove it has no environmental impact.~although 限定替代品优势，避免绝对化。
The comparison therefore needs information from more than one stage of production.
Before accepting a broad sustainability claim, check what evidence is given about sourcing and resource use.~before 指定核实动作与所需证据。
A popular label is a reason to ask questions, not a complete answer to them.`}]
});
R(3,3,{
coverage:'项目动机、资料获取限制；历史先后与共同评价；不确定点；具体节目单的来源、意义、功能和艺术性匹配。',
options:`整季演出的完整时间表|演员逐句使用的完整剧本|观众观看演出后的评价
当前售票价格的清单|只有公开展出的所有物品|用于吸引观众的新广告
剧团所有行政工作人员|负责制作舞台布景的团队|一场演出的全部观众
印刷机器工作的速度|观众在剧院中的移动路线|剧目连续演出的总天数
观众购买门票的全部收入|演出结束后支付的演员工资|对作品质量作出的公开评价
物品是否具有艺术价值|物品是否保存得完全无损|物品是否得到多数人喜欢
文字材料的历史来源|印刷材料使用的纸张|节目单所有者的身份
节目单上完整的演员履历|只用于标示价格的符号|整理历史年份的表格`,
grammar:[['The item may be genuine, but its origin ___ disputed.（remains / remain）','remains','真伪、来源及归属是不同判断。','The proposed authorship ___ uncertain despite the early date.'],['The example was chosen because it ___ an audience.（attracted / attracting）','attracted','选择理由是历史功能而非纯外观。','The poster is relevant because it ___ audiences from outside the town.']],
locators:`Why did the students [select|1] {the programme} project?~They [chose|1] it after an ordinary printed item revealed more information than expected.~select 对应 chose，关注选题起因。
What limits access to the [archive|1]?~The [historical collection|1] has {handling rules} that restrict {the use} of older material.~archive 对应 historical collection，不是资料根本不存在。
What surprised them about the [earliest|1] programmes?~The [oldest|1] leaflets contained more {contextual detail} than they had anticipated.~earliest 与 oldest，超预期的是内容量。
Why did [touring|1] companies need publicity?~[Travelling|1] groups of performers needed to attract {an audience} in {every new town}.~touring 对应 travelling，宣传服务于流动演出。
How do both students compare {the programmes'} [variety|1]?~They agree the {earlier examples} show greater [diversity|1], despite {simpler printing} methods.~variety 与 diversity，印刷简单不等于形式单一。
What is unclear about the [subsequent|1] publishing change?~She knows what changed [later|1], but not why the local practice developed slowly.~subsequent 对应 later，未知为发展原因。
What comment concerns the [origin|1] of {the Harbour} Lights programme, given that its proposed [attribution|2] has not been accepted by {every researcher} examining the {surviving copy}?~{The copy} survives, but the suggested [identification of its creator|2] is contested; researchers still debate its [source|1], so we should not present the {proposed name} as an agreed fact.~origin 对应 source；attribution 对应 identification of creator，争论中不等于已否定真伪。
What [historical significance|1] is attached to The Glass Garden programme, {rather than} {an argument} about whether its [format|2] was attractive enough to influence later designers?~{Its importance} is not primarily {its appearance}; {the programme's} [place in history|1] comes from being an early national example of that [type of publication|2], even if {later booklets} looked more elaborate.~historical significance 对应 place in history；format 对应 type of publication，历史地位不同于美观。
What is said about The Midnight Train leaflet's [promotional|1] success in attracting [spectators|2], {rather than} about the size of the cast involved in {the production} itself?~{The production} had a {modest cast}, but the leaflet was effective as [advertising|1]; it drew a new [audience|2] to the theatre, including people who had not attended earlier performances.~promotional 对应 advertising；spectators 对应 audience，演员人数不是观众数量。
What comment concerns the [visual|1] design of the Summer Letters booklet, although {the discussion} has previously focused on the [provenance|2] of other surviving programmes?~For other programmes {the issue} was [where they came from|2], but this surviving booklet stands out for its [appearance|1]; it looks like {an independent piece} of art {rather than} a purely practical notice.~visual 对应 appearance；provenance 对应 where came from，评价维度切换。`,
paragraphs:[P('Researching an ordinary object',`The students [stumbled across=>found unexpectedly=>偶然发现] a programme. It [prompted them to=>encouraged them to begin=>促使开展研究] investigate publicity. Archive rules [restricted access to=>limited opportunities to examine=>限制查阅而非完全不存在] fragile items. Copies were used [where possible=>whenever circumstances allowed=>条件允许时]. A printed date [gave a clue to=>suggested something about=>提供线索，不独自确证] the origin. They had to [piece together=>reconstruct from separate evidence=>综合分散证据] the publishing history.`,['proved the complete history','unlimited access','a planned commission']),P('Making different comments',`One item has [a disputed attribution=>uncertainty about who created it=>作者归属存疑]. Another [broke new ground=>introduced something not done before=>开创性而非装饰性]. A leaflet [brought people in=>attracted an audience=>宣传功能]. A booklet [offers an insight into=>helps explain=>提供理解演出的线索] the production. Its lettering is [a work of art in its own right=>artistically valuable as an object itself=>独立艺术价值]. A recent project [draws on=>uses as source material=>作为研究资料] the collection.`,['a proven fake','merely decorative','failed to interest audiences'])],
signals:[{title:'Why this project?',focus:'动机、资料限制、共同比较。',text:`Our project began when we found a small programme inside a second-hand book.
It seemed an ordinary souvenir until we looked at the details around the cast list.
That unexpected amount of information is what made us choose printed programmes as a research topic.~明确选题契机与动机。
The archive then gave us a much wider group of examples to compare.
We could not handle every original, because some items were too fragile under the collection's access rules.~because 说明查阅困难的原因，而非资料缺失。
Digital copies helped, although they did not preserve every detail of paper and colour.
We both found greater variety in the earlier examples than we had expected, despite the simpler printing methods.~both 与 despite 表明共同评价及对照。
Our presentation will explain that comparison without suggesting every old programme followed the same design.`},{title:'Matching comments to examples',focus:'来源争议、宣传功能、艺术评价。',text:`We have selected three fictional productions to illustrate different comments about programmes.
Their booklets should not all be described simply as attractive historical objects.
For Harbour Lights, the important issue is the disputed origin, rather than the quality of the drawing.~节目名与争议维度对应，排除外观。
The Midnight Train raises a different point about publicity.
Its leaflet successfully attracted spectators, so it gives us evidence about how the company promoted a performance.~具体例子与宣传效果相连。
The booklet for Summer Letters is interesting even without that kind of evidence.
Its visual arrangement can be valued as an artwork in its own right, although that does not establish who designed it.~艺术评价与作者归属分离。
We should give each example its own precise comment when introducing the collection.`}]
});
R(3,4,{
coverage:'包容设计与单一标准的差别；可调与不同输入方式；自主性；安全用品不合身的因果；舒适与群体差异。',
options:`只服务人数最多的一类用户的|必须每个人用完全相同方式的|只为特定用户事后另作改装的
产品在市场上可以买到的程度|产品被公开宣传的频率|普通用户购买产品的意愿
把产品换成完全不同用途|只对外观增加装饰|强迫用户改变自己的需求
能够拆开但不能改变尺寸的|任何人都可自行修理的|安装后永久固定不动的
设备内部的供电系统|购买产品时签订的协议|系统存储所有资料的地方
原物损坏后的唯一原件|只能同时一起使用的附加物|没有功能联系的装饰品
完全不需要任何规则|拒绝任何人提供帮助|必须独自完成所有工作
符合统一外观标准的|只强调生产成本低的|用来提高产品流行度的`,
grammar:[['A standard size may exclude users ___ needs differ.（whose / which）','whose','whose 引出用户的需要，单一标准可能排除群体。','People ___ reach is limited may need another arrangement.'],['The control can be reached without ___ the whole unit.（moving / moved）','moving','without 动名词，设计减少额外动作。','The screen remains readable without ___ the display stand.']],
locators:`Later [modifications|1] are reduced by designing for varied ___ .~Serving varied users from the outset means fewer [alterations|1] after purchase.~modifications 对应 alterations，前期设计与后期改造区别。
{The design} approaches overlap in some ___ but differ in [scope|1].~Their [intended range|1] is not identical, even though {several principles} overlap.~scope 对应 intended range，重叠不等于完全相同。
[Adjustable|1] equipment permits changes in height and ___ .~Changing {the height} and angle makes {the station} [adaptable|1] to {different users}.~adjustable 对应 adaptable 的可调节性。
A strong [grip|1] should not be required by the shared ___ .~The {shared fitting} should work without demanding {that users} [hold it tightly|1].~grip 对应 hold tightly，动作要求影响可用性。
[Ambiguous|1] symbols can confuse people less familiar with the ___ .~People less familiar with {the system} may struggle with signs that are [unclear|1].~ambiguous 对应 unclear，不把年龄本身当设计缺陷。
[Alternative|1] input may permit commands through ___ .~Users unable to use {a keyboard} can give instructions in [another|1] form.~alternative 对应 another，方式不同但仍可发命令。
An [inaccessible|1] design limits [autonomy|2] when {ordinary activities} require ___, {rather than} being satisfactory simply because {the user} eventually completes {the task} with another person's support.~{A task} may get done, but equipment that is [not usable independently|1] can still limit [control over one's own choices|2]; needing help for {ordinary activities} affects more than the final outcome.~inaccessible 在此由 not usable independently 具体化；autonomy 对应 control over choices。
[Safety equipment|1] may not [fit|2] {every user}, leaving gaps or restricting ___ {rather than} providing equal protection merely because everybody has received the same standard size.~Supplying one size does not guarantee equal protection; [protective items|1] designed around {a narrow range} of bodies may not [match the shape of|2] other users, leaving gaps or restricting movement.~safety equipment 对应 protective items；fit 对应 match shape of，统一尺寸不能保证防护。
A [protective garment|1] must allow for body [variation|2] beyond sleeve ___, {rather than} assuming that changing only one dimension will make {the design} comfortable for all users.~A [safety jacket|1] needs to allow for [differences|2] in proportions around {the body}; a longer sleeve changes only one dimension and may leave {the wearer} with the same discomfort elsewhere.~protective garment 由 safety jacket 具体化；variation 对应 differences，比例非单一长度。
[Workplace|1] comfort must consider [individual differences|2] affecting ___, {rather than} assuming that an {average setting} always meets the {physical needs} of every person using a {shared office}.~Conditions in a [shared office|1] should reflect [variation between people|2]; an arrangement that feels comfortable to the average user may still make concentration difficult for somebody with different {physical needs}.~workplace 由 shared office 具体化；individual differences 对应 variation between people，平均值不覆盖所有人。`,
paragraphs:[P('Designing from the start',`A product should [allow for=>take into consideration=>在设计中考虑] different abilities. Adding support later can be [an afterthought=>a late addition not considered initially=>事后补救]. A small change may [remove a barrier=>make a previously difficult action possible=>消除使用障碍]. Some controls are [within reach=>accessible without excessive stretching=>够得着而非买得起]. Alternative methods give users [more control over=>greater ability to decide=>自主决定权] the task. A single standard is [not a good fit for=>not appropriate for=>不一定适用] every person.`,['affordable to purchase','suitable for everyone','remove every responsibility']),P('Safety as well as convenience',`A garment can [restrict movement=>limit the user's motion=>限制动作]. Poor fit may [compromise protection=>reduce safety performance=>影响防护而非仅外观]. Adjustments should [take account of proportions=>consider the relationships between body dimensions=>比例不等于只改总长]. An easy-to-use option [does away with the need for=>removes the requirement for=>减少额外要求] specialist help. Testing should [draw on a range of users=>include people with varied needs=>多样样本]. Comfort and safety should [go hand in hand=>be considered together=>并列目标].`,['change only the total length','ignore safety for appearance','use one typical person only'])],
signals:[{title:'From a standard user to real users',focus:'设计时点、替代方式、自主性。',text:`A product is often tested with someone who resembles the designers' idea of a typical user.
That can leave difficulties invisible until the product is used more widely.
Inclusive planning considers varied needs from the outset, rather than treating every later adaptation as somebody else's problem.~from the outset 与 later adaptation 区分设计时点。
Even a simple control can become difficult if it demands a strong grip or precise movement.
Providing another way to give the same command can remove that barrier without changing the person's goal.~替代输入针对操作障碍，不是降低目标。
The effect is not limited to saving a few seconds.
Being able to complete an ordinary task without requesting assistance also supports independence.~also 引出自主性收益，不是仅效率。
Testing should therefore include people whose needs differ from the original design assumptions.`},{title:'Fit and safety',focus:'合身与防护、比例而非只长度、群体差异。',text:`Protective clothing shows why inclusion is a safety question as well as a matter of convenience.
An item may meet a formal standard and still fit a particular wearer poorly.
Poor fit can compromise protection, so discomfort should not automatically be dismissed as a minor personal preference.~so 指出舒适反馈可能涉及安全。
Offering a longer or shorter version is sometimes helpful.
However, changing length alone does not address differences in body proportions.~However 限定单一尺寸调整的作用。
Workplaces can also make assumptions about what conditions feel comfortable to everyone.
A shared setting should be reviewed across different users, rather than justified only by the needs of an imagined average person.~rather than 排除以单一平均用户作依据。
That approach gives the design team more useful evidence about who can work safely and independently.`}]
});
R(4,3,{
coverage:'手写收益的证据；运动协调与阅读困难区分；较易改善的具体问题；键盘与手写的比较；观点归属和个人态度。',
options:`大幅运动全身的能力|快速理解书面词义的能力|把长期记忆中的内容说出来
字体看起来有艺术感|书写每分钟完成的字数|文字表达本身的说服力
只靠手部力量完成任务|独立记住所有字母顺序|阅读时准确理解每个词
每个字母自身的大小|整篇文章段落的数量|书写时用笔的压力
所有字母彼此完全分开的字体|只用大写字母的印刷体|键盘输入后自动生成的文本
写出的内容完全没有错误|只要写得快而不顾理解|已经掌握全部文字的含义
只表现为拼写规则混淆|由视力不清造成的困难|不愿意练习写字的态度
一般的手部动作不协调|完全缺少阅读学习机会|只因字体太小而看不清`,
grammar:[['The study suggests a benefit, but ___ prove every learner improves equally.（does not / is not）','does not','总体提示不保证每人同样受益。','One comparison ___ establish the best method for every child.'],['A different method can help without ___ the same difficulty.（removing / removed）','removing','支持与治愈不同，without 后动名词。','Extra time may improve access without ___ the underlying difficulty.']],
locators:`Which TWO benefits concern [handwriting|1]?~[Writing by hand|1] may help memory and {the coordination} of small movements.~handwriting 对应 writing by hand，may 不是保证。
Which TWO learning claims do they treat [cautiously|1]?~They [are hesitant to accept|1] that one method suits everyone or neatness always proves understanding.~cautiously 对应 hesitant to accept，保留态度不等于已证伪。
Which TWO difficulties may [improve|1] with guidance?~{Starting marks} and a {visible model} can help learners [get better at|1] alignment and spacing.~improve 对应 get better at，具体支持作用不同。
Which TWO supports reduce [motor-planning|1] demands?~Breaking actions into steps and allowing practice help with [organising movements|1].~motor-planning 对应 organising movements，支持不是代替全部动作。
What does Mara say about [keyboard-based|1] practice?~She thinks correcting errors [on screen|1] may feel less discouraging to {some learners}.~keyboard-based 在此定位 on screen，心理反应只适用部分人。
What is her view of [compulsory|1] joined writing?~She questions making one style [mandatory|1] because {linked movements} are harder for {some pupils}.~compulsory 与 mandatory，反对统一要求不等于全盘反对连笔。
What does [research|1] suggest about handwriting and [assessment|2], {rather than} treating {the appearance} of {an answer} as {a reliable measure} of {the writer's} understanding?~Neatness does not guarantee understanding; the [study|1] suggests that the look of handwriting can influence [marking|2], which raises a question about how consistently {the same content} is judged.~research 对应 study；assessment 对应 marking，外观影响判分不等于理解能力。
What does the man [predict|1] about [future teaching|2], even as digital tools become more common and {some pupils} complete much of {their daily work} on screens?~He [expects|1] handwriting to remain part of [education in coming years|2]; more widespread digital tools will change classroom routines, but he does not think they will remove every reason to write manually.~predict 对应 expects；future teaching 对应 education in coming years，普及数字工具不等于取消手写。
What personal [difficulty|1] does the woman connect with [reliance|2] on screens, {rather than} presenting {the experience} as a conclusion that must apply to {every learner}?~She is describing herself, not all students: after becoming [dependent|2] on screens for notes, she notices a [problem|1] reading older {handwritten pages}, especially when {the writing} is quick and informal.~difficulty 对应 problem；reliance 对应 dependent，个人经历不普遍化。
What [shared|1] feeling do {the speakers} express about {their writing} [habits|2], {rather than} being concerned only with whether {their handwriting} is fast enough for {an examination}?~Speed matters in examinations, but that is not their only concern; they [both|1] miss the [regular practice|2] of writing manually, which used to be part of their ordinary {daily routines}.~shared 对应 both；habits 对应 regular practice，遗憾不限速度。`,
paragraphs:[P('A benefit with limits',`The review found [a possible advantage=>a potential benefit=>可能性不等于保证] for some learners. It should not be [taken as proof=>treated as conclusive evidence=>不要扩大证据强度]. Difficulty can [stem from=>arise because of=>来源关系] planning movement rather than understanding words. The two issues must [be kept apart=>be distinguished=>概念区分]. Support should [reduce the load on=>lessen the demands placed on=>减轻负担] the learner. A different method may [make participation possible=>enable access to the task=>支持参与，不等于消除原困难].`,['cure every difficulty','guarantee equal gains','be treated as identical']),P('Choosing a method',`A keyboard lets learners [make changes=>revise text=>修改而非重新抄写全文] without starting again. An error may feel [less final=>more easily reversible=>可回改减轻挫败]. Joined writing is [not equally suitable=>appropriate to different degrees=>适用性因人而异] for all pupils. Teachers should [base decisions on=>use as the grounds for choices=>以证据决策] observed needs. Extra time is [an accommodation=>an adjustment supporting participation=>便利安排，不是降低内容要求]. A habit can [fall out of use=>become less practised=>少用了不等于能力永远消失].`,['lower the learning goal','permanently disappear','work identically for everyone'])],
signals:[{title:'What a benefit means',focus:'收益范围、困难来源、具体支持。',text:`The reading compares handwriting practice with several ways of producing text on a screen.
Some of the findings suggest an advantage for remembering material.
We should not turn that into a claim that every child learns best through the same method.~not 把证据从普遍保证收窄到实际支持范围。
The classroom examples also describe pupils who find letter formation difficult.
For some, the difficulty concerns planning and coordinating movement, rather than understanding the word they want to write.~区分动作困难与语言理解。
That distinction matters when choosing support.
Breaking the movement into smaller steps may help participation, even though it does not necessarily remove the underlying difficulty.~may 与 even though 限定支持效果，不夸大为治愈。
Our presentation should connect each suggestion with the specific demand it is meant to reduce.`},{title:'Who thinks what?',focus:'人物归属、不同方式的适用性、共同态度。',text:`I think editing on a screen can make an error feel less discouraging for some learners.
Yes, but that does not tell us whether every child should stop forming letters by hand.
My objection is to imposing one compulsory style, not to handwriting itself.~明确反对的范围，不是全面否定手写。
I would expect it to remain in teaching, even as digital tools become more common.
That is your prediction; my concern is that I now struggle to read some older handwritten material.~切换人物与功能：预测和个人担忧不同。
We have both changed our habits since most assignments moved to computers.
What we share is some regret about writing less often, rather than a belief that our speed is the main problem.~what we share 标出共同态度并排除速度问题。
We can finish by separating those personal reactions from the research findings.`}]
});
R(4,4,{
coverage:'猛禽对社区的多方面价值；意外死亡与主动迫害；防护措施成本与副作用；组合措施与习惯化。',
options:`任何以昆虫为食的小鸟|只在夜间活动的所有鸟类|只生活在保护区内的鸟
动物因天气原因死亡|人类为了研究捕捉动物|动物在同一地区争夺巢位
所有会损坏作物的小动物|只以昆虫为食的动物|全部生活在地下的动物
一次调查发放的全部补贴|个人已经存下的现金|某地人口拥有的住房总数
飞行时靠近但未触及物体|因为缺少食物停止飞行|受到化学物质毒害
因闪光而受惊离开|因高处坠落受到外伤|电线仅挡住飞行路线
专门吸引动物靠近的诱饵|直接消灭所有捕食者的手段|为野生动物补充食物的设施
只封闭一侧的遮阳棚|只供临时运输的笼子|允许鸟自由进出的开放场地`,
grammar:[['The device worked at first, but birds became ___ to it.（accustomed / accustomedly）','accustomed','最初有效与后来习惯的对比。','Repeated exposure can make animals ___ to a warning sound.'],['A combination worked better ___ either method alone.（than / as）','than','组合效果与单一方法对照，不代表完全消除风险。','Using two approaches was more effective ___ relying on one.']],
locators:`One benefit to [farmers|1] is the reduction of ___ .~For [crop growers|1], birds control animals that damage stored and growing food.~farmers 对应 crop growers，受益对象具体化。
Another benefit protects [residents|1] from ___ near homes.~[Local people|1] gain when birds reduce {the number} of dangerous small animals.~residents 对应 local people，不只讨论家禽损失。
Local [income|1] increases when {wildlife watchers} ___ money.~{Wildlife watchers} bring [earnings|1] to {nearby businesses} when they spend money in {the area}.~income 对应 earnings，观鸟消费连接当地收益。
[Accidental|1] deaths can occur when birds strike ___ .~Birds may be killed [unintentionally|1] when they strike structures while moving.~accidental 对应 unintentionally，区别主动捕杀。
[Damp|1] surfaces increase danger around live ___ .~Contact with live equipment is especially dangerous when surfaces are [wet|1].~damp 对应 wet，环境限定不是全部天气。
[Deliberate|1] attacks aim to protect ___ .~A minority of owners harm birds [intentionally|1] to prevent attacks on poultry.~deliberate 对应 intentionally，不推广到所有居民。
A [physical barrier|1] is [costly|2] to build but gives reliable ___, unlike a cheaper marker whose effect may depend on being changed frequently after installation.~A {moving marker} is inexpensive to install, whereas a [covered enclosure|1] offers reliable protection but is [expensive|2] to build; {the choice} therefore involves more than comparing {the initial convenience} of the two methods.~physical barrier 由 covered enclosure 具体化；costly 对应 expensive，效果与成本共同考虑。
A [visual|1] warning loses effectiveness when birds become [accustomed|2] to it, so continued mechanical ___ does not necessarily show that it still discourages them from approaching.~{A marker} can still move normally, but {a warning} aimed at [sight|1] may fail once the birds grow [used|2] to seeing it; mechanical operation alone does not show that it remains effective.~visual 对应 sight；accustomed 对应 used，运转正常不保证效果。
A [combined|1] strategy pairs barriers with changing [deterrents|2], {rather than} relying on an unchanged ___ after birds have learned that it poses no real threat.~One unchanged signal can lose its effect; an [integrated|1] approach pairs barriers with changing [warning measures|2], giving birds more than one reason to stay away without assuming that any single device works indefinitely.~combined 对应 integrated；deterrents 对应 warning measures，组合方式区别于固定单一提示。
The [ultimate|1] aim is ___ {rather than} [eradication|2] of predators, even when {the project} must also address {poultry losses} that matter greatly to {local households}.~The [final|1] objective is for households and birds to share the landscape; protecting poultry matters, but the [elimination|2] of all raptors would not meet the wider conservation purpose of {the project}.~ultimate 对应 final；eradication 对应 elimination，共存目标与彻底清除不同。`,
paragraphs:[P('Value and risk',`The birds [keep numbers down=>limit the population=>控制数量而非完全清除] of some crop pests. They also [draw visitors=>attract people to the area=>观赏带来访问]. These benefits [feed into=>contribute to=>间接促进] local livelihoods. Deaths can be [unintended=>accidental=>意外，不是主动迫害]. Others result from [targeted action=>deliberate measures against the birds=>有意针对]. A useful account [takes both into account=>considers each side=>同时考虑收益与冲突] rather than assuming one uniform attitude.`,['eliminate every individual','always deliberate','ignore the conflict']),P('Testing protection',`A barrier can [keep predators out=>prevent entry by hunting animals=>物理阻挡]. Its price may [put it beyond reach=>make it unaffordable=>此处是经济不可及] for some households. A signal can [wear off in effect=>become less effective over time=>效果衰减]. Birds may [get used to=>become habituated to=>习惯刺激而非被物理困住] it. Changing methods can [work in combination=>have an effect when used together=>组合使用]. The aim is to [reduce conflict=>make coexistence less damaging=>减轻冲突，不是消灭物种].`,['guarantee permanent fear','be physically too distant','remove all predators'])],
signals:[{title:'Why communities value the birds',focus:'生态收益、经济收益、死亡机制。',text:`A project near a fictional bird reserve examined how residents viewed the birds of prey.
Some households were concerned about losses of small domestic animals.
The birds also help control crop-damaging animals, so their relationship with farming is not wholly negative.~also 与 not wholly 修正单一负面评价。
There are benefits beyond the direct effect on animals in fields.
Visitors coming to watch wildlife bring spending to local businesses and can support employment.~从生态转入经济价值的具体途径。
The researchers also recorded several causes of falling numbers.
They distinguished accidental impacts with structures from deliberate action against the birds.~distinguished 明确区分意外与主动迫害。
That distinction mattered when discussing solutions with households whose experiences were different.`},{title:'Why one method is not enough',focus:'成本权衡、习惯化、组合策略。',text:`The protection trial compared a physical barrier with several warning devices.
Each approach had advantages as well as practical limitations.
A covered run can keep birds away from poultry, but its cost may prevent some households from building one.~but 将有效性与可负担性分开。
The cheaper devices were easier to install around an existing yard.
Their effect weakened over time when the birds became familiar with a signal that never changed.~when 解释效果随时间下降的机制。
Simply repeating the same signal more often did not solve that difficulty.
The more promising approach combined methods and varied the warning, rather than relying on one permanent cue.~比较策略，rather than 排除单一固定信号。
The aim remains reducing damaging encounters while allowing both households and wildlife to use the area.`}]
});
})();
