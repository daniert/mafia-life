const V='mafialife-v4';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
const keep=(req,r)=>{if(r&&(r.ok||r.type==='opaque')){const cp=r.clone();caches.open(V).then(c=>c.put(req,cp))}return r};
self.addEventListener('fetch',e=>{
  const q=e.request;if(q.method!=='GET')return;
  // Pages: network first so updates arrive on the next load; cache only when offline
  if(q.mode==='navigate'){e.respondWith(fetch(q).then(r=>keep(q,r)).catch(()=>caches.match(q).then(h=>h||caches.match('./index.html'))));return}
  e.respondWith(caches.match(q).then(hit=>hit||fetch(q).then(r=>keep(q,r))))});
