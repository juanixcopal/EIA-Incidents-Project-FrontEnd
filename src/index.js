import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AuthProvider from 'provider/global.provider.js'

import * as serviceWorker from './serviceWorker'

import App from './App'

import { store } from 'store'

import './assets/scss/style.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
)

serviceWorker.unregister()
