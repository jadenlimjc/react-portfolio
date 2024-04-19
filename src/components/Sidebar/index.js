import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faJ, faWaveSquare} from '@fortawesome/free-solid-svg-icons'; // Import specific FontAwesome icons
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className = "nav-bar">
    <Link className = "logo" to="/">
        <FontAwesomeIcon icon = {faJ} color= "#4d4d4e" />
        <FontAwesomeIcon sub-logo = {faWaveSquare} color= "#4d4d4e" />
    </Link>
    <nav>
        <NavLink exact = "true" activeClassName="active" to = "/">
            <FontAwesomeIcon icon = {faHome} color= "#4d4d4e" />
        </NavLink>
        <NavLink exact = "true" activeClassName="active" className = "about-link" to = "/about">
            <FontAwesomeIcon icon = {faUser} color= "#4d4d4e" />
        </NavLink>
        <NavLink exact = "true" activeClassName="active" className = "contact-link" to = "/contact">
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
                <FontAwesomeIcon icon={faLinkedin} color= "#4d4d4e" />
            </a>
        </li>
        <li>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://github.com/jadenlimjc"
            >
                <FontAwesomeIcon icon={faGithub} color= "#4d4d4e" />
            </a>
        </li>
    </ul>

</div>
)

export default Sidebar