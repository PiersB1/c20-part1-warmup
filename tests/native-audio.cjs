const fs=require('fs'),path=require('path'),os=require('os'),vm=require('vm'),assert=require('assert'),{pathToFileURL}=require('url');
const {chromium}=require(path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
(async()=>{
 const root=path.resolve(__dirname,'..'),c={};c.window=c;vm.createContext(c);
 for(const name of ['listening-practices.js','practice-builders.js','preparation-builders.js','editorial-multi.js','editorial-quiz-context.js','editorial-signal-context.js','editorial-revisions.js',...fs.readdirSync(path.join(root,'data')).filter(n=>n.endsWith('.practice.js')).sort(),'audio-timings.js'])vm.runInContext(fs.readFileSync(path.join(root,'data',name),'utf8'),c);
 const clips=[];
 for(const topic of c.RRPreparedTopics)for(const n of [1,2])for(const section of c.RRListeningPractices[`c${topic.book}-t${topic.test}-p${topic.part}-${n}`].sections)for(const item of section.items)if(item.audio)clips.push({audio:item.audio,url:pathToFileURL(path.join(root,item.audio)).href,duration:c.RRSignalTimings[item.audio]?.duration,play:(topic.test===1&&topic.part===3&&section.type==='signal')||section.type==='route'});
 assert.equal(clips.length,1152);assert(clips.every(item=>fs.existsSync(path.join(root,item.audio))),'Missing MP3 files');
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--autoplay-policy=no-user-gesture-required']}),page=await browser.newPage();await page.goto(pathToFileURL(path.join(root,'index.html')).href);
 const results=await page.evaluate(async clips=>{
  const result=[];
  for(let offset=0;offset<clips.length;offset+=20){
   const batch=await Promise.all(clips.slice(offset,offset+20).map(clip=>new Promise((resolve,reject)=>{
    const audio=new Audio();audio.preload='metadata';const timeout=setTimeout(()=>reject(Error('Timed out: '+clip.audio)),15000);
    audio.addEventListener('error',()=>{clearTimeout(timeout);reject(Error('Cannot decode: '+clip.audio));},{once:true});
    audio.addEventListener('loadedmetadata',async()=>{try{
     const duration=audio.duration;if(!Number.isFinite(duration)||duration<=1)throw Error('Invalid duration: '+clip.audio);
     if(clip.duration&&Math.abs(duration-clip.duration)>.25)throw Error('Timing mismatch: '+clip.audio);
     if(clip.play){audio.muted=true;await audio.play();audio.pause();}
     clearTimeout(timeout);audio.removeAttribute('src');audio.load();resolve({audio:clip.audio,duration,played:clip.play});
    }catch(error){clearTimeout(timeout);reject(error);}},{once:true});
    audio.src=clip.url;audio.load();
   })));
   result.push(...batch);
  }return result;
 },clips);
 assert.equal(results.length,1152);assert(results.filter(item=>item.played).length>=8);await browser.close();console.log(`Decoded ${results.length} new MP3 files in the native browser; played ${results.filter(item=>item.played).length} sample discussions/routes and checked timing durations.`);
})().catch(error=>{console.error(error);process.exit(1);});
