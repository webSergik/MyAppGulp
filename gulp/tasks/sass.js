var gulp = require('gulp'),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('./app/sass/*.scss')
    	.pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}));
});