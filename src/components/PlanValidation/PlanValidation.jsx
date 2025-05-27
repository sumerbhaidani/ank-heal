import "./PlanValidation.scss";
import { useState } from "react";
import axios from "axios";

function PlanValidation() {
  const [userPlan, setUserPlan] = useState(false);
  async function checkPlan() {
    try {
      const response = await axios.get(`${baseUrl}/user/${session.user.id}`);
      console.log(response.data[0].subscription_status);
    } catch (err) {
      console.error(`Unable to check if plan is active`);
    }
  }

  useEffect(() => {
    checkPlan();
  }, []);

  return (
    <div className="plan-validation">
      <h2 className="plan-validation__header">Verfiying Plan</h2>
    </div>
  );
}

export default PlanValidation;
