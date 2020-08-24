import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import Swiper from 'react-id-swiper'

import {IoIosReturnRight} from 'react-icons/io'
import {FiAlertCircle} from 'react-icons/fi'

import {NotoSans} from '../../../assets/styled/fonts'
import rem from '../../../assets/styled/rem'
import ImgPriceLittle from '../../../assets/images/price/price_little.jpg'
import ImgPriceJunior from '../../../assets/images/price/price_junior.jpg'
import ImgPriceSenior from '../../../assets/images/price/price_senior.jpg'
import ImgPriceCustom from '../../../assets/images/price/price_custom.jpg'

let scrollPosLast = 0
let upFlag = false
let downFlag = false

const Wrap = styled.section`
  ${NotoSans};
  height: auto;
  min-height: inherit;
  box-sizing: border-box;
  padding: 150px 0 150px;
  @media ${props => props.theme.media_md} {
    padding: 120px 0;
  }
  @media ${props => props.theme.media_rg} {
    padding: 80px 0;
  }
`
const WrapInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: ${rem('50px')};
  font-weight: 800;
  letter-spacing: -0.4px;
  text-align: center;
  @media ${props => props.theme.media_md} {
    font-size: ${rem('30px')};
  }
`
const PlanList = styled.div`
  display: flex;
  margin-top: 10px;

  .swiper {
    &-container {
      width: 100%;
      box-sizing: border-box;
      padding: 40px 40px 80px;
    }
    &-pagination {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      line-height: 1;
      &-bullet {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 3px;
        border-radius: 50%;
        background-color: #888888;
        &-active {
          background-color: #111111;
        }
      }
    }
  }
`
const PlanItem = styled.div`
  flex: 100%;
  height: auto;
  padding: 0 20px;
  @media ${props => props.theme.media_md} {
    &.swiper {
      &-slide {
        transform-origin: 550% 50%;
        transform: scale(0.9);
        transition: transform 0.3s linear 0s, transform-origin 0s linear 0s;
        &-prev {
          transform-origin: 250% 50%;
          transform: scale(0.9);
          z-index: 5;
        }
        &-next {
          transform-origin: -250% 50%;
          transform: scale(0.9);
          z-index: 5;
          & ~ .swiper-slide {
            transform-origin: -550% 50%;
          }
        }
        &-active {
          transform-origin: 50% 50%;
          transform: scale(1);
          z-index: 10;
        }
      }
    }
  }
`

const PlanItemInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 240px;
  height: 100%;
  margin: 0 auto;
  padding: 20px 10px 50px;
  border-radius: 20px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
  color: #ffffff;
  text-align: center;
  &:hover {
    box-shadow: 0 7px 30px 0 rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-out 0s;
  }
`
const PlanItemLittle = styled(PlanItemInner)`
  background-image: url(${ImgPriceLittle});
`
const PlanItemJunior = styled(PlanItemInner)`
  background-image: url(${ImgPriceJunior});
`
const PlanItemSenior = styled(PlanItemInner)`
  background-image: url(${ImgPriceSenior});
`
const PlanItemCustom = styled(PlanItemInner)`
  background-image: url(${ImgPriceCustom});
`

const PlanTitle = styled.h3`
  position: relative;
  padding-bottom: 20px;
  font-size: ${rem('20px')};
  font-weight: 500;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    border-radius: 1px;
    background-color: #ffffff;
  }
`
const PlanPrice = styled.strong`
  display: block;
  font-size: ${rem('40px')};
  font-weight: 500;
`
const PlanPriceMonth = styled.span`
  font-size: ${rem('20px')};
  font-weight: 400;
`

