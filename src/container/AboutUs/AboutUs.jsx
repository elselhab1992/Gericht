import "./AboutUs.css";
import { images } from "../../Data";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-background">
          <img src={images.G} alt="image" />
        </div>
        <div className="about-content">
          <div className="about-us">
            <h2>about us </h2>
            <img src={images.spoon} alt="spoon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit nobis odio
              voluptatum consequatur
            </p>
            <button>know more</button>
          </div>
          <div className="about-img">
            <img src={images.knife} alt="knife" />
          </div>
          <div className="about-us our-history">
            <h2>our history </h2>
            <img src={images.spoon} alt="spoon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit nobis odio
              voluptatum consequatur
            </p>
            <button>know more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
