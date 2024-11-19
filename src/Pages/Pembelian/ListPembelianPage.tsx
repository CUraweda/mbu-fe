import { useState, useEffect, useRef } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import DataSelector from "../../Components/DataSelector";
import FilterBar from "../../Components/FilterPembelian";
import PembelianList from "../../Components/pembelian/PembelianList";
import SearchBar from "../../Components/Search";
import iconMap from "../../Data/iconMap";
import LayoutProject from "../../Layouts/layoutProject";
import { useNavigate } from "react-router-dom";

// icons
import { CiExport } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";

// Sample breadcrumb items
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian" },
];

// Sample data
interface Pembelian {
  id: string;
  noPR: string;
  vendor: string;
  namaPengaju: string;
  departemen: string;
  tanggal: string;
  status: string;
  total: number;
}

const items: Pembelian[] = [
  {
    id: "1",
    noPR: "PR-MAN-00001",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MANBU",
    tanggal: "2024-10-25",
    status: "Draft",
    total: 50000000,
  },
  {
    id: "2",
    noPR: "PR-MBU-00002",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Brian",
    departemen: "Operations - MBU",
    tanggal: "30/10/2024",
    status: "Approval Manager",
    total: 10000000,
  },
  {
    id: "3",
    noPR: "PR-LTI-00003",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Maman",
    departemen: "Operations - LTI",
    tanggal: "09/11/2024",
    status: "Approval Purchasing",
    total: 20000000,
  },
  {
    id: "4",
    noPR: "PR-MBU-00004",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Jupi",
    departemen: "Operations - MBU",
    tanggal: "09/11/2024",
    status: "Approval Finance",
    total: 15000000,
  },
  {
    id: "5",
    noPR: "PR-MAN-00005",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MANBU",
    tanggal: "25/10/2024",
    status: "Approval Dir Finance",
    total: 25000000,
  },
  {
    id: "6",
    noPR: "PR-MBU-00005",
    vendor: "PT Charoen Pokphand Indonesia Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MBU",
    tanggal: "25/10/2024",
    status: "PO Release",
    total: 389055000,
  },
  {
    id: "7",
    noPR: "PR-MBU-00007",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Jupi",
    departemen: "Operations - MBU",
    tanggal: "09/11/2024",
    status: "Produk Diterima",
    total: 10000000,
  },
  {
    id: "8",
    noPR: "PR-MAN-00008",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MANBU",
    tanggal: "25/10/2024",
    status: "Dibayar",
    total: 20000000,
  },
  {
    id: "9",
    noPR: "PR-MBU-00009",
    vendor: "PT Charoen Pokphand Indonesia Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MBU",
    tanggal: "25/10/2024",
    status: "Dibayar Sebagian",
    total: 38905500,
  },
];

const ListPembelianPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: Record<string, any>) => {
    setFilters(newFilters);
  };

  const handleDataChange = (value: number) => {
    setItemsPerPage(value);
  };

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter((prevState) =>
      prevState.includes(status)
        ? prevState.filter((item) => item !== status)
        : [...prevState, status]
    );
  };

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen((prevState) => !prevState);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      searchQuery
        ? Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        : true;

    const matchesDateRange =
      filters.range && filters.range.start && filters.range.end
        ? item.tanggal >= filters.range.start && item.tanggal <= filters.range.end
        : true;

    const matchesVendor =
      filters.vendor && filters.vendor.length > 0
        ? filters.vendor.includes(item.vendor)
        : true;

    const matchesDepartment =
      filters.department && filters.department.length > 0
        ? filters.department.includes(item.departemen)
        : true;

    const matchesStatus =
      statusFilter.length > 0 ? statusFilter.includes(item.status) : true;

    return (
      matchesSearch &&
      matchesDateRange &&
      matchesVendor &&
      matchesDepartment &&
      matchesStatus
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNavigateToFormPembelian = () => {
    navigate("/purchase-list/add");
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStatusDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">List Pembelian</h1>
          <div className="flex items-center gap-3">
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

            <button
              className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
              onClick={handleNavigateToFormPembelian}
            >
              <iconMap.FaPlus size={10} />
              Tambah
            </button>
          </div>
        </div>

        <hr />

        <div className="flex flex-wrap items-center justify-between px-5 py-4 gap-5">
          <div className="flex-shrink-0">
            <DataSelector options={[10, 25, 50, 100]} onChange={handleDataChange} />
          </div>

          <div className="flex-grow">
            <FilterBar onFilterChange={handleFilterChange} />
          </div>

          <div className="flex items-center gap-0 relative">
            <SearchBar onSearch={handleSearch} />
            <button
              className="m-1 btn btn-ghost"
              onClick={toggleStatusDropdown}
              aria-expanded={isStatusDropdownOpen ? "true" : "false"}
            >
              <iconMap.CiFilter
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                size={28}
              />
            </button>
            {isStatusDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute z-[1] top-full left-0 mt-2 ml-32 p-2 bg-white border rounded-lg shadow-md w-52"
              >
                {[
                  "Draft",
                  "Approval Manager",
                  "Approval Purchasing",
                  "Approval Finance",
                  "Approval Dir Finance",
                  "PO Release",
                  "Produk Diterima",
                  "Dibayar",
                  "Dibayar Sebagian",
                ].map((status) => (
                  <label key={status} className="block cursor-pointer">
                    <input
                      type="checkbox"
                      checked={statusFilter.includes(status)}
                      onChange={() => handleStatusFilterChange(status)}
                      className="mr-2"
                    />
                    {status}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <PembelianList items={paginatedItems} />

        <div className="flex flex-col items-center justify-between gap-5 m-5 mt-10 md:items-end md:flex-row">
          <span className="font-semibold">
            TOTAL: Rp.
            {filteredItems
              .reduce((total, item) => total + item.total, 0)
              .toLocaleString()}
            ,00
          </span>
          <div className="flex items-center justify-center md:justify-end">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center gap-5 mx-2 text-blue-400 hover:bg-transparent"
            >
              <iconMap.FaArrowLeft size={18} className="text-blue-400" />
              <div className="flex text-center">Prev</div>
            </button>
            <span className="mx-2 text-blue-400">
              {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="flex items-center gap-5 mx-2 text-blue-400 hover:bg-transparent"
            >
              <div className="flex text-center">Next</div>
              <iconMap.FaArrowRight size={18} className="text-blue-400" />
            </button>
          </div>
        </div>
      </LayoutProject>
    </div>
  );
};

export default ListPembelianPage;
