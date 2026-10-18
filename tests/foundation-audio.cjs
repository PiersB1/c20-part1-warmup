const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const context = {};
context.window = context;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'data/foundation-library.js'), 'utf8'), context);
const practices = Object.values(context.RRFoundationPractices);
const terms = practices.flatMap(p => p.sections[0].items);
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/foundation-audio-manifest.json'), 'utf8'));
const rows = new Map(manifest.map(row => [row.audio, row]));
const base = practices.filter(p => ![9,10,11,12].includes(p.location.book));
assert.equal(base.length, 109);
assert.equal(base.flatMap(p => p.sections[0].items).length, 2141);
assert.equal(manifest.length, terms.length);
assert.equal(rows.size, terms.length);
for (const term of terms) {
  const row = rows.get(term.audio);
  assert(row, `Missing manifest entry: ${term.audio}`);
  assert.equal(row.voice, term.voice, term.audio);
  assert(['en-GB-LibbyNeural', 'en-GB-RyanNeural'].includes(term.voice));
  const bytes = fs.readFileSync(path.join(root, term.audio));
  assert(bytes.length > 1000, term.audio);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), row.sha256, term.audio);
}
console.log(`${practices.length} foundation lessons: all ${terms.length} recordings, British voices and SHA-256 hashes passed.`);
