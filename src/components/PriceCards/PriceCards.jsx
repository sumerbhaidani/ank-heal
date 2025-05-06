import "./PriceCards.scss";
import axios from "axios";
import { UserAuth } from "../../utils/AuthContext.jsx";

function PriceCards({ monthlyStripeKey, yearlyStripeKey, baseUrl }) {
  const { session } = UserAuth();
  const customerId = session?.user?.user_metadata?.customer_id;

  async function postStripe(priceId) {
    try {
      const response = await axios.post(
        `${baseUrl}/subscription/checkout-session`,
        {
          customerId: customerId,
          priceId: priceId,
        }
      );

      window.location.href = response.data.url;
    } catch (error) {
      console.error({ message: `Unable to proceed with payment: ${error}` });
    }
  }

  return (
    <section className="price-card">
      <div className="price-card__single price-card--monthly">
        <h4 className="price-card__product-name">MONTHLY</h4>
        <p className="price-card__price">$14.99</p>
        <p className="price-card__plan-length">PER MONTH</p>

        <ul className="price-card__product-perks">
          <li className="price-card__product-perk-single">
            Unlimited Evaluations
          </li>
          <li className="price-card__product-perk-single">
            Tailored Exercise Lists
          </li>
          <li className="price-card__product-perk-single">
            Access to Your Past Evaluations
          </li>
          <li className="price-card__product-perk-single">Recovery Tips</li>
          <li className="price-card__product-perk-single">Email Support</li>
        </ul>
        <button
          onClick={() => postStripe(monthlyStripeKey)}
          className="price-card__stripe-redirect"
          target="_blank"
        >
          Continue
        </button>
      </div>
      <div className="price-card__single price-card--yearly">
        {" "}
        <p className="price-card__deal">SAVE 28%</p>
        <div className="price-card__yearly-info">
          <h4 className="price-card__product-name">ANNUAL</h4>
          <p className="price-card__price">$129.99</p>
          <p className="price-card__plan-length">PER YEAR</p>
          <p className="price-card__yearly-detail">
            Everything in Monthly, plus:
          </p>
          <ul className="price-card__product-perks price-card--yearly-list">
            <li className="price-card__product-perk-single">
              Early Access to New Features
            </li>
            <li className="price-card__product-perk-single">
              Priority Support (faster response time)
            </li>
          </ul>
          <button
            onClick={() => postStripe(yearlyStripeKey)}
            className="price-card__stripe-redirect"
            target="_blank"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}

export default PriceCards;
