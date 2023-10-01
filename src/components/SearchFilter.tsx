import { useState } from "react";
import SwapiService from "../services/swapiService";
import HelperService from "../services/helperService";

const SearchFilter = ({
  setCharacters,
  setPages,
  setIsLoading,
  setIsError,
  setErrorMessage,
}: {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<{ homeworld: string; film: string; species: string; }>({
    homeworld: "",
    film: "",
    species: "",
  });

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
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

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <form className="text-black flex items-center gap-4 fixed right-0 top-0 p-4 bg-gray-800">
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search characters..."
        className="searchBar p-2 rounded-md bg-white"
      />
      <button type="button" className="btn text-white bg-blue-500 p-2 rounded-md" onClick={handleSearch}>
        Search
      </button>
      <select
        name="homeworld"
        value={filters.homeworld}
        onChange={handleFilterChange}
        className="filters p-2 rounded-md bg-white"
      >
        Options for homeworld filter
      </select>
      <select
        name="film"
        value={filters.film}
        onChange={handleFilterChange}
        className="filters p-2 rounded-md bg-white"
      >
        Options for film filter
      </select>
      <select
        name="species"
        value={filters.species}
        onChange={handleFilterChange}
        className="filters p-2 rounded-md bg-white"
      >
        Options for species filter
      </select>
    </form>
  );
};

export default SearchFilter;
