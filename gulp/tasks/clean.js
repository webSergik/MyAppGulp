var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function() {
  return del(['public/img']);
});
