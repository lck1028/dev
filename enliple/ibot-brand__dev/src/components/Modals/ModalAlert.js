import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

import {modalOpen, modalClose} from '../../redux/actions'

import rem from '../../assets/styled/rem'

const Article = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Header = styled.header`
  flex: 0 0 auto;
  padding: 20px;
  font-size: ${rem('24px')};
`
const Title = styled.h3``
const Body = styled.div`
  flex: 0 1 auto;
  padding: 20px;
  font-size: ${rem('20px')};
  overflow-y: auto;
`
const BodyInner = styled.div``
const Description = styled.p`
  white-space: pre-wrap;
`
const Btns = styled.footer`
  flex: 0 0 auto;
  padding: 20px 10px;
  text-align: center;
`
const Btn = styled.button`
  min-width: 100px;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #6e4eb1;
  color: #ffffff;
  font-size: ${rem('18px')};
`

const PortalClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-contents: center;
  width: 24px;
  height: 24px;
  color: #000000;
  font-size: ${rem('24px')};
`

const ModalAlert = props => {
  const {title, description, onModalClose} = props

  return (
    <>
      <Article>
        {title && (
          <Header>
            <Title>{title}</Title>
          </Header>
        )}
        <Body>{typeof description == 'object' ? description : <Description dangerouslySetInnerHTML={{__html: description}} />}</Body>
        <Btns>
          <Btn
            onClick={e => {
              props.modal.cbConfirm !== null ? props.modal.cbConfirm() : null
              onModalClose({
                isOpen: false,
              })
            }}
          >
            확인
          </Btn>
        </Btns>
      </Article>
      <PortalClose
        onClick={e => {
          props.modal.cbConfirm !== null ? props.modal.cbConfirm() : null
          onModalClose({
            isOpen: false,
          })
        }}
      >
        <MdClose />
      </PortalClose>
    </>
  )
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
export default connect(modalStateToProps, modalDispatchToProps)(ModalAlert)
