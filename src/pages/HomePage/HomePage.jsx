import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__cta">
        <h2 className="home-page__stat">
          Every year, approximately 2 million ankle injuries are reported in the
          U.S. alone.
        </h2>
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6602402/"
          target="_blank"
          className="home-page__stat-link"
        >
          <p className="home-page__stat-source">- Herzog et al. (2019)</p>
        </a>
        <h3 className="home-page__stat-info">
          Imagine how many cases go unreported. <br />
          Imagine how many happen worldwide.{" "}
        </h3>
        <h2 className="home-page__stat">
          Ankle injuries don't just heal and disappear -- up to 40% of people
          experience recurring sprains, chronic pain, or long-term instability
          after their first injury.
        </h2>
        <a
          href="https://www.ncbi.nlm.nih.gov/books/NBK560619/#:~:text=Ankle%20sprains%20are%20among%20the,the%20likelihood%20of%20further%20complications."
          target="_blank"
          className="home-page__stat-link"
        >
          <p className="home-page__stat-source">- Mugno and Constant (2023)</p>
        </a>
        <h4 className="home-page__explanation">
          Even if your ankles feel fine now, stiffness and weakness can still
          affect your mobility-- but there's always more you can do strengthem
          them and prevent further injuries
        </h4>
        <Link to="/questionnaire" className="home-page__link">
          <button className="home-page__redirect">
            Click here to take a free 2 minute evaluation now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
