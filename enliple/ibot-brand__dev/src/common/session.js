const USER_KEY = 'SadminUser'
const VISER_KEY = 'ViserData'
const MALL_KEY = 'MallData'

const setItem = (key, value) => {
  try {
    sessionStorage.setItem(key, value)
  } catch (error) {
    return false
  }
  return true
}
const getItem = key => {
  try {
    const item = sessionStorage.getItem(key)
    if (!item) return undefined
    return item
  } catch (error) {
    return undefined
  }
}
const removeItem = key => {
  try {
    sessionStorage.removeItem(key)
  } catch (error) {
    return false
  }
  return true
}

const session = {
  saveUser: user => {
    try {
      if (user && user.userId && user.userId.length > 0) {
        setItem(USER_KEY, JSON.stringify(user))
      } else {
        return false
      }
    } catch (error) {
      return false
    }
    return true
  },
  loadUser: () => {
    try {
      const user = getItem(USER_KEY)
      if (!user) return undefined
      return JSON.parse(user)
    } catch (error) {
      return undefined
    }
  },
  clearUser: () => {
    return removeItem(USER_KEY)
  },
  saveViserData: viserData => {
    try {
      if (viserData) {
        setItem(VISER_KEY, JSON.stringify(viserData))
      } else {
        return false
      }
    } catch (error) {
      return false
    }
    return true
  },
  loadViserData: mallId => {
    try {
      const user = getItem(VISER_KEY)
      if (!user) return undefined

      let jsonViserData = {
        viserList: [],
        viserAppears: [],
        viserButtons: [],
      }
      let jsonUserData = JSON.parse(user)
      if (jsonUserData.viserList.length > 0 && mallId != undefined && mallId != 0) {
        jsonUserData.viserList.forEach(element => {
          if (element.mallId == mallId) {
            jsonViserData.viserList.push(element)
          }
        })
        jsonUserData.viserButtons.forEach(element => {
          if (element.mallId == mallId) {
            jsonViserData.viserButtons.push(element)
          }
        })
        jsonUserData.viserAppears.forEach(element => {
          if (element.mallId == mallId) {
            jsonViserData.viserAppears.push(element)
          }
        })
      } else {
        jsonViserData.viserList = jsonUserData.viserList
        jsonViserData.viserButtons = jsonUserData.viserButtons
        jsonViserData.viserAppears = jsonUserData.viserAppears
      }
      return jsonViserData
    } catch (error) {
      return undefined
    }
  },
  clearViserData: () => {
    return removeItem(VISER_KEY)
  },
  saveMallData: mallIdList => {
    try {
      if (mallIdList) {
        setItem(MALL_KEY, JSON.stringify(mallIdList))
      } else {
        return false
      }
    } catch (error) {
      return false
    }
    return true
  },
  loadMallData: () => {
    try {
      const user = getItem(MALL_KEY)
      if (!user) return undefined
      return JSON.parse(user)
    } catch (error) {
      return undefined
    }
  },
  clearMallData: () => {
    return removeItem(MALL_KEY)
  },
}

export default session
