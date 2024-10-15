import React, { useState } from "react";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (idx) => {
    if (money < zombieFighters[idx].price) {
      console.log("Not enough money");
    } else {
      setTeam((prevTeam) => [...prevTeam, zombieFighters[idx]]);
      setMoney((prevMoney) => prevMoney - zombieFighters[idx].price);
      setTotalStrength(
        (prevTotalStrength) => prevTotalStrength + zombieFighters[idx].strength
      );
      setTotalAgility(
        (prevTotalAgility) => prevTotalAgility + zombieFighters[idx].agility
      );
    }
  };

  const handleRemoveFighter = (idx) => {
    const removedFighter = team[idx];
    setTeam((prevTeam) => [...prevTeam].toSpliced(idx, 1));
    setMoney((prevMoney) => prevMoney + removedFighter.price);
    setTotalStrength(
      (prevTotalStrength) => prevTotalStrength - removedFighter.strength
    );
    setTotalAgility(
      (prevTotalAgility) => prevTotalAgility - removedFighter.agility
    );
  };

  return (
    <>
      <h3>Zombie Fighters</h3>
      <h4>Money: {money}</h4>
      <h4>Team Strength: {totalStrength}</h4>
      <h4>Team Agility: {totalAgility}</h4>
      <h4>Team</h4>
      <ul>
        {team.length === 0
          ? "Pick some team members!"
          : team.map((myFighter, idx) => (
              <li>
                <img src={myFighter.img} alt={myFighter.name} />
                <div>{myFighter.name}</div>
                <div>Price: {myFighter.price}</div>
                <div>Strength: {myFighter.strength}</div>
                <div>Agility: {myFighter.agility}</div>
                <button onClick={() => handleRemoveFighter(idx)}>Remove</button>
              </li>
            ))}
      </ul>
      <h4>Fighters</h4>
      <ul>
        {zombieFighters.map((fighter, idx) => (
          <li>
            <img src={fighter.img} alt={fighter.name} />
            <div>{fighter.name}</div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={() => handleAddFighter(idx)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
