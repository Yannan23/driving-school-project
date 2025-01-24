import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='navbar flex justify-between px-4 max-h-[15vh] bg-dark-color text-white-color'>
            <div className="w-1/5">
                <img src="/src/assets/logo.svg" className='w-full h-full' alt="" />
            </div>
            <div className='toggle-button md:hidden' onClick={toggleNavbar}>
                <div className="toggle-button flex-col w-28 gap-5 items-center justify-center absolute top-0 right-1 px-4 py-6 hidden max-md:flex cursor-pointer max-sm:gap-4 w-15">
                    <div className="bar h-1 w-full bg-white rounded-xl"></div>
                    <div className="bar h-1 w-full bg-white rounded-xl"></div>
                    <div className="bar h-1 w-full bg-white rounded-xl"></div>
                </div>
            </div>
            <div className='w-4/5'>
                <div className='flex justify-between items-center py-4 px-10 text-lg'>
                    <ul className={`navbar-links max-md:hidden flex items-center justify-evenly gap-10 capitalize ${isActive ? 'active' : ''}`}>
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="why-choose-us">why choose us</NavLink></li>
                        <li><NavLink to="package">package</NavLink></li>
                        <li><NavLink to="location">location</NavLink></li>
                        <li><NavLink to="contact-us">contact us</NavLink></li>
                    </ul>
                    <div className="btn">
                        <button className='px-6 py-3 cursor-pointer rounded-full bg-yellow-color max-md:hidden'>Book Now</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
