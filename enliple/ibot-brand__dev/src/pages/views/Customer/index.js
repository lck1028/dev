import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {isMobile, isIE, isIOS} from 'react-device-detect'

import {Login, Find, Join, MyPage} from './pages'
import {NotoSans} from '../../../assets/styled/fonts'

import Gnb from '../../common/Gnb'
import Footer from '../../common/Footer'
import ImgLogoDefault from '../../../assets/images/main/logo_default.png'

const Article = styled.article`
  ${NotoSans}
  display:flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 34px 40px 35px;
  border-bottom: 1px solid #cccccc;
  @media ${props => props.theme.media_md} {
    padding: 2px 10px 1px;
  }
`
const HeaderInner = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`
const Logo = styled.h1``

const Home = styled(Link)`
  display: block;
  width: 95px;
  height: 30px;
  background-image: url(${ImgLogoDefault});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
  @media ${props => props.theme.media_md} {
    width: 100px;
    height: 44px;
    margin: 0 auto;
  }
`

const Main = styled.main`
  flex: 1 0 auto;
`
const FooterWrap = styled.div`
  flex: 0 0 auto;
`

class Customer extends React.Component {
  constructor(props) {
    super(props)
    const {className} = this.props
    this.state = {
      isLogged: false,
    }
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {match} = this.props
    return (
      <>
        <Article>
          <Header>
            <HeaderInner>
              <Logo>
                <Home to={'/'} />
                {/* <span>로그인여부 : {String(this.props.user.isLogged)}</span> */}
              </Logo>
            </HeaderInner>
          </Header>

          <Main as={isIE ? 'div' : null}>
            {match.path === '/login' && <Login {...this.props} />}
            {match.path === '/find' && <Find />}
            {match.path === '/join' && <Join />}
            {match.path === '/mypage' && <MyPage />}
          </Main>
          <Gnb />
          <FooterWrap>
            <Footer type={'customer'} />
          </FooterWrap>
        </Article>
      </>
    )
  }
}

const userStateToProps = state => ({
  user: state.user,
})

export default connect(userStateToProps)(Customer)
