import React, { useState, useEffect, useRef } from "react";
import "./MainBanner.scss";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import content_banner from "../../images/content_banner.png";

const MainBanner = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const slides = [
    {
      title: "New Way Of&nbsp;Living",
      subtitle: "RENTING",
      description: "Change the way you live life, closer to nature",
      backgroundImage: banner3,
    },
    {
      title: "Best Places Of&nbsp;Your City",
      subtitle: "APARTMENT",
      description: "Change the way you live life, closer to nature",
      backgroundImage: banner1,
    },
    {
      title: "Premium Class Interiors",
      subtitle: "INTERIOR",
      description: "Everything you've dreamt about, we have available",
      backgroundImage: banner2,
    },
  ];

  return (
    <div className="main-banner">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slides.map((slide, idx) => (
            <div
              className="slide"
              key={idx}
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="slide-content">
                <h6>{slide.subtitle}</h6>
                <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                <p>{slide.description}</p>
              </div>
              <img src={content_banner} alt="Content Banner" className="content-banner" />
            </div>
          ))}
        </div>
        <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
