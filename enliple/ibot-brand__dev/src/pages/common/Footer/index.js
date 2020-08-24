import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {isMobile} from 'react-device-detect'

import {MdClose} from 'react-icons/md'

import {modalOpen, modalClose} from '../../../redux/actions'
import rem from '../../../assets/styled/rem'
import {NotoSans} from '../../../assets/styled/fonts'

import ImgLogoGray from '../../../assets/images/main/logo_gray.png'
import FamilySite from './FamilySite'
import {TermService, TermPrivacy} from '../../views/Customer/Join/TermsTemplate' //'/TermsTemplate'

const Wrap = styled.footer`
  background-color: #222222;
`
const WrapInner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${props => (!props.type ? '45px 140px 45px 40px' : '45px 40px 45px 40px')};
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  @media ${props => props.theme.media_md} {
    padding: 25px 15px;
  }
`
const ComponyBox = styled.div``
const Info = styled.div``
const InfoItem = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 20px;
  @media ${props => props.theme.media_md} {
    padding: 0 10px;
  }
  &:first-child {
    padding-left: 0;
    &::before {
      display: none;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 4px;
    height: 4px;
    margin-top: -2px;
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`
const InfoButton = styled.button`
  ${NotoSans}
  color: #cccccc;
  font-size: ${rem('16px')};
  font-weight: 700;
  text-decoration: none;
  @media ${props => props.theme.media_md} {
    font-size: ${rem('14px')};
  }
`
const InfoCompony = styled(InfoButton)`
  color: #ffffff;
`
const Copyright = styled.div`
  position: relative;
  margin-top: 35px;
  padding-left: 135px;
  @media ${props => props.theme.media_md} {
    margin-top: 15px;
    padding-left: 0;
  }
`
const Logo = styled.h3`
  position: absolute;
  left: 0;
  top: 10px;
  @media ${props => props.theme.media_md} {
    position: static;
  }
`
const LogoLink = styled(Link)`
  display: block;
  width: 95px;
  height: 30px;
  background-image: url(${ImgLogoGray});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
`
const Address = styled.address`
  ${NotoSans}
  color: #999999;
  font-size: ${rem('14px')};
  font-style: normal;
  @media ${props => props.theme.media_md} {
    margin-top: 10px;
    font-size: ${rem('12px')};
  }
`
const AddressItem = styled.span`
  display: inline-block;
  margin-right: 30px;
  line-height: 1.8;
  & > a {
    color: #999999;
    text-decoration: none;
  }
`
const Copy = styled.small`
  display: block;
  margin-top: 10px;
  font-size: ${rem('14px')};
  @media ${props => props.theme.media_md} {
    margin-top: 5px;
    font-size: ${rem('12px')};
  }
`

const WrapFamilySite = styled.aside`
  position: absolute;
  right: ${props => (!props.type ? '140px' : '40px')};
  top: 30px;
  width: 265px;
  @media ${props => props.theme.media_xl} {
    top: auto;
    bottom: 30px;
  }
  @media ${props => props.theme.media_lg} {
    position: static;
    float: right;
    margin-top: 20px;
  }
  @media ${props => props.theme.media_md} {
    float: none;
    box-sizing: border-box;
    width: 100%;
    padding-right: ${isMobile ? '70px' : '110px'};
  }
`

const TermActicle = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const TermHeader = styled.header`
  flex: 0 0 auto;
  padding: 20px;
  font-size: ${rem('18px')};
`

const TermTitle = styled.h3``
const TermBody = styled.div`
  flex: 0 1 auto;
  padding: 20px;
  font-size: ${rem('14px')};
`
const TermContentsBox = styled.div`
  min-height: 50vh;
  height: 50vh;
  overflow-y: auto;
  overflow-y: auto;
`
const TermContents = styled.div`
  padding: 20px;
  white-space: pre-line;
  word-break: keep-all;
  table {
    table-layout: fixed;
    width: 100%;
    th,
    td {
      padding: 14px 10px;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      font-size: ${rem('14px')};
      font-weight: 400;
      text-align: center;
    }
    th {
      border-color: #000000;
    }
  }
`
const TermClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-contents: center;
  width: 24px;
  height: 24px;
  color: #000000;
  font-size: ${rem('24px')};
