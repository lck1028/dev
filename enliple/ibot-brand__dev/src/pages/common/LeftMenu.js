/* eslint-disable indent */
import React from 'react'

import {cBind} from '../../common/bind'

export default class LeftMenu extends React.PureComponent {
  constructor(props) {
    super(props)
    cBind(this, styles)
  }
  render() {
    const lnbList = []
    return (
      <div className={this.cx('leftMenu-lnb')}>
        <ul>{lnbList}</ul>
      </div>
    )
  }
}
