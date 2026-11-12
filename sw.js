const V='mafialife-v11';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png',
  './fonts/barlow-400.woff2','./fonts/barlow-600.woff2','./fonts/barlow-700.woff2','./fonts/playfair-display.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Cache only successful same-origin responses (opaque ones eat storage quota)
const keep=(req,r)=>{if(r&&r.ok&&new URL(req.url).origin===location.origin){const cp=r.clone();caches.open(V).then(c=>c.put(req,cp))}return r};
self.addEventListener('fetch',e=>{
  const q=e.request;if(q.method!=='GET')return;
  // Pages: network first so updates arrive on the next load; cache only when offline
  if(q.mode==='navigate'){e.respondWith(fetch(q).then(r=>keep(q,r)).catch(()=>caches.match(q).then(h=>h||caches.match('./index.html'))));return}
  e.respondWith(caches.match(q).then(hit=>hit||fetch(q).then(r=>keep(q,r))))});
