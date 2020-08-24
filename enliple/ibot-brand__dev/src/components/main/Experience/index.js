import React from 'react'
import styled, {keyframes, css} from 'styled-components'
import {MdChangeHistory} from 'react-icons/md'

import rem from '../../../assets/styled/rem'
import {BtnFlat} from '../../../assets/styled/buttons'

import ImgPhone from '../../../assets/images/experience/phone.png'
import ImgScreen01 from '../../../assets/images/experience/phone_screen01.png'
import ImgScreen01_shadow from '../../../assets/images/experience/phone_screen01_shadow.png'
import ImgScreen02 from '../../../assets/images/experience/phone_screen02.png'
import ImgScreen02_shadow from '../../../assets/images/experience/phone_screen02_shadow.png'

const mathRandom = function (min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNum
}

const Wrap = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
  min-height: inherit;
  overflow: hidden;
  @media ${props => props.theme.media_md} {
    display: block;
  }
`

const Contents = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  z-index: 1;
  @media ${props => props.theme.media_md} {
    padding: 120px 15px 0;
    transform: translatZ(1px);
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
const Btns = styled.div`
  margin-top: 35px;
  @media ${props => props.theme.media_md} {
    margin-top: 25px;
  }
  @media ${props => props.theme.media_rg} {
    margin-top: 20px;
  }
`
const Button = styled.a`
  ${BtnFlat('#111111', '#ffffff')}
`

const Visual = styled.div`
  position: absolute;
  right: 120px;
  bottom: 0;
  @media ${props => props.theme.media_lg} {
    right: 0;
  }
  @media ${props => props.theme.media_md} {
    right: -220px;
    transform: scale(0.8);
    transform-origin: 50% 100%;
  }
  @media ${props => props.theme.media_rg} {
    right: -220px;
    transform: scale(0.7);
    transform-origin: 50% 100%;
  }
`

const screen01Keyframes = keyframes`
  0%{
    transform: translateX(155px) translateY(-25px) scale(1,1);
  }
  50%{
    transform: translateX(0px) translateY(0px) scale(0.9,0.9);
  }
  100%{
    transform: translateX(0px) translateY(0px) scale(0.9,0.9);
  }
`
const screen02Keyframes = keyframes`
  0%{
    transform: translateX(309px) translateY(-50px) scale(1,1);
  }
  50%{
    transform: translateX(155px) translateY(-25px) scale(0.9,0.9);
  }
  55%{
    transform: translateX(155px) translateY(-25px) scale(0.9,0.9);
  }
  100%{
    transform: translateX(0px) translateY(0px) scale(0.8,0.8);
  }
`

const Phone = styled.div`
  position: relative;
  display: block;
  width: 660px;
  height: 720px;
  background-image: url(${ImgPhone});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`
const Screen = styled.div`
  position: absolute;
  right: 189px;
  top: 88px;
  width: 620px;
  height: 580px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: inherit;
    height: inherit;
    background-position: inherit;
    background-repeat: inherit;
    background-size: inherit;
  }
  &::before {
    opacity: 0;
  }
`

const Screen01Animation = css`
  animation: ${screen01Keyframes} 1s linear 0.7s 1 normal;
  animation-fill-mode: forwards;
  &::before {
    opacity: 1;
    transition: opacity 0.3s ease-in 1.5s;
  }
`

const Screen01 = styled(Screen)`
  right: 189px;
  top: 88px;
  transform: translateX(155px) translateY(-25px);
  &::before {
    background-image: url(${ImgScreen01_shadow});
  }
  &::after {
    background-image: url(${ImgScreen01});
  }
  ${props => (props.observeExperience ? Screen01Animation : null)}
`
const Screen02Animation = css`
  animation: ${screen02Keyframes} 1s linear 0.7s 1 normal;
  animation-fill-mode: forwards;
  &::before {
    opacity: 1;
    transition: opacity 0.3s ease-in 1.5s;
  }
`
const Screen02 = styled(Screen)`
right: 342px;
top: 114px;
  transform: translateX(309px) translateY(-50px);

  &::before {
    background-image: url(${ImgScreen02_shadow});
  }
  &::after {
    background-image: url(${ImgScreen02});
  }
  //${props => (props.observeExperience ? Screen02Animation : null)}
`

function randomAnimation() {
  let styles = ''
  let keyframes = ''
  for (let i = 0; i < 13; i++) {
    keyframes += `
      @keyframes move${i} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(100vw);
        }
      }
    `
    styles += `
       &:nth-child(${i}) {
        top:${mathRandom(0, 100)}%;
        animation:move${i} ${mathRandom(50, 20)}s linear ${mathRandom(0, 3)}s infinite normal;
       }
     `
  }
  return css`
    ${keyframes}
    ${styles}
  `
}

const ObjBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`
const ObjTriangle = styled(MdChangeHistory)`
  position: absolute;
  color: rgba(0, 0, 0, 0.1);
  font-size: ${rem('80px')};
  ${randomAnimation()};
`
const ObjBar = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 60px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  ${randomAnimation()};
`

const ObjTriangles = []
for (var i = 0; i < 6; i++) {
  ObjTriangles.push(<ObjTriangle key={i} />)
}
const ObjBars = []
for (var i = 0; i < 6; i++) {
  ObjBars.push(<ObjBar key={i} />)
}

const Experience = props => {
  //observeexperience
  return (
    <>
      <Wrap>
        <ObjBox>
          {ObjTriangles}
          {ObjBars}
        </ObjBox>
        <Contents>
          <Title>365일 24시간! </Title>
          <TitleSub>All in one 인공지능 챗봇</TitleSub>
          <Description>
            상품문의, 방문예약 등 고객의 어떤 요구사항도
            <br />
            아이봇으로 간편하게 처리 할 수 있어요!
            <br />
            게다가 이런 챗봇이 <strong>무료</strong>!
          </Description>
          <Btns>
            <Button href="https://www.istore.camp/file/downloadfile.ajax?path=iBot-UsageDoc.pdf&name=iBot-UsageDoc.pdf" target="_blank" title="새창">
              사용자 가이드 보기
            </Button>
          </Btns>
        </Contents>
        <Visual>
          <Phone>
            <Screen01 observeExperience={props.observeexperience} />
            <Screen02 observeExperience={props.observeexperience} />
          </Phone>
        </Visual>
      </Wrap>
    </>
  )
}

export default Experience
