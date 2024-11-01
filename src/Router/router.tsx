import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../Pages/Home"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const Persiapan = lazy(() => import("../Pages/Project/Persiapan"));
const LoginPage = lazy(() => import("../Pages/Auth/Login"));
const Layout = lazy(() => import("../Layouts/layout"));
const LoginLayout = lazy(() => import("../Layouts/loginLayout"));
const ProtectedRoute = lazy(() => import("../Components/protectedRoute"));
const Farm = lazy(() => import("../Pages/Farm/farmPage"));
const Loading = lazy(() => import("../Components/loading"));
const ChickinPage = lazy(() => import("../Pages/Project/chickinPage"));
// const ProjectPage = lazy(() => import("../Pages/Project/projectPage"));
const ProjectPageNew = lazy(() => import("../Pages/Project/projectPageNew"));
const LanjutanPersiapanPage = lazy(
  () => import("../Pages/Project/lanjutanPersiapan")
);
const FormChickinPage = lazy(() => import("../Pages/Project/formchickinPage"));
const CreateNewProject = lazy(
  () => import("../Pages/Project/createNewProject")
);
// pembelian
const ListPembelianPage = lazy(
  () => import("../Pages/Pembelian/ListPembelianPage")
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

            {/* project */}
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
            <Route
              path="/persiapan"
              element={
                <ProtectedRoute>
                  <Persiapan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/persiapan/lanjutan/:id"
              element={
                <ProtectedRoute>
                  <LanjutanPersiapanPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/persiapan/approval/:id"
              element={
                <ProtectedRoute>
                  <LanjutanPersiapanPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chickin"
              element={
                <ProtectedRoute>
                  <ChickinPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chickin/add"
              element={
                <ProtectedRoute>
                  <FormChickinPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/chickin/update/:id"
              element={
                <ProtectedRoute>
                  <FormChickinPage />
                </ProtectedRoute>
              }
            />

            {/* pembelian */}
            <Route
              path="/list-pembelian"
              element={
                <ProtectedRoute>
                  <ListPembelianPage />
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
