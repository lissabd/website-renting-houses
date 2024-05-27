import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAssistant = location.pathname === '/assistant';
  const isAboutUs = location.pathname === '/about-us';

  return (
    <>
      <div className={`header ${isHome ? 'header--home' : ''}`}>
        <div className="header__left">
          <Link to='/'>
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <p>L’Appartement de Luxe</p>
        </div> 
        <div className="header__right">
          <Link to="/" className={`header__link ${isHome ? 'header__link--active' : ''}`}>Home</Link>
          <Link to="/assistant" className={`header__link ${isAssistant ? 'header__link--active' : ''}`}>Assistant</Link>
          <Link to="/about-us" className={`header__link ${isAboutUs ? 'header__link--active' : ''}`}>About Us</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
