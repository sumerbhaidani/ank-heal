import "./Questionnaire.scss";

function Questionnaire() {
  return (
    <form action="" className="question-form">
      <label htmlFor="" className="question-form__question">
        Can you do this?
      </label>
      <div className="question-form__response-and-label">
        <input
          type="radio"
          id="q1Yes"
          name="q1"
          className="question-form__response"
        />
        <label htmlFor="q1Yes" className="question-form__response">
          Yes
        </label>
      </div>
      <div className="question-form__response-and-label">
        <input
          type="radio"
          id="q1No"
          name="q1"
          className="question-form__response"
        />
        <label htmlFor="q1No" className="question-form__response">
          No
        </label>
      </div>
      <label htmlFor="q2" className="question-form__question">
        Rate from 1-5 with 1 being no pain and 5 being lots of pain
      </label>
      <input
        type="range"
        className="question-form__range-response"
        min="0"
        max="5"
      />
      <button type="submit">Submit Evaluation</button>
    </form>
  );
}

export default Questionnaire;
