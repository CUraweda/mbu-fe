import React, { useState } from "react";

interface SearchBarProps {
  onSearchChange: (searchQuery: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  placeholder = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchQuery);
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
          onChange={handleSearchInput}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default SearchBar;
