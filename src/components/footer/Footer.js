import React from "react";
import './Footer.css';

const Footer = ()=> {
    return (
        <>
            <div className='footer'>
                <ul className="main-footer">
                    <li>
                        Company
                        <ul className='f-submenu'>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                    <li>
                        Services
                        <ul className="f-submenu">
                            <li>Hire</li>
                            <li>Appointment</li>
                        </ul>
                    </li>
                    <li>
                        Stalk us on
                        <ul className="f-submenu">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Meta</li>
                        </ul>
                    </li>
                    <li>
                        Contact us
                        <ul className="f-submenu">
                            <li>+97654598765</li>
                            <li>info@carental.com</li>
                            <li>Nairobi, KE</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Footer;
