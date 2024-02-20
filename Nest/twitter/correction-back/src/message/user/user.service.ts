import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './Model/User.model';

@Injectable()
export class UserService {
  constructor(
	@InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async getUsers(): Promise<User[]> {
	return this.userModel.find().exec();
  }

  async getUser(id: string): Promise<User> {
	return this.userModel.findById(id).exec();
  }

  async createUser(user: User): Promise<User> {
	const newUser = new this.userModel(user);
	return newUser.save();
  }

async login(user: User): Promise<User> {
	return this.userModel.findOne({ username: user.username, password: user.password }).exec();
}
}
