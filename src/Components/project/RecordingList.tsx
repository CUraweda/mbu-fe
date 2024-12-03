import React, { useState } from "react";
import RecordingItem from "./RecordingItem";

interface RecordingListProps {
  items: {
    projectId: number;
    waktuRecording: string;
    lokasi: string;
    status: string;
    kecepatanWaktu: string;
  }[];
}

const RecordingList: React.FC<RecordingListProps> = ({ items }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(items.length).fill(false),
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
            <th>Project Id</th>
            <th>Waktu Recording</th>
            <th>Lokasi</th>
            <th>Status</th>
            <th>Kecepatan Waktu</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <RecordingItem
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

export default RecordingList;
