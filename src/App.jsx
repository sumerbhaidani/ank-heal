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

function App() {
  const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env;

  // Server Info
  const PORT = VITE_SERVER_PORT || 5050;
  const baseUrl = `${VITE_SERVER_URL + PORT}`;

  // Supabase Login
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

  // // if/else had return in them
  // if (!session) {
  //   <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  // } else {
  //   <div>Logged in!</div>;
  // }
  return (
    <AuthContextProvider>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
