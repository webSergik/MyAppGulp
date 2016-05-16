var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
		gulpif = require('gulp-if'),
    browserSync = require('browser-sync');

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('sass', function () {
    gulp.src('app/sass/**/*.scss')
      .pipe(gulpif(isDevelopment,sourcemaps.init()))
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
      .pipe(gulpif(isDevelopment,sourcemaps.write()))
      .pipe(gulp.dest('public/css'))
      .pipe(browserSync.reload({stream: true}));
});
