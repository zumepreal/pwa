const CACHE_NAME = 'tasker-v2';
const ASSETS = [
  'index.html',
  'via.placeholder.com',
  'via.placeholder.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Стратегия: Сначала кеш, если нет - сеть
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});