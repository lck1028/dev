import {call, put, takeEvery, all, fork} from 'redux-saga/effects'
import _ from 'lodash'

import {actionUserLogin, actionUserLogout} from './actions'
import {API} from '../common/services'

function* commonFn(data, action, apiFn) {
  const response = yield call(apiFn, data)
  const responseToken = response.data.token
  // if (_.get(response, 'respcode') === '0') {
  if (response.data && responseToken) {
    yield put(action.success(response))
    if (typeof data.cbSuccess === 'function') {
      data.cbSuccess(response)
    }
  } else {
    yield put(action.failure(response))
    if (typeof data.cbFailure === 'function') {
      data.cbFailure(response)
    }
  }
}
function* logoutFn(data, action, apiFn) {
  const response = yield call(apiFn, data)
  //const responseToken = response.data.token
  // if (_.get(response, 'respcode') === '0') {
  if (response && response.success) {
    yield put(action.success(response))
    if (typeof data.cbSuccess === 'function') {
      data.cbSuccess(response)
    }
  } else {
    yield put(action.failure(response))
    if (typeof data.cbFailure === 'function') {
      data.cbFailure(response)
    }
  }
}

/** *************************************************************************** */
/** ****************************** WORKERS ************************************ */
/** *************************************************************************** */

function* userLogin(data) {
  yield commonFn(data, actionUserLogin, API.ssoLogin)
}

function* userLogout(data) {
  yield logoutFn(data, actionUserLogout, API.ssoLogout)
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

function* watchUserLogin() {
  yield takeEvery(actionUserLogin.request().type, userLogin)
  yield takeEvery(actionUserLogout.request().type, userLogout)
}

export default function* rootSaga() {
  yield all([fork(watchUserLogin)])
}
