import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() user : User): User {
    this.appService.addUser(user).then((user) => {
		return user;
	});
	return user;
  }
}
