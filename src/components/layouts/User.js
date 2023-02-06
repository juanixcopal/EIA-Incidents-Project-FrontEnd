import React, { useEffect } from 'react'
import { useLocation, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from '../navbar/UserNavbar.js'
import Sidebar from '../sidebar/Sidebar.js'
import routes from '../../routes.js'

const User = props => {
  const mainContent = React.useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainContent.current.scrollTop = 0
  }, [location])

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/user') {
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
          innerLink: '/user/dashboard',
          imgSrc: require('../../images/logo-eia.jpg'),
          imgAlt: '...'
        }}
      />
      <div className='main-content' ref={mainContent}>
        <Navbar {...props} brandText={getBrandText(props.location.pathname)} />
        <Switch>
          {getRoutes(routes)}
          <Redirect from='*' to='/user/dashboard' />
        </Switch>
      </div>
    </>
  )
}

export default User
