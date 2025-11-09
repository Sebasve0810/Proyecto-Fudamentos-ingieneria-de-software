import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RoleRoute({ role, children }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" />;

  return user.rol === role ? children : <Navigate to="/" />;
}
