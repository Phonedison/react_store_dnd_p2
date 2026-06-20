import { Navigate, Outlet, useLocation } from "react-router";
import { useType } from "../../../contexts/index";

export function ProtectedRoute() {
  const { login } = useType();
  const location = useLocation();
  // const perfilAutenticado = location.state?.typePerfil || login;

  if (!login) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
