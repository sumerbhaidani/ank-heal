import "./CheckoutSuccess.scss";

function CheckoutSuccess() {
  return (
    <div className="checkout-success">
      <h2 className="checkout-success__header">Payment Succesful!</h2>
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
  );
}

export default CheckoutSuccess;