const PlanInfos = styled.ul`
  flex: 1 0 auto;
  margin-top: 20px;
`
const PlanInfo = styled.li`
  position: relative;
  display: block;
  font-size: ${rem('16px')};
  line-height: 1.5;
  &::before {
    content: '*';
    display: inline-block;
    padding-right: 5px;
    font-weight: 300;
    line-height: 0;
    font-size: ${rem('24px')};
    vertical-align: -10px;
  }
`
const PlanInfoOption = styled.mark`
  position: relative;
  display: block;
  padding: 5px 0;
  color: #ffffff;
  font-size: ${rem('12px')};
  line-height: 1.2;
`
const IosReturnRight = styled(IoIosReturnRight)`
  display: inline-block;
  padding-right: 5px;
  font-size: ${rem('16px')};
  vertical-align: middle;
`
const PlanBtns = styled.div`
  position: absolute;
  left: 0;
  bottom: -21px;
  width: 100%;
`
const PlanBtn = styled.button`
  min-width: 144px;
  height: 42px;
  border-radius: 21px;
  background-color: #ffffff;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
  color: #111111;
  font-size: ${rem('16px')};
  text-align: center;
  &:hover ${PlanItemInner} {
    box-shadow: 0 7px 30px 0 rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-out 0s;
  }
`
const TableWrap = styled.div`
  max-width: 960px;
  margin: 40px auto 0;
  padding: 0 40px;
  @media ${props => props.theme.media_md} {
    padding: 0 15px;
  }
`
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.media_md} {
    display: block;
  }
`
const TableTitle = styled.h3`
  font-size: ${rem('24px')};
  font-weight: 800;
  @media ${props => props.theme.media_md} {
    font-size: ${rem('22px')};
    text-align: center;
  }
`
const TableCaption = styled.mark`
  color: #666666;
  font-size: ${rem('20px')};
  font-weight: 400;
  @media ${props => props.theme.media_md} {
    display: block;
    text-align: right;
    font-size: ${rem('14px')};
  }
`
const Table = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  @media ${props => props.theme.media_md} {
    margin-top: 10px;
  }
  table {
    width: calc(100% + 2px);
    margin-left: -1px;
  }
  th,
  td {
    border: 1px solid #e0e0e0;
  }
  th {
    padding: 20px 10px;
    border-top: 2px solid #111111;
    background-color: #f7f7f7;
    font-size: ${rem('24px')};
    font-weight: 700;
    text-align: center;
    @media ${props => props.theme.media_md} {
      padding: 8px 5px;
      font-size: ${rem('16px')};
    }
  }
  td {
    padding: 15px 10px 15px 60px;
    color: #666666;
    font-size: ${rem('24px')};
    line-height: 1.75;
    &:first-child {
      padding-left: 10px;
      color: #111111;
      text-align: center;
      @media ${props => props.theme.media_md} {
        text-align: left;
      }
    }
    @media ${props => props.theme.media_md} {
      padding: 8px 10px;
      font-size: ${rem('14px')};
      text-align: left;
    }
  }
`
const Col = styled.col`
  widht: 240px;
  @media ${props => props.theme.media_md} {
    width: 150px;
  }
`
const Notice = styled.aside`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  @media ${props => props.theme.media_md} {
    display: block;
    width: 100%;
  }
`
const NoticeIcon = styled(FiAlertCircle)`
  margin-right: 10px;
  font-size: ${rem('32px')};
  vertical-align: -6px;
  @media ${props => props.theme.media_md} {
    margin-right: 5px;
    font-size: ${rem('14px')};
    vertical-align: -2px;
  }
`
const NoticeHeader = styled.header`
  width: 240px;
  box-sizing: border-box;
  padding: 15px 10px;
  font-size: ${rem('24px')};
  font-weight: 800;
  text-align: center;
  @media ${props => props.theme.media_md} {
    width: 150px;
    display: block;
    text-align: left;
    font-size: ${rem('14px')};
  }
`
const NoticeContents = styled.div`
  padding: 15px 10px 15px 60px;
  font-size: ${rem('20px')};
  font-weight: 300;
  letter-spacing: -0.6px;

  @media ${props => props.theme.media_md} {
    padding: 10px;
    font-size: ${rem('14px')};
  }
`
const NoticeList = styled.ul``
const NoticeItem = styled.li`
  position: relative;
  padding-left: 20px;
  line-height: 1.8;
  @media ${props => props.theme.media_md} {
    padding-left: 10px;
  }
  &::before {
    content: '*';
    position: absolute;
    left: 0;
    top: 14px;
    display: block;
    line-height: 1;
    @media ${props => props.theme.media_md} {
      top: 7px;
    }
  }
`

