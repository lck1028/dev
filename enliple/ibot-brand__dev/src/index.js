import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './redux/store'
import {loadState, saveState} from './common/storage'

import App from './pages/App'
import Modal from './components/modules/Modal'
const persistedState = loadState()
const store = configureStore(persistedState)

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
