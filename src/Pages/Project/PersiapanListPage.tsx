import { useState, useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import DataSelector from "../../Components/DataSelector";
import SearchBar from "../../Components/Search";
import Filter from "../../Components/Filter";
import PersiapanList from "../../Components/project/PersiapanList";
import persiapanData from "../../Data/persiapanData";

// icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";
import { applyFilterByStateAndQuery } from "../../helpers/filterHelpers";
import { FilterField } from "../../Data/dataTypes";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "Persiapan" },
];

const filterFields: FilterField[] = [
  {
    name: "statusPersiapan",
    label: "Status Persiapan",
    options: ["Tercapai", "Tidak Tercapai", "Belum Selesai"],
  },
  {
    name: "statusProject",
    label: "Status Project",
    options: ["Pengajuan", "Persiapan", "Aktif", "Selesai"],
  },
];

const PersiapanListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Menyimpan query pencarian
  const [filterStates, setFilterStates] = useState<Record<string, string[]>>(
    {},
  );
  const [filteredData, setFilteredData] = useState(persiapanData);

  const handleDataChange = (value: number) => {
    // TODO: apply data limiting
    console.log(`Jumlah data yang dipilih: `, value);
  };

  // Fungsi untuk menangani pencarian
  const handleFilters = () => {
    const result = applyFilterByStateAndQuery(
      persiapanData,
      filterStates,
      searchQuery,
    );

    setFilteredData(result);
  };

  useEffect(() => {
    handleFilters();
  }, [searchQuery, filterStates]);

  return (
    <div>
      <Breadcrumb title="Persiapan" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">Persiapan</h1>
          <div className="flex gap-4">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="text-gray-500 bg-transparent rounded-md btn btn-outline"
              >
                <CiExport size={20} />
                Export
                <MdExpandMore size={24} />
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
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-5 py-4 md:justify-between md:flex-row">
          <DataSelector
            options={[10, 25, 50, 100]}
            onChange={handleDataChange}
          />
          <div className="flex items-center">
            <SearchBar onSearchChange={setSearchQuery} />
            <Filter fields={filterFields} onFilterChange={setFilterStates} />
          </div>
        </div>
        <PersiapanList items={filteredData} />
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
            <span className="mx-2 text-primary">1 of 2</span>
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

export default PersiapanListPage;
