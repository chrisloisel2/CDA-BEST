import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageGateway } from './message.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { messageSchema } from './Schema/Message.Schema';

@Module({
  imports: [
	MongooseModule.forFeature([{ name: 'Message', schema: messageSchema }]),
  ],
  providers: [MessageService, MessageGateway],
  controllers: [MessageController]
})
export class MessageModule {}
