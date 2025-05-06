import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext.jsx";
import Loading from "../components/Loading/Loading.jsx";

function PrivateRoute({ children }) {
  const { session } = UserAuth();

  if (session === undefined) {
    return <Loading />;
  }

  return <>{session ? <>{children}</> : <Navigate to={"/user"} />}</>;
}

export default PrivateRoute;
