import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = memo(({ isLoginIn }) => {
  return isLoginIn ? <Outlet /> : <Navigate to="/sign-in" />;
});
