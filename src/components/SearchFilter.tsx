import React, { useState } from 'react';

interface SearchFilterProps {
  onSearchChange: (search: string, filters: any) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearchChange }) => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value, filters);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onSearchChange(search, { ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleSearchChange} />
      <select name="homeworld" value={filters.homeworld || ''} onChange={handleFilterChange}>
        {/* Options for homeworld filter */}
      </select>
      <select name="film" value={filters.film || ''} onChange={handleFilterChange}>
        {/* Options for film filter */}
      </select>
      <select name="species" value={filters.species || ''} onChange={handleFilterChange}>
        {/* Options for species filter */}
      </select>
    </div>
  );
};

export default SearchFilter;
