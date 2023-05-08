import Avatar from '../../images/userImage.jpg'
// reactstrap components
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Navbar, Nav, Container, Media } from 'reactstrap'

const UserNavbar = props => {
  const fullName = localStorage.getItem('fullName')

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  const redirectOsTicket = () => {
    window.open('https://soporte.uneatlantico.es/scp/')
  }
  return (
    <>
      <Navbar className='navbar-top navbar-dark' expand='md' id='navbar-main'>
        <Container fluid>
          <h2 className='mb-0 text-white text-uppercase d-none d-lg-inline-block'>{props.brandText}</h2>
          <Nav className='align-items-center d-none d-md-flex' navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className='pr-0' nav>
                <Media className='align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <img alt='...' src={Avatar} />
                  </span>
                  <Media className='ml-2 d-lg-block'>
                    <span className='mb-0 text-sm font-weight-bold'>{fullName || 'User'}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
                <DropdownItem href='#Redirect-OsTicket' onClick={redirectOsTicket}>
                  <i className='bi bi-ticket' />
                  <span>Ir a OsTicket</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='#Logout' onClick={logout}>
                  <i className='ni ni-user-run' />
                  <span>Cerrar Sesión</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default UserNavbar
