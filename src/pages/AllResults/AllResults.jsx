import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllResults.scss";

function AllResults({ baseUrl }) {
  const [allSurveys, setAllSurveys] = useState([]);
  const rawUserInfo = localStorage.getItem("userInfo");
  const parseUserInfo = JSON.parse(rawUserInfo);
  const userId = parseUserInfo.user.id;
  async function getAllResults() {
    try {
      const response = await axios.get(`${baseUrl}/survey/user/${userId}`);
      const sortedData = response.data.sort((a, b) => {
        return b.created_at - a.created_at;
      });
      setAllSurveys(sortedData);
    } catch (error) {
      console.error("Unable to retrieve all results", error);
    }
  }

  useEffect(() => {
    getAllResults();
  }, []);
  return (
    <div className="all-results">
      <h2 className="all-results__header">Past Evaluations</h2>
      <p className="all-results__page-info">
        Attached below are results from all your past evaluations. Please click
        a page below to view the exercises. <br /> The exercises are meant to
        challenge you, not hurt you, if you feel pain at any point during the
        exercise, stop immediately.
        <br /> It is recommended to do an evalution every week if injured.{" "}
        <br />
        For best results, do the full list of results every other day.
      </p>
      <div className="all-results__categories">
        <h4 className="all-results__date">Date Evaluated</h4>
      </div>
      <div className="all-results__full">
        {allSurveys.map((each) => {
          return (
            <div className="all-results__each" key={each.survey_id}>
              <h4 className="all-results__date">
                {new Date(each.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
              </h4>
              <Link
                to={`/evaluation/${each.survey_id}`}
                className="all-results__link"
              >
                <p className="all-results__redirect">Open Exercise List</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllResults;
