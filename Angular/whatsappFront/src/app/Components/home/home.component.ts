import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserListComponent, MessageListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
