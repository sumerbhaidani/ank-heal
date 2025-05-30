import "./PlanValidation.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserAuth } from "../../utils/AuthContext";
import { Link } from "react-router";
import HeaderOnlyLogo from "../HeaderOnlyLogo/HeaderOnlyLogo";

function PlanValidation({ baseUrl }) {
  const [userPlan, setUserPlan] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

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

  function handleIsVisible() {
    setIsVisible(false);
  }

  useEffect(() => {
    checkPlan();
  }, []);

  return isVisible === true ? (
    <>
      <div className="plan-validation">
        <HeaderOnlyLogo />
        <h2
          className={`plan-validation__header ${
            loading === false ? "plan-validation--underline" : null
          }`}
        >
          {loading === true
            ? "Verifying Subscription..."
            : "Subscription Status"}
        </h2>
        <h3 className="plan-validation__message">
          To access this part of the site, you need to have an active
          subscription.{" "}
          {loading === false ? "View your subscription status below." : null}
        </h3>
        {loading === false ? (
          userPlan === true ? (
            <>
              <h4 className="plan-validation__instruction">
                Click the button below to proceed.
              </h4>
              <div
                className="plan-validation__hide-button"
                onClick={handleIsVisible}
              >
                Begin evaluation
              </div>
            </>
          ) : (
            <>
              <h4 className="plan-validation__instruction">
                Click the button below to sign up for a subscription plan to
                access this content.
              </h4>
              <Link to="/pricing" className="plan-validation__redirect">
                Select a subscription plan
              </Link>
            </>
          )
        ) : null}
      </div>
    </>
  ) : null;
}

export default PlanValidation;
