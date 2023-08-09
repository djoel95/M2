import React from 'react';
import Card from './Card';

export default function Cards(props) {
  const { characters } = props;

  const handleCloseCard = () => {
    // Lógica para cerrar la tarjeta
    window.alert('Emulamos que se cierra la card');
  };

  return (
    <div className="cards-container">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={handleCloseCard}
        />
      ))}
    </div>
  );
}
