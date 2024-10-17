import React from "react";
import { useState } from "react";
import iconMap from "../../Data/iconMap";
import SearchBar from "../../Components/searchBar";
import DropdownFilter from "../../Components/filterDropdown";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/bread";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project" },
  { label: "Chick in", link: "/chickin" },
];

interface Item {
  id: string;
  unitBisnis: string;
  produk: string;
  lokasi: string;
  kandang: string;
  periode: number;
  kapasitas: number;
  statusChickIn: string;
  statusProject: string;
}

const items: Item[] = [
  // Add more items for pagination demonstration
  {
    id: "000001",
    unitBisnis: "Manbu",
    produk: "Parent Stock",
    lokasi: "Pangandaran",
    kandang: "Pangandaran 1",
    kapasitas: 50000,
    periode: 1,
    statusChickIn: "Sudah",
    statusProject: "Selesai",
  },
  {
    id: "000002",
    unitBisnis: "Manbu",
    produk: "Parent Stock",
    lokasi: "Lokasi 2",
    kandang: "Pangandaran 2",
    kapasitas: 40000,
    periode: 2,
    statusChickIn: "Belum",
    statusProject: "Pengajuan",
  },
  // Add more items as needed...
];

const PAGE_SIZE = 5;

const chickinPage: React.FC = () => {
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
    { header: "Lokasi", accessorKey: "lokasi" },
    { header: "Kandang", accessorKey: "kandang" },
    { header: "Periode", accessorKey: "periode" },
    { header: "Status Chick In", accessorKey: "statusChickIn" },
    { header: "Status Project", accessorKey: "statusProject" },
    { header: "Aksi", accessorKey: "aksi" },
  ];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  //   const handleAddClick = () => {
  //     console.log("Add button clicked");
  //     navigate(`/persiapan/add`);
  //   };

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
  const deleteData = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3000/project/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditClick = (type: number, item: Item) => {
    switch (type) {
      case 1:
        navigate(`/project/edit/${item.id}`, { state: { projectData: item } });
        break;
      case 2:
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteData(item.id);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
        break;
      case 3:
        navigate(`/chickin/update/${item.id}`, {
          state: { projectData: item },
        });
        break;
      case 4:
        navigate(`/chickin/update/${item.id}`, {
          state: { projectData: item, Status: "approvalView" },
        });
        break;
      default:
        console.log("Invalid button clicked");
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
      <Breadcrumb items={breadcrumbItems} />
      <LayoutProject>
        <div className="p-5">
          <SearchBar
            onSearch={handleSearch}
            tittlePage="Chick in"
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
        <div className="overflow-x-auto rounded-md m-5  min-h-80">
          <table className="table table-lg table-zebra ">
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
                  <td className="text-center ">
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
                          <div className="dropdown dropdown-left z-40 relative">
                            <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-edit btn-ghost hover:bg-transparent text-center"
                            >
                              <iconMap.HiDotsVertical size={16} />
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute"
                            >
                              <li onClick={() => handleEditClick(1, item)}>
                                <a>Edit</a>
                              </li>
                              <li onClick={() => handleEditClick(2, item)}>
                                <a>Delete</a>
                              </li>
                              <li onClick={() => handleEditClick(3, item)}>
                                <a>Persiapan</a>
                              </li>
                              <li onClick={() => handleEditClick(4, item)}>
                                <a>Chick in</a>
                              </li>
                            </ul>
                          </div>
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
            className="mx-2 text-blue-400 flex items-center gap-5  hover:bg-transparent"
          >
            <iconMap.FaArrowLeft size={18} className=" text-blue-400" />
            <div className="flex text-center">Prev</div>
          </button>
          <span className="mx-2 text-blue-400">{`${currentPage} of ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="mx-2 text-blue-400 flex items-center gap-5  hover:bg-transparent"
          >
            <div className="flex text-center">Next</div>
            <iconMap.FaArrowRight size={18} className=" text-blue-400" />
          </button>
        </div>
      </LayoutProject>
    </div>
  );
};

export default chickinPage;
