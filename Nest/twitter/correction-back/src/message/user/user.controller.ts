import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User } from './Model/User.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
	return this.userService.getUsers();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<User> {
	return this.userService.getUser(id);
  }

  @Post()
  async create(@Body() User: User): Promise<User> {
	return this.userService.createUser(User);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() User: User): Promise<User> {
	return this.userService.updateUser(id, User);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
	return this.userService.deleteUser(id);
  }

  @Post('login')
  async login(@Body() User: User): Promise<User> {
	console.log(User);
	return this.userService.login(User);
  }
}
