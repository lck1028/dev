import React from 'react'
import styled, {css} from 'styled-components'

import {Bridge} from '../../../utils/bridgeLink'
import rem from '../../../assets/styled/rem'
import Products_styled from './Products_styled'

import ImgIvoice_wave from '../../../assets/images/products/ivoice_wave.png'
import ImgIvoice01 from '../../../assets/images/products/ivoice01.png'
import ImgIvoice02 from '../../../assets/images/products/ivoice02.png'
import ImgIvoice03 from '../../../assets/images/products/ivoice03.png'
import ImgIvoice04 from '../../../assets/images/products/ivoice04.png'

const mathRandom = function (min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNum
}

const Wrap = styled(Products_styled.Wrap)``
const Visual = styled(Products_styled.Visual)``
const Contents = styled(Products_styled.Contents)``
const Title = styled(Products_styled.Title)``
const TitleSub = styled(Products_styled.TitleSub)``
const Description = styled(Products_styled.Description)``
const HashList = styled(Products_styled.HashList)``
const HashItem = styled(Products_styled.HashItem)``
const Btns = styled(Products_styled.Btns)``
const Btn = styled(Products_styled.Btn)``

const Wave = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  width: 100%;
  max-width: 970px;
  margin-top: -100px;
  background-image: url(${ImgIvoice_wave});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 41.23%;
  }
  @media ${props => props.theme.media_md} {
    left: 0;
    top: 160px;
    margin-top: 0;
  }
  @media ${props => props.theme.media_rg} {
    top: 120px;
  }
`
const Voice = styled.div`
  position: absolute;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`
const Voice01 = styled(Voice)`
  left: 110px;
  top: -60px;
  width: 244px;
  height: 78px;
  background-image: url(${ImgIvoice01});
  @media ${props => props.theme.media_md} {
    display: none;
  }
`
const Voice02 = styled(Voice)`
  right: 20px;
  top: -130px;
  width: 378px;
  height: 102px;
  background-image: url(${ImgIvoice02});
  @media ${props => props.theme.media_md} {
    right: 50px;
    top: -80px;
  }
  @media ${props => props.theme.media_rg} {
    top: -60px;
    width: 260px;
    height: 70px;
  }
`
const Voice03 = styled(Voice)`
  left: 230px;
  bottom: -110px;
  width: 461px;
  height: 146px;
  background-image: url(${ImgIvoice03});
  @media ${props => props.theme.media_md} {
    left: 50px;
    bottom: -120px;
  }
  @media ${props => props.theme.media_rg} {
    width: 270px;
    height: 86px;
  }
`
const Voice04 = styled(Voice)`
  right: -30px;
  bottom: -10px;
  width: 318px;
  height: 90px;
  background-image: url(${ImgIvoice04});
  @media ${props => props.theme.media_md} {
    right: 30px;
    bottom: 0px;
  }
  @media ${props => props.theme.media_rg} {
    width: 180px;
    height: 51px;
  }
`

const Visualizer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  line-height: 0;
`
const VisualizerItem = styled.span`
  display: inline-block;
  margin: 0 1px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  vertical-align: top;
  transform: scale(1, 1);
  ${randomAnimation()};
`

function randomAnimation() {
  let styles = ''
  let keyframes = ''
  for (let i = 0; i < 86; i++) {
    keyframes += `
      @keyframes wave${i} {
        0% {
          transform: scale(1, 1);
        }
        100% {
          transform: scale(1, ${mathRandom(30, 1)});
        }
      }
    `
    styles += `
       &:nth-child(${i}) {
        //transform: scale(1, ${Math.floor(Math.random() * (30 - 1 + 1)) + 1});
        animation:wave${i} ${mathRandom(5, 0.5)}s linear ${mathRandom(3, 0.1)}s infinite alternate;
       }
     `
  }
  return css`
    ${keyframes}
    ${styles}
  `
}

const Thing = styled.div``

const VisualizerItems = []
for (var i = 0; i < 86; i++) {
  VisualizerItems.push(<VisualizerItem key={i} />)
}

const handleMore = () => {
  window.open(Bridge.store(null, 'ivoice/'), '_blank', 'noopener,noreferrer')
}

const I_Voice = props => {
  return (
    <>
      <Wrap>
        <Visual>
          <Wave>
            <Visualizer>{VisualizerItems}</Visualizer>
            <Voice01 />
            <Voice02 />
            <Voice03 />
            <Voice04 />
          </Wave>
        </Visual>
        <Contents>
          <Title>i VOICE</Title>
          <TitleSub>익숙하고 친근한 목소리로 음성지원</TitleSub>
          <Description>
            채팅창 내 고객의 질문에 음성으로 답변
            <br />
            남녀노소 다양한 목소리로 TTS기술 도입
          </Description>
          <HashList>
            <HashItem>#TTS 기술 도입</HashItem>
            <HashItem>#다양한 목소리</HashItem>
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

export default I_Voice
