import React from 'react'
import {Link} from 'react-router-dom'
import LinkTest from '../../LinkTest'

class Find extends React.PureComponent {
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
        {/* <LinkTest /> */}
        <div className={className}>
          Find
          <br />
          <br />
        </div>
      </>
    )
  }
}

export default Find
