import "./PriceCards.scss";

function PriceCards({ monthlyStripeUrl, yearlyStripeUrl }) {
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
        <a
          href={monthlyStripeUrl}
          className="price-card__stripe-redirect"
          target="_blank"
        >
          Continue
        </a>
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
          <a
            href={yearlyStripeUrl}
            className="price-card__stripe-redirect"
            target="_blank"
          >
            Continue
          </a>
        </div>
      </div>
    </section>
  );
}

export default PriceCards;
