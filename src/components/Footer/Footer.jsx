import React from 'react';
import logoIcon from '../../assets/icons/logo.svg';

import './Footer.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <nav className="footer-navigation">
                <div className="footer-logo">
                    <img src={logoIcon} alt="logo" />
                    <p>
                        Join MaxFit today and start your journey to a healthier,
                        stronger you. Expert trainers, state-of-the-art facilities, and personalized programs await!
                    </p>
                </div>
                
                <div className="footer-links">
                    <h3 className="footer-title"> Info </h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#">Newsroom</a>
                        </li>

                        <li className="footer-item">
                            <a href="#">FAQs</a>
                        </li>

                        <li className="footer-item">
                            <a href="#">Site Map</a>
                        </li>

                        <li className="footer-item">
                            <a href="#">Careers</a>
                        </li>

                    </ul>
                </div>

                <div className="footer-links">
                    <h3 className="footer-title">Partners</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#">Franchising</a>
                        </li>
                        <li className="footer-item">
                            <a href="#">Investor Relations</a>
                        </li>
                        <li className="footer-item">
                            <a href="#">PF Purpose</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3 className="footer-title">Legal</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="footer-item">
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <li className="footer-item">
                            <a href="#">Share Information</a>
                        </li>
                        <li className="footer-item">
                            <a href="#">Accessibility</a>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="footer-bottom">
                <p>©2024 MaxFit</p>
                <div className="social-media">
                    <a href="#">X (Twitter)</a>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </div>
    );
}
export default Footer;