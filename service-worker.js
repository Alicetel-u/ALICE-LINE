const CACHE='bunny-stamps-v2';
const ASSETS=['./','./index.html','./style.css','./app.js','./app-icon.png','./ruby-stamps-sheet.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('fetch',event=>{if(event.request.method==='GET'&&new URL(event.request.url).origin===location.origin)event.respondWith(caches.match(event.request).then(saved=>saved||fetch(event.request)))});
