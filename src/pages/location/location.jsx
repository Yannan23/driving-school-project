import React from 'react';
import { NavLink } from 'react-router-dom';

const Location = () => {
    return (
        <div>
            <h1>My Location</h1>
            <p><NavLink to="/">home</NavLink></p>
        </div>
    )
}

export default Location;