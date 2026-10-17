# 添加听力练习

页面不需要构建或服务端，所有练习都可以从本地文件打开。

当前覆盖剑20、19、18全部听力 Part 1–4，每篇两套，共96套。剑9、10、11的练习与音频按用户要求清空；首页仍可进入空目录。48篇均使用独立编写的各题型材料。主题与题型比例见 `CONTENT-SOURCES.md`。

## 文件分工

- `exercise-catalog.js`：目录入口；同一册、Test、Part 可以有多条练习。
- `data/listening-practices.js`：练习数据容器的初始化。
- `data/practice-builders.js`：成对生成练习 1 和练习 2 的数据构造器。
- `data/editorial-quiz-context.js`：单选题的独立英文语境，不与听写等题型整句复用。
- `data/editorial-multi.js`：多选题中相近但不同的概念。
- `data/editorial-signal-context.js`：各长音频独立的背景细节与叙事位置。
- `data/*.practice.js`：每篇主题的独立内容。使用 `RRAddTopic`，在 `listening.html` 增加普通 script 引用；音频生成工具自动发现这些文件。
- `listening.html`、`listening.css`、`listening-engine.js`：通用页面、自动保存、记录导出／删除及收藏。
- `modules/locator.js`：定位词标记。
- `modules/paraphrase.js`：同义替换拖动。
- `modules/signal.js`：音频信号标记。
- `modules/route.js`：地图跟走，用于含地图的篇目。
- `modules/quiz.js`、`modules/dictation.js`：词汇／语法题和逐句听写。
- `data/audio-timings.js`：由真实录音的句子边界生成。
- `practice.html`：旧入口，自动转到新版C20T1P1练习1。

## 新增入口

为练习设置唯一 `id`，在 `RRListeningPractices[id]` 中填写 `title`、`label`、`location`、`coreWords` 和 `sections`。目录中的 URL 为 `listening.html?id=该id`。

常规新增主题用 `RRAddTopic({test,part,title,coreWords,quiz,dictation,locators,paragraphs,signals})` 自动产生两套：`c20-tX-pY-1` 和 `c20-tX-pY-2`。每套最后统一核对。练习 1 有 12 道词汇／语法题和 12 句听写；练习 2 有 10 道定位、2 段各 6 空同替和 2 段各 3 考点信号音频。

跨册时显式传 `book`，ID 为 `c{book}-t{test}-p{part}-1/2`。省略 book 才默认剑20。`data/expanded-c*.practice.js` 的 `RRSeedTopic` 仅保存本篇12组词汇和独立听写句，以及既有地图；不能单独作为完整题目。`data/revised-c*.practice.js` 用 `RRReviseTopic` 提供10道具体定位题、两段独立同义替换、按内容指定的信号音频及解析、8组近义干扰项、2道语法及独立听写句。`data/editorial-multi.js` 保存两道多选题的相近概念。非地图定位句与听写句、同替段落、信号音频不能整句复用。语法按对应真题的信息关系编写，不按篇目编号轮换。

定位简写：`题干含[主要表达]~原文含[对应表达]~具体解析`，每行一题。普通文字会分成可点击干扰单词，定位词组保留整体。`RRParagraph` 的标记为 `[原文表达=>对应改写=>本处解析]`；每段6处、3个近义但不等价的干扰项。信号文本逐行写完整句子，在真正的考点句后加 `~具体解析`，恰好3处；不套统一提示语。`coverage` 记录本篇训练的信息关系，不放到前台说明中。地图定位、图形、路线与录音当前保留。

`formats` 形如 `[['单选题干',4],['观点匹配',6]]`，总数必须为10。带地图的题干数量和地图插入位置应符合目标篇目；装置图传 `diagram`，路线图传 `map` 和 `routes`。地图简图不得复现真题答案链。未来阅读题型仍需另行确定。`editorial-signal-context.js` 为各段提供独立背景细节及叙事位置；考点仍由正文中的显式标记确定，背景不用于按编号挑选答案。

完成内容后运行 `node scripts/build-catalog.cjs` 更新目录，`node scripts/write-content-index.cjs` 更新核对索引；这些是维护工具，用户打开网页不需要运行构建。

定位单元用竖线分隔，方括号内为目标，例如 `The|[minimum term]|is|___|months.`。方括号后的标点可保留；不要把半截标记放在普通单元中。第四项参数可写题干形式（笔记填空、单选题干、多选题干、角色匹配、年份匹配、地图标注）。选择题的正确答案保存文本，不依赖选项序号，构造器会打散选项位置。

每个 section 使用 `id`、`type`、`title`、`instruction`、`items`。练习 1 的 type 是 `quiz`、`dictation`，练习 2 的 type 是 `locator`、`paraphrase`、`signal`；渲染器通过同一接口提供 `getResult()` 与 `check()`，不把题目文字写进渲染器。

## 定位词

