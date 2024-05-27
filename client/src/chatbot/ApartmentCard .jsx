import React from 'react';
import '../chatbot/Cards.scss';
import 'slick-carousel/slick/slick.css';
import MetroIcon from './MetroIcon';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

const ApartmentCard = ({ apartment, cardIndex, totalSlides }) => {
  const [index, setIndex] = React.useState(0);
  const countOfRooms = useSelector((state) => state.userAnswer.numberOfRooms);
  const delay = 5000;
  const timeoutRef = React.useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  const images = Object.keys(apartment)
    .filter((key) => typeof apartment[key] === 'string' && apartment[key].startsWith('//'))
    .map((key) => <img key={key} src={apartment[key]} alt="Apartment" />);
  const roomDescription = countOfRooms > 0 ? `${countOfRooms}-комнатная квартира` : "студия";

  return (
    <div className="apartment-card">
      <div className="card-header">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((image, idx) => (
              <div className="slide" key={idx}>
                {image}
              </div>
            ))}
          </div>
          <div className="slideshowDots">
            {images.map((_, idx) => (
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
      <div className="card-body">
        <p>
          <strong>Метро:</strong> {apartment.metro} {apartment.metro && <MetroIcon station={apartment.metro} />}
        </p>
        <p>
          <strong>Цена:</strong> {apartment.price_per_month} (руб/мес)
        </p>
        <p>
          <strong>Площадь:</strong> {apartment.area_value} м^2, {roomDescription}
        </p>
        <p>
          <strong>Адрес:</strong> {apartment.address}
        </p>
        <div className='button-cont'>
          <a href={apartment.ad_url} target="_blank" className='bu'>
            Перейти
          </a>
        </div>
        <div className='count-slides'>
         <p>{cardIndex + 1}  из  {totalSlides}</p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
