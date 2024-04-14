import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  _id: string;
  name: string;
  password: string;
  connected: boolean;
  role?: string;
  votes: string[];
  isAlive: boolean;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  connected: { type: Boolean, required: true },
  role: { type: String },
  votes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isAlive: { type: Boolean, required: true }
});


export default UserSchema;
