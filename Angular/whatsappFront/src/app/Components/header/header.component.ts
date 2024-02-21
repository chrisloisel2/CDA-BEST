import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
	constructor(public auth : AuthService) { }
}
