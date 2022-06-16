import { NavLink } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="page-not-found-section">
            <div className="page-not-found-container">
                <h1>404 Error</h1>
                <h4>Page not found</h4>
                <NavLink to='/' >
                    <button>Home</button>
                </NavLink>
            </div>
        </div>
    )
}

export default PageNotFound