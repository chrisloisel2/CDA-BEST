import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Game from './Models/Game';

@Injectable()
export class GameService {
  constructor(
	@InjectModel('Game') private readonly gameModel: Model<Game>,
	// Add other models here
  ) {}

  async getGames(): Promise<Game[]> {
	return this.gameModel.find().exec();
  }

  async getGame(id: string): Promise<Game> {
	return this.gameModel.findById(id).exec();
  }

  async createGame(game: Game): Promise<Game> {
	const newGame = new this.gameModel(game);
	return newGame.save();
  }

  async updateGame(id: string, game: Game): Promise<Game> {
	return this.gameModel.findByIdAndUpdate(id, game, { new: true });
  }

  async deleteGame(id: string): Promise<Game> {
	return this.gameModel.findByIdAndDelete(id);
  }
}
