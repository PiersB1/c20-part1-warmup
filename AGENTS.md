# Listening exercises

This is a local, buildless practice website. Keep it usable by opening `index.html` directly. Use classic scripts, not fetch-dependent JSON or browser ES modules.

The active library covers all listening Parts 1–4 of Cambridge 20, 19, 18, 12, 11, 10 and 9: 112 topics, each with practices 0/1/2. The user explicitly requested newly authored Cambridge 9–12 after the earlier deletion; do not restore the deleted generic packs. Preserve the original three maps and route activities. `RRAddTopic` accepts `book` (default 20). Read `CONTENT-SOURCES.md` before adding content.

All 48 topics use `RRSeedTopic` for their own vocabulary and ten dictation sentences, then explicit `RRReviseTopic` content in `data/revised-c*.practice.js`. C20 Part1–2 is also fully revised, including T1P1. The seed is not a complete practice without its revision. Do not restore generic question stems, reuse whole sentences between activities, turn vocabulary definitions into every paraphrase paragraph, or choose signal cues by a fixed index profile. Author each locator's concrete information request and justified keys, independent contextual paraphrases, and content-specific cue explanations. Keep single function words such as on/been/have out of core vocabulary; grammar questions may still test them. Quiz distractors must be plausible close meanings. Run `node tests/editorial-quality.cjs` as well as the functional/audio gates.

Each listening part normally has two practices: practice 1 uses quiz (core vocabulary/grammar, including multi-select and cloze) plus 12 sentence dictations; practice 2 uses 10 locators, two six-slot paraphrase paragraphs, and two approximately 45-second signal recordings. Reuse the renderers in `modules/`. Add listening topic content in a `data/*.practice.js` file using `RRAddTopic`, load that file in `listening.html`, and register both entries in `exercise-catalog.js`. Do not copy a new exercise page or rewrite an existing renderer for each exercise.

Reading covers C21 and C16–19, all four tests and three passages, with practices 0/1/2, plus preserved C15 Test4 Passage1. Read `AUTHORING-READING.md` and `READING-SOURCES.md`. Practice1 uses contextual vocabulary, paraphrase discrimination, a small amount of reversible phrase matching, and sentence understanding (main-clause subject/predicate, longer references, logic). Practice2 uses evidence selection and each source passage’s actual question formats; do not automatically add T/F/NG or notes to every topic. The shared fill renderer supports notes, tables, flows, diagrams and short answers, with accepted source abbreviations where valid. Run `tests/reading.cjs` and `tests/reading-c15.cjs` for reading changes. Use `reading.html`, `data/reading-practices.js`, topic files named `data/reading-c*.js` and reusable types in `modules/reading.js`. Do not put reading data into listening `.practice.js` files. Reading and listening share the page shell in `listening-engine.js`; `body[data-mode=reading]` selects the reading library and separate record storage. Preserve both modes when changing it. Reading vocabulary may be more extensive/difficult than listening, selected for the actual passage, not a fixed numerical cap. No bare function words.

Use plausible near-meaning options and contrasts in conditions, scope, timing, and obligation for quiz distractors. The builder shuffles option positions deterministically. `practice.html` redirects the old T1P1 entry to the unified exercise page. New source question formats must match each target part; map locator questions include an original diagram and ask for word marking. For a map topic, practice 2 has one signal recording and a fourth route activity instead of the second signal recording. Reuse modules/route.js, with north-up original maps, a person, cardinal synonym buttons, persistent trails, undo, pause and replay reset. Grade the complete walked path together with all sections; preserve route details in records and JSON.

Match the question format of the relevant Cambridge part. Write new sentences and recordings for preparation. Do not reuse the real paper's sentences, gap answers, numerical answers, or proper names. Practise its relevant vocabulary, grammar, paraphrases, distractors, and signal language. If the required content or interaction is ambiguous, ask the user rather than inventing a requirement.

Keep practice 1 available. Preserve favorites and saved records. All sections of one practice are submitted together using one completion/check button at the bottom. Do not add per-section check buttons. This single action grades every section and automatically creates/updates one complete record for the current page visit. Records remain viewable, deletable, and individually exportable as JSON. Do not save on every answer change.

Paraphrase choices must be reversible: filled slots are draggable back to their own word bank or into another slot. Clicking a filled slot can also return its choice. A canceled or invalid drag must preserve the assignment.

Use the user's auditioned British voices `en-GB-LibbyNeural` and `en-GB-RyanNeural`, alternating by question and by turn in Part 3. These are synthetic voices, not human recordings. Locator and signal audio use normal speech rate; signal recordings may be 40–55 seconds, as explicitly approved by the user. Keep the 0.8/0.9/1.0 dictation progression. Do not speed up long recordings to force 45 seconds; revise unnecessary text instead. Signal cue times must come from actual recording metadata, with a ±2-second scoring window. Do not estimate timestamps from word counts. Replaying a signal recording clears its markers.

Non-map locators use paired selection: questions 1–6 have one pair; questions 7–10 have two and longer meaningful context. Prefer word/short-phrase paraphrases. Include clickable distractor phrases, not only grouped answers. Each target has the same explicit numeric `pair` identity on both sides. Complete a pair across the two sides before starting another; show matching small sequence numbers. Removing either member removes the pair and renumbers the rest. Crossing two correct expressions is still wrong. Preserve pairs, pending selections and expected links in records/JSON. Do not change the preserved map locator data or interaction.

