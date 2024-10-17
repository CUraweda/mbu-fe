// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = localStorage.getItem("auth") === "true"; // Cek status auth di localStorage

  if (!isAuth) {
    // Jika user belum login, arahkan ke halaman login
    return <Navigate to="/auth/login" />;
  }

  // Jika sudah login, render halaman yang di-protect
  return children;
};

export default ProtectedRoute;
