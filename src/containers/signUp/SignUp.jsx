import React from 'react';
import people from '../../assets/people.png';
import logo from '../../assets/logo.png';
import './signUp.css';

const SignUp = () => (
  <div className="home__header section__padding" id="home">
    <div className="home__header-content">
      <h1 className="gradient__text">Chess Mastery Is Just a Few Clicks Away.</h1>
      <p>Sign up to get Started</p>

      <div className="home__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Being your Journey</button>
      </div>

      <div className="home__header-content__people">
        <img src={people} />
        <p>1,600+ people have signed up in the last 24 hours</p>
      </div>
    </div>

    <div className="home__header-image">
      <img src={logo} />
    </div>
  </div>
);

export default SignUp;
