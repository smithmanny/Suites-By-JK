// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-package-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/templates/package.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/index.js")),
  "component---src-pages-meet-the-owners-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/meet-the-owners.js")),
  "component---src-pages-packages-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/packages.js"))
}

