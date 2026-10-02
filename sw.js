// What the Fridge — offline support.
// The page, styles, code and recipe data are fetched network-first, so a change pushed
// to GitHub shows up on the next open; cached copies are only used offline.
// Recipe photos and icons are cached the first time they're shown and served from cache after.
// Bump VERSION to clear old caches after a large change.
var VERSION = 'wtf-v2';
var SHELL = ['./', 'index.html', 'styles.css', 'app.js', 'recipes.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(VERSION).then(function(c) { return c.addAll(SHELL); }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== VERSION; }).map(function(k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) { return; }

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function(res) {
      var copy = res.clone();
      caches.open(VERSION).then(function(c) { c.put('index.html', copy); });
      return res;
    }).catch(function() { return caches.match('index.html'); }));
    return;
  }

  // App code and data: network first, so a pushed change arrives on the next open.
  if (!/\/recipe-images\/|\/icons\//.test(req.url)) {
    e.respondWith(fetch(req).then(function(res) {
      if (res.ok) {
        var copy = res.clone();
        caches.open(VERSION).then(function(c) { c.put(req, copy); });
      }
      return res;
    }).catch(function() { return caches.match(req, { ignoreSearch:true }); }));
    return;
  }

  // Photos and icons: cache first — they never change once published.
  e.respondWith(caches.match(req).then(function(hit) {
    return hit || fetch(req).then(function(res) {
      if (res.ok) {
        var copy = res.clone();
        caches.open(VERSION).then(function(c) { c.put(req, copy); });
      }
      return res;
    });
  }));
});
