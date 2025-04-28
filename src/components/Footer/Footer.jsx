import React from 'react';
import logoIcon from '../../assets/icons/logo.svg';

import './Footer.scss';

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-content">
            <div className="footer-logo">
                <img src={logoIcon} alt="logo" />
                <p>Join MaxFit today and start your journey to a healthier, 
                stronger you. Expert trainers, state-of-the-art facilities, and personalized programs await!</p>
            </div>
                <div className="footer-links">
                    <h4>Info</h4>
                    <ul>
                        <li><button onClick={() => {}}>Newsroom</button></li>
                        <li><button onClick={() => {}}>FAQs</button></li>
                        <li><button onClick={() => {}}>Site Map</button></li>
                        <li><button onClick={() => {}}>Careers</button></li>
                    </ul>
                </div>
    
                <div className="footer-links">
                    <h4>Partners</h4>
                    <ul>
                        <li><button onClick={() => {}}>Franchising</button></li>
                        <li><button onClick={() => {}}>Investor Relations</button></li>
                        <li><button onClick={() => {}}>PF Purpose</button></li>
                    </ul>
                </div>
    
                <div className="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><button onClick={() => {}}>Privacy Policy</button></li>
                        <li><button onClick={() => {}}>Terms and Conditions of Use</button></li>
                        <li>
                        <button onClick={() => {}}>Do Not Sell or Share My Personal Information</button>
                    </li>
                        <li><button onClick={() => {}}>Accessibility</button></li>
                    </ul>
                </div>
    
                <div className="Region-language">
    
                </div>
                
            </div>
        <div className="footer-bottom">
                    <p>©2024 MaxFit</p>
                    <div className="social-media">
                        <button onClick={() => {}}> X (Twitter)</button>
                        <button onClick={() => {}}>Instagram</button>
                        <button onClick={() => {}}>Facebook</button>
                    </div>
                </div>
        </div>
    )
}
export default Footer;