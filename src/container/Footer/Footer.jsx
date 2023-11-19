import "./Footer.css";
import NewsLetter from "../../components/Newsletter/Newsletter";
import { images } from "../../Data";
import SubHeading from "../../components/SubHeading/SubHeading";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="overlay" />
      <div className="newsletter">
        <NewsLetter />
      </div>
      <div className="footer-container">
        {/* left */}
        <div className="footer-left">
          <h3>contact us</h3>
          <p>22 polygon avenue, manchester, M13 9FX</p>
          <p>+123456789</p>
          <p>+123456789</p>
        </div>
        {/* middle */}
        <div className="footer-middle">
          <img src={images.gericht} alt="logo" className="logo" />
          <SubHeading title='"the best way to find yourself is to lose yourself in the service of others."' />
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
        {/* right */}
        <div className="footer-right">
          <h3>working hours</h3>
          <p>
            monday-friday:
            <br />
            08.00am-12.00am
          </p>
          <p>
            saturday-sunday:
            <br />
            07.00am-11.00pm
          </p>
        </div>
      </div>
      <p className="copyright">2021 Gericht. all rights reserved.</p>
    </footer>
  );
};

export default Footer;
