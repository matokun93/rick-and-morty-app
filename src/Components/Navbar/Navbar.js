import useDarkMode from '../../CustomHooks/useDarkMode'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useCredentials } from '../../Contexts/CredentialsContext'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode()
    const { logout, userLogged } = useCredentials()

    const changeTheme = () => {
        setDarkMode(darkMode => !darkMode)
    }

    const handleLogoutButton = () => {
        logout()
    }

    return (
        <div className="nav-container">
            <nav>
                <NavLink to='/'>
                    <div className='logo'>Rick & Morty </div>
                </NavLink>
                <div className="right-buttons">
                    <div className="theme-button">
                        <span className='moon-icon'>
                            <FontAwesomeIcon icon={faMoon} />
                        </span>
                        <div className="slider-container" onClick={() => changeTheme()}>
                            <div className={darkMode === false ? 'slider' : 'slider slider-right'}></div>
                        </div>
                    </div>
                    {userLogged &&
                        <NavLink to='/'>
                            <button onClick={() => handleLogoutButton()}>
                                <span>Salir</span> <FontAwesomeIcon icon={faRightFromBracket} />
                            </button>
                        </NavLink>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar