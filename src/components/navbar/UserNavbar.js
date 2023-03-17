import Avatar from '../../images/userImage.jpg'
// reactstrap components
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Navbar, Nav, Container, Media } from 'reactstrap'

const UserNavbar = props => {
  const username = localStorage.getItem('username')

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
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
                    <span className='mb-0 text-sm font-weight-bold'>{username || 'User'}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
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
        </Container>
      </Navbar>
    </>
  )
}

export default UserNavbar
