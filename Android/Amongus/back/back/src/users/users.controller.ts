import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './Models/UserSchema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async findAll(): Promise<User[]> {
	  return this.usersService.findAll();
	}

	@Post('register')
	async register(@Body() body: any) {
	  return this.usersService.register(body.name, body.password);
	}

	@Get('connected')
	async findConnected(): Promise<User[]> {
	  return this.usersService.findConnected();
	}

	@Post('disconnect')
	async disconnect(@Body() body: any) {
	  return this.usersService.disconnect(body.name);
	}

	@Post('login')
	async login(@Body() body: any) {
	  return this.usersService.login(body.name, body.password);
	}
}
