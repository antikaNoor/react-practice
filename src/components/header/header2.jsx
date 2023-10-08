import './header.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/Slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import useAuthHook from '../../hooks/useAuthHook';

const Header2 = () => {
    const { handleLogout } = useAuthHook()
    // const dispatch = useDispatch();
    // const navigate = useNavigate()

    // const handleLogout = () => {
    //     // Dispatch the logout action to clear user data
    //     dispatch(logoutUser());
    //     // Redirect the user to the home page
    //     navigate('/')
    // };

    return (
        <div className="header-container">
            <div>
                <Link className='link' to="/">Home</Link>
            </div>
            <div>
                <Link className='link' to="/profile">Profile</Link>
            </div>
            <div>
                <Link className='link' to="/login/add-book">Add Book</Link>
            </div>
            <div style={{ cursor: 'pointer' }} onClick={handleLogout}>
                Log out
            </div>
        </div>
    )
}

export default Header2