import _ from 'lodash'

import {MODAL_OPEN, MODAL_CLOSE} from '../actions'

const initialState = {
  isOpen: false,
  modalType: null,
  cbOpen: null,
  cbConfirm: null,
  cbCancel: null,
}

function modal(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: action.modalProps.isOpen,
        title: action.modalType.title,
        description: action.modalType.description,
        modalType: action.modalType.type,
        customComponent: action.modalType.customComponent,
        cbOpen: typeof action.modalProps.cbOpen == 'function' ? action.modalProps.cbOpen() : null,
      }
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: action.modalProps.isOpen == null ? true : action.modalProps.isOpen,
        cbConfirm: typeof action.modalProps.cbConfirm == 'function' ? action.modalProps.cbConfirm : null,
        cbCancel: typeof action.modalProps.cbCancel == 'function' ? action.modalProps.cbCancel : null,
      }
    default:
      return {...state}
  }
}

export default modal
