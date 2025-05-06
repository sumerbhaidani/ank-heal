import { useParams } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext";
import "./LoginDashboard.scss";
import { useNavigate } from "react-router-dom";

function LoginDashboard() {
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

  return (
    <div className="login-dashboard">
      <h2 className="login-dashboard__welcome">Welcome {name}!</h2>
      <p onClick={handleSignOut} className="login-dashboard__log-out">
        Log Out
      </p>
    </div>
  );
}

export default LoginDashboard;
