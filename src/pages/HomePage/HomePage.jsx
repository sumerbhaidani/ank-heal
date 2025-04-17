import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__intro">
        <h2 className="home-page__intro-header">
          Recover Smarter, Move Better - Step Into Strength Here
        </h2>
        {/* <h2 className="home-page__stat">
          Every year, approximately 2 million ankle injuries are reported in the
          U.S. alone.
        </h2>
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6602402/"
          target="_blank"
          className="home-page__stat-source"
        >
          - Herzog et al. (2019)
        </a>
        <h3 className="home-page__stat-info">
          Imagine how many cases go unreported. <br />
          Imagine how many happen worldwide.{" "}
        </h3>
        <h2 className="home-page__stat">
          Ankle injuries don't just heal and disappear. Up to 40% of people
          experience recurring sprains, chronic pain, or long-term instability
          after their first injury.
        </h2>
        <a
          href="https://www.ncbi.nlm.nih.gov/books/NBK560619/#:~:text=Ankle%20sprains%20are%20among%20the,the%20likelihood%20of%20further%20complications."
          target="_blank"
          className="home-page__stat-source"
        >
          - Mugno and Constant (2023)
        </a> */}
      </section>
      <h4 className="home-page__explanation">
        Don't let stiffness sneak up on you. Your mobility depends on strong,
        flexible ankles. <br />
        Click below to create an account and take a quick, free 2-minute
        evaluation today!
      </h4>
      <Link to="/questionnaire" className="home-page__redirect">
        Click here to get started!
      </Link>
    </main>
  );
}

export default HomePage;
