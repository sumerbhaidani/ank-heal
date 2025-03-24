import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext.jsx";

function PrivateRoute({ children }) {
  const { session } = UserAuth();
  return <>{session ? <>{children}</> : <Navigate to={"/user/signup"} />}</>;
}

export default PrivateRoute;
