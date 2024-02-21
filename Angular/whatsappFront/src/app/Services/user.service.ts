import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../Models/User.model';
import { AuthService } from './auth.service';
import { Message } from '../Models/Message.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth : AuthService) { }

  MsgList : Message[] = [];
  UserList : User[] = [];
  UserSelected : User | undefined;

  getUserList() {
	axios.get('http://localhost:3050/user').then((response) => {
		this.UserList = response.data;
  });
  }


  getMsgList() {
	axios.get('http://localhost:3050/message/' + this.auth.CurrentUser?._id + '/' + this.UserSelected?._id).then((response) => {
		this.MsgList = response.data;
		console.log(this.MsgList);
	});
}
}
