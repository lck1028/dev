import React from 'react'
import _ from 'lodash'

//import Header from '../common/Header'
import Dashboard from '../views/Dashboard'

export default class BaseView extends React.PureComponent {
  render() {
    const subMenu = _.get(this, 'props.match.params.subMenu', '')
    return (
      <>
        {/* <Header subMenu={subMenu} /> */}
        <Dashboard subMenu={subMenu} />
      </>
    )
  }
}
