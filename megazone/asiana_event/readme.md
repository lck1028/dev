# ASIANA EVNET Page Dev build Tool


## install
1. node setup
2. git bash setup
3. npm i

***
## package
* node v10.x.x
* npm v6.9.0
* gulp v4.0.0
  * gulp-sass
  * gulp-sourcemaps
  * gulp-file-include
  * gulp-inject
  * gulp-injuct-string
  * gulp-rename
* browser-sync
* file-system
* fs-extra

***
## task

### scss
	scss > css converting

### watch
	browser live loading

### browserSync
	server start (localhost:3000)

### dist
	html + css + javascript = merge to html (/src/EventName/dist/*.html)
	단순 text 수정시 dist 실행시 파일만 dist
	실제 admin에 적용할 파일

### build
	html + css + javascript inject merge
	로컬서버 실행이 읽기 위한 html 파일 머지

## jsonbuild

    1. locale 폴더내 다국어 리소스
    2. pc_index.html, mo_index.html template에 파싱됨
    3. 결과물은 locale 다국어 리로스 명으로 떨어짐
    4. 최종본은 dist 폴더에 생성


### serve
	1. browserSync
	2. watch
	실작업시 사용

***
## GUIDE
1. src folder 내 0000_test 복사 > 붙여넣기 이름변경
   - ex) 0419_bizevent
2. VSCode TERMINAL 실행(<kbd>CTRL</kbd>+<kbd>`</kbd>)
3. <code>gulp serve --neme 폴더명</code> 서버실행
   - ex) <code>gulp serve --neme 0419_bizevent</code>
4. /assets/폴더내 작업
   - html - html 코드 작성
   - scss - scss 코드 작성(css도 무관함)
   - js - js 코드작성
5. admin img 업로드후 img 경로 수정
6. /dist/ 폴더내 html 로 admin 등록
7. <kbd>CTRL</kbd>+<kbd>C</kbd> 서버 종료
- 기타 문구 수정시 <code>gulp dist --name 0419_bizevent</code> 실행 코드 변환만함(서버실행안됨)

***
## notice
* /assets/html 파일명은 pc/mo 로 시작
  * ex) pc_ko.html, mo_ko.html
* 되도록 scss 로 코드 작성
* class 표기법 BEM 로사용 (scss 사용시 유용함)



***
### VERSION
1.0

기타 개선사항 이충기한테 문의

1.1
jsonbuild 추가
locale 폴더에서 관리

***
### license
메가존(주)