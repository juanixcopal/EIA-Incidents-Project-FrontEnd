// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// // import Incidents from './pages/incidents/index.js'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// // import AuthProvider from './provider/global.provider.js'

// import 'bootstrap-icons/font/bootstrap-icons.css'

// // import './assets/plugins/nucleo/css/nucleo.css'
// // import './assets/scss/argon-dashboard-react.scss'

// // import UserLayout from './components/layouts/UserLayouts.js'

// import Prueba from './pages/others/index.js'

// // const Login = React.lazy(() => import('./pages/login/index'))

// const App = () => {
//   // const token = localStorage.getItem('token')

//   return (
//     <BrowserRouter>
//       <ToastContainer />
//       {/* <AuthProvider> */}
//       <Switch>
//         <Route exact path='/prueba' component={Prueba} />
//         {/* <Route exact path='/login' component={Login} />
//           <Route exact path='/' component={Incidents} />
//           {token ? (
//             <>
//               <Route exact path={`/`} />
//               <Route path='/staff' render={props => <UserLayout {...props} />} />
//             </>
//           ) : (
//             <Route to={'/login'} component={Login} />
//           )} */}
//       </Switch>
//       {/* </AuthProvider> */}
//     </BrowserRouter>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<App />)

import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import App from './App'

import { store } from 'store'

import './assets/scss/style.scss'

import config from './config'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      <App />
    </BrowserRouter>
  </Provider>
)

serviceWorker.unregister()
