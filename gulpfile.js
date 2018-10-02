const gulp = require("gulp");
const pugdoc = require("pug-doc");
const discodip = require("discodip");
const fs = require("fs");

gulp.task("pug-doc", gulpDone => {
  pugdoc({
    input: "src/templates/**/*.pug",
    output: "docs/components.json",
    locals: {},
    complete: gulpDone
  });
});

gulp.task("pugdocdiscodip", ["pug-doc"], gulpDone => {
  discodip({
    output: "docs/.vuepress/public/lib/",
    components: "docs/components.json",
    prerender: {
      port: 3000,
      path: "lib/",
      serveFolder: "docs/.vuepress/public"
    },
    headHtml: ``,
    bodyHtml: ``,
    onComplete: () => {
      fs.unlinkSync("docs/components.json");
      gulpDone();
    }
  });
});

gulp.task("default", () => {
  gulp.watch("src/templates/components/**/*.pug", ["pugdocdiscodip"]);
});
