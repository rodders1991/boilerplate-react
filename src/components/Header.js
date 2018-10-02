import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <div className="header">
    <img className="header__logo" src="/images/logo.png" />
    <div className="header__nav">
      <NavLink className="header__nav__link" to="/">Home</NavLink>
      <NavLink className="header__nav__link" to="/about">About</NavLink>
      <NavLink className="header__nav__link" to="/job">Job Vancancies</NavLink>
      <NavLink className="header__nav__link" to="/contact">Contact Us</NavLink>
      <NavLink className="header__nav__link" to="/menu">Menu</NavLink>
    </div>
  </div>
);

export default Header;
