import { Link } from "react-router";
import "./FAQ.scss";
import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function FAQ() {
  const [displayAnswer1, setDisplayAnswer1] = useState(false);
  const [displayAnswer2, setDisplayAnswer2] = useState(false);
  const [displayAnswer3, setDisplayAnswer3] = useState(false);
  const [displayAnswer4, setDisplayAnswer4] = useState(false);
  const [displayAnswer5, setDisplayAnswer5] = useState(false);
  const [displayAnswer6, setDisplayAnswer6] = useState(false);
  const [displayAnswer7, setDisplayAnswer7] = useState(false);
  const [displayAnswer8, setDisplayAnswer8] = useState(false);
  const [displayAnswer9, setDisplayAnswer9] = useState(false);
  const [displayAnswer10, setDisplayAnswer10] = useState(false);

  const handleDisplayAnswer1 = () => {
    setDisplayAnswer1(!displayAnswer1);
  };
  const handleDisplayAnswer2 = () => {
    setDisplayAnswer2(!displayAnswer2);
  };
  const handleDisplayAnswer3 = () => {
    setDisplayAnswer3(!displayAnswer3);
  };
  const handleDisplayAnswer4 = () => {
    setDisplayAnswer4(!displayAnswer4);
  };
  const handleDisplayAnswer5 = () => {
    setDisplayAnswer5(!displayAnswer5);
  };
  const handleDisplayAnswer6 = () => {
    setDisplayAnswer6(!displayAnswer6);
  };
  const handleDisplayAnswer7 = () => {
    setDisplayAnswer7(!displayAnswer7);
  };
  const handleDisplayAnswer8 = () => {
    setDisplayAnswer8(!displayAnswer8);
  };
  const handleDisplayAnswer9 = () => {
    setDisplayAnswer9(!displayAnswer9);
  };
  const handleDisplayAnswer10 = () => {
    setDisplayAnswer10(!displayAnswer10);
  };
  return (
    <>
      <Header />
      <div className="faq">
        <h2 className="faq__header">Frequently Asked Questions</h2>
        <div className="faq__question" onClick={handleDisplayAnswer1}>
          <h3 className="faq__question-text">What is AnkHeal?</h3>
          <p className="faq__question-expand">
            {displayAnswer1 === false ? "+" : "-"}
          </p>
        </div>
        {displayAnswer1 === true ? (
          <h4 className="faq__answer">
            AnkHeal is an ankle recovery app that guides you through a short
            evaluation and assigns a personalized list of exercises to improve
            your ankle's mobility, stability, and strength. Exercises are
            recommended based on research-backed techniques and recovery
            principles.
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer2}>
          {" "}
          <h3 className="faq__question-text">
            Is AnkHeal only for ankle recovery?
          </h3>
          <p className="faq__question-expand">
            {displayAnswer2 === false ? "+" : "-"}
          </p>
        </div>{" "}
        {displayAnswer2 === true ? (
          <h4 className="faq__answer">
            While AnkHeal focuses on ankle rehabilitation, many of the exercises
            also support surrounding muscles and joints (calves, knees, etc.)
            which can benefit overall mobility and athletic performance. The
            health of surrounding muscles are taken into consideration when your
            exercises are recommended.
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer3}>
          <h3 className="faq__question-text">
            How are the exercises selected?
          </h3>
          <p className="faq__question-expand">
            {displayAnswer3 === false ? "+" : "-"}
          </p>
        </div>
        {displayAnswer3 === true ? (
          <div className="faq__answer-full">
            <h4 className="faq__answer faq__answer--top">
              Your responses in the evaluation form are used to match you with a
              tailored list of recovery-focused exercises. The exercises are
              selected from our database based on research, recovery best
              practices, and real-world testing to support your progress safely
              and effectively.{" "}
            </h4>
            <p className="faq__answer-warning">
              ⚠️ All exercises are meant to challenge you. If any exercise
              causes discomfort stop immediately or switch to a easier
              variation.
            </p>
          </div>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer4}>
          <h3 className="faq__question-text">
            What does the subscription provide?
          </h3>{" "}
          <p className="faq__question-expand">
            {displayAnswer4 === false ? "+" : "-"}
          </p>
        </div>
        {displayAnswer4 === true ? (
          <div className="faq__answer-full">
            <Link to="/pricing" className="faq__plan-link">
              See subscription plans
            </Link>
          </div>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer5}>
          <h3 className="faq__question-text">
            If I cancel my subscription, will I lose access to everything?
          </h3>{" "}
          <p className="faq__question-expand">
            {displayAnswer5 === false ? "+" : "-"}
          </p>
        </div>{" "}
        {displayAnswer5 === true ? (
          <h4 className="faq__answer">
            You won't be able to take new evaluations, but you will have access
            to your past exercise plans.
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer6}>
          <h3 className="faq__question-text">
            Can I cancel my subscription anytime?
          </h3>{" "}
          <p className="faq__question-expand">
            {displayAnswer6 === false ? "+" : "-"}
          </p>
        </div>
        {displayAnswer6 === true ? (
          <h4 className="faq__answer">
            Yes, you can cancel from the customer portal under My Account at any
            time. Your subscription will be valid until the remainder of your
            billing period. Email us if you run into any issues.
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer7}>
          <h3 className="faq__question-text">How do I get started?</h3>
          <p className="faq__question-expand">
            {displayAnswer7 === false ? "+" : "-"}
          </p>{" "}
        </div>{" "}
        {displayAnswer7 === true ? (
          <h4 className="faq__answer">
            Fill out a 2 minute evaluation form get your personalized plan
            instantly. Most exercises require no equipment, though some may
            require equipment (resistance bands, steps, etc.), which can be
            substituted for other items if unavailable.
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer8}>
          <h3 className="faq__question-text">
            Will I get new exercises as I improve?
          </h3>{" "}
          <p className="faq__question-expand">
            {displayAnswer8 === false ? "+" : "-"}
          </p>{" "}
        </div>{" "}
        {displayAnswer8 === true ? (
          <h4 className="faq__answer">
            Yes! You can retake the evaluation whenever you feel ready to move
            onto more advanced exercises. We recommend taking an evaluation
            every 2 weeks!
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer9}>
          <h3 className="faq__question-text">Is my data safe?</h3>
          <p className="faq__question-expand">
            {displayAnswer9 === false ? "+" : "-"}
          </p>{" "}
        </div>
        {displayAnswer9 === true ? (
          <h4 className="faq__answer">
            Yes, AnkHeal does not collect sensitive medical data. Your exercise
            lists and feedback is stored securly and used only to improve your
            experience.
          </h4>
        ) : null}
        <div className="faq__question" onClick={handleDisplayAnswer10}>
          <h3 className="faq__question-text">
            Do I still need a physiotherapist?
          </h3>
          <p className="faq__question-expand">
            {displayAnswer10 === false ? "+" : "-"}
          </p>
        </div>{" "}
        {displayAnswer10 === true ? (
          <h4 className="faq__answer faq--last-answer">
            AnkHeal is designed to complement—not replace—a health professional.
            For any injury it is always recommended to see a licensed healthcare
            provider for a complete and thorough evaluation.{" "}
          </h4>
        ) : null}
        <p className="faq__contact-info">
          Still have questions? Contact us at{" "}
          <a href="mailto:ankhealinc@gmail.com" className="faq__contact-email">
            ankhealinc@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
