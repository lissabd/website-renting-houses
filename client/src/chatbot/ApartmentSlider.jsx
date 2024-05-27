import React from "react";
import ApartmentCard from "./ApartmentCard ";
import "../chatbot/Cards.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ApartmentSlider = ({ apartments }) => {
  const [index, setIndex] = React.useState(0);
  const totalSlides = apartments.length;

  const prevSlide = () => {
    const newIndex = (index === 0) ? (apartments.length - 1) : (index - 1);
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (index === apartments.length - 1) ? 0 : (index + 1);
    setIndex(newIndex);
  };

  return (
    <div className="apartment-slider">
      <div className="apastment-slideshow">
        <div
          className="apastment-slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {Object.keys(apartments).map((key, idx) => (
            <div key={idx} className="apastment-slide">
              <ApartmentCard 
                  apartment={apartments[key]} 
                  cardIndex={idx} 
                  totalSlides={totalSlides}
              />
            </div>
          ))}
        </div>
        <div className="apartment-slider-arrows">
          <div className="arrow left-arrow" onClick={prevSlide}>
            <IoIosArrowBack size={45} />
          </div>
          <div className="arrow right-arrow" onClick={nextSlide}>
            <IoIosArrowForward size={45}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentSlider;