Part 3 discussion recordings use both British voices. Dialogue cue offsets come from decoded audio frame counts and real sentence boundaries. Apparatus diagrams (for example the C9T4P2 control panel) are displayed in locator tasks without a route activity; real maps and floor plans use the route module. All new audio must be present and decodable before delivery. Keep one timing writer; use the bounded audio queue and its cache, not concurrent writers to audio-timings.js.

See `AUTHORING.md` for the content schema and audio workflow. Keep implementation notes out of the practice UI.

Practice 0 now covers all eight listening C20 Test1–4 Parts1–2 and both current reading passages (10 lessons, 191 contextual core entries). Read `AUTHORING-FOUNDATION.md`. It has two independent sections: 01 基础词汇 and 02 语境练习. Each context section has two original passages with semantically partitioned word banks, together covering the core list with 4–5 easier unused words. Use simple supporting language and natural prose, dialogue or other fitting genres; never force all terms into one story. Vocabulary completion immediately shows its summary/weak-word practice, without waiting for the contexts. There are no answer-hint controls; keep UI instructions brief and natural. Unlike practices 1/2, practice 0 checks vocabulary per question and each context passage as a whole, with automatic progress resume. Its checks update records through `rr:answer-check`; `selfPaced` suppresses the whole-practice button only on this page. Preserve whole-practice checking for all existing exercises. Run `node scripts/build-catalog.cjs` after editing foundation sources, `node tests/foundation.cjs` and `node tests/foundation-coverage.cjs` for acceptance. Do not automatically add practice 0 to other topics.

Use plain, concrete Chinese for meanings, options and explanations. A professional term can have a short everyday explanation; do not replace ordinary words with abstract definitions. See `VOCABULARY-REVIEW.md`. Meaning changes must also update associated question options/keys and sentence translations. `scripts/build-catalog.cjs` regenerates `data/vocab-meanings.js` for existing favorites and the foundation library; `data/vocabulary-clarity.json` supplies old labels accepted during foundation progress migration. Preserve learning progress and historical records. Run `node tests/vocabulary-clarity.cjs` for these changes.

## 2026-10-18 扩展状态

用户已明确授权：阅读剑21、19、18、17、16的全部60篇，每篇练习0/1/2；听力剑20/19/18全部48个Part补练习0。此前“不要自行扩展”的范围限制被本次明确请求覆盖。

当前已接入：听力48篇练习0；目标范围内阅读60篇各练习0/1/2，以及保留的C15T4P1三套。阅读目标范围已齐。`node scripts/audit-expansion.cjs --require-complete`是总范围检查，未补齐时必须失败。完整明细见EXPANSION-AUDIT.json。

新增练习0源为foundation-c20-parts3-4、foundation-c19、foundation-c18及各自contexts；阅读新增foundation-reading-c21-t1-p2在已有50篇之后加载，保留所有旧id、例句及声音分配。当前51篇733词、102篇语境、519空。每篇语境至少两段，按自然语义组织，不以凑段数拆句。

阅读新增reading-matching共用组件用于段落信息/人物观点匹配；使用passage.paragraphs（label/text）、choices（id/label）、items（id/q/answer/why）。允许重复使用选项，随全套核对，记录含完整文章、选项与答题细节。不要改成逐题核对。

## 扩展完成后的维护

当前327套练习，109套练习0、2141个篇内词项、218篇语境和1637空。新增阅读通过RRReadPack逐篇提供完整原创数据；reading-pack-builder只组装结构和id，不生成句子。build-catalog自动发现reading-c*.js并更新reading.html脚本列表、词义和基础词汇。新篇录音从篇内固定voiceOffset交替，防止增改其他篇词数导致旧声音分配变化。

新增reading-diagram和reading-short-answer共用填空核对。图在passage.diagram中保存src/alt/caption，JSON含图示引用；短答q不含___，不显示undefined；maxWords和accept同其他填空。原始SVG保存在assets/reading。

完整范围审计：node scripts/audit-expansion.cjs --require-complete。58个新阅读数据包由tests/reading-pack-expansion.cjs逐篇检查主干、长指代、6个不同证据句、专项格式、全套得分、导出和手机宽度。不要把同一事实重复作不同证据题。数量概览见EXPANSION-COVERAGE.md；原型三篇仍执行各自回归。

## 剑9–12新增完成

用户随后明确授权剑9–12全部听力（Test1–4、Part1–4），并同意并行分工后统一复核。64篇各练习0/1/2已全部完成并验收；当前519套、173篇。练习0全库173篇、3165词项、346语境、2405空；主听力2688段录音全部与文本及时间戳一致。以前的327套保留。

新源为data/authored-c{09,10,11,12}-tX-pY.practice.js，RRListenPack只组装作者显式内容；新图在5个地图篇和C9T4P2装置篇内。新增与旧库的完整验收见LISTENING-9-12-REVIEW.md。纯结构检查node scripts/validate-listening-packs.cjs；范围检查node scripts/audit-listening-9-12.cjs --require-complete；语句重复/来源检查node tests/listening-9-12-editorial.cjs。录音必须再执行check-listening-audio.py --complete，不能把初次超时日志当当前状态。

句子长度软检查仅供提醒；实际正常语速40–55秒优先，不能为达到词数门槛强加内容。信号标记行须为一个完整考点句，避免两句合在一行导致SentenceBoundary找不到。地图方向按钮按文本自动增高，北箭头必须在对应画布内。
