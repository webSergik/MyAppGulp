var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('components', function() {
  gulp.src('app/components/**/*.html')
    .pipe(gulp.dest('public/components'))
    .pipe(browserSync.reload({stream: true}));
});
