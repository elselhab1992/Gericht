import "./Laurels.css";
import { images, data } from "../../Data";
import SubHeading from "../../components/SubHeading/SubHeading";

const Laurels = () => {
  return (
    <section className="laurels-section" id="awards">
      <div className="laurels-container">
        {/* left side */}
        <div className="laurels-info">
          <div className="laurels-heading">
            <SubHeading title="awards & recognition" />
            <h2>Our laurels</h2>
          </div>
          <div className="awards-section">
            {data.awards.map((award, index) => {
              const { imgUrl, title, subtitle } = award;
              return (
                <div className="awards" key={index}>
                  <img src={imgUrl} alt="award" />
                  <div className="award-info">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* left side */}
        <div className="laurels-img">
          <img src={images.laurels} alt="laurels" />
        </div>
      </div>
    </section>
  );
};

export default Laurels;
