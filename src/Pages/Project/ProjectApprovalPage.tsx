import { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import LayoutProject from "@/Layouts/LayoutProject";
import Tabs from "@/Components/Tabs";
import ProjectApproval from "@/Components/project/projectApproval/GeneralApproval";
import FarmApproval from "@/Components/project/projectApproval/FarmApproval";
import RecordingApproval from "@/Components/project/projectApproval/RecordingApproval";
import ApprovalModal from "@/Components/project/projectApproval/ApprovalModal";
import BudgetApprovalList from "@/Components/project/projectApproval/BudgetApprovalList";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "List Project", link: "/project" },
  { label: "Persetujuan" },
];

const tabs = [
  "Informasi umum",
  "Informasi Farm",
  "Anggaran Project",
  "Data Recording",
];

const ProjectApprovalPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderForm = () => {
    switch (currentTab) {
      case 1:
        return <ProjectApproval />;
      case 2:
        return <FarmApproval />;
      case 3:
        return <BudgetApprovalList />;
      case 4:
        return <RecordingApproval />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    setIsModalOpen(true); // Membuka modal saat tombol "Approval" diklik
  };

  const closeModal = () => {
    setIsModalOpen(false); // Menutup modal
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

        {/* button */}
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
            {currentTab === 4 ? "Approval" : "Selanjutnya"}
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && <ApprovalModal onClose={closeModal} />}
      </LayoutProject>
    </div>
  );
};

export default ProjectApprovalPage;
