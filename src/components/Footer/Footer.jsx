import "./Footer.scss";
import InstagramLogo from "../../assets/icons/icon-instagram.svg";
import FacebookLogo from "../../assets/icons/icon-facebook.svg";
import TwitterLogo from "../../assets/icons/icon-twitter.svg";
import { Link } from "react-router";
import AnkHealLogo from "../../assets/logo/ankheal-logo.png";
import YoutubeLogo from "../../assets/icons/icon-youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__all-links">
        <Link className="footer__logo" to="/">
          <img
            src={AnkHealLogo}
            alt="AnkHeal Logo"
            className="footer__logo-image"
          />
          <p className="footer__logo-name">AnkHeal</p>
        </Link>
        <section className="footer__useful-links">
          <h5 className="footer__section-title">Site Links</h5>
          <Link className="footer__useful-links-single" to="/faq">
            FAQ
          </Link>
          <Link className="footer__useful-links-single" to="/pricing">
            Pricing
          </Link>
          <Link className="footer__useful-links-single" to="/questionnaire">
            Evaluation Form
          </Link>
          <Link className="footer__useful-links-single" to="/evaluation">
            Past Evaluations
          </Link>
        </section>
        <div className="footer__socials">
          {" "}
          <h5 className="footer__section-title">Connect with us!</h5>
          <div className="footer__socials-logos">
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
              href="https://www.facebook.com/ankheal/"
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
            <a
              href="https://youtube.com/@myankheal"
              className="footer_redirect"
              target="_blank"
              aria-label="Click here to navigate to AnkHeal's Youtube page"
            >
              <svg
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 49 49"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512
			c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744
			C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"
                    />
                    <path
                      d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229
			c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113
			c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <h5 className="footer__disclaimer">
        AnkHeal is not designed to mimic or replace a health professional. It is
        always recommended to see a health professional for any injury.
      </h5>
      <h6 className="footer__copyright">
        Copyright AnkHeal Inc. &copy; 2025 All RIghts Reserved
      </h6>
    </footer>
  );
}

export default Footer;
