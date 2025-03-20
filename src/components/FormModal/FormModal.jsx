import { Link } from "react-router-dom";
import "./FormModal.scss";

function FormModal({ id }) {
  return (
    <div className="form-modal">
      <p className="form-modal__success">
        Success! You're results have been submitted!
      </p>
      <p className="form-modal__redirect">
        Click{" "}
        <Link to={`/${id}/evaluation`} className="form-modal__link">
          here
        </Link>{" "}
        to access your personalized workout list!
      </p>
    </div>
  );
}

export default FormModal;
