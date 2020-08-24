import React from 'react'
import styled, {keyframes} from 'styled-components'
import {isMobile} from 'react-device-detect'

import {Bridge} from '../../../utils/bridgeLink'
import rem from '../../../assets/styled/rem'
import Products_styled from './Products_styled'

import ImgIblock_phone from '../../../assets/images/products/iblock_phone.png'
import ImgIblock01 from '../../../assets/images/products/iblock01.png'
import ImgIblock02 from '../../../assets/images/products/iblock02.png'
import ImgIblock03 from '../../../assets/images/products/iblock03.png'
import ImgIblock04 from '../../../assets/images/products/iblock04.png'

const Wrap = styled(Products_styled.Wrap)`
  overflow: hidden;
`
const Visual = styled(Products_styled.Visual)``
const Contents = styled(Products_styled.Contents)``
const Title = styled(Products_styled.Title)``
const TitleSub = styled(Products_styled.TitleSub)``
const Description = styled(Products_styled.Description)``
const HashList = styled(Products_styled.HashList)``
const HashItem = styled(Products_styled.HashItem)``
const Btns = styled(Products_styled.Btns)``
const Btn = styled(Products_styled.Btn)``

const Phone = styled.div`
  position: absolute;
  bottom: -50px;
  left: 15%;
  width: 544px;
  height: 837px;
  background-image: url(${ImgIblock_phone});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${props => props.theme.media_md} {
    left: 50%;
    top: ${isMobile ? '0px' : '100px'};
    bottom: auto;
    width: 270px;
    height: 417px;
    transform: translateX(-50%) ${isMobile ? ' scale(0.7)' : null};
  }
  @media ${props => props.theme.media_rg} {
    left: 50%;
    top: ${isMobile ? '0px' : '100px'};
    bottom: auto;
    width: 300px;
    height: 463px;
    transform: translateX(-50%) ${isMobile ? ' scale(0.7)' : null};
  }
`
const Block = styled.div`
  position: absolute;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

const blockMoveKeyframes = keyframes`
0%{
	transform: rotate(0) translateY(2%) rotate(0);
}

100%{
	transform: rotate(360deg) translateY(2%) rotate(-360deg);
	}
}
`

const Block01 = styled(Block)`
  left: -240px;
  top: 120px;
  width: 270px;
  height: 264px;
  background-image: url(${ImgIblock01});
  animation: ${blockMoveKeyframes} 10s linear 0s infinite normal;
  @media ${props => props.theme.media_rg} {
    left: -160px;
    top: 50px;
    width: 160px;
    height: 156px;
  }
  @media ${props => props.theme.media_md} {
    left: -120px;
    top: 60px;
    width: 135px;
    height: 132px;
  }
`
const Block02 = styled(Block)`
  right: -80px;
  top: 120px;
  width: 266px;
  height: 281px;
  background-image: url(${ImgIblock02});
  animation: ${blockMoveKeyframes} 15s linear 3s infinite normal;
  @media ${props => props.theme.media_rg} {
    right: -50px;
    top: 60px;
    width: 158px;
    height: 167px;
  }
  @media ${props => props.theme.media_md} {
    right: -40px;
    top: 60px;
    width: 133px;
    height: 140px;
  }
`
const Block03 = styled(Block)`
  left: -110px;
  top: 450px;
  width: 285px;
  height: 279px;
  background-image: url(${ImgIblock03});
  animation: ${blockMoveKeyframes} 14s linear 1s infinite normal;
  @media ${props => props.theme.media_rg} {
    left: -90px;
    top: 190px;
    width: 170px;
    height: 166px;
  }
  @media ${props => props.theme.media_md} {
    left: -55px;
    top: 190px;
    width: 142px;
    height: 140px;
  }
`
const Block04 = styled(Block)`
  right: -220px;
  top: 430px;
  width: 260px;
  height: 276px;
  background-image: url(${ImgIblock04});
  animation: ${blockMoveKeyframes} 8s linear 2s infinite normal;
  @media ${props => props.theme.media_rg} {
    right: -140px;
    top: 170px;
    width: 154px;
    height: 163px;
  }
  @media ${props => props.theme.media_md} {
    right: -70px;
    top: 170px;
    width: 130px;
    height: 138px;
  }
`

const handleMore = () => {
  window.open(Bridge.store(null, 'iblock/'), '_blank', 'noopener,noreferrer')
}

const I_Block = props => {
  return (
    <>
      <Wrap>
        <Visual>
          <Phone>
            <Block01 />
            <Block02 />
            <Block03 />
            <Block04 />
          </Phone>
        </Visual>
        <Contents>
          <Title>i BLOCK</Title>
          <TitleSub>간결하고 체계적인 메세지 전달</TitleSub>
          <Description>
            마케팅/쇼핑몰/병의원/학교 등 다양한 분야
            <br />
            업종분야별 특화 질문들을 쉽게 정보전달
          </Description>
          <HashList>
            <HashItem>#다양한 메세지 전달 </HashItem>
            <HashItem>#업종별 특화 내용</HashItem>
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

export default I_Block
