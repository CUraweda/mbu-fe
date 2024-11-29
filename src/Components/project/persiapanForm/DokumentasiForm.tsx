import React, { useState } from "react";
import dokumentasiData from "../../../Data/dokumentasiData";
import PaginationBottom from "../../PaginationBottom";
import UploadModal from "./UploadModal";
import { FaPlus } from "react-icons/fa";

const DokumentasiForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Menutup modal
  };

  return (
    <div>
      <hr />

      <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
        <h1 className="text-2xl text-primary">Foto & Dokumen</h1>
        <div className="flex items-center justify-center md:justify-start">
          <button
            className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
            onClick={handleUploadClick}
          >
            <FaPlus size={10} />
            Upload
          </button>
        </div>
      </div>

      {isModalOpen && <UploadModal onClose={closeModal} />}

      <div className="col-span-2 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-gray-600">#</th>
              <th className="px-4 py-2 text-gray-600">Nama</th>
              <th className="px-4 py-2 text-gray-600">Foto/Dokumen</th>
              <th className="px-4 py-2 text-gray-600">Diupload Oleh</th>
              <th className="px-4 py-2 text-gray-600">Waktu Upload</th>
              <th className="px-4 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dokumentasiData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 text-gray-700">{item.id}</td>
                <td className="p-2 text-gray-700">{item.nama}</td>
                <td className="p-2 text-gray-700">
                  <a
                    href="#"
                    // onClick={() => handleFileClick(item.fotoDokumen)}
                    className="text-blue-500 hover:underline"
                  >
                    {item.fotoDokumen}
                  </a>
                </td>
                <td className="p-2 text-gray-700">{item.upload}</td>
                <td className="p-2 text-gray-700">{item.waktuUpload}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
          <PaginationBottom
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DokumentasiForm;
