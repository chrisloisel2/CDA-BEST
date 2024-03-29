import { Injectable } from '@nestjs/common';
import { send } from 'process';
import { GameGateway } from './game.gateway';

@Injectable()
export class GameService {
  private users: any[] = [];
  private votes: Map<string, string> = new Map();
  private turn = 0;
  private roles: string[] = ['Loup Garou', 'vilageois', 'vilageois', 'vilageois'];
  private gameGateway: GameGateway;


  GameService(gameGateway : GameGateway) {
	this.gameGateway = gameGateway;
  }

  connectUser(userId: string) {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.connected = true;
    } else {
		// Ajout d'un role pour chaque joueur
      const role = this.roles.pop();
      this.users.push({ id: userId, connected: true, alive: true, votesReceived: 0 });
    }
  }


  numberOfAlivePlayers() {
	return this.users.filter(user => user.alive).length;
  }

  numberOfAliveWolves() {
	return this.users.filter(user => user.alive && user.role === 'Loup Garou').length;
  }


  disconnectUser(userId: string) {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.connected = false;
    }
  }

  nextTurn() {
    this.turn++;
    this.votes.clear();
    this.users.forEach(user => user.votesReceived = 0);
  }

  vote(voterId: string, votedId: string) {
    this.votes.set(voterId, votedId);
    const votedUser = this.users.find(user => user.id === votedId);
    if (votedUser) {
      votedUser.votesReceived++;
    }
  }

  checkVotesCompletion() {
    const connectedUsers = this.users.filter(user => user.connected);
    return this.votes.size === connectedUsers.length;
  }

  processVotes() {
	let userId : string;
    let maxVotes = 0;
    this.users.forEach(user => {
      if (user.votesReceived > maxVotes) {
        maxVotes = user.votesReceived;
      }
    });
    this.users.forEach(user => {
      if (user.votesReceived === maxVotes) {
        userId = user.id;
        user.alive = false; // Assuming the user with the most votes is eliminated
      }
    });
    return userId;
  }

  resetVotes() {
    this.votes.clear();
    this.users.forEach(user => user.votesReceived = 0);
  }

  killUser(userId: string) {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.alive = false;
    }
  }
}
