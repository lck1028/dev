import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'

import {modalOpen, modalClose} from '../../../redux/actions'
import Portal from '../../../Portal'
import ModalAlert from '../../Modals/ModalAlert'
import ModalConfirm from '../../Modals/ModalConfirm'

import {NotoSans} from '../../../assets/styled/fonts'
import rem from '../../../assets/styled/rem'

const Wrap = styled.div`
  ${NotoSans}
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`

const Dim = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`
const WrapInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
`
const Contents = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 10px;
  background-color: #ffffff;
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
    const {isOpen, modalType} = this.props.modal
    this.state = {
      isOpen: isOpen,
      type: modalType,
      title: '',
      description: '',
      customComponent: {},
    }
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const {isOpen, modalType, title, description, customComponent} = this.props.modal
    if (prevState.isOpen !== isOpen) {
      this.setState({
        isOpen: isOpen,
        type: modalType,
        title: title,
        description: description,
        customComponent: modalType == 'custom' ? customComponent : null,
      })
    }
  }

  modalTypeRender = type => {
    const {title, description} = this.state

    switch (type) {
      case 'alert':
        return <ModalAlert title={title} description={description} />
        break
      case 'confirm':
        return <ModalConfirm title={title} description={description} />
        break
      case 'custom':
        return this.state.customComponent
        break
      default:
        return <ModalAlert />
        break
    }
  }

  render() {
    const {children, onModalClose} = this.props
    const {type} = this.state

    if (!this.props.modal.isOpen) {
      return null
    }
    return (
      <>
        <Portal>
          <Wrap>
            <Dim></Dim>
            <WrapInner>
              <Contents>{this.modalTypeRender(type)}</Contents>
            </WrapInner>
          </Wrap>
        </Portal>
      </>
    )
  }
}

//export default Modal
const modalStateToProps = state => ({
  modal: state.modal,
})
const modalDispatchToProps = dispatch => ({
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})
export default connect(modalStateToProps, modalDispatchToProps)(Modal)
