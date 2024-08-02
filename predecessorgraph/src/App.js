import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import Heroes from './components/Heroes/Heroes';
import Matches from './components/Matches/Matches';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

