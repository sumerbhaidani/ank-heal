import "./HomePage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function HomePage({ baseUrl }) {
  async function serverActivate() {
    try {
      const response = await axios.get(`${baseUrl}/`);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Initial connection with server unsuccessful, please try again: ",
        error
      );
    }
  }

  useEffect(() => {
    serverActivate();
  }, []);
  return (
    <main className="home-page">
      <section className="home-page__intro">
        <h2 className="home-page__intro-header">
          Recover Smarter, Move Better
        </h2>
        <p className="home-page__intro-sub">
          AnkHeal is your personalized rehab companion, built to help you heal,
          and strengthen your ankle with exercises that work for you.
        </p>
      </section>
      <section className="home-page__guide">
        <h2 className="home-page__guide-header">How AnkHeal works:</h2>
        <ol className="home-page__guide-list">
          <li className="home-page__guide-steps">
            Create or login to your account{" "}
            <p className="home-page__guide-detail">
              Sign up for a free account or login under{" "}
              <Link
                to="/user"
                className="home-page__internal-link"
                aria-label="Click here to login to your account"
              >
                My Account
              </Link>{" "}
              to get started with your recovery.
            </p>
          </li>
          <li className="home-page__guide-steps">
            Complete a quick evaluation
          </li>
          <p className="home-page__guide-detail">
            Answer a few simple questions about your ankle health, so we can
            understand your recovery needs.{" "}
          </p>
          <li className="home-page__guide-steps">
            Get your personalized exercise plan{" "}
          </li>
          <p className="home-page__guide-detail">
            Based on your repsonses, AnkHeal will generate a tailored list of
            exercises to help you heal.
          </p>
          <li className="home-page__guide-steps">
            View your exercises at your convenience{" "}
          </li>
          <p className="home-page__guide-detail home-page--last-detail">
            {" "}
            Your exercise list is saved under{" "}
            <Link
              to="/evaluation"
              className="home-page__internal-link"
              aria-label="Click here to navigate to your past evaluations"
            >
              Past Evalutions
            </Link>
            . Revisit your list anytime or take a new evaluation as your ankle
            improves.
          </p>
        </ol>
      </section>
      <section className="home-page__stat">
        <h3 className="home-page__stat-data">
          Ankle injuries don't just heal and disappear. Up to 40% of people
          experience recurring sprains, chronic pain, or long-term instability
          after their first injury.
        </h3>
        <a
          href="https://www.ncbi.nlm.nih.gov/books/NBK560619/#:~:text=Ankle%20sprains%20are%20among%20the,the%20likelihood%20of%20further%20complications."
          target="_blank"
          className="home-page__stat-source"
          rel="noopener noreferrer"
        >
          - Mugno and Constant (2023)
        </a>
      </section>
      <section className="home-page__cta">
        <h4 className="home-page__explanation">
          Don't let stiffness sneak up on you. Your mobility depends on strong,
          flexible ankles.
        </h4>
        <Link
          to="/questionnaire"
          className="home-page__redirect"
          aria-label="Click here to fill out an evaluation. If you don't have an account you will be redirected to sign up for an account"
        >
          Click here to get started!
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
