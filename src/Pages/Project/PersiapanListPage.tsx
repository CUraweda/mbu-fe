import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import DataSelector from "../../Components/DataSelector";
import SearchBar from "../../Components/Search";
import Filter from "../../Components/Filter";
import PersiapanList from "../../Components/project/PersiapanList";
import persiapanData from "../../Data/persiapanData";
import { useState, useEffect } from "react";

// icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "Persiapan" },
];

const PersiapanListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProjectStatuses, setFilterProjectStatuses] = useState<string[]>([]); // Status project yang dipilih
  const [filterPersiapanStatuses, setFilterPersiapanStatuses] = useState<string[]>([]); // Status persiapan yang dipilih
  const [filteredData, setFilteredData] = useState(persiapanData); // Data yang sudah difilter

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleDataChange = (value: number) => {
    console.log(`Jumlah data yang dipilih: ${value}`);
  };

  // Fungsi untuk menangani perubahan filter status project
  const handleProjectFilterChange = (selectedStatuses: string[]) => {
    setFilterProjectStatuses(selectedStatuses);
  };

  // Fungsi untuk menangani perubahan filter status persiapan
  const handlePersiapanFilterChange = (selectedStatuses: string[]) => {
    setFilterPersiapanStatuses(selectedStatuses);
  };

  // Fungsi untuk menyaring data berdasarkan status yang dipilih
  const filterData = () => {
    let filtered = persiapanData;

    // Filter data jika salah satu status project atau status persiapan dipilih
    if (filterProjectStatuses.length > 0 || filterPersiapanStatuses.length > 0) {
      filtered = filtered.filter((item) => {
        const projectMatch =
          filterProjectStatuses.length === 0 || filterProjectStatuses.includes(item.statusProject);

        const persiapanMatch =
          filterPersiapanStatuses.length === 0 || filterPersiapanStatuses.includes(item.statusPersiapan);

        // Data tetap ditampilkan jika salah satu filter cocok
        return projectMatch && persiapanMatch;
      });
    }

    // Set filtered data setelah diterapkan filter
    setFilteredData(filtered);
  };

  // Effect untuk memfilter data setiap kali status berubah
  useEffect(() => {
    filterData();
  }, [filterProjectStatuses, filterPersiapanStatuses]);

  // Reset filter untuk menampilkan seluruh data
  const resetFilters = () => {
    setFilterProjectStatuses([]);
    setFilterPersiapanStatuses([]);
  };

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
                <div className="mb-2">
                  <label className="text-sm font-semibold">Status Persiapan</label>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterPersiapanStatuses.includes("Tercapai")}
                        onChange={() =>
                          handlePersiapanFilterChange(
                            filterPersiapanStatuses.includes("Tercapai")
                              ? filterPersiapanStatuses.filter(status => status !== "Tercapai")
                              : [...filterPersiapanStatuses, "Tercapai"]
                          )
                        }
                      />
                      Tercapai
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterPersiapanStatuses.includes("Tidak Tercapai")}
                        onChange={() =>
                          handlePersiapanFilterChange(
                            filterPersiapanStatuses.includes("Tidak Tercapai")
                              ? filterPersiapanStatuses.filter(status => status !== "Tidak Tercapai")
                              : [...filterPersiapanStatuses, "Tidak Tercapai"]
                          )
                        }
                      />
                      Tidak Tercapai
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterPersiapanStatuses.includes("Belum Selesai")}
                        onChange={() =>
                          handlePersiapanFilterChange(
                            filterPersiapanStatuses.includes("Belum Selesai")
                              ? filterPersiapanStatuses.filter(status => status !== "Belum Selesai")
                              : [...filterPersiapanStatuses, "Belum Selesai"]
                          )
                        }
                      />
                      Belum Selesai
                    </label>
                  </div>
                </div>

                {/* Garis pemisah antara persiapan dan project */}
                <div className="border-t border-gray-300 my-4"></div>

                {/* Filter untuk status project */}
                <div className="mb-2">
                  <label className="text-sm font-semibold">Status Project</label>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterProjectStatuses.includes("Pengajuan")}
                        onChange={() =>
                          handleProjectFilterChange(
                            filterProjectStatuses.includes("Pengajuan")
                              ? filterProjectStatuses.filter(status => status !== "Pengajuan")
                              : [...filterProjectStatuses, "Pengajuan"]
                          )
                        }
                      />
                      Pengajuan
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterProjectStatuses.includes("Persiapan")}
                        onChange={() =>
                          handleProjectFilterChange(
                            filterProjectStatuses.includes("Persiapan")
                              ? filterProjectStatuses.filter(status => status !== "Persiapan")
                              : [...filterProjectStatuses, "Persiapan"]
                          )
                        }
                      />
                      Persiapan
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterProjectStatuses.includes("Aktif")}
                        onChange={() =>
                          handleProjectFilterChange(
                            filterProjectStatuses.includes("Aktif")
                              ? filterProjectStatuses.filter(status => status !== "Aktif")
                              : [...filterProjectStatuses, "Aktif"]
                          )
                        }
                      />
                      Aktif
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filterProjectStatuses.includes("Selesai")}
                        onChange={() =>
                          handleProjectFilterChange(
                            filterProjectStatuses.includes("Selesai")
                              ? filterProjectStatuses.filter(status => status !== "Selesai")
                              : [...filterProjectStatuses, "Selesai"]
                          )
                        }
                      />
                      Selesai
                    </label>
                  </div>
                </div>
              </div>
            </Filter>
          </div>
        </div>
        {/* Menampilkan daftar persiapan yang sudah difilter */}
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
