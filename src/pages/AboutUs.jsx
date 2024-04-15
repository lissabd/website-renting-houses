import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.scss";
import city from "../images/city.png";
import Button from "../UI/Button/Button";
import map from "../images/map.png";
import { MdPhoneIphone } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

const AboutUs = () => {
  return (
    <>
      <div className="about_us__container">
        <h1>OUR MISSIONS</h1>
        <div className="container__missions">
          <div className="mission">
            <div className="mission__text">
              <span>To provide a convenient and</span>
              <span>intuitive text assistant</span>
              <span>interface for searching for an</span>
              <span>apartment in your city area.</span>
            </div>
          </div>
          <div className="mission">
            <div className="mission__text">
              <span>To reinvent the antiquated</span>
              <span>housing experience for the</span>
              <span> new generation of renters and</span>
              <span>mom & pop landlords</span>
            </div>
          </div>
        </div>
        <div className="container__image">
          <img src={city} alt="City" className="image" />
        </div>
        <div className="search">
          <span>Start your search now!</span>
          <Button />
        </div>
        <h2>CONTACT INFO</h2>
        <div className="container__contact__info">
          <img src={map} alt="Map" className="contact__image" />
          <div className="overlay__blocks">
            <div className="overlay__block">
              <MdPhoneIphone size={40} />
              <span>+7 (999) 999-99-99</span>
            </div>
            <div className="overlay__block">
              <ImLocation size={40} />
              <span>Les Massages d’Alice,</span>
            </div>
            <div className="overlay__block">
              <IoIosMail size={40} />
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
