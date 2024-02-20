import { Schema } from 'mongoose';

export const UserSchema :Schema = new Schema(
	{
		"nom": { type: String, required: true},
		"age": { type: Number, required: true }
	}
);
