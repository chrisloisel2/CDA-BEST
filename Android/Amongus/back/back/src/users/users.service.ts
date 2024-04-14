import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from './Models/UserSchema'; // Ensure this path is correct

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>, // Ensure the User model is correctly imported and decorated
  ) {}

  // Find all connected users
  async findConnected(): Promise<User[]> {
    return this.userModel.find({ connected: true }).exec();
  }

  // Get all users
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Get a single user by ID
  async getUser(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  // Create a new user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  // Update a user
  async updateUser(id: string, user: Partial<User>): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  // Connect a user
  async connect(id: string): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, { connected: true }, { new: true }).exec();
  }

  // Disconnect a user
  async disconnect(id: string): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, { connected: false }, { new: true }).exec();
  }

  // Delete a user
  async deleteUser(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  // Login a user
  async login(name: string, password: string): Promise<User | null> {
    // Attempt to find the user by name and check password
    const user = await this.userModel.findOne({ name, password }).exec();
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.userModel.findByIdAndUpdate(user._id, { connected: true }, { new: true }).exec();
  }
}
