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
            <th className="px-4 py-2 font-semibold">Project Id</th>
            <th className="px-4 py-2 font-semibold">Waktu Recording</th>
            <th className="px-4 py-2 font-semibold">Lokasi</th>
            <th className="px-4 py-2 font-semibold">Status</th>
            <th className="px-4 py-2 font-semibold">Kecepatan Waktu</th>
            <th className="px-4 py-2 font-semibold">Aksi</th>
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
