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
import persiapanData from "@/Data/persiapanData";
import { ProjectPreparation } from "@/Data/types/projectType";
// import persiapanApi from "@/Data/api/persiapanApi";

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
  // const [preparations, setPreparations] = useState<ProjectPreparation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(persiapanData);

  const handleDataChange = (value: number) => {
    // TODO: apply data limiting
    console.log(`Jumlah data yang dipilih: `, value);
  };

  const handleFilter = useCallback(() => {
    let result = HFilter.byState(persiapanData, filterStates);

    result = HFilter.byQuery(persiapanData, searchQuery);

    setFilteredData(result);
  }, [filterStates, searchQuery]);

  useEffect(() => {
    // const fetchProjects = async () => {
    //   setLoading(true);
    //   try {
    //     const result = await persiapanApi.getAllPersiapan();
    //     setPreparations(result);
    //     handleFilter();
    //   } catch (error) {
    //     console.error("Error fetching projects:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchProjects();
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
        {/* <PersiapanList items={persiapanData} /> */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <PersiapanList
            preparations={filteredData as unknown as ProjectPreparation[]}
          />
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
