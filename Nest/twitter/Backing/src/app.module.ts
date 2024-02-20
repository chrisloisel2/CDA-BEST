import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:Rose230323@cluster0.soahdz4.mongodb.net/twitter2'),
	MessageModule,
	UserModule,
  ],
})
export class AppModule {}
