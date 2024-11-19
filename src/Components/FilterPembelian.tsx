import React, { useState, useEffect, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface FilterBarProps {
  onFilterChange: (filters: Record<string, any>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [isDateDropdownVisible, setIsDateDropdownVisible] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDateRangeValid, setIsDateRangeValid] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleFilterChange = (field: string, value: any) => {
    onFilterChange({ [field]: value });
  };

  const handleDateChange = () => {
    if (startDate && endDate) {
      setIsDateRangeValid(true);
    } else {
      setIsDateRangeValid(false);
    }
  };

  const handleApplyDateRange = () => {
    if (startDate && endDate) {
      onFilterChange({ range: { start: startDate, end: endDate } });
      setIsDateDropdownVisible(false);
    }
  };

  const handleClearDateRange = () => {
    setStartDate("");
    setEndDate("");
    onFilterChange({ range: undefined });
    setIsDateDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDateDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-3">
      {/* Tanggal Input dengan Label dan Icon Calendar */}
      <div className="relative">
        <input
          type="text"
          id="date"
          className="input input-bordered pl-10 pr-3 py-1 cursor-pointer text-sm"
          onClick={() => setIsDateDropdownVisible(true)}
          value={startDate && endDate ? `${startDate} to ${endDate}` : "dd/mm/yyyy"}
          readOnly
        />
        {/* Icon Kalender */}
        <FaCalendarAlt
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500"
          size={16}
        />

        {/* Dropdown untuk rentang tanggal */}
        {isDateDropdownVisible && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md p-3 z-10 text-sm"
          >
            <div className="flex flex-col gap-2">
              <input
                type="date"
                className="input input-bordered p-1"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  handleDateChange();
                }}
                placeholder="Start Date"
              />
              <span className="mx-2 text-gray-500 text-center">to</span>
              <input
                type="date"
                className="input input-bordered p-1"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  handleDateChange();
                }}
                placeholder="End Date"
              />
            </div>
            {/* Tombol Apply dan Clear */}
            <div className="flex justify-between mt-2">
              <button
                onClick={handleClearDateRange}
                className="text-red-500 hover:text-red-700 text-xs"
              >
                Clear
              </button>
              <button
                onClick={handleApplyDateRange}
                className="bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 text-xs"
                disabled={!isDateRangeValid}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Vendor Dropdown */}
      <select
        className="select select-bordered text-sm px-2 py-1"
        onChange={(e) => handleFilterChange("vendor", e.target.value)}
      >
        <option value="">All Vendor</option>
        <option value="PT Malindo Feedmill Tbk">PT Malindo Feedmill Tbk</option>
        
      </select>

      {/* Department Dropdown */}
      <select
        className="select select-bordered text-sm px-2 py-1"
        onChange={(e) => handleFilterChange("department", e.target.value)}
      >
        <option value="">All Departemen</option>
        <option value="Operations - MANBU">Operations - MANBU</option>
        <option value="Operations - MBU">Operations - MBU</option>
        <option value="Operations - LTI">Operations - LTI</option>
      </select>
    </div>
  );
};

export default FilterBar;
