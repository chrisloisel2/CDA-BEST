import React from 'react';
import { Pokemon } from './Pokemon.model.ts';
import './pokemon.css';

interface PokemonCardProps {
	pokemon: Pokemon;
}

function PokemonCard(props: PokemonCardProps) {
	const { pokemon } = props;

	return (
		<div className='pokemon-card'>
			<img src={pokemon.picture} alt={pokemon.name} className='pokemon-image' />
			<h3 className='pokemon-name' >{pokemon.name}, {pokemon.level}</h3>
			<p className='pokemon-name' >Type: {pokemon.type}</p>
			<p className='pokemon-name' >HP: {pokemon.hp}</p>
		</div>
	);
}

export default PokemonCard;
