import "./ExerciseList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ExerciseList({ baseUrl }) {
  const param = useParams();
  const id = param.id;

  const [singleSurvey, setSingleSurvey] = useState([]);

  async function getSingleSurvey() {
    try {
      const response = await axios.get(`${baseUrl}/survey/${id}`);
      setSingleSurvey(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error retrieving exercise list");
    }
  }

  const [allExercise, setAllExercise] = useState([]);

  async function getExercises() {
    try {
      const response = await axios.get(`${baseUrl}/exercise`);
      setAllExercise(response.data);
    } catch (error) {
      console.error("Unable to retrieve exercise details", error);
    }
  }

  // Exercise 1 Iso
  const exercise1 = allExercise.filter((each) => {
    return each.exercise_id === singleSurvey.exercise_1;
  });
  console.log(exercise1);

  useEffect(() => {
    getExercises();
    getSingleSurvey();
  }, [singleSurvey.survey_id]);
  return (
    <div className="exercise-list">
      {/* {singleSurvey.map((each) => {
        return <p className="test">{each.survey_tags}</p>;
      })} */}

      <div className="exercise-list__each">
        <h5 className="exercise-list__name">{/*{exercise1[0].name}*/}asda</h5>
        <p className="exercise-list__reason">
          sadfa
          {/* {exercise1[0].exercise_function} */}
        </p>
        <ol className="exercise-list__steps">
          <li className="exercise-list__each-step">First step</li>
          <li className="exercise-list__each-step">Second step</li>
          <li className="exercise-list__each-step">Third step</li>
        </ol>
        <p className="exercise-list__sets">Sets: db-sets</p>
        <p className="exercise-list__reps">Reps: db-reps</p>
      </div>
      <div className="exercise-list__each">
        <h5 className="exercise-list__name">Workout name</h5>
        <p className="exercise-list__reason">What it does</p>
        <ol className="exercise-list__steps">
          <li className="exercise-list__each-step">First step</li>
          <li className="exercise-list__each-step">Second step</li>
          <li className="exercise-list__each-step">Third step</li>
        </ol>
        <p className="exercise-list__sets">Sets: db-sets</p>
        <p className="exercise-list__reps">Reps: db-reps</p>
      </div>
    </div>
  );
}

export default ExerciseList;
