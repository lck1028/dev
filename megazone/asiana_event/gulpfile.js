'use strict';
const Reset = '\x1b[0m',
	FgBlack = "\x1b[30m",
	FgRed = "\x1b[31m",
	FgGreen = "\x1b[32m",
	FgYellow = "\x1b[33m",
	FgBlue = "\x1b[34m",
	FgMagenta = "\x1b[35m",
	FgCyan = "\x1b[36m",
	FgWhite = "\x1b[37m",
	BgBlack = "\x1b[40m",
	BgRed = "\x1b[41m",
	BgGreen = "\x1b[42m",
	BgYellow = "\x1b[43m",
	BgBlue = "\x1b[44m",
	BgMagenta = "\x1b[45m",
	BgCyan = "\x1b[46m",
	BgWhite = "\x1b[47m";

const gulp = require('gulp'),
	gulpScss = require('gulp-sass'),
	gulpSourcemaps = require('gulp-sourcemaps'),
	rename = require("gulp-rename"),
	fileinclude = require('gulp-file-include'),
	inject = require('gulp-inject-string');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;
const fs = require('file-system');
const fse = require('fs-extra');
const del = require('del');

let scssOptions = {
	outputStyle: "compact",
	indentType: "tab",
	indentWidth: 4,
	sourceComments: false
};

let eventName = '',
	folderBool = false;

let PATH = {
	SRC: './src/'
}


//const scss = require('scss');
//const test11 = require('./task/scss');
//import k1 from "./task/scss.mjs";




// gulp.task('b1', function () {
// 	console.log(k1);
// })

//import { test01, test02 } from './task/scss';
//console.log(test01);

function eventCheck(folderBool) {
	return new Promise((resolve, reject) => {
		eventName = argv.name;
		//console.log(eventName);
		resolve(eventName);
	}).then((result) => {
		var folderPath = PATH.SRC + result;
		//console.log(folderPath);
		fse.pathExists(folderPath, (err, exists) => {
			//console.log('------------'+exists);
			folderBool = exists;
			if (!folderBool) {
				console.log(BgRed);
				console.log('====================');
				console.log('이벤트 폴더명 체크!!');
				console.log('====================');
				console.log(Reset);
				return;
			} else {
			}
		});
		return folderPath;
	})
};

function reload(cb) {
	browserSync.reload({
		stream: true
	});
	cb();
}
function scss() {
	return new Promise((resolve, reject) => {
		resolve(eventCheck());
	}).then((result) => {
		gulp
			.src(result + '/assets/scss/*.scss') //gulp.src('./sass/**/*.scss')
			.pipe(gulpSourcemaps.init())
			.pipe(gulpScss(scssOptions).on('error', function (err) {
				console.log(err.message);
				this.emit('end');
			}))
			.pipe(gulpSourcemaps.write())
			.pipe(gulp.dest(result + '/assets/css'));

	})

}

function scssNoMap() {
	return new Promise((resolve, reject) => {
		resolve(eventCheck());
	}).then((result) => {
		gulp
			.src(result + '/assets/scss/*.scss') //gulp.src('./sass/**/*.scss')
			.pipe(gulpScss(scssOptions).on('error', function (err) {
				console.log(err.message);
				this.emit('end');
			}))
			.pipe(gulp.dest(result + '/assets/css'));

	})

}
function server(cb) {
	return new Promise((resolve, reject) => {
		resolve(eventCheck());
	}).then((result) => {
		console.log('=================');
		console.log(result);

		browserSync.init({
			server: {
				baseDir: result
			}
		});

	})
	cb();

}
function watch(cb) {
	var path = PATH.SRC + argv.name;
	gulp.watch(
		path + '/assets/html/*.html',
		gulp.series(serve)
	).on('change', browserSync.reload);
	gulp.watch(
		path + '/assets/scss/*.scss',
		gulp.series('scss', serve)
	).on('change', browserSync.reload)
	gulp.watch(
		path + '/assets/js/*.js',
		gulp.series(serve)
	)
	cb();

};



