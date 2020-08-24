import React from 'react'
import {Link} from 'react-router-dom'
import LinkTest from '../../LinkTest'

class MyPage extends React.PureComponent {
  constructor(props) {
    super(props)
    const {className} = this.props
    this.state = {
      className: className,
    }
  }
  render() {
    const {className} = this.state
    return (
      <>
        <div className={className}>
          Mypage
          <br />
          <br />
        </div>
      </>
    )
  }
}

export default MyPage
