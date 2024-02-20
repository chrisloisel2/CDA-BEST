import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './Model/User.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<IUser[]> {
	return this.userService.getUsers();
  }

  @Post('login')
  async login(@Body() user : IUser): Promise<IUser> {
	return this.userService.login(user);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<IUser> {
	return this.userService.getUser(id);
  }

  @Post()
  async create(@Body() User: IUser): Promise<IUser> {
	return this.userService.createUser(User);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() User: IUser): Promise<IUser> {
	return this.userService.updateUser(id, User);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<IUser> {
	return this.userService.deleteUser(id);
  }
}
