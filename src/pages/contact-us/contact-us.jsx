import React from 'react';
import { NavLink } from 'react-router-dom';
// import './header.css';

const ContactUs = () => {
    return (
        <header>
            <h1>My ContactUs</h1>
            <p><NavLink to="/">home</NavLink></p>
        </header>
    )
}

export default ContactUs;