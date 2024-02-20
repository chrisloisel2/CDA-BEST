import { Schema } from "mongoose";

export const messageSchema = new Schema({
	message : { type: String, required: true },
	senderId : { type: String, required: true },
	receiverId : { type: String, required: true },
});
