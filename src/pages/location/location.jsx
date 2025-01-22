import React from 'react';
import { NavLink } from 'react-router-dom';
// import './header.css';

const Location = () => {
    return (
        <header>
            <h1>My Location</h1>
            <p><NavLink to="/">home</NavLink></p>
        </header>
    )
}

export default Location;