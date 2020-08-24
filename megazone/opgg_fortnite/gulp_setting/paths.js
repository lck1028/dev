//var gulp = require('gulp');

var paths = {
	src: function () {
		return './src'
	},
	dist: function () {
		return './dist'
	},
	files: function () {
		return {
			js: this.src + '/js/**/*.js',
			scss: this.src + '/scss/**/*.scss'
		}
	}
}
module.exports = paths;