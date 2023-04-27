import React, { useEffect, useContext } from 'react'
import { useLocation, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from '../navbar/UserNavbar.js'
import Sidebar from '../sidebar/Sidebar.js'
import routes from '../../routes.js'
import { AuthContext } from '../../provider/global.provider.js'

const User = props => {
  const { authData } = useContext(AuthContext)
  const mainContent = React.useRef(null)
  const location = useLocation()
  const rol = authData.rol_usuario

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainContent.current.scrollTop = 0
  }, [location])

  const getRoutes = routes => {
    const authorizedRoutes = routes.filter(route => route.roles.includes(rol))

    return authorizedRoutes.map((prop, key) => {
      if (prop.layout === '/staff') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />
      } else {
        return null
      }
    })
  }

  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/',
          imgSrc: require('../../images/logo2.PNG'),
          imgAlt: '...'
        }}
      />
      <div className='main-content' ref={mainContent}>
        <Navbar {...props} brandText={getBrandText(props.location.pathname)} />
        <Switch>
          {getRoutes([...routes])}
          <Redirect from='/' to='/staff/dashboard' />
        </Switch>
      </div>
    </>
  )
}

export default User
