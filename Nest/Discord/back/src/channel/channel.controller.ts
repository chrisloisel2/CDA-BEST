import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Message } from 'src/Model/Message.model';
import { Channel } from 'src/Model/Channel.model';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async getAll(): Promise<Channel[]> {
	return this.channelService.getChannels();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Channel> {
	return this.channelService.getChannel(id);
  }

  @Get(':id/message')
  async getmessages(@Param('id') id: string): Promise<Message[]> {
	const channels : Channel = await this.channelService.getChannel(id);
	return channels.messages;
  }

  @Post()
  async create(@Body() Channel: Channel): Promise<Channel> {
	return this.channelService.createChannel(Channel);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Channel: Channel): Promise<Channel> {
	return this.channelService.updateChannel(id, Channel);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Channel> {
	return this.channelService.deleteChannel(id);
  }
}
