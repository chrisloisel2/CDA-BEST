import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export type User = {
	name: string;
	age: number;
}

@Injectable()
export class AppService {

	constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

	addUser(createUserDto: User): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	  }
}
