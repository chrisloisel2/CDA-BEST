import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './Model/Message.Model';

@Injectable()
export class MessageService {
  constructor(
	@InjectModel('Message') private readonly messageModel: Model<Message>,
	// Add other models here
  ) {}

  async getMessages(): Promise<Message[]> {
	return this.messageModel.find().exec();
  }

  async getMessage(id: string): Promise<Message> {
	return this.messageModel.findById(id).exec();
  }

  async createMessage(message: Message): Promise<Message> {
	const newMessage = new this.messageModel(message);
	return newMessage.save();
  }

  async updateMessage(id: string, message: Message): Promise<Message> {
	return this.messageModel.findByIdAndUpdate(id, message, { new: true });
  }

  async getMessagesByUser(senderId: string, receiverId : string ): Promise<Message[]> {
	return this.messageModel.find({
			$or: [
				{senderId: senderId, receiverId: receiverId},
				{senderId: receiverId, receiverId: senderId},
		]
	}).exec();
  }

  async deleteMessage(id: string): Promise<Message> {
	return this.messageModel.findByIdAndDelete(id);
  }
}
