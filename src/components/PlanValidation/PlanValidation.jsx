import "./PlanValidation.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserAuth } from "../../utils/AuthContext";

function PlanValidation({ baseUrl }) {
  const [userPlan, setUserPlan] = useState(false);

  const { session } = UserAuth();
  async function checkPlan() {
    try {
      const response = await axios.get(`${baseUrl}/user/${session.user.id}`);
      console.log(response.data[0].subscription_status);
      if (response.data[0].subscription_status === "active") {
        setUserPlan(true);
      } else {
        setUserPlan(false);
      }
    } catch (err) {
      console.error(`Unable to check if plan is active`);
    }
  }

  useEffect(() => {
    checkPlan();
  }, []);

  return (
    <div className="plan-validation">
      <h2 className="plan-validation__header">Subscription Needed</h2>
      <h3 className="plan-validation__message">
        To access this part of the site, you need to have an active
        subscription. If you don't have an active subscription, you will see a
        button below to redirect{" "}
      </h3>
    </div>
  );
}

export default PlanValidation;
