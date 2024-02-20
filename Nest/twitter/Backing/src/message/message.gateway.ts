import { Body } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { MessageService } from './message.service';

@WebSocketGateway(
	  {
		cors: {
			origin: '*',
			credentials: false,
		},
  },
)
export class MessageGateway {

  @WebSocketServer() server: Server;

	constructor(private readonly messageService: MessageService) {}

  clicks = 0;

  message(sender: string, receiver: string)
  {
	this.messageService.getMessagesByUser(sender).then((messages) => {
		this.server.emit('message', messages);
	});
  }


  @SubscribeMessage('message')
  click(@Body() sender: string, @Body() receiver: string)
  {
	this.message(sender, receiver);
  }


}
