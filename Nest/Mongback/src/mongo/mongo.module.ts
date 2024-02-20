import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './UserSchema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class MongoModule {}
