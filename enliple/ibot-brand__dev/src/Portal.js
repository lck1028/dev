import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal')

class ModalPortal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

// const ModalPortal = ({children}) => {
//   const el = document.getElementById('modal')
//   return ReactDOM.createPortal(children, el)
// }

export default ModalPortal
