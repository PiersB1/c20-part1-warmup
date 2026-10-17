const assert=require('assert'),path=require('path'),os=require('os'),{pathToFileURL}=require('url');
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({acceptDownloads:true});
  await page.addInitScript(()=>{window.Audio=class extends EventTarget{constructor(src){super();this.src=src;this.currentTime=0;this.paused=true;}play(){this.paused=false;return Promise.resolve();}pause(){this.paused=true;}};});
  await page.goto(pathToFileURL(path.resolve(__dirname,'../listening.html')).href+'?id=c18-t1-p1-2');
  const card=page.locator('.locator-card').nth(6);
  await card.locator('.reveal-source').click();
  const result=await page.evaluate(()=>{
   const item=RRPracticeSession.practice.sections[0].items[6],card=document.querySelectorAll('.locator-card')[6],lines=card.querySelectorAll('.token-line');
   const keys=side=>item[side].map((t,i)=>t.key?{...t,index:i}:null).filter(Boolean);
   const q=keys('question'),s=keys('source');
   const node=(side,index)=>lines[side==='question'?0:1].querySelector(`[data-token-index="${index}"]`);
   const click=(side,t)=>node(side,t.index).click();
   // Start on the source side; another source pick is blocked until a question pick.
   click('source',s[0]);const blocked=node('source',s[1].index).disabled;
   click('source',s[1]);const pendingCount=lines[1].querySelectorAll('.selected').length;
   click('source',s[0]); // Cancel pending.
   // Cross two genuine keys: correct selected sets must still score zero.
   click('question',q[0]);click('source',s.find(t=>t.pair!==q[0].pair));
   click('source',s.find(t=>t.pair===q[0].pair));click('question',q[1]);
   const controller=RRPracticeSession.controllers[0];controller.check();
   const wrong=controller.getResult().details[6];
   const badges=[...card.querySelectorAll('.selected .pair-number')].map(n=>n.textContent);
   // Removing one member removes the whole pair and renumbers the remaining pair.
   click('question',q[0]);const remaining=[...card.querySelectorAll('.selected .pair-number')].map(n=>n.textContent);
   const partnerRemoved=!node('source',s.find(t=>t.pair!==q[0].pair).index).classList.contains('selected');
   click('question',q[1]);
   // Complete the correct pairs in reverse order and from alternating start sides.
   click('source',s.find(t=>t.pair===q[1].pair));click('question',q[1]);
   click('question',q[0]);click('source',s.find(t=>t.pair===q[0].pair));
   const correct=controller.getResult().details[6];
   return {blocked,pendingCount,wrong,badges,remaining,partnerRemoved,correct};
  });
  assert(result.blocked);assert.equal(result.pendingCount,1);assert.equal(result.wrong.correct,0);assert.equal(result.wrong.total,4);
  assert.deepEqual(result.badges.sort(),['1','1','2','2']);assert.deepEqual(result.remaining,['1','1']);assert(result.partnerRemoved);
  assert.equal(result.correct.correct,4);assert(result.correct.response.pairs.every(p=>p.correct));
  assert.equal(result.correct.response.pending,null);assert.equal(result.correct.response.pairs[0].question,'relative');
  await page.locator('#check-practice').click();await page.locator('#open-records').click();
  await page.locator('#record-detail').getByText('你的配对：',{exact:false}).first().waitFor();
  const download=page.waitForEvent('download');await page.getByRole('button',{name:'导出这次记录 JSON'}).click();
  const fs=require('fs'),record=JSON.parse(fs.readFileSync(await(await download).path(),'utf8'));
  assert.deepEqual(record.sections[0].details[6].response.pairs,result.correct.response.pairs);
  await page.locator('[data-close="records-dialog"]').click();
  await page.setViewportSize({width:390,height:844});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  if(process.argv.includes('--screenshots')){
   await card.screenshot({path:path.resolve(__dirname,'../.work/locator-pair-mobile.png')});
   await page.setViewportSize({width:1240,height:900});
   await card.screenshot({path:path.resolve(__dirname,'../.work/locator-pair-desktop.png')});
  }
  console.log('Pair sequence, both start sides, cross-pair grading, cancellation, renumbering, records/JSON and mobile width passed.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
