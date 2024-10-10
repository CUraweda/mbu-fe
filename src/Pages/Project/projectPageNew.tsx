import { useState } from "react";
import iconMap from "../../Data/iconMap";
import SearchBar from "../../Components/searchBar";
import DropdownFilter from "../../Components/filterDropdown";
import { useNavigate } from "react-router-dom";

interface Item {
  id: string;
  unitBisnis: string;
  produk: string;
  area: string;
  lokasi: string;
  kandang: string;
  kapasitas: number;
  periode: number;
  statusChickIn: string;
  statusProject: string;
}

const item: Item = {
  id: "000001",
  unitBisnis: "Manbu",
  produk: "Parent Stock",
  area: "Priangan",
  lokasi: "Pangandaran",
  kandang: "Pangandaran 1",
  kapasitas: 50000,
  periode: 3,
  statusChickIn: "Sudah",
  statusProject: "Seleksi",
};

const ProjectPageNew = () => {
  const navigate = useNavigate();
  const [data] = useState<Item[]>([item]);
  const [filters, setFilters] = useState({
    lokasi: "",
    unitBisnis: "",
    statusChickIn: "",
    statusProject: "",
  });

  const columns = [
    { header: "Id Project", accessorKey: "id" },
    { header: "Unit Bisnis", accessorKey: "unitBisnis" },
    { header: "Produk", accessorKey: "produk" },
    { header: "Area", accessorKey: "area" },
    { header: "Lokasi", accessorKey: "lokasi" },
    { header: "Kandang", accessorKey: "kandang" },
    { header: "Kapasitas", accessorKey: "kapasitas" },
    { header: "Periode", accessorKey: "periode" },
    { header: "Status Chick In", accessorKey: "statusChickIn" },
    { header: "Status Project", accessorKey: "statusProject" },
    { header: "Aksi", accessorKey: "aksi" },
  ];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
    navigate(`/project/add`);
  };

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  // Filter data based on selected filters
  const filteredData = data.filter((item) => {
    return (
      (filters.lokasi ? item.lokasi === filters.lokasi : true) &&
      (filters.unitBisnis ? item.unitBisnis === filters.unitBisnis : true) &&
      (filters.statusChickIn
        ? item.statusChickIn === filters.statusChickIn
        : true) &&
      (filters.statusProject
        ? item.statusProject === filters.statusProject
        : true)
    );
  });

  return (
    <div className="w-full block">
      <div className="breadcrumbs text-sm w-full">
        <ul>
          <li>
            <a>Master Data</a>
          </li>
          <li>
            <a>Project</a>
          </li>
        </ul>
      </div>
      <SearchBar
        onSearch={handleSearch}
        onAddClick={handleAddClick}
        tittlePage="List Project"
        styling=" grid-cols-3 grid-rows-2 gap-4"
      >
        <DropdownFilter
          title="Lokasi"
          options={["Pangandaran", "Lokasi 2", "Lokasi 3"]}
          onChange={(value) => handleFilterChange("lokasi", value)}
        />
        <DropdownFilter
          title="Unit Bisnis"
          options={["Manbu", "Unit 2", "Unit 3"]}
          onChange={(value) => handleFilterChange("unitBisnis", value)}
        />
        <DropdownFilter
          title="Status Chick In"
          options={["Sudah", "Belum"]}
          onChange={(value) => handleFilterChange("statusChickIn", value)}
        />
        <DropdownFilter
          title="Status Project"
          options={["Seleksi", "Selesai", "Dalam Proses"]}
          onChange={(value) => handleFilterChange("statusProject", value)}
        />
      </SearchBar>
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-md table-zebra">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.accessorKey} className="text-center">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td key={column.accessorKey} className="">
                    {column.accessorKey === "aksi" ? (
                      <div>
                        <button className="btn btn-edit btn-ghost hover:bg-transparent text-center">
                          <iconMap.HiDotsVertical size={16} />
                        </button>
                      </div>
                    ) : (
                      item[column.accessorKey as keyof Item]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectPageNew;
