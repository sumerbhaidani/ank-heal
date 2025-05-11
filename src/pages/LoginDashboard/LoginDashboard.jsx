import { Link, useParams } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext";
import "./LoginDashboard.scss";
import { useNavigate } from "react-router-dom";

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
  const name = JSON.parse(localStorage.getItem("userName"));

  console.log(session);
  console.log(session.user.user_metadata.name);
  console.log(session.user.email);
  return (
    <div className="login-dashboard">
      <section className="login-dashboard__heading">
        <h2 className="login-dashboard__welcome">
          Welcome {session?.user?.user_metadata?.name}!
        </h2>
        <p onClick={handleSignOut} className="login-dashboard__log-out">
          Log Out
        </p>
      </section>
      {/* one card customer portal - one card progress tracker - one card when last evaluation taken and take next evaluation */}
      <div className="login-dashboard__card"></div>
      <div className="login-dashboard__card"></div>
      <a
        href={`${portalLink}?prefilled_email=${session.user.email}`}
        className="login-dashboard__customer-portal"
      >
        Customer Portal
      </a>
    </div>
  );
}

export default LoginDashboard;
