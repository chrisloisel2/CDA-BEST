// pokemonService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3050'; // Remplacez avec l'URL de base de votre backend

const fetchPokemonById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
	console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du Pokémon', error);
    throw error;
  }
};

async function  fetchPokemons()
{
  try {
	const response = await axios.get(`${BASE_URL}/pokemons`);
	return response.data;
  } catch (error) {
	console.error('Erreur lors de la récupération des Pokémons', error);
	throw error;
  }
};

async function updatePokemon(pokemon)
{
  try {
	const response = await axios.put(`${BASE_URL}/pokemon/${pokemon.id}`, pokemon);
	return response.data;
  } catch (error) {
	console.error('Erreur lors de la mise à jour du Pokémon', error);
	throw error;
  }
}

export const pokemonService = {
  fetchPokemonById,
  fetchPokemons,
  updatePokemon,
};
