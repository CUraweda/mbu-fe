import Breadcrumb from "@/Components/Breadcrumb";
import LayoutProject from "@/Layouts/LayoutProject";
import DataSelector from "@/Components/DataSelector";
import SearchBar from "@/Components/Search";
import Filter from "@/Components/Filter";
import ChickInlist from "@/Components/project/ChickInList";

// icons
import { useState } from "react";
// import HFilter from "@/helpers/HFilter";
import { FilterField } from "@/Data/dataTypes";
import ExportButton from "@/Components/ExportButton";
import PaginationBottom from "@/Components/PaginationBottom";
// import { chickInApi } from "@/api";
// import { ProjectChickInResponse } from "@/Data/types/response.type";
import chickinData from "@/Data/ChickinData";
// import Swal from "sweetalert2";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "Chick in" },
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

const ChickinListPage = () => {
  const chickins = chickinData;
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSearchQuery] = useState<string>("");
  const [, setFilterStates] = useState<Record<string, string[]>>({});
  // const [filteredData, setFilteredData] = useState<ProjectChickInResponse[]>(
  //   [],
  // );
  // const [chickInData, setChickInData] = useState<ProjectChickInResponse[]>([]);
  // const [loading, setLoading] = useState(true);

  // const handleFilter = useCallback(() => {
  //   let result = HFilter.byState(chickInData, filterStates);

  //   result = HFilter.byQuery(chickInData, searchQuery);

  //   setFilteredData(result);
  // }, [filterStates, searchQuery, chickInData]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { response } = await chickInApi.getAllChickIn();
  //       setChickInData(response);
  //     } catch (error) {
  //       void Swal.fire({
  //         icon: "error",
  //         title: "Login Gagal",
  //         text: error instanceof Error ? error.message : "Terjadi kesalahan",
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   void fetchData();
  // }, []);

  // useEffect(() => {
  //   handleFilter();
  // }, [handleFilter]);

  // Fungsi untuk menangani pencarian

  const handleDataChange = (value: number) => {
    console.log(`Jumlah data yang dipilih: ${value}`);
  };

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
        <ChickInlist chickins={chickins} />
        {/* {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ChickInlist chickins={chickins} />
        )} */}
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

export default ChickinListPage;
