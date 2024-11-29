import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import Tabs from "../../Components/Tabs";
import GeneralInfoForm from "../../Components/project/projectForm/GeneralInfoForm";
// import FarmInfoForm from "../../Components/project/projectForm/FarmInfoItem";
import DataRecordingForm from "../../Components/project/projectForm/DataRecordingForm";
import ProjectBudgetList from "../../Components/project/projectForm/ProjectBudgetList";
import FarmInfoList from "../../Components/project/projectForm/FarmInfoList";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "List Project", link: "/project" },
  { label: "Project Form" },
];

const tabs = [
  "Informasi umum",
  "Informasi Farm",
  "Anggaran Project",
  "Data Recording",
];

const ProjectFormPage = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const renderForm = () => {
    switch (currentTab) {
      case 1:
        return <GeneralInfoForm />;
      case 2:
        return <FarmInfoList />;
      case 3:
        return <ProjectBudgetList />;
      case 4:
        return <DataRecordingForm />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <Breadcrumb title="Project Form" items={breadcrumbItems} />
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

export default ProjectFormPage;
