import { Link, useParams } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext";
import "./LoginDashboard.scss";
import { useNavigate } from "react-router-dom";
import HeaderOnlyLogo from "../../components/HeaderOnlyLogo/HeaderOnlyLogo";
import ClockIcon from "../../assets/icons/clock-icon.svg";
import EvalIcon from "../../assets/icons/evaluation-icon.svg";
import ResultsIcon from "../../assets/icons/past-results-icon.svg";
import axios from "axios";
import { useState, useEffect } from "react";
function LoginDashboard({ baseUrl, portalLink }) {
  const param = useParams();
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();
  const [recentEval, setRecentEval] = useState([]);

  // console.log(recentEval);
  async function getRecentEval() {
    try {
      const response = await axios.get(
        `${baseUrl}/survey/user/${session?.user?.id}`
      );
      const sortedData = response.data.sort(
        (a, b) => b.created_at - a.created_at
      );
      setRecentEval(sortedData[0]);
    } catch (err) {
      console.error("Unable to retrieve latest exercise list", err);
    }
  }
  async function handleSignOut(e) {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Unable to sign out: ", error);
    }
  }

  // console.log(
  //   new Date(
  //     Number(recentEval?.created_at).toLocaleString("en-US", {
  //       month: "long",
  //       day: "numeric",
  //       year: "numeric",
  //     })
  //   )
  // );

  useEffect(() => {
    getRecentEval();
  }, []);
  return (
    <div className="dashboard">
      {" "}
      <div className="dashboard__main">
        <section className="dashboard__heading">
          <HeaderOnlyLogo />

          <p onClick={handleSignOut} className="dashboard__log-out">
            Log Out
          </p>
        </section>
        <h2 className="dashboard__welcome">
          Welcome {session?.user?.user_metadata?.name}!
        </h2>
        {/* one card customer portal - one card progress tracker - one card when last evaluation taken and take next evaluation */}
        <div className="dashboard__card">
          <img
            src={ResultsIcon}
            alt="Past Evaluations Icon"
            className="dashboard__icon"
          />
          <section className="dashboard__card-text">
            <h3 className="dashboard__card-title">
              Most Recent Evaluation Taken On:
            </h3>
            {recentEval.length !== 0 ? (
              <Link
                to={`/evaluation/${recentEval?.survey_id}`}
                className="dashboard__card-redirect"
              >
                {new Date(Number(recentEval?.created_at)).toLocaleString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </Link>
            ) : (
              <h4 className="dashboard__card-empty">No Exercise List Found</h4>
            )}
          </section>
        </div>
        <div className="dashboard__card">
          <img
            src={ClockIcon}
            alt="Clock Icon for Recommended Sessions Per Week"
            className="dashboard__icon"
          />
          <section className="dashboard__card-text">
            <h3 className="dashboard__card-title">
              Recommended Exercise Sessions Frequency:
            </h3>
            {recentEval.length !== 0 ? (
              <h4 className="dashboard__card-empty">3-4 Times per Week</h4>
            ) : (
              <h4 className="dashboard__card-empty">
                Unavailable: Insufficient information about ankle health to
                provide a recommendation.
              </h4>
            )}
          </section>
        </div>
        <div className="dashboard__card">
          <img src={EvalIcon} alt="" className="dashboard__icon" />
          <section className="dashboard__card-text">
            <h3 className="dashboard__card-title">
              Take an Evaluation{" "}
              <Link to="/questionnaire" className="dashboard__card-redirect">
                Here
              </Link>
            </h3>
            {recentEval.length !== 0 ? (
              <h4 className="dashboard__card-empty">
                Recommended Date for Next Evaluation:{" "}
                {new Date(
                  Number(recentEval?.created_at) + 604800000
                ).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h4>
            ) : null}
          </section>
        </div>
        <a
          href={`${portalLink}?prefilled_email=${session.user.email}`}
          className="dashboard__customer-portal"
        >
          Customer Portal
        </a>
      </div>
    </div>
  );
}

export default LoginDashboard;
