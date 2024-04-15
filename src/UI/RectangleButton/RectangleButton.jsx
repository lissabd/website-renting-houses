import React from 'react';
import './RectangleButton.scss';
import { SlMagnifier } from "react-icons/sl";

const RectangleButton = ({text}) => {
  return (
    <>
        <button className="rectangle-button">{text}</button>
    </>
  );
};

export default RectangleButton;
