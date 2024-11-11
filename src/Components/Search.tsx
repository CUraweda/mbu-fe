import React, { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center w-full gap-4">
      <span className="text-gray-500">Cari: </span>
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center h-10 gap-2 input input-bordered w-fit"
      >
        <input
          type="text"
          className=""
          value={searchQuery}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
