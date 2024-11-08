
import React, { useState } from "react";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import RecordingList from "../../Components/project/RecordingList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import recordingListData from "../../Data/recordingListData";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "Recording", link: "/recording" },
  { label: "Form Recording", link: "/" },
];

const Recording: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const Data = recordingListData;


  return (
    <div>
      <Breadcrumb title="Recording" items={breadcrumbItems} />
      <LayoutProject>
        <div className="p-10">
          <h2 className="mb-5 text-2xl text-primary">List Recording</h2>

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
                  <option value={item.option}>{item.option}</option>
                </select>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <button className="px-4 py-2 text-white rounded bg-secondary">
              + Tambah Data
            </button>
          </div>
        </div>

        <RecordingList items={recordingData} />

        <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
          <div className="flex items-center justify-center md:justify-end">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
            >
              <FaArrowLeft size={18} className="text-primary" />
              <div className="flex text-center">Prev</div>
            </button>
            <span className="mx-2 text-primary">{currentPage} of {Math.ceil(recordingData.length / 10)}</span>
            <button
              disabled={Math.ceil(recordingData.length / 10) === 1}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
            >
              <div className="flex text-center">Next</div>
              <FaArrowRight size={18} className="text-primary" />
            </button>
          </div>
        </div>
      </LayoutProject>

      {/* Conditionally render the form component */}
      {isFormVisible && <FormRecording onClose={() => setIsFormVisible(false)} />}
    </div>
  );
};

export default Recording;
