import { IUser } from "src/user/Model/User.model";

export interface IMessage{
	message: string;
	sender : IUser;
	receiver : IUser;
}
