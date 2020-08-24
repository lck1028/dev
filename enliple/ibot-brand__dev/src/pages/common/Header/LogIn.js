import axios from 'axios'
import qs from 'qs'
import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {isMobile} from 'react-device-detect'
import {MdKeyboardArrowRight} from 'react-icons/md'

import {actionUserLogin, actionUserLogout} from '../../../redux/actions'

import {API} from '../../../../src/common/services'
import {Bridge} from '../../../utils/bridgeLink'
import {NotoSans} from '../../../assets/styled/fonts'
import rem from '../../../assets/styled/rem'
import ImgIconMypage from '../../../assets/images/main/icon_my_white.png'
import ImgIconLogin from '../../../assets/images/main/icon_login_white.png'
import ImgIconJoin from '../../../assets/images/main/icon_join_white.png'
import ImgIconLogout from '../../../assets/images/main/icon_logout_white.png'

const LoginArea = styled.div`
  padding-bottom: ${props => (props.isMain ? '50px' : '0')};
`

const MyPage = styled.a`
  display: block;
  width: 100px;
  height: 100px;
  background-color: ${props => (props.observeoverview == 'true' ? 'rgba(255, 255, 255, 0.2)' : '#111111')};
  background-image: url(${ImgIconMypage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
  text-decoration: none;
  vertical-align: top;
  transition: background-color 0.3s ease-in-out 0s;
  cursor: pointer;
  @media ${props => props.theme.media_md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: auto;
    padding: 5px 0;
    background-color: transparent;
    background-image: none;
    color: #ffffff;
    font-size: ${rem('16px')};
    font-weight: 700;
    line-height: 1.4;
    & > svg {
      font-size: ${rem('24px')};
    }
  }
`
const MyPageText = styled.span``
const MyPageTextInner = styled.span`
  color: #999999;
  @media ${props => props.theme.media_md} {
    font-size: ${rem('14px')};
  }
`

const Logout = styled.button`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100px;
  height: 50px;
  padding: 0 5px 0 40px;
  background-color: ${props => (props.observeoverview == 'true' ? 'rgba(255, 255, 255, 0.2)' : '#111111')};
  color: #ffffff;
  text-decoration: none;
  vertical-align: top;
  line-height: 50px;
  transition: background-color 0.3s ease-in-out 0s;
  cursor: pointer;
  transform: translateY(-50px);
  opacity: 0;
  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    display: block;
    width: 30px;
    height: 30px;
    background-image: url(${ImgIconLogout});
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  ${LoginArea}:hover & {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.3s ease-out 0s, opacity 0.3s ease-out 0.2s;
  }
  @media ${props => props.theme.media_md} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 15px;
    margin-left: 0;
    padding: 5px 0;
    background-color: transparent;
    background-image: none;
    border: 1px solid #ffffff;
    border-radius: 4px;
    text-align: center;
    color: #ffffff;
    font-size: ${rem('16px')};
    font-weight: 700;
    line-height: 1.4;
    transform: translateY(0);
    opacity: 1;
    &::before {
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      background-size: cover;
    }
  }
`

const Login = styled(Link)`
  ${NotoSans}
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: ${props => (props.observeoverview == 'true' ? 'rgba(255, 255, 255, 0.2)' : '#111111')};
  background-image: url(${ImgIconLogin});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
  text-decoration: none;
  vertical-align: top;
  transition: background-color 0.3s ease-in-out 0s;

  @media ${props => props.theme.media_md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: auto;
    padding: 12px 0;
    background-color: transparent;
    background-image: none;
    color: #ffffff;
    font-size: ${rem('16px')};
    font-weight: 700;
    line-height: 1.4;
  }
`

const LoginText = styled.span`
  display: inline-block;
`

const Join = styled(Link)`
  ${NotoSans}
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-left: 5px;
  background-color: ${props => (props.observeoverview == 'true' ? 'rgba(255, 255, 255, 0.2)' : '#111111')};
  background-image: url(${ImgIconJoin});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
  text-decoration: none;
  vertical-align: top;
  transition: background-color 0.3s ease-in-out 0s;

  @media ${props => props.theme.media_md} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin-top: 10px;
    margin-left: 0;
    padding: 5px 0;
    background-color: transparent;
    background-image: none;
    border: 1px solid #ffffff;
    border-radius: 4px;
    text-align: center;
    color: #ffffff;
    font-size: ${rem('16px')};
    font-weight: 700;
    line-height: 1.4;
  }
`

const JoinText = styled.span`
  display: inline-block;
`

const Arrow = styled(MdKeyboardArrowRight)`
  display: none;
  font-size: ${rem('24px')};
  @media ${props => props.theme.media_md} {
    display: block;
  }
`

class LogIn extends React.PureComponent {
  constructor(props) {
    super(props)
    const {className, observeOverview, isMain} = this.props
    this.state = {
      className: className,
      observeOverview: observeOverview,
      isLogged: this.props.user.isLogged,
      isMain: isMain,
    }
  }

  handleMyPagelink = async e => {
    e.preventDefault()
    const result = await API.getEncData({accessToken: 'Bearer ' + this.props.user.oauthToken.data.token})
    window.open(Bridge.store(result, `${isMobile ? 'mobile/mypage/' : 'mypage/'}`), '_blank', 'noopener,noreferrer')
  }

  handleLogout = async e => {
    const {userLogout} = this.props
    const {isLogged, userName, oauthToken} = this.props.user
    if (!isLogged) {
      return
    }

    const data = {
      userId: userName,
      token: oauthToken.data.token,
    }
    userLogout(data, {
      cbSuccess: () => {
        console.log('로그아웃성공')
        location.reload(true)
      },
      cbFailure: () => {
        console.log('로그아웃실패')
      },
    })
  }

  componentDidMount() {
    console.log(this.props.user)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLogged !== this.props.user.prevState) {
      this.setState({
        isLogged: this.props.user.isLogged,
      })
    }
  }

  render() {
    const {className, isLogged, isMain} = this.state
    const {observeOverview} = this.props

    return (
      <>
        {isLogged ? (
          <>
            <LoginArea isMain={isMain}>
              <MyPage
                observeoverview={observeOverview ? 'true' : 'false'}
                onClick={e => {
                  this.handleMyPagelink(e)
                }}
              >
                <MyPageText>
                  {this.props.user.userName}님 <MyPageTextInner>환영합니다!</MyPageTextInner>
                </MyPageText>
                <MdKeyboardArrowRight />
              </MyPage>
              <Logout
                observeoverview={observeOverview ? 'true' : 'false'}
                onClick={e => {
                  this.handleLogout(e)
                }}
              >
                로그아웃
              </Logout>
            </LoginArea>
          </>
        ) : (
          <>
            <Login to="/login" observeoverview={observeOverview ? 'true' : 'false'}>
              <LoginText>로그인을 해주세요.</LoginText>
              <Arrow />
            </Login>
            <Join to="/join" observeoverview={observeOverview ? 'true' : 'false'}>
              <JoinText>회원가입</JoinText>
            </Join>
          </>
        )}
      </>
    )
  }
}

const loginStateToProps = state => ({
  user: state.user,
})
const loginDispatchToProps = dispatch => ({
  userLogin: (data, rest) => dispatch(actionUserLogin.request(data, rest)),
  userLogout: (data, rest) => dispatch(actionUserLogout.request(data, rest)),
})

export default connect(loginStateToProps, loginDispatchToProps)(LogIn)
