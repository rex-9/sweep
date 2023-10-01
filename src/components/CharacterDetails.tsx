import React, { useState, useEffect } from 'react';
import SwapiService from '../services/swapiService';

const CharacterDetails = ({ character }) => {
  const [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    SwapiService.getHomeworld(character.homeworld)
      .then(data => setHomeworld(data));
  }, [character.homeworld]);

  return (
    <div className="character-details-modal">
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
    </div>
  );
};

export default CharacterDetails;
