import { useState } from "react";
import "./Questionnaire.scss";

function Questionnaire() {
  const [standQuestion, setStandQuestion] = useState("");
  const [balanceQuestion, setBalanceQuestion] = useState("");
  const [walkPain, setWalkPain] = useState(1);
  const [calfRaise, setCalfRaise] = useState("");
  const [squatQuestion, setSquatQuestion] = useState(1);
  const [smallHops, setSmallHops] = useState("");

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

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form action="" className="question-form" onSubmit={formSubmit}>
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
          (1 = no pain | 3 = feel slight pain but able to walk | 5 = very
          painful and unable to walk){" "}
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
