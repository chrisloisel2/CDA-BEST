import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from './Models/User';
import { UserService } from './users.service';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:rose@cluster0.ppyauvl.mongodb.net/loupgarou'),
	MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UsersController]
})
export class UsersModule {}
