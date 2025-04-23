import "./PriceCards.scss";

function PriceCards() {
  return (
    <section className="price-card">
      <div className="price-card__single">
        <h3 className="price-card__product-name">Monthly Subscription</h3>
        <h4 className="price-card__price">$12.99 / month</h4>
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
      <div className="price-card__single">
        {" "}
        <h3 className="price-card__product-name">Yearly Subscription</h3>
      </div>
    </section>
  );
}

export default PriceCards;
