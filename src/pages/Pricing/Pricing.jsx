import PriceCards from "../../components/PriceCards/PriceCards.jsx";
import "./Pricing.scss";
function Pricing({ monthlyStripeUrl, yearlyStripeUrl }) {
  return (
    <section className="pricing">
      <h2 className="pricing__header">AnkHeal Subscription Packages</h2>
      <h3 className="pricing__detail">
        The choice is yours, each plan comes with a 7-day free trial so you can
        see the value before you pay. No risk, just results.
      </h3>
      <PriceCards
        monthlyStripeUrl={monthlyStripeUrl}
        yearlyStripeUrl={yearlyStripeUrl}
      />
      <p className="pricing__payment-redirect">
        You will be redirected to another page where you can securely enter your
        payment details.
      </p>
    </section>
  );
}

export default Pricing;
