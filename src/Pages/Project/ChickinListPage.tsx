import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import DataSelector from "../../Components/DataSelector";
import SearchBar from "../../Components/Search";
import Filter from "../../Components/Filter";
import Chickinlist from "../../Components/project/ChickinList";
import chickinData from "../../Data/ChickinData";

// icons
import { useEffect, useState } from "react";
import { applyFilterByStateAndQuery } from "../../helpers/filterHelpers";
import { FilterField } from "../../Data/dataTypes";
import ExportButton from "../../Components/ExportButton";
import PaginationBottom from "../../Components/PaginationBottom";
// import { useNavigate } from "react-router-dom";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "List Project" },
];

const filterFields: FilterField[] = [
  {
    name: "statusChickin",
    label: "Status Chick-IN",
    options: ["Masuk", "Keluar"],
  },
  {
    name: "statusProject",
    label: "Status Project",
    options: ["Pengajuan", "Persiapan", "Aktif", "Selesai"],
  },
];

const ProjectListPage = () => {
  // const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Menyimpan query pencarian
  const [filterStates, setFilterStates] = useState<Record<string, string[]>>(
    {},
  );
  const [filteredData, setFilteredData] = useState(chickinData);

  // Fungsi untuk menangani pencarian
  const handleFilters = () => {
    const result = applyFilterByStateAndQuery(
      chickinData,
      filterStates,
      searchQuery,
    );

    setFilteredData(result);
  };

  const handleDataChange = (value: number) => {
    console.log(`Jumlah data yang dipilih: ${value}`);
  };

  // const handleNavigate = () => {
  //   navigate("/project/add");
  // };

  useEffect(() => {
    handleFilters();
  }, [searchQuery, filterStates]);

  return (
    <div>
      <Breadcrumb title="Chick in" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">Chick in</h1>
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
        <Chickinlist items={filteredData} />
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

export default ProjectListPage;
