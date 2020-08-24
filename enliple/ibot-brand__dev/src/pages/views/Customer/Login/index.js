import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {connect} from 'react-redux'

import {actionUserLogin, actionUserLogout, modalOpen, modalClose} from '../../../../redux/actions'

import LinkTest from '../../LinkTest'
import rem from '../../../../assets/styled/rem'

import {NotoSans} from '../../../../assets/styled/fonts'
import ImgLogoDefault from '../../../../assets/images/main/logo_default.png'

const Wrap = styled.div`
  //height: 100vh;
`
const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: inherit;
  padding: 100px;
  @media ${props => props.theme.media_md} {
    padding: 50px 20px;
  }
`
const Logo = styled.h2`
  width: 95px;
  height: 30px;
  margin: 0 auto;
  background-image: url(${ImgLogoDefault});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
`
const Form = styled.form`
  margin: 60px 0 0;
`
const Legend = styled.legend``
const InputWrap = styled.div`
  text-align: center;
`
const InputBox = styled.span`
  display: block;
  max-width: 400px;
  margin: 20px auto 0;
  &:first-child {
    margin-top: 0;
  }
`
const Input = styled.input`
  ${NotoSans}
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  color: #111111;
  font-size: ${rem('18px')};
`
const GuildText = styled.p`
  margin-top: 15px;
  color: #ffba00;
  font-size: ${rem('14px')};
  text-align: left;
`
const Btns = styled.div`
  margin-top: 20px;
  text-align: center;
`
const Btn = styled.button`
  min-width: 200px;
  margin: 0 5px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #6e4eb1;
  color: #ffffff;
  font-size: ${rem('14px')};
  font-weight: 500;
`
const JoinWrap = styled.div`
  margin-top: 20px;
  text-align: center;
`
const JoinGuide = styled.mark`
  display: inline-block;
  padding-right: 15px;
  color: #b9b9b9;
  font-size: ${rem('14px')};
`
const JoinLink = styled(Link)`
  color: #6e4eb1;
`

class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    const {history, location, match} = this.props
    const {isLogged} = this.props.user
    this.state = {
      isLogged: isLogged,
      userId: '',
      userPw: '',
      redirect: location.state == undefined ? null : location.state.redirect,
    }
    this.refInputId = React.createRef()
  }

  handleLogin = async e => {
    e.preventDefault()
    const {userLogin, onModalOpen, onModalClose} = this.props
    const {userId, userPw} = this.state
    const data = {
      userId: userId,
      userPass: userPw,
    }
    if (userId == '') {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: ' ', description: 'ID를 입력해주세요'}
      )
      onModalClose({
        cbConfirm: () => {
          this.refInputId.current.focus()
        },
      })
      return
    }

    userLogin(data, {
      cbSuccess: () => {
        console.log('로그인성공')
      },
      cbFailure: () => {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: ' ', description: '계정정보를 다시 확인해주세요.'}
        )
        //alert('계정정보를 다시 확인해주세요.')
      },
    })
  }

  handleIdChange = e => {
    this.setState({
      userId: e.target.value,
    })
  }
  handlePasswordChange = e => {
    this.setState({
      userPw: e.target.value,
    })
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {user, modal} = this.props
    const {className, redirect} = this.state

    if (user.isLogged) {
      return redirect == null ? <Redirect to={'/'} /> : <Redirect to={redirect} />
    }
    return (
      <>
        <Wrap>
          <WrapInner>
            <Logo>I-BOT</Logo>
            {/* <Form onSubmit={e => this.handleLogin(e)}> */}
            <Form onSubmit={e => this.handleLogin(e)} method={'POST'}>
              <Legend>I-BOT 로그인</Legend>
              <InputWrap>
                <InputBox>
                  <Input
                    type={'text'}
                    placeholder={'ID'}
                    onChange={e => {
                      this.handleIdChange(e)
                    }}
                    ref={this.refInputId}
                  />
                </InputBox>
                <InputBox>
                  <Input
                    type={'password'}
                    placeholder={'PASSWORD'}
                    onChange={e => {
                      this.handlePasswordChange(e)
                    }}
                  />
                </InputBox>
              </InputWrap>
              <GuildText>
                회원이실 경우 아이디, 비밀번호를 통해 로그인해주세요.
                <br />
                계정정보가 없다면 아래 회원가입버튼을 통해 가입해주세요.
              </GuildText>
              <Btns>
                <Btn
                  onClick={e => {
                    this.handleLogin(e)
                  }}
                >
                  로그인
                </Btn>
              </Btns>
              <JoinWrap>
                <JoinGuide>아이봇 아이디가 없으신가요?</JoinGuide>
                <JoinLink to={'/join'}>회원가입</JoinLink>
              </JoinWrap>
            </Form>
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

const loginStateToProps = state => ({
  user: state.user,
  modal: state.modal,
})
const loginDispatchToProps = dispatch => ({
  userLogin: (data, rest) => dispatch(actionUserLogin.request(data, rest)),
  userLogout: (data, rest) => dispatch(actionUserLogout.request(data, rest)),
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})

export default connect(loginStateToProps, loginDispatchToProps)(Login)
