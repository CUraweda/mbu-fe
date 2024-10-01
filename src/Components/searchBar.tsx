import React, { useEffect, useState } from "react";

type SearchBarProps = {
  onSearch: (searchQuery: string) => void;
  onAddClick: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onAddClick }) => {
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
    <div className="w-full flex justify-end gap-2 mb-5">
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
      <button className="btn bg-[#00499E] text-white" onClick={onAddClick}>
        Tambah
      </button>
    </div>
  );
};
export default SearchBar;
