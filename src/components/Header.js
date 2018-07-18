import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <div className="header">
    <img className="header__logo" src="/images/logo.png" />
    <div className="header__nav">
      <NavLink className="header__nav__link" to="/">Home</NavLink>
      <NavLink className="header__nav__link" to="/">About</NavLink>
      <NavLink className="header__nav__link" to="/">Job Vancancies</NavLink>
      <NavLink className="header__nav__link" to="/">Contact Us</NavLink>
      <NavLink className="header__nav__link" to="/">Menu</NavLink>
    </div>
  </div>
);

export default Header;
