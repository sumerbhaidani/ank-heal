import "./Login.scss";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { UserAuth } from "../../utils/AuthContext.jsx";
import { supabase } from "../../utils/SupabaseClient.jsx";

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

  const { session, signUpNewUser } = UserAuth();
  console.log(session);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <form action="" className="login-form">
      <label htmlFor="" className="login-form__label">
        Username
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
    </form>
  );
}

export default Login;
