let gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  prefixer = require("gulp-autoprefixer"),
  cssmin = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel"),
  fileinclude = require("gulp-file-include"),
  gcmq = require("gulp-group-css-media-queries");

gulp.task("html_build", function (done) {
  return gulp
    .src("src/*.html")
    .pipe(fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.stream());
  //done();
});

gulp.task("css_build", function (done) {
  return gulp
    .src(["src/assets/scss/*.scss"])
    .pipe(sass())
    .pipe(prefixer(["last 15 versions"]))
    .pipe(gcmq())
    .pipe(cssmin())
    .pipe(gulp.dest("build/css/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("js_build", function (done) {
  return gulp
    .src([
       "node_modules/scroll-to-element/build/scrollToElement.js",
       "src/assets/js/main.js",
    ])
    .pipe(babel({
			presets: ['babel-preset-env']
		}))
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("fonts_build", function (done) {
  return gulp
    .src("src/assets/fonts/**/*.*")
    .pipe(gulp.dest("build/fonts/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("image_build", function (done) {
  return gulp
    .src("src/assets/image/**/*.*")
    .pipe(gulp.dest("build/image/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("webServer", function (done) {
  browserSync.init({
    server: "build/",
  });
  gulp.watch("src/**/*.html", gulp.series("html_build"));
  gulp.watch("src/**/*.scss", gulp.series("css_build"));
  gulp.watch("src/**/*.js", gulp.series("js_build"));
  gulp.watch("src/assets/fonts/**/*.*", gulp.series("fonts_build"));
  gulp.watch("src/assets/image/**/*.*", gulp.series("image_build"));
  done();
});

gulp.task(
  "default",
  gulp.series("html_build", "css_build", "js_build", "fonts_build","image_build", "webServer")
);
