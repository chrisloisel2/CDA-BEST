import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Channel } from 'src/Model/Channel.model'; // Assurez-vous que le chemin d'importation est correct
import { Message } from 'src/Model/Message.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
    @InjectModel('Channel') private readonly channelModel: Model<Channel>,
  ) {}

  async getMessages(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async getMessage(id: string): Promise<Message> {
    return this.messageModel.findById(id).exec();
  }

  async createMessage(messageData: Message): Promise<Message> {
    const newMessage = new this.messageModel(messageData);
    await newMessage.save();
    await this.channelModel.findByIdAndUpdate(messageData.channel, { $push: { messages: newMessage._id } });

    return newMessage;
  }

  async updateMessage(id: string, messageData: Message): Promise<Message> {
    return this.messageModel.findByIdAndUpdate(id, messageData, { new: true });
  }

  async deleteMessage(id: string): Promise<Message> {
    return this.messageModel.findByIdAndDelete(id);
  }
}
