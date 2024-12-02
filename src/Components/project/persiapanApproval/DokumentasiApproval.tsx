import React, { useState } from "react";
import dokumentasiData from "@/Data/dokumentasiData";
import PaginationBottom from "@/Components/PaginationBottom";

const DokumentasiForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilePopupVisible, setIsFilePopupVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

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
        <h1 className="text-2xl text-primary">Foto & Dokumen</h1>
      </div>

      {isFilePopupVisible && selectedFile && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-8 bg-white rounded-lg shadow-lg w-96">
            <h2 className="mb-4 text-xl font-bold text-center">
              Lihat Foto/Dokumen
            </h2>
            <img
              src={selectedFile}
              alt="Uploaded File"
              className="w-full h-auto"
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 text-white bg-orange-500 rounded"
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
              <th className="px-4 py-2 text-gray-600">#</th>
              <th className="px-4 py-2 text-gray-600">Nama</th>
              <th className="px-4 py-2 text-gray-600">Foto/Dokumen</th>
              <th className="px-4 py-2 text-gray-600">Diupload Oleh</th>
              <th className="px-4 py-2 text-gray-600">Waktu Upload</th>
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
                    onClick={() => handleFileClick(item.fotoDokumen)}
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
