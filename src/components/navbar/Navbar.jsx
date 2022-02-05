import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_header.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="home__navbar">
      <div className="home__navbar-links">
        <div className="home__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="home__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whome">About</a></p>
          <p><a href="#possibility">Puzzles</a></p>
          <p><a href="#features">Studies</a></p>
          <p><a href="#features">Learning</a></p>
          <p><a href="#features">Resources</a></p>
          <p><a href="#features">Upcoming</a></p>
        </div>
      </div>
      <div className="home__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="home__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="home__navbar-menu_container scale-up-center">
          <div className="home__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About?</a></p>
            <p><a href="#possibility">Upcoming</a></p>
            <p><a href="#features">Projects</a></p>
          </div>
          <div className="home__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;