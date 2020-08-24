export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  const setState = {
    user: state.user,
  }
  try {
    const serializedState = JSON.stringify(setState)
    localStorage.setItem('state', serializedState)
  } catch (err) {}
}
