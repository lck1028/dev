import {API} from '../../src/common/services'

const BridgeStoreUrl = (enc_data, redirect) => {
  const redirectPrams = redirect == undefined || redirect == null ? '' : redirect
  console.log(enc_data)
  if (enc_data) {
    const url = `${API.getStoreUrl}login/bridge?enc_data=${enc_data.enc}&redirect=${redirectPrams}`
    return url
  } else {
    return `${API.getStoreUrl}${redirectPrams}`
  }
}

const BridgeAdminUrl = enc_data => {
  if (enc_data) {
    const url = `${API.getAdminUrl}view/bridge.html?encData=${enc_data.enc}`
    return url
  } else {
    return `${API.getAdminUrl}`
  }
}

export const Bridge = {
  store: (enc_data, redirect) => BridgeStoreUrl(enc_data, redirect),
  admin: enc_data => BridgeAdminUrl(enc_data),
}
