import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../Models/User.model';
import { AuthService } from './auth.service';
import { Message } from '../Models/Message.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth : AuthService, private http : HttpClient) { }

  MsgList : Message[] = [];
  UserList : User[] = [];
  UserSelected : User | undefined;

  getUserList() : Observable<User[]> {
	return this.http.get<User[]>('http://localhost:3050/user').pipe(
		tap((users : User[]) => this.UserList = users)
	)
  }


  getMsgList() : Observable<Message[]> {
	return this.http.get<Message[]>('http://localhost:3050/message/' + this.auth.CurrentUser?._id + '/' + this.UserSelected?._id).pipe(
		tap((msg : Message[]) => this.MsgList = msg)
	)
}

  sendMessage(msg : string)
  {
	let message : Message = {
		message : msg,
		sender : this.auth.CurrentUser!,
		receiver : this.UserSelected!
	}

	this.http.post('http://localhost:3050/message', message).pipe(
		tap(()=> this.getMsgList().subscribe())
	).subscribe();
  }
}
