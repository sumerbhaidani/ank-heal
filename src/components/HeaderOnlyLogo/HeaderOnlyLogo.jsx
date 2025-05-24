import { Link } from "react-router";
import LogoImage from "../../assets/logo/ankheal-logo.png";
import "./HeaderOnlyLogo.scss";
function HeaderOnlyLogo() {
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
    </header>
  );
}
export default HeaderOnlyLogo;
