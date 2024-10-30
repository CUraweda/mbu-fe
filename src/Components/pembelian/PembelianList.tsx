import React, { useState } from "react";
import PembelianItem from "./PembelianItem";

interface PembelianListProps {
  items: {
    id: string;
    noPR: string;
    vendor: string;
    namaPengaju: string;
    departemen: string;
    tanggal: string;
    status: string;
    total: number;
  }[];
}

const PembelianList: React.FC<PembelianListProps> = ({ items }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(items.length).fill(false)
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
    setSelectedRows(Array(items.length).fill(newIsAllSelected));
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
            <th className="px-4 py-2 font-semibold">No. PR</th>
            <th className="px-4 py-2 font-semibold">Vendor</th>
            <th className="px-4 py-2 font-semibold">Nama Pengaju</th>
            <th className="px-4 py-2 font-semibold">Departemen</th>
            <th className="px-4 py-2 font-semibold">Tanggal Dibutuhkan</th>
            <th className="px-4 py-2 font-semibold">Status</th>
            <th className="px-4 py-2 font-semibold">Total (Rp)</th>
            <th className="px-4 py-2 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <PembelianItem
              key={index}
              {...item}
              isChecked={selectedRows[index]}
              onCheckboxChange={() => handleRowSelect(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PembelianList;
