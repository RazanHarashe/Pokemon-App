import React, { useState } from 'react';
import './App.css'

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
      const data = await response.json();
      const names = data.results.map(pokemon => pokemon.name);
      setPokemonNames(names);
    } catch (error) {
      console.error("Error fetching the Pokémon data", error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
