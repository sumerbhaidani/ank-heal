import LogoImage from "../../assets/logo/ankheal-logo.png";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__nav-redirect">
        <div className="header__logo">
          <img
            src={LogoImage}
            alt="Logo for AnkHeal"
            className="header__logo-image"
          />
          <h1 className="header__logo-name">AnkHeal</h1>
        </div>
      </Link>
      <ul className="header__nav-bar">
        <NavLink to="/questionnaire" className="header__nav-redirect">
          <li className="header__nav-link">Evaluation Form</li>
        </NavLink>
        <NavLink to="/evaluation" className="header__nav-redirect">
          <li className="header__nav-link">Past Evaluations</li>
        </NavLink>
        <NavLink to="/user" className="header__nav-redirect">
          <li className="header__nav-link">Login</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
