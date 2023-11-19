import "./Header.css";
import welcome from "../../assets/welcome.png";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => {
  return (
    <section className="header-section" id="home">
      <div className="header-container">
        <div className="header-info">
          <SubHeading title="chase the new flavour" />

          <div className="header-middle">
            <h1>
              The key to fine
              <br /> dining
            </h1>
          </div>

          <div className="header-bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit nobis odio
              voluptatum
              <br /> consequatur necessitatibus atque neque
            </p>
            <button>Explore Menu</button>
          </div>
        </div>
        <div className="header-img">
          <img src={welcome} alt="welcome" />
        </div>
      </div>
    </section>
  );
};

export default Header;
