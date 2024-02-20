import { Module } from '@nestjs/common';
import { messageController } from './message.controller';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { messageSchema } from 'src/Schema/Message.Schema';
import { channelSchema } from 'src/Schema/Channel.Schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Message', schema: messageSchema },
			{ name: 'Channel', schema: channelSchema },
		]),
	],
  providers: [MessageService],
  controllers: [messageController]
})
export class MessageModule {}
