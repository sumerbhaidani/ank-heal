import "./Questionnaire.scss";

function Questionnaire() {
  return (
    <form action="" className="question-form">
      <div className="question-form__single-question">
        <label htmlFor="" className="question-form__question">
          Are you able to stand on your feet?
        </label>
        <div className="question-form__response">
          <input
            type="radio"
            id="q1Yes"
            name="q1"
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
            className="question-form__response-input"
          />
          <label htmlFor="q2No" className="question-form__response-label">
            No
          </label>
        </div>
      </div>
      <div className="question-form__single-question">
        <label htmlFor="" className="question-form__question">
          On a scale of 1-5, how much does it hurt when you walk? <br />
          (1 = no pain | 3 = feel slight pain but able to walk | 5 = very
          painful and unable to walk){" "}
        </label>
        <div className="question-form__response">
          <input
            type="range"
            className="question-form__range-response"
            min="1"
            max="5"
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
            className="question-form__response-input"
          />
          <label htmlFor="q4No" className="question-form__response-label">
            No
          </label>
        </div>
      </div>
      <div className="question-form__single-question">
        <label htmlFor="" className="question-form__question">
          On a scale of 1-5, how far down can you squat? <br />
          (1 = Not able | 3 = half squat (legs bent 45°) | 5 = full squat with
          ease){" "}
        </label>
        <div className="question-form__response">
          <input
            type="range"
            className="question-form__range-response"
            min="1"
            max="5"
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
