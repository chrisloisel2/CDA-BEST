import mongoose from 'mongoose';
const { Schema } = mongoose;

const pokeSchema = new Schema({
	id : Number,
	name : String,
	type : String,
	level : Number,
	picture : String,
	hp : Number,
	attack : [{
		name : String,
		damage : Number,
		ap : Number
	}]
});

export const PokeModel = mongoose.model('pokemon', pokeSchema);
