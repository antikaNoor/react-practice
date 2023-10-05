import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    // const loginData = {
    //     username: "Antika",
    //     token: "sdfghjklkmnfdvusipa3kltgwuri"
    // }
    return (
        <div className="header-container">
            <div>
                <Link className='link' to="/">Home</Link>
            </div>
            <div>
                <Link className='link' to="/login">Log in</Link>
            </div>
            <div>
                <Link className='link' to="/signup">Sign up</Link>
            </div>
            <div>
                <Link className='link' to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header