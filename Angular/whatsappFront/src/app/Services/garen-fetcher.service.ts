import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User.model';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarenFetcherService {

  constructor(private http : HttpClient) {
  }

  getUsers() : Observable<User[]>
  {
	return this.http.get<User[]>('http://localhost:3050/user').pipe(
		filter((users : User[]) => users.length > 2),
	);
  }
}
