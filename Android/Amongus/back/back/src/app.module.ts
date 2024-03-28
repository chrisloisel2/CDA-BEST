import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';

@Module({
  imports: [
	UsersModule,
	GameModule,
],
  providers: [GameService],
})
export class AppModule {}
