# 添加听力练习

页面不需要构建或服务端，所有练习都可以从本地文件打开。

## 文件分工

- `exercise-catalog.js`：目录入口；同一册、Test、Part 可以有多条练习。
- `data/listening-practices.js`：主题、核心词汇、题目及讲解。
- `listening.html`、`listening.css`、`listening-engine.js`：通用页面、自动保存、记录导出／删除及收藏。
- `modules/locator.js`：定位词标记。
- `modules/paraphrase.js`：同义替换拖动。
- `modules/signal.js`：音频信号标记。
- `data/audio-timings.js`：由真实录音的句子边界生成。
- `practice.html`：早期的练习 1，保留原入口。

## 新增入口

为练习设置唯一 `id`，在 `RRListeningPractices[id]` 中填写 `title`、`label`、`location`、`coreWords` 和 `sections`。目录中的 URL 为 `listening.html?id=该id`。

每个 section 使用 `id`、`type`、`title`、`instruction`、`items`。三个 type 是 `locator`、`paraphrase`、`signal`；渲染器通过同一接口提供 `getResult()` 与 `check()`，不把题目文字写进渲染器。

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

## 记录和收藏

新练习记录使用 `rr:listening:records:v2`，按 `practiceId` 分开查看。各题型提交统一结果结构：`id/type/title/correct/total/details`；信号题额外记录多标数量，不把多次点击同一考点计作多个命中。三个大题归属同一次练习，页面底部只设一个“完成练习并核对答案”按钮，同时核对全部大题并保存一条完整记录。各大题不单设核对按钮。页面内再次整体核对更新同一条记录，重新进入后整体核对创建新的记录。作答过程中不保存。

收藏继续使用 `core-vocab.js` 的公共存储。每项只显示英文和本场景中文释义；主页默认隐藏中文，点击显示。
