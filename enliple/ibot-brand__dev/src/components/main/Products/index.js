import React from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import {MdArrowBack, MdArrowForward} from 'react-icons/md'

import {isMobile, isIE, isIOS} from 'react-device-detect'

import rem from '../../../assets/styled/rem'
import I_Skin from './I_Skin'
import I_Block from './I_Block'
import I_Voice from './I_Voice'
import I_Viser from './I_Viser'
import I_Ticon from './I_Ticon'

const Wrap = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: inherit;
  min-height: inherit;
`
const WrapInner = styled.div`
  display: block;
  box-sizing: border-box;
  height: inherit;
  min-height: inherit;
  margin: 0 auto;
  padding: 0 90px 0 0;
  .swiper {
    &-container {
      position: relative;
      height: 100%;
    }
    &-slide {
      display: flex;
      width: 100%;
      align-items: center;
      overflow: hidden;
    }
    &-pagination {
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      line-height: 0;
      z-index: 1;
      transform: translateZ(1px);
      &-bullet {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 3px;
        border-radius: 50%;
        background-color: #888888;
        vertical-align: top;
        &-active {
          background-color: #111111;
        }
      }
      @media ${props => props.theme.media_md} {
        display: block;
        padding-left: 20px;
        text-align: left;
        bottom: ${!isIOS ? '50px' : '80px'};
      }
    }
  }
  @media ${props => props.theme.media_md} {
    padding: 0;
  }
`
const SwiperItem = styled.div``
const ProductsArrow = styled.button`
  position: absolute;
  bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 2px solid #aaaaaa;
  color: #aaaaaa;
  font-size: 40px;
  z-index: 1;
  &:hover {
    border: 2px solid #111111;
    color: #111111;
    transition: border 0.3s ease-out 0s, color 0.3s ease-out 0s;
  }
  @media ${props => props.theme.media_md} {
    display: none;
  }
`
const ProductsArrowPrev = styled(ProductsArrow)`
  right: 220px;
`
const ProductsArrowNext = styled(ProductsArrow)`
  right: 303px;
`
const ProductsArrowText = styled.span`
  font: 0/0 a;
`

const Products = props => {
  const swiperPrams = {
    loop: false,
    autoplay: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    renderPrevButton: () => (
      <ProductsArrowNext className="swiper-button-prev">
        <MdArrowBack />
        <ProductsArrowText>이전</ProductsArrowText>
      </ProductsArrowNext>
    ),
    renderNextButton: () => (
      <ProductsArrowPrev className="swiper-button-next">
        <MdArrowForward />
        <ProductsArrowText>다음</ProductsArrowText>
      </ProductsArrowPrev>
    ),
    slidesPerView: 'auto',
    height: '100%',
    observer: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: (index, className) => {
      //   return (
      //     '<span class="' +
      //     className +
      //     '"><span class="swiper-pagination-btn"><span class="swiper-pagination-description">' +
      //     OverviewNav[index].description +
      //     '</span><strong class="swiper-pagination-title">' +
      //     OverviewNav[index].title +
      //     '</strong><span class="swiper-pagination-progress"></span></span></span>'
      //   )
      // },
    },
  }

  return (
    <>
      <Wrap>
        <WrapInner>
          <Swiper {...swiperPrams}>
            <SwiperItem>
              <I_Skin />
            </SwiperItem>
            <SwiperItem>
              <I_Block />
            </SwiperItem>
            <SwiperItem>
              <I_Voice />
            </SwiperItem>
            <SwiperItem>
              <I_Viser />
            </SwiperItem>
            <SwiperItem>
              <I_Ticon />
            </SwiperItem>
          </Swiper>
        </WrapInner>
      </Wrap>
    </>
  )
}

export default Products
