import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnChanges, OnInit {
	constructor(public user : UserService) {
		this.user.getMsgList();
	 }

	ngOnInit() {
		console.log("OnInit");
	}

	ngOnChanges() {
		console.log("OnChanges");
	}
}
