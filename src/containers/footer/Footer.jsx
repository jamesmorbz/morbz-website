import React from 'react';
import Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="footer section-padding">

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={Logo} alt="home_logo" />
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Youtube</p>
        <p>Twitter</p>
        <p>Twitch</p>
        <p>Referrals</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>James Moreby</p>
        <p>+44 7764 739896</p>
        <p>jamesmoreby@icloud.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 Morbz. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
