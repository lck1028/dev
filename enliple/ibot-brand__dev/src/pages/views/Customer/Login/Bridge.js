import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import styled, {css} from 'styled-components'
import {connect} from 'react-redux'
import queryString from 'query-string'
import _ from 'lodash'

import {actionSetUser, modalOpen, modalClose} from '../../../../redux/actions'
import {API} from '../../../../../src/common/services'
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

class Bridge extends React.PureComponent {
  constructor(props) {
    super(props)
    const {history, location, match} = this.props
    const {isLogged} = this.props.user
    this.state = {
      isLogged: isLogged,
      enc_data: queryString.parse(location.search).enc_data,
      redirect: queryString.parse(location.search).redirect,
    }
  }
  async componentDidMount() {
    const setEncData = {
      enc_data: this.state.enc_data,
    }
    const result = await API.getBridgeProc(JSON.stringify(setEncData))

    if (result.respcode === 1 || result.respcode === 2 || result.respcode === 3) {
      this.props.onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '알림', description: '정상적인 접근이 아닙니다.'}
      )
      setTimeout(() => {
        location.href = '/'
      }, 1000)
      return
    }
    if (result.respcode === 0) {
      this.props.userSet({
        userId: result.userName,
        accessToken: result.token,
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLogged !== this.props.user.isLogged) {
      this.setState({isLogged: this.props.user.isLogged})
    }
  }

  render() {
    const {user, modal} = this.props
    const {className, isLogged, redirect} = this.state
    const getQueryString = queryString.parse(location.search)
    if (_.isEmpty(getQueryString)) {
      return <Redirect to={'/'} />
    } else {
      return (
        <>
          <Wrap>
            <WrapInner>
              <Logo>I-BOT</Logo>
              <br />
              <br />
              <br />
              {redirect === undefined ? <Redirect to={'/'} /> : <Redirect to={redirect} />}
            </WrapInner>
          </Wrap>
        </>
      )
    }
  }
}

const bridgeStateToProps = state => ({
  user: state.user,
  modal: state.modal,
})
const bridgeDispatchToProps = dispatch => ({
  userLogin: (data, rest) => dispatch(actionUserLogin.request(data, rest)),
  userLogout: (data, rest) => dispatch(actionUserLogout.request(data, rest)),
  userSet: data => dispatch(actionSetUser(data)),
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})

export default connect(bridgeStateToProps, bridgeDispatchToProps)(Bridge)
