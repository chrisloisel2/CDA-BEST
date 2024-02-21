import { Injectable } from '@angular/core';
import axios from 'axios';
import { User, UserDTO } from '../Models/User.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	CurrentUser! : User;

	Url = 'http://localhost:3050';

	constructor(public http : HttpClient) { }

	login(user : any) {
		return this.http.post<User>(this.Url + '/user/login', user).pipe(
			tap((response) => {
				this.CurrentUser = response;
				})
		)
	}

	signin(user : UserDTO) {
		return this.http.post(this.Url + '/user', user);
	}
}
