import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import PastResults from "./pages/PastResults/PastResults.jsx";
import Questionnaire from "./pages/Questionnaire/Questionnaire.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AllResults from "./pages/AllResults/AllResults.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import { AuthContextProvider } from "./utils/AuthContext.jsx";
import LoginDashboard from "./pages/LoginDashboard/LoginDashboard.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import CheckoutSuccess from "./pages/CheckoutSuccess/CheckoutSuccess.jsx";
import CheckoutCancel from "./pages/CheckoutCancel/CheckoutCancel.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const {
    VITE_SERVER_URL,
    VITE_SERVER_PORT,
    VITE_STRIPE_MONTHLY_KEY,
    VITE_STRIPE_YEARLY_KEY,
    VITE_STRIPE_KEY,
  } = import.meta.env;

  // Server Info
  const PORT = VITE_SERVER_PORT || 5050;
  const baseUrl = `${VITE_SERVER_URL + PORT}`;
  const monthlyStripeKey = VITE_STRIPE_MONTHLY_KEY;
  const yearlyStripeKey = VITE_STRIPE_YEARLY_KEY;
  const stripePromise = loadStripe(VITE_STRIPE_KEY);

  // Prevent Page from Crashing
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loading />;

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage baseUrl={baseUrl} />} />
          <Route
            path="/questionnaire"
            element={
              <PrivateRoute>
                <Questionnaire baseUrl={baseUrl} />
              </PrivateRoute>
            }
          />
          <Route
            path="/evaluation"
            element={
              <PrivateRoute>
                <AllResults baseUrl={baseUrl} />
              </PrivateRoute>
            }
          />
          <Route
            path="/evaluation/:id"
            element={<PastResults baseUrl={baseUrl} />}
          />
          <Route path="/user" element={<Login />} />
          <Route
            path="/user/signup"
            element={
              <Elements stripe={stripePromise}>
                <SignUp baseUrl={baseUrl} />{" "}
              </Elements>
            }
          />
          <Route
            path="/user/dashboard"
            element={
              <PrivateRoute>
                <LoginDashboard />{" "}
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/pricing"
            element={
              <Pricing
                monthlyStripeKey={monthlyStripeKey}
                yearlyStripeKey={yearlyStripeKey}
                baseUrl={baseUrl}
              />
            }
          />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/cancel" element={<CheckoutCancel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
  //send header instead of just having the path like this
}

export default App;
