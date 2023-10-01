import { useState } from "react";
import CharacterDetails from "./CharacterDetails";

const CharacterCard = ({ character }: { character: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("close modal");
    setIsModalOpen(false);
  };

  return (
    <div
      className={`character-card ${character.species}`}
      onClick={handleOpenModal}
    >
      <img
        src={`https://picsum.photos/id/${character.id}/200/300`}
        alt={character.name}
      />
      <h2>{character.name}</h2>
      {isModalOpen && (
        <CharacterDetails
          character={character}
          onClose={() => handleCloseModal()}
        />
      )}
    </div>
  );
};

export default CharacterCard;
