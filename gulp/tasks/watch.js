var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/pages/**/*.jade', ['jade']);
});
