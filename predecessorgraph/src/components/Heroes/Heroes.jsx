// src/components/Heroes/Heroes.jsx
import React, { useEffect, useState } from 'react';
import { getHeroes } from '../Services/apiService';
import './Heroes.css';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const data = await getHeroes();
      if (data) {
        setHeroes(data);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <div className="heroes">
      <h2>Heroes</h2>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
