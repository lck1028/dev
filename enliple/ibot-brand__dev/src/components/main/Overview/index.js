import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames/bind'
import Swiper from 'react-id-swiper'
import 'swiper/swiper.scss'
import {isIE, isIOS} from 'react-device-detect'
//import 'swiper/css/swiper.css'

// import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'
// import {Swiper, Navigation, Pagination} from 'swiper/js/swiper.esm'
import rem from '../../../assets/styled/rem'
import {NotoSans} from '../../../assets/styled/fonts'
import Styles from './overview.module.scss'
import ImgOverviewBg from '../../../assets/images/main/visual_bg.jpg'

const cx = classNames.bind(Styles)
const Wrap = styled.section`
  position: relative;
  height: inherit;
  min-height: inherit;
  background-image: url(${ImgOverviewBg});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

const WrapInner = styled.div`
  display: block;
  height: inherit;
  min-height: inherit;
  margin: 0 auto;
  padding: 0 90px 0 0;
  color: #ffffff;
  .swiper {
    &-container {
      height: ${isIOS ? '100%' : '100vh'};
    }
    &-slide {
      display: flex;
      width: 100vw;
      align-items: center;
    }
    &-pagination {
      position: absolute;
      left: 0;
      bottom: 0;
      display: table;
      table-layout: fixed;
      box-sizing: border-box;
      width: 100%;
      z-index: 1;
      @media ${props => props.theme.media_lg} {
        padding: 0 15px;
        bottom: 20px;
      }
      &-bullet {
        position: relative;
        display: table-cell;
        padding-left: 50px;
        vertical-align: bottom;
        &::before {
          content: '';
          position: absolute;
          left: 55px;
          top: -5px;
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &::after {
          content: '';
          position: absolute;
          left: 100px;
          right: 0;
          top: 0;
          bottom: 0;
          display: block;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
          border-right: 2px solid rgba(255, 255, 255, 0.3);
        }
        &:focus {
          outline: none;
        }
        @media (max-width: 1680px) {
          padding-left: 30px;
          &::before {
            left: 35px;
          }
          &::after {
            left: 80px;
          }
        }
        @media ${props => props.theme.media_xxl} {
          padding-left: 10px;
          &::before {
            left: 15px;
          }
          &::after {
            left: 60px;
          }
        }

        @media ${props => props.theme.media_lg} {
          &::before {
            left: 10px;
          }
          &::after {
            left: 30px;
          }
        }
        @media ${props => props.theme.media_md} {
          padding: 10px;
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }

        &-active {
          &::before {
            background-color: #fcf307;
          }
          &::after {
            border-top: 2px solid #ffffff;
            border-right: 2px solid #ffffff;
          }
          .swiper {
            &-pagination {
              &-btn {
              }
              &-title {
                color: #ffd110;
              }
              &-description {
                color: #ffffff;
              }
              &-progress {
                &::before {
                  transform: scale(1, 1);
                  transition: transform 4000ms linear 0s;
                }
              }
            }
          }
        }
      }
      &-btn {
        position: relative;
        display: block;
        padding: 30px 10px 45px 0px;
        @media ${props => props.theme.media_xxl} {
          padding: 20px 10px 35px 0px;
        }
        @media ${props => props.theme.media_xl} {
          padding: 10px 10px 15px 0px;
        }
        @media ${props => props.theme.media_md} {
          padding: 0;
        }
      }
      &-title {
        ${NotoSans};
        display: block;
        font-size: ${rem('30px')};
        color: rgba(255, 255, 255, 0.3);
        font-weight: 700;
        line-height: 1.2;
        @media (max-width: 1680px) {
          font-size: ${rem('26px')};
        }
        @media ${props => props.theme.media_xxl} {
          font-size: ${rem('22px')};
        }
        @media ${props => props.theme.media_xl} {
          font-size: ${rem('18px')};
        }
        @media ${props => props.theme.media_md} {
          font: 0/0 a;
        }
      }
      &-description {
        ${NotoSans};
        display: block;
        color: rgba(255, 255, 255, 0.3);
        font-size: ${rem('24px')};
        @media (max-width: 1680px) {
          font-size: ${rem('20px')};
        }
        @media ${props => props.theme.media_xxl} {
          font-size: ${rem('16px')};
        }
        @media ${props => props.theme.media_xl} {
          font-size: ${rem('14px')};
        }
        @media ${props => props.theme.media_lg} {
          font: 0/0 a;
        }
      }
      &-progress {
        position: absolute;
        left: 0px;
        right: 20px;
        bottom: 20px;
        display: block;
        height: 5px;
        background-color: rgba(255, 255, 255, 0.2);
        @media ${props => props.theme.media_xxl} {
          bottom: 20px;
        }
        @media ${props => props.theme.media_xl} {
          bottom: 5px;
          height: 3px;
        }
        @media ${props => props.theme.media_lg} {
          right: 0;
        }
        @media ${props => props.theme.media_md} {
          bottom: 50px;
        }
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          transform-origin: 0% 50%;
          transform: scale(0, 1);
        }
      }
    }
  }
  @media ${props => props.theme.media_md} {
    padding: 0;
  }
