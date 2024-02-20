import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './model/message.model';
import { MessageGateway } from './message.gateway';

@Injectable()
export class MessageService {
  constructor(
	@InjectModel('Message') private readonly messageModel: Model<Message>,
	private msgGateway: MessageGateway,
  ) {}

  async getMessages(): Promise<Message[]> {
	return this.messageModel.find().exec();
  }

  async getMessage(id: string): Promise<Message> {
	return this.messageModel.findById(id).exec();
  }

  async createMessage(message: Message): Promise<Message> {
	const newMessage = new this.messageModel(message);
	await newMessage.save();
	return newMessage;
  }

  async updateMessage(id: string, message: Message): Promise<Message> {
	return this.messageModel.findByIdAndUpdate(id, message, { new: true });
  }

  async deleteMessage(id: string): Promise<Message> {
	return this.messageModel.findByIdAndDelete(id);
  }

  async getMessagesByUser(id: string): Promise<Message[]> {
	return this.messageModel.find({ sender: id }).populate('sender').populate('receiver').exec();
  }
}
