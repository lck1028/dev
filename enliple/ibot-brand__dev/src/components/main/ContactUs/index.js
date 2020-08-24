import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import 'swiper/swiper.scss'
import {isMobile} from 'react-device-detect'

import rem from '../../../assets/styled/rem'
import {BtnFlat} from '../../../assets/styled/buttons'
import {modalOpen, modalClose} from '../../../redux/actions'

import ImgContactUsVisual from '../../../assets/images/contactus/visual.png'

const Wrap = styled.section`
  position: relative;
  height: inherit;
  min-height: inherit;
  display: flex;
  align-items: center;
  @media ${props => props.theme.media_md} {
    display: block;
  }
`
const Visual = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 980px;
  width: 100%;
  background-image: url(${ImgContactUsVisual});
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 85.71%;
  }
`

const Contents = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  z-index: 1;
  @media ${props => props.theme.media_md} {
    padding: 120px 15px;
  }
  @media ${props => props.theme.media_rg} {
    padding: 80px 15px;
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
const Button = styled.button`
  ${BtnFlat('#111111', '#ffffff')}
`

const ContactUs = props => {
  const {className} = props
  const [chatBotOpen, setChatBotOpen] = useState(false)
  // useEffect(() => {
  //   console.log('%c useEffect--------------------', 'font-size:24px; background-color:red;', chatBotOpen)
  // })

  const handleChatBotOpen = chatBotOpen => {
    window.customIbotButton()
    // const target = document.querySelector('#parentId')
    // if (target == null) return

    // const targetVisible = target.style.display

    // //"

    // if (targetVisible == 'none') {
    //   window.customIbotButton()
    // } else {
    //   return
    // }
  }

  return (
    <>
      <Wrap>
        <Contents>
          <Title>Contact us</Title>
          <TitleSub>지능형 고객센터</TitleSub>
          <Description>
            무엇이든 문의해주세요.
            <br />
            아이봇은 항상 열려있습니다. :)
          </Description>
          <Btns>
            <Button
              onClick={e => {
                handleChatBotOpen(chatBotOpen)
              }}
            >
              챗봇으로 상담하기
            </Button>
            {isMobile ? (
              <Button as={'a'} href="tel:070-7715-7293">
                전화로 상담하기
              </Button>
            ) : null}
          </Btns>
        </Contents>
        <Visual />
      </Wrap>
    </>
  )
}

const modalStateToProps = state => ({
  modal: state.modal,
})
const modalDispatchToProps = dispatch => ({
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})

export default connect(modalStateToProps, modalDispatchToProps)(ContactUs)
