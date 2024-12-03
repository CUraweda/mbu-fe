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
    <div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className="w-10">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th className="px-4 py-2 font-semibold">Produk id</th>
            <th className="px-4 py-2 font-semibold">Nama</th>
            <th className="px-4 py-2 font-semibold">Harga Beli</th>
            <th className="px-4 py-2 font-semibold">Harga Jual</th>
            <th className="px-4 py-2 font-semibold">Kategori</th>
            <th className="px-4 py-2 font-semibold">Total Stok</th>
            <th className="px-4 py-2 font-semibold">Satuan</th>
            <th className="px-4 py-2 font-semibold">Aksi</th>
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
