import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)

  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks? "open": "close"}>
            <h1 className='logo'>
                  CA.R.ENTAL
            </h1>
            <div className = 'hiddenLinks'>
              <NavLink to= '/'>HOME</NavLink>
              <NavLink to = '/about'>ABOUT</NavLink>
              <NavLink to='/services' className="disabled-link">SERVICES</NavLink>
                <div className='submenu'>
                                <NavLink to='/services/hire'>Hire</NavLink>
                                <NavLink to='/services/appointment'>Appointment</NavLink>
                </div>
              <NavLink to ='/contacts'>CONTACT</NavLink> 
              <button className='logout'>Log out</button>         
            </div>
        </div>
        <div className='rightSide'>
          <NavLink to= '/'>HOME</NavLink>
          <NavLink to = '/about'>ABOUT</NavLink>
          <NavLink to='/services' className="disabled-link">SERVICES</NavLink>
            <div className='submenu'>
              <NavLink to='/services/hire'>Hire</NavLink>
              <NavLink to='/services/appointment'>Appointment</NavLink>
            </div>
          <NavLink to ='/contacts'>CONTACT</NavLink>
          <button className='logout'>Log out</button>
          <button onClick={() => setOpenLinks(!openLinks)}>
            <ReorderIcon />
          </button>
          
        </div>

    </div>
  )
}

export default Navbar;