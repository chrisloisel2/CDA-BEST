import { Schema } from "mongoose";

export const PokeSchema : Schema = new Schema({
	name: {type: String},
	type: {type: String},
	level: {type: Number},
	picture: {type: String},
	hp: {type: Number},
	attack : [{
		name: {type: String},
		damage: {type: Number},
		ap: {type: Number}
	}]
});
