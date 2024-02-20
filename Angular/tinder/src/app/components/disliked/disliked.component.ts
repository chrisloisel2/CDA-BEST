import { Component, Input } from '@angular/core';
import { User } from '../../Model/Users.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disliked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disliked.component.html',
  styleUrl: './disliked.component.css'
})
export class DislikedComponent {
	@Input()
	dislikedUsers : User[] = [];
}
