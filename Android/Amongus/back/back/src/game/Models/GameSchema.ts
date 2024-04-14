import { Schema, model, Document } from 'mongoose';
import User from 'src/users/Models/UserSchema';

interface IGame extends Document {
  _id: string;
  users : User[];
}

const GameSchema = new Schema<IGame>({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});


export default GameSchema;