`

const SwiperItem = styled.div``
const SwiperItemBox = styled.div`
  box-sizing: border-box;
  flex: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px 135px 40px;
  text-align: left;
  @media ${props => props.theme.media_md} {
    padding: 0 15px 0;
    text-align: center;
  }
`
const SwiperItemHeader = styled.div``
const SubTitle = styled.strong`
  display: block;
  color: #ffd110;
  font-size: ${rem('85px')};
  font-weight: 800;
  line-height: 1;
  letter-spacing: -6.8px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  @media ${props => props.theme.media_md} {
    font-size: ${rem('60px')};
    letter-spacing: -1px;
  }
  @media ${props => props.theme.media_rg} {
    font-size: ${rem('40px')};
    letter-spacing: -1px;
  }
`
const Title = styled.h2`
  display: block;
  color: #ffffff;
  font-size: ${rem('85px')};
  font-weight: 800;
  line-height: 1;
  letter-spacing: -6.8px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  @media ${props => props.theme.media_md} {
    font-size: ${rem('60px')};
    letter-spacing: -1px;
  }
  @media ${props => props.theme.media_rg} {
    font-size: ${rem('40px')};
    letter-spacing: -1px;
  }
`
const Description = styled.p`
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.5);
  font-size: ${rem('40px')};
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -1.6px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  @media ${props => props.theme.media_md} {
    margin-top: 20px;
    font-size: ${rem('30px')};
  }
  @media ${props => props.theme.media_rg} {
    color: #ffffff;
    margin-top: 20px;
    font-size: ${rem('20px')};
  }
`

const OverviewNav = [
  {
    title: 'IBOT',
    description: '든든한 파트너 챗봇',
  },
  {
    title: '인공지능 챗봇',
    description: '누구든 쉽게 할수 있어요!',
  },
  {
    title: '응대서비스',
    description: '24시간 365일 無중단',
  },
  {
    title: '즉각 대응 답변',
    description: '질문자의 의도 파악',
  },
  {
    title: '선택은 당신의 몫',
    description: '꼼꼼히 비교 하세요!',
  },
]

const Overview = props => {
  const {className} = props
  const swiperPrams = {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    height: '100%',
    observer: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return (
          '<span class="' +
          className +
          '"><span class="swiper-pagination-btn"><span class="swiper-pagination-description">' +
          OverviewNav[index].description +
          '</span><strong class="swiper-pagination-title">' +
          OverviewNav[index].title +
          '</strong><span class="swiper-pagination-progress"></span></span></span>'
        )
      },
    },
    containerClass: cx('swiper-container'),
  }
  return (
    <>
      <Wrap>
        <WrapInner className={className}>
          <Swiper {...swiperPrams}>
            <SwiperItem>
              <SwiperItemBox>
                <SwiperItemHeader>
                  <SubTitle>All in one</SubTitle>
                  <Title> 인공지능 챗봇</Title>
                </SwiperItemHeader>
                <Description>
                  개발자/디자이너/CS담당자 없이
                  <br />
                  무료로 시작할 수 있는 인공지능 챗봇
                </Description>
              </SwiperItemBox>
            </SwiperItem>
            <SwiperItem>
              <SwiperItemBox>
                <SwiperItemHeader>
                  <SubTitle>Easy, simple</SubTitle>
                  <Title> 아이봇 관리</Title>
                </SwiperItemHeader>
                <Description>
                  최적화된 상담 시나리오를 쉽게 구축하여
                  <br />
                  손쉽게 관리할 수 있는 관리자 페이지 제공
                </Description>
              </SwiperItemBox>
            </SwiperItem>

            <SwiperItem>
              <SwiperItemBox>
                <SwiperItemHeader>
                  <SubTitle>24/365</SubTitle>
                  <Title> 실시간 상담</Title>
                </SwiperItemHeader>
                <Description>
                  하이브리드형 인공지능 기술 탑재로
                  <br />
                  쉬지 않는 실시간 응대 서비스 제공
                </Description>
              </SwiperItemBox>
            </SwiperItem>

            <SwiperItem>
              <SwiperItemBox>
                <SwiperItemHeader>
                  <SubTitle>Professional</SubTitle>
                  <Title> 치밀한 구성</Title>
                </SwiperItemHeader>
                <Description>
                  유사 질문에 대한 학습 능력을 동반,
                  <br />
                  전문적인 서비스 제공
                </Description>
              </SwiperItemBox>
            </SwiperItem>

            <SwiperItem>
              <SwiperItemBox>
                <SwiperItemHeader>
                  <SubTitle>The Best</SubTitle>
                  <Title> 최고의 선택, 아이봇</Title>
                </SwiperItemHeader>
                <Description>
                  고객에게는 최고의 편의성을
                  <br />
                  기업에게는 최고의 만족도를
                </Description>
              </SwiperItemBox>
            </SwiperItem>
          </Swiper>
        </WrapInner>
      </Wrap>
    </>
  )
}

export default Overview
