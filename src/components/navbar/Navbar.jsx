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
          <p><Link to="/about">About</Link></p>
          <p><Link to="/puzzles">Puzzles</Link></p>
          <p><Link to="/studies">Studies</Link></p>
          <p><Link to="/learning">Learning</Link></p>
          <p><Link to="/resources">Resources</Link></p>
          <p><Link to="/upcoming">Upcoming</Link></p>
          <p><Link to="/portfolio">Other Projects</Link></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button"><Link to="/signin">Sign in</Link></button>
        <button type="button"><Link to="/signup">Sign up</Link></button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p><Link to="/">Home</Link></p>
              <p><Link to="/about">About</Link></p>
              <p><Link to="/puzzles">Puzzles</Link></p>
              <p><Link to="/studies">Studies</Link></p>
              <p><Link to="/learning">Learning</Link></p>
              <p><Link to="/resources">Resources</Link></p>
              <p><Link to="/upcoming">Upcoming</Link></p>
              <p><Link to="/portfolio">Other Projects</Link></p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <button type="button"><Link to="/signin">Sign in</Link></button>
              <button type="button"><Link to="/signup">Sign up</Link></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;