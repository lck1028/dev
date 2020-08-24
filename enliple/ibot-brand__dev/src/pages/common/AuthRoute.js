import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import eConst from '../../common/constants'

export default class AuthRoute extends React.PureComponent {
  render() {
    const {children, user, ...rest} = this.props
    return (
      <Route
        {...rest}
        render={props =>
          user.isLogged ? (
            React.cloneElement(children, props)
          ) : (
            <Redirect
              to={{
                pathname: eConst.getPublicPath() + 'login',
                state: {from: props.location},
              }}
            />
          )
        }
      />
    )
  }
}
