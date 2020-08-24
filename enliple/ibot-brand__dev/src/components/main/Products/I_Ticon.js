import React from 'react'
import styled, {keyframes} from 'styled-components'

import {Bridge} from '../../../utils/bridgeLink'
import rem from '../../../assets/styled/rem'
import Products_styled from './Products_styled'

import ImgIticon_phone from '../../../assets/images/products/iticon_phone.png'
import ImgIticon_con from '../../../assets/images/products/iticon_con.png'
import ImgIticon_handle from '../../../assets/images/products/iticon_handle.png'
import ImgIticon_text from '../../../assets/images/products/iticon_text.png'

const Wrap = styled(Products_styled.Wrap)``
const Visual = styled(Products_styled.Visual)``
const Contents = styled(Products_styled.Contents)`
  z-index: 10;
`
const Title = styled(Products_styled.Title)``
const TitleSub = styled(Products_styled.TitleSub)``
const Description = styled(Products_styled.Description)``
const HashList = styled(Products_styled.HashList)``
const HashItem = styled(Products_styled.HashItem)``
const Btns = styled(Products_styled.Btns)``
const Btn = styled(Products_styled.Btn)``

const Box = styled.div`
  position: absolute;
  left: 15%;
  bottom: 0px;
  max-width: 700px;
  width: 100%;
  height: 500px;
  transform-style: preserve-3d;
  @media ${props => props.theme.media_md} {
    left: auto;
    right: 5%;
    bottom: auto;
    top: 210px;
    width: 70%;
    height: auto;
  }
  @media ${props => props.theme.media_md} {
    top: 180px;
  }
`
const Phone = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${ImgIticon_phone});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  transform: translateZ(1px);
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 71.42%;
  }
`
const Iticon = styled.div`
  position: absolute;
  left: -147px;
  top: -20px;
  width: 177px;
  background-image: url(${ImgIticon_con});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateX(200px);
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 214.68%;
  }
  @media ${props => props.theme.media_md} {
    left: -16%;
    top: 20px;
    width: 20%;
    transform: translateX(150px);
  }
  .swiper-slide-active & {
    transform: translateX(0);
    transition: transform 0.5s ease-in-out 0.5s;
  }
`
const Hand = styled.div`
  position: absolute;
  left: 7px;
  top: 94px;
  display: block;
  width: 47px;
  background-image: url(${ImgIticon_handle});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  opacity: 0;
  transform-origin: 14px 50%;
  transform: rotateY(-90deg) translateZ(0px);
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 123.4%;
  }
  @media ${props => props.theme.media_md} {
    top: 30%;
    left: 7px;
    width: 5%;
  }
  @media (max-width: 380px) {
    top: 30%;
    left: 3px;
  }
  .swiper-slide-active & {
    opacity: 1;
    transform: rotateY(0deg) translateZ(15px);
    transition: transform 0.2s ease-in-out 1s, opacity 0.2s ease-in 1s;
  }
`

const Shake = keyframes`
0%{
	transform:rotate(-0.5deg)
}
100%{
	transform:rotate(0.5deg)
}
`
const GuideText = styled.div`
  position: absolute;
  top: -260px;
  left: -115px;
  width: 393px;
  height: 268px;
  background-image: url(${ImgIticon_text});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transform-origin: 40% 100%;
  transform: scale(0);
  @media ${props => props.theme.media_md} {
    top: -150px;
    left: -80px;
    width: 240px;
    height: 164px;
  }
  @media ${props => props.theme.media_rg} {
    top: -120px;
    left: -70px;
    width: 196px;
    height: 134px;
  }
  .swiper-slide-active & {
    opacity: 1;
    transform: scale(1);
    transition: transform 0.3s ease-in-out 1.2s, opacity 0.2s ease-in 1.2s;
    animation: ${Shake} 3s linear 1.8s infinite alternate;
  }
`

const handleMore = () => {
  window.open(Bridge.store(null, 'iticon/'), '_blank', 'noopener,noreferrer')
}

const I_Ticon = props => {
  return (
    <>
      <Wrap>
        <Visual>
          <Box>
            <Phone />
            <Iticon />
            <Hand />
            <GuideText />
          </Box>
        </Visual>
        <Contents>
          <Title>i TICON</Title>
          <TitleSub>감정까지 시각적으로 전달</TitleSub>
          <Description>
            챗봇계에서 최초 시행 이모티콘 서비스!
            <br />
            때론 말 한마디보다 진하게 전해요
          </Description>
          <HashList>
            <HashItem>#센스있는 전달력</HashItem>
            <HashItem>#자연스러운 커뮤니케이션</HashItem>
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

export default I_Ticon
