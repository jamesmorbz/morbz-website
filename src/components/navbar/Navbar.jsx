import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img alt="logo" src={logo} />
        </div>
        <div className="navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="about">About</Link></p>
          {/* <p><a href="">Home</a></p>
          <p><a href="about">About</a></p>
          <p><a href="puzzles">Puzzles</a></p>
          <p><a href="studies">Studies</a></p>
          <p><a href="learning">Learning</a></p>
          <p><a href="resources">Resources</a></p>
          <p><a href="upcoming">Upcoming</a></p> */}
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#puzzles">Puzzles</a></p>
              <p><a href="#studies">Studies</a></p>
              <p><a href="#learning">Learning</a></p>
              <p><a href="#resources">Resources</a></p>
              <p><a href="#upcoming">Upcoming</a></p>
            </div>
            <div className="navbar-menu_container-links-sign">
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