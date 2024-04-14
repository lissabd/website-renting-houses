import React from 'react';
import './Button.scss';
import { SlMagnifier } from "react-icons/sl";

const Button = () => {
  return (
    <button className="button">
      <span className="button__placeholder">Chatting...</span>
      <span className="button__icon"><SlMagnifier size={20}/></span>
    </button>
  );
};

export default Button;
