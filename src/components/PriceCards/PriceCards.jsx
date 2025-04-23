import "./PriceCards.scss";

function PriceCards() {
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
        <form
          action="/create-checkout-session"
          method="POST"
          className="price-card__form"
        >
          <button className="price-card__button">Continue</button>
        </form>
      </div>
      <div className="price-card__single price-card--yearly">
        {" "}
        <p className="price-card__deal">SAVE 28%</p>
        <div className="price-card__yearly-info">
          <h4 className="price-card__product-name">ANNUAL</h4>
          <p className="price-card__price">$130.00</p>
          <p className="price-card__plan-length">PER YEAR</p>
          <ul className="price-card__product-perks">
            Everything in Monthly, plus:
            <li className="price-card__product-perk-single">
              Early Access to New Features
            </li>
            <li className="price-card__product-perk-single">
              Priority Support (faster response time)
            </li>
          </ul>
          <form
            action="/create-checkout-session"
            method="POST"
            className="price-card__form"
          >
            <button className="price-card__button">Continue</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PriceCards;
