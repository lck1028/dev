import React from 'react'
import {Link} from 'react-router-dom'

import {cBind} from '../../common/bind'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <Link to="/">
          <button>메인</button>
        </Link>
        <Link to="/dashboard">
          <button>대시보드</button>
        </Link>
      </header>
    )
  }
}
