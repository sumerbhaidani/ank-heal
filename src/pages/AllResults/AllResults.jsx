import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllResults.scss";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function AllResults({ baseUrl }) {
  const [allSurveys, setAllSurveys] = useState([]);
  const rawUserInfo = localStorage.getItem("userId");
  const userId = JSON.parse(rawUserInfo);

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
    <>
      <Header />
      <div className="all-results">
        <h2 className="all-results__header">Past Evaluations</h2>
        <p className="all-results__page-info">
          Attached below are results from all your past evaluations. Please
          click a page below to view the exercises. <br /> The exercises are
          meant to challenge you, not hurt you, if you feel pain at any point
          during the exercise, stop immediately.
        </p>
        <div className="all-results__categories">
          <h4 className="all-results__date">Date Evaluated</h4>
        </div>
        <div className="all-results__full">
          {allSurveys.length === 0 ? (
            <>
              {" "}
              <h4 className="all-results__none-message">
                No Evaluations Found
              </h4>
              <p className="all-results__none-message-detail">
                If you believe this is an error, please refresh the page or
                complete an Evaluation{" "}
                <Link
                  to="/questionnaire"
                  className="all-results__form-redirect"
                >
                  here
                </Link>
                .
              </p>
            </>
          ) : (
            allSurveys.map((each) => {
              return (
                <div className="all-results__each" key={each.survey_id}>
                  <h4 className="all-results__date">
                    {new Date(Number(each.created_at)).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}{" "}
                  </h4>
                  <Link
                    to={`/evaluation/${each.survey_id}`}
                    className="all-results__link"
                  >
                    <p className="all-results__redirect">Open Exercise List</p>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllResults;
