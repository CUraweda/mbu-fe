import { useState } from "react";
import Breadcrumb from "../../Components/bread";
import DataSelector from "../../Components/pembelian/DataSelector";
import Filter from "../../Components/pembelian/Filter";
import PembelianList from "../../Components/pembelian/PembelianList";
import SearchBar from "../../Components/pembelian/SearchBar";
import iconMap from "../../Data/iconMap";
import LayoutProject from "../../Layouts/layoutProject";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian" },
];

interface Pembelian {
  id: string;
  noPR: string;
  vendor: string;
  namaPengaju: string;
  departemen: string;
  tanggal: string;
  status: string;
  total: number;
}

const items: Pembelian[] = [
  {
    id: "1",
    noPR: "PR-MAN-00001",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operasional - MANBU",
    tanggal: "25/10/2024",
    status: "Dibayar",
    total: 10000000,
  },
  {
    id: "2",
    noPR: "PR-MBU-00002",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Brian",
    departemen: "Operasional - MBU",
    tanggal: "30/10/2024",
    status: "Produk Diterima",
    total: 2000000,
  },
];

const ListPembelianPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleDataChange = (value: number) => {
    console.log(`Jumlah data yang dipilih: ${value}`);
  };

  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">List Pembelian</h1>
          <div className="flex gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="text-gray-500 bg-transparent rounded-md btn btn-outline"
              >
                <iconMap.CiExport size={20} />
                Export
                <iconMap.MdExpandMore size={24} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu border-slate-200 border mt-1 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Export PDF</a>
                </li>
                <li>
                  <a>Export Excel</a>
                </li>
              </ul>
            </div>
            <button className="text-white rounded-md bg-primary btn">
              <iconMap.FaPlus size={10} />
              Tambah
            </button>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-5 py-4 md:justify-between md:flex-row">
          <DataSelector
            options={[10, 25, 50, 100]}
            onChange={handleDataChange}
          />
          <div className="flex items-center">
            <SearchBar onSearch={handleSearch} />
            <Filter></Filter>
          </div>
        </div>

        <PembelianList items={items} />

        <div className="flex flex-col items-center justify-between gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
          <div className="font-semibold">TOTAL : Rp.499,055,000.00</div>
          <div className="flex items-center justify-center md:justify-end">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center gap-5 mx-2 text-blue-400 hover:bg-transparent"
            >
              <iconMap.FaArrowLeft size={18} className="text-blue-400 " />
              <div className="flex text-center">Prev</div>
            </button>
            <span className="mx-2 text-blue-400">1 of 2</span>
            <button className="flex items-center gap-5 mx-2 text-blue-400 hover:bg-transparent">
              <div className="flex text-center">Next</div>
              <iconMap.FaArrowRight size={18} className="text-blue-400 " />
            </button>
          </div>
        </div>
      </LayoutProject>
    </div>
  );
};

export default ListPembelianPage;
