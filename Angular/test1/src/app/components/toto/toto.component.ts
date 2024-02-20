import { Component, Input } from '@angular/core';
import { User } from '../../Model/User.model';
import { CommonModule } from '@angular/common';
import { CptComponent } from '../cpt/cpt.component';

@Component({
  selector: 'app-toto',
  standalone: true,
  imports: [CommonModule, CptComponent],
  templateUrl: './toto.component.html',
  styleUrl: './toto.component.css'
})
export class TotoComponent {
  @Input()
  user!: User;
  visible : boolean = true;

  buttonClicked(nb : number)
  {
	console.log('Composant TOTO : button clicked : ' + nb);
	this.visible = !this.visible;
  }

}
