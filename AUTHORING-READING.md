# 阅读练习维护

## 当前范围

剑21、19、18、17、16的Test 1–4、Passage 1–3均含练习0/1/2，另保留剑15 Test4 Passage1。下面“第一篇”说明最初原型；后续篇目依各自真题题型安排练习2，不统一套用判断或笔记填空。完整范围见EXPANSION-COVERAGE.md。

新增篇目使用`RRReadPack`提交逐篇手写的数据，`data/reading-pack-builder.js`只组装公共结构。目录脚本会自动发现`data/reading-c*.js`。练习0包含全部篇内核心词汇及两篇语义分组的独立短文；词汇逐题核对，短文逐篇核对。

## 第一篇

剑21 Test1 Passage1，两套练习，主题为艺术收藏与公共文化。已按用户要求新增剑15 Test4 Passage1，两套练习，主题为乡土植物与生态恢复。对应原题题型的核对见 `READING-SOURCES.md`。其他篇目按用户后续指定添加。

- 练习1：16道语境词义、6道同义改写、1组6处的拖动匹配、6道长句理解（2主干、2指代、2句意关系），共36个计分点。
- 练习2：6道证据定位（前2题只选句，后4题再选句内表达）、6道TRUE/FALSE/NOT GIVEN、7道一词笔记填空，共23个计分点。
- 两套共享36项核心词汇与收藏；词表只有英文和本篇中文含义。数量不作为未来篇目的上限。

剑15 Test4 Passage1沿用练习1的题量和结构（36个计分点），练习2为6道证据定位、6道信息判断、5道一词笔记和3道不超过两词的表格填空，共24个计分点。该篇两套共享自己的36项核心词汇。入口为 `reading.html?id=c15-r-t4-p1-1` 或 `…-2`。

## 数据与入口

页面为 `reading.html?id=c21-r-t1-p1-1` 或 `…-2`，可通过首页“阅读→C21→Test1→Passage1”进入。页面直接加载经典脚本，可用file://打开。

`data/reading-practices.js`提供 `RRReadTokens` 和 `RRAddReadingTopic`。篇目文件命名为 `data/reading-c*.js`，通过：

```js
RRAddReadingTopic({
  id:'c21-r-t1-p1', location:{book:21,test:1,part:1},
  title:'本篇主题', focus:'与原题关联的具体训练重点',
  coreWords:[['英文','本篇含义']],
  practices:[ /* 练习1 sections */, /* 练习2 sections */ ]
});
```

在 `reading.html` 添加篇目脚本，再运行 `node scripts/build-catalog.cjs`。目录生成器会读取全部阅读篇目，保留96套听力。不要复制页面或为每篇另写渲染器。

## 题型

通用 `quiz`、`paraphrase` 继续使用现有渲染器，词组匹配必须支持拖回、移位、点击退回和触屏点选。

`reading-sentence` 支持：

- `kind:'backbone'`：`tokens`、`subject`、`predicate`、`skeleton`、`translation`、`why`。标记的是主语核心，不要求连同整个定语从句一起标记。主句的完整被动谓语作为一个可选表达；两个角色各选一处，不能让一处同时担任两角色。
- `kind:'reference'`：`tokens`、`focus`、`antecedent`、可选 `accept`、`translation`、`why`。较长语境中提供多个名词或事件，不能总选最近对象。若两个表达确实描述同一指代对象，两者都应接受；不能为了制造干扰把合理答案判错。每题仍只选一处。
- `kind:'logic'`：`text`、`q`、`options`、`answer`、`translation`、`why`。针对让步、条件、比较、否定、观点归属或因果，不做脱离语义的术语辨认。

`RRReadTokens('片段1|片段2|片段3')`把句子分成自然的可点击单元。正确答案与干扰都要有单词和词组；不要只有正确表达被分组，也不要把词尾或所有格拆开。读者可用鼠标或键盘Enter/Space选择；长片段自然换行。

`reading-evidence`：`passage.paragraphs`各有`label`、`sentences`；每句为`{id,tokens}`。题目保存`id/q/sentence/phrase?/why`。文章只显示一次，题号切换保留各题作答。先选一个证据句，再在该句中选一个表达。更换证据句清空旧词组。词组只有在证据句也正确时得分，不能在无关句中找到相同词就得分。

`reading-judgement`：每题有`text/q/answer/why/translation`。T需要原文支持；F需要原文冲突；NG是证据不足。NG材料不要直接写“未说明某事”，再恰好问该事。不要用常识补全信息。

`reading-notes`：`passage.title/paragraphs`为完整短文，题目为`id/q/answer/why`，每个q有一个`___`。本篇只接受一个单词，忽略大小写，保留原文所需的单复数。填空答案不能复制对应真题的答案。换篇时按原题要求建立相应的专项，不一律增加标题匹配或其他原题没有的题型。

`reading-table`：复用填空判分，增加`columns`表头和每题`cells`，每行恰有一个`___`。`maxWords`按原题词数限制设置；C15表格为2。答案必须来自原创短文，`accept`可列出同样准确的原文简称，不能为强求两词而把合乎要求的一词答案判错。显示为带表头和行标题的表格；核对解析另占整行，避免手机窄列挤压。记录保留整行信息、完整短文及可接受答案。

## 内容和记录

核心词汇可在新语境中复现；不同模块不复用整句，不反复对同一信息提同一个问题。原题用于核对词汇、题型和信息关系，原创材料不复述原题的人物、事件顺序、句子或答案链。

整套只有一个核对按钮。作答时不保存；有作答后核对才保存该次完整记录，同页重复核对更新同一记录。阅读记录键为`rr:reading:records:v1`，与听力分开；收藏沿用共享词库。记录可手动删除、导出JSON。长句译文与解析核对后显示；证据与笔记的JSON也包含完整短文。

## 验收

- `node tests/reading.cjs`：两套结构、语义目标有效、跨模块无整句复用、拖动退回、主干/指代/逻辑、合理备选、键盘、证据切换清空、T/F/NG、一词限制、核对记录/导出/删除、共享收藏和手机布局。
- `node tests/reading-c15.cjs`：新增篇目的数据与跨篇整句复用检查、两套全答对判分、一词与两词限制、表格简称备选、导出完整表格记录、共享收藏和手机表格布局。
- 共享页面逻辑改动后运行 `node tests/expanded-browser.cjs`、`node tests/locator-pairs.cjs`，确认原有听力操作正常。
- 运行 `node tests/editorial-quality.cjs`、`node tests/expanded-library.cjs --audio`、`node tests/maps-preserved.cjs` 确认听力目录及地图保持正确。
- 截图检查电脑和手机上的长句换行、定位短文、固定题目栏和填空布局。
