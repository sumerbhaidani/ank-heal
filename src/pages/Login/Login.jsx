import "./Login.scss";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function Login() {
  const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;

  console.log(VITE_SUPABASE_URL);
  console.log(VITE_SUPABASE_KEY);
  const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return <div>Logged in!</div>;
  }
}
// return (
//   <form action="" className="login-form">
//     <label htmlFor="" className="login-form__label">
//       Username
//     </label>
//     <input type="text" className="login-form__input" placeholder="Username" />
//     <label htmlFor="" className="login-form__label">
//       Password
//     </label>
//     <input
//       type="password"
//       className="login-form__input"
//       placeholder="Password"
//     />
//     <button className="login-form__submit-button">Login</button>
//   </form>
// );
//}

export default Login;
