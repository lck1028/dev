var paths = require('./paths');
var gulp = require('gulp')

var builds = {
	css: function () {
		return gulp
			.src(paths.src() + '/assets/css/*.*') //map builds
			.pipe(gulp.dest(paths.dist() + '/assets/css'));
	},
	html: function () {
		return gulp
			.src(paths.src() + '/*.html')
			.pipe(gulp.dest(paths.dist()));
	},
	img: function () {
		return gulp
			.src(paths.src() + '/assets/img/**/*')
			.pipe(gulp.dest(paths.dist() + '/assets/img'));
	}
}
module.exports = builds;