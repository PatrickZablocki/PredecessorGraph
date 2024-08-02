import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Predecessor Graph</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/players">Players</a></li>
        <li><a href="/heroes">Heroes</a></li>
        <li><a href="/matches">Matches</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
