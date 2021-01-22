// gulp
/*
 * dest - 경로지정
 * series - 직렬
 * parallel - 병렬
 * watch - 지켜본다
 */
import { gulp, dest, series, parallel, src, watch } from "gulp";
import browserSync from "browser-sync";

// gulp plugins
import concat from "gulp-concat"; //file 병합
import scss from "gulp-sass"; //sass converter
import sourcemaps from "gulp-sourcemaps"; // add sourcemaps
import rename from "gulp-rename"; // file name 변경
import uglify from "gulp-uglify"; // js 난독화
import babel from "gulp-babel"; // js babel > converter

const browserSyncOption = {
  port: 4000,
  server: {
    baseDir: "./app/",
  },
  ui: {
    port: 4001,
  },
  ghostMode: {
    clicks: true,
    forms: false,
    scroll: false,
  },
};

const scssOption = {
  outputStyle: "expanded",
  indentType: "tab",
  indentWidth: 1,
  precision: 4,
  sourceComments: true,
};

const server = browserSync.create();

const serverReload = () => {
  server.reload();
};
const serverInit = (cb) => {
  console.log("serverInit");
  server.init(browserSyncOption);
  cb();
};
const serve = (cb) => {
  series(serverInit, watchHtml)();
  cb();
};

const defaultTask = (cb) => {
  console.log(`GULP default`);
  cb();
};

const test = (cb) => {
  console.log(`test`);

  cb();
};

const watchHtml = (cb) => {
  const ignore = [`!./app/assets/**/*.html`];
  watch([`./app/**/*.html`, ...ignore], () => {}).on(
    "change",
    (path, stats) => {
      serverReload();
    }
  );
};

const watchScss = (cb) => {
  watch([`./app/assets/scss/**/*.scss`], () => {}).on(
    "change",
    (path, stats) => {
      serverReload();
    }
  );
};

const convertScss = () => {
  return src(`./app/assets/scss/app.scss`)
    .pipe(sourcemaps.init())
    .pipe(scss.sync(scssOption).on("error", scss.logError))
    .pipe(sourcemaps.write("./maps"))
    .pipe(dest(`./app/assets/css/`));
};

exports.watchHtml = watchHtml;
exports.watchScss = watchScss;
exports.scss = convertScss;
exports.serve = serve;

exports.dist = null;
exports.build = null;

exports.default = defaultTask;
exports.test = test;
