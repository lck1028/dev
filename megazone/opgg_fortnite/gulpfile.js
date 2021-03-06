const SETTINGPATH = "./gulp_setting";

const gulp = require("gulp");
const { series, parallel } = require("gulp");
const gulpConcat = require("gulp-concat");
const gulpScss = require("gulp-sass");
const gulpSourcemaps = require("gulp-sourcemaps");
const gulpUglify = require("gulp-uglify");
const iconfont = require("gulp-iconfont");
const iconfontCss = require("gulp-iconfont-css");
const svgicons2svgfont = require("gulp-svgicons2svgfont");
const fileinclude = require("gulp-file-include");

const browserSync = require("browser-sync").create();
const runTimestamp = Math.round(Date.now() / 1000);

const paths = require(SETTINGPATH + "/paths"),
  dists = require(SETTINGPATH + "/dists"),
  builds = require(SETTINGPATH + "/builds");

var scssOptions = {
  outputStyle: "expanded",
  indentType: "tab",
  indentWidth: 1,
  sourceComments: false,
};
var SRC = "./src",
  DIST = "./dist",
  PATH = {
    js: SRC + "/js/**/*.js",
    scss: SRC + "scss/**/*.scss",
  };

var svgFontName = "svgFontfortnite";

const cb = () => {
  console.log("CAllBACK");
};

function index() {
  return gulp.src("./*.html").pipe(
    browserSync.reload({
      stream: true,
    })
  );
}
gulp.task("index", index);
function scss() {
  return gulp
    .src(SRC + "/assets/scss/*.scss") //gulp.src('./scss/**/*.scss')
    .pipe(gulpSourcemaps.init())
    .pipe(
      gulpScss(scssOptions).on("error", function (err) {
        console.log(err.message);
        this.emit("end");
      })
    )
    .pipe(gulpSourcemaps.write("./"))
    .pipe(gulp.dest(SRC + "/assets/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}
gulp.task("scss", scss);

gulp.task(
  "browserSync",
  // async () => {
  //   return gulp.parallel(index, scss, fileinclude, html);
  // },
  async () => {
    browserSync.init({
      server: {
        baseDir: "./",
      },
    });
    gulp.parallel(index, scss, fileinclude, html);
  }
);

function Iconfont() {
  return gulp
    .src([SRC + "/assets/svg/*.svg"]) // download svg 경로
    .pipe(
      iconfontCss({
        // sgv scss 파일생성
        fontName: svgFontName,
        path: "./gulp_setting/svgConvertTemplate.scss", //scss 생성용 template 파일
        targetPath: "../scss/app/05-c-svg.scss", //scss 파일 떨궈질곳
        fontPath: "../fonts/", //font 경로(서버 업로드시 변경)
        cssClass: "c-svg-", //css Class prefix
      })
    )
    .pipe(
      iconfont({
        // font 파일생성
        fontName: svgFontName, // font-name
        formats: ["ttf", "eot", "woff"], //format
        timestamp: runTimestamp,
        normalize: true, // font-size 통일
      })
    )
    .on("glyphs", function (glyphs, options) {
      // CSS templating, e.g.
      console.log(glyphs, options);
    })
    .pipe(gulp.dest(SRC + "/assets/fonts"));
}
//gulp.task("Iconfont", Iconfont);

function opggIconfont() {
  return gulp
    .src([SRC + "/opgg/svg/*.svg"]) // download svg 경로
    .pipe(
      iconfontCss({
        // sgv scss 파일생성
        fontName: "svgFontOpgg",
        path: "./gulp_setting/svgConvertTemplate.scss", //scss 생성용 template 파일
        targetPath: "../../assets/scss/opgg/99-opgg-svg.scss", //scss 파일 떨궈질곳
        fontPath: "../../opgg/fonts/", //font 경로(서버 업로드시 변경)
        cssClass: "opgg-", //css Class prefix
      })
    )
    .pipe(
      iconfont({
        // font 파일생성
        fontName: "svgFontOpgg", // font-name
        formats: ["ttf", "eot", "woff"], //format
        timestamp: runTimestamp,
        normalize: true, // font-size 통일
      })
    )
    .on("glyphs", function (glyphs, options) {
      // CSS templating, e.g.
      console.log(glyphs, options);
    })
    .pipe(gulp.dest(SRC + "/opgg/fonts"));
}
//gulp.task("opggIconfont", opggIconfont);

function fileInclude() {
  return gulp
    .src(["./page/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./app"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}
gulp.task("fileinclude", fileInclude);

function html() {
  return gulp.src("./app/*.html").pipe(
    browserSync.reload({
      stream: true,
    })
  );
}
gulp.task("html", html);

async function dist() {
  dists.css();
  dists.img();
  dists.html();
}

function watch() {
  gulp.watch("./*.html", gulp.series(["index"]));
  gulp.watch(paths.src() + "/assets/scss/**/*.scss", gulp.series(["scss"]));
  gulp.watch("./page/*.html", gulp.series(["fileinclude"]));
  gulp.watch("./include/*.html", gulp.series(["html", "fileinclude"]));
  gulp.watch("./app/*.html", gulp.series(["html", "fileinclude"]));
}
async function build() {
  console.log("빌드는 안함");
}
gulp.task("watch", watch);
gulp.task("serve", gulp.parallel(["browserSync", "watch"]));
gulp.task("dist", dist);
gulp.task("build", build);

function test(cb) {
  // body omitted
  console.log(111);
  cb();
}

gulp.task(test);
