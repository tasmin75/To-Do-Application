import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
