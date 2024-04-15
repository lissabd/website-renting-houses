import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


const Header = () => {
  return (
    <>
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" className="header__logo" />
        <p6>L’Appartement de Luxe</p6>
      </div> 
      <div className="header__right">
        <Link to="/" className="header__link">Home</Link>
        <Link to="/assistant" className="header__link">Assistant</Link>
        <Link to="/about-us" className="header__link">About Us</Link>
      </div>
    </div>
    </>
  );
}

export default Header;
