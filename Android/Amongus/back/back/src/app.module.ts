import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [
	UsersModule,
	GameModule,
],
})
export class AppModule {}
