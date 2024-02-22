import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { User, UserDTO } from '../../Models/User.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

	constructor(private fb: FormBuilder, private auth : AuthService, public nav : Router) { }

	// Creer mon formulaire de login avec FormBuilder

	formLogin =  this.fb.group(
		{
			username: [''],
			password: ['']
		}
	)

	onSubmit() {
		this.auth.login(this.formLogin.value).subscribe()
		this.nav.navigateByUrl('/');
	}
}
