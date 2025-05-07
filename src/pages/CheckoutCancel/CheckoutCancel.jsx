import "./CheckoutCancel.scss";
import { Link } from "react-router";

function CheckoutCancel() {
  return (
    <div className="checkout-cancel">
      <h2 className="checkout-cancel__header">Payment Cancelled!</h2>
      <h3 className="checkout-cancel__message">
        It happens - whether it's a change of mind, or technical issue.
      </h3>
      <h4 className="checkout-cancel__option">
        If there was an error during the payment process, select your plan and
        try again{" "}
        <Link to="/pricing" className="checkout-cancel__link">
          here
        </Link>
        .
      </h4>
      <h4 className="checkout-cancel__option">
        To learn more about AnkHeal, click one of the links in the header above.
      </h4>
    </div>
  );
}
export default CheckoutCancel;
