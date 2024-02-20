import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/Schema/User.Schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'User', schema: userSchema },
		]),
	],
  providers: [UserService],
  controllers: [userController]
})
export class UserModule {}
