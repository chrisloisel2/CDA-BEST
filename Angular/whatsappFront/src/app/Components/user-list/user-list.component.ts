import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../Models/User.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

	constructor(public users: UserService) { }

	ngOnInit() {
		this.users.getUserList().subscribe();
	}

	onClick(user : User)
	{
		console.log("User selected : " + user._id);
		this.users.UserSelected = user;
		this.users.getMsgList().subscribe();
	}
}
