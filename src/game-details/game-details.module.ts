import { Module } from '@nestjs/common';
import { GameDetailsController } from './controllers/game-details.controller';
import { GameDetailsService } from './services/game-details.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GameDetailsController],
  providers: [GameDetailsService],
})
export class GameDetailsModule {}
