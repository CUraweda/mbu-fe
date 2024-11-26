import React, { useState } from "react";
import { FaCloudUploadAlt, FaPlus } from "react-icons/fa";
import pelaksanaData from "../../Data/pelaksanaPersiapanData";
import PaginationBottom from "../PaginationBottom";

const PelaksanaForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFilePopupVisible, setIsFilePopupVisible] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  const handleUploadClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleFileClick = (fileUrl: string) => {
    setSelectedFile(fileUrl); // Set selected file URL to show in the pop-up
    setIsFilePopupVisible(true); // Show pop-up for the selected file
  };

  const handleCloseFilePopup = () => {
    setIsFilePopupVisible(false);
    setSelectedFile(null); // Reset the selected file
  };

  return (
    <div>
      <hr />

      <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
        <h1 className="text-2xl text-primary"></h1>
        <div className="flex items-center justify-center md:justify-start">
          <button
            className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
            onClick={handleUploadClick}
          >
            <FaPlus size={10} />
            Tambah Foto Pelaksana
          </button>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">
              Tambah Foto Pelaksana
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center ">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange} // Menghandle file yang dipilih
              />
              <label
                htmlFor="fileInput"
                className="flex flex-col items-center justify-center w-full h-full p-4 cursor-pointer"
              >
                <div className="bg-gray-200 px-6 py-3 rounded-md flex items-center justify-center">
                  <FaCloudUploadAlt size={30} />
                </div>
                <span className="mt-2 text-gray-600 text-sm">Upload</span>
              </label>
              {/* Menampilkan nama file yang dipilih (jika ada) */}
              {file && <p className="mt-2 text-gray-600">{file.name}</p>}
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded"
                onClick={handleClosePopup}
              >
                Batal
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

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
                    onClick={() => handleFileClick(item.foto)} // Menangani klik pada foto/dokumen
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
