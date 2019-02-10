const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-package-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/templates/package.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/index.js"))),
  "component---src-pages-meet-the-owners-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/meet-the-owners.js"))),
  "component---src-pages-packages-js": hot(preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/packages.js")))
}

