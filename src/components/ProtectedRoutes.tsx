import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");

  return token ? <Dashboard /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