const onScroll = (e, propsfullpageApi) => {
  const target = e.target
  //scrollPosLast = target.scrollTop
  if (target.scrollTop === 0) {
    //scroll start
    // console.log('//scroll start')
    setTimeout(() => {
      upFlag = true
    }, 500)
  } else if (target.scrollHeight - target.scrollTop === target.clientHeight) {
    //scroll End
    // console.log('//scroll End')
    setTimeout(() => {
      downFlag = true
    }, 500)
  } else {
    upFlag = false
    downFlag = false
  }

  window.addEventListener('wheel', e => {
    if (downFlag && e.deltaY > 0) {
      propsfullpageApi.moveSectionDown()
      downFlag = false
    }
    if (upFlag && e.deltaY < 0) {
      propsfullpageApi.moveSectionUp()
      upFlag = false
    }
  })
}

const swiperCenteredSet = (swiper, breakpoints) => {
  const breakPonit = breakpoints
  let {width, params} = swiper
  if (width > breakPonit) {
    return (params.centeredSlides = false)
  } else {
    return (params.centeredSlides = true)
  }
}

const Price = props => {
  const swiperPrams = {
    autoplay: false,
    slidesPerView: 'auto',
    height: '100%',
    observer: true,
    centeredSlides: null,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    on: {
      init: function () {
        swiperCenteredSet(this, 768)
        this.update()
      },
      resize: function () {
        swiperCenteredSet(this, 768)
        this.update()
      },
    },
  }
  return (
    <>
      <Wrap
        id={props.id}
        // onScroll={e => {
        //   onScroll(e, props.propsfullpageApi)
        // }}
        //propsfullpageApi={props.propsfullpageApi}
      >
        <WrapInner>
          <Title>월 정액요금제</Title>
          <PlanList>
            <Swiper {...swiperPrams}>
              <PlanItem>
                <PlanItemLittle>
                  <PlanTitle>i-Little</PlanTitle>
                  <PlanPrice>
                    10만원
                    <PlanPriceMonth>/월</PlanPriceMonth>
                  </PlanPrice>

                  <PlanInfos>
                    <PlanInfo>시나리오 작성</PlanInfo>
                    <PlanInfo>스킨 무료</PlanInfo>
                    <PlanInfo>보고서 리포트 제공</PlanInfo>
                    <PlanInfo>고객관리</PlanInfo>
                    <PlanInfo>챗봇 셋팅</PlanInfo>
                  </PlanInfos>
                  <PlanBtns>
                    <PlanBtn>i-Little 시작</PlanBtn>
                  </PlanBtns>
                </PlanItemLittle>
              </PlanItem>

              <PlanItem>
                <PlanItemJunior>
                  <PlanTitle>i-Junior</PlanTitle>
                  <PlanPrice>
                    30만원
                    <PlanPriceMonth>/월</PlanPriceMonth>
                  </PlanPrice>

                  <PlanInfos>
                    <PlanInfo>i-Little 서비스 포함</PlanInfo>
                    <PlanInfo>아이블록 무료</PlanInfo>
                    <PlanInfo>
                      바이저 기본형 설치
                      <PlanInfoOption>
                        <IosReturnRight />
                        인공지능 팝업 시스템
                      </PlanInfoOption>
                    </PlanInfo>
                    <PlanInfo>
                      디자인 맞춤 제작
                      <PlanInfoOption>
                        <IosReturnRight />
                        플로팅, 스플래쉬,
                        <br />
                        스킨 3종 맞춤 제작
                      </PlanInfoOption>
                    </PlanInfo>
                  </PlanInfos>
                  <PlanBtns>
                    <PlanBtn>i-Junior 시작</PlanBtn>
                  </PlanBtns>
                </PlanItemJunior>
              </PlanItem>

              <PlanItem>
                <PlanItemSenior>
                  <PlanTitle>i-Senior</PlanTitle>
                  <PlanPrice>
                    10만원
                    <PlanPriceMonth>/월</PlanPriceMonth>
                  </PlanPrice>

                  <PlanInfos>
                    <PlanInfo>i-Junior 서비스 포함</PlanInfo>
                    <PlanInfo>학습답변 무료</PlanInfo>
                    <PlanInfo>
                      i-Answer
                      <PlanInfoOption>
                        <IosReturnRight />
                        상품별 맞춤 챗봇 셋팅
                      </PlanInfoOption>
                    </PlanInfo>
                  </PlanInfos>
                  <PlanBtns>
                    <PlanBtn>i-Senior 시작</PlanBtn>
                  </PlanBtns>
                </PlanItemSenior>
              </PlanItem>

              <PlanItem>
                <PlanItemCustom>
                  <PlanTitle>i-Custom</PlanTitle>
                  <PlanPrice>별도협의</PlanPrice>
                  <PlanInfos>
                    <PlanInfo>기능 맞춤 별도 개발</PlanInfo>
                    <PlanInfo>시스템 연동</PlanInfo>
                  </PlanInfos>
                  <PlanBtns>
                    <PlanBtn>상담하기</PlanBtn>
                  </PlanBtns>
                </PlanItemCustom>
              </PlanItem>
            </Swiper>
          </PlanList>

          <TableWrap>
            <TableHeader>
              <TableTitle>아이봇 상세 요금안내</TableTitle>
              <TableCaption>(건별 / 단위 : 원)</TableCaption>
            </TableHeader>
            <Table>
              <table>
                <caption>아이봇 상세요금 과금안내/ 비용</caption>
                <colgroup>
                  <Col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">과금 안내</th>
                    <th scope="col">비용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>알림톡</td>
                    <td>10원</td>
                  </tr>
                  <tr>
                    <td>SMS (단문 메세지)</td>
                    <td>12원 (띄어쓰기 포함 45자 이내)</td>
                  </tr>
                  <tr>
                    <td>LMS (장문 메세지)</td>
                    <td>45원</td>
                  </tr>
                  <tr>
                    <td>학습답변</td>
                    <td>100원</td>
                  </tr>
                  <tr>
                    <td>i-Answer</td>
                    <td>100원</td>
                  </tr>
                  <tr>
                    <td>TTS (채팅 음성지원)</td>
                    <td>
                      Clova 제공 캐릭터 :1,000글자당 10원
                      <br />
                      Selvas 제공 캐릭터 : 40글자당 25원
                    </td>
                  </tr>
                </tbody>
              </table>
              <Notice>
                <NoticeHeader>
                  <NoticeIcon />
                  이용안내
                </NoticeHeader>
                <NoticeContents>
                  <NoticeList>
                    <NoticeItem>상위 요금제는 1년 약정 기준으로 합니다.</NoticeItem>
                    <NoticeItem>모든 월정액은 VAT 미포함 가격 입니다.</NoticeItem>
                    <NoticeItem>
                      Clova 제공 캐릭터로는 미진, 진호 총 2종이 있으며,
                      <br />
                      Selvas 제공 캐릭터로는 민준, 하나, 유진, 혜진, 아람, 마루, 할아버지가 있습니다.
                    </NoticeItem>
                    <NoticeItem>추후 제공 캐릭터는 당사 사정에 따라 변동 될수 있습니다.</NoticeItem>
                  </NoticeList>
                </NoticeContents>
              </Notice>
            </Table>
          </TableWrap>
        </WrapInner>
      </Wrap>
    </>
  )
}

export default Price
