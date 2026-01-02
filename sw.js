
self.addEventListener('install', (e) => {
  console.log('PWA Service Worker установлен');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});