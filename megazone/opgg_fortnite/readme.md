
### gulp start
````
gulp serve
````
http://localhost:3000

### theme change
/assets/var/01-s-themes.scss

map-get($themeProp , $theme )

ScssVar -  $theme : lirght || dark    //수동입력하면 변경됨(초기값 light)


### SVG > FontAwesome convert
Gulp plugin 으로 convert
```
npm i gulp-iconfont gulp-svgicons2svgfont -D
```
gulp-iconfont - https://www.npmjs.com/package/gulp-iconfont

iconfontCss - https://github.com/backflip/gulp-iconfont-css

gulp-svgicons2svgfont - https://www.npmjs.com/package/gulp-svgicons2svgfont

convert build
$ gulp IconFont


1. /assets/svg/*.svg 를 /assets/fonts/*.확장자(.ttf,eot,woff) 로 convert 하며
'../scss/app/05-c-svg.scss' 에 scss 파일이 함께 생성됨(생성되는 scss 파일 template 경로 './gulp_setting/svgConvertTemplate.scss')
2. class naming 명은 .c-svg--[다운받은SVG파일명]으로 생성
3. 추가 svg 가 있을시 $ gulp IconFont 실행

현재 app.scss 에서 통합 관리 되어 지고 잇으나, 유지 보수 운영에 어려움이 있을경우 IconFont 를 따로 관리 하게끔 수정 요망












