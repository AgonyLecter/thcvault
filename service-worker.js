self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/riserve.html',
          '/manifest.json',
          '/logo.ico',
          '/cannabis.png', // Aggiungi il file icona
          '/css/styles.css', // Assuming you have a separate CSS file
          '/js/app.js' // Assuming you have a separate JS file
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  