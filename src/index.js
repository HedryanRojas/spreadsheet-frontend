import './assets/styles/index.scss'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import RootStore from './stores/RootStore'
import Router from './routes/Router'

const store = RootStore({})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
