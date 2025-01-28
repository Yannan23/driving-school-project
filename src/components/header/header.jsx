import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <header className='flex justify-center items-center w-full bg-dark-color text-white-color'>
            <nav className='navbar flex justify-between items-center w-full relative'>
                {/** navbar image */}
                <div className="">
                    <img src="/src/assets/logo.svg" className='nav-logo' alt="" />
                </div>
                {/** navbar toggle button */}
                <div className='toggle-button absolute' onClick={toggleNavbar}>
                    <div className=""><i className="fa-solid fa-bars"></i></div>
                </div>
                {/** navbar links and button*/}
                <div className=''>
                    <div className='flex flex-col py-4 px-10 text-lg'>
                        <ul className={`navbar-links im-fell-double-pica-sc-regular ${isActive ? 'active' : ''}`}>
                            {/* <ul className='hidden'> */}
                            <li><NavLink to="/">home</NavLink></li>
                            <li><NavLink to="why-choose-us">why choose us</NavLink></li>
                            <li><NavLink to="package">package</NavLink></li>
                            <li><NavLink to="location">location</NavLink></li>
                            <li><NavLink to="contact-us">contact us</NavLink></li>
                            <div className="nav-btn-container">
                                <button className='nav-btn px-6 py-3 cursor-pointer bg-yellow-color'>Book Now</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
