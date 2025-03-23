import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext.jsx";
import "./SignUp.scss";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  console.log(session);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  console.log(email, password);
  async function handleSignUp(e) {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter your email and password");
    }

    setLoading(true);

    try {
      const response = await signUpNewUser(email, password);

      if (response.success) {
        navigate("/login");
      }
    } catch (error) {
      SetError(false);
      console.error("Unable to login user: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <label htmlFor="" className="signup-form__label">
        Email
      </label>
      <input
        type="email"
        className="signup-form__input"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="" className="signup-form__label">
        Password
      </label>
      <input
        type="password"
        className="signup-form__input"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="signup-form__submit-button">Sign Up</button>
      {error ? <p className="signup-form__error">{error}</p> : null}
    </form>
  );
}

export default SignUp;
