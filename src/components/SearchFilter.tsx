import React, { useState } from 'react';
import { homeworldData, filmData, speciesData } from '../data'; // Assuming data is exported from a file named data.js

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
        {homeworldData.map((homeworld) => (
          <option value={homeworld.value}>{homeworld.name}</option>
        ))}
      </select>
      <select name="film" value={filters.film || ''} onChange={handleFilterChange}>
        {filmData.map((film) => (
          <option value={film.value}>{film.name}</option>
        ))}
      </select>
      <select name="species" value={filters.species || ''} onChange={handleFilterChange}>
        {speciesData.map((species) => (
          <option value={species.value}>{species.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
