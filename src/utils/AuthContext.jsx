import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./SupabaseClient";
import axios from "axios";

const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env;
const baseUrl = `${VITE_SERVER_URL + VITE_SERVER_PORT}`;

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [session, setSession] = useState(undefined);

  //   Sign Up
  const signUpNewUser = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      console.error("Unable to sign up: ", error);
      return { success: false, error };
    }

    const userId = data?.user?.id;

    try {
      const response = await axios.get(`${baseUrl}/`);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Initial connection with server unsuccessful, please try again: ",
        error
      );
    }

    let stripeResponse;
    try {
      stripeResponse = await axios.post(
        `${baseUrl}/subscription/create-customer`,
        { name, email }
      );
    } catch (err) {
      console.error("Unable to create stripe customer", err);
    }

    const customerId = stripeResponse?.data?.id;
    if (!userId) {
      console.error("Unable to retrieve user id from database", error);
      return { success: false, error };
    }

    if (!customerId) {
      console.error(
        "Unable to retrieve customer id from Stripe response",
        error
      );
      return { success: false, error };
    }
    try {
      const response = await axios.post(`${baseUrl}/user/newUser`, {
        user_id: userId,
        email: email,
        name: name,
        stripe_customer_id: customerId,
      });
    } catch (err) {
      console.error(`Unable to add user to table: `, err);
    }

    await supabase.auth.updateUser({
      data: { name: name },
    });

    setSession(data);
    return { success: true, data };
  };

  //   Sign In
  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.error("Not able to sign in user:", error);
        return { success: false, error: error.message };
      }
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
  }, []);

  //   Sign Out
  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.error("Unable to sign out: ", error);
    }
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
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
  const context = useContext(AuthContext);

  if (!context) {
    console.error("UserAuth needs to be used with AuthContext");
  }
  return context;
}
