import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/signin">Sign in</Link>
            </div>
            <div>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )
}

export default Header