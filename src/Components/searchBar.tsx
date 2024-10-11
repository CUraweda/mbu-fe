import React, { useEffect, useState } from "react";
import iconMap from "../Data/iconMap";

type SearchBarProps = {
  onSearch: (searchQuery: string) => void;
  onAddClick?: () => void;
  children?: React.ReactNode;
  exportFile?: () => void;
  tittlePage?: string;
  styling?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onAddClick,
  children,
  exportFile,
  tittlePage,
  styling,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="block mb-5">
      <div className="w-full flex justify-between items-center gap-2">
        <div>
          <div className="font-semibold text-2xl text-blue-400">
            {tittlePage}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="btn bg-transparent btn-outline text-blue-400 rounded-md"
            onClick={exportFile}
          >
            <iconMap.CiExport size={20} />
            Export
          </button>
          {onAddClick && (
            <button
              className="btn bg-blue-400 text-white rounded-md"
              onClick={onAddClick}
            >
              Tambah
            </button>
          )}
        </div>
      </div>
      <div className="border-b-2 border-gray-200 my-4 rounded-md" />
      <div className="w-full flex justify-end gap-2 mb-5 items-center">
        <form
          onSubmit={handleSearchSubmit}
          className="input input-bordered flex items-center gap-2 w-fit"
        >
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </form>
        <details className="dropdown dropdown-left dropdown-bottom ">
          <summary className="btn btn-ghost m-1">
            <iconMap.CiFilter size={28} />
          </summary>
          <div
            className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow  ${styling} `}
          >
            {children}
          </div>
        </details>
      </div>
    </div>
  );
};

export default SearchBar;
