import { Controller, Get, Param } from '@nestjs/common';
import { GameDetailsService } from '../services/game-details.service';

@Controller('gameDetails')
export class GameDetailsController {
  constructor(private readonly gameDetailsService: GameDetailsService) {}

  @Get(':gameId')
  getDetailsByGame(@Param('gameId') gameId: string): Promise<any> {
    return this.gameDetailsService.findDetailsByGame(gameId);
  }
}
