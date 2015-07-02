var gulp = require('gulp'),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('app/sass/**/*.scss')
      .pipe(sourcemaps.init())
      	.pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/css'))
      .pipe(browserSync.reload({stream: true}));
});
