import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './pokemon.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("/pokemons")
  getPokemons() : Pokemon[] {
	return this.appService.getPokemons();
  }

  @Get("/pokemon/:id")
  getPokemon(@Param('id')id : number) : Pokemon {
	console.log(id);
	let pokemon : Pokemon = this.appService.getPokemonbyid(id);
	console.log(pokemon);
	return pokemon;
  }

  @Put("/pokemon/:id")
  updatePokemon(@Param('id')id : number, @Body()pokemon : Pokemon) : Pokemon {
	console.log(id);
	console.log(pokemon);
	return pokemon;
  }

  @Post("/pokemon")
  addPokemon(@Body()pokemon : Pokemon) : Pokemon {
	this.appService.addPokemon(pokemon);
	return pokemon;
  }


}
