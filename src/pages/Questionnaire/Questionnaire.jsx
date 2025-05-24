import { useState } from "react";
import axios from "axios";
import FormModal from "../../components/FormModal/FormModal.jsx";
import "./Questionnaire.scss";
import { UserAuth } from "../../utils/AuthContext.jsx";
import Header from "../../components/Header/Header.jsx";

function Questionnaire({ baseUrl }) {
  const [standQuestion, setStandQuestion] = useState("");
  const [balanceQuestion, setBalanceQuestion] = useState("");
  const [walkPain, setWalkPain] = useState(1);
  const [calfRaise, setCalfRaise] = useState("");
  const [squatQuestion, setSquatQuestion] = useState(1);
  const [smallHops, setSmallHops] = useState("");
  const [surveyId, setSurveyId] = useState("");

  const [isFormSubmit, setisFormSubmit] = useState(false);

  const rawUserInfo = localStorage.getItem("userId");
  const userId = JSON.parse(rawUserInfo);

  function handleStandQuestionChange(event) {
    setStandQuestion(event.target.value);
  }

  function handleBalanceQuestionChange(e) {
    setBalanceQuestion(e.target.value);
  }

  const handleWalkPain = (e) => {
    setWalkPain(e.target.value);
  };

  function handleCalfRaise(e) {
    setCalfRaise(e.target.value);
  }

  function handleSquatQuestion(e) {
    setSquatQuestion(e.target.value);
  }

  function handleSmallHops(e) {
    setSmallHops(e.target.value);
  }
  async function sendResponse(arr, id) {
    try {
      const response = await axios.post(`${baseUrl}/survey`, {
        survey_tags: arr,
        user_id: id,
      });
      setSurveyId(response.data.survey_id);
      setisFormSubmit(true);
    } catch (error) {
      console.error("There was an error in submitting your results", error);
    }
  }

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!standQuestion || !balanceQuestion || !calfRaise || !smallHops) {
        setisFormSubmit(false);
        return alert("Please respond to all questions");
      }

      let tagArray = [];

      // Question 1
      if (standQuestion === "Yes") {
        tagArray.push("Standing");
      } else if (!tagArray.includes("Sitting") && standQuestion === "No") {
        tagArray.push("Sitting");
      }

      // Question 2
      if (balanceQuestion === "Yes") {
        tagArray.push("One leg balance");
      } else if (balanceQuestion === "No") {
        tagArray.push("No Balance");
      }
      // Question 3
      if (walkPain == 1 || walkPain == 2) {
        tagArray.push("Normal Stride");
      } else if (walkPain == 3 || walkPain == 4) {
        tagArray.push("Stride Pain");
      } else if (walkPain == 5 && !tagArray.includes("Sitting")) {
        tagArray.push("Sitting");
      }

      // Question 4
      if (calfRaise === "Yes") {
        tagArray.push("Heel Active");
      } else if (calfRaise === "No" && !tagArray.includes("Sitting")) {
        tagArray.push("Sitting");
      }

      // Question 5
      if (squatQuestion == 2) {
        tagArray.push("Slight Bend");
      } else if (squatQuestion == 3) {
        tagArray.push("Bend Pain");
      } else if (squatQuestion == 4) {
        tagArray.push("Slight Pain");
      } else if (squatQuestion == 5) {
        tagArray.push("Flexible");
      } else if (squatQuestion == 1 && !tagArray.includes("Sitting")) {
        tagArray.push("Sitting");
      }

      // Question 6
      if (smallHops === "Yes") {
        tagArray.push("Agile");
      } else if (!tagArray.includes("Sitting") && smallHops === "No") {
        tagArray.push("Sitting");
      }

      await sendResponse(tagArray, userId);

      setStandQuestion("");
      setBalanceQuestion("");
      setWalkPain(1);
      setCalfRaise("");
      setSquatQuestion(1);
      setSmallHops("");
    } catch (error) {
      console.error("Error in submitting form", error);
    }
  };
  return (
    <>
      <Header />
      <form className="question-form" onSubmit={formSubmit}>
        <h2 className="question-form__instruction">
          Answer the questions below based on how your ankle feels. Ensure you
          have enough space to move if needed.
        </h2>
        <div className="question-form__single-question">
          <label htmlFor="" className="question-form__question">
            Are you able to stand on your feet?
          </label>
          <div className="question-form__response">
            <input
              type="radio"
              id="q1Yes"
              name="q1"
              value="Yes"
              checked={standQuestion === "Yes"}
              onChange={handleStandQuestionChange}
              className="question-form__response-input"
            />
            <label htmlFor="q1Yes" className="question-form__response-label">
              Yes
            </label>
          </div>
          <div className="question-form__response">
            <input
              type="radio"
              id="q1No"
              name="q1"
              value="No"
              checked={standQuestion === "No"}
              onChange={handleStandQuestionChange}
              className="question-form__response-input"
            />
            <label htmlFor="q1No" className="question-form__response-label">
              No
            </label>
          </div>
        </div>
        <div className="question-form__single-question">
          <label htmlFor="" className="question-form__question">
            With the other leg bent at least 45°, can you balance on the injured
            foot for 10 seconds without feeling pain?
          </label>
          <div className="question-form__response">
            <input
              type="radio"
              id="q2Yes"
              name="q2"
              value="Yes"
              checked={balanceQuestion === "Yes"}
              onChange={handleBalanceQuestionChange}
              className="question-form__response-input"
            />
            <label htmlFor="q2Yes" className="question-form__response-label">
              Yes
            </label>
          </div>
          <div className="question-form__response">
            <input
              type="radio"
              id="q2No"
              name="q2"
              value="No"
              checked={balanceQuestion === "No"}
              onChange={handleBalanceQuestionChange}
              className="question-form__response-input"
            />
            <label htmlFor="q2No" className="question-form__response-label">
              No
            </label>
          </div>
        </div>
        <div className="question-form__single-question">
          <label htmlFor="" className="question-form__question">
            On a scale of 1-5, how much does it hurt when you walk? Drag the
            slider to your response.
            <br />
            (1 = no pain, walking fine | 3 = moderate pain but able to walk | 5
            = very painful and unable to walk){" "}
          </label>
          <div className="question-form__response">
            <input
              type="range"
              className="question-form__range-response"
              value={walkPain}
              min="1"
              max="5"
              onChange={handleWalkPain}
              list="values"
            />
            <datalist id="values">
              <option value="1" label="1"></option>
              <option value="2" label="2"></option>
              <option value="3" label="3"></option>
              <option value="4" label="4"></option>
              <option value="5" label="5"></option>
            </datalist>
          </div>
        </div>
        <div className="question-form__single-question">
          <label htmlFor="" className="question-form__question">
            With your feet flat on the ground, can you push up from the ground
            using your heels (calf raises)?
          </label>
          <div className="question-form__response">
            <input
              type="radio"
              id="q4Yes"
              name="q4"
              value="Yes"
              checked={calfRaise === "Yes"}
              onChange={handleCalfRaise}
              className="question-form__response-input"
            />
            <label htmlFor="q4Yes" className="question-form__response-label">
              Yes
            </label>
          </div>
          <div className="question-form__response">
            <input
              type="radio"
              id="q4No"
              name="q4"
              value="No"
              checked={calfRaise === "No"}
              onChange={handleCalfRaise}
              className="question-form__response-input"
            />
            <label htmlFor="q4No" className="question-form__response-label">
              No
            </label>
          </div>
        </div>
        <div className="question-form__single-question">
          <label htmlFor="" className="question-form__question">
            On a scale of 1-5, how far down can you squat? Drag the slider to
            your response. <br />
            (1 = Not able | 3 = half squat (legs bent 45°) | 5 = full squat with
            ease){" "}
          </label>
          <div className="question-form__response">
            <input
              type="range"
              className="question-form__range-response"
              min="1"
              max="5"
              value={squatQuestion}
              onChange={handleSquatQuestion}
              list="values"
            />
            <datalist id="values">
              <option value="1" label="1"></option>
              <option value="2" label="2"></option>
              <option value="3" label="3"></option>
              <option value="4" label="4"></option>
              <option value="5" label="5"></option>
            </datalist>
          </div>
        </div>
        <div className="question-form__single-question">
          <label htmlFor="" className="question-form__question">
            Are you able to take 5 small hops, with each hop landing about 1.5
            feet away from your starting position?
          </label>
          <div className="question-form__response">
            <input
              type="radio"
              id="q6Yes"
              name="q6"
              value="Yes"
              checked={smallHops === "Yes"}
              onChange={handleSmallHops}
              className="question-form__response-input"
            />
            <label htmlFor="q6Yes" className="question-form__response-label">
              Yes
            </label>
          </div>
          <div className="question-form__response">
            <input
              type="radio"
              id="q6No"
              name="q6"
              value="No"
              checked={smallHops === "No"}
              onChange={handleSmallHops}
              className="question-form__response-input"
            />
            <label htmlFor="q6No" className="question-form__response-label">
              No
            </label>
          </div>
        </div>
        {isFormSubmit === true ? <FormModal id={surveyId} /> : null}
        <button type="submit" className="question-form__button">
          Submit Evaluation
        </button>
      </form>
    </>
  );
}

export default Questionnaire;
