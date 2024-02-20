import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../../Model/Users.Model';
import { CardComponent } from '../card/card.component';
import { LikedComponent } from '../liked/liked.component';
import { DislikedComponent } from '../disliked/disliked.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, LikedComponent, DislikedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	users : User[] = [
		{ id: 1, name: 'John', surname: 'Doe', age: 25 },
		{ id: 2, name: 'Jane', surname: 'Doe', age: 22 },
		{ id: 3, name: 'Tom', surname: 'Smith', age: 30 },
		{ id: 4, name: 'Anna', surname: 'Smith', age: 28 },
		{ id: 5, name: 'Mike', surname: 'Brown', age: 35 },
		{ id: 6, name: 'Liz', surname: 'Brown', age: 32 }
	];

	likedUsers : User[] = [];

	dislikedUsers : User[] = [];

	selectedUser : number = 0;

	onLike() {
		console.log('Like')
		this.likedUsers.push(this.users[this.selectedUser]);
		this.selectedUser++;
	}

	onDislike() {
		console.log('Dislike')
		this.dislikedUsers.push(this.users[this.selectedUser]);
		this.selectedUser++;
	}
}
