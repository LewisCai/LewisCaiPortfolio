import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoL from '../../assets/images/logo-l.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoL} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome}  color="#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser}  color="#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope}  color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target = "_blank" 
                rel='noreferrer' 
                href = 'https://www.linkedin.com/in/linjun-cai/'
                >
                    <FontAwesomeIcon icon= {faLinkedin} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target = "_blank" 
                rel='noreferrer' 
                href = 'https://github.com/LewisCai'
                >
                    <FontAwesomeIcon icon= {faGithub} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target = "_blank" 
                rel='noreferrer' 
                href = 'https://www.instagram.com/lewissscai/'
                >
                    <FontAwesomeIcon icon= {faInstagram} color = "#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar