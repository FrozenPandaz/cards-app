var gulp = require('gulp'),
	vulcanize = require('gulp-vulcanize'),
	webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 9000
    }));
});

gulp.task('build', function() {
	gulp.src('app/bower_components/*').pipe(gulp.dest('dist/bower_components'));
	return gulp.src('app/index.html')
		.pipe(vulcanize({
			stripComments: true,
			inlineCss: true,
			inlineScripts: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {

});

gulp.task('default', ['webserver']);
