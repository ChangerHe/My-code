var gulp = require('gulp')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var cleanCss = require('gulp-clean-css')
const del = require('del')
const imageMin = require('gulp-imagemin')
const livereload = require('gulp-livereload')
// gulp.task('default', function() {
// 	console.log('hello gulp');
// })

// gulp.task('doSomething', () => {
// 	console.log('doSomething...')
// })

livereload({start: true})


gulp.task('default', () => {
	// gulp.src('imgs/1.gif')
	// 	.pipe(imageMin())
	// 	.pipe(gulp.dest('imgdist'))



	gulp.src('src/*.js')
		.pipe(uglify())
		// .pipe(rename(function(path) {
		// 	console.log(arguments)
		// 	path.basename += '.min'
		// }))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist1'))
		.pipe(livereload())
})

gulp.task('watch', function() {
	livereload.listen(8090)
	gulp.watch('src/*.js')
})