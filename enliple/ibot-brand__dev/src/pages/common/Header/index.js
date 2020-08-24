import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {MdMenu, MdClear, MdChangeHistory, MdKeyboardArrowRight} from 'react-icons/md'
import {isMobile, isIE, isIOS, mobileVendor, mobileModel} from 'react-device-detect'

import {API} from '../../../../src/common/services'
import {Bridge} from '../../../utils/bridgeLink'
import {NotoSans} from '../../../assets/styled/fonts'
import rem from '../../../assets/styled/rem'
import LinkTest from '../../views/LinkTest'
import Gnb from '../Gnb'
import BtnLogin from './LogIn'
import ImgLogoDefault from '../../../assets/images/main/logo_default.png'
import ImgLogoWhite from '../../../assets/images/main/logo_white.png'
import ImgIconMypage from '../../../assets/images/main/icon_my_white.png'
import ImgIconLogin from '../../../assets/images/main/icon_login_white.png'
import ImgIconOverview from '../../../assets/images/main/ico_overview.png'
import ImgIconProducts from '../../../assets/images/main/ico_products.png'
import ImgIconExperience from '../../../assets/images/main/ico_experience.png'
import ImgIconPrice from '../../../assets/images/main/ico_price.png'
import ImgIconReference from '../../../assets/images/main/ico_reference.png'
import ImgIconContactus from '../../../assets/images/main/ico_contactus.png'

