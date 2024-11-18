import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import Tabs from "../../Components/Tabs";
import PersiapanApproval from "../../Components/project/persiapanApproval/InformasiUmumPersiapanApproval";
import CeklisApproval from "../../Components/project/persiapanApproval/CeklisApproval";
import DokumentasiApproval from "../../Components/project/persiapanApproval/DokumentasiApproval";
import PelaksanaPersiapanApproval from "../../Components/project/persiapanApproval/PelaksanaPersiapanApproval";
import KomentarPelaksanaPersiapanApproval from "../../Components/project/persiapanApproval/KomentarPelaksanaPersiapanApproval"; // Import komponen baru

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "List Persiapan", link: "/persiapan" },
  { label: "Persetujuan" },
];

const tabs = [
  "Informasi umum",
  "Ceklis Persiapan",
  "Dokumentasi",
  "Pelaksana Persiapan",
];

const PersiapanApprovalPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false);

  const renderForm = () => {
    switch (currentTab) {
      case 1:
        return <PersiapanApproval />;
      case 2:
        return <CeklisApproval />;
      case 3:
        return <DokumentasiApproval />;
      case 4:
        return <PelaksanaPersiapanApproval />;
      default:
        return null;
    }
  };

  const handleApprove = () => {
    alert("Disetujui oleh supervisor!");
  };

  const handleRejectClick = () => {
    setIsRejectPopupOpen(true); // Membuka pop-up komentar
  };

  const handleRejectConfirm = (comment: string) => {
    alert(`Ditolak dengan komentar: ${comment}`);
    setIsRejectPopupOpen(false);
  };

  const handleCloseRejectPopup = () => {
    setIsRejectPopupOpen(false); // Menutup pop-up komentar
  };

  return (
    <div>
      <Breadcrumb title="Persetujuan" items={breadcrumbItems} />
      <LayoutProject>
        <Tabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabs={tabs}
        />
        <hr />
        {renderForm()}

        {/* Buttons: Only 'Setuju' and 'Tolak' */}
        {currentTab === 4 && (
          <div className="flex items-center justify-end w-full gap-6 p-5">
            <button
              className="px-4 py-2 text-white rounded shadow-md focus:outline-none bg-green-500 hover:bg-green-700"
              onClick={handleApprove}
            >
              Setuju
            </button>
            <button
              className="px-4 py-2 text-white rounded shadow-md focus:outline-none bg-red-500 hover:bg-red-700"
              onClick={handleRejectClick}
            >
              Tolak
            </button>
          </div>
        )}

        {/* KomentarPelaksanaPersiapanApproval Popup */}
        {isRejectPopupOpen && (
          <KomentarPelaksanaPersiapanApproval
            onClose={handleCloseRejectPopup}
            onConfirm={handleRejectConfirm}
          />
        )}
      </LayoutProject>
    </div>
  );
};

export default PersiapanApprovalPage;
