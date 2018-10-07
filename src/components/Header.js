import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Header = () => (
  <div className="header">
    <Link to="/" ><img className="header__logo" src="/images/logo.png" /></Link>
    <div className="header__nav">
      <NavLink className="header__nav__link" to="/">Home</NavLink>
      <NavLink className="header__nav__link" to="/about">About</NavLink>
      <NavLink className="header__nav__link" to="/job">Job Vacancies</NavLink>
      <NavLink className="header__nav__link" to="/contact">Contact Us</NavLink>
      <NavLink className="header__nav__link" to="/menu">Menu</NavLink>
    </div>
  </div>
);

export default Header;
