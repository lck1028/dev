import React from 'react'
import {Link} from 'react-router-dom'

class LinkTest extends React.PureComponent {
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
        <div style={this.props.style}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/find">Find</Link>
          <Link to="/join">Join</Link>
          <Link to="/mypage">MyPage</Link>
          <Link to="/API">API</Link>

          <Link to="/testmodal">TestModal</Link>
        </div>
      </>
    )
  }
}

export default LinkTest
