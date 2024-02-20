import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { UserModule } from './message/user/user.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:Rose230323@cluster0.soahdz4.mongodb.net/correction'),
	MessageModule, UserModule],
})
export class AppModule {}
