import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef(null);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scroll Y:', window.scrollY);

            if (window.scrollY > 150) { // Simplified condition for testing
                setIsScrolled(true);
                setIsVisible(false);
            } else {
                setIsScrolled(false);
                setIsVisible(true);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={navRef} className={`flex flex-col justify-center items-center w-full bg-dark-color text-white-color your-nav-classes ${isScrolled ? 'scrolled' : ''}`} >
            {/** navbar */}
            <div className='relative w-full'>
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
                    <div className='navbar-links-container flex flex-col'>
                        <ul className={`navbar-links im-fell-double-pica-sc-regular ${isActive ? 'active' : ''}`}>
                            <li><NavLink to="/">home</NavLink></li>
                            <li><NavLink to="why-choose-us">why choose us</NavLink></li>
                            <li><NavLink to="package">package</NavLink></li>
                            <li><NavLink to="location">location</NavLink></li>
                            <li><NavLink to="contact-us">contact us</NavLink></li>
                            <div className="nav-btn-container flex justify-center">
                                <button className='nav-btn flex justify-center items-center" cursor-pointer bg-yellow-color'>BOOK NOW</button>
                            </div>
                        </ul>
                    </div>
                </nav >
                {/** header contact info */}
                <div className={`${isVisible ? 'visible' : 'hidden'} header-contact-info-details-container flex justify-between w-full`}>
                    <div className='header-contact-details roboto-condensed flex justify-start items-center gap-1'>
                        <p><NavLink to="contact-us">Email: khanrashed2411@gmail.com</NavLink></p>
                    </div>
                    <div className='header-contact-details roboto-condensed flex justify-start items-center'>
                        <p><NavLink to="contact-us">Call us: 0470272595</NavLink></p>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;
