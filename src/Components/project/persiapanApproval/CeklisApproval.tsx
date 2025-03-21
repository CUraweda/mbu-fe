import React from "react";
import { useState } from "react";
import ceklisPersiapanData from "@/Data/ceklisPersiapanData";
import PaginationBottom from "@/Components/PaginationBottom";

const CeklisPersiapanApproval: React.FC = () => {
  const items = ceklisPersiapanData;
  const [currentPage, setCurrentPage] = useState(1);

  const getstatusCeklis = (statusCeklis: string) => {
    switch (statusCeklis) {
      case "Tercapai":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Tidak Tercapai":
        return "bg-[#FFDFBE] text-[#EC8917]";
      case "Belum Dicek":
        return "bg-[#FFDFBE] text-[#EC8917]";
      default:
        return "bg-[#D0F0FF] text-[#15B5FF]";
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-3 m-5 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <label htmlFor="jenisPersiapan">Jenis Persiapan</label>
          <input
            type="text"
            id="jenisPersiapan"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
            disabled
            value="Broiler Fermentasi"
          />
        </div>

        <div>
          <label htmlFor="tanggalHabisAyam">Tanggal Habis Ayam</label>
          <input
            type="text"
            id="tanggalHabisAyam"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
            disabled
            value="10-03-2024"
          />
        </div>
      </div>

      <hr />

      <div className="col-span-2 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center bg-blue-100 ">
            <tr>
              <th className="px-4 py-2 text-gray-600">
                Item Pekerjaan Persiapan
              </th>
              <th className="px-4 py-2 text-gray-600">Tanggal Selesai</th>
              <th className="px-4 py-2 text-gray-600">
                Aktual Waktu Persiapan (Hari)
              </th>
              <th className="px-4 py-2 text-gray-600">Hasil</th>
              <th className="px-4 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.itemPekerjaanPersiapan}>
                <td className="px-4 text-gray-700">
                  {item.itemPekerjaanPersiapan}
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="date"
                    // value={item.tanggalSelesai}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="text"
                    id="aktual"
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td>
                  <div
                    className={`px-3 py-2 text-center rounded-md text-sm font-semibold ${getstatusCeklis(
                      item.hasil,
                    )}`}
                  >
                    {item.hasil}{" "}
                  </div>
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

export default CeklisPersiapanApproval;
