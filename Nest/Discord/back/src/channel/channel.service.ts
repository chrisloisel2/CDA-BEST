import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Channel } from 'src/Model/Channel.model';

@Injectable()
export class ChannelService {
  constructor(
	@InjectModel('Channel') private readonly channelModel: Model<Channel>,
	// Add other models here
  ) {}

  async getChannels(): Promise<Channel[]> {
	return this.channelModel.find().populate('messages').exec();
  }

  async getChannel(id: string): Promise<Channel> {
	return this.channelModel.findById(id).populate('messages').exec();
  }

  async createChannel(channel: Channel): Promise<Channel> {
	const newChannel = new this.channelModel(channel);
	return newChannel.save();
  }

  async updateChannel(id: string, channel: Channel): Promise<Channel> {
	return this.channelModel.findByIdAndUpdate(id, channel, { new: true });
  }

  async deleteChannel(id: string): Promise<Channel> {
	return this.channelModel.findByIdAndDelete(id);
  }
}
