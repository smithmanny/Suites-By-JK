// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-package-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/templates/package.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/index.js")),
  "component---src-pages-packages-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/packages.js")),
  "component---src-pages-requirements-js": preferDefault(require("/Users/shakhor/Projects/Web/Suites-By-JK/src/pages/requirements.js"))
}

exports.json = {
  "layout-index.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/layout-index.json"),
  "packages-bridal-transportation.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-bridal-transportation.json"),
  "packages-grown-ish.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-grown-ish.json"),
  "packages-all-access.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-all-access.json"),
  "packages-so-you-think-you-can-sing.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-so-you-think-you-can-sing.json"),
  "packages-sip-and-dip.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-sip-and-dip.json"),
  "packages-pampered-princess.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-pampered-princess.json"),
  "packages-the-glow-up.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-the-glow-up.json"),
  "packages-the-day-camp.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages-the-day-camp.json"),
  "dev-404-page.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/404.json"),
  "about.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/about.json"),
  "contact.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/contact.json"),
  "index.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/index.json"),
  "packages.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/packages.json"),
  "requirements.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/requirements.json"),
  "404-html.json": require("/Users/shakhor/Projects/Web/Suites-By-JK/.cache/json/404-html.json")
}