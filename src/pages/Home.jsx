import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../images/iconList1.png";
import icon2 from "../images/iconList2.png";
import icon3 from "../images/iconList3.png";
import phone from "../images/phone.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__container">
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
