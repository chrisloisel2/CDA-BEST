import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { IMessage } from './Model/Message.model';
import { MessageGateway } from './message.gateway';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService, private readonly eventsGateway: MessageGateway) {}

  @Get()
  async getAll(): Promise<IMessage[]> {
	return this.messageService.getMessages();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<IMessage> {
	return this.messageService.getMessage(id);
  }

  @Post()
  async create(@Body() Message: IMessage): Promise<IMessage> {
	return this.messageService.createMessage(Message);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Message: IMessage): Promise<IMessage> {
	return this.messageService.updateMessage(id, Message);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IMessage> {
	return this.messageService.deleteMessage(id);
  }
}
