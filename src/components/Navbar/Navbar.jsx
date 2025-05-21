import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useState, useEffect } from 'react';
import logoIcon from '../../assets/icons/logo.svg';




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
        {[
          { name: 'Home', to: '/' },
          { name: 'About', to: '/' },
          { name: 'Gallery', to: '/gallery' },
          { name: 'Services', to: '/' },
          { name: 'Contact', to: '/' }
        ].map((item, index) => (
          <div key={index} className="menu-item">
            <Link to={item.to} className="menu-link">{item.name}</Link>
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