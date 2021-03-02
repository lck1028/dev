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

const babelOption = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        absoluteRuntime: true,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: true,
        version: "7.0.0-beta.0",
      },
    ],
  ],

  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
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
  //추가필요시 사용함
  series(serverInit, parallel(watchHtml, watchScss))();
};

const defaultTask = (cb) => {
  console.log(`GULP default`);
  cb();
};

const watchHtml = (cb) => {
  const ignore = [`!./app/assets/**/*.html`];
  watch([`./app/**/*.html`, ...ignore], () => {
    cb();
  }).on("change", (path, stats) => {
    console.log("watchHtmlReload");
    serverReload();
  });
};

const watchScss = (cb) => {
  watch([`./app/assets/scss/**/*.scss`], () => {
    cb();
  }).on("change", (path, stats) => {
    console.log("watchScssReload");
    convertScss();
    serverReload();
  });
};

const convertScss = (cb) => {
  return src(`./app/assets/scss/app.scss`)
    .pipe(sourcemaps.init())
    .pipe(scss.sync(scssOption).on("error", scss.logError))
    .pipe(sourcemaps.write("./maps"))
    .pipe(dest(`./app/assets/css/`));
};

const gulpBabel = (cb) => {
  console.log("gulpBabel");
  return (
    src(`./app/assets/js/app.js`)
      //.pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(rename("build.js"))
      //.pipe(sourcemaps.write("."))

      .pipe(dest(`./app/assets/js/`))
  );
};

exports.watchHtml = watchHtml;
exports.watchScss = watchScss;
exports.scss = convertScss;
//exports.serve = serve;
exports.serve = series(serverInit, parallel(watchHtml, watchScss));

exports.dist = null;
exports.build = null;

exports.default = defaultTask;

const test = (cb) => {
  console.log(`test`);

  cb();
};

exports.test = gulpBabel;

exports.test1 = series(watchScss, convertScss);
