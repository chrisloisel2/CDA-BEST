import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';
import User from 'src/users/Models/UserSchema';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly GameService: GameService) {}


  handleConnection(client: WebSocket, ...args: any[]) {
    console.log('Client connected');
  }

  handleDisconnect(client: WebSocket) {
    console.log('Client disconnected');
  }

  @SubscribeMessage('message')
  handleMessage(client: WebSocket, @MessageBody() payload: string): void {
	console.log('Message received:', payload);
	this.server.clients.forEach((client: WebSocket) => {
	  if (client.readyState === WebSocket.OPEN) {
		client.send(`Message received: ${payload}`);
	  } else {
		console.log(`Skipping client as the connection is not open (readyState: ${client.readyState})`);
	  }
	});
  }

  @SubscribeMessage('start')
  handleStartUser(client: WebSocket, @MessageBody() payload: User): void {
	console.log('User connecté:', payload);
	this.server.clients.forEach((client: WebSocket) => {
	  if (client.readyState === WebSocket.OPEN) {
		client.send(GameService);
	  } else {
		console.log(`Skipping client as the connection is not open (readyState: ${client.readyState})`);
	  }
	});
  }
}
