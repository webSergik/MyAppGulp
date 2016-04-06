var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('images', ['clean'], function() {
  return gulp.src('app/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/img'));
});
