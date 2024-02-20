import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Message } from 'src/Model/Message.model';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';

@Controller('message')
export class messageController {
  constructor(
    private readonly messageService: MessageService,
    private readonly eventsGateway: MessageGateway,
  ) {}

  @Get()
  async getAll(): Promise<Message[]> {
    const messages = await this.messageService.getMessages();
    this.eventsGateway.server.emit('update_messages', messages);
    return messages;
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Message> {
    const message = await this.messageService.getMessage(id);
    this.eventsGateway.server.emit('update_message', message);
    return message;
  }

  @Post()
  async create(@Body() message: Message): Promise<Message> {
    const newMessage = await this.messageService.createMessage(message);
    this.eventsGateway.server.emit('new_message', newMessage);
    return newMessage;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() message: Message): Promise<Message> {
    const updatedMessage = await this.messageService.updateMessage(id, message);
    this.eventsGateway.server.emit('updated_message', updatedMessage);
    return updatedMessage;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Message> {
    const deletedMessage = await this.messageService.deleteMessage(id);
    this.eventsGateway.server.emit('deleted_message', { id });
    return deletedMessage;
  }
}
