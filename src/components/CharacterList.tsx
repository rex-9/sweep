import React, { useState, useEffect } from 'react';
import SwapiService from '../services/swapiService';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    SwapiService.getCharacters()
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div>
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
