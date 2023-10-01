import { useState, useEffect } from "react";
import SwapiService from "../services/swapiService";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    SwapiService.getCharacters().then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
