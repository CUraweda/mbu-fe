import React, { useState } from "react";
import ChickInItem from "./ChickInItem";
// import { ProjectChickInResponse } from "@/Data/types/response.type";
import { ChickIn } from "@/Data/ChickinData";

interface ChickInListProps {
  chickins: ChickIn[];
}

const ChickInList: React.FC<ChickInListProps> = ({ chickins }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(chickins.length).fill(false),
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
    setSelectedRows(Array(chickins.length).fill(newIsAllSelected));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra bg-white">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className="w-10">
            <input
                type="checkbox"
               
                className="checkbox checkbox-info"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th>Id Project</th>
            <th>Unit Bisnis</th>
            <th>Produk</th>
            <th>Area</th>
            <th>Lokasi</th>
            <th>Kandang</th>
            <th>Kapasitas</th>
            <th>Periode</th>
            <th>Status Chick in</th>
            <th>Status Project</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {chickins.map((chickin, index) => (
            <ChickInItem
              key={index}
              {...chickin}
              isChecked={selectedRows[index]}
              onCheckboxChange={() => handleRowSelect(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChickInList;
