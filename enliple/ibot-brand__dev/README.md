# 아이봇 브랜드 사이트 설정

# react 프로젝트 생성(create-react-app v3.4.1)

> create-react-app ibot-brand

# react 프로젝트 적출(eject)

> cd ibot-brand
> yarn eject

# 라이브러리 최신화

> yarn-check -u

# 패키지 파일에서 ^(버전호환) 제거

- 라이브러리의 업데이트 오류 방지 목적

# 기본 설정 파일 저장(프로젝트 루트)

.editorconfig
.eslintrc
.gitignore
.prettierignore
.prettierrc

# 프로젝트 설정 쉘 파일 저장(프로젝트 루트)

release.sh

# public 경로의 불필요한 파일 제거

logo192.png
logo512.png
manifest.json

# VSCode 환경 설정(settings.json)

- 파일 > 기본 설정 > 설정 메뉴(Ctrl+,)에서 편집기 오른쪽 상단의 설정 열기 버튼 클릭

```
{
  "workbench.editor.enablePreview": false,
  "window.zoomLevel": 0,
  "workbench.startupEditor": "none",
  "javascript.format.enable": false,
  "editor.formatOnSave": true,
  "files.eol": "\n",
  "typescript.reportStyleChecksAsWarnings": false
}
```

# VSCode extensions(Ctrl+Shitf+x)

Debugger for Chrome
EditorConfig for VS Code
ESLint
Korean Language Pack for Visual Studio Code
Prettier - Code formatter

# GIT 개행문자 설정

> git config --global core.eol lf

> git config --global core.autocrlf input

이 명령어를 실행 한 후 소스를 다시 내려 받아야 함

# 프로젝트 실행

> yarn start

# 프로젝트 설정

- 개발설정

> ./release.sh dev

- STAGE 설정

> ./release.sh stg

- 상용(서비스) 설정

> ./release.sh

# 개발용 라이브러리는 devDependencies로 이동

package.json 수정

# 기본 라이브러리 추가

axios
classnames
lodash
react-router-dom
styled-components
node-sass
