import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.model';
import { PokeModel } from './Pokeschema';

@Injectable()
export class AppService {

	pokemons: Pokemon[] = [];

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  getPokemonbyid(id : number) : Pokemon {
	return this.pokemons.find((pokemon) => pokemon.id == id);
  }

  addPokemon(pokemon : Pokemon) : Pokemon {
	PokeModel.create(pokemon);
	const result = await PokeModel

	return pokemon;
  }


}
