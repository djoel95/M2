import React, { useEffect, useState } from 'react';
import Animals from './Animals/Animals.jsx';
import Species from './Species/Species.jsx';
import styles from './Zoo.module.css';

const Zoo = () => {
  const [zoo, setZoo] = useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  });

  useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const handleSpecies = (specie) => {
    const filteredAnimals = zoo.allAnimals.filter(
      (animal) => animal.specie === specie
    );
    setZoo({ ...zoo, animals: filteredAnimals });
  };

  const handleAllSpecies = () => {
    setZoo({ ...zoo, animals: zoo.allAnimals });
  };

  const handleInputChange = (event) => {
    setZoo({ ...zoo, zooName: event.target.value });
  };

  return (
    <div className={styles.container}>
      <label htmlFor="zooName">Zoo Name:</label>
      <input
        type="text"
        id="zooName"
        value={zoo.zooName}
        onChange={handleInputChange}
      />
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
};

export default Zoo;