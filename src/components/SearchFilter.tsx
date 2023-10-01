import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ homeworld: '', film: '', species: '' });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <input type="text" name="search" value={searchTerm} onChange={handleSearchChange} placeholder="Search characters..." />
      <select name="homeworld" value={filters.homeworld} onChange={handleFilterChange}>
        {/* Options for homeworld filter */}
      </select>
      <select name="film" value={filters.film} onChange={handleFilterChange}>
        {/* Options for film filter */}
      </select>
      <select name="species" value={filters.species} onChange={handleFilterChange}>
        {/* Options for species filter */}
      </select>
    </form>
  );
};

export default SearchFilter;
