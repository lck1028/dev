//UI 변경 이슈가 있을수 있으므로 header,footer 함께 관리함

import React from 'react'
import {Switch} from 'react-router-dom'
import {Route, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'
import {isMobile, isIE, isIOS} from 'react-device-detect'

import {API} from '../../../common/services'
import Table from '../../../components/elements/Table'
import {NotoSans} from '../../../assets/styled/fonts'

import Gnb from '../../common/Gnb'
import EventList from './list'
import EventDetail from './detail'

import LinkTest from '../LinkTest'
import Footer from '../../common/Footer'
import Login from '../../common/Header/LogIn'
import DateConverter from '../../../components/modules/DateConverter'
import EmType from '../../../components/modules/EmType'
import Pagination from '../../../components/modules/Pagination'

import ImgLogoDefault from '../../../assets/images/main/logo_default.png'

const Article = styled.article`
  ${NotoSans}
  display:flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`
const Header = styled.header`
  flex: 0 0 auto;
  padding: 34px 40px 35px;
  box-sizing: border-box;
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
const LoginBox = styled.div`
  position: absolute;
  right: 90px;
  top: 0;
  @media ${props => props.theme.media_md} {
    position: static;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

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
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`
const FooterWrap = styled.div`
  flex: 0 0 auto;
`

const EventTable = styled(Table)``

class Event extends React.Component {
  constructor(props) {
    super(props)
    const {match, user} = this.props
    this.state = {
      match: match,
      user: user,
      listUrl: match.path,
    }
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {match, user, listUrl} = this.state

    return (
      <>
        <Article>
          <Header>
            <HeaderInner>
              <Logo>
                <Home to={'/'} />
                {/* <span>로그인여부 : {String(user.isLogged)}</span> */}
              </Logo>
            </HeaderInner>
          </Header>
          <LoginBox>
            <Login />
          </LoginBox>
          <Main as={isIE ? 'div' : null}>
            <Route exact path={match.path} component={() => <EventList listUrl={listUrl} />} />
            <Route exact path={`${match.path}/:id`} component={() => <EventDetail listUrl={listUrl} />} />
          </Main>
          <Gnb />
          <FooterWrap>
            <Footer type={'event'} />
          </FooterWrap>
        </Article>
      </>
    )
  }
}

const EventeWithRouter = withRouter(Event)
const eventStateToProps = state => ({
  user: state.user,
  modal: state.modal,
})

export default Event
