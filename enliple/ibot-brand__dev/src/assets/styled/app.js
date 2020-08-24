import {isMobile, isIE, isIOS} from 'react-device-detect'
import styled, {createGlobalStyle, css} from 'styled-components'
import fonts from './fonts'
import styledCommon from './common'
import rem from './rem'

import {NotoSans} from './fonts'

const fontStack = 'font-family:"NanumSquare","Noto Sans KR", "맑은 고딕", "Malgun Gothic", "돋움", "Dotum", sans-serif;'

const StyledApp = createGlobalStyle`
  ${styledCommon}
  //font 정의
  html{
    font-size:${props => props.theme.rootEm};

  }
  html ,body{
    ${fontStack}
  }
  #root{
    height:100%;
  }
  body{
  }





  a{

  }

  input,
  textarea,
  select,
  button {
    ${NotoSans}
  }

  // body{
  //   &::after{
  //     position:fixed;
  //     display:block;
  //     left:0;
  //     bottom:0;
  //     padding:2px;
  //     color:#ffffff;
  //     font-size:${rem('30px')};
  //     z-index:100;
  //     opacity:0.5;
  //     pointer-events:none;
  //     @media ${props => props.theme.media_xxxl}{
  //       content:'1920px';
  //       background-color:chartreuse;
  //     };
  //     @media ${props => props.theme.media_xxl}{
  //       content:'1440px';
  //       background-color:red;
  //     };
  //     @media ${props => props.theme.media_xl}{
  //       content:'1080px';
  //       background-color:blue;
  //     };
  //     @media ${props => props.theme.media_lg}{
  //       content:'960px';
  //       background-color:gray;
  //     };
  //     @media ${props => props.theme.media_md}{
  //       content:'768px';
  //       background-color:magenta;
  //     };
  //     @media ${props => props.theme.media_sm}{
  //       content:'321px';
  //       background-color:lightblue;
  //     };
  //     @media ${props => props.theme.media_xs}{
  //       content:'0';
  //     };
  //   }
  // }

`

export default StyledApp
