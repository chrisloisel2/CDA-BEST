import { Schema } from "mongoose";

export const userSchema = new Schema({
	username: {type : String},
	password: {type : String}
});
