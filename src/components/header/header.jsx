import './header.scss'
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { Navigate } from 'react-router-dom';
import useAuthHook from '../../hooks/useAuthHook';
import {PiShoppingCartFill, PiHeartStraightFill} from 'react-icons/pi'

/* There are 3 cases here - 
1. a general header
2. header when admin logs in
3. header when a normal user logs in */

const Header = () => {
    const { handleLogout } = useAuthHook()
    const checkString = localStorage.getItem("user");
    const check = JSON.parse(checkString)
    // console.log("Authenticating", check.token);
    if (!check || !check.token) {
        return (
            <div className="header-container">
                <div>
                    <Link className='link' to="/">Home</Link>
                </div>
                <div>
                    <Link className='link' to="/view-books-general">Books</Link>
                </div>

                <div>
                    <Link className='link' to="/about">About</Link>
                </div>
                <div>
                    <Link className='link' to="/contact">Contact</Link>
                </div>
            </div>
        )
    }
    const decodedToken = jwt_decode(check.token);
    if (decodedToken && decodedToken.status === true) {
        return (
            <div className="header-container">
                <div>
                    <Link className='link' to="/">Home</Link>
                </div>
                <div>
                    <Link className='link' to="/">Manage Books</Link>
                </div>
                <div>
                    <Link className='link' to="/">Manage Users</Link>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={handleLogout}>
                    Log out
                </div>
            </div>
        )
    }
    if (decodedToken && decodedToken.status === false) {
        return (
            <div className="header-container">
                <div>
                    <Link className='link' to="/">Home</Link>
                </div>
                <div>
                    <Link className='link' to="/">Books</Link>
                </div>
                <div>
                    <Link className='link' to="/login/profile">Profile</Link>
                </div>
                <div>
                    <PiShoppingCartFill title="Your Cart" style={{ fontSize: '24px' }}/>
                </div>
                <div>
                    <PiHeartStraightFill title="Your Favorites" style={{ fontSize: '24px' }}/>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={handleLogout}>
                    Log out
                </div>
            </div>
        )
    }
    return (
        <div className="header-container">
            <div>
                <Link className='link' to="/">Home</Link>
            </div>
            <div>
                <Link className='link' to="/view-books-general">Books</Link>
            </div>

            <div>
                <Link className='link' to="/about">About</Link>
            </div>
            <div>
                <Link className='link' to="/contact">Contact</Link>
            </div>
        </div>
    )
}


export default Header