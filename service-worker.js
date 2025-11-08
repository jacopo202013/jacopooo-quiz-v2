self.addEventListener("install", event => {
  console.log("Service worker installato");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service worker attivato");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
