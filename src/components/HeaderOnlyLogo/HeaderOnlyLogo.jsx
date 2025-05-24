import { Link } from "react-router";
import LogoImage from "../../assets/logo/ankheal-logo.png";
import "./HeaderOnlyLogo.scss";
function HeaderOnlyLogo() {
  return (
    <header className="header-only" role="banner">
      <div className="header-only__logo">
        <Link
          to="/"
          className="header-only__nav-redirect"
          aria-label="Click here to navigate to home page"
        >
          <img
            src={LogoImage}
            alt="Logo for AnkHeal"
            className="header-only__logo-image"
          />
        </Link>
      </div>
    </header>
  );
}
export default HeaderOnlyLogo;
