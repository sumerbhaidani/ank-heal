import LogoImage from "../../assets/logo/ankheal-logo.png";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import { UserAuth } from "../../utils/AuthContext";

function Header() {
  const { session } = UserAuth();

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
      {session == null ? (
        <ul className="header__nav-bar">
          <li className="header__nav-link">
            <NavLink
              to="/faq"
              className="header__nav-redirect"
              aria-label="Click here to go to evalutation form"
            >
              FAQ{" "}
            </NavLink>
          </li>

          <li className="header__nav-link">
            <NavLink
              to="/pricing"
              className="header__nav-redirect"
              aria-label="View Past Evaluations here"
            >
              Pricing
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
      ) : (
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
      )}
    </header>
  );
}

export default Header;
