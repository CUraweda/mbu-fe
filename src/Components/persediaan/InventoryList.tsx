import { Inventory } from "@/Data/inventoryData";
import React, { useState } from "react";
import InventoryItem from "./InventoryItem";

interface InventoryListProps {
  inventory: Inventory[];
}

const InventoryList: React.FC<InventoryListProps> = ({ inventory }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(inventory.length).fill(false),
  );
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleRowSelect = (index: number) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = !updatedSelectedRows[index];
    setSelectedRows(updatedSelectedRows);

    // Update isAllSelected status
    setIsAllSelected(updatedSelectedRows.every((selected) => selected));
  };

  const handleSelectAll = () => {
    const newIsAllSelected = !isAllSelected;
    setIsAllSelected(newIsAllSelected);
    setSelectedRows(Array(inventory.length).fill(newIsAllSelected));
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr className=" bg-blue-100">
            <th className="w-10">
            <input
                type="checkbox"
                className="checkbox checkbox-info"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
              
            </th>
            <th>Produk id</th>
            <th>Nama</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Kategori</th>
            <th>Total Stok</th>
            <th>Satuan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <InventoryItem
              {...item}
              key={item.id}
              isChecked={selectedRows[index]}
              onCheckboxChange={() => handleRowSelect(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
