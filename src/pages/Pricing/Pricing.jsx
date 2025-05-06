import PriceCards from "../../components/PriceCards/PriceCards.jsx";
import "./Pricing.scss";
import axios from "axios";
function Pricing({ monthlyStripeKey, yearlyStripeKey, baseUrl }) {
  async function checkoutPage(customerId, price) {
    try {
      const response = await axios.post(
        `${baseUrl}/subscription/checkout-session`,
        {
          customerId: customerId,
          priceId: price,
        }
      );
      const session = await response.data;
      window.location.href = session.url;
    } catch (error) {
      console.error(`Unable to proceed with checkout: ${error} `);
    }
  }

  return (
    <section className="pricing">
      <h2 className="pricing__header">AnkHeal Subscription Packages</h2>
      <h3 className="pricing__detail">
        The choice is yours, each plan comes with a 7-day free trial so you can
        see the value before you pay. No risk, just results.
      </h3>
      <PriceCards
        monthlyStripeKey={monthlyStripeKey}
        yearlyStripeKey={yearlyStripeKey}
        baseUrl={baseUrl}
      />
      <p className="pricing__payment-redirect">
        You will be redirected to another page where you can securely enter your
        payment details.
      </p>
    </section>
  );
}

export default Pricing;
