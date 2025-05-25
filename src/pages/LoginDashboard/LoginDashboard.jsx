import { Link, useParams } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext";
import "./LoginDashboard.scss";
import { useNavigate } from "react-router-dom";
import HeaderOnlyLogo from "../../components/HeaderOnlyLogo/HeaderOnlyLogo";
import ClockIcon from "../../assets/icons/clock-icon.svg";
import EvalIcon from "../../assets/icons/evaluation-icon.svg";
import ResultsIcon from "../../assets/icons/past-results-icon.svg";

function LoginDashboard({ portalLink }) {
  const param = useParams();
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  // Change from localStorage to grab information from session
  async function handleSignOut(e) {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Unable to sign out: ", error);
    }
  }

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
        <div className="dashboard__card">Access your Past Evaluations</div>
        <div className="dashboard__card">Recommended Exercise Inter</div>
        <div className="dashboard__card">Take an Evaluation Here!</div>
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
