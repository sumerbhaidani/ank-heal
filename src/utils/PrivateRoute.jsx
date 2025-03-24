import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext.jsx";

function PrivateRoute({ children }) {
  const { session } = UserAuth();
  console.log(session);
  if (session === undefined) {
    return <h2>Loading...</h2>;
  }
  return <>{session ? <>{children}</> : <Navigate to={"/user/"} />}</>;
}

export default PrivateRoute;
