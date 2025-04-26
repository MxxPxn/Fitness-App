import React from 'react';
import './Navbar.scss';



export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu">
                <div className="menu-items"><a href="#home">Home</a></div>
                <div className="menu-items"><a  href="#home">Home</a></div>
                <div className="menu-items"><a href="#service">Service</a></div>
                <div className="menu-items"><a href="galery_page.html">Galery</a></div>
                <div className="menu-items"><a  href="#plans">Plans</a></div>
                <div className="menu-items"><a href="#contact">Contact</a></div>
                <div className="menu-items"><a href="#about">About</a></div> 
            </div>
            <div className="buttons">
                <button className="first-but">Log In</button>
                <button className="second-active">Sign Up</button>
            </div>
        </div>
    );
};
export default Navbar;