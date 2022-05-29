import react from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isLoginIn }) => {
  return isLoginIn ? <Outlet /> : <Navigate to="/" />;
};
