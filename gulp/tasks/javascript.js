var gulp = require('gulp'),
  browserSync = require('browser-sync');

gulp.task('javascript', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({stream: true}));
});
