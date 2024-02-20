import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Model/Users.Model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
	@Input()
	user! : User

	@Output()
	likeEmitter = new EventEmitter<void>();

	@Output()
	dislikeEmitter = new EventEmitter<void>();

	like() {
		console.log('Like')
		this.likeEmitter.emit();
	}

	dislike() {
		console.log('Dislike')
		this.dislikeEmitter.emit();
	}
}
