import React from "react";
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import pelaksana from "../../Data/pelaksanaPersiapanData";
import { FiPlusCircle } from "react-icons/fi";

import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import pelaksanaData from "../../Data/pelaksanaPersiapanData";

interface Pelaksana {
  jenisPersiapan: string;
  waktuPelaksana: string;
  namaPelaksana: string;
  tempatPelaksana: string;
  foto: string;
}

const PelaksanaForm: React.FC = () => {
  const [items, setItems] = React.useState<Pelaksana[]>(pelaksana);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNavigate = () => {
    setIsFormVisible(true); 
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

//   const handleDelete = (id: number) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const handleAddRow = () => {
//     const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
//     const newItem: Ceklis = {
//       id: newId,
//       fase: "",
//       tanggalMulai: "",
//       tanggalSelesai: "",
//       statusFase: "Belum Mulai",
//     };
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

  return (
    <div>

      <hr />
      
      <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-5 md:items-end md:flex-row">
          <div className="flex items-center justify-center md:justify-end">
        <button
            className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
            onClick={handleNavigate}
          >
            <FaPlus size={10} />
            Tambah Foto Pelaksana
          </button>
        </div>
          </div>
      <div className="col-span-2 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center bg-blue-100 ">
            <tr>
            <th className="px-4 py-2 text-gray-600">Jenis Persiapan</th>
              <th className="px-4 py-2 text-gray-600">Waktu Pelaksana</th>
              <th className="px-4 py-2 text-gray-600">
                Nama Pelaksana
              </th>
              <th className="px-4 py-2 text-gray-600">Tempat Pelaksana</th>
              <th className="px-4 py-2 text-gray-600">Foto</th>
              <th className="px-4 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.jenisPersiapan}>
                <td className="px-4 text-gray-700">{item.jenisPersiapan}</td>
                <td className="p-2 text-gray-700">{item.waktuPelaksana}</td>
                <td className="p-2 text-gray-700">{item.namaPelaksana}</td>
                <td className="p-2 text-gray-700">{item.tempatPelaksana}</td>
                <td className="p-2 text-gray-700">
                    <a href={item.foto} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {item.foto}
                     </a>
                </td>
                {/* <td className="p-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1"
                  >
                    <FaRegTrashAlt className="text-red-500" />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
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
            <span className="mx-2 text-primary">{currentPage} of {Math.ceil(pelaksanaData.length / 10)}</span>
            <button
              disabled={Math.ceil(pelaksanaData.length / 10) === 1}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
            >
              <div className="flex text-center">Next</div>
              <FaArrowRight size={18} className="text-primary" />
            </button>
          </div>
        </div>
        {/* <button
          onClick={handleAddRow}
          className="px-4 py-2 ml-14 xl:ml-20 text-primary"
        >
          <FiPlusCircle size={24} />
        </button> */}
      </div>
    </div>
  );
};

export default PelaksanaForm;
