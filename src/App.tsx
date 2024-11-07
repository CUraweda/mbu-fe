import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/layout";
// import ProtectedRoute from "./Components/protectedRoute";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/Auth/Login";
import LoginLayout from "./Layouts/loginLayout";
import Home from "./Pages/Home";
import ProjectListPage from "./Pages/Project/ProjectListPage";
import ProjectFormPage from "./Pages/Project/ProjectFormPage";
import ListPembelianPage from "./Pages/Pembelian/ListPembelianPage";
import FormPembelianPage from "./Pages/Pembelian/FormPembelianPage";
import Recording from "./Pages/Project/recordingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/login" element={<LoginLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>

        {/* <Route element={<ProtectedRoute />}> */}
        <Route>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            {/* project */}
            <Route path="/project" element={<ProjectListPage />} />
            <Route path="/project/add" element={<ProjectFormPage />} />

            <Route path="/recording" element={<Recording />} /> 

            {/* pembelian */}
            <Route path="/list-pembelian" element={<ListPembelianPage />} />
            <Route path="/form-pembelian" element={<FormPembelianPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
