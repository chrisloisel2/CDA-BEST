import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './Model/User.model';

@Injectable()
export class UserService {
  constructor(
	@InjectModel('User') private readonly userModel: Model<IUser>,
  ) {}

  async getUsers(): Promise<IUser[]> {
	return this.userModel.find().exec();
  }

  async login(user : IUser): Promise<IUser> {
	return this.userModel.findOne(user).exec();
  }

  async getUser(id: string): Promise<IUser> {
	return this.userModel.findById(id).exec();
  }

  async createUser(user: IUser): Promise<IUser> {
	const newUser = new this.userModel(user);
	return newUser.save();
  }

  async updateUser(id: string, user: IUser): Promise<IUser> {
	return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string): Promise<IUser> {
	return this.userModel.findByIdAndDelete(id);
  }
}
