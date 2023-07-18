import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GamesService } from './services/games.service';
import { GamesController } from './controllers/games.controller';

@Module({
  imports: [HttpModule],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
