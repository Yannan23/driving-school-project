import React from 'react';
// import './header.css';

const Header = () => {
    return (
        <header>
            <div className='logo'></div>
            <nav>
                <ul>
                    <li>home</li>
                    <li>why choose us</li>
                    <li>package</li>
                    <li>location</li>
                    <li>contact us</li>
                </ul>
            </nav>
            <div className="btn">
                <button>Book Now</button>
            </div>
        </header>
    )
}

export default Header;