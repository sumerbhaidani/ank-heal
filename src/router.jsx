import AllResults from "./pages/AllResults/AllResults.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/evaluation", element: <AllResults /> },
]);

// maybe won't need this
