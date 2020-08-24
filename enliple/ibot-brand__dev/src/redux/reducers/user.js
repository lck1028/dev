import _ from 'lodash'

import {USER_LOGIN, USER_LOGOUT} from '../actions'
import {API} from '../../common/services'

const initialState = {
  isLogged: false,
  userIdx: 0,
  userName: '',
  oauthToken: '',
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN.REQUEST:
      return {
        ...state,
        isLogged: false,
        userName: _.get(action, 'payload.userId', ''),
      }
    case USER_LOGIN.SUCCESS: {
      if (API.getPayLoad(action)) {
        const value = API.getPayLoad(action)
        const userInfo = {
          ...state,
          isLogged: true,
          oauthToken: value,
        }
        return userInfo
      }
      return initialState
    }
    case USER_LOGIN.INIT:
    case USER_LOGIN.FAILURE:
      return initialState
    case USER_LOGOUT.REQUEST:
      return {
        ...state,
        isLogged: true,
        userName: _.get(action, 'payload.userId', ''),
      }
      return
    case USER_LOGOUT.SUCCESS:
      if (API.getPayLoad(action)) {
        const value = API.getPayLoad(action)
        const userInfo = {
          ...state,
          isLogged: false,
          oauthToken: null,
        }
        return userInfo
      }
      return
    case 'setUser': {
      const data = _.get(action, 'payload', undefined)
      if (data) {
        return {
          isLogged: true,
          userName: _.get(data, 'userId', ''),
          oauthToken: {
            data: {
              token: _.get(data, 'accessToken', ''),
            },
          },
        }
      }
      return initialState
    }
    case USER_LOGOUT.FAILURE:
      return initialState
    default:
      return {
        ...state,
      }
  }
}
