import React from 'react'
import styled from 'styled-components'
import {isMobile, isIE, isIOS} from 'react-device-detect'

import rem from '../../../assets/styled/rem'
import {BtnFlat} from '../../../assets/styled/buttons'

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: inherit;
  @media ${props => props.theme.media_md} {
    align-items: flex-end;
  }
`
const Visual = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  //backface-visibility: visible;
`
const Contents = styled.div`
  flex: 0 0 auto;
  position: relative;
  padding-right: 220px;
  color: #111111;
  text-align: right;
  letter-spacing: -0.4px;
  z-index: 100;
  transform: translateZ(1px);
  @media (max-width: 860px) {
    padding-right: 120px;
  }
  @media ${props => props.theme.media_md} {
    padding: ${!isIOS ? '0 20px 50px 0' : '0 20px 80px 0'};
  }
`

const Title = styled.h2`
  font-size: ${rem('80px')};
  font-weight: 800;
  text-shadow: 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1);
  @media ${props => props.theme.media_md} {
    font-size: ${rem('40px')};
  }
  @media ${props => props.theme.media_rg} {
    font-size: ${rem('30px')};
  }
`
const TitleSub = styled.strong`
  display: block;
  margin-top: 20px;
  font-size: ${rem('50px')};
  letter-spacing: -0.6px;
  word-break: keep-all;
  text-shadow: 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1);
  @media ${props => props.theme.media_md} {
    font-size: ${rem('30px')};
  }
  @media ${props => props.theme.media_rg} {
    margin-top: 15px;
    font-size: ${rem('18px')};
  }
`
const Description = styled.p`
  margin-top: 15px;
  font-size: ${rem('36px')};
  font-weight: 300;
  word-break: keep-all;
  line-height: 1.47;
  text-shadow: 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1);
  @media ${props => props.theme.media_md} {
    font-size: ${rem('28px')};
  }
  @media ${props => props.theme.media_rg} {
    font-size: ${rem('16px')};
  }
`
const HashList = styled.div`
  margin-top: 15px;
  @media ${props => props.theme.media_md} {
    margin-top: 10px;
  }
`
const HashItem = styled.span`
  display: inline-block;
  margin-left: 30px;
  color: #999999;
  font-size: ${rem('20px')};
  font-weight: 400;
  @media ${props => props.theme.media_md} {
    color: #111111;
    font-size: ${rem('16px')};
  }
  @media ${props => props.theme.media_rg} {
    font-size: ${rem('12px')};
  }
`
const Btns = styled.div`
  margin-top: 30px;
  @media ${props => props.theme.media_md} {
    margin-top: 20px;
    padding-right: ${isMobile ? '70px' : '110px'};
  }
  @media ${props => props.theme.media_rg} {
    margin-top: 15px;
  }
`
const Btn = styled.button`
  ${BtnFlat('#111111', '#ffffff')}
`

const Products_styled = {Wrap, Visual, Contents, Title, TitleSub, Description, HashList, HashItem, Btns, Btn}

export default Products_styled
