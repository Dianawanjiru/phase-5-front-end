import React from "react";
import './Footer.css';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import mail from './icons/mail.svg';
import locale from './icons/map-pin.svg';
import phone from './icons/phone.svg';
import tweet from './icons/twitter.svg';

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
                            <li>
                                <img src={instagram} alt='instagram'/>{' '}Instagram</li>
                            <li>
                                <img src={tweet} alt='tweet'/>{' '}Twitter</li>
                            <li>
                                <img src={facebook} alt='meta'/>{' '}Meta</li>
                        </ul>
                    </li>
                    <li>
                        Contact us
                        <ul className="f-submenu">
                            <li>
                                <img src={phone} alt='phone'/>{' '}
                                +97654598765
                            </li>
                            <li>
                                <img src={mail} alt='mail'/>{' '}
                                info@carental.com
                            </li>
                            <li>
                                <img src={locale} alt='locale'/>{' '}
                                Nairobi, KE
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Footer;
