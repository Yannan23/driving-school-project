import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className='logo'></div>
            <nav>
                <ul>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="why-choose-us">why choose us</NavLink></li>
                    <li><NavLink to="package">package</NavLink></li>
                    <li><NavLink to="location">location</NavLink></li>
                    <li><NavLink to="contact-us">contact us</NavLink></li>
                </ul>
            </nav>
            <div className="btn">
                <button>Book Now</button>
            </div>
        </header>
    )
}

export default Header;