import "./Login.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { UserAuth } from "../../utils/AuthContext.jsx";
import { supabase } from "../../utils/SupabaseClient.jsx";
import { Link } from "react-router-dom";

function Login() {
  // const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;

  // const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  // console.log(session);
  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  // } else {
  //   return <div>Logged in!</div>;
  // }
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser, signInUser } = UserAuth();
  const navigate = useNavigate();

  console.log(session);
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

      if (response.success) {
        navigate("/evaluation");
      }
    } catch (error) {
      SetError(false);
      console.error("Unable to login user: ", error);
    } finally {
      setLoading(false);
    }
  }

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
      <p className="login-form__sign-up">
        Need an account? <Link to="/user/signup">Sign Up</Link>
      </p>
      <p className="login-form__forgot-pass">
        Forgot your password <Link to="/user/signup">Click Here!</Link>
      </p>
    </form>
  );
}

export default Login;
