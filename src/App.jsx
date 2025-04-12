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

function App() {
  const { VITE_SERVER_URL, VITE_SERVER_PORT, VITE_SIDEPRO_URL } = import.meta
    .env;

  // Server Info
  const PORT = VITE_SERVER_PORT || 5050;
  const baseUrl = `${VITE_SIDEPRO_URL}`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route path="/user/signup" element={<SignUp />} />
          <Route
            path="/user/dashboard"
            element={
              <PrivateRoute>
                <LoginDashboard />{" "}
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
