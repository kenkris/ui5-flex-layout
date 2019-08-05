var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('webapp')
    .pipe(webserver({
        port: 8901,
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['webserver']);



