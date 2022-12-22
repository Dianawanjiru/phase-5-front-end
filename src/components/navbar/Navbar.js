import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar(){
    return(
        <nav className='header'>
            <h1 className='logo'>
                <a href='/'>
                    CA.R.ENTAL
                </a>
            </h1>
            <ul className='main-nav'>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to='/services'>SERVICES</NavLink>
                    <ul className='submenu'>
                        <li>
                            <NavLink to='/services/hire'>Hire</NavLink>
                            <NavLink to='/services/appointment'>appointment</NavLink>
                        </li>
                    </ul>
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