`

const PopupTermService = props => {
  return (
    <>
      <TermActicle>
        <TermHeader>
          <TermTitle>아이봇 이용약관</TermTitle>
        </TermHeader>
        <TermBody>
          <TermContentsBox>
            <TermContents dangerouslySetInnerHTML={{__html: TermService}} />
          </TermContentsBox>
        </TermBody>
        <TermClose
          onClick={e => {
            props.modal.cbConfirm !== null ? props.modal.cbConfirm() : null
            props.onModalClose({
              isOpen: false,
            })
          }}
        >
          <MdClose />
        </TermClose>
      </TermActicle>
    </>
  )
}

const PopupTermPrivacy = props => {
  return (
    <>
      <TermActicle>
        <TermHeader>
          <TermTitle>개인정보처리방침</TermTitle>
        </TermHeader>
        <TermBody>
          <TermContentsBox>
            <TermContents dangerouslySetInnerHTML={{__html: TermPrivacy}} />
          </TermContentsBox>
        </TermBody>
        <TermClose
          onClick={e => {
            props.modal.cbConfirm !== null ? props.modal.cbConfirm() : null
            props.onModalClose({
              isOpen: false,
            })
          }}
        >
          <MdClose />
        </TermClose>
      </TermActicle>
    </>
  )
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
    const {className} = this.props
    this.state = {
      className: className,
    }
  }
  handleTermService = e => {
    e.preventDefault()
    this.props.onModalOpen(
      {
        isOpen: true,
      },
      {type: 'custom', customComponent: <PopupTermService {...this.props} />}
    )
  }

  handleTermPrivacy = e => {
    this.props.onModalOpen(
      {
        isOpen: true,
      },
      {type: 'custom', customComponent: <PopupTermPrivacy {...this.props} />}
    )
  }

  render() {
    const {className} = this.state
    const {type} = this.props
    return (
      <>
        <Wrap>
          <WrapInner type={type}>
            <ComponyBox>
              <Info>
                <InfoItem>
                  <InfoButton as={'a'} href="http://enliple.com/" target="_blnak" title="새창">
                    회사소개
                  </InfoButton>
                </InfoItem>
                <InfoItem>
                  <InfoButton onClick={e => this.handleTermService(e)}>이용약관</InfoButton>
                </InfoItem>
                <InfoItem>
                  <InfoButton onClick={e => this.handleTermPrivacy()}>개인정보처리방침</InfoButton>
                </InfoItem>
                {/* <InfoItem>
                  <InfoCompony>회사소개서 다운로드</InfoCompony>
                </InfoItem> */}
              </Info>
              <Copyright>
                <Logo>
                  <LogoLink to="/">IBOT</LogoLink>
                </Logo>
                <Address>
                  <AddressItem>서울특별시 구로구 구로동 디지털로 272 한신아이티타워 501~504호</AddressItem> <AddressItem>대표 : 한경훈</AddressItem>{' '}
                  <AddressItem>사업자등록번호 : 113-86-60934</AddressItem> <AddressItem>ibot@enliple.com</AddressItem>
                  <AddressItem>
                    대표영업번호 : <a href="tel:070-7715-7293">070-7715-7293</a>
                  </AddressItem>
                  <Copy>Copyright &copy; ENLIPLE All Right Reserved.</Copy>
                </Address>
              </Copyright>
            </ComponyBox>
            <WrapFamilySite type={type}>
              <FamilySite />
            </WrapFamilySite>
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

const footerStateToProps = state => ({
  modal: state.modal,
})
const footerDispatchToProps = dispatch => ({
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})
export default connect(footerStateToProps, footerDispatchToProps)(Footer)