function serve(cb) {
	var path = PATH.SRC + argv.name;
	//console.log('패스'+path);
	fs.readdir(path + '/assets/html', { withFileTypes: false }, (err, files) => {
		//console.log('파일'+files)
		function sourceData() {
			// source 추출
			var data = {
				file: files[i],
				source: fs.readFileSync(path + '/assets/html/' + files[i], 'utf-8')
			}
			return data;
		}
		for (var i = 0; i < files.length; i++) {
			new Promise((resolve, reject) => {
				resolve(sourceData());
			}).then((result) => {
				function sourceGenerated(includeName) {
					gulp.src(includeName)
						.pipe(inject.after('<!-- source-start -->', '\n' + result.source))
						.pipe(rename(result.file))
						.pipe(gulp.dest(path + '/assets/'));
				}
				if (result.file.indexOf('pc') != -1) {
					//pc 파일
					sourceGenerated(path + '/templates/html/pc.html');
				} else if (result.file.indexOf('mo') != -1) {
					//mo 파일
					sourceGenerated(path + '/templates/html/mo.html');
				} else {
					console.log(BgRed);
					console.log('====================');
					console.log('파일명똑바로!!');
					console.log('====================');
					console.log(Reset);
				}
				//return result;
			})
		}
	});
	cb();
}

function dist() {
	return new Promise((resolve, reject) => {
		resolve(eventCheck());
	})
		.then((result) => {
			var path = result;
			console.log('====');
			console.log(result);
			console.log('====');
			setTimeout(() => {
				gulp.src(path + '/assets/html/*.html')
					.pipe(fileinclude({
						'prefix': '@@',
						'basepath': path + '/'
					}))
					.pipe(gulp.dest(path + '/dist/'))
			}, 500);

		}).catch((err) => {
			console.log(err);
		})
}


function locale(cb) {
	return new Promise((resolve, reject) => {
		resolve(eventCheck());
	})
	.then((result) => {
		var path = result;
		console.log(path);
		setTimeout(() => {
			gulp.src(path + '/locale/*.html')
				.pipe(fileinclude({
					'prefix': '##',
					'basepath': path + '/'
				}))
				.pipe(gulp.dest(path + '/locale/build/'))
				.pipe(gulp.dest(path + '/assets/html/'))
		}, 500);
		return path;


	})
	.then((result) => {
		var path = result;
		setTimeout(() => {
			gulp.src(path + '/locale/build/*.html')
				.pipe(fileinclude({
					'prefix': '@@',
					'basepath': path + '/'
				}))
				.pipe(gulp.dest(path + '/dist/'))
		}, 500);
		console.log('dist완료');
	})
	.catch((err) => {
		console.log(err);
	})

}


function build(cd) {
	eventCheck();
	var path = PATH.SRC + argv.name;

	gulp.src(path + '/assets/html/*.html')
		.pipe(fileinclude({
			'prefix': '@@',
			'basepath': path + '/'
		}))
		.pipe(gulp.dest(path + '/dist/'))
		.on('end', function () {
			fs.readdir(path + '/dist', { withFileTypes: false }, (err, files) => {
				function sourceData() {
					// source 추출
					var data = {
						file: files[i],
						source: fs.readFileSync(path + '/dist/' + files[i], 'utf-8')
					}
					return data;
				}
				for (var i = 0; i < files.length; i++) {
					new Promise((resolve, reject) => {
						resolve(sourceData());
					}).then((result) => {
						function sourceGenerated(includeName) {
							gulp.src(includeName)
								.pipe(inject.after('<!-- source-start -->', '\n' + result.source))
								.pipe(rename(result.file))
								.pipe(gulp.dest(path + '/build/_generated'));
						}
						if (result.file.indexOf('pc') != -1) {
							//pc 파일
							sourceGenerated('./include/pc_index.html');
						} else if (result.file.indexOf('mo') != -1) {
							//mo 파일
							sourceGenerated('./include/mo_index.html');
						} else {
							console.log(BgRed);
							console.log('====================');
							console.log('파일명똑바로!!');
							console.log('====================');
							console.log(Reset);
						}
						//return result;
					})
				}
			})
		})
		.on('end', function () {
			return gulp.src(path + '/build/_generated/*.html')
				.pipe(fileinclude({
					'prefix': '@@',
					'basepath': './include/'
				}))
				.pipe(gulp.dest(path + '/build/'))
		});

	cd();
}


gulp.task('scss', gulp.series(scss));
gulp.task('scssNoMap', gulp.series(scssNoMap));
gulp.task('watch', gulp.series(watch));
gulp.task('browserSync', server);
gulp.task('dist', gulp.series('scssNoMap', gulp.parallel(dist)));
gulp.task('build', gulp.series('scssNoMap', gulp.parallel(build)));
gulp.task('jsonbuild', gulp.series('scssNoMap', gulp.parallel(locale)));
gulp.task('serve', gulp.series('watch',gulp.parallel('browserSync') ));
//gulp.task('serve', gulp.series(serve));





//gulp serve --name 0122_test

