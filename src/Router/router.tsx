import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Auth/Login";
import NotFound from "../Pages/NotFound";
import Layout from "../Layouts/layout";
import LoginLayout from "../Layouts/loginLayout";
import ProtectedRoute from "../Components/protectedRoute";
import Farm from "../Pages/Farm/farmPage";
import ProjectPage from "../Pages/Project/projectPage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/master-data/farm"
            element={
              <ProtectedRoute>
                <Farm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project"
            element={
              <ProtectedRoute>
                <ProjectPage />
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
