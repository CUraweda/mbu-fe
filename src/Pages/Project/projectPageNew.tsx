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

const items: Item[] = [
  // Add more items for pagination demonstration
  {
    id: "000001",
    unitBisnis: "Manbu",
    produk: "Parent Stock",
    area: "Priangan",
    lokasi: "Pangandaran",
    kandang: "Pangandaran 1",
    kapasitas: 50000,
    periode: 3,
    statusChickIn: "Sudah",
    statusProject: "Selesai",
  },
  {
    id: "000002",
    unitBisnis: "Manbu",
    produk: "Parent Stock",
    area: "Priangan",
    lokasi: "Lokasi 2",
    kandang: "Pangandaran 2",
    kapasitas: 40000,
    periode: 4,
    statusChickIn: "Belum",
    statusProject: "Pengajuan",
  },
  // Add more items as needed...
];

const PAGE_SIZE = 5;

const ProjectPageNew = () => {
  const navigate = useNavigate();
  const [data] = useState<Item[]>(items);
  const [filters, setFilters] = useState({
    lokasi: "",
    unitBisnis: "",
    statusChickIn: "",
    statusProject: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

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

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allIds = filteredData.map((item) => item.id);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleRowSelect = (id: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
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

  // Pagination logic
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedData = filteredData.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  // Function to determine the CSS class for status Chick In
  const getStatusChickInClass = (status: string) => {
    if (status === "Sudah") return "bg-green-200 text-green-600";
    if (status === "Belum") return "bg-orange-200 text-orange-600";
    return "";
  };

  // Function to determine the CSS class for status Project
  const getStatusProjectClass = (status: string) => {
    if (status === "Selesai") return "bg-blue-200 text-blue-600";
    if (status === "Persiapan") return "bg-red-200 text-red-600"; // Transparan dengan teks merah pekat
    if (status === "Pengajuan") return "bg-yellow-200 text-yellow-600";
    if (status === "Aktif") return "bg-pink-200 text-pink-600";
    return "";
  };
  return (
    <div className="w-full block">
      <div className="p-5">
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
            options={[
              "Seleksi",
              "Selesai",
              "Dalam Proses",
              "Pengajuan",
              "Aktif",
            ]}
            onChange={(value) => handleFilterChange("statusProject", value)}
          />
        </SearchBar>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-md table-zebra">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-center p-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              {columns.map((column) => (
                <th key={column.accessorKey} className="text-center">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td className="text-center p-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />
                </td>
                {columns.map((column) => (
                  <td key={column.accessorKey} className="text-center">
                    {column.accessorKey === "aksi" ? (
                      <div>
                        <button className="btn btn-edit btn-ghost hover:bg-transparent text-center">
                          <iconMap.HiDotsVertical size={16} />
                        </button>
                      </div>
                    ) : column.accessorKey === "statusChickIn" ? (
                      <span
                        className={`rounded-md px-2 py-1 text-sm ${getStatusChickInClass(
                          item.statusChickIn
                        )}`}
                      >
                        {item.statusChickIn}
                      </span>
                    ) : column.accessorKey === "statusProject" ? (
                      <span
                        className={`rounded-md px-2 py-1 text-sm ${getStatusProjectClass(
                          item.statusProject
                        )}`}
                      >
                        {item.statusProject}
                      </span>
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

      {/* Pagination controls */}
      <div className="flex justify-end m-4 items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="btn btn-outline mx-2 btn-sm"
        >
          Previous
        </button>
        <span className="mx-2">{`${currentPage} of ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="btn btn-outline mx-2 btn-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectPageNew;
