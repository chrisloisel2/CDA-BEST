import { Component } from '@angular/core';
import { TotoComponent } from '../toto/toto.component';
import { User } from '../../Model/User.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TotoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users : User[] = [
	{nom: 'christopher', prenom: 'loisel', age: 25, admin: true},
	{nom: 'toto', prenom: 'toto', age: 5, admin: false},
	{nom: 'tata', prenom: 'tata', age: 2, admin: false},
	{nom: 'titi', prenom: 'titi', age: 5, admin: false}
  ]
}
