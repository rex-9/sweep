import React, { useState } from 'react';
import { fetchCharacter, fetchHomeworld } from '../services/swapiService';
import CharacterModal from './CharacterModal';

const speciesColorMap = {
  'Human': 'lightblue',
  'Droid': 'lightgrey',
  // Add more species and their corresponding colors here
};

const CharacterCard = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const [characterDetails, setCharacterDetails] = useState(null);

  const handleClick = () => {
    fetchCharacter(character.url)
      .then(data => {
        fetchHomeworld(data.homeworld)
          .then(homeworld => {
            setCharacterDetails({ ...data, homeworld });
            setShowModal(true);
          });
      });
  };

  return (
    <div 
      className="character-card" 
      style={{ backgroundColor: speciesColorMap[character.species] }}
      onClick={handleClick}
    >
      <h2>{character.name}</h2>
      <img src={`https://picsum.photos/200?random=${character.name}`} alt={character.name} />
      {showModal && <CharacterModal character={characterDetails} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CharacterCard;
