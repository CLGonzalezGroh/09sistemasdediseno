var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");

gulp.task("hello", (cb) => {
  console.log("Hello!!!!");
  cb();
});

gulp.task("sass", (cb) => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/stylesheets"));
});

gulp.task("style_min", (cb) => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(concat("style_main.min.css"))
    .pipe(gulp.dest("./public/stylesheets"));
});

gulp.task("watch", () => {
  gulp.watch("scss/**/*.scss", gulp.series("style_min"));
});
