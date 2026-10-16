const fs = require('fs');
const path = require('path');
const os = require('os');
const assert = require('assert');
const {pathToFileURL} = require('url');
let playwright;
try {playwright = require('playwright');}
catch {playwright = require(path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await playwright.chromium.launch({channel:'msedge',headless:true});
  const page = await browser.newPage({acceptDownloads:true,viewport:{width:1320,height:930}});
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    window.__qaAudio = [];
    const NativeAudio = window.Audio;
    window.Audio = function(...args) {const audio = new NativeAudio(...args);window.__qaAudio.push(audio);return audio;};
  });
  await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
  await page.locator('a.available').click();
  assert.equal(await page.locator('.practice').count(), 2);
  await page.locator('.practice').nth(1).click();
  assert.equal(await page.locator('.locator-card').count(), 10);
  assert.equal(await page.locator('.paraphrase-card').count(), 2);
  assert.equal(await page.locator('.signal-card').count(), 2);
  assert.equal(await page.locator('.source-wrap:visible').count(), 0);

  // Toggle, enforce a separate per-sentence limit, and let a selected unit be removed.
  const first = page.locator('.locator-card').first();
  const line = first.locator('.token-line').first();
  await line.locator('.token').nth(0).click();
  assert.equal(await line.locator('.selected').count(), 1);
  await line.locator('.token').nth(0).click();
  assert.equal(await line.locator('.selected').count(), 0);
  for (let i=0;i<3;i++) await line.locator('.token').nth(i).click();
  assert.equal(await line.locator('.token:disabled').count(), (await line.locator('.token').count()) - 3);
  await line.locator('.token.selected').first().click();
  assert.equal(await line.locator('.token:disabled').count(), 0);
  await page.evaluate(() => document.querySelectorAll('.locator-card .token.selected').forEach(node => node.click()));

  for (let i=0;i<10;i++) {
    const card = page.locator('.locator-card').nth(i);
    await card.locator('.reveal-source').click();
    await card.locator('.source-wrap').waitFor({state:'visible'});
    await page.evaluate(index => {
      const item = RRPracticeSession.practice.sections[0].items[index];
      const card = document.querySelectorAll('.locator-card')[index];
      ['question','source'].forEach((field,lineIndex) => {
        const tokens = item[field].filter(token => !(typeof token==='string'?token:token.text).includes('___'));
        const nodes = card.querySelectorAll('.token-line')[lineIndex].querySelectorAll('.token');
        tokens.forEach((token,i) => {if(token.key)nodes[i].click();});
      });
    }, i);
  }
  assert.equal(await page.locator('[data-section-check]').count(), 0);
  assert.equal(await page.locator('#check-practice').count(), 1);
  assert.equal(await page.locator('.feedback:visible').count(), 0);
  await page.locator('#open-records').click();
  assert.equal(await page.locator('.record-item').count(), 0);
  await page.locator('[data-close="records-dialog"]').click();
  assert.equal(await page.locator('.source-wrap:visible').count(), 10);

  // A real browser drag, followed by the accessible click-to-place path.
  await page.locator('[data-choice-id="p1-a"]').dragTo(page.locator('[data-slot-id="p1-1"]'));
  assert.equal(await page.locator('[data-slot-id="p1-1"]').innerText(), 'relaxed');
  const firstBank=page.locator('.paraphrase-card').first().locator('.word-bank');
  await page.locator('[data-slot-id="p1-1"]').dragTo(firstBank);
  assert.equal(await page.locator('[data-slot-id="p1-1"]').innerText(), '拖入');
  assert(await page.locator('[data-choice-id="p1-a"]').isVisible());
  await page.locator('[data-choice-id="p1-a"]').dragTo(page.locator('[data-slot-id="p1-2"]'));
  await page.locator('[data-slot-id="p1-2"]').dragTo(page.locator('[data-slot-id="p1-1"]'));
  assert.equal(await page.locator('[data-slot-id="p1-2"]').innerText(), '拖入');
  assert.equal(await page.locator('[data-slot-id="p1-1"]').innerText(), 'relaxed');
  // Dropping a filled choice in another paragraph must leave it where it was.
  await page.locator('[data-slot-id="p1-1"]').dragTo(page.locator('.paraphrase-card').nth(1).locator('.word-bank'));
  assert.equal(await page.locator('[data-slot-id="p1-1"]').innerText(), 'relaxed');
  await page.locator('[data-slot-id="p1-1"]').click();
  assert(await page.locator('[data-choice-id="p1-a"]').isVisible());
  await page.locator('[data-choice-id="p1-a"]').dragTo(page.locator('[data-slot-id="p1-1"]'));
  await page.evaluate(() => {
    RRPracticeSession.practice.sections[1].items.forEach(item => {
      item.segments.filter(segment=>typeof segment!=='string').forEach(target => {
        if(document.querySelector(`[data-slot-id="${target.id}"]`).classList.contains('filled'))return;
        document.querySelector(`[data-choice-id="${target.answer}"]`).click();
        document.querySelector(`[data-slot-id="${target.id}"]`).click();
      });
    });
  });
  assert.equal(await page.locator('.bank-choice:visible').count(), 6);
  assert.equal(await page.locator('.feedback:visible').count(), 0);

  async function playSignal(index) {
    const card = page.locator('.signal-card').nth(index);
    await card.locator('.audio-controls .secondary').first().click();
    await page.waitForFunction(i => {
      const item=RRPracticeSession.practice.sections[2].items[i];
      const audio=__qaAudio.find(audio=>audio.src.endsWith(item.audio));
      const mark=document.querySelectorAll('.signal-card')[i].querySelector('.mark-button');
      return audio&&!audio.paused&&audio.readyState>=1&&!mark.disabled;
    }, index);
  }
  async function markAt(index, times) {
    await page.evaluate(({index,times}) => {
      const item=RRPracticeSession.practice.sections[2].items[index];
      const audio=__qaAudio.find(audio=>audio.src.endsWith(item.audio));
      const mark=document.querySelectorAll('.signal-card')[index].querySelector('.mark-button');
      times.forEach(value=>{audio.currentTime=value;mark.click();});
    }, {index,times});
  }
  const times = await page.evaluate(() => RRPracticeSession.practice.sections[2].items.map(item=>RRSignalTimings[item.audio].cues.map(cue=>cue.start)));
  await playSignal(0);
  // One point outside the tolerance and one extra mark must not become a third hit.
  await markAt(0, [times[0][0]+2.2, times[0][1], times[0][2], 2]);
  assert.equal((await page.evaluate(()=>RRPracticeSession.controllers[2].getResult())).details[0].correct, 2);
  assert.equal(await page.locator('.standard-marker').count(), 0);
  await playSignal(0);
  assert.equal(await page.locator('.signal-card').first().locator('.time-marker,.standard-marker').count(), 0);
  await markAt(0, times[0]);
  await playSignal(1);
  await markAt(1, times[1]);
  assert(await page.evaluate(()=>RRPracticeSession.practice.sections[2].items.every(item=>{
    const audio=__qaAudio.find(audio=>audio.src.endsWith(item.audio));
    return audio.duration>=41&&audio.duration<=48&&Math.abs(audio.duration-RRSignalTimings[item.audio].duration)<0.1;
  })));
  await page.locator('#check-practice').click();
  assert.match(await page.locator('#locators .section-score').innerText(), /50\/50/);
  assert.match(await page.locator('#paraphrases .section-score').innerText(), /12\/12/);
  assert.match(await page.locator('#signals .section-score').innerText(), /6\/6 · 多标 0/);
  assert.equal(await page.locator('.standard-marker').count(), 6);
  // Replaying after checking clears both the user's markers and the shown reference positions.
  await playSignal(0);
  assert.equal(await page.locator('.signal-card').first().locator('.time-marker,.standard-marker').count(), 0);
  await markAt(0, times[0]);
  await page.locator('#check-practice').click();

  // One completion button saves all sections together; rechecking updates that same attempt.
  await page.locator('#open-records').click();
  assert.equal(await page.locator('.record-item').count(), 1);
  const downloadPromise=page.waitForEvent('download');
  await page.getByRole('button',{name:'导出这次记录 JSON'}).click();
  const download=await downloadPromise;
  const record=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
  assert.deepEqual(record.sections.map(section=>section.correct), [50,12,6]);
  await page.reload();
  await page.locator('#open-records').click();
  assert.equal(await page.locator('.record-item').count(), 1);
  page.once('dialog',dialog=>dialog.accept());
  await page.getByRole('button',{name:'删除这次记录'}).click();
  assert.equal(await page.locator('.record-item').count(), 0);
  await page.locator('[data-close="records-dialog"]').click();
  await page.locator('#open-words').click();
  await page.locator('.word-star').first().click();
  await page.locator('[data-close="words-dialog"]').click();
  await page.goto(pathToFileURL(path.join(root,'index.html')).href);
  await page.locator('#open-favorites').click();
  assert.equal(await page.locator('.favorite-row').count(),1);
  assert.equal(await page.locator('.favorite-reveal span').innerText(),'点击显示意思');
  await page.locator('#close-favorites').click();
  await page.locator('a.available').click();
  await page.locator('.practice').first().click();
  assert.equal(await page.locator('#vocab .card').count(),11);

  // Mobile layout: no horizontal page overflow.
  await page.goto(pathToFileURL(path.join(root,'listening.html')).href+'?id=c20-t1-p1-2');
  await page.setViewportSize({width:390,height:844});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
  assert.deepEqual(errors, []);
  await browser.close();
  console.log('Passed: three reusable types, limits, source audio reveal, drag, timing tolerance, replay reset, records/export/delete, favorites, old practice, mobile.');
})().catch(error=>{console.error(error);process.exit(1);});
