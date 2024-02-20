import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessage } from './Model/Message.model';

@Injectable()
export class MessageService {
  constructor(
	@InjectModel('Message') private readonly messageModel: Model<IMessage>,
  ) {}

  async getMessages(): Promise<IMessage[]> {
	return this.messageModel.find().exec();
  }

  async getMessagesByUser(senderid : string, receiverId: string): Promise<IMessage[]> {
	return this.messageModel.find(
		{
			$or: [
				{ $and: [{ sender: senderid }, { receiver: receiverId }] },
				{ $and: [{ sender: receiverId }, { receiver: senderid }] },
			],

		},
	).exec();
  }

  async getMessage(id: string): Promise<IMessage> {
	return this.messageModel.findById(id).populate('user').exec();
  }

  async createMessage(message: IMessage): Promise<IMessage> {
	const InewMessage = new this.messageModel(message);
	return InewMessage.save();
  }

  async updateMessage(id: string, message: IMessage): Promise<IMessage> {
	return this.messageModel.findByIdAndUpdate(id, message, { new: true });
  }

  async deleteMessage(id: string): Promise<IMessage> {
	return this.messageModel.findByIdAndDelete(id);
  }
}
