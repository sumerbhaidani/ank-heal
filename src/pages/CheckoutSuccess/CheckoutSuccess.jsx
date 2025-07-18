import "./CheckoutSuccess.scss";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function CheckoutSuccess() {
  return (
    <>
      <Header />
      <div className="checkout-success">
        <h2 className="checkout-success__header">Payment Successful!</h2>
        <h3 className="checkout-success__message">
          You now have access to all of AnkHeal's features! <br />
          Please contact us at{" "}
          <a
            href="mailto:ankhealinc@gmail.com"
            className="checkout-success__email"
          >
            ankhealinc@gmail.com
          </a>{" "}
          if you have any questions!
        </h3>
        <h4 className="checkout-success__final">
          Good luck on your recovery journey!
        </h4>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutSuccess;
