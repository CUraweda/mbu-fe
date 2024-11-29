import React, { useState } from "react";
import PersiapanItem from "./PersiapanItem";
import { ProjectPreparation } from "../../Data/types/projectType";
// import { Preparation } from "../../Data/types/persiapanType";

interface PreparationListProps {
  preparations: ProjectPreparation[];
}

const PersiapanList: React.FC<PreparationListProps> = ({ preparations }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(preparations.length).fill(false)
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
    setSelectedRows(Array(preparations.length).fill(newIsAllSelected));
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
            <th className="px-4 py-2 font-semibold">Id Persiapan</th>
            <th className="px-4 py-2 font-semibold">Unit Bisnis</th>
            <th className="px-4 py-2 font-semibold">Produk</th>
            <th className="px-4 py-2 font-semibold">Area</th>
            <th className="px-4 py-2 font-semibold">Lokasi</th>
            <th className="px-4 py-2 font-semibold">Kandang</th>
            <th className="px-4 py-2 font-semibold">Periode</th>
            <th className="px-4 py-2 font-semibold">Status Project</th>
            <th className="px-4 py-2 font-semibold">Status Persiapan</th>
            <th className="px-4 py-2 font-semibold">
              Aktual Waktu Persiapan (hari)
            </th>
            <th className="px-4 py-2 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {preparations.map((preparation, index) => (
            <PersiapanItem
              {...preparation}
              key={preparation.id}
              isChecked={selectedRows[index]}
              onCheckboxChange={() => handleRowSelect(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersiapanList;
