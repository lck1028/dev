import axios from 'axios'
import _ from 'lodash'

import eConst from './constants'

global.apiUri = eConst.getApiUri()
global.storeApiUri = eConst.getStoreApiUri()
global.sAdminApiUri = eConst.getSAdminApiUri()
global.getBillingUri = eConst.getBillingUri()
global.getStoreImgUri = eConst.getStoreImgUri()
global.getAdminUrl = eConst.getAdminUrl()
global.getStoreUrl = eConst.getStoreUrl()

axios.defaults.headers.common = {}
axios.defaults.headers.common.accept = 'application/json'

const commonAPI = (apiServer, path, data, method) => {
  const payload = _.get(data, 'payload', data)
  const accessToken = _.get(payload, 'accessToken', '')
  // console.log('apiServer==', apiServer)
  // console.log('path==', path)
  // console.log('data==', data)
  // console.log('method==', method)
  // console.log('payload==', payload)
  // console.log('accessToken==', accessToken)

  var url
  if (apiServer === 'store') {
    url = `${global.storeApiUri}${path}`
  } else if (apiServer === 'sadmin') {
    url = `${global.sAdminApiUri}${path}`
  } else if (apiServer === 'billing') {
    url = `${global.getBillingUri}${path}`
  } else {
    url = `${global.apiUri}${path}`
  }

  return axios({
    url: url,
    method,
    headers: {
      'content-type': 'application/json',

      authorization: accessToken,
    },
    data: method === 'POST' ? payload : undefined,
  })
    .then(response => {
      return response.data
    })
    .catch(e => {
      return e
    })
}
const commonGetAPI = (path, data) => {
  return commonAPI(path, data, 'GET')
}
const commonPostAPI = (apiServer, path, data) => {
  return commonAPI(apiServer, path, data, 'POST')
}
const getPlayloadResult = response => _.get(response, 'payload.result', false)
const getPlayloadValue = response => _.get(response, 'payload.value', false)
const getPayloadObject = response => _.get(response, 'payload', false)
const getValue = response => _.get(response, 'value', undefined)

export const API = {
  loginUserInfo: data => commonPostAPI('/loginToLoginServer', data),

  getResult: response => getPlayloadResult(response),
  getData: response => getPlayloadValue(response),
  getPayLoad: response => getPayloadObject(response),
  getValue,

  //Admin API
  ssoLogin: data => {
    return commonPostAPI('billing', '/billing/api/userLogin', data)
  },
  ssoLogout: data => {
    console.log(data)
    return commonPostAPI('billing', '/billing/api/userLogout', data)
  },
  idDuplChk: data => commonPostAPI('billing', '/billing/api/idDuplChk', data),
  myPageMainInfo: data => commonPostAPI('admin', '/api/v1/mypage/selectMyPageMainInfo', data),
  findId: param => commonPostAPI('admin', '/api/v2/homeuserFindId' + param),
  findPw: param => commonPostAPI('admin', '/api/v2/homeuserFindPw' + param),
  homeuserCheckAuthNum: param => commonPostAPI('admin', '/api/v2/homeuserCheckAuthNum' + param),
  changeUserPw: param => commonPostAPI('admin', '/api/v2/changeUserPw' + param),
  homepageuserInsert: data => commonPostAPI('billing', '/billing/api/registerUser', data),
  getEncData: data => commonPostAPI('admin', '/api/common/enc/getEncData', data),

  //Store API
  getNoticeList: data => commonPostAPI('store', '/getNoticeList.api', data),
  getNoticeDetail: data => commonPostAPI('store', '/getNoticeDetail.api', data),
  getEventList: data => commonPostAPI('store', '/getEventList.api', data),
  getEventDetail: data => commonPostAPI('store', '/getEventDetail.api', data),
  getCaseList: data => commonPostAPI('store', '/getCaseList.api', data),
  getBridgeProc: data => commonPostAPI('store', '/bridgeProc.api', data),

  //SAdmin API
  contactUsList: data => commonPostAPI('sadmin', '/api/v2/contactus/list', data),
  getStoreImgPath: global.getStoreImgUri,
  getAdminUrl: global.getAdminUrl,
  getStoreUrl: global.getStoreUrl,
}
