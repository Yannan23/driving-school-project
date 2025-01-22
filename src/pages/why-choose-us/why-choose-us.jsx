import React from 'react';
import { NavLink } from 'react-router-dom';
// import './header.css';

const WhyChooseUs = () => {
    return (
        <header>
            <h1>My WhyChooseUs</h1>
            <p><NavLink to="/">home</NavLink></p>
        </header>
    )
}

export default WhyChooseUs;