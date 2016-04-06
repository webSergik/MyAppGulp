var gulp = require('gulp');

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('public/fonts'));
});
