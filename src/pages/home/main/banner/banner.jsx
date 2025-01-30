import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1 className='roboto-condensed '>Your Journey to <span>Safe</span>  Driving Starts Here.</h1>
                <p><span>NSW SAFE DRIVING SCHOOL </span>provides high-quality driving lessons in Sydney for all levels learners.</p>
                <button className='banner-btn im-fell-double-pica-sc-regular'><NavLink to="contact-us">book now</NavLink></button>
            </div>
        </div>

    )
}

export default Banner;