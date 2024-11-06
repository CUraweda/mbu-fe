import React, { useState } from 'react';
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import RecordingList from '../../Components/project/RecordingList';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "Recording", link: "/recording" },
];

const Recording: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const Data = []; // Replace with actual data

  return (
    <div>
      <Breadcrumb title="Recording" items={breadcrumbItems} />
      <LayoutProject>
        <div className="p-10">
          <h2 className="text-2xl mb-5 text-primary">List Recording</h2>

          <div className="flex gap-7 mb-10 flex-wrap">
            {[
              { label: 'Unit Bisnis', option: 'PT Mandiri Berlian Unggas' },
              { label: 'Area', option: 'Priangan' },
              { label: 'Lokasi', option: 'Pangandaran' },
              { label: 'Produk', option: 'Final Stock' },
              { label: 'Nama Kandang', option: 'Pangandaran 2' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-xl text-gray-600 mb-5">{item.label}</label>
                <select className="px-4 py-2 border border-gray-300 rounded">
                  <option>{item.option}</option>
                </select>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <button className="bg-secondary text-white px-4 py-2 rounded">+ Tambah Data</button>
          </div>
        </div>
        <RecordingList items={Data} />
        <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
          <div className="flex items-center justify-center md:justify-end">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
            >
              <FaArrowLeft size={18} className="text-primary" />
              <div className="flex text-center">Prev</div>
            </button>
            <span className="mx-2 text-primary">{currentPage} of 2</span>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
            >
              <div className="flex text-center">Next</div>
              <FaArrowRight size={18} className="text-primary" />
            </button>
          </div>
        </div>
      </LayoutProject>
    </div>
  );
};

export default Recording;

