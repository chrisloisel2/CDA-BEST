import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cpt',
  standalone: true,
  imports: [],
  templateUrl: './cpt.component.html',
  styleUrl: './cpt.component.css'
})
export class CptComponent {
	value = 0;
	// Creer un EventEmitter
	@Output()
	buttonClicked = new EventEmitter<number>();

	increment() {
		console.log('Composant CPT : button clicked');

		this.value++;
		this.buttonClicked.emit(this.value);
	}
}
