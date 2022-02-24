var cacheName = 'Fastkart';
var filesToCache = [
  './',
  './index.html',
  './assets/css/vendors/bootstrap.css',
  './assets/css/vendors/bootstrap.rtl.css',
  './assets/css/vendors/slick-theme.css',
  './assets/css/vendors/slick.css',
  './assets/css/dark.css',
  './assets/css/date-picker.css',
  './assets/css/iconly.css',
  './assets/css/pricing-slider.css',
  './assets/css/style.css',
  './assets/js/date-picker/datepicker.js',
  './assets/js/date-picker/datepicker.en.js',
  './assets/js/date-picker/datepicker.custom.js',
  './assets/js/pricing-slider/pricing-slider-custom.js',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/feather.min.js',
  './assets/js/here-map-info.js',
  './assets/js/here-map-route.js',
  './assets/js/jquery-3.6.0.min.js',
  './assets/js/jquery-swipe-1.11.3.min.js',
  './assets/js/jquery.mobile-1.4.5.min.js',
  './assets/js/lord-icon-2.1.0.js',
  './assets/js/otp.js',
  './assets/js/pricing-slider.js',
  './assets/js/script.js',
  './assets/js/slick-custom.js',
  './assets/js/slick.js',
  './assets/js/slick.min.js',
  './assets/js/theme-setting.js'
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
