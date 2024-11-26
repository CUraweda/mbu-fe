import React, { useState } from "react";
import pelaksanaData from "../../../Data/pelaksanaPersiapanData";
import PaginationBottom from "../../PaginationBottom";

const PelaksanaForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilePopupVisible, setIsFilePopupVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  const handleFileClick = (fileUrl: string) => {
    setSelectedFile(fileUrl);
    setIsFilePopupVisible(true);
  };

  const handleCloseFilePopup = () => {
    setIsFilePopupVisible(false);
    setSelectedFile(null);
  };

  return (
    <div>
      <hr />

      <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
        <h1 className="text-2xl text-primary"></h1>
      </div>

      {isFilePopupVisible && selectedFile && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Lihat Foto</h2>
            <img
              src={selectedFile}
              alt="Uploaded File"
              className="w-full h-auto"
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded"
                onClick={handleCloseFilePopup}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="col-span-2 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-gray-600">Jenis Persiapan</th>
              <th className="px-4 py-2 text-gray-600">Waktu Pelaksanaan</th>
              <th className="px-4 py-2 text-gray-600">Nama Pelaksana</th>
              <th className="px-4 py-2 text-gray-600">Tempat Pelaksana</th>
              <th className="px-4 py-2 text-gray-600">Foto</th>
              <th className="px-4 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {pelaksanaData.map((item) => (
              <tr key={item.jenisPersiapan}>
                <td className="px-4 text-gray-700">{item.jenisPersiapan}</td>
                <td className="p-2 text-gray-700">{item.waktuPelaksana}</td>
                <td className="p-2 text-gray-700">{item.namaPelaksana}</td>
                <td className="p-2 text-gray-700">{item.tempatPelaksana}</td>
                <td className="p-2 text-gray-700">
                  <a
                    href="#"
                    onClick={() => handleFileClick(item.foto)}
                    className="text-blue-500 hover:underline"
                  >
                    {item.foto}
                  </a>
                </td>
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

export default PelaksanaForm;
