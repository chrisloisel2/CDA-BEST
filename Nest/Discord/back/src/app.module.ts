import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './Schema/User.Schema';
import { channelSchema } from './Schema/Channel.Schema';
import { messageSchema } from './Schema/Message.Schema';
import { UserModule } from './user/user.module';
import { ChannelModule } from './channel/channel.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
	MongooseModule.forRoot('mongodb+srv://christoloisel:Rose230323@cluster0.soahdz4.mongodb.net/app'),
	UserModule,
	ChannelModule,
	MessageModule,
  ],
})
export class AppModule {}
