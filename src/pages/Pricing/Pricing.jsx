import PriceCards from "../../components/PriceCards/PriceCards.jsx";

function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing">AnkHeal Subscription Packages</h2>
      <h3 className="pricing__cta">Step into strength here!</h3>
      <PriceCards />
      <p className="pricing__payment-redirect">
        You will be redirected to another page where you can securely enter your
        payment details
      </p>
    </section>
  );
}

export default Pricing;
