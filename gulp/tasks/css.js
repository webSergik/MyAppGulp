var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer')
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('css', function () {
    gulp.src('app/css/**/*.css')
      .pipe(plumber())
      .pipe(autoprefixer())
      .pipe(gulp.dest('public/css'))
      .pipe(browserSync.reload({stream: true}));
});
