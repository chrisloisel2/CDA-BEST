import { Channel } from "./Channel.model";
import { User } from "./User.model";

export interface Message {
	_id: string; // Identifiant du canal
	content: string;
	sender: User;
	channel: Channel;
	timestamp: Date;
  };
