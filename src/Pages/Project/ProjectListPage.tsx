import Breadcrumb from "@/Components/Breadcrumb";
import LayoutProject from "@/Layouts/LayoutProject";
import DataSelector from "@/Components/DataSelector";
import SearchBar from "@/Components/Search";
import Filter from "@/Components/Filter";
import ProjectList from "@/Components/project/ProjectList";

// icons
import { FaPlus } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { projectApi } from "@/api";
import HFilter from "@/helpers/HFilter";
import { FilterField } from "@/Data/dataTypes";
import ExportButton from "@/Components/ExportButton";
import PaginationBottom from "@/Components/PaginationBottom";
import Swal from "sweetalert2";
import { ProjectsResponse } from "@/Data/types/response.type";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/" },
  { label: "List Project" },
];

const filterFields: FilterField[] = [
  {
    name: "statusChickin",
    label: "Status Chick-IN",
    options: ["Sudah", "Belum"],
  },
  {
    name: "statusProject",
    label: "Status Project",
    options: ["Pengajuan", "Persiapan", "Aktif", "Selesai"],
  },
];

const ProjectListPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStates, setFilterStates] = useState<Record<string, string[]>>(
    {},
  );
  const [filteredData, setFilteredData] = useState<ProjectsResponse[]>([]);
  const [projectData, setProjectData] = useState<ProjectsResponse[]>([]);

  const handleDataChange = (value: number) => {
    console.log(`Jumlah data yang dipilih: ${value}`);
  };

  const handleNavigate = () => {
    navigate("/project/add");
  };

  const handleFilter = useCallback(() => {
    let result = HFilter.byState(projectData, filterStates);

    result = HFilter.byQuery(projectData, searchQuery);

    setFilteredData(result);
  }, [filterStates, searchQuery, projectData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { response } = await projectApi.getAllProject();
        setProjectData(response);
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
  }, [handleFilter]);

  return (
    <div>
      <Breadcrumb title="Project Form" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">List Project</h1>
          <div className="flex gap-4">
            <ExportButton />
            <button
              className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
              onClick={handleNavigate}
            >
              <FaPlus size={10} />
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
            <SearchBar onSearchChange={setSearchQuery} />
            <Filter fields={filterFields} onFilterChange={setFilterStates} />
          </div>
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ProjectList projects={filteredData} />
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

export default ProjectListPage;
