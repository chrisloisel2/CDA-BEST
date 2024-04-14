import { Schema, model, Document } from 'mongoose';
import User from 'src/users/Models/UserSchema';

export interface Game {
	_id: string;
	users : User[];
  }

export default Game;

