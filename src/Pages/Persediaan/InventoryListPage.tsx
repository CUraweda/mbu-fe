import Breadcrumb from "@/Components/Breadcrumb";
import DataSelector from "@/Components/DataSelector";
import ExportButton from "@/Components/ExportButton";
import Filter from "@/Components/Filter";
import PaginationBottom from "@/Components/PaginationBottom";
import InventoryList from "@/Components/persediaan/InventoryList";
import SearchBar from "@/Components/Search";
import { FilterField } from "@/Data/dataTypes";
import inventoryData from "@/Data/inventoryData";
import HFilter from "@/helpers/HFilter";
import LayoutProject from "@/Layouts/LayoutProject";
import { useCallback, useEffect, useState } from "react";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Persediaan", link: "/inventory/list" },
  { label: "Produk" },
];

const filterFields: FilterField[] = [
  {
    name: "satuan",
    label: "Satuan",
    options: ["Ekor", "Kilogram"],
  },
];

const InventoryListPage = () => {
  const data = inventoryData;
  const [, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStates, setFilterStates] = useState<Record<string, string[]>>(
    {},
  );
  const [, setFilteredData] = useState(inventoryData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDataChange = (value: number) => {
    setItemsPerPage(value);
  };

  const handleFilter = useCallback(() => {
    let result = HFilter.byState(inventoryData, filterStates);

    result = HFilter.byQuery(inventoryData, searchQuery);

    setFilteredData(result);
  }, [searchQuery, filterStates]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div>
      <Breadcrumb title="Persediaan" items={breadcrumbItems} />
      <LayoutProject>
        <div className="flex flex-col justify-between gap-3 m-5 md:items-center md:flex-row">
          <h1 className="text-2xl text-primary">List Produk</h1>
          <div className="flex items-center gap-3">
            <ExportButton />
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

          <div className="relative flex items-center gap-0">
            <SearchBar onSearchChange={setSearchQuery} />
            <Filter fields={filterFields} onFilterChange={setFilterStates} />
          </div>
        </div>
        <InventoryList inventory={data} />
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

export default InventoryListPage;
