import { Schema } from "mongoose";

export const messageSchema = new Schema({
	message: {type : String, required : true},
	sender : {type : Schema.Types.ObjectId, ref : 'User', required : true},
	receiver : {type : Schema.Types.ObjectId, ref : 'User', required : true}
});
