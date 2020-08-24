import React from 'react'
import styled from 'styled-components'
import 'swiper/swiper.scss'
import {isMobile} from 'react-device-detect'

import {Bridge} from '../../../utils/bridgeLink'
import rem from '../../../assets/styled/rem'
import {BtnFlat} from '../../../assets/styled/buttons'
import PartnerList from './List'

const Wrap = styled.section`
  position: relative;
  height: inherit;
  min-height: inherit;
  display: flex;
  align-items: center;
  @media ${props => props.theme.media_md} {
    padding-top: ${isMobile ? '60px' : '120px'};
    display: block;
  }
`

const Contents = styled.div`
  position: relative;
  padding: 0 40px;
  @media ${props => props.theme.media_md} {
    padding: 0 15px 0;
  }
`
const Title = styled.h2`
  font-size: ${rem('80px')};
  font-weight: 800;
  text-shadow: 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1);
  white-space: nowrap;
  @media ${props => props.theme.media_md} {
    font-size: ${rem('40px')};
  }
  @media ${props => props.theme.media_rg} {
    font-size: ${rem('30px')};
  }
`
const TitleSub = styled.strong`
  display: block;
  margin-top: 5px;
  font-size: ${rem('50px')};
  letter-spacing: -0.6px;
  word-break: keep-all;
  text-shadow: 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1);
  white-space: nowrap;
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
  white-space: nowrap;
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
const Button = styled.button`
  ${BtnFlat('#111111', '#ffffff')}
`

const PartinerWrap = styled.div`
  min-width: 1px;
  min-height: 1px;
  flex: 1 1 100%;
  @media ${props => props.theme.media_md} {
    margin-top: 5px;
    flex: none;
  }
`

const handleMore = () => {
  window.open(Bridge.store(null, 'case/'), '_blank', 'noopener,noreferrer')
}

const Partners = props => {
  const {className} = props

  return (
    <>
      <Wrap>
        <Contents>
          <Title>아이봇 파트너스</Title>
          <TitleSub>다양한 분야에서 함께 합니다.</TitleSub>
          <Description>
            쇼핑/병원/자동차/홍보마케팅 등<br />
            다양한 분야에서 아이봇을 통해
            <br />
            고객 상담관리에 활용되고있습니다.
          </Description>
          <Btns>
            <Button title="새창" onClick={handleMore}>
              더 알아보기
            </Button>
          </Btns>
        </Contents>
        <PartinerWrap>
          <PartnerList />
        </PartinerWrap>
      </Wrap>
    </>
  )
}

export default Partners
