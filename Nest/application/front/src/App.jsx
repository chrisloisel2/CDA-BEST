import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './pokemon.tsx';
import { pokemonService } from './pokemonService.jsx';
import ActionCard from './Actioncard.jsx';
import { Pokedex } from './pokedex.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const PokemonContext = createContext();

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(0);

  useEffect(() => {
    pokemonService.fetchPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const pokemonsEnVie = pokemons.filter(p => p.hp > 0);

  return (
    <div className="App">
      <PokemonContext.Provider value={{ pokemons, setPokemons, setCurrentPokemon }}>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Combat de Pokemon</h1>
                <div className="container">
                  {pokemonsEnVie.length === 1 ? (
                    <p>Vous avez gagné, GG!</p>
                  ) : (
                    pokemonsEnVie.map((pokemon, index) => (
                      <div key={index} className="pokemon">
                        <PokemonCard pokemon={pokemon} setCurrentPokemon={() => setCurrentPokemon(index)} />
                      </div>
                    ))
                  )}
                </div>
                {pokemons.length > 0 && pokemons[currentPokemon] && (
                  <div className="containerAttack">
                    <ActionCard pokemon={pokemons[currentPokemon]} />
                  </div>
                )}
              </>
            } />
          </Routes>
        </Router>
      </PokemonContext.Provider>
    </div>
  );
}

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export default App;
