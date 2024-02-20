import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { messageSchema } from './Schema/Message.Schema';
import { MessageGateway } from './message.gateway';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Message', schema: messageSchema },
		]),
	],
  controllers: [MessageController],
  providers: [MessageService, MessageGateway]
})
export class MessageModule {}
