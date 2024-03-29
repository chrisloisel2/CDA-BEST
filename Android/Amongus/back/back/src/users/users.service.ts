import { Injectable } from '@nestjs/common';
import { User } from './Models/UserSchema';

@Injectable()
export class UsersService {

	database: User[] = [];

	constructor() {}

	async updateUser(user: User): Promise<User> {
		const userIndex = this.database.findIndex(u => u._id === user._id);
		this.database[userIndex] = user;
		return user;
	}

	async register(name: string, password: string): Promise<User> {
		const user : User = { name, password, connected: false, votes: [], role: '', _id: '', isAlive: true};
		this.database.push(user);
		return user;
	  }

	  async login(name: string, password: string): Promise<{ message: string, user : User }> {
		const user = this.database.find(user => user.name === name && user.password === password);

		if (user) {
		  this.database.map(u => {
			if (u.name === name) {
			  u.connected = true;
			}
		  }
		  );
		  user.connected = true;
		  return { message: 'Connected', user };
		}
	  }

	  async findConnected(): Promise<User[]> {
		return this.database.filter(user => user.connected);
	  }

	  async disconnect(name: string): Promise<User> {
		const user = this.database.find(user => user.name === name);
		user.connected = false;
		this.database.forEach(user => {
		  if (user.name === name) {
			user.connected = false;
		  }
		});
		return user;
	}

	async findAll(): Promise<User[]> {
		return this.database;
	}
}
