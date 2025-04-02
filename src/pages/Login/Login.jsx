import "./Login.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext.jsx";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSignIn(e) {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter your email and password");
    }

    setLoading(true);

    try {
      const response = await signInUser(email, password);
      localStorage.setItem("userInfo", JSON.stringify(response.data));

      if (response.success) {
        navigate(`/user/dashboard`);
      } else if (!response.success) {
        alert(response.error);
      }
    } catch (error) {
      SetError(true);
      console.error("Unable to login user: ", error);
    }
  }

  useEffect(() => {
    if (!session) {
      return;
    } else {
      navigate("/user/dashboard");
    }
  }, []);
  return (
    <form onSubmit={handleSignIn} className="login-form">
      <label htmlFor="" className="login-form__label">
        Email
      </label>
      <input
        type="email"
        className="login-form__input"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="" className="login-form__label">
        Password
      </label>
      <input
        type="password"
        className="login-form__input"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="login-form__submit-button">Login</button>
      {error === true ? <p>Login failed, please try again</p> : null}
      <Link to="/user/signup" className="login-form__redirect">
        <p className="login-form__sign-up">Create an Account</p>
      </Link>
      {/* <Link to="/user/signup">
        <p className="login-form__forgot-pass">Forgot your password?</p>
      </Link> */}
    </form>
  );
}

export default Login;