`question` 与 `source` 都是可点击单元的数组。普通字符串是干扰单元；`{text:'…', key:true}` 是主要定位单元。单元可以是单词、词组或短句。带 `___` 的单元作为不可填写的空格显示。每句的标记上限由正确单元数自动生成；达到上限后仍能取消已选单元。

每题包含 `audio` 和 `explanation`。原文句在用户点击后开始播放，同时显示；之后保留可见。不要把任意语义相关词都设为唯一答案：正确标记应覆盖题干和录音之间可解释的主要定位关系。

## 同义替换

`segments` 由连续段落字符串和目标对象组成。目标对象包含 `id`、`text`、`answer`（选项 id）和 `explanation`。`choices` 是 `{id,text}` 数组，每段多出 2–3 项。至少同时包含“短词对长表达”和“长表达对短词”，也允许长度相近。干扰项不应与目标构成同样合理的对应。

拖动和“先点选项、再点空格”共用同一状态；一个选项只能用一次。已填选项必须能拖回本段词库，或者拖到本段其他空格；点已填空格也可以退回选项。取消拖动或拖到其他段落不能改变原作答。

## 信号词

每段 `transcript` 是完整句子数组，`cues` 记录 3 个考点句：`sentence`（从 0 开始）、`signal`（句首信号表达）、`why`。另外提供 `focus`、`audio`、`tolerance:2`。标准位置以考点句起点为准。目标约 45 秒，允许 41–48 秒。

生成工具需要 Python 的 `edge-tts`、`mutagen` 以及 Node：

```text
python scripts/generate-listening-audio.py c20-t1-p1-2
```

可以用 `--only loc-5 loc-9` 仅重做指定题的音频。工具导出英式自然语音，并读取 SentenceBoundary 得到标准时间；超出时长范围时重新调节生成语速。音频和源文字修改后必须一起更新。检查每个信号表达能在元数据中找到，并在浏览器中核对音频时长、显示、标记、重听清空和判分。

工具也支持一次传多个练习 ID，`--skip-existing` 可继续未完成批次。普通句子按每题 `rate` 合成；信号题以实际音频句界生成时间。批量生成只有同一进程写时间元数据，避免并发覆盖其他篇目。

整批生成可用 `--all-prepared --concurrency 12 --skip-existing`，覆盖当前48篇。相同文本、英音、语速复用 `.work/tts-cache`，文件成功写完才替换目标；长录音另比较内容指纹，避免误用旧版本时间戳。修改普通句子后用 `--only 对应id` 重新生成，不要带 skip-existing。Part 3 的 speakers 数组指定每句的英国声音，工具按句合成、解码为PCM后拼接，用实际帧数及句界累计时间，加入每轮0.2秒间隔。需安装 ffmpeg。队列共享一个时间戳写入器，不要同时运行多份生成进程。当前地图及路线音频保留；按题号指定重录时先排除地图定位项和route项。

验收：`node tests/editorial-quality.cjs` 检查48篇内容的跨题型重复、功能词、具体定位与配对结构；`node tests/expanded-library.cjs --audio` 检查96套结构及音频；`node tests/expanded-browser.cjs` 检查整套核对和记录；`node tests/native-audio.cjs` 使用浏览器原生音频读取1152个录音。剑20Part1、Part2另运行16套专项验收。内容检查同时需要人工对照题目与原文，结构通过不能替代编辑核对。`.work/` 与 `tmp/` 不是网页运行所需文件。

## 记录和收藏

新练习记录使用 `rr:listening:records:v2`，按 `practiceId` 分开查看。各题型提交统一结果结构：`id/type/title/correct/total/details`；信号题额外记录多标数量，不把多次点击同一考点计作多个命中。所有大题归属同一次练习，页面底部只设一个“完成练习并核对答案”按钮，同时核对全部大题并保存一条完整记录。各大题不单设核对按钮。页面内再次整体核对更新同一条记录，重新进入后整体核对创建新的记录。作答过程中不保存。

收藏继续使用 `core-vocab.js` 的公共存储。每项只显示英文和本场景中文释义；主页默认隐藏中文，点击显示。

## 地图跟走

含地图主题的练习 2 保留 10 道定位与两段同替，信号题减为一段，增加第四大题 `route`。在 `RRAddTopic` 传入 `map` 和 `routes`。每个 route 包含 `title`、`map:{width,height,nodes:[{id,x,y,label}],edges:[[id,id]]}`、`start`、`goal`、`expectedPath`、`buttonLabels:{north,south,west,east}`、`transcript` 句子数组、`explanation` 和 `vocabulary:[[英文,本题中文]]`。边必须是正南北或正东西；一步移动到相邻路口。地图为原创的主题简图，北向上；导览使用原创英式自然录音。

标准路径包括起点，最后一个节点是终点。整条路径完全一致得 1 分，不能只按终点判断。重听清空路径，暂停不清空，退回一步可修正误触。核对时才显示标准路线、导览原文和方向表达。练习仍只有底部一个核对按钮，保存完整路径、地点标签和终点。音频工具支持 route，生成 `route-01.mp3` 并记录实际时长。
