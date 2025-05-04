import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext.jsx";
import "./SignUp.scss";
import axios from "axios";

function SignUp({ baseUrl }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, SetError] = useState(false);
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter all the required information");
    }

    if (password.length < 8) {
      return alert("Password length must be 8 characters");
    }

    setLoading(true);

    try {
      const stripeResponse = await axios.post(
        `${baseUrl}/subscription/create-customer`,
        { name, email }
      );

      const customerId = stripeResponse?.data?.id;

      const response = await signUpNewUser(name, email, password, customerId);

      localStorage.setItem("userName", JSON.stringify(response.data.user.name));
      localStorage.setItem("email", JSON.stringify(response.data.user.email));
      localStorage.setItem("userId", JSON.stringify(response.data.user.id));

      if (response.success) {
        alert("Signup is successful, you can now use AnkHeal");
        navigate(`/user/dashboard`);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      SetError(true);
      console.error("Unable to login user: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <label className="signup-form__label">Name</label>
      <input
        type="text"
        className="signup-form__input"
        placeholder="Preferred Name"
        value={name}
        onChange={handleNameChange}
      />
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
      <p className="signup-form__rule">
        Password must be at least 8 characters
      </p>
      {error === true ? <p className="signup-form__error">{error}</p> : null}

      <button className="signup-form__submit-button">Sign Up</button>
    </form>
  );
}

export default SignUp;
