self.addEventListener('install', event => {
  console.log('Service Worker: install');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: activate');
});

self.addEventListener('fetch', event => {
  // Пока просто пропускаем все запросы
});