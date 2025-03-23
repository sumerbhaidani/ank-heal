import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./SupabaseClient";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [session, setSession] = useState(null);

  //   Sign Up
  const signUpNewUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Unable to sign up: ", error);
      return { success: false, error };
    }
    return { success: true, data };
  };

  //   Sign In
  const signInUser = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.error("Not able to sign in user:", error);
        return { success: false, error: error.message };
      }
      //   Remove console.log before submit
      console.log("Sign in success: ", data);
      return { success: true, data };
    } catch (error) {
      console.error("Unable to sign in user: ", error);
    }
  };
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  //   Sign Out
  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.error("Unable to sign out: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signOut, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
