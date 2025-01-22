import React from 'react';
import { NavLink } from 'react-router-dom';
// import './header.css';

const Package = () => {
    return (
        <header>
            <h1>My Package</h1>
            <p><NavLink to="/">home</NavLink></p>
        </header>
    )
}

export default Package;