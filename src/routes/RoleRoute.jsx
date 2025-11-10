// src/routes/RoleRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RoleRoute({ allowedRoles = [] }) {
  const user = useSelector((state) => state.auth.user);
  if (!user) return <Navigate to="/login" />;
  return allowedRoles.includes(user.rol || user.role) ? <Outlet /> : <Navigate to="/" />;
}
