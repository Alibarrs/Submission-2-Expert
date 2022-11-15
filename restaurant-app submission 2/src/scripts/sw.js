self.addEventListener('install', (event) => {
  console.log('Installing Service Worker...');

  // To Do Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // To Do Delete Old Caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.responWidth(fetch(event.request));
});
