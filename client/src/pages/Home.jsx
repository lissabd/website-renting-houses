import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../images/iconList1.png";
import icon2 from "../images/iconList2.png";
import icon3 from "../images/iconList3.png";
import phone from "../images/phone.png";
import town from "../images/town.png";
import house_1 from "../images/house_model.png";
import house_2 from "../images/house_model_2.png";
import Button from "../UI/Button/Button";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import "./Home.scss";
import RectangleButton from "../UI/RectangleButton/RectangleButton";
import MainBanner from "../components/MainBanner/MainBanner";

const Home = () => {
  return (
    <div className="home__container">
      <div className="banner__container">
        <MainBanner />
      </div>
      <div className="about_bot__container">
        <div className="text__containerr">
          <h2>Inclusive. Save. Helpful.</h2>
          <p>...It's all about our Chat Assistant</p>
          <Button />
        </div>
        <img src={town} alt="Town" className="town__image" />
      </div>
      <div className="houses__container">
        <div className="houses__first">
          <div className="houses__text">
            <h3>PERFECT PLACE</h3>
            <h3>FOR THE REST</h3>
            <div className="houses__spans">
              <RiDoubleQuotesR className="icon_quotes" size={50} />
              <RiDoubleQuotesL className="icon_2_quotes" size={50} />
              <span>Lorem ipsum dolor sit amet, consectetur</span>
              <span>adipiscing elit. Aliquam lectus risus, finibus</span>
              <span> ornare vestibulum et, feugiat quis dui.</span>
            </div>
            <RectangleButton text={"START"} />
          </div>
          <div className="houses__image">
            <div className="houses__head__img">STUDIO</div>
            <div className="houses__footer__img">APARTs</div>
            <img src={house_1} alt="house" />
          </div>
        </div>
        <div className="houses__second">
          <div className="houses__second__text">
            <h4>THE ULTIMATE HAVEN,</h4>
            <h4>IDEALLY SUITED FOR A</h4>
            <h4>RENTAL EXPERIENCE</h4>
            <div className="houses__second__spans">
              <RiDoubleQuotesR className="icon_quotes" size={50} />
              <RiDoubleQuotesL className="icon_2_quotes" size={50} />
              <span>Lorem ipsum dolor sit amet, consectetur</span>
              <span>adipiscing elit. Aliquam lectus risus, finibus</span>
              <span>ornare vestibulum et, feugiat quis dui.</span>
            </div>
            <RectangleButton text={"BEGIN"} />
          </div>
          <img src={house_2} alt="Another House" className="houses__image_2" />

          <div className="houses__head__img_2">COZY</div>
          <div className="houses__footer__img_2">ROOMS</div>
        </div>
      </div>
      <div className="list__container">
        <div className="text__container">
          <h5>So, What’s Chat Assistant?</h5>
          <span>Chat Assistant is here to help you explore available</span>
          <span>apartments or houses for rent effortlessly.</span>
        </div>
        <div className="blocks">
          <div className="block small">
            <img src={icon1} alt="Icon 1" />
            <div className="block__text">
              <span className="text__header">City and Area Selection</span>
              <span>
                Users can select a city and, if necessary, an area to search for
              </span>
              <span>housing, specifying their preferences.</span>
            </div>
          </div>
          <div className="block">
            <img src={icon2} alt="Icon 2" />
            <div className="block__text">
              <span className="text__header">
                Filtering and Providing Results
              </span>
              <span>
                The assistant suggests filtering search results by parameters
              </span>
              <span>such as number of rooms and cost, and displays </span>
              <span>real housing options.</span>
            </div>
          </div>
          <div className="block">
            <img src={icon3} alt="Icon 3" />
            <div className="block__text">
              <span className="text__header">
                Selection of Suitable Objects
              </span>
              <span>
                The assistant analyzes the user's preferences and suggests
              </span>
              <span> suitable housing options, saving time on the search.</span>
            </div>
          </div>
        </div>
        <div className="phone__block">
          <img className="phone" src={phone} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default Home;
