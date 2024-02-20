import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './Schema/user.schema';

@Module({
  imports: [
	MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
