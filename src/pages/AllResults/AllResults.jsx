import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllResults.scss";

function AllResults({ baseUrl }) {
  const [allSurveys, setAllSurveys] = useState([]);
  async function getAllResults() {
    try {
      const response = await axios.get(`${baseUrl}/survey`);
      setAllSurveys(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Unable to retrieve all results", error);
    }
  }

  useEffect(() => {
    getAllResults();
  }, []);
  return (
    <div className="all-results">
      <h2 className="all-results__header">Past evaluations</h2>
      <p className="all-results__page-info">
        Attached below are results from all your past evaluations. Please click
        a page below to view the exercises
      </p>
      <div className="all-results__categories">
        <h4 className="all-results__date">Date Evaluated</h4>
      </div>
      <div className="all-results__full">
        {allSurveys.map((each) => {
          return (
            <div className="all-results__each" key={each.survey_id}>
              <h4 className="all-results__date">
                {new Date(each.created_at).toDateString()}
              </h4>
              <p className="all-results__redirect">
                <Link
                  to={`/evaluation/${each.survey_id}`}
                  className="all-results__link"
                >
                  Open Exercise List
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllResults;
