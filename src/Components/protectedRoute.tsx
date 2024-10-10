// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../api/AuthService";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = sessionStorage.getItem("access_token"); // Ambil access token dari sessionStorage
  const isAuth = accessToken && !isTokenExpired(); // Cek apakah ada token dan token tidak kedaluwarsa

  if (!isAuth) {
    // Jika user belum login atau token sudah expired, arahkan ke halaman login
    return <Navigate to="/auth/login" />;
  }

  // Jika sudah login, render halaman yang di-protect
  return children;
};

export default ProtectedRoute;
