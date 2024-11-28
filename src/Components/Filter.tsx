import React, { useState } from "react";
import iconMap from "../Data/iconMap";
import { FilterField } from "../Data/dataTypes";
import FilterSection from "./FilterSection";

interface FilterProps {
  fields: FilterField[];
  onFilterChange: (filterStates: Record<string, string[]>) => void;
}

const Filter: React.FC<FilterProps> = ({ fields, onFilterChange }) => {
  const [filterStates, setFilterStates] = useState<Record<string, string[]>>(
    fields.reduce(
      (acc, field) => {
        acc[field.name] = []; // Initialize filter states for each field
        return acc;
      },
      {} as Record<string, string[]>,
    ),
  );

  const handleFilterChange = (fieldName: string, selectedOptions: string[]) => {
    const updatedFilterStates = {
      ...filterStates,
      [fieldName]: selectedOptions,
    };
    setFilterStates(updatedFilterStates);

    onFilterChange(updatedFilterStates);
  };

  return (
    <details className="dropdown dropdown-end ">
      <summary className="m-1 btn btn-ghost">
        <iconMap.CiFilter size={28} />
      </summary>
      <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-max p-4 shadow border border-gray-300">
        <div className="flex flex-col">
          {fields.map((field, index) => (
            <>
              <FilterSection
                key={field.name}
                filterStatuses={filterStates[field.name]}
                handleFilterChange={(selected) =>
                  handleFilterChange(field.name, selected)
                }
                fields={field.options}
                label={field.label}
              />
              {fields.length - 1 !== index && <hr className="my-4" />}
            </>
          ))}
        </div>
      </div>
    </details>
  );
};

export default Filter;
