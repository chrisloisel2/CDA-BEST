import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnChanges, OnInit {
	constructor(public user : UserService) {
		this.user.getMsgList();
	 }

	msg : string = "";

	ngOnInit() {
		console.log("OnInit");
	}

	ngOnChanges() {
		console.log("OnChanges");
	}

	sendMessage()
	{
		console.log("Sending message");
		console.log(this.msg);
		this.user.sendMessage(this.msg);
		this.msg = "";
	}
}
