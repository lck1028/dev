import React from 'react'
import styled, {keyframes} from 'styled-components'
import {isMobile} from 'react-device-detect'

import {Bridge} from '../../../utils/bridgeLink'
import rem from '../../../assets/styled/rem'
import Products_styled from './Products_styled'

import ImgIskin01 from '../../../assets/images/products/iskin01.jpg'
import ImgIskin02 from '../../../assets/images/products/iskin02.jpg'
import ImgIskin03 from '../../../assets/images/products/iskin03.jpg'
import ImgIskin04 from '../../../assets/images/products/iskin04.jpg'
import ImgIskin05 from '../../../assets/images/products/iskin05.jpg'
import ImgIskin06 from '../../../assets/images/products/iskin06.jpg'

const Wrap = styled(Products_styled.Wrap)``

const Contents = styled(Products_styled.Contents)`
  position: relative;
  z-index: 10;
`
const Title = styled(Products_styled.Title)``
const TitleSub = styled(Products_styled.TitleSub)``
const Description = styled(Products_styled.Description)``
const HashList = styled(Products_styled.HashList)``
const HashItem = styled(Products_styled.HashItem)``
const Btns = styled(Products_styled.Btns)``
const Btn = styled(Products_styled.Btn)``

const Visualframes = keyframes`
  0%{pointer-events: none;}
  99%{pointer-events: none;}
  100%{pointer-events: auto;}
`

const Visual = styled(Products_styled.Visual)`
  top: auto;
  bottom: 100px;
  transform-style: preserve-3d;
  perspective: 1600px;
  pointer-events: none;
  .swiper-slide-active & {
    animation: ${Visualframes} 2s linear 0s;
    animation-fill-mode: forwards;
  }
  @media ${props => props.theme.media_md} {
    left: -150px;
    bottom: auto;
    top: ${isMobile ? '100px' : '160px'};
    height: auto;
    ${isMobile ? 'transform:scale(0.7)' : null}
  }
  @media ${props => props.theme.media_rg} {
    left: -150px;
    bottom: auto;
    top: ${isMobile ? '80px' : '120px'};
    height: auto;
  }
`

const item01Keyframes = keyframes`
0%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
20%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
40%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
60%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
80%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
100%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
`
const item02Keyframes = keyframes`
0%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
20%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
40%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
60%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
80%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
100%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
`

const item03Keyframes = keyframes`
0%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
20%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
40%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(480px, 0px, 0px) scale(0.7, 0.7);
}
60%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(480px, 0px, 0px) scale(0.7, 0.7);
}
80%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(480px, 0px, 0px) scale(0.7, 0.7);
}
100%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(480px, 0px, 0px) scale(0.7, 0.7);
}
`

const item04Keyframes = keyframes`
0%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
20%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
40%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(480px, 0px, 0px) scale(0.7, 0.7);
}
60%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(720px, 0px, 0px) scale(0.7, 0.7);
}
80%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(720px, 0px, 0px) scale(0.7, 0.7);
}
100%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(720px, 0px, 0px) scale(0.7, 0.7);
}
`

const item05Keyframes = keyframes`
0%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
}
20%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(240px, 0px, 0px) scale(0.7, 0.7);
}
40%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(480px, 0px, 0px) scale(0.7, 0.7);
}
60%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(720px, 0px, 0px) scale(0.7, 0.7);
}
80%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(960px, 0px, 0px) scale(0.7, 0.7);
}
100%{
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(960px, 0px, 0px) scale(0.7, 0.7);
}
`
const VisualItem = styled.div`
  position: absolute;
  top: 50%;
  left: 200px;
  min-width: 314px;
  width: 314px;
  height: 560px;
  margin-top: -157px;
  border-radius: 10px;
  transform-origin: 50% 100%;
  &::before {
    content: '';
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
const VisualItem01 = styled(VisualItem)`
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
  z-index: 5;
  &::before {
    background-image: url(${ImgIskin01});
    box-shadow: -5px 5px 0 0 #b69d5d, -20px 20px 30px 0 rgba(0, 0, 0, 0.2);

    transform: translateY(0px);
  }

  .swiper-slide-active & {
    animation: ${item01Keyframes} 0.5s linear 0.5s 1;
    animation-fill-mode: forwards;
    &::before {
      transform: translateY(-60px);
      transition: transform 0.5s linear 1.5s;
    }
    &:hover {
      &::before {
        box-shadow: -5px 5px 0 0 #b69d5d, -10px 10px 40px 0 rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.3s ease-out 0s;
      }
    }
  }
