import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import PastResults from "./pages/PastResults/PastResults.jsx";
import Questionnaire from "./pages/Questionnaire/Questionnaire.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AllResults from "./pages/AllResults/AllResults.jsx";

function App() {
  const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env;

  const PORT = VITE_SERVER_PORT || 5050;
  const baseUrl = `${VITE_SERVER_URL + PORT}`;
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/questionnaire"
            element={<Questionnaire baseUrl={baseUrl} />}
          />
          <Route
            path="/evaluation"
            element={<AllResults baseUrl={baseUrl} />}
          />
          <Route
            path="/evaluation/:id"
            element={<PastResults baseUrl={baseUrl} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
