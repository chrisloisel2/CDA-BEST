import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { Server } from 'http';

@WebSocketGateway({
	cors: {
		origin: '*',
		credentials: false,
	  },
  })
export class MessageGateway {
	@WebSocketServer() server : Server;


  @SubscribeMessage('click')
  click()
  {
  }


}



// @SubscribeMessage('pouet')
// fctbarbatruc(client: any, payload: { senderId: string, receiverId: string}) {
//   console.log(client);

//   this.messageService.getMessagesByUser(payload.senderId, payload.receiverId).then((messages) => {
// 	  this.server.emit('voicilesmessages', messages);
//   }).catch((err) => {
// 	  console.log(err);
//   });
// }

// @SubscribeMessage('message')
// handleMessage(client: any, payload: any): string {
//   MessageGateway.click++;
//   console.log(payload);
//   // Execution d'une fonction du service
//   this.server.emit('clickage', MessageGateway.click);
//   return payload;
// }
