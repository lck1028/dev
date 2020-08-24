import _ from 'lodash'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const INIT = 'INIT'

function createRequestTypes(base) {
  const types = [REQUEST, SUCCESS, FAILURE, INIT]
  return types.reduce((accumulator, type) => {
    accumulator[type] = `${base}_${type}`
    return accumulator
  }, {})
}

function actionCreator(type, payload = {}) {
  return {type, payload}
}

function createActionObject(action) {
  return {
    request: (data, rest) => _.merge(actionCreator(action[REQUEST], data), rest),
    success: data => actionCreator(action[SUCCESS], data),
    failure: data => actionCreator(action[FAILURE], data),
    init: data => actionCreator(action[INIT], data),
  }
}

export const USER_LOGIN = createRequestTypes('USER_LOGIN')
export const USER_LOGOUT = createRequestTypes('USER_LOGOUT')

export const actionUserLogin = createActionObject(USER_LOGIN)
export const actionUserLogout = createActionObject(USER_LOGOUT)
////

export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export const modalOpen = (modalProps, modalType) => ({
  type: MODAL_OPEN,
  modalProps,
  modalType,
})
export const modalClose = modalProps => ({
  type: MODAL_CLOSE,
  modalProps,
})

/* 사용자 정의 액션 */
export const actionSetUser = data => actionCreator('setUser', data)
