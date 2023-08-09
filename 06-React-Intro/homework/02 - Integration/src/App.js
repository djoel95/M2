import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
   const [filteredCharacters, setFilteredCharacters] = useState(characters);

   const handleSearch = (searchValue) => {
      const filtered = characters.filter((character) => {
         return character.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredCharacters(filtered);
   };

   return (
      <div className='App'>
         <SearchBar onSearch={handleSearch} />
         <Cards characters={filteredCharacters} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
