import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';

@Module({
  imports: [
	UsersModule,
	GameModule,
],
  controllers: [GameController],
  providers: [GameService],
})
export class AppModule {}
