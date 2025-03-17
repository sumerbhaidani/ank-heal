import { useEffect, useState } from "react";
import "./Questionnaire.scss";

function Questionnaire() {
  const [standQuestion, setStandQuestion] = useState("");
  const [balanceQuestion, setBalanceQuestion] = useState("");
  const [walkPain, setWalkPain] = useState(1);
  const [calfRaise, setCalfRaise] = useState("");
  const [squatQuestion, setSquatQuestion] = useState(1);
  const [smallHops, setSmallHops] = useState("");

  // const [tagOutput, setTagOutput] = useState([]);

  function handleStandQuestionChange(event) {
    // console.log(event.target.value);
    setStandQuestion(event.target.value);
  }

  function handleBalanceQuestionChange(e) {
    // console.log(e.target.value);
    setBalanceQuestion(e.target.value);
  }

  const handleWalkPain = (e) => {
    // console.log(e.target.value);
    setWalkPain(e.target.value);
  };

  function handleCalfRaise(e) {
    // console.log(e.target.value);
    setCalfRaise(e.target.value);
  }

  function handleSquatQuestion(e) {
    // console.log(e.target.value);
    setSquatQuestion(e.target.value);
  }

  function handleSmallHops(e) {
    // console.log(e.target.value);
    setSmallHops(e.target.value);
  }

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!standQuestion || !balanceQuestion || !calfRaise || !smallHops)
        return alert("Please respond to all questions");
      let tagArray = [];

      // Q1
      if (standQuestion === "Yes") {
        tagArray.push("Standing");
      } else if (!tagArray.includes("Sitting") && standQuestion === "No") {
        tagArray.push("Sitting");
      }

      // Q2
      if (balanceQuestion === "Yes") {
        tagArray.push("One leg balance");
      } else if (!tagArray.includes("Sitting") && balanceQuestion === "No") {
        tagArray.push("Sitting");
      }
      // Q3
      if (walkPain == 1 || walkPain == 2) {
        tagArray.push("Normal Stride");
      } else if (walkPain == 3 || walkPain == 4) {
        tagArray.push("Stride Pain");
      } else if (walkPain == 5 && !tagArray.includes("Sitting")) {
        tagArray.push("Sitting");
      }

      // Q4
      if (calfRaise === "Yes") {
        tagArray.push("Heel Active");
      } else if (calfRaise === "No" && !tagArray.includes("Sitting")) {
        tagArray.push("Sitting");
      }

      // Q5
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

      // Q6
      if (smallHops === "Yes") {
        tagArray.push("Agile");
      } else if (!tagArray.includes("Sitting") && smallHops === "No") {
        tagArray.push("Sitting");
      }

      // tagOutput variable - no state and add
      // setTagOutput((tags) => [...tags, ...tagArray]);
      // setTagOutput(tagArray); why doesn't this work?
      // Do I need await here - prolly no
      // Below doesn't include full array, how to resolve?

      console.log("Form submitted", tagArray);
      //state may not be updated
      // POST Request here or in useEffect?

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

  // useEffect(() => {
  //   console.log("Form is submitted", tagOutput);

  //   // This works - would post go here
  // }, [tagOutput]);
  return (
    <form className="question-form" onSubmit={formSubmit}>
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
          (1 = no pain, walking fine | 3 = slight pain but able to walk | 5 =
          very painful and unable to walk){" "}
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
          On a scale of 1-5, how far down can you squat? Drag the slider to your
          response. <br />
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
          Are you able to take small hops
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

      <button type="submit" className="question-form__button">
        Submit Evaluation
      </button>
    </form>
  );
}

export default Questionnaire;
