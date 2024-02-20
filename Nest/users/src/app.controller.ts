import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './User.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body()user : IUser): Promise<IUser> {
	return this.appService.addUser(user);
  }
}
