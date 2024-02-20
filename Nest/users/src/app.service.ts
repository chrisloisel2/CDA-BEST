import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './User.model';
import { christopher } from './User.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
  }


  	createUser(user: IUser): Promise<IUser> {
	return this.userModel.create(user);
	}
	// getALLUser
	getAllUser(): Promise<IUser[]>
	{
		// Recuperer les utilisateurs par les parametre du find;
		// pas de parametre = tous les utilisateurs
		// un exemple de parametre : {name: 'toto'}
		// return this.userModel.find({name: 'toto'}).exec(); -> retourne tous les utilisateurs qui s'appellent toto
		return this.userModel.find().exec();
	}

	// getUser
	getUser(id: string): Promise<IUser>
	{
		return this.userModel.findById(id).exec();
	}

	// updateUser
	updateUser(id: string, user: IUser): Promise<IUser>
	{
		return this.userModel.findByIdAndUpdate(id, user, {new: true}).exec();
	}

	// deleteUser
	deleteUser(id: string): Promise<any>
	{
		return this.userModel.findByIdAndDelete(id).exec();
	}
}
