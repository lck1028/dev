import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {modalOpen, modalClose} from '../../../redux/actions'
import {API} from '../../../common/services'

const CustomModal = props => {
  console.log('%c CustomModal', 'font-size:30px', props)
  return (
    <>
      <div>
        커스텀 모달임
        <br />
        <br />
        <br />
        아무꺼나 다떄려 넣을수도 있고 <br />
        <br />
        개발자 맘대로 넣을수 있슴
        <br />
        <br />
        <div style={{border: '1px solid red', padding: '10px'}}>
          <button
            onClick={e => {
              alert('내가 원하는 fn을 짜보자')
              props.onModalClose({
                isOpen: false,
              })
            }}
          >
            콜백 fn 타고 모달 닫음
          </button>
          <br />
          <br />
          <button
            onClick={e => {
              alert('내가 원하는 fn을 짜보자')
              // isOpen: false 값으로 포달을 닫는거임
              // props.onModalClose({
              //   isOpen: false,
              // })
            }}
          >
            콜백 fn 타고 모달 닫지 않음
          </button>
          <br />
          <br />
          <button
            onClick={e => {
              props.onModalClose({
                isOpen: false,
              })
            }}
          >
            아무것도 안하고 닫는 버튼임
          </button>
        </div>
      </div>
    </>
  )
}

const TestComp = props => {
  return (
    <>
      <div style={{border: '1px solid red', height: '2000px'}}>컴포넌트도 들어가??</div>
    </>
  )
}

class TestModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alertTitle: '얼럿 제목임 제목임', //값이 없어도됨
      alertDescription: '얼럿 내용임 내용임<br />내용내용 블라블라<strong>여기는 tag도 넣을수 잇슴</strong>오오 개쩐다', //값이 없어도됨
      confirmTitle: '컴펌 제목임 제목임', //값이 없어도됨
      confirmDescription: '컴펌 내용임 내용임<br />내용내용 블라블라<strong>여기는 tag도 넣을수 잇슴</strong>오오 개쩐다', //값이 없어도됨
    }
  }

  ///////////////////////////
  testAlertModal = e => {
    const {alertTitle, alertDescription} = this.state
    this.props.onModalOpen(
      {
        isOpen: true,
        cbOpen: () => {
          alert('얼럿모달 오픈콜백')
        },
      },
      {type: 'alert', title: alertTitle, description: alertDescription}
    )
    this.props.onModalClose({
      cbConfirm: () => {
        alert('얼럿모달 닫기콜백')
      },
    })
  }
  testConfirmModal = e => {
    const {confirmTitle, confirmDescription} = this.state
    this.props.onModalOpen(
      {
        isOpen: true,
        cbOpen: () => {
          alert('컴펌모달 오픈콜백')
        },
      },
      {type: 'confirm', title: confirmTitle, description: confirmDescription}
    )
    this.props.onModalClose({
      cbConfirm: () => {
        alert('얼럿모달 확인 콜백')
      },
      cbCancel: () => {
        alert('얼럿모달 취소 콜백')
      },
    })
  }
  testCustomModal = e => {
    this.props.onModalOpen(
      {
        isOpen: true,
        cbOpen: () => {
          alert('커스텀 모달 오픈콜백')
        },
      },
      {type: 'custom', customComponent: <CustomModal {...this.props} />}
    )
    this.props.onModalClose({
      cbConfirm: () => {
        alert('커스텀 모달 확인 콜백')
      },
      cbCancel: () => {
        alert('커스텀 모달 취소 콜백')
      },
    })
  }

  ///////////////

  render() {
    return (
      <>
        <div style={{border: '1px solid red', padding: '20px'}}>
          <button onClick={e => this.testAlertModal()}>얼럿모달</button>
          <button onClick={e => this.testConfirmModal()}>컴펌모달</button>
          <button onClick={e => this.testCustomModal()}>커스텀모달</button>
        </div>
      </>
    )
  }
}

const modalStateToProps = state => ({
  modal: state.modal,
})
const modalDispatchToProps = dispatch => ({
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})
export default connect(modalStateToProps, modalDispatchToProps)(TestModal)
