/* eslint-disable react/prop-types */
import spoon from "../../assets/spoon.png";
const SubHeading = ({ title }) => {
  return (
    <div className="header-top">
      <p>{title}</p>
      <img src={spoon} alt="spoon" />
    </div>
  );
};

export default SubHeading;
