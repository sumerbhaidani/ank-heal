import LogoImage from "../../assets/logo/ankheal-logo.png";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header" role="banner">
      <Link
        to="/"
        className="header__nav-redirect"
        aria-label="Click here to navigate to home page"
      >
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
        <li className="header__nav-link">
          <NavLink
            to="/questionnaire"
            className="header__nav-redirect"
            aria-label="Click here to go to evalutation form"
          >
            Evaluation Form{" "}
          </NavLink>
        </li>

        <li className="header__nav-link">
          <NavLink
            to="/evaluation"
            className="header__nav-redirect"
            aria-label="View Past Evaluations here"
          >
            Past Evaluations
          </NavLink>
        </li>

        <li className="header__nav-link">
          {" "}
          <NavLink
            to="/user"
            className="header__nav-redirect"
            aria-label="Account dashboard or login"
          >
            My Account{" "}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
