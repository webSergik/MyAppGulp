
var gulp = require('gulp'),
    svgSprite = require("gulp-svg-sprites");

gulp.task('sprites', function () {
    return gulp.src('app/images/*.svg')
        .pipe(svgSprite({
          mode: "symbols",
          preview: false
        }))
        .pipe(gulp.dest("public/images"));
});
