import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import Tabs from "../../Components/Tabs";
import CeklisPersiapanForm from "../../Components/project/persiapanForm/CeklisPersiapanForm";
import DokumentasiForm from "../../Components/project/persiapanForm/DokumentasiForm";
import PelaksanaForm from "../../Components/project/persiapanForm/PelaksanaPersiapanForm";
import InformasiUmumForm from "../../Components/project/persiapanForm/InformasiUmumPersiapanForm";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "Persiapan", link: "/persiapan" },
  { label: "Form Persiapan" },
];

const tabs = [
  "Informasi umum",
  "Ceklis Persiapan",
  "Dokumentasi",
  "Pelaksana Persiapan",
];

const PersiapanFormPage = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const renderForm = () => {
    switch (currentTab) {
      case 1:
        return <InformasiUmumForm />;
      case 2:
        return <CeklisPersiapanForm />;
      case 3:
        return <DokumentasiForm />;
      case 4:
        return <PelaksanaForm />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <Breadcrumb title="Persiapan" items={breadcrumbItems} />
      <LayoutProject>
        <Tabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabs={tabs}
        />
        <hr />
        {renderForm()}

        <div className="flex items-center justify-end w-full gap-6 p-5">
          <button
            className={`px-4 py-2 text-white rounded shadow-md focus:outline-none ${
              currentTab === 1 ? "bg-gray-400" : "bg-primary hover:bg-[#5E92C4]"
            }`}
            onClick={() => setCurrentTab((prev) => Math.max(prev - 1, 1))}
            disabled={currentTab === 1}
          >
            Sebelumnya
          </button>
          <button
            className="px-4 py-2 text-white rounded shadow-md focus:outline-none bg-primary hover:bg-secondary"
            onClick={() => {
              if (currentTab === 4) {
                handleSubmit();
              } else {
                setCurrentTab((prev) => Math.min(prev + 1, 4));
              }
            }}
          >
            {currentTab === 4 ? "Submit" : "Selanjutnya"}
          </button>
        </div>
      </LayoutProject>
    </div>
  );
};

export default PersiapanFormPage;
