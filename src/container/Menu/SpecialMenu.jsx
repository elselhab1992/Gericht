/* eslint-disable react/no-unescaped-entities */
import "./SpecialMenu.css";
import { images, data } from "../../Data";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";

const SpecialMenu = () => {
  return (
    <section className="special-section" id="menu">
      <div className="special-section-container">
        <div className="special-heading">
          <SubHeading title="menu that fits your palatte" />
          <h3>today's special</h3>
        </div>
        <div className="special-container">
          <div className="special-content">
            {/* left side */}
            <div className="special-menu-info">
              <div className="menu-heading">
                <h3>wine & beer</h3>

                <div className="menu-items">
                  {data.wines.map((wine, index) => {
                    const { title, price, tags } = wine;
                    return (
                      <MenuItem
                        key={index}
                        title={title}
                        price={price}
                        tags={tags}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* middle  */}
            <div className="menu-img">
              <img src={images.menu} alt="menu" />
              <button>View More</button>
            </div>
            {/* right side */}
            <div className="special-menu-info">
              <div className="menu-heading">
                <h3>cocktails</h3>

                <div className="menu-items">
                  {data.cocktails.map((cocktail, index) => {
                    const { title, price, tags } = cocktail;
                    return (
                      <MenuItem
                        key={index}
                        title={title}
                        price={price}
                        tags={tags}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
