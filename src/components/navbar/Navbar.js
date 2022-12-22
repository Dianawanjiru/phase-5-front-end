import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar(){
    return(
        <nav className='header'>
            <h1>
                CA.R.ENTAL
            </h1>
            <ul className='navbar'>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to='/services'>SERVICES</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>CONTACT</NavLink>
                </li>
                <li>
                    <button>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;