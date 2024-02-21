import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	CurrentUser: User | undefined | null;

  constructor() { }

	login(username: string | undefined | null, password: string | undefined | null) : Promise<any> {
		return axios.post('http://localhost:3050/user/login', {
			username: username,
			password: password
			}).then((res) => {
				this.CurrentUser = res.data;
			}
		);
	}

	logout() {
		console.log('logout');
	}

	signin(username: string | undefined | null, password: string | undefined | null) {
		return axios.post('http://localhost:3050/user/signin', {
			username: username,
			password: password
			}).then((res) => {
				this.CurrentUser = res.data;
			}
		);	}

}
