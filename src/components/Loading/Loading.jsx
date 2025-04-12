import "./Loading.scss";
import { RotateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="loading">
      <RotateLoader />
    </div>
  );
}

export default Loading;
