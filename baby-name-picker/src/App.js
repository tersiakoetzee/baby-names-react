

import React, { useState, useEffect } from "react";
import "./App.css";
import NamesData from "./Names-data.json";
import BabyList from "./BabyList.js";
import SearchBar from "./SearchBar.js";
import GenderFilter from "./Gender.js";
import Favorites from "./Favorites";

function App() {
  const [inputField, setInputField] = useState("");
  const [Favorite, setFavoriteName] = useState([]);
  const [filteredBabyNames, setFilteredBabyNames] = useState(NamesData);
  const [filteredGender, setFilteredGender] = useState("b");

  useEffect(() => {
    const babyNames = NamesData
      .sort((personA, personB) => {
        return personA.name > personB.name ? 1 : -1;
      })
      .filter((babyData) => {
        return (
          babyData.name.toLowerCase().indexOf(inputField.toLowerCase()) !== -1
        );
      })
      .filter((babyName) => {
        return !Favorite.includes(babyName);
      })
      .filter((babyData) => {
        return babyData.sex !== filteredGender;
      });

    setFilteredBabyNames(babyNames);
  }, [inputField, Favorite, filteredGender]);

  const handleInputFieldOnChange = (e) => {
    e.preventDefault();
    setInputField(e.target.value);
  };

  const handleAddNameToFavClick = (babyName) => {
    if (!Favorite.includes(babyName))
      setFavoriteName([...Favorite, babyName]);
  };

  const handleRemoveNameFromFavClick = (babyName) => {
    setFavoriteName(
      Favorite.filter((favName) => {
        return favName.id !== babyName.id;
      })
    );
  };

  const handleGenderInputOnChange = (e) => {
    setFilteredGender(e.target.value);
  };

  return (
    <div className="App">
      <GenderFilter
        gender={filteredGender}
        handleOnchange={handleGenderInputOnChange}
      />
      <SearchBar handleOnChange={handleInputFieldOnChange} input={inputField} />
      <Favorites
        data={Favorite}
        removeFavName={handleRemoveNameFromFavClick}
      />
      <BabyList
        data={filteredBabyNames}
        handleClick={handleAddNameToFavClick}
      />
      <hr />
    </div>
  );
}

export default App;