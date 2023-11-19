import "./Newsletter.css";
import { Buttons, SubHeading } from "../index";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <SubHeading title="newsletter" />
        <h2>subscribe to our newsletter</h2>
        <p>and never miss latest updates!</p>
        <div className="input-field">
          <input type="text" placeholder="Enter your e-mail address" />
          <Buttons>subscribe</Buttons>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
