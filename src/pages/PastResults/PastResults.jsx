import "./PastResults.scss";
import ExerciseList from "../../components/ExerciseList/ExerciseList.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function PastResults({ baseUrl }) {
  const param = useParams();
  const id = param.id;

  const [singleSurvey, setSingleSurvey] = useState([]);

  // console.log(`${baseUrl}/survey/${id}`);
  // async function getSingleSurvey() {
  //   try {
  //     const response = await axios.get(`${baseUrl}/survey/${param.id}`);
  //     console.log(response);
  //     // setSingleSurvey(response.data);
  //   } catch (error) {
  //     console.error("Error retrieving exercise list");
  //   }
  // }
  async function getSingleSurvey() {
    try {
      const response = await fetch(`${baseUrl}/survey/${param.id}`);
      const data = await response.json(response);
      setSingleSurvey(data);
    } catch (error) {
      console.error("Error retrieving exercise list");
    }
  }
  useEffect(() => {
    getSingleSurvey();
  });
  return (
    <div className="past-results">
      <div className="past-results__header">
        <h4 className="past-results__header-title">Past Results</h4>
        <p className="past-results__hedaer-info">
          Listed below are past results from evaluations you have taken. <br />{" "}
          You will be able to access your most recent exercise plan
        </p>
      </div>
      <ExerciseList baseUrl={baseUrl} singleSurvey={singleSurvey} />
    </div>
  );
}

export default PastResults;
