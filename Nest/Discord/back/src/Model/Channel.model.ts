import { Message } from "./Message.model";

export interface Channel {
	_id: string; // Identifiant du canal
	name: string; // Nom du canal
	description: string; // Description du canal (facultatif)
	messages: Message[]; // Liste des messages du canal
  };
