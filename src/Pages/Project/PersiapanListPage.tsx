import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import DataSelector from "../../Components/DataSelector";
import SearchBar from "../../Components/Search";
import Filter from "../../Components/Filter";
import PersiapanList from "../../Components/project/PersiapanList";
import persiapanData from "../../Data/persiapanData";

// icons
import { applyFilterByStateAndQuery } from "../../helpers/filterHelpers";
import { FilterField } from "../../Data/dataTypes";
import ExportButton from "../../Components/ExportButton";
import PaginationBottom from "../../Components/PaginationBottom";
import { ProjectPreparation } from "../../Data/types/projectType";

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
    {}
  );
  const [, setFilteredData] = useState(persiapanData);
  const [preparations] = useState<ProjectPreparation[]>([]);
  const [loading] = useState(true);

  const handleDataChange = (value: number) => {
    // TODO: apply data limiting
    console.log(`Jumlah data yang dipilih: `, value);
  };

  // Fungsi untuk menangani pencarian
  const handleFilters = useCallback(() => {
    const result = applyFilterByStateAndQuery(
      persiapanData,
      filterStates,
      searchQuery
    );

    setFilteredData(result);
  }, [filterStates, searchQuery]);

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
        {/* <PersiapanList items={persiapanData} /> */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <PersiapanList preparations={preparations} />
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
