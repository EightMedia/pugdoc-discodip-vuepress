# 🍲 Pug-doc + Discodip + Vuepress
recipe for a design system setup using pug-doc, discodip and vuepress

`npm install pug-doc discodip vuepress gulp --save-dev`

---

## Copy the /docs folder
This folder contains some boilerplate files

* [Discodip.vue](./docs/.vuepress/components/Discodip.vue), a Vue component for displaying the components
* Vuepress [config.js](./docs/.vuepress/config.js)
* a public folder; this is where all static assets go
* [discodip output folder](./docs/.vuepress/public/lib/)
* style override files for custom theming
* default pages for components and templates

---

## Setup tasks
[gulpfile.js](./gulpfile.js) can be used as a reference.

* run `npx vuepress dev docs` in one terminal window
* run `npx gulp` in another

---

## Read more
* https://www.npmjs.com/package/pug-doc
* https://www.npmjs.com/package/discodip
* https://vuepress.vuejs.org/config/#basic-config
* https://vuepress.vuejs.org/default-theme-config/
* https://vuepress.vuejs.org/default-theme-config/#simple-color-variables-override
* https://vuepress.vuejs.org/default-theme-config/#simple-css-override