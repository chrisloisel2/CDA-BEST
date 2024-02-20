import { Component, Input } from '@angular/core';
import { User } from '../../Model/Users.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liked.component.html',
  styleUrl: './liked.component.css'
})
export class LikedComponent {
	@Input()
	likedUsers : User[] = [];
}
