import { Injectable } from '@nestjs/common';
import { Pokemon } from './Models/Pokemon';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {

	constructor(
		@InjectModel('Pokemon') private readonly PokeModel : Model<Pokemon>
	){}

	// pokemons: Pokemon[] = [
		// {
		// 	id: 1,
		// 	name: "Pikachu",
		// 	type: "Electrique",
		// 	level: 10,
		// 	picture: "https://cdn.discordapp.com/attachments/1008571124440911943/1199060600412721203/maki6260_pikachu_pixel_style_no_background_6a215ddb-1dfa-41cc-a06d-65fdc35602b7.png?ex=65c12b34&is=65aeb634&hm=b26bee7d5962f2b3c723d0ba6b73a9bc4d2977906fd226f8d14e1ec3e091a659&",
		// 	hp: 100,
		// 	attack: [
		// 		{ name: "Tonnerre", damage: 40, ap: 5 },
		// 		{ name: "attaque eclaire", damage: 25, ap: 5 },
		// 		{ name: "Eclair", damage: 50, ap: 5 },
		// 		{ name: "Morsure", damage: 60, ap: 5 },
		// 	]
		// },
	// 	{
	// 		id: 2,
	// 		name: "Dracaufeu",
	// 		type: "Feu/Air",
	// 		level: 50,
	// 		picture: "https://cdn.discordapp.com/attachments/1008571124440911943/1199062868964933742/maki6260_pokemon_Charizard_pixel_style_no_background_0060d905-2e63-47b5-92d8-32ede7e312d0.png?ex=65c12d51&is=65aeb851&hm=ff199ce990af3a9a17b1432c4458f2b4553258b371d3063a29c48dd3a0b63ef2&",
	// 		hp: 200,
	// 		attack: [
	// 			{ name: "Lance-Flamme", damage: 90, ap: 5 },
	// 			{ name: "Draco-Flamme", damage: 120, ap: 5 },
	// 			{ name: "Griffe", damage: 40, ap: 5 },
	// 			{ name: "Morsure", damage: 60, ap: 5 },
	// 		]
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Tortank",
	// 		type: "Eau",
	// 		level: 30,
	// 		picture: "https://cdn.discordapp.com/attachments/1008571124440911943/1199063701584613457/maki6260_Blastoise_pixel_style_no_background_f28eb8c5-5bca-48a7-854f-b43c6dea770a.png?ex=65c12e17&is=65aeb917&hm=ac6765fe8a039e15c4b4c7cea85dee31550d85da1eb7aede4bb5e7812198eea1&",
	// 		hp: 150,
	// 		attack: [
	// 			{ name: "Hydrocanon", damage: 120, ap: 5 },
	// 			{ name: "Surf", damage: 90, ap: 5 },
	// 			{ name: "Griffe", damage: 40, ap: 5 },
	// 			{ name: "Morsure", damage: 60, ap: 5 },
	// 		]
	// 	}
	// ];

	getPokemon(id: number): Promise<Pokemon> {
		return this.PokeModel.findById(id);
	}

	getPokemons(): Promise<Pokemon[]> {
		return this.PokeModel.find();
	}

	modifyPokemon(id: number, pokemon: Pokemon): Promise<Pokemon> {
		return this.PokeModel.findByIdAndUpdate(id, pokemon);
	}

	createPokemon(pokemon: Pokemon): Promise<Pokemon> {
	return this.PokeModel.create(pokemon);
	}


	deletePokemon(id: number): Promise<Pokemon> {
		return this.PokeModel.findByIdAndDelete(id);
	}
}


