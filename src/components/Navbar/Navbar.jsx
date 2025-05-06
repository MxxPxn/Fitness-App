import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';




export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu">
                <div className="menu-items"><Link to="/">Home</Link></div>
                <div className="menu-items"><Link to="/">Service</Link></div>
                <div className="menu-items"><Link to="/gallery">Galery</Link></div>
                <div className="menu-items"><Link to="/">Plans</Link></div>
                <div className="menu-items"><Link to="/">Contact</Link></div>
                <div className="menu-items"><Link to="/">About</Link></div> 
            </div>
            <div className="buttons">
                <button className="first-but">Log In</button>
                <button className="second-active">Sign Up</button>
            </div>
        </div>
    );
};
export default Navbar;