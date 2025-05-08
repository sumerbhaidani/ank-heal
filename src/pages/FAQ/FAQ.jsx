import { Link } from "react-router";
import "./FAQ.scss";

function FAQ() {
  return (
    <div className="faq">
      <h2 className="faq__header">Frequently Asked Questions</h2>
      <h3 className="faq__question">What is AnkHeal?</h3>
      <h4 className="faq__answer">
        AnkHeal is an ankle recovery app that guides you through a short and
        assigns you a personalized list of exercises to improve your ankle
        mobility, stability, and strength. Exercises are recommended based on
        research techniques and recovery principles.
      </h4>
      <h3 className="faq__question">Is AnkHeal only for ankle recovery?</h3>
      <h4 className="faq__answer">
        AnkHeal is focussed on ankle rehabilitation, but many of the exercises
        also support surrounding muscles and joints like calves, knees, and
        hips, which can benefit overall mobility and athletic performance. In
        addtion to the ankle, the health of surrounding muscles is taken into
        consideration when exercises are recommended for you.
      </h4>
      <h3 className="faq__question">What does the subscription provide?</h3>
      <ul className="faq__answer-list">
        <li className="faq__answer-single-point">
          Unlimited access to personalized ankle recovery plans
        </li>
        <li className="faq__answer-single-point">
          A 7-day free trial for all subscription options
        </li>
        <li className="faq__answer-single-point">
          Yearly plan with a discount and early access to new features and
          content
        </li>
      </ul>
      <Link to="/pricing">See subscription plans</Link>.{" "}
      <h3 className="faq__question">
        If I cancel my subscription, will I lose everything?
      </h3>
      <h4 className="faq__answer">
        You won't be able to take new evaluations, but your past exercise lists
        will remain available for future use.
      </h4>
      <h3 className="faq__question">How are the exercises selected?</h3>
      <h4 className="faq__answer">
        AnkHeal uses your responses in the evaluation form to match you with a
        curated list of recovery focussed exercises. The exercises are chosen
        based on research, recovery best practices, and real-world testing to
        help you progress safely and effectively.{" "}
      </h4>
      <p className="faq__answer-warning">
        If any exercise causes discomfort stop immediately or switch to a
        gentler variation
      </p>
      <a href="mailto:ankhealinc@gmail.com">ankhealinc@gmail.com</a>
      <h3 className="faq__question">Do I still need a physiotherapist?</h3>
      <h4 className="faq__answer">
        AnkHeal is desgined to complement, not replace a health professional. It
        is always recommended to see a health professional for any injury.{" "}
      </h4>
      <h3 className="faq__question">Can I cancel my subscription anytime?</h3>
      <h4 className="faq__answer">
        Yes, you can cancel from your account settings at any time. Please
        contact us via email if you are having issues cancelling.
      </h4>
      <h3 className="faq__question">How do I get started?</h3>
      <h4 className="faq__answer">
        Fill out a 2 minute evaluation form get your personalized plan
        instantly. Some exercises require equipment (resistance bands, steps,
        etc.), but can be substituted for other items if unavailable. Most
        exercises require no equipment.
      </h4>
      <h3 className="faq__question">Will I get new exercises as I improve?</h3>
      <h4 className="faq__answer">
        Yes! You can retake the evaluation form every 2 weeks or whenever you
        feel ready to move onto more advanced exercises.
      </h4>
      <h3 className="faq__question">Is my data safe?</h3>
      <h4 className="faq__answer">
        AnkHeal does not collect sensitive medical data. Your exercise lists and
        feedback is stored securly and used only to improve your experience
      </h4>
      <p className="faq__contact-info">
        Questions? Contact us at{" "}
        <a href="mailto:ankhealinc@gmail.com">ankhealinc@gmail.com</a>
      </p>
    </div>
  );
}

export default FAQ;
