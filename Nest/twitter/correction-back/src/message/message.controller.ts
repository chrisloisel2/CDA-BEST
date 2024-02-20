import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './Model/Message.model';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getAll(): Promise<Message[]> {
	return this.messageService.getMessages();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Message> {
	return this.messageService.getMessage(id);
  }

  @Post()
  async create(@Body() Message: Message): Promise<Message> {
	return this.messageService.createMessage(Message);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Message: Message): Promise<Message> {
	return this.messageService.updateMessage(id, Message);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Message> {
	return this.messageService.deleteMessage(id);
  }
}
