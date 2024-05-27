import React from 'react';
import './Button.scss';
import { SlMagnifier } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/assistant" className='link'>
      <button className="button">
        <span className="button__placeholder">Chatting...</span>
        <span className="button__icon"><SlMagnifier size={20}/></span>
      </button>
    </Link>
  );
};

export default Button;
