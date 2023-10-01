import { useState, useEffect } from "react";
import SwapiService from "../services/swapiService";

const CharacterDetails = ({
  character,
  onClose,
}: {
  character: any;
  onClose: () => void;
}) => {
  const [homeworld, setHomeworld] = useState({
    name: "",
    terrain: "",
    climate: "",
    population: "",
  });

  useEffect(() => {
    SwapiService.getHomeworld(character.homeworld).then((data) =>
      setHomeworld(data)
    );
  }, [character.homeworld]);

  return (
    <div className="fixed top-0 translate-x-[50%] bg-red-300">
      <h2>{character.name}</h2>
      <p>Height: {character.height}m</p>
      <p>Mass: {character.mass}kg</p>
      <p>Date added: {new Date(character.created).toLocaleDateString()}</p>
      <p>Number of films: {character.films.length}</p>
      <p>Birth year: {character.birth_year}</p>
      <h3>Homeworld: {homeworld.name}</h3>
      <p>Terrain: {homeworld.terrain}</p>
      <p>Climate: {homeworld.climate}</p>
      <p>Number of residents: {homeworld.population}</p>
      <button onClick={() => onClose()}>Close</button>
    </div>
  );
};

export default CharacterDetails;
