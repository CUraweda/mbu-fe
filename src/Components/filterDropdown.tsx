import React from "react";

type FilterProps = {
  title: string;
  options: string[];
  onChange: (value: string) => void;
};

const DropdownFilter: React.FC<FilterProps> = ({
  title,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <label className="font-semibold">{title}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="select select-bordered"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
