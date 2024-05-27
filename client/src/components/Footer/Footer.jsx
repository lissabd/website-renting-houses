import './Footer.scss';
import logo from '../../images/logo.png';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="footer__block">
        <img src={logo} alt="logo" className="footer__image" />
        <h6>L’Appartement de Luxe</h6>
        <div className="footer__links">
          <p className="footer__link"><Link to='/'>Home</Link> |  </p>
          <p className="footer__link"><Link to='/about-us'>About Us</Link> | </p>
          <p className="footer__link"><Link to='/assistant'>Chat Assistant</Link></p>
        </div>
      </div>
      <div className="footer__block">
        <h6 className="footer__title">ABOUT CHAT ASSISTANT</h6>
        <p className="footer__text">
          Utilize our chat assistant to explore available apartments or houses for rent effortlessly
        </p>
        <Link to='/assistant'>
          <Button/>
        </Link>
      </div>
    </div>
    </>
  );
}



export default Footer;
