import React from 'react';
import people from '../../assets/people.png';
import logo from '../../assets/logo.svg';
import './signUp.css';

const SignUp = () => (
  <div className="header section-padding" id="home">
    <div className="header-content">
      <h1 className="gradient-text">Chess Mastery Is Just a Few Clicks Away.</h1>
      <p>Sign up to get Started</p>

      <div className="header-content-input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Being your Journey</button>
      </div>

      <div className="header-content-people">
        <img alt="People" src={people} />
        <p>1,600+ people have signed up in the last 24 hours</p>
      </div>
    </div>

    <div className="header-image">
      <img alt="Logo" src={logo} />
    </div>
  </div>
);

export default SignUp;
