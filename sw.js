const CACHE_NAME = 'flex-v1';
const ASSETS = ['index.html', 'manifest.json'];

// Кешируем файлы при установке
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Работаем из кеша, если нет сети
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});