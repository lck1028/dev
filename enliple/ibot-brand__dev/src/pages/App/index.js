import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import {ThemeProvider} from 'styled-components'

import StyledApp from '../../assets/styled/app'
import Theme from '../../assets/styled/theme'
import eConst from '../../common/constants'
import BaseView from '../common/BaseView'
import Main from '../views/Main'
import Customer from '../views/Customer'
import {Login, Find, Join, MyPage, Bridge} from '../views/Customer/pages'
import APITest from '../common/Header'
import Notice from '../views/Notice'
import Event from '../views/Event'

//테스트페이지
import TestModal from '../views/TestPage/TestModal'

class App extends React.PureComponent {
  render() {
    return (
      <>
        <StyledApp theme={Theme} />
        <ThemeProvider theme={Theme}>
          <Router>
            <Switch>
              {/* <Route exact path={eConst.getPublicPath() + ':subMenu'}></Route> */}

              <Route exact path="/testmodal" component={TestModal} />

              <Route exact path="/API" component={APITest} />
              <Route path={['/login', '/find', '/join', '/mypage']} component={Customer} />
              <Route exact path={'/bridge'} component={Bridge} />

              {/* <Route path="/notice/:id" component={NoticeDetail} /> */}
              <Route path={'/notice'} component={Notice} />
              <Route path={'/event'} component={Event} />

              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </>
    )
  }
}

export default App
