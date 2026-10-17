const fs=require('fs'),assert=require('assert'),crypto=require('crypto'),c=require('./load-library.cjs')();
// These digests were established after comparison with the pre-revision Git version.
// Hashes preserve no copy of the old content or audio.
const expected={
 'c18-t2-p2-2':'a54cd27cdfea6d576ab18dc460e7ae410b2c187ff0c876f03599e933080e1263',
 'c19-t1-p2-2':'558987841556e485597a5b2c5f20a4671bf80cd28464eb2669342b890627b8a2',
 'c20-t3-p2-2':'ff43be2904ec581c8bbc1c10b7c30395d5448a7d008c92fb57558d41fd17bb01'
};
const hash=data=>crypto.createHash('sha256').update(data).digest('hex');let clips=0;
for(const [id,digest] of Object.entries(expected)){
 const p=c.RRListeningPractices[id],loc=p.sections[0],route=p.sections.find(s=>s.type==='route');
 const items=loc.items.filter(i=>/地图|平面图/.test(i.format));
 const audio=items.concat(route.items).map(i=>[i.audio,hash(fs.readFileSync(i.audio))]);clips+=audio.length;
 assert.equal(hash(JSON.stringify({map:loc.map,items,route,audio})),digest,id+' map content or audio changed');
}
console.log(`Preserved 3 maps, all map locator items and routes, and ${clips} map/route audio files.`);
