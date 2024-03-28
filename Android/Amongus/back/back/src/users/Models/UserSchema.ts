import { Schema, model, Document } from 'mongoose';

export interface User {
	_id: string;
	name: string;
	password: string;
	connected: boolean;
	role ?: string;
	votes: string[];
	isAlive: boolean;
  }

export default User;
