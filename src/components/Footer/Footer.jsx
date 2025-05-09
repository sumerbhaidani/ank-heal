import "./Footer.scss";
import InstagramLogo from "../../assets/icons/icon-instagram.svg";
import FacebookLogo from "../../assets/icons/icon-facebook.svg";
import TwitterLogo from "../../assets/icons/icon-twitter.svg";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__disclaimer">
        This app is not designed to mimic a health professional. It is always
        recommended to see a health professional for any injury.
      </h5>
      {/* <section className="footer__useful-links">
        <h5 className="footer__section-title">Useful Links</h5>
        <Link className="footer__useful-link-single" to="/faq">
          FAQ
        </Link>
        <Link className="footer__useful-links-single" to="/pricing">
          Pricing
        </Link>
      </section> */}
      <h5 className="footer__section-title">Connect with us!</h5>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/ankheal"
          className="footer__redirect"
          target="_blank"
          aria-label="Click here to navigate to AnkHeal's Instagram page"
        >
          <img
            src={InstagramLogo}
            alt="Instagram Logo"
            className="footer__instagram"
          />
        </a>
        <a
          href="mailto:ankhealinc@gmail.com"
          className="footer__redirect"
          aria-label="Click here to email the AnkHeal team"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="footer__social-svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              className="footer__social-path"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575089157050"
          className="footer_redirect"
          target="_blank"
          aria-label="Click here to navigate to AnkHeal's Facebook page"
        >
          <img
            src={FacebookLogo}
            alt="Facebook Logo"
            className="footer_facebook"
          />
        </a>
        <a
          href="https://x.com/ankheal"
          className="footer_redirect"
          target="_blank"
          aria-label="Click here to navigate to AnkHeal's X page"
        >
          <img
            src={TwitterLogo}
            alt="Twitter Logo"
            className="footer__twitter"
          />
        </a>
      </div>
      <h6 className="footer__copyright">&copy; 2025 AnkHeal</h6>
    </footer>
  );
}

export default Footer;
