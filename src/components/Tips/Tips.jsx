import { Link } from "react-router-dom";
import "./Tips.scss";

function Tips() {
  return (
    <>
      <div className="tips">
        <h3 className="tips__header">Tip 1 - Never been injured</h3>
        <p>Short description of tip</p>
        <h3 className="tips__header">Tip 2 - Currently injured</h3>
        <p>Short description of tip</p>
        <h3 className="tips__header">Tip 3 - Injured but recovered</h3>
        <p>Short description of tip</p>
      </div>
    </>
  );
}

export default Tips;