const Wrap = styled.header`
  position: fixed;

  left: 0;
  right: ${props => (props.isMain ? (isIE ? '107px' : '98px') : '90px')};
  top: 0;
  box-sizing: border-box;
  height: 100px;
  border-bottom: 1px solid ${props => (props.observeoverview ? 'rgba(255,255,255,0.6)' : '#707070')};
  background-color: ${props => (props.observeoverview ? 'transparent' : '#ffffff')};
  color: #ffffff;
  z-index: 100;
  transition: border-bottom 0.3s ease-in-out 0s, background-color 0.3s ease-in-out 0s;
  @media ${props => props.theme.media_md} {
    position: ${isMobile && !isIOS ? 'fixed' : 'fixed'}; //sticky
    right: 0;
    height: 48px;
    border-bottom: 1px solid #d8d8d8;
    background-color: #ffffff;
  }
`
const WrapInner = styled.div`
  position: relative;
  max-width: 1900px;
  height: inherit;
  margin: 0 auto;
  @media (max-width: 1360px) {
    max-width: 1280px;
  }
`
const Logo = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -620px;
  transform: translateY(-50%);
  @media (max-width: 1360px) {
    left: 20px;
    margin-left: 0;
  }
  @media ${props => props.theme.media_md} {
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`
const LogoLink = styled(Link)`
  display: block;
  width: 95px;
  height: 30px;
  padding: 20px;
  background-image: url(${props => (props.observeoverview == 'true' ? ImgLogoWhite : ImgLogoDefault)});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
  transition: background-image 0.3s ease-in-out 0s;
  @media ${props => props.theme.media_md} {
    width: 100px;
    height: 44px;
    padding: 0px;
    background-image: url(${ImgLogoDefault});
  }
`

const NavBtnOpen = styled.button`
  display: none;
  height: 48px;
  padding: 10px;
  color: #000000;
  font-size: ${rem('28px')};
  line-height: 0;
  @media ${props => props.theme.media_md} {
    display: block;
  }
`
const NavBtnClose = styled.button`
  display: none;
  position: fixed;
  left: 70%;
  top: 0;
  width: 30%;
  height: 100%;
  padding: 10px;
  color: #222222;
  font-size: ${rem('28px')};
  text-align: left;
  line-height: 0;
  opacity: 0;
  @media ${props => props.theme.media_md} {
    display: block;
    pointer-events: ${props => (props.isNavOpen ? 'auto' : 'none')};
    opacity: ${props => (props.isNavOpen ? '1' : '0')};
    transition: ${props => (props.isNavOpen ? 'opacity 0s ease-out 0.3s' : null)};
    vertical-align: top;
    & > svg {
      position: absolute;
      left: 10px;
      top: 10px;
    }
  }
`
const NavBtnText = styled.span`
  font: 0/0 a;
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  height: 100%;
  padding-right: 250px;
  @media (max-width: 1360px) {
    padding-right: ${props => (props.isLogged ? '120px' : '220px')};
  }
  @media ${props => props.theme.media_md} {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    width: 70%;
    height: 100%;
    padding-right: 0;
    background-color: #222222;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    opacity: ${props => (props.isNavOpen ? '1' : '0')};
    transform: ${props => (props.isNavOpen ? 'translateX(0%)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-out 0s, opacity 0s linear 0s;
  }
`
const NavList = styled.div`
  height: 100%;
  color: ${props => (props.observeoverview ? '#ffffff' : '#111111')};
  transition: color 0.3s ease-in-out 0s;
  @media ${props => props.theme.media_md} {
    flex: 1 0 auto;
    height: auto;
    padding: 113px 15px 0;
    color: #ffffff;
  }
`
const switchIcon = props => {
  switch (props) {
    case '#overview':
      return `url(${ImgIconOverview})`
      break
    case '#products':
      return `url(${ImgIconProducts})`
      break
    case '#experience':
      return `url(${ImgIconExperience})`
      break
    case '#price':
      return `url(${ImgIconPrice})`
      break
    case '#reference':
      return `url(${ImgIconReference})`
      break
    case '#contactus':
      return `url(${ImgIconContactus})`
      break
    default:
      break
  }
}
const Item = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-contents: center;
  height: 100%;
  padding: 0 25px;
  color: inherit;
  font-size: ${rem('20px')};
  letter-spacing: -0.8px;
  vertical-align: middle;
  text-decoration: none;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    display: none;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    background-image: ${props => switchIcon(props.href)};
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  @media (max-width: 1360px) {
    padding: 0 15px;
    font-size: ${rem('18px')};
  }
  @media ${props => props.theme.media_lg} {
    padding: 0 5px;
    font-size: ${rem('16px')};
  }
  @media ${props => props.theme.media_md} {
    display: block;
    height: auto;
    padding: 15px 15px 15px 35px;
    &::before {
      display: block;
    }
  }
`
const UserList = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100px;
  @media ${props => props.theme.media_md} {
    right: auto;
    left: 0;
    top: 0;
    width: calc(100% - 30px);
    margin: 0 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #555555;
  }
`

const Menu = styled.nav`
  position: fixed;
  right: 150px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    right: 3px;
    top: 25px;
    bottom: 25px;
    display: block;
    width: 1px;
    background-color: ${props => (props.observeoverview ? '#a9adae' : 'rgba(0,0,0,0.6)')};
    transform: translateX(-0.5px);
    transition: background-color 0.3s ease-in-out 0s;
  }
  @media ${props => props.theme.media_md} {
    display: none;
  }
`
const MenuItem = styled.a`
  position: relative;
  display: block;
  color: ${props => (props.observeoverview ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0,0,0,0.6)')};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-decoration: none;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background-color: ${props => (props.observeoverview ? '#a9adae' : 'rgba(0,0,0,0.6)')};
    transition: background-color 0.3s ease-in-out 0s;
  }
  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    display: block;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border: 1px solid ${props => (props.observeoverview ? '#a9adae' : 'rgba(0,0,0,0.6)')};
    border-radius: 50%;
    opacity: ${props => (props.isActive ? '1' : '0')};
    transition: border 0.3s ease-in-out 0s, opacity 0.2s linear 0s;
  }
`
const MenuText = styled.span`
  position: relative;
  display: block;
  padding: 15px 45px 15px 0;
  transform: translateX(50px);
  opacity: 0;
  text-shadow: ${props =>
    props.observeoverview ? null : '0 0 10px rgba(255, 255, 255, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 10px rgba(255, 255, 255, 1)'};
  @media ${props => props.theme.media_xxl} {
  }
  ${MenuItem}:hover & {
    transform: translateX(0px);
    opacity: 1;
    transition: transform 0.3s ease-out 0s, opacity 0.3s ease-out 0.1s;
  }
`

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    const {
      className,
      observeOverview,
      observeProducts,
      observeExperience,
      observePrice,
      observeReference,
      observeContactus,
      isMain,
      user,
    } = this.props

    this.state = {
      className: className,
      observeOverview: false,
      observeProducts: observeProducts,
      observeExperience: observeExperience,
      observePrice: observePrice,
      observeReference: observeReference,
      observeContactus: observeContactus,
      isLogged: user.isLogged,
      isNavOpen: false,
      isMobileSize: false,
      isMain: isMain,
    }
  }

  handleNavOpen = e => {
    this.setState({
      isNavOpen: true,
    })
  }
  handleNavClose = e => {
    this.setState({
      isNavOpen: false,
    })
  }

  handleWindowResize = e => {
    if (window.innerWidth > 768) {
      this.setState({
        isMobileSize: false,
      })
    } else {
      this.setState({
        isMobileSize: true,
      })
    }
    if (window.innerWidth > 768 || !this.state.isNavOpen) {
      return
    }
    this.handleNavClose()
  }

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener('DOMContentLoaded', e => {
      this.handleWindowResize(e)
    })
    window.addEventListener('resize', e => this.handleWindowResize(e))
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.observeOverview !== this.props.observeoverview) {
      this.setState({
        observeOverview: this.props.observeoverview,
        isLogged: this.props.user.isLogged,
      })
    }
    if (prevState.isLogged !== this.props.user.isLogged) {
      this.setState({
        isLogged: this.props.user.isLogged,
      })
    }
  }

  render() {
    const {className, isLogged, observeOverview, isNavOpen, isMobileSize, isMain} = this.state
    const {observeProducts, observeExperience, observePrice, observeReference, observeContactus} = this.props

    return (
      <>
        <Wrap className={className} observeoverview={observeOverview} isMain={isMain}>
          <WrapInner>
            <Logo>
              <LogoLink observeoverview={observeOverview ? 'true' : 'false'} to="/">
                IBOT
              </LogoLink>
            </Logo>
            <NavBtnOpen onClick={e => this.handleNavOpen(e)}>
              <MdMenu />
              <NavBtnText>메뉴열기</NavBtnText>
            </NavBtnOpen>
            <Nav isNavOpen={isNavOpen} isLogged={isLogged}>
              <NavList observeoverview={observeOverview}>
                <Item href="#overview" onClick={e => this.handleNavClose()}>
                  아이봇 소개
                </Item>
                <Item href="#products" onClick={e => this.handleNavClose()}>
                  상품소개
                </Item>
                <Item href="#experience" onClick={e => this.handleNavClose()}>
                  체험하기
                </Item>
                {/* <Item href="#price" onClick={e => this.handleNavClose()}>
                  요금안내
                </Item> */}
                <Item href="#reference" onClick={e => this.handleNavClose()}>
                  고객사
                </Item>
                <Item href="#contactus" onClick={e => this.handleNavClose()}>
                  고객센터
                </Item>
              </NavList>
              <UserList>
                <BtnLogin isMain={isMain} observeOverview={observeOverview} />
              </UserList>
              {!isMobileSize ? null : <Gnb as={'aside'} observeoverview={observeOverview} isMain={isMain} />}
            </Nav>
            <NavBtnClose isNavOpen={isNavOpen} onClick={e => this.handleNavClose(e)}>
              <MdClear />
              <NavBtnText>메뉴닫기</NavBtnText>
            </NavBtnClose>
            {/* <LinkTest style={{position: 'fixed', left: '0px', bottom: '200px'}} /> */}
          </WrapInner>

          <Menu id="menu" observeoverview={observeOverview}>
            <MenuItem observeoverview={observeOverview} isActive={observeOverview} href="#overview">
              <MenuText observeoverview={observeOverview}>아이봇 소개</MenuText>
            </MenuItem>
            <MenuItem observeoverview={observeOverview} isActive={observeProducts} href="#products">
              <MenuText observeoverview={observeOverview}>상품소개</MenuText>
            </MenuItem>
            <MenuItem observeoverview={observeOverview} isActive={observeExperience} href="#experience">
              <MenuText observeoverview={observeOverview}>체험하기</MenuText>
            </MenuItem>
            {/* <MenuItem observeoverview={observeOverview}
            isActive={observePrice} href="#price">
              <MenuText>요금안내</MenuText>
            </MenuItem> */}
            <MenuItem observeoverview={observeOverview} isActive={observeReference} href="#reference">
              <MenuText observeoverview={observeOverview}>고객사</MenuText>
            </MenuItem>
            <MenuItem observeoverview={observeOverview} isActive={observeContactus} href="#contactus">
              <MenuText observeoverview={observeOverview}>고객센터</MenuText>
            </MenuItem>
          </Menu>
        </Wrap>
        {!isMobileSize ? <Gnb observeoverview={observeOverview} isMain={isMain} /> : null}
      </>
    )
  }
}

export default connect(state => ({
  user: state.user,
}))(Header)
