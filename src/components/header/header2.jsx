import './header.scss'
import { Link } from 'react-router-dom'

const Header2 = () => {
    return (
        <div className="header-container">
            <div>
                <Link className='link' to="/">Home</Link>
            </div>
            <div>
                <Link className='link' to="/profile">Profile</Link>
            </div>
            <div>
                <Link className='link' to="/add-book">Add Book</Link>
            </div>
        </div>
    )
}

export default Header2