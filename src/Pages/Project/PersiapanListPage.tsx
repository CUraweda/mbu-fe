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
import FilterSection from "../../Components/FilterSection";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "Persiapan" },
];

const PersiapanListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProjectStatuses, setFilterProjectStatuses] = useState<string[]>(
    [],
  );
  const [filterPersiapanStatuses, setFilterPersiapanStatuses] = useState<
    string[]
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Menyimpan query pencarian
  const [filteredData, setFilteredData] = useState(persiapanData);

  // Fungsi untuk menangani pencarian
  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase()); // Konversi ke huruf kecil agar pencarian tidak case-sensitive
  };

  const handleDataChange = (value: number) => {
    console.log(`Jumlah data yang dipilih: ${value}`);
  };

  const handleProjectFilterChange = (selectedStatuses: string[]) => {
    setFilterProjectStatuses(selectedStatuses);
  };

  const handlePersiapanFilterChange = (selectedStatuses: string[]) => {
    setFilterPersiapanStatuses(selectedStatuses);
  };

  const filterData = () => {
    let filtered = persiapanData;

    // Filter data berdasarkan status
    if (
      filterProjectStatuses.length > 0 ||
      filterPersiapanStatuses.length > 0
    ) {
      filtered = filtered.filter((item) => {
        const projectMatch =
          filterProjectStatuses.length === 0 ||
          filterProjectStatuses.includes(item.statusProject);
        const persiapanMatch =
          filterPersiapanStatuses.length === 0 ||
          filterPersiapanStatuses.includes(item.statusPersiapan);
        return projectMatch && persiapanMatch;
      });
    }

    // Filter data berdasarkan query pencarian
    if (searchQuery) {
      filtered = filtered.filter((item) => {
        const valuesToSearch = Object.values(item).join(" ").toLowerCase(); // Gabungkan semua nilai dalam objek ke string
        return valuesToSearch.includes(searchQuery);
      });
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [filterProjectStatuses, filterPersiapanStatuses, searchQuery]);

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
            <SearchBar onSearch={handleSearch} />
            <Filter>
              <div className="flex flex-col">
                {/* Filter untuk status persiapan */}
                <FilterSection
                  filterStatuses={filterPersiapanStatuses}
                  handleFilterChange={handlePersiapanFilterChange}
                  fields={["Tercapai", "Tidak Tercapai", "Belum Selesai"]}
                />

                <div className="border-t border-gray-300 my-4"></div>

                {/* Filter untuk status project */}
                <FilterSection
                  filterStatuses={filterProjectStatuses}
                  handleFilterChange={handleProjectFilterChange}
                  fields={["Pengajuan", "Persiapan", "Aktif", "Selesai"]}
                />
              </div>
            </Filter>
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
