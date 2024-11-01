import React, { useState } from "react";

interface DataSelectorProps {
  options: number[];
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const DataSelector: React.FC<DataSelectorProps> = ({
  options,
  defaultValue = 10,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center gap-2 text-gray-500">
      <span>Lihat</span>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="px-2 py-1 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((option) => (
          <option key={option} value={option} className="text-xs md:text-base">
            {option}
          </option>
        ))}
      </select>
      <span>data</span>
    </div>
  );
};

export default DataSelector;
