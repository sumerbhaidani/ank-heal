import "./ExerciseList.scss";

function ExerciseList() {
  return (
    <div className="exercise-list">
      {/* map function here */}
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
