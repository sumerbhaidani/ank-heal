import "./Footer.scss";
import InstagramLogo from "../../assets/icons/icon-instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <h6 className="footer__disclaimer">
        This app is not designed to mimic a health professional. It is always
        recommended to see a health professional for any injury.
      </h6>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/ankheal"
          className="footer__redirect"
          target="_blank"
        >
          <img
            src={InstagramLogo}
            alt="Instagram Logo"
            className="footer__instagram"
          />
        </a>
      </div>
      <h6 className="footer__copyright">&copy; 2025 AnkHeal</h6>
    </div>
  );
}

export default Footer;
