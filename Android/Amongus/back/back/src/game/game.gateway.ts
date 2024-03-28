import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer() server: Server;

  constructor(private gameService: GameService) {}


  @SubscribeMessage('connectPlayer')
  handleConnection(client: any, @MessageBody() data: { userId: string }) {
    this.gameService.connectUser(data.userId);
    this.server.emit('playerConnected', { userId: data.userId });
  }

  @SubscribeMessage('disconnectPlayer')
  handleDisconnect(@MessageBody() data: { userId: string }) {
    this.gameService.disconnectUser(data.userId);
    this.server.emit('playerDisconnected', { userId: data.userId });
  }

  @SubscribeMessage('nextTurn')
  handleNextTurn() {
    this.gameService.nextTurn();
    this.server.emit('nextTurn');
  }

  @SubscribeMessage('vote')
  handleVote(@MessageBody() data: { voterId: string; votedId: string }) {
    this.gameService.vote(data.voterId, data.votedId);
    this.server.emit('voteReceived', data);
    if (this.gameService.checkVotesCompletion()) {
      const results = this.gameService.processVotes();
      this.server.emit('endVote', results);
      this.gameService.resetVotes();
      this.gameService.nextTurn();
    }
  }

  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: { userId: string; message: string }) {
    this.server.emit('messageReceived', data);
  }

  @SubscribeMessage('killPlayer')
  handleKill(@MessageBody() data: { userId: string }) {
    this.gameService.killUser(data.userId);
    this.server.emit('playerKilled', { userId: data.userId });
  }
}
