import { User } from "./User.model";

export interface Message{
	message: string;
	sender : User;
	receiver : User;
}
