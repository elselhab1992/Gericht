import "./NewsLetter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <SubHeading title="newsletter" />
        <h2>subscribe to our newsletter</h2>
        <p>and never miss latest updates!</p>
        <div className="input-field">
          <input type="text" placeholder="Enter your e-mail address" />
          <button>subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
