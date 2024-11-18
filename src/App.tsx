import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/layout";
// import ProtectedRoute from "./Components/protectedRoute";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/Auth/Login";
import LoginLayout from "./Layouts/loginLayout";
import Home from "./Pages/Home";
import ProjectListPage from "./Pages/Project/ProjectListPage";
import ChickinListPage from "./Pages/Project/ChickinListPage";
import ProjectFormPage from "./Pages/Project/ProjectFormPage";
import ListPembelianPage from "./Pages/Pembelian/ListPembelianPage";
import FormPembelianPage from "./Pages/Pembelian/FormPembelianPage";
import PersiapanListPage from "./Pages/Project/PersiapanListPage";
import PersiapanFormPage from "./Pages/Project/PersiapanFormPage";
import PersiapanApprovalPage from "./Pages/Project/PersiapanApprovalPage";
import Recording from "./Pages/Project/recordingPage";
import FormChickinPage from "./Pages/Project/formchickinPage";
import FormEditChickinPage from "./Pages/Project/formeditchickinPage";
import ProjectApprovalPage from "./Pages/Project/ProjectApprovalPage";
import PurchaseDetailPage from "./Pages/Pembelian/PurchaseDetailPage";
import OtherCostDetailPage from "./Pages/Pembelian/OtherCostDetailPage";
import PaymentInfoPage from "./Pages/Pembelian/PaymentInfoPage";
import ReceiptReturnPage from "./Pages/Pembelian/ReceiptReturnPage";

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
            <Route path="/project/approval" element={<ProjectApprovalPage />} />

            {/* persiapan */}
            <Route path="/persiapan" element={<PersiapanListPage />} />
            <Route path="/form-persiapan" element={<PersiapanFormPage />} />
            <Route path="/persiapan/approval" element={<PersiapanApprovalPage />} />

            {/* Chick in */}
            <Route path="/chickin" element={<ChickinListPage />} />
            <Route path="/chickin/add" element={<FormChickinPage />} />
            <Route path="/chickin/edit" element={<FormEditChickinPage />} />

            {/* recording */}
            <Route path="/recording" element={<Recording />} />

            {/* pembelian */}
            <Route path="/purchase-list" element={<ListPembelianPage />} />
            <Route path="/purchase-list/add" element={<FormPembelianPage />} />
            <Route
              path="/purchase-list/detail"
              element={<PurchaseDetailPage />}
            />
            <Route
              path="/purchase-list/other-cost-details"
              element={<OtherCostDetailPage />}
            />
            <Route
              path="/purchase-list/payment-info"
              element={<PaymentInfoPage />}
            />
            <Route
              path="/purchase-list/receipt-return"
              element={<ReceiptReturnPage />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
