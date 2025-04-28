import React from 'react';
import './Support.scss';

import googleIcon from '../../assets/icons/google-svgrepo-com.svg';
import metaIcon from '../../assets/icons/meta-logo-12362.svg';
import netflixIcon from '../../assets/icons/netflix-svgrepo-com.svg';
import paypalIcon from '../../assets/icons/paypal-logo-svgrepo-com.svg';
import microsoftIcon from '../../assets/icons/microsoft-logo-svgrepo-com.svg';
import amazonIcon from '../../assets/icons/amazon-ar21.svg';


export const Support = () => {
  return (
    <div className="supports">
      <div>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <img src= { googleIcon } alt="Google" />
        </a>
      </div>
      <div>
        <a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer">
          <img src={ metaIcon } alt="Meta" />
        </a>
      </div>
      <div>
        <a href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer">
          <img src={ netflixIcon } alt="Netflix" />
        </a>
      </div>
      <div>
        <a href="https://www.paypal.com/us/home" target="_blank" rel="noopener noreferrer">
          <img src={ paypalIcon } alt="PayPal" />
        </a>
      </div>
      <div>
        <a href="https://www.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
          <img src={ microsoftIcon } alt="Microsoft" />
        </a>
      </div>
      <div>
        <a href="https://www.amazon.com/ref=nav_logo" target="_blank" rel="noopener noreferrer">
          <img src={ amazonIcon }alt="Amazon" />
        </a>
      </div>
    </div>
  );
};
export default Support;