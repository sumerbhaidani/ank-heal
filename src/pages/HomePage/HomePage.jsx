import Tips from "../../components/Tips/Tips.jsx";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <Tips />
      <div className="home-page__cta">
        <h4 className="home-page__explanation">Call to Action Message</h4>
        <Link to="/login">
          <button className="home-page__login-redirect">
            Create an Account & Take an Evaluation Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
