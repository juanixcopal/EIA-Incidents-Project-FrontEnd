import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap'
import Logo from '../../assets/img/incidencesLogo.png'
import PerfectScrollbar from 'perfect-scrollbar'
var ps

function Sidebar(props) {
    const sidebar = React.useRef()
    const activeRoute = routeName => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''
    }
    React.useEffect(() => {
        if (navigator.platform.indexOf('Win') > -1) {
            ps = new PerfectScrollbar(sidebar.current, {
                suppressScrollX: true,
                suppressScrollY: false
            })
        }
        return function cleanup() {
            if (navigator.platform.indexOf('Win') > -1) {
                ps.destroy()
            }
        }
    })
    return (
        <div className='sidebar' data-color={props.bgColor} data-active-color={props.activeColor}>
            <div className='logo'>
                <a href='http://172.27.20.128:3000/user/planta1' className='simple-text logo-mini'>
                    <div className='logo-img'>
                        <img src={Logo} alt='LOGO' />
                    </div>
                </a>
                <a href='http://172.27.20.128:3000/user/planta1' className='simple-text logo-normal'>
                    Incidencias EIA
                </a>
            </div>
            <div className='sidebar-wrapper' ref={sidebar}>
                <Nav>
                    {props.routes.map((prop, key) => {
                        return (
                            <li className={activeRoute(prop.path) + (prop.pro ? ' active-pro' : '')} key={key}>
                                <NavLink to={prop.layout + prop.path} className='nav-link' activeClassName='active'>
                                    <i>{prop.icon}</i>
                                    <p>{prop.name}</p>
                                </NavLink>
                            </li>
                        )
                    })}
                </Nav>
            </div>
        </div>
    )
}

export default Sidebar
