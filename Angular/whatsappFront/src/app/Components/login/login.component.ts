import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

	constructor(private fb: FormBuilder, private auth : AuthService) { }

	// Creer mon formulaire de login avec FormBuilder

	formLogin =  this.fb.group(
		{
			username: [''],
			password: ['']
		}
	)

	onSubmit() {
		console.log(this.formLogin.value);
		this.auth.login(this.formLogin.value.username, this.formLogin.value.password).then((res) => {
			console.log(res);
		})
	}
}
