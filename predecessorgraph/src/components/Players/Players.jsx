// src/components/Players/Players.jsx
import React, { useEffect, useState } from 'react';
import { getPlayers } from '../Services/apiService';
import './Players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await getPlayers();
      if (data) {
        setPlayers(data);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div className="players">
      <h2>Players</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Players;
