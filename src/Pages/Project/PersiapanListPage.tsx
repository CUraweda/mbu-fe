import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import LayoutProject from "@/Layouts/LayoutProject";
import DataSelector from "@/Components/DataSelector";
import SearchBar from "@/Components/Search";
import Filter from "@/Components/Filter";
import PersiapanList from "@/Components/project/PersiapanList";
import { FilterField } from "@/Data/dataTypes";
import ExportButton from "@/Components/ExportButton";
import PaginationBottom from "@/Components/PaginationBottom";
import HFilter from "@/helpers/HFilter";
import { persiapanApi } from "@/api";
import { ProjectPreparationsResponse } from "@/Data/types/response.type";
import Swal from "sweetalert2";

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
  const [persiapanData, setPersiapanData] = useState<
    ProjectPreparationsResponse[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<
    ProjectPreparationsResponse[]
  >([]);

  const handleDataChange = (value: number) => {
    // TODO: apply data limiting
    console.log(`Jumlah data yang dipilih: `, value);
  };

  const handleFilter = useCallback(() => {
    let result = HFilter.byState(persiapanData, filterStates);

    result = HFilter.byQuery(persiapanData, searchQuery);

    setFilteredData(result);
  }, [filterStates, searchQuery, persiapanData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { response } = await persiapanApi.getAllPersiapan();
        setPersiapanData(response);
      } catch (error) {
        void Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: error instanceof Error ? error.message : "Terjadi kesalahan",
        });
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  useEffect(() => {
    handleFilter();
    setLoading(false);
  }, [handleFilter]);

  return (
    <div>
      <Breadcrumb title="Persiapan" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">Persiapan</h1>
          <div className="flex gap-4">
            <ExportButton />
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
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <PersiapanList preparations={filteredData} />
        )}
        <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
          <PaginationBottom
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </LayoutProject>
    </div>
  );
};

export default PersiapanListPage;
