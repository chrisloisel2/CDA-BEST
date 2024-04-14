import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import GameSchema from './Models/GameSchema';

@Module({
  imports: [
  	MongooseModule.forRoot('mongodb+srv://christoloisel:rose@cluster0.ppyauvl.mongodb.net/loupgarou'),
  	MongooseModule.forFeature([{ name: 'User', schema: GameSchema }]),
    ],
  providers: [GameGateway]
})
export class GameModule {}
