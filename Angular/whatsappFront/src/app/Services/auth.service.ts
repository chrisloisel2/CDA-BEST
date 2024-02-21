import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	CurrentUser: User | undefined | null;

  constructor() { }

	login(username: string | undefined | null, password: string | undefined | null) {
		axios.post('http://localhost:3050/user/login', {
			username: username,
			password: password
			}).then((res) => {
				this.CurrentUser = res.data;
			}
		).finally(() => {
			return this.CurrentUser;
		}
		);

	}

	logout() {
		console.log('logout');
	}

	signin(username: string | undefined | null, password: string | undefined | null) {
		axios.post('http://localhost:3050/user/login', {
			username: username,
			password: password
			}).then((res) => {
				this.CurrentUser = res.data;
			}
		).finally(() => {
			return this.CurrentUser;
		}
		);
	}

}
