import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  // Stiff ankles can affect mobility
  return (
    <div className="home-page">
      <div className="home-page__cta">
        <h2 className="home-page__first-stat">
          Ankle injuries are one of the most common injuries with approximately
          2 million cases reported every year in the United States alone
        </h2>
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6602402/"
          target="_blank"
          className="home-page__stat-link"
        >
          <p className="home-page__stat-source">Herzog et al. (2019)</p>
        </a>
        <h3 className="home-page__stat-info">
          Imagine how many cases weren't reported. <br />
          Imagine how many cases occur worldwide{" "}
        </h3>
        <h2 className="home-page__second-stat">
          Ankle injuries have a very high recurrence rate with up to 40% of
          individuals experiencing additional sprains, injuries and chronic pain
          after their first injury
        </h2>
        <a
          href="https://www.ncbi.nlm.nih.gov/books/NBK560619/#:~:text=Ankle%20sprains%20are%20among%20the,the%20likelihood%20of%20further%20complications."
          target="_blank"
          className="home-page__stat-link"
        >
          <p className="home-page__stat-source">Mugno and Constant (2023)</p>
        </a>
        <h4 className="home-page__explanation">
          Your ankles may be healthy, but there's always more you can do
          strengthen them! Click the link below to take a free evaluation
        </h4>
        <Link to="/login">
          <button className="home-page__login-redirect">
            Create an Account & Take an Evaluation Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
