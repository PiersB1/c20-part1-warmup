# Listening exercises

This is a local, buildless practice website. Keep it usable by opening `index.html` directly. Use classic scripts, not fetch-dependent JSON or browser ES modules.

For future listening exercises, use the reusable types in `modules/`: locator, paraphrase, signal. New content belongs in `data/listening-practices.js`; register its entry in `exercise-catalog.js`. Do not copy a new exercise page or rewrite an existing renderer for each exercise. Reading types have not been defined yet; ask the user before establishing them.

Match the question format of the relevant Cambridge part. Write new sentences and recordings for preparation. Do not reuse the real paper's sentences, gap answers, numerical answers, or proper names. Practise its relevant vocabulary, grammar, paraphrases, distractors, and signal language. If the required content or interaction is ambiguous, ask the user rather than inventing a requirement.

Keep practice 1 available. Preserve favorites and saved records. A check action automatically creates/updates one record for the current page visit. Records remain viewable, deletable, and individually exportable as JSON. Do not save on every answer change.

Use natural British speech, currently `en-GB-SoniaNeural` and `en-GB-RyanNeural`. Signal cue times must come from the actual recording metadata, with a ±2-second scoring window. Do not estimate timestamps from word counts. Replaying a signal recording clears its markers.

See `AUTHORING.md` for the content schema and audio workflow. Keep implementation notes out of the practice UI.
