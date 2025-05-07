import { Link } from "react-router";
import "./FAQ.scss";

function FAQ() {
  return (
    <div className="faq">
      <h2 className="faq__header">Frequently Asked Questions</h2>
      <h3 className="faq__question">What is AnkHeal?</h3>
      <h4 className="faq__answer">
        AnkHeal is an ankle recovery app that allows you to fill out an
        evaluation about your ankle health and then assign you a personalized
        list of exercises to improve your ankle strength and mobility.
      </h4>
      <h3 className="faq__question">Is AnkHeal only for ankle recovery?</h3>
      <h4 className="faq__answer">
        The exercise list provided will have exercises that will primarily help
        with strengthening and agility of your ankle. Some exercises will be
        good for strengthening other parts of your body.
      </h4>
      <h3 className="faq__question">What does the subscription provide?</h3>
      <h4 className="faq__answer">
        The subscription provides access to AnkHeal's technology in matching you
        up with exercises that will help with your recovery. The yearly
        subscription provides everything the monthly subscription provides plus
        early access to new features. Both subscriptions have a{" "}
        <span>7 day free trial</span> so you can see if its right for you before
        you commit. To view AnkHeal's offerings, click{" "}
        <Link to="/pricing">here</Link>.{" "}
      </h4>
      <h3 className="faq__question">
        If I cancel my subscription do I lose all access to AnkHeal?
      </h3>
      <h4 className="faq__answer">
        You won't be able to take anymore evaluations, but you will still be
        able to access the exercise lists from your past evaluations.
      </h4>
      <h3 className="faq__question">How are the exercises selected?</h3>
      <h4 className="faq__answer">
        AnkHeal has a database of exercises built from trusted physiotherapy
        sources. When you fill out the evaluation form, you indicate
        characteristics about your ankle health that are then matched up with
        exercises in our database. You should be able to do all the exercises in
        your list, but if you aren't then stop the exercise immediately or do
        the easier version of it if you are doing the challenge version of the
        exercise. Please email{" "}
        <a href="mailto:ankhealinc@gmail.com">ankhealinc@gmail.com</a> if this
        happens.{" "}
      </h4>
      <h3 className="faq__question">
        If I use AnkHeal, do I not need a physiotherapist?
      </h3>
      <h4 className="faq__answer">
        AnkHeal is desgined to complement not replace professional care.{" "}
      </h4>
      <h3 className="faq__question">Can I cancel my subscription anytime?</h3>
      <h4 className="faq__answer">
        Yes, you can cancel from your account settings at any time.
      </h4>
      <h3 className="faq__question">How do I get started?</h3>
      <h4 className="faq__answer">
        You would need to fill an evaluation form (~2 minutes) and submit your
        evaluation to get a list of exercises. You won't need equipment for most
        of the exercises.
      </h4>
      <h3 className="faq__question">Will I get new exercises as I improve?</h3>
      <h4 className="faq__answer">
        Yes! You can fill out a new evaluation form once you feel like you have
        dominated your current exercise list. It is recommended to fill out an
        evaluation form every 2 weeks to get a list of exercises suited for your
        latest ankle state.
      </h4>
    </div>
  );
}

export default FAQ;
