import { Link } from "react-router";
import "./FAQ.scss";

function FAQ() {
  return (
    <div className="faq">
      <h2 className="faq__header">Frequently Asked Questions</h2>
      <h3 className="faq__question">What is AnkHeal?</h3>
      <h4 className="faq__answer">
        AnkHeal is an ankle recovery app that guides you through a short
        evaluation and assigns a personalized list of exercises to improve your
        ankle's mobility, stability, and strength. Exercises are recommended
        based on research-backed techniques and recovery principles.
      </h4>
      <h3 className="faq__question">Is AnkHeal only for ankle recovery?</h3>
      <h4 className="faq__answer">
        While AnkHeal focuses on ankle rehabilitation, many of the exercises
        also support surrounding muscles and joints (calves, knees, etc.) which
        can benefit overall mobility and athletic performance. The health of
        surrounding muscles are taken into consideration when your exercises are
        recommended.
      </h4>
      <h3 className="faq__question">How are the exercises selected?</h3>
      <h4 className="faq__answer">
        Your responses in the evaluation form are used to match you with a
        tailored list of recovery-focused exercises. The exercises are selected
        from our database based on research, recovery best practices, and
        real-world testing to support your progress safely and effectively.{" "}
      </h4>
      <p className="faq__answer-warning">
        ⚠️ If any exercise causes discomfort stop immediately or switch to a
        gentler variation
      </p>
      <h3 className="faq__question">What does the subscription provide?</h3>
      <ul className="faq__answer-list">
        <li className="faq__answer-single-point">
          Unlimited access to personalized ankle recovery plans
        </li>
        <li className="faq__answer-single-point">
          A 7-day free trial for all subscription options
        </li>
        <li className="faq__answer-single-point">
          Discounted yearly plan with early access to new features
        </li>
      </ul>
      <Link to="/pricing">See subscription plans</Link>.{" "}
      <h3 className="faq__question">
        If I cancel my subscription, will I lose everything?
      </h3>
      <h4 className="faq__answer">
        You won't be able to take new evaluations, but you will have access to
        your past exercise plans.
      </h4>
      <h3 className="faq__question">Can I cancel my subscription anytime?</h3>
      <h4 className="faq__answer">
        Yes, you can cancel from your account settings at any time. Email us if
        you run into any issues.
      </h4>
      <h3 className="faq__question">How do I get started?</h3>
      <h4 className="faq__answer">
        Fill out a 2 minute evaluation form get your personalized plan
        instantly. Most exercises require no equipment, though some may require
        equipment (resistance bands, steps, etc.), which can be substituted for
        other items if unavailable.
      </h4>
      <h3 className="faq__question">Will I get new exercises as I improve?</h3>
      <h4 className="faq__answer">
        Yes! You can retake the evaluation whenever you feel ready to move onto
        more advanced exercises. We recommend taking an evaluation every 2
        weeks!
      </h4>
      <h3 className="faq__question">Is my data safe?</h3>
      <h4 className="faq__answer">
        Yes, AnkHeal does not collect sensitive medical data. Your exercise
        lists and feedback is stored securly and used only to improve your
        experience.
      </h4>
      <h3 className="faq__question">Do I still need a physiotherapist?</h3>
      <h4 className="faq__answer">
        AnkHeal is designed to complement—not replace—a health professional. For
        any injury it is always recommended to see a licensed healthcare
        provider for a complete and thorough evaluation.{" "}
      </h4>
      <p className="faq__contact-info">
        Still have questions? Contact us at{" "}
        <a href="mailto:ankhealinc@gmail.com">ankhealinc@gmail.com</a>
      </p>
    </div>
  );
}

export default FAQ;
