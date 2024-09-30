import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Auth/Login";
import NotFound from "../Pages/NotFound";
import Layout from "../Layouts/layout";
import LoginLayout from "../Layouts/loginLayout";
import ProtectedRoute from "../Components/protectedRoute";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/login" element={<LoginLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
