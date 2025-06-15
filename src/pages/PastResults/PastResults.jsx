import "./PastResults.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header.jsx";
function PastResults({ baseUrl }) {
  const param = useParams();
  const id = param.id;

  const [singleSurvey, setSingleSurvey] = useState([]);

  async function getSingleSurvey() {
    try {
      // try{
      //   async function serverActivate() {
      //     try {
      //       const response = await axios.get(`${baseUrl}/`);
      //       console.log(response.data);
      //     } catch (error) {
      //       console.error(
      //         "Initial connection with server unsuccessful, please try again: ",
      //         error
      //       );
      //     }
      //   }
      // } catch (err) {
      //   console.error(`Server inactive: ${err}`)
      // }
      const response = await axios.get(`${baseUrl}/survey/${id}`);
      setSingleSurvey(response.data);
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

  // Locate Exercise 1
  const exercise1 = allExercise.filter((each) => {
    return each.exercise_id === singleSurvey.exercise_1;
  });

  // Locate Exercise 2
  const exercise2 = allExercise.filter((each) => {
    return each.exercise_id === singleSurvey.exercise_2;
  });

  // Locate Exercise 3
  const exercise3 = allExercise.filter((each) => {
    return each.exercise_id === singleSurvey.exercise_3;
  });

  // Locate Exercise 4
  const exercise4 = allExercise.filter((each) => {
    return each.exercise_id === singleSurvey.exercise_4;
  });

  function handlePrint() {
    window.print();
  }

  useEffect(() => {
    getSingleSurvey();
    getExercises();
  }, []);
  return (
    <>
      <Header />
      <div className="past-results">
        <div onClick={handlePrint} className="past-results__print-button">
          Print List
        </div>
        {singleSurvey ? (
          <div className="past-results__header">
            <h4 className="past-results__header-title">
              Exercise list for evaluation on:{" "}
              {new Date(Number(singleSurvey.created_at)).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}{" "}
            </h4>
            <h6 className="past-results__id">
              List ID: {singleSurvey.survey_id}
            </h6>
          </div>
        ) : (
          <div className="past-results__header">
            <h4 className="past-results__header-title">
              Error 404: Exercise List Not Found{" "}
            </h4>
          </div>
        )}

        <div className="exercise-list">
          {exercise1.length !== 0 ? (
            <div className="exercise-list__each">
              <p className="exercise-list__name">{exercise1[0]?.name}</p>
              <p className="exercise-list__reason">
                {exercise1[0]?.exercise_function}
              </p>
              <ol className="exercise-list__steps">
                <p className="exercise-list__steps-title">Steps:</p>

                {exercise1[0]?.exercise_steps.map((each, index) => {
                  return (
                    <li key={index} className="exercise-list__each-step">
                      {each}
                    </li>
                  );
                })}
              </ol>
              <p className="exercise-list__sets">
                <span>Sets: </span> {exercise1[0]?.sets}
              </p>
              <p className="exercise-list__reps">
                <span>Reps: </span> {exercise1[0]?.reps}
              </p>
            </div>
          ) : null}

          {exercise2.length !== 0 ? (
            <div className="exercise-list__each">
              <p className="exercise-list__name">{exercise2[0]?.name}</p>
              <p className="exercise-list__reason">
                {exercise2[0]?.exercise_function}
              </p>
              <ol className="exercise-list__steps">
                <p className="exercise-list__steps-title">Steps:</p>
                {exercise2[0]?.exercise_steps.map((each, index) => {
                  return (
                    <li key={index} className="exercise-list__each-step">
                      {each}
                    </li>
                  );
                })}
              </ol>
              <p className="exercise-list__sets">
                <span>Sets: </span> {exercise2[0]?.sets}
              </p>
              <p className="exercise-list__reps">
                <span>Reps: </span> {exercise2[0]?.reps}
              </p>
            </div>
          ) : null}
          {exercise3.length !== 0 ? (
            <div className="exercise-list__each">
              <p className="exercise-list__name">{exercise3[0]?.name}</p>
              <p className="exercise-list__reason">
                {exercise3[0]?.exercise_function}
              </p>
              <ol className="exercise-list__steps">
                <p className="exercise-list__steps-title">Steps:</p>

                {exercise3[0]?.exercise_steps.map((each, index) => {
                  return (
                    <li key={index} className="exercise-list__each-step">
                      {each}
                    </li>
                  );
                })}
              </ol>
              <p className="exercise-list__sets">
                <span>Sets: </span> {exercise3[0]?.sets}
              </p>
              <p className="exercise-list__reps">
                <span>Reps: </span> {exercise3[0]?.reps}
              </p>
            </div>
          ) : null}

          {exercise4.length !== 0 ? (
            <div className="exercise-list__each">
              <p className="exercise-list__name">{exercise4[0]?.name}</p>
              <p className="exercise-list__reason">
                {exercise4[0]?.exercise_function}
              </p>
              <ol className="exercise-list__steps">
                <p className="exercise-list__steps-title">Steps:</p>

                {exercise4[0]?.exercise_steps.map((each, index) => {
                  return (
                    <li key={index} className="exercise-list__each-step">
                      {each}
                    </li>
                  );
                })}
              </ol>
              <p className="exercise-list__sets">
                <span>Sets: </span> {exercise4[0]?.sets}
              </p>
              <p className="exercise-list__reps">
                <span>Reps: </span> {exercise4[0]?.reps}
              </p>
            </div>
          ) : null}
        </div>
        <p className="exercise-list__copyright">
          Copyright AnkHeal Inc. &copy; 2025 All RIghts Reserved
        </p>
      </div>
    </>
  );
}

export default PastResults;
