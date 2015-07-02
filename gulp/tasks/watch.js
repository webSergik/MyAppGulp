var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch(["app/sass/**/*.scss"], ['sass']);
	gulp.watch(["app/css/**/*.css"], ['css']);
	gulp.watch(["app/jade/**/*.jade"], ['jade']);
	gulp.watch(["app/*.html"], ['html']);
});
