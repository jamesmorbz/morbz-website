import React from 'react';
import Logo from '../../assets/logo_footer.svg';
import './footer.css';

const Footer = () => (
  <div className="home__footer section__padding">
    <div className="home__footer-heading">
      <h1 className="gradient__text">Take your chess to the next level</h1>
    </div>

    <div className="home__footer-btn">
      <p>Start Training!</p>
    </div>

    <div className="home__footer-links">
      <div className="home__footer-links_logo">
        <img src={Logo} alt="home_logo" />
        <p> All Rights Reserved</p>
      </div>
      <div className="home__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="home__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="home__footer-links_div">
        <h4>Get in touch</h4>
        <p>James Moreby</p>
        <p>+44 7764 739896</p>
        <p>jamesmoreby@icloud.com</p>
      </div>
    </div>

    <div className="home__footer-copyright">
      <p>@2022 Morbz. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
