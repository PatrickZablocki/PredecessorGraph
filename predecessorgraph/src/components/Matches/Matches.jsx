// src/components/Matches/Matches.jsx
import React, { useEffect, useState } from 'react';
import { getMatches } from '../Services/apiService';
import './Matches.css';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getMatches();
      if (data) {
        setMatches(data);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="matches">
      <h2>Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;

