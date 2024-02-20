import React, { useContext } from 'react';
import './action.css';
import { pokemonService } from './pokemonService';
import { PokemonContext } from './App';
import axios from 'axios';

const ActionCard = ({ pokemon }) => {
  const { pokemons, setPokemons, setCurrentPokemon } = useContext(PokemonContext);

  const webhook = (action) => {
	// appek webhook
	axios.post('https://hook.eu1.make.com/8tdk0uurvy9hyplfcmvyc2qdqrqgi49g', {
		action: action,
  })
  .then(function (response) {
	console.log(response);
  })
}

  const attack = (actionIndex) => {
    const action = pokemon.attack[actionIndex];

    if (action.ap > 0) {
      const newAction = { ...action, ap: action.ap - 1 };

      const targetIndex = (pokemons.findIndex(p => p.id === pokemon.id) + 1) % pokemons.length;
      const targetPokemon = pokemons[targetIndex];

      // Réduire les HP du Pokémon cible
      const newTargetPokemon = {
        ...targetPokemon,
        hp: targetPokemon.hp - newAction.damage
      };

      // Mettre à jour la liste des Pokémon
      const newPokemons = pokemons.map(p => {
        if (p.id === pokemon.id && p.hp > 0) {
		  return {
			...p,
			attack: p.attack.map((a, index) => {
			  if (index === actionIndex) {
				return newAction;
			  }
			  return a;
			})
		  };
		}
		if (p.id === targetPokemon.id) {
		  return newTargetPokemon;
		}
		return p;
	  });

      setPokemons(newPokemons);
      pokemonService.updatePokemon(pokemon);
      pokemonService.updatePokemon(newTargetPokemon);
	  setCurrentPokemon(targetIndex);
    }
  };

  return (
    <div className="action-card">
      {pokemon.attack.map((action, index) => (
        <div className="action" key={index} onClick={() => attack(index)}>
          <h3>{action.name}</h3>
          <p>DMG : {action.damage}</p>
          <p>AP  : {action.ap}/5</p>
		  <button onClick={()=> webhook(action)} >WebHook</button>
        </div>
      ))}
    </div>
  );
};

export default ActionCard;
