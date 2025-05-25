import PriceCards from "../../components/PriceCards/PriceCards.jsx";
import "./Pricing.scss";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Pricing({ monthlyStripeKey, yearlyStripeKey, baseUrl }) {
  return (
    <>
      <Header />
      <section className="pricing">
        <h2 className="pricing__header">AnkHeal Subscription Packages</h2>
        <h3 className="pricing__detail">
          No delay, just recovery. Select a plan and get your access to a custom
          exercise list instantly. All prices are in CAD.
        </h3>
        <PriceCards
          monthlyStripeKey={monthlyStripeKey}
          yearlyStripeKey={yearlyStripeKey}
          baseUrl={baseUrl}
        />
        <p className="pricing__payment-redirect">
          If you are logged in, you will be redirected to another page where you
          can securely enter your payment details, otherwise you will be
          redirected to the login page.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Pricing;
