import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import { CharacterPage } from "./pages/character-page";
import { CounterPage } from "./pages/counter-page";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <nav>
        <Link className="nav-item" to="/">
          Character
        </Link>
        <Link className="nav-item" to="/counter">
          Counter
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="counter" element={<CounterPage />} />
      </Routes>
    </div>
  );
}

export default App;
