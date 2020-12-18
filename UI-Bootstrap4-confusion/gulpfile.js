"use strict";

let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync");

sass.compiler = require("node-sass");

gulp.task("sass", () => {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", () => {
  gulp.watch("./css/*.scss", ["sass"]);
});

gulp.task("browser-sync", () => {
  let files = ["./*.html", "./css/*.css", "./img/*.{png,jpg,gif}", "./js/*.js"];

  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
});

// Default task
gulp.task("default", gulp.parallel("browser-sync"), () => {
  gulp.start("sass:watch");
});
