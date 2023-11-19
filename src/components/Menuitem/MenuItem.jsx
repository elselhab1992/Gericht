/* eslint-disable react/prop-types */
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="menu-item">
      <div className="menu-info">
        <h4>{title}</h4>
        <div />
        <div className="menu-price">
          <div className="menu-line" />
          <h5>{price}</h5>
        </div>
      </div>
      <div className="menu-tag">
        <p>{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
