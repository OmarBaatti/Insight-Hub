import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = true; // Replace with state from Redux later

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
