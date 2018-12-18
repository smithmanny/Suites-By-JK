// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-package-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/src/templates/package.js" /* webpackChunkName: "component---src-templates-package-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-meet-the-owners-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/meet-the-owners.js" /* webpackChunkName: "component---src-pages-meet-the-owners-js" */),
  "component---src-pages-packages-js": () => import("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/packages.js" /* webpackChunkName: "component---src-pages-packages-js" */)
}

exports.data = () => import("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/data.json")

