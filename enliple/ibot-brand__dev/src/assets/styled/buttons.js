import {css} from 'styled-components'
import rem from './rem'
import {NotoSans} from './fonts'
import {isMobile} from 'react-device-detect'

const BtnFlat = (bg, color) => css`
  ${NotoSans};
  display: inline-block;
  min-width: 210px;
  margin: 0 5px;
  padding: 17px 30px;
  background-color: ${props => (bg ? bg : '#111111')};
  color: ${props => (color ? color : '#ffffff')};
  font-size: ${rem('30px')};
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  @media ${props => props.theme.media_md} {
    min-width: 180px;
    padding: 12px 15px;
    font-size: ${rem('20px')};
  }
  @media ${props => props.theme.media_rg} {
    min-width: 110px;
    padding: 9px 10px;
    font-size: ${rem('14px')};
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${!isMobile
    ? `&:hover {
    background-color: ${props => (color ? color : '#111111')};
    color: ${props => (bg ? bg : '#ffffff')};
    transition: background-color 0.2s ease-out 0s, color 0.2s ease-out 0.1s;
  }`
    : null}
`

export {BtnFlat}
