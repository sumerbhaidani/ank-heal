import "./Login.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext.jsx";
import { Link } from "react-router-dom";
import HeaderOnlyLogo from "../../components/HeaderOnlyLogo/HeaderOnlyLogo.jsx";

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
    SetError(false);
    if (!email || !password) {
      return alert("Please enter your email and password");
    }

    setLoading(true);

    try {
      const response = await signInUser(email, password);
      localStorage.setItem(
        "userName",
        JSON.stringify(response.data.user.user_metadata.name)
      );
      localStorage.setItem("email", JSON.stringify(response.data.user.email));
      localStorage.setItem("userId", JSON.stringify(response.data.user.id));
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
    <div className="login-page">
      <HeaderOnlyLogo />
      {/* <section className="account-benefits">
        <ul className="account-benefits__title">
          With an Account, you can:
          <li className="account-benefits__list">
            Access Your Personalized List
          </li>
          <li className="account-benefits__list"></li>
          <li className="account-benefits__list"></li>
          <li className="account-benefits__list"></li>
          <li className="account-benefits__list"></li>
        </ul>
      </section> */}
      <form onSubmit={handleSignIn} className="login-form">
        <h2 className="login-form__message">Welcome Back</h2>
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
        {/* <Link to="/user/forgot-password" className="login-form__redirect">
          <p className="login-form__forgot-password">Forgot Password</p>
        </Link> */}
      </form>
    </div>
  );
}

export default Login;
