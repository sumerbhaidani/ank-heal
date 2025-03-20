import axios from "axios";

function AllResults() {
  async function getAllResults() {
    try {
      const response = await axios.get();
    } catch (error) {
      console.error("Unable to retrieve all results", error);
    }
  }
  return (
    <div className="all-results">
      <h2 className="all-results__header">Past evaluations</h2>
      <p className="all-results__page-info">
        Attached below are results from all your past evaluations. Please click
        a page below to view the exercises
      </p>
      <div className="all-results__each">
        <h4 className="all-results__date">created_at</h4>
      </div>
    </div>
  );
}

export default AllResults;
