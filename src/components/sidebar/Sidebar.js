import { useState, useContext } from 'react'
import { NavLink as NavLinkRRD, Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { AuthContext } from '../../provider/global.provider'
import Avatar from '../../images/userImage.jpg'
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap'

const Sidebar = props => {
  const { authData } = useContext(AuthContext)
  const username = localStorage.getItem('username')
  const rol = authData.rol_usuario

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }
  const [collapseOpen, setCollapseOpen] = useState()

  const toggleCollapse = () => {
    setCollapseOpen(data => !data)
  }
  const closeCollapse = () => {
    setCollapseOpen(false)
  }
  const createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/staff' && prop.roles.includes(rol)) {
        return (
          <NavItem key={key}>
            <NavLink to={prop.layout + prop.path} tag={NavLinkRRD} onClick={closeCollapse} activeClassName='active'>
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        )
      } else {
        return null
      }
    })
  }

  const { routes, logo } = props
  let navbarBrandProps
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link
    }
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: '_blank'
    }
  }

  return (
    <Navbar className='navbar-vertical fixed-left navbar-light bg-white' expand='md' id='sidenav-main'>
      <Container fluid>
        {/* Toggler */}
        <button className='navbar-toggler' type='button' onClick={toggleCollapse}>
          <span className='navbar-toggler-icon' />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className='pt-0' {...navbarBrandProps}>
            <img alt={logo.imgAlt} className='navbar-brand-img' src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className='align-items-center d-md-none'>
          <UncontrolledDropdown nav>
            <DropdownToggle className='pr-0' nav>
              <Media className='align-items-center'>
                <span className='avatar avatar-sm rounded-circle'>
                  <img alt='...' src={Avatar} />
                </span>
                <Media className='ml-2 d-lg-block'>
                  <span className='mb-0 text-sm font-weight-bold'>{username || 'User'}</span>
                </Media>
              </Media>
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu-arrow' right>
              <DropdownItem divider />
              <DropdownItem href='#rene' onClick={e => e.preventDefault()}>
                <i className='ni ni-user-run' />
                <span onClick={logout}>Cerrar Sesión</span>
              </DropdownItem>
              {/* <DropdownItem href='#rene' onClick={e => e.preventDefault()}>
                <i className='ni ni-check-bold' />
                <span>Puntaje Actual: {score || 'Score'} pts</span>
              </DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className='navbar-collapse-header d-md-none'>
            <Row>
              {logo ? (
                <Col className='collapse-brand' xs='6'>
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className='collapse-close' xs='6'>
                <button className='navbar-toggler' type='button' onClick={toggleCollapse}>
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className='my-3' />
          {/* Heading */}
          {/* Navigation */}
          <Nav className='mb-md-3' navbar>
            <NavItem className='active-pro active'>
              <NavLink href='#version'>
                <i className='bi bi-info-circle' />
                Version 0.9.10
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

Sidebar.defaultProps = {
  routes: [{}]
}

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
  })
}

export default Sidebar
