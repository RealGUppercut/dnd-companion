import axios from "axios";
import { useState, useEffect } from "react";

const ProfileSection = ({ characterData, handleProfileChange }) => {
  const { characterName, characterClass, level, race, experiencePoints } =
    characterData.profile;

  const [races, setRaces] = useState([]);

  useEffect(() => {
    getRaces();
  }, []);

  async function getRaces() {
    const API = `http://localhost:8080/form/races`;
    const res = await axios.get(API);
    setRaces(res.data);
    console.log(races);
  }

  // get.class function

  return (
    <div>
      {races.map((race) => {
        <h1>{race}</h1>;
      })}
      <h2>Character Profile</h2>
      <label>
        Character Name:
        <input
          type="text"
          name="characterName"
          value={characterName}
          onChange={handleProfileChange}
        />
      </label>
      <label>Race:</label>
      <select onChange={handleProfileChange}>
        {races.map((race) => {
          <option name={race} value={race}>
            {race}
          </option>;
        })}
      </select>
      <label>
        Class:
        <input
          type="text" // would this be a drop down so we can take it form the API?
          name="class"
          value={characterClass}
          onChange={handleProfileChange}
        />
      </label>
      <label>
        Level:
        <input
          type="number"
          name="level"
          value={level}
          onChange={handleProfileChange}
        />
      </label>
      <label>
        Experience Points:
        <input
          type="number"
          name="experiencePoints"
          value={experiencePoints}
          onChange={handleProfileChange}
        />
      </label>
    </div>
  );
};

export default ProfileSection;
