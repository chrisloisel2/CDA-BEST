import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './Models/UserSchema';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UserService) {}

	@Get()
	async findAll(): Promise<User[]> {
	  return this.usersService.getUsers();
	}

	@Post('register')
	async register(@Body() body: any) {

	  let user : User = {
		_id: null,
		name: body.name,
		password: body.password,
		connected: false,
		role : "",
		votes: [],
		isAlive: true,
	  }

	  return this.usersService.createUser(user);
	}

	@Get('connected')
	async findConnected(): Promise<User[]> {
	  return this.usersService.findConnected();
	}

	@Post('disconnect')
	async disconnect(@Body() body: User) {
	  return this.usersService.disconnect(body._id);
	}

	@Post('login')
	async login(@Body() body: any) {
	  return this.usersService.login(body.name, body.password);
	}
}
