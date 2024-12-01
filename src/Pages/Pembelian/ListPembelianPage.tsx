import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import DataSelector from "@/Components/DataSelector";
import FilterBar from "@/Components/FilterPembelian";
import PembelianList from "@/Components/pembelian/PembelianList";
import SearchBar from "@/Components/Search";
import IconMap from "@/Data/IconMap";
import LayoutProject from "@/Layouts/LayoutProject";
import { useNavigate } from "react-router-dom";
import pembelianData from "@/Data/pembelianData";

// icons
import type { FilterField } from "@/Data/dataTypes";
import HFilter from "@/helpers/HFilter";
import Filter from "@/Components/Filter";
import ExportButton from "@/Components/ExportButton";
import PaginationBottom from "@/Components/PaginationBottom";

// Sample breadcrumb items
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian" },
];

const filterFields: FilterField[] = [
  {
    name: "status",
    label: "Status",
    options: [
      "Draft",
      "Approval Manager",
      "Approval Purchasing",
      "Approval Finance",
      "Approval Dir Finance",
      "PO Release",
      "Produk Diterima",
      "Dibayar",
      "Dibayar Sebagian",
    ],
  },
];

const ListPembelianPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  // const [filters, setFilters] = useState<Record<string, string | any>>({});
  const [, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStates, setFilterStates] = useState<Record<string, string[]>>(
    {},
  );
  const [filteredData, setFilteredData] = useState(pembelianData);

  const handleFilter = useCallback(() => {
    let result = HFilter.byState(pembelianData, filterStates);

    result = HFilter.byQuery(pembelianData, searchQuery);

    setFilteredData(result);
  }, [searchQuery, filterStates]);

  // const handleFilterChange = (newFilters: Record<string, any>) => {
  //   setFilters(newFilters);
  // };

  const handleDataChange = (value: number) => {
    setItemsPerPage(value);
  };

  // const filteredItems = pembelianData.filter((item) => {
  //   const matchesDateRange =
  //     filters.range && filters.range.start && filters.range.end
  //       ? item.tanggal >= filters.range.start &&
  //         item.tanggal <= filters.range.end
  //       : true;
  //
  //   const matchesVendor =
  //     filters.vendor && filters.vendor.length > 0
  //       ? filters.vendor.includes(item.vendor)
  //       : true;
  //
  //   const matchesDepartment =
  //     filters.department && filters.department.length > 0
  //       ? filters.department.includes(item.departemen)
  //       : true;
  //
  //   return matchesDateRange && matchesVendor && matchesDepartment;
  //
  //   // TODO: IMPLEMENT AND COMBINE THIS FILTER WITH THE ACTIVE ONE
  // });

  // const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  // NOTE: PAGINATION BY BACKEND
  // const paginatedItems = filteredItems.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage,
  // );

  const handleNavigateToFormPembelian = () => {
    navigate("/purchase-list/add");
  };

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">List Pembelian</h1>
          <div className="flex items-center gap-3">
            <ExportButton />

            <button
              className="flex items-center gap-2 text-white rounded-md bg-primary btn hover:bg-secondary"
              onClick={handleNavigateToFormPembelian}
            >
              <IconMap.FaPlus size={10} />
              Tambah
            </button>
          </div>
        </div>

        <hr />

        <div className="flex flex-wrap items-center justify-between gap-5 px-5 py-4">
          <div className="flex-shrink-0">
            <DataSelector
              options={[10, 25, 50, 100]}
              onChange={handleDataChange}
            />
          </div>

          <div className="flex-grow">
            <FilterBar
              onFilterChange={() => console.log("To be implemented")}
            />
          </div>

          <div className="relative flex items-center gap-0">
            <SearchBar onSearchChange={setSearchQuery} />
            <Filter fields={filterFields} onFilterChange={setFilterStates} />
          </div>
        </div>

        <PembelianList items={filteredData} />

        <div className="flex flex-col items-center justify-between gap-5 m-5 mt-10 md:items-end md:flex-row">
          <span className="font-semibold">
            TOTAL: Rp.
            {filteredData
              .reduce((total, item) => total + item.total, 0)
              .toLocaleString()}
            {/* {filteredItems */}
            {/*   .reduce((total, item) => total + item.total, 0) */}
            {/*   .toLocaleString()} */}
            ,00
          </span>
          <PaginationBottom
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </LayoutProject>
    </div>
  );
};

export default ListPembelianPage;
