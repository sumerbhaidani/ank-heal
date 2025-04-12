import "./Loading.scss";
import { RotateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="loading">
      <RotateLoader color="#1e90ff" />
    </div>
  );
}

export default Loading;
