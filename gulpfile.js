var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
	console.log('Hello world');
});

gulp.task('watch', function(){
	browserSync.init({
		server: {
			baseDir: '.'
		},
	})
	gulp.watch('./*.html').on('change', browserSync.reload)
	gulp.watch('./js/*.js').on('change', browserSync.reload)
})
