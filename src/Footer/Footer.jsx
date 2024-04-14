import './Footer.scss';
import logo from '../images/logo.png';
import Button from '../UI/Button/Button';


const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="footer__block">
        <img src={logo} alt="logo" className="footer__image" />
        <h6>L’Appartement de Luxe</h6>
        <div className="footer__links">
          <p className="footer__link">Home |  </p>
          <p className="footer__link">About Us | </p>
          <p className="footer__link">Chat Assistant</p>
        </div>
      </div>
      <div className="footer__block">
        <h6 className="footer__title">ABOUT CHAT ASSISTANT</h6>
        <p className="footer__text">
          Utilize our chat assistant to explore available apartments or houses for rent effortlessly
        </p>
        <Button/>
      </div>
    </div>
    </>
  );
}



export default Footer;
