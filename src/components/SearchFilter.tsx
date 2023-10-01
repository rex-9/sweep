import { useState } from "react";
import SwapiService from "../services/swapiService";
import HelperService from "../services/helperService";

import { ChangeEvent, FormEvent, useState } from "react";
import SwapiService from "../services/swapiService";
import HelperService from "../services/helperService";

interface Props {
  setCharacters: (characters: any[]) => void;
  setPages: (pages: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
}

interface Filters {
  homeworld: string;
  film: string;
  species: string;
}

const SearchFilter = ({
  setCharacters,
  setPages,
  setIsLoading,
  setIsError,
  setErrorMessage,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    homeworld: "",
    film: "",
    species: "",
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    SwapiService.getCharacters({ page: "", searchTerm: searchTerm, filters: filters })
      .then((data: any) => {
        setCharacters(HelperService.generateCharacterPic(data.results));
        setPages(HelperService.calcPages(data.count));
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e: any) => {
        setIsError(true);
        setErrorMessage(e.message);
      });
  };

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <form className="text-black flex items-center gap-4 fixed right-0 top-0 p-4 bg-gray-200 rounded">
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search characters..."
        className="searchBar p-2 rounded border border-gray-300"
      />
      <button type="button" className="btn text-white bg-blue-500 p-2 rounded" onClick={handleSearch}>
        Search
      </button>
      <select
        name="homeworld"
        value={filters.homeworld}
        onChange={handleFilterChange}
        className="filters p-2 rounded border border-gray-300"
      >
        Options for homeworld filter
      </select>
      <select
        name="film"
        value={filters.film}
        onChange={handleFilterChange}
        className="filters p-2 rounded border border-gray-300"
      >
        Options for film filter
      </select>
      <select
        name="species"
        value={filters.species}
        onChange={handleFilterChange}
        className="filters p-2 rounded border border-gray-300"
      >
        Options for species filter
      </select>
    </form>
  );
};

export default SearchFilter;
