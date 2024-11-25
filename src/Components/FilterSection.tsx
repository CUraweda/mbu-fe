import { FC } from "react";

interface FilterSectionProps {
  filterStatuses: string[];
  handleFilterChange: (selected: string[]) => void;
  fields: string[];
}

const FilterSection: FC<FilterSectionProps> = ({
  filterStatuses,
  handleFilterChange,
  fields,
}) => {
  return (
    <div className="mb-2">
      <label className="text-sm font-semibold">Status Persiapan</label>
      <div className="flex flex-col gap-2 mt-2">
        {Array.isArray(fields) &&
          fields.map((value) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filterStatuses.includes(value)}
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
    </div>
  );
};

export default FilterSection;
