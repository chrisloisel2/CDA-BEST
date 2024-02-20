import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { MessageService } from './message.service';

@WebSocketGateway()
export class MessageGateway {
	@WebSocketServer()
	server: Server;

	constructor(private  messages : MessageService) {}

	emitMessage(message: string): void {
		this.server.emit('Message Recu', message);
	}

	@SubscribeMessage('get_messages')
	handleMessage(@MessageBody() senderid: string, @MessageBody() receiverId : string ): void {
		this.messages.getMessagesByUser(senderid, receiverId).then((messages) => {
			console.log(messages);
			this.server.emit('receive_message', messages);
		});
	}
}
