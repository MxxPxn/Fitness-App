import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useState, useEffect } from 'react';
import logoIcon from '../../assets/icons/logo.svg';



// export const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="menu">
//                 <div className="menu-items"><Link to="/">Home</Link></div>
//                 <div className="menu-items"><Link to="/">Service</Link></div>
//                 <div className="menu-items"><Link to="/gallery">Galery</Link></div>
//                 <div className="menu-items"><Link to="/">Plans</Link></div>
//                 <div className="menu-items"><Link to="/">Contact</Link></div>
//                 <div className="menu-items"><Link to="/">About</Link></div> 
//             </div>
//             <div className="buttons">
//                 <button className="first-but">Log In</button>
//                 <button className="second-active">Sign Up</button>
//             </div>
//         </div>
//     );
// };
// export default Navbar;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      {/* Burger Menu Button */}
      <button 
        className="burger-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
      
      {/* Logo or Brand */}
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      
      {/* Menu Items */}
      <div className="menu">
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <div key={index} className="menu-item">
            <Link to="#" className="menu-link">{item}</Link>
          </div>
        ))}
      </div>
      
      {/* Buttons */}
      <div className="buttons">
        <button className="button first-button">
          Sign In
        </button>
        <button className="button second-button">
          Sign Up
        </button>
      </div>
    </nav>
  );
}