import useDarkMode from '../../CustomHooks/useDarkMode'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode()

    const changeTheme = () => {
        setDarkMode(darkMode => !darkMode)
    }

    return (
        <div className="nav-container">
            <nav>
                <div className="logo">Rick&MortyApp</div>
                <span className='right-buttons'>
                    <div className="theme-button">
                        <span className='moon-icon'>
                            <FontAwesomeIcon icon={faMoon} />
                        </span>
                        <div className="slider-container" onClick={() => changeTheme()}>
                            <div className={darkMode === false ? 'slider' : 'slider slider-right'}></div>
                        </div>
                    </div>
                    <div className="log-buttons">
                        <button>login</button>
                        <button>register</button>
                    </div>
                </span>
            </nav>
        </div>
    )
}

export default Navbar