import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { messageSchema } from './Schema/Message.schema';
import { MessageGateway } from './message.gateway';

@Module({
  imports: [
  	MongooseModule.forFeature([{ name: 'Message', schema: messageSchema }]),
    ],
  providers: [MessageService, MessageGateway],
  controllers: [MessageController]
})
export class MessageModule {}
