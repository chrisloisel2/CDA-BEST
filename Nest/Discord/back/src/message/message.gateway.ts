import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "dgram";
import { Server } from "http";

@WebSocketGateway()
export class MessageGateway {
	@WebSocketServer()
	server: Server;

	@SubscribeMessage('message')
	onMessage(client: Socket, message: string): void {
		this.server.emit('message', message);
	}
}
