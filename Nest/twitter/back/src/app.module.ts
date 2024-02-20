import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:Rose230323@cluster0.soahdz4.mongodb.net/twitter'),
	UserModule,
	MessageModule,
  ],
})
export class AppModule {}
