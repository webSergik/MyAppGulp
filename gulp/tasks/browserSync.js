var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('server', function() {
    notify: false,
    browserSync({
        server: {
                    baseDir: "public",
                    routes: {
                           "/bower_components": "bower_components"
                       }
                }
    });
});
