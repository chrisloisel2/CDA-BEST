import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  private users: any[] = [];
  private votes: Map<string, string> = new Map();
  private turn = 0;

  connectUser(userId: string) {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.connected = true;
    } else {
      this.users.push({ id: userId, connected: true, alive: true, votesReceived: 0 });
    }
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
    const results = [];
    let maxVotes = 0;
    this.users.forEach(user => {
      if (user.votesReceived > maxVotes) {
        maxVotes = user.votesReceived;
      }
    });
    this.users.forEach(user => {
      if (user.votesReceived === maxVotes) {
        results.push(user.id);
        user.alive = false; // Assuming the user with the most votes is eliminated
      }
    });
    return results;
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
