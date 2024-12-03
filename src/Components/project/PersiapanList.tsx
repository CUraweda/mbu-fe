import React, { useState } from "react";
import PersiapanItem from "./PersiapanItem";
// import { ProjectPreparationsResponse } from "@/Data/types/response.type";
import { Persiapan } from "@/Data/persiapanData";

interface PreparationListProps {
  preparations: Persiapan[];
}

const PersiapanList: React.FC<PreparationListProps> = ({ preparations }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(preparations.length).fill(false),
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
    <div className="overflow-x-auto">
      <table className="table table-zebra bg-white">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className="w-10">
            <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-info"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th>Id Persiapan</th>
            <th>Unit Bisnis</th>
            <th>Produk</th>
            <th>Lokasi</th>
            <th>Kandang</th>
            <th>Periode</th>
            <th>Status Project</th>
            <th>Status Persiapan</th>
            <th>
              Aktual Waktu <br /> Persiapan (hari)
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
