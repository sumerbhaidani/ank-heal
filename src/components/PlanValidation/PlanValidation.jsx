import "./PlanValidation.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserAuth } from "../../utils/AuthContext";

function PlanValidation({ baseUrl }) {
  const [userPlan, setUserPlan] = useState(false);
  const [loading, setLoading] = useState(true);

  const { session } = UserAuth();
  async function checkPlan() {
    try {
      const response = await axios.get(`${baseUrl}/user/${session.user.id}`);
      setLoading(false);
      if (response.data[0].subscription_status === "active") {
        setUserPlan(true);
      } else {
        setUserPlan(false);
      }
    } catch (err) {
      console.error(`Unable to check if plan is active`);
      setUserPlan(false);
    }
  }

  useEffect(() => {
    checkPlan();
  }, []);

  return (
    <div className="plan-validation">
      <h2 className="plan-validation__header">
        {loading === true ? "Verifying Subscription..." : "Subscription Needed"}
      </h2>
      <h3 className="plan-validation__message">
        To access this part of the site, you need to have an active
        subscription.
        <br />
        {userPlan === true
          ? "Click the button below to proceed."
          : "You must have an active subscription to access this part of the site. Click the button below to sign up for a subscription plan to access this content."}{" "}
      </h3>
    </div>
  );
}

export default PlanValidation;
