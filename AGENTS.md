# Listening exercises

This is a local, buildless practice website. Keep it usable by opening `index.html` directly. Use classic scripts, not fetch-dependent JSON or browser ES modules.

The library covers all listening Parts 1–4 of Cambridge 20, 19, 18, 11, 10 and 9. Preserve previously completed C20 Part 1–2 content. Every part has two practices. `RRAddTopic` accepts `book` (default 20); never hardcode a new book as C20. The curated shorthand in `preparation-builders.js` expands each topic's own original sentences and bilingual vocabulary. Do not replace topic-specific material with a shared generic passage. Read the verified theme/type index in `CONTENT-SOURCES.md` before adding content.

Each listening part normally has two practices: practice 1 uses quiz (core vocabulary/grammar, including multi-select and cloze) plus 12 sentence dictations; practice 2 uses 10 locators, two six-slot paraphrase paragraphs, and two approximately 45-second signal recordings. Reuse the renderers in `modules/`. Add topic content in a `data/*.practice.js` file using `RRAddTopic`, load that file in `listening.html`, and register both entries in `exercise-catalog.js`. Do not copy a new exercise page or rewrite an existing renderer for each exercise. Reading types have not been defined yet; ask the user before establishing them.

Use plausible near-meaning options and contrasts in conditions, scope, timing, and obligation for quiz distractors. The builder shuffles option positions deterministically. Preserve C20T1P1's existing practices. New source question formats must match each target part; map locator questions include an original diagram and ask for word marking. For a map topic, practice 2 has one signal recording and a fourth route activity instead of the second signal recording. Reuse modules/route.js, with north-up original maps, a person, cardinal synonym buttons, persistent trails, undo, pause and replay reset. Grade the complete walked path together with all sections; preserve route details in records and JSON.

Match the question format of the relevant Cambridge part. Write new sentences and recordings for preparation. Do not reuse the real paper's sentences, gap answers, numerical answers, or proper names. Practise its relevant vocabulary, grammar, paraphrases, distractors, and signal language. If the required content or interaction is ambiguous, ask the user rather than inventing a requirement.

Keep practice 1 available. Preserve favorites and saved records. All sections of one practice are submitted together using one completion/check button at the bottom. Do not add per-section check buttons. This single action grades every section and automatically creates/updates one complete record for the current page visit. Records remain viewable, deletable, and individually exportable as JSON. Do not save on every answer change.

Paraphrase choices must be reversible: filled slots are draggable back to their own word bank or into another slot. Clicking a filled slot can also return its choice. A canceled or invalid drag must preserve the assignment.

Use natural British speech, currently `en-GB-SoniaNeural` and `en-GB-RyanNeural`. Signal cue times must come from the actual recording metadata, with a ±2-second scoring window. Do not estimate timestamps from word counts. Replaying a signal recording clears its markers.

Part 3 discussion recordings use both British voices. Dialogue cue offsets come from decoded audio frame counts and real sentence boundaries. Apparatus diagrams (for example the C9T4P2 control panel) are displayed in locator tasks without a route activity; real maps and floor plans use the route module. All new audio must be present and decodable before delivery. Keep one timing writer; use the bounded audio queue and its cache, not concurrent writers to audio-timings.js.

See `AUTHORING.md` for the content schema and audio workflow. Keep implementation notes out of the practice UI.
