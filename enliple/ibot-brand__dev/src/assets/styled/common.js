import styled, {createGlobalStyle, css} from 'styled-components'

import styledDefault from './defaults'

const StyledCommon = createGlobalStyle`
  ${styledDefault};
  main {
    display: block;
  }
  ol,
  ul,
  dl {
    list-style: none;
  }
  hr {
    width: 100%;
    height: 1px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #000000;
  }
  em {
    font-style: normal;
  }
  mark {
    background-color: transparent;
    font-style: normal;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    max-width: 100%;
    border: none;
    vertical-align: top;
  }
  object {
    width: 100%;
    vertical-align: top;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  caption {
    font: 0/0 a;
  }
  legend{
    font:0/0 a;
  }

`

export default StyledCommon
