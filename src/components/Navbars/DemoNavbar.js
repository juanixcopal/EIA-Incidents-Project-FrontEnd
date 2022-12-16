import React from 'react'
import { useLocation } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Container } from 'reactstrap'

import { GoSignOut } from 'react-icons/go'
import routes from '../../routes.js'

function Header(props) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [color, setColor] = React.useState('transparent')
    const sidebarToggle = React.useRef()
    const location = useLocation()
    const username = localStorage.getItem('username')

    const logout = () => {
        localStorage.clear()
        window.location.href = '/login'
    }

    const toggle = () => {
        if (isOpen) {
            setColor('transparent')
        } else {
            setColor('transparent')
        }
        setIsOpen(!isOpen)
    }
    const getBrand = () => {
        let brandName = 'Bienvenido'
        routes.map((prop, key) => {
            if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
                brandName = prop.name
            }
            return null
        })
        return brandName
    }
    const openSidebar = () => {
        document.documentElement.classList.toggle('nav-open')
        sidebarToggle.current.classList.toggle('toggled')
    }
    const updateColor = () => {
        if (window.innerWidth < 993 && isOpen) {
            setColor('dark')
        } else {
            setColor('transparent')
        }
    }
    React.useEffect(() => {
        window.addEventListener('resize', updateColor.bind(this))
    })
    React.useEffect(() => {
        if (window.innerWidth < 993 && document.documentElement.className.indexOf('nav-open') !== -1) {
            document.documentElement.classList.toggle('nav-open')
            sidebarToggle.current.classList.toggle('toggled')
        }
    }, [location])
    return (
        <Navbar
            color={props.location.pathname.indexOf('full-screen-maps') !== -1 ? 'dark' : color}
            expand='lg'
            className={
                props.location.pathname.indexOf('full-screen-maps') !== -1
                    ? 'navbar-absolute fixed-top'
                    : 'navbar-absolute fixed-top ' + (color === 'transparent' ? 'navbar-transparent ' : '')
            }
        >
            <Container fluid>
                <div className='navbar-wrapper'>
                    <div className='navbar-toggle'>
                        <button type='button' ref={sidebarToggle} className='navbar-toggler' onClick={() => openSidebar()}>
                            <span className='navbar-toggler-bar bar1' />
                            <span className='navbar-toggler-bar bar2' />
                            <span className='navbar-toggler-bar bar3' />
                        </button>
                    </div>
                    <NavbarBrand href='/'>{getBrand()}</NavbarBrand>
                </div>
                <NavbarToggler onClick={toggle}>
                    <span className='navbar-toggler-bar navbar-kebab' />
                    <span className='navbar-toggler-bar navbar-kebab' />
                    <span className='navbar-toggler-bar navbar-kebab' />
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar className='justify-content-end'>
                    <div style={{ padding: '0 30px' }}>
                        <p>Bienvenido {username || 'Usuario'}</p>
                    </div>
                    {/* <Nav navbar></Nav> */}
                    <button style={{ border: 'none', height: '25px', color: 'gray' }} type='button' onClick={logout}>
                        <GoSignOut />
                    </button>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
