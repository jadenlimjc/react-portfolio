import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import specific FontAwesome icons

const Sidebar = () => (
<div className = 'nav-bar'>
    <Link className = 'logo' to='/'>
        <img src={LogoS} alt="logo" />
        <img className= "sub-logo" src={LogoSubtitle} alt="Jaden" />
    </Link>
    <nav>
        <NavLink exact = "true" activeclassname="active" to = "/">
            <FontAwesomeIcon icon = {faHome} color= "#4d4d4e" />
        </NavLink>
        <NavLink exact = "true" activeclassname="active" className = "about-Link" to = "/about">
            <FontAwesomeIcon icon = {faUser} color= "#4d4d4e" />
        </NavLink>
        <NavLink exact = "true" activeclassname="active" className = "contact-link" to = "/contact">
            <FontAwesomeIcon icon = {faEnvelope} color= "#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://www.linkedin.com/in/jadenlimjc/"
            >
                <FontAwesomeIcon icon={faGlobe} color= "#4d4d4e" />
            </a>
        </li>
    </ul>

</div>)

export default Sidebar