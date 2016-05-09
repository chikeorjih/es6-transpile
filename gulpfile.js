var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('watch', function() {
  gulp.watch('src/js/*.js',['transpile']);
});

gulp.task('transpile', function () {
  return gulp.src("src/js/main.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/js"));
});

gulp.task('default', ['watch']);
