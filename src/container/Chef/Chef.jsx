import "./Chef.css";
import { images } from "../../Data";
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => {
  return (
    <section className="chef-section">
      <div className="chef-container">
        {/* left side */}
        <div className="chef-img">
          <img src={images.chef} alt="chef" />
        </div>
        {/* right side */}
        <div className="chef-info">
          <div className="chef-heading">
            <SubHeading title="chef's word" />
            <h2>what we believe in</h2>
          </div>
          <div className="chef-quote">
            <p>
              <span>
                <img src={images.quote} alt="quote" />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fuga officia ipsam non aliquid culpa laudantium. Ullam, numquam
              illum exercitationem maxime sit labore blanditiis aperiam? Illo
              illum exercitationem maxime sit illum exercitationem maxime sit
              illum exercitationem maxime sit labore blanditiis aperiam? Illo
            </p>
          </div>
          <div className="chef-sign">
            <p>kevin lee</p>
            <h6>chef & founder</h6>
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
