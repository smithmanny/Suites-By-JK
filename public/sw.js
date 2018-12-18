/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fa0382732e3e16398d26.js"
  },
  {
    "url": "app-8f4dfeaf57760eda26e1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ca32363f72b0f7afb25c.js"
  },
  {
    "url": "index.html",
    "revision": "f80be758ab1e0d795edd420ba1986854"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bc6d9f55738d33251316d0695639ce9f"
  },
  {
    "url": "11.40a888379e9fc092a393.css"
  },
  {
    "url": "component---src-pages-index-js-cba0bbda6a89c4afe00f.js"
  },
  {
    "url": "11-8b80126465cc2df96eb7.js"
  },
  {
    "url": "1-9b068ab75c3d142ed4cc.js"
  },
  {
    "url": "0-dbe3eb0dc4b87384da1a.js"
  },
  {
    "url": "static/d/953/path---index-6a9-WSBHZqYS3NNu14Krws1fuv4V6BY.json",
    "revision": "155e1929fba7de17e6c729f544fd2cbb"
  },
  {
    "url": "component---src-pages-404-js-389b7f6b90fefe3665bf.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8ebc47751750d1b7e6f33faa3a804ab2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});