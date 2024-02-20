import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './Models/Pokemon';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/pokemons")
  getHello(): Promise<Pokemon[]> {
	return this.appService.getPokemons();
  }

  @Get("/pokemon/:id")
  getPokemon(@Param("id") id: number): Promise<Pokemon> {
	return this.appService.getPokemon(id);
  }

  @Put("/pokemon/:id")
  modifyPokemon(@Param("id") id: number, @Body() pokemon: Pokemon): Promise<Pokemon> {
	return this.appService.modifyPokemon(id, pokemon);
  }

  @Post("/pokemon")
  createPokemon(@Body() pokemon: Pokemon): Promise<Pokemon> {
	return this.appService.createPokemon(pokemon);
  }

  @Delete("/pokemon/:id")
  deletePokemon(@Param("id") id: number): Promise<Pokemon> {
	return this.appService.deletePokemon(id);
  }

}
