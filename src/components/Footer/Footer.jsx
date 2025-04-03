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
        <a href="mailto:ankhealinc@gmail.com" className="footer__redirect">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="footer__social-svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              className="footer__social-path"
            />
          </svg>
        </a>
      </div>
      <h6 className="footer__copyright">&copy; 2025 AnkHeal</h6>
    </div>
  );
}

export default Footer;
