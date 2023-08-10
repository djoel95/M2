import React from "react";
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";



export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  const handleInputChange = (event) => {
    setZoo({ ...zoo, zooName: event.target.value });
  };

  const handleSpecies = (event) => {
    const selectedSpecies = event.target.value;
    const filteredAnimals = zoo.allAnimals.filter(
      (animal) => animal.species === selectedSpecies
    );
    setZoo({ ...zoo, animals: filteredAnimals });
  };

  const handleAllSpecies = () => {
    setZoo({ ...zoo, animals: zoo.allAnimals });
  };

  React.useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.zoo.animals,
          species: data.zoo.species,
          allAnimals: data.zoo.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <label >Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <div>
        <Species
          species={zoo.species}
          handleSpecies={handleSpecies}
          handleAllSpecies={handleAllSpecies}
        />
        <Animals animals={zoo.animals} />
      </div>
    </div>
  );
}
