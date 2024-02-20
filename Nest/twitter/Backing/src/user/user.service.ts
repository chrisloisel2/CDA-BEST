import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(
	@InjectModel('User') private readonly userModel: Model<User>,
	// Add other models here
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

  async updateUser(id: string, user: User): Promise<User> {
	return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string): Promise<User> {
	return this.userModel.findByIdAndDelete(id);
  }

  async login(user: User): Promise<User> {
	return this.userModel.findOne({ username: user.username, password: user.password }).exec();
  }
}
