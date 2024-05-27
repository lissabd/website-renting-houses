import React from "react";
import { Link } from "react-router-dom";
import "./RectangleButton.scss";

const RectangleButton = ({ text }) => {
 
  return (
    <>
      <Link to="/assistant">
        <button 
          className="rectangle-button">
              {text}
        </button>
      </Link>
    </>
  );
};

export default RectangleButton;
