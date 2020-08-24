import {isMobile} from 'react-device-detect'
const PRODUCTION = false // 배포 버전 여부(개발은 false)
const STAGE = true // STAGE 버전 여부(개발은 false)

const PROD_APIURI = 'https://admin.istore.camp'
const STG_APIURI = 'http://112.175.17.117:8080' // STG API
const DEV_APIURI = 'http://192.168.150.152' // 개발 API(IP)

//Billing
const PROD_BILLINGSERVER = 'https://login.istore.camp' // 상용 BILLINGSERVER
const STG_BILLINGSERVER = 'http://112.175.17.118:6060' // STG BILLINGSERVER
const DEV_BILLINGSERVER = 'http://192.168.150.150:8080' // 개발 BILLINGSERVER

//Store uri
const PROD_STORE_APIURI = 'https://www.istore.camp/api' // 상용 API(IP)
const STG_STORE_APIURI = 'http://112.175.17.117:9090/sc/api' //'http://192.168.150.45:8080/api'
//'http://112.175.17.117:9090/sc/api' // STG STORE API(IP)
const DEV_STORE_APIURI = 'http://192.168.150.152:7070/sc/api' // 개발 STORE  API(IP)

//SAdmin uri
const PROD_SADMIN_APIURI = 'https://sadmin.istore.camp:2000' // 개발 STORE  API(IP)
const STG_SADMIN_APIURI = 'http://112.175.17.117:2002' // 개발 STORE  API(IP)
const DEV_SADMIN_APIURI = 'http://192.168.150.153:2000' // 개발 STORE  API(IP)

const PROD_PUBLICPATH = '/' // AWS 실서비스 ROOT URL 경로
const STG_PUBLICPATH = '/' // STAGE ROOT URL 경로
const DEV_PUBLICPATH = '/' // 개발 ROOT URL 경로

const PROD_STOREURL = !isMobile ? 'https://www.istore.camp/' : 'https://www.istore.camp/mobile/'
const STG_STOREURL = !isMobile ? 'http://112.175.17.117:9090/sc/' : 'http://112.175.17.117:9090/sc/mobile/'
const DEV_STOREURL = !isMobile ? 'http://192.168.150.152:7070/sc/' : 'http://192.168.150.152:7070/sc/mobile/'

const PROD_ADMINURL = 'https://admin.istore.camp/'
const STG_ADMINURL = 'http://112.175.17.117:8080/'
const DEV_ADMINURL = 'http://192.168.150.152/'

const PROD_STOREIMGPATH = '//image.istore.camp' // 실서비스 STORE IMG 경로
const STG_STOREIMGPATH = '//112.175.17.117' // STAGE STORE IMG 경로
const DEV_STOREIMGPATH = '//192.168.150.152:5050' // 개발 STORE IMG 경로

const DAUMOPOSTCODE = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

export default {
  PRODUCTION,
  STAGE,
  getApiUri: () => (PRODUCTION ? PROD_APIURI : STAGE ? STG_APIURI : DEV_APIURI),
  getPublicPath: () => (PRODUCTION ? PROD_PUBLICPATH : STAGE ? STG_PUBLICPATH : DEV_PUBLICPATH),
  TESTLOGGING: true,

  getStoreApiUri: () => (PRODUCTION ? PROD_STORE_APIURI : STAGE ? STG_STORE_APIURI : DEV_STORE_APIURI),
  getSAdminApiUri: () => (PRODUCTION ? PROD_SADMIN_APIURI : STAGE ? STG_SADMIN_APIURI : DEV_SADMIN_APIURI),

  getBillingUri: () => (PRODUCTION ? PROD_BILLINGSERVER : STAGE ? STG_BILLINGSERVER : DEV_BILLINGSERVER),
  getStoreImgUri: () => (PRODUCTION ? PROD_STOREIMGPATH : STAGE ? STG_STOREIMGPATH : DEV_STOREIMGPATH),
  getStoreUrl: () => (PRODUCTION ? PROD_STOREURL : STAGE ? STG_STOREURL : DEV_STOREURL),
  getAdminUrl: () => (PRODUCTION ? PROD_ADMINURL : STAGE ? STG_ADMINURL : DEV_ADMINURL),

  getDaumPostCodeUri: () => DAUMOPOSTCODE,
}
