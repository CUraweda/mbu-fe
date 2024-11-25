import { FC } from "react";

interface FilterSectionProps {
  filterStatuses: string[];
  handleFilterChange: (selected: string[]) => void;
  fields: string[];
  label: string;
}

const FilterSection: FC<FilterSectionProps> = ({
  filterStatuses,
  handleFilterChange,
  fields,
  label,
}) => {
  return (
    <>
      <label className="text-sm">{label}</label>
      <div className="flex flex-col gap-2 mt-2">
        {fields.map((value) => (
          <label
            key={value}
            htmlFor={value}
            className="flex items-center gap-4"
          >
            <input
              type="checkbox"
              checked={filterStatuses.includes(value)}
              name={value}
              className="custom-checkbox"
              onChange={() =>
                handleFilterChange(
                  filterStatuses.includes(value)
                    ? filterStatuses.filter((status) => status !== value)
                    : [...filterStatuses, value],
                )
              }
            />
            {value}
          </label>
        ))}
      </div>
    </>
  );
};

export default FilterSection;
