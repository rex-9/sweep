import React, { useState } from 'react';

interface SearchFilterProps {
  onSearchChange: (search: string) => void;
  onFilterChange: (filter: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearchChange, onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onSearchChange(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleSearchChange} placeholder="Search..." />
      <select value={filter} onChange={handleFilterChange}>
        <option value="">Filter by...</option>
        <option value="homeworld">Homeworld</option>
        <option value="film">Film</option>
        <option value="species">Species</option>
      </select>
    </div>
  );
};

export default SearchFilter;
