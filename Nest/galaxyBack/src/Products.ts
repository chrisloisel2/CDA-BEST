import mongoose, { Schema } from 'mongoose';

export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	category: string;
	quantity: number;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

export const ProductSchema: Schema = new Schema({
	id: { type: Number, auto: true},
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	quantity: { type: Number, required: true },
	image: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

