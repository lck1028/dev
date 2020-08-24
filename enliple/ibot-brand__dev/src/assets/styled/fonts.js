import {css} from 'styled-components'
import WebFont from 'webfontloader'

WebFont.load({
  classes: false,
  events: false,
  custom: {
    families: ['NanumSquare:300,400,700,800&display=swap'],
    urls: ['https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css'],
  },
  google: {
    families: ['Noto Sans KR:100,300,400,500,700,900&display=swap', 'Roboto:400,700&display=swap'],
  },
})

const NotoSans = css`
  font-family: 'Noto Sans KR', 'Roboto', '맑은 고딕', 'Malgun Gothic', '돋움', 'Dotum', sans-serif;
`
const Roboto = css`
  font-family: 'Roboto', '맑은 고딕', 'Malgun Gothic', '돋움', 'Dotum', sans-serif;
`
const NanumSquare = css`
  font-family: 'NanumSquare', '맑은 고딕', 'Malgun Gothic', '돋움', 'Dotum', sans-serif;
`
const MalgunGothic = css`
  font-family: '맑은 고딕', 'Malgun Gothic', '돋움', 'Dotum', sans-serif;
`

export {NotoSans, Roboto, NanumSquare, MalgunGothic}
