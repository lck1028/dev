import React from 'react'
import styled, {keyframes} from 'styled-components'
import {isMobile} from 'react-device-detect'

import {Bridge} from '../../../utils/bridgeLink'
import rem from '../../../assets/styled/rem'
import Products_styled from './Products_styled'

import ImgIviser_site from '../../../assets/images/products/iviser_site.jpg'
import ImgIviser_sample from '../../../assets/images/products/iviser_item.png'

const Wrap = styled(Products_styled.Wrap)``
const Visual = styled(Products_styled.Visual)``
const Contents = styled(Products_styled.Contents)`
  pointer-events: none;
`
const Title = styled(Products_styled.Title)``
const TitleSub = styled(Products_styled.TitleSub)``
const Description = styled(Products_styled.Description)``
const HashList = styled(Products_styled.HashList)``
const HashItem = styled(Products_styled.HashItem)``
const Btns = styled(Products_styled.Btns)``
const Btn = styled(Products_styled.Btn)`
  pointer-events: auto;
`

const Site = styled.div`
  position: absolute;
  left: 15%;
  top: 50%;
  max-width: 790px;
  width: calc(100% - 130px);
  margin-top: -250px;
  background-image: url(${ImgIviser_site});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 63.29%;
  }
  @media ${props => props.theme.media_xl} {
    left: auto;
    right: 130px;
    //transform: translateX(-50%);
  }
  @media ${props => props.theme.media_md} {
    left: 15px;
    right: 15px;
    top: 120px;
    margin-top: 0;
    width: auto;
  }
`

const here = keyframes`
0%{
	opacity:0.3;
}
100%{
	opacity:0.1;
}
`
const ViserSample = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 325px;
  height: 717px;
  margin: -300px 0 0 -162px;
  background-image: url(${ImgIviser_sample});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transform: translateY(100px);
  pointer-events: none;
  @media ${props => props.theme.media_md} {
    width: 160px;
    height: 353px;
    margin: -180px 0 0 -80px;
  }
`
const MouseArea = styled.button`
  position: absolute;
  right: -20px;
  top: -25px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #6f45bf;
  opacity: 0.3;
  cursor: pointer;
  animation: ${here} 1s linear 0s infinite alternate;
  &:focus ~ ${ViserSample}, &:hover ~ ${ViserSample} {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 0.3s ease-out 0.2s, transform 0.3s ease-out 0s;
  }
`
const GuideText = styled.strong`
  position: absolute;
  right: 85px;
  top: -25px;
  display: block;
  color: #111111;
  font-size: ${rem('26px')};
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.6px;
  @media ${props => props.theme.media_md} {
    right: 0px;
    top: 60px;
    font-size: ${rem('16px')};
  }
`
const Mark = styled.mark`
  display: block;
  font-size: ${rem('18px')};
  font-weight: 400;
  @media ${props => props.theme.media_md} {
    font-size: ${rem('12px')};
  }
`

const handleMore = () => {
  window.open(Bridge.store(null, 'iviser/'), '_blank', 'noopener,noreferrer')
}

const I_Viser = props => {
  return (
    <>
      <Wrap>
        <Visual>
          <Site>
            <MouseArea />
            <GuideText>
              이탈 타이밍 감지
              <br />
              추천상품 노출
              <Mark>{!isMobile ? '(마우스를 올려보세요)' : '(터치를 해보세요)'}</Mark>
            </GuideText>
            <ViserSample />
          </Site>
        </Visual>
        <Contents>
          <Title>i VISER</Title>
          <TitleSub>고객 패턴별 맞춤 정보제공</TitleSub>
          <Description>
            쇼핑의 모든 순간, 고객의 행동 예측하여
            <br />
            필요한 정보를 적시에 맞춤 제공
          </Description>
          <HashList>
            <HashItem>#맞춤 정보 마케팅</HashItem>
            <HashItem>#사업주 매출 상승효과</HashItem>
          </HashList>
          <Btns>
            <Btn title="새창" onClick={handleMore}>
              더 알아보기
            </Btn>
          </Btns>
        </Contents>
      </Wrap>
    </>
  )
}

export default I_Viser
