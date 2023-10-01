import React from 'react';
import { fetchHomeworld } from '../services/swapiService';

interface CharacterModalProps {
  character: any;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  const [homeworld, setHomeworld] = React.useState(null);

  React.useEffect(() => {
    fetchHomeworld(character.homeworld)
      .then(data => setHomeworld(data))
      .catch(error => console.error(error));
  }, [character.homeworld]);

  return (
    <div className="character-modal">
      <h2>{character.name}</h2>
      <p>Height: {character.height}m</p>
      <p>Mass: {character.mass}kg</p>
      <p>Date added: {new Date(character.created).toLocaleDateString()}</p>
      <p>Number of films: {character.films.length}</p>
      <p>Birth year: {character.birth_year}</p>
      {homeworld && (
        <>
          <h3>Homeworld</h3>
          <p>Name: {homeworld.name}</p>
          <p>Terrain: {homeworld.terrain}</p>
          <p>Climate: {homeworld.climate}</p>
          <p>Number of residents: {homeworld.population}</p>
        </>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CharacterModal;
