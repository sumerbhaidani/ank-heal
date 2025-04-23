import "./PriceCards.scss";

function PriceCards() {
  return (
    <section className="price-card">
      <div className="price-card__single">
        <h3 className="price-card__product-name">Monthly Subscription</h3>
        <h4 className="price-card__price">$14.99 / month</h4>
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
        <p className="price-card__payment-redirect">
          You will be redirected to another page where you can securely enter
          your payment details
        </p>
      </div>
      <div className="price-card__single">
        {" "}
        <h3 className="price-card__product-name">Yearly Subscription</h3>
        <h4 className="price-card__price">$130 / year</h4>
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
      </div>
    </section>
  );
}

export default PriceCards;
