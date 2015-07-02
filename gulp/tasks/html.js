var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('html', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream: true}));
});
