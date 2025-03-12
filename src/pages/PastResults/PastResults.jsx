import "./PastResults.scss";
import ExerciseList from "../../components/ExerciseList/ExerciseList.jsx";
function PastResults() {
  return (
    <div className="past-results">
      <div className="past-results__header">
        <h4 className="past-results__header-title">Past Results</h4>
        <p className="past-results__hedaer-info">
          Listed below are past results from evaluations you have taken. <br />{" "}
          You will be able to access your most recent exercise plan
        </p>
      </div>
      <ExerciseList />
    </div>
  );
}

export default PastResults;