`
const VisualItem02 = styled(VisualItem)`
  z-index: 4;
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
  &::before {
    background-image: url(${ImgIskin02});
    box-shadow: -5px 5px 0 0 #0d0d0d, -20px 20px 30px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }
  .swiper-slide-active & {
    animation: ${item02Keyframes} 1s linear 0.5s 1;
    animation-fill-mode: forwards;
    &::before {
      transform: translateY(60px);
      transition: transform 0.5s linear 1.5s;
    }
    &:hover {
      &::before {
        box-shadow: -5px 5px 0 0 #0d0d0d, -10px 10px 40px 0 rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.3s ease-out 0s;
      }
    }
  }
`
const VisualItem03 = styled(VisualItem)`
  z-index: 3;
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
  &::before {
    background-image: url(${ImgIskin03});
    box-shadow: -5px 5px 0 0 #1dbc95, -20px 20px 30px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }
  .swiper-slide-active & {
    animation: ${item03Keyframes} 1s linear 0.5s 1;
    animation-fill-mode: forwards;
    &::before {
      transform: translateY(-60px);
      transition: transform 0.5s linear 1.5s;
    }
    &:hover {
      &::before {
        box-shadow: -5px 5px 0 0 #1dbc95, -10px 10px 40px 0 rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.3s ease-out 0s;
      }
    }
  }
`
const VisualItem04 = styled(VisualItem)`
  z-index: 2;
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
  &::before {
    background-image: url(${ImgIskin04});
    box-shadow: -5px 5px 0 0 #0a224f, -20px 20px 30px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }
  .swiper-slide-active & {
    animation: ${item04Keyframes} 1s linear 0.5s 1;
    animation-fill-mode: forwards;
    &::before {
      transform: translateY(60px);
      transition: transform 0.5s linear 1.5s;
    }
    &:hover {
      &::before {
        box-shadow: -5px 5px 0 0 #0a224f, -10px 10px 40px 0 rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.3s ease-out 0s;
      }
    }
  }
`
const VisualItem05 = styled(VisualItem)`
  z-index: 1;
  transform: rotateX(35deg) rotateY(15deg) rotateZ(-35deg) translate3d(0px, 0px, 0px) scale(0.7, 0.7);
  &::before {
    background-image: url(${ImgIskin05});
    box-shadow: -5px 5px 0 0 #e590ad, -20px 20px 30px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }
  .swiper-slide-active & {
    animation: ${item05Keyframes} 1s linear 0.5s 1;
    animation-fill-mode: forwards;
    &::before {
      transform: translateY(-60px);
      transition: transform 0.5s linear 1.5s;
    }
    &:hover {
      &::before {
        box-shadow: -5px 5px 0 0 #e590ad, -10px 10px 40px 0 rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.3s ease-out 0s;
      }
    }
  }
`
const VisualItem06 = styled(VisualItem)`
  left: 300px;
  bottom: 100px;
  z-index: 10;
  transform: rotateX(10deg) rotateY(26deg) rotateZ(-15deg) translate3d(0px, 0px, 1px) scale(0.75, 0.75);
  &::before {
    background-image: url(${ImgIskin06});
    box-shadow: -2px 5px 0 3px #442c12;
    transform: translateY(800px);
  }
  @media ${props => props.theme.media_md} {
    left: 60%;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
    transform-origin: 0% 100%;
    transform: rotateX(27deg) rotateY(10deg) rotateZ(-20deg) translate3d(0px, 0px, 0px);
    filter: blur(10px);
    opacity: 0;
  }
  .swiper-slide-active & {
    &:before {
      transform: translateY(0);
      transition: transform 0.3s ease-in 2s;
    }
    &:after {
      opacity: 1;
      transition: opacity 1s ease-in 2.5s;
    }
  }
`

const handleMore = () => {
  window.open(Bridge.store(null, 'theme/'), '_blank', 'noopener,noreferrer')
}

const I_Skin = props => {
  return (
    <>
      <Wrap>
        <Visual>
          <VisualItem01 />
          <VisualItem02 />
          <VisualItem03 />
          <VisualItem04 />
          <VisualItem05 />
          <VisualItem06 />
        </Visual>
        <Contents>
          <Title>i SKIN</Title>
          <TitleSub>스타일리시한 채팅 스킨</TitleSub>
          <Description>
            스타일리시 하면서 나만의 아이덴티티!
            <br />
            채팅봇의 분위기를 손쉽게 체인지
          </Description>
          <HashList>
            <HashItem>#개성있는 채팅 스킨</HashItem>
            <HashItem>#커스텀</HashItem>
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

export default I_Skin
