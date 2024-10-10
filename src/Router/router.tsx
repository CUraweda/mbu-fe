import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../Pages/Home"));
const LoginPage = lazy(() => import("../Pages/Auth/Login"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const Layout = lazy(() => import("../Layouts/layout"));
const LoginLayout = lazy(() => import("../Layouts/loginLayout"));
const ProtectedRoute = lazy(() => import("../Components/protectedRoute"));
const Farm = lazy(() => import("../Pages/Farm/farmPage"));
const Loading = lazy(() => import("../Components/loading"));
// const ProjectPage = lazy(() => import("../Pages/Project/projectPage"));
const ProjectPageNew = lazy(() => import("../Pages/Project/projectPageNew"));
const CreateNewProject = lazy(
  () => import("../Pages/Project/createNewProject")
);
const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
                  <ProjectPageNew />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project/edit/:id"
              element={
                <ProtectedRoute>
                  <CreateNewProject />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project/approval/:id"
              element={
                <ProtectedRoute>
                  <CreateNewProject />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project/add"
              element={
                <ProtectedRoute>
                  <CreateNewProject />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/auth/login" element={<LoginLayout />}>
            <Route path="/auth/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};
export default AppRoutes;
