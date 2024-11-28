import React, { useState } from "react";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import RecordingList from "../../Components/project/RecordingList";
import recordingListData from "../../Data/recordingListData";
import FormRecording from "./recordingForm";
import PaginationBottom from "../../Components/PaginationBottom";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "Recording", link: "/recording" },
];

const Recording: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const Data = recordingListData;
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNavigate = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <Breadcrumb title="Recording" items={breadcrumbItems} />
      <LayoutProject>
        <div className="p-10">
          <h2 className="mb-5 text-2xl text-primary">List Recording</h2>

          {/* Garis penuh di bawah teks "List Recording" */}
          <hr className="border-t-2 border-gray-300 mb-5 w-full" />

          <div className="flex flex-wrap mb-10 gap-7">
            {[
              { label: "Unit Bisnis", option: "PT Mandiri Berlian Unggas" },
              { label: "Area", option: "Priangan" },
              { label: "Lokasi", option: "Pangandaran" },
              { label: "Produk", option: "Final Stock" },
              { label: "Nama Kandang", option: "Pangandaran 2" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-5 text-xl text-gray-600">
                  {item.label}
                </label>
                <select className="px-4 py-2 border border-gray-300 rounded">
                  <option>{item.option}</option>
                </select>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <button
              className="px-4 py-2 text-white rounded bg-secondary"
              onClick={handleNavigate}
            >
              + Tambah Data
            </button>
          </div>
        </div>
        <RecordingList items={Data} />
        <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
          <PaginationBottom
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </LayoutProject>
      {isFormVisible && <FormRecording onClose={closeForm} />}
    </div>
  );
};

export default Recording;
