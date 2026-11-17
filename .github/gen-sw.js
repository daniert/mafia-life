// Rewrites sw.js in the built site: the precache list (every file needed offline)
// and a version derived from their contents, so any change invalidates the cache.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=process.argv[2];
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()?walk(p):[p]});
const files=walk(root).map(p=>path.relative(root,p).split(path.sep).join('/'))
  .filter(f=>f!=='sw.js'&&!f.startsWith('docs/')&&!/\.txt$/.test(f)).sort();
const h=crypto.createHash('sha256');for(const f of files){h.update(f);h.update(fs.readFileSync(path.join(root,f)))}
h.update(fs.readFileSync(path.join(root,'sw.js')));
const sw=path.join(root,'sw.js');let s=fs.readFileSync(sw,'utf8');
const V="const V='mafialife-"+h.digest('hex').slice(0,12)+"';";
const CORE='const CORE='+JSON.stringify(['./',...files.map(f=>'./'+f)])+';';
const before=s;
s=s.replace(/^const V=.*$/m,V).replace(/^const CORE=[\s\S]*?\];$/m,CORE);
if(s===before||!s.includes(V)||!s.includes(CORE))throw new Error('sw.js markers not found');
fs.writeFileSync(sw,s);console.log(V+'\n'+CORE);
