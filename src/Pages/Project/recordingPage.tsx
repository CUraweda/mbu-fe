// src/Pages/Recording.tsx
import React, { useState } from 'react';
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import RecordingList from '../../Components/project/RecordingList';
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import recordingData from "../../Data/recordingData";
import FormRecording from "./recordingForm";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "Recording", link: "/recording" },
  { label: "Form Recording", link: "/" },
];

const Recording: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNavigate = () => {
    setIsFormVisible(true); 
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Breadcrumb title="Recording" items={breadcrumbItems} />
      <LayoutProject>
        <div className="p-7">
          <h1 className="text-2xl mb-5 text-primary">List Recording</h1>
          <hr className="border-t border-gray-300 my-5 w-full"/>


          <div className="flex gap-7 mb-5 flex-wrap">
            {[
              { label: 'Project Id', option: '1' },
              { label: 'Unit Bisnis', option: 'PT Mandiri Berlian Unggas' },
              { label: 'Area', option: 'Priangan' },
              { label: 'Lokasi', option: 'Pangandaran' },
              { label: 'Produk', option: 'Final Stock' },
              { label: 'Nama Kandang', option: 'Pangandaran 2' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-xl text-gray-600 mb-5">{item.label}</label>
                <select className="px-4 py-2 border border-gray-300 rounded">
                  <option value={item.option}>{item.option}</option>
                </select>
              </div>
            ))}
          </div>

          <button
            className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
            onClick={handleNavigate}
          >
            <FaPlus size={10} />
            Tambah Data
          </button>
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


