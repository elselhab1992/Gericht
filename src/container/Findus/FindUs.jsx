import "./FindUs.css";
import { Buttons, SubHeading } from "../../components/index";
import { images } from "../../Data";

const FindUs = () => {
  return (
    <section className="find-us">
      <div className="find-us-container">
        {/* left */}
        <div className="find-us-info">
          <div className="find-us-heading">
            <SubHeading title="contact" />
            <h2>Find us</h2>
          </div>
          <div className="location">
            <p>22polygon avenue, ardwick, manchester, M13 9FX</p>
          </div>
          <div className="times">
            <h4>Opening Hours</h4>
            <p>Mon-Fri: 10.00am-02.00am</p>
            <p>Sat-Sun: 10.00am-03.00am</p>
            <Buttons>visit us</Buttons>
          </div>
        </div>
        {/* left */}
        <div className="find-img">
          <img src={images.findus} alt="find us" />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